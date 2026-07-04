/* Service worker Clarté — installation PWA + usage hors-ligne.
   Ne collecte rien. Bump CACHE à chaque mise à jour importante. */
const CACHE = 'clarte-b25';
const ASSETS = [
  'index.html',
  'le-controle.html',
  'documents.html',
  'jurisprudence.html',
  'mentions.html',
  'politique-confidentialite.html',
  'manifest.webmanifest',
  'fonts/fonts.css',
  'fonts/manrope-latin.woff2',
  'fonts/manrope-latinext.woff2',
  'fonts/fraunces-latin.woff2',
  'fonts/fraunces-latinext.woff2',
  'fonts/jetbrainsmono-latin.woff2',
  'fonts/jetbrainsmono-latinext.woff2',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()).catch(() => {}));
});
// La page peut demander l'activation immédiate d'une nouvelle version.
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // ne pas intercepter les tiers (docx CDN, etc.)
  // Réseau d'abord pour les pages HTML (fraîcheur), cache en secours (hors-ligne)
  if (e.request.mode === 'navigate' || (e.request.headers.get('accept') || '').indexOf('text/html') > -1) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('index.html')))
    );
    return;
  }
  // Cache d'abord pour les assets (polices, icônes)
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
    const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
    return res;
  }).catch(() => hit)));
});
