# Clarté — Conformité RGPD & AI Act

Site vitrine + simulateur « Le Contrôle » pour la prestation de mise en conformité
**RGPD + AI Act** destinée aux TPE/PME.

- **Éditeur :** RTH NETGOCE — Léa Chikhaoui-Auguste
- **Contact :** r.t.h@orange.fr · 06 61 47 61 65 · 49 rue de Douai, 75009 Paris
- **SIRET :** 444 244 776 00019

> **Concept (idée de Fable) :** le visiteur passe un *contrôle CNIL / AI Act simulé*
> de son entreprise en 3 minutes → verdict + risque en euros → offre → prise de RDV.
> Le site se veut « preuve par l'exemple » (transparence radicale, page miroir).

## Les 2 fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | **Page de vente premium** : hero, enjeux, 2 piliers RGPD/IA, timeline AI Act, méthode, offre (3 formules), FAQ, contact. |
| `le-controle.html` | **Le test interactif** : convocation → quiz (RGPD + AI Act) → verdict + exposition en € → page « miroir ». |

Les deux pages sont **autonomes** (un seul fichier chacune, HTML/CSS/JS inline).

## Les 3 formules

Essentiel **dès 890 € HT** · Conformité **dès 2 400 € HT** · Sérénité **dès 3 900 € HT + suivi**.
(Tarifs indicatifs.)

## Points d'attention connus (non corrigés — voir avec l'éditeur)

- **Polices Google Fonts distantes** (`fonts.googleapis.com` / `gstatic.com`) : cela
  transmet l'IP du visiteur à Google (jugé non conforme au RGPD, LG München 2022).
  Comme la page « miroir » affiche « 0 donnée envoyée / transparence radicale »,
  il est recommandé d'**héberger les polices en local** pour tenir la promesse.
- **Pas de lien entre les 2 pages** (`index.html` ⇄ `le-controle.html`) : à câbler
  si le parcours doit être continu.
- **Pages légales** : les mentions légales et la politique de confidentialité sont
  évoquées mais n'existent pas encore en pages dédiées.

## Mise en ligne

Site 100 % statique → GitHub Pages, Netlify ou tout hébergeur de fichiers.
Aucune base de données requise.
