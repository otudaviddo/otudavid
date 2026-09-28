# OTU DAVID — site vitrine

Site statique (Next.js en mode export) — compatible avec un hébergement
gratuit adapté à un usage commercial, comme Cloudflare Pages.

## Lancer en local
    npm install
    npm run dev        # http://localhost:3000

## Où mettre les URLs Doctoranytime
Fichier : `src/config/site.ts` (tout en haut)

    export const OSTEO_DOCTORANYTIME_URL = "…";
    export const KINE_DOCTORANYTIME_URL  = "…";

Ces deux valeurs alimentent la homepage, /osteo et /kine (donc les QR codes).

## Construire le site (fichiers statiques)
    npm run build

Cette commande génère un dossier `out/` contenant le site fini, en simples
fichiers HTML/CSS/JS. C'est ce dossier que Cloudflare Pages publie.

## Déployer sur Cloudflare Pages (gratuit, usage commercial autorisé)
1. Va sur pages.cloudflare.com et crée un compte gratuit.
2. Clique sur "Create a project" puis "Connect to Git", et autorise
   Cloudflare à accéder à ton dépôt GitHub `otudavid`.
3. Choisis le dépôt `otudavid` et clique sur "Begin setup".
4. Dans les réglages de build :
   - Framework preset : Next.js (Static HTML Export)
   - Build command : npm run build
   - Build output directory : out
5. Clique sur "Save and Deploy". Au bout d'une ou deux minutes tu obtiens
   une adresse du type otudavid.pages.dev.
6. Pour brancher ton domaine : dans le projet Cloudflare Pages, va dans
   "Custom domains" puis "Set up a custom domain", tape otudavid.be et suis
   les instructions DNS affichées.

## QR codes
Une fois le domaine branché :
- QR Ostéopathie    -> https://otudavid.be/osteo
- QR Kinésithérapie -> https://otudavid.be/kine
