# OTU DAVID — site vitrine

## Lancer en local
    npm install
    npm run dev        # http://localhost:3000

## Où mettre les URLs Doctoranytime
Fichier : `src/config/site.ts` (tout en haut)

    export const OSTEO_DOCTORANYTIME_URL = "…";
    export const KINE_DOCTORANYTIME_URL  = "…";

Ces deux valeurs alimentent la homepage, /osteo et /kine (donc les QR codes).

## Déployer (Vercel)
1. Pousser le dossier sur GitHub.
2. Sur vercel.com → New Project → importer le dépôt → Deploy.
3. Domains → ajouter votre nom de domaine.
4. Variable d'environnement `NEXT_PUBLIC_SITE_URL=https://votredomaine.be` (pour Open Graph).
QR codes : https://votredomaine.be/osteo et https://votredomaine.be/kine
