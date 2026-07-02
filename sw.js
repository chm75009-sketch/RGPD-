/* Service worker minimal — mise en cache locale pour usage hors-ligne.
   Ne collecte rien, ne contacte aucun serveur tiers. */
const CACHE = 'clarte-rgpd-v1';
const ASSETS = [
  'index.html',
  'le-controle.html',
  'politique-confidentialite.html',
  'mentions.html',
  'manifest.webmanifest',
  'favicon.svg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => hit))
  );
});
