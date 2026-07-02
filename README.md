# Clarté — Conformité RGPD & AI Act

Prestation de mise en conformité **RGPD + AI Act** pour les TPE/PME (tous secteurs).
Site vitrine + simulateur « Le Contrôle ».

- **Éditeur :** RTH NETGOCE — Léa Chikhaoui-Auguste
- **Contact :** r.t.h@orange.fr · 06 61 47 61 65 · 49 rue de Douai, 75009 Paris
- **SIRET :** 444 244 776 00019

> **Le concept (idée de Fable) :** le visiteur passe un *contrôle CNIL/AI Act simulé*
> de son entreprise en 3 minutes. Puis le site lui-même **prouve** la conformité
> qu'il vend : zéro cookie, rien envoyé, page « ce qu'on sait de vous : rien ».

## Les 2 fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | **Page de vente** : accroche « Vous venez de recevoir un contrôle », méthode R‑G‑P‑D, 3 formules, prise de RDV. |
| `le-controle.html` | **Le test interactif** : simulateur (10 questions) → verdict + risque en € → page « miroir ». |

Fichiers **autonomes** : aucune dépendance externe (pas de Google Fonts, pas de CDN,
pas d'analytics, pas de cookie). Tout est inline/local, le simulateur tourne 100 %
dans le navigateur.

> ⚠️ **Ne jamais ajouter** de `<script src="https://…">`, de police Google Fonts,
> ni d'outil de mesure : la page « miroir » deviendrait mensongère (le compteur
> « requêtes tierces » ne serait plus à 0).

## Le parcours (« Le Contrôle »)

1. **Accueil** (`index.html`) — « Vous venez de recevoir un contrôle. »
2. **Simulateur** (`le-controle.html`) — 10 questions d'inspecteur (RGPD + AI Act).
3. **Verdict** — score de conformité, niveau de risque, exposition en euros.
4. **Le miroir** — « On ne sait rien de vous » : compteurs vérifiés en direct (0 cookie, 0 tracker, 0 requête tierce).
5. **Offre** — 3 formules + prise de rendez-vous.

## Méthode R · G · P · D

**R**egarder (diagnostic) · **G**uider (plan d'action) · **P**rotéger (mise en conformité) · **D**éfendre (prêt en cas de contrôle).

## Les 3 formules (tarifs indicatifs, « à partir de »)

| Formule | Prix | Positionnement |
|---|---|---|
| Essentiel | dès **890 € HT** | diagnostic RGPD + IA |
| Conformité | dès **2 400 € HT** | **le plus populaire** — mise en conformité complète |
| Sérénité | dès **3 900 € HT** | + suivi dans la durée |

Modifiables dans `index.html`, section « OFFRE ».

## Personnalisation

Objet `CONFIG` en haut du `<script>` de `index.html` (déjà renseigné) :
`contactEmail`, `contactTel`, `humain`, `humainRole`, `bookingUrl` (optionnel).

> Pour un agenda de RDV, éviter Calendly/Cal.com hébergés (scripts tiers = trackers).
> Privilégier le `mailto` par défaut ou un agenda auto-hébergé.

## Mise en ligne

Site 100 % statique → GitHub Pages, Netlify ou tout hébergeur de fichiers.
Aucune base de données requise.

## `docs/`

Modèles de documents RGPD réutilisables (registre, procédures, durées de conservation)
pour les livrables clients.
