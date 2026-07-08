# À faire — Clarté (pense-bête interne, non publié)

## 🔜 Capture des leads du test « Le Contrôle » (reporté — à faire plus tard)

**État actuel :** aucune capture. Les coordonnées saisies (nom, e-mail, téléphone, entreprise, score)
restent **dans le navigateur du visiteur** (localStorage) et servent uniquement à préremplir ses documents.
Rien n'est envoyé automatiquement à RTH NETGOCE.

**Objectif :** recevoir automatiquement chaque lead généré par le test.

**Répartition du travail :**
- Claude : tout le code (formulaire → envoi), le branchement, les tests, la mise à jour de la
  politique de confidentialité (re-déclaration du sous-traitant), le déploiement.
- Léa (une seule fois, ~10 min) : créer le « récepteur » qui lui appartient et coller **une seule
  URL/clé** — Claude ne peut pas créer le compte ni manipuler les identifiants (c'est le responsable
  de traitement qui les détient).

**Options discutées (choix à faire) :**
1. **Google Sheet (recommandé)** — leads dans un tableur Google + alerte e-mail. Gratuit, illimité,
   données maîtrisées. Google redevient sous-traitant US → à re-déclarer dans la politique.
2. **Service de formulaire (Formspree / Web3Forms)** — leads par e-mail via un compte gratuit + une clé.
   Rapide, mais réintroduit un tiers US.
3. **E-mail simple (mailto)** — zéro compte, zéro tiers, mais le visiteur doit cliquer « Envoyer » →
   déperdition.

**Point de vigilance conformité :** dès qu'un sous-traitant (Google / Formspree) est ajouté, remettre à
jour `politique-confidentialite.html` (§4 sous-traitants) et, le cas échéant, la mention sous le formulaire.

---
_Dernière note : 8 juillet 2026._
