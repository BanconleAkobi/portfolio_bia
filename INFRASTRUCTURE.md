# Infrastructure

État de la configuration technique du portfolio, côté build, hébergement et
livraison. Ne couvre pas le contenu ni le design.

Relevé le 31 juillet 2026, sur le commit `1a03cbd`.

---

## 1. Vue d'ensemble

Le site est **entièrement statique**. Il n'y a ni serveur applicatif, ni base de
données, ni API, ni processus qui tourne quelque part. Astro génère 27 fichiers
HTML au moment du build, Netlify les sert depuis son CDN, et c'est tout.

```
dépôt GitHub  ──push main──▶  build Netlify  ──▶  CDN Netlify  ──▶  visiteur
BanconleAkobi                 npm run build       27 pages HTML
/portfolio_bia                Node 22             statiques
```

Conséquence directe : aucune surface d'attaque côté serveur, aucun correctif de
sécurité à appliquer en production, aucun coût d'exécution. Le revers est que
toute fonctionnalité dynamique doit passer par un service tiers, ce qui est le
cas du formulaire de contact.

---

## 2. Chaîne de build

| Élément | Version | Rôle |
|---|---|---|
| Node.js | `>=22.12.0` (22.22.1 en local, 22 sur Netlify) | Environnement de build |
| Astro | 6.0.7 | Générateur de site statique |
| Vite | 7.3.1 | Bundler, embarqué par Astro |
| Tailwind CSS | 4.2.2 | Via `@tailwindcss/vite` |
| sharp | 0.34.5 | Traitement des images au build |
| TypeScript | config `astro/tsconfigs/strict` | Typage des données et composants |

Commandes :

```bash
npm run dev      # serveur de développement local
npm run build    # génère dist/
npm run preview  # sert dist/ pour vérification avant push
```

Le build prend environ 3 secondes et produit 27 pages.

### Dépendances déclarées mais inutilisées

`gsap` (3.14.2) et `lucide-astro` (0.556.0) figurent dans `package.json` mais ne
sont jamais importés. GSAP est chargé depuis un CDN, pas depuis `node_modules`,
et les icônes sont écrites en SVG à la main. Les retirer allégerait
l'installation sans rien changer au site.

### Tailwind, en pratique

`@tailwindcss/vite` est actif et `@import "tailwindcss"` est présent, mais
**aucune classe utilitaire Tailwind n'est utilisée** dans les gabarits. Toute la
mise en forme passe par du CSS écrit à la main : des variables dans
`src/styles/global.css` et un bloc `<style>` scopé par composant. Tailwind ne
sert donc en pratique qu'à son bloc `@theme`.

---

## 3. Hébergement et déploiement

**Netlify**, configuration dans `netlify.toml`.

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

Le déploiement est automatique : tout push sur `main` déclenche un build et une
mise en production. Il n'y a pas de CI séparée, pas de tests, pas d'étape de
validation. Le build Netlify est le seul garde-fou : s'il échoue, l'ancienne
version reste en ligne.

Les branches autres que `main` produisent un *deploy preview* sur une URL
distincte, sans toucher à la production.

---

## 4. Routage

Site bilingue, deux arbres de routes parallèles. Configuration dans
`astro.config.mjs` :

```js
i18n: {
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
  routing: { prefixDefaultLocale: true },
}
```

`prefixDefaultLocale: true` signifie que le français est préfixé lui aussi : il
n'existe pas de page à la racine, tout vit sous `/fr/` ou `/en/`.

```
/fr/            /en/              accueil, page unique
/fr/about       /en/about
/fr/projects    /en/projects
/fr/blog        /en/blog
/fr/blog/:slug  /en/blog/:slug    8 articles, générés par getStaticPaths
/fr/contact     /en/contact
```

### Redirections

Définies dans `netlify.toml`, elles rattrapent les URL sans préfixe de langue :

| De | Vers | Code |
|---|---|---|
| `/` | `/fr` | 301 `force = true` |
| `/about` | `/fr/about` | 301 |
| `/projects` | `/fr/projects` | 301 |
| `/blog` | `/fr/blog` | 301 |
| `/contact` | `/fr/contact` | 301 |

Un fichier `src/pages/index.astro` fait la même redirection côté Astro, en
filet, pour les cas où le site ne serait pas servi par Netlify.

---

## 5. En-têtes HTTP

### Sécurité, sur toutes les routes

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Le site n'envoie **pas de Content-Security-Policy**. Comme il charge des
scripts et des polices depuis deux domaines tiers, en ajouter une demanderait
de les autoriser explicitement. Voir la section 6.

### Cache

| Chemin | Durée | Remarque |
|---|---|---|
| `/*.js`, `/*.css` | 1 an, `immutable` | Sûr, Astro versionne les noms de fichiers |
| `/fonts/*` | 1 an, `immutable` | Règle inactive, aucune police n'est auto-hébergée |
| `/images/*` | 1 jour | Fichiers de `public/`, noms non versionnés |

Les images générées par Astro vivent sous `/_astro/` avec un hash dans le nom.
Elles ne sont couvertes par aucune règle explicite et retombent sur le cache par
défaut de Netlify. Comme leur nom change à chaque modification, elles pourraient
sans risque passer en `immutable` un an.

---

## 6. Dépendances externes au runtime

C'est le point le plus fragile de l'installation. Le site dépend de **deux
domaines tiers** pour s'afficher et s'animer correctement :

| Domaine | Ce qui en vient | Si indisponible |
|---|---|---|
| `fonts.googleapis.com` et `fonts.gstatic.com` | Bricolage Grotesque, Instrument Serif, JetBrains Mono | Repli sur les polices système, mise en page conservée mais identité visuelle perdue |
| `cdnjs.cloudflare.com` | GSAP 3.12.5 et ScrollTrigger | Les animations d'apparition ne se déclenchent pas |

Le second cas est couvert : `BaseLayout.astro` vérifie la présence de `gsap`
avant de l'utiliser et, à défaut, rend immédiatement visibles tous les éléments
qui devaient apparaître au scroll. Une panne du CDN dégrade l'animation, elle ne
casse pas la page.

Deux conséquences à connaître :

- **RGPD.** Google Fonts servi depuis `fonts.gstatic.com` transmet l'adresse IP
  du visiteur à Google. Des décisions de justice européennes ont jugé cette
  pratique non conforme sans consentement. Auto-héberger les polices supprime le
  problème et améliore le temps de chargement.
- **Version figée.** GSAP est en 3.12.5 dans le CDN alors que `package.json`
  déclare 3.14.2. Les deux ne sont pas synchronisés, puisque le paquet local
  n'est jamais importé.

---

## 7. Pipeline images

Deux régimes coexistent, selon l'emplacement du fichier.

### `src/assets/` — traité au build

Les images importées depuis `src/` passent par `astro:assets` et sharp. Elles
sont redimensionnées, converties en WebP, et leur nom reçoit un hash.

```
src/assets/voix/     photos d'éloquence, 7 fichiers
src/assets/logos/    logos des organisations, 7 fichiers
```

Résultat mesuré : **5,2 Mo de sources deviennent 296 Ko servis.**

Les composants les découvrent par `import.meta.glob`, ce qui permet d'ajouter un
fichier sans toucher au code. Le préfixe du nom fait le regroupement :
`insahdf-4.jpg` rejoint automatiquement le bloc du concours INSA.

Les SVG échappent à sharp et sont servis tels quels, déjà plus légers et plus
nets qu'un rendu matriciel.

### `public/images/` — copié tel quel

Aucun traitement. Le fichier part chez le visiteur exactement tel qu'il est dans
le dépôt. Contient les captures de projets et l'image Open Graph.

**5,8 Mo, soit 95 % du poids du site.** Détail en section 10.

---

## 8. Formulaire de contact

**Netlify Forms**, sans backend.

- Nom du formulaire : `contact`
- Présent sur 4 pages : les deux accueils et les deux pages Contact
- Même nom partout, donc Netlify agrège tout dans un seul formulaire

Mécanique :

| Élément | Rôle |
|---|---|
| `data-netlify="true"` | Signale le formulaire au robot de build |
| `<input type="hidden" name="form-name">` | Rattache la soumission au bon formulaire |
| `data-netlify-honeypot="bot-field"` | Piège à robots, champ invisible et hors du parcours clavier |

Le site étant généré en statique, le formulaire figure en dur dans le HTML
livré : le robot Netlify le détecte au déploiement, sans avoir besoin du
formulaire caché supplémentaire qu'exigent les applications rendues côté client.

L'envoi part en `fetch` POST vers l'URL de la page courante, ce qui évite tout
rechargement et permet d'afficher un état de succès ou d'erreur. Un champ caché
`lang` indique la langue d'origine du message.

**Configuration restante, à faire une fois dans le dashboard :**
Forms → Form notifications → Email notification → `ingenieurbanconle@gmail.com`.
Sans elle, les messages arrivent mais s'empilent sans notification.

Limite du plan gratuit : 100 soumissions par mois.

---

## 9. Domaine et DNS

| | |
|---|---|
| Domaine de production | `banconle.fr`, acheté chez Gandi |
| URL Netlify | `bia-banconle.netlify.app` |

Le domaine est déclaré une seule fois, dans `astro.config.mjs` :

```js
site: 'https://banconle.fr'
```

Tout le reste en découle via `Astro.site` : les balises `canonical`, les
`hreflang` des deux langues, `og:url`, `og:image` et `twitter:image`. Aucune URL
absolue du site n'est codée en dur dans un composant.

Un ancien domaine, `banconle.dev`, occupait cette place. Comme il ne résolvait
pas, chaque page déclarait un canonical inter-domaine vers un nom inexistant,
ce qui empêchait l'indexation et supprimait tout aperçu au partage. Corrigé le
31 juillet 2026.

### Sitemap

Généré par `@astrojs/sitemap` à chaque build, publié en `sitemap-index.xml` et
référencé dans `public/robots.txt`. Il ne liste que les pages réellement
générées : les articles en brouillon n'en produisent aucune et en sont donc
absents sans filtre à maintenir.

## 10. Points de vigilance

Classés par impact.

### a. Dépendances déclarées mais inutilisées

`gsap` et `lucide-astro` figurent dans `package.json` sans jamais être importés.
Voir section 2.

### b. 5,8 Mo d'images non optimisées

95 % du poids du site tient dans `public/images/`, qui échappe au pipeline.

| Fichier | Poids | Statut |
|---|---|---|
| `profile.jpeg` | 1,9 Mo | **Jamais référencé nulle part.** Suppression pure. |
| `projects/creathon.png` | 1,5 Mo | Une carte projet |
| `projects/lanceos.png` | 1,3 Mo | La carte vedette de l'accueil |
| `og-image.png` | 760 Ko | Image de partage |

Déplacer ces fichiers vers `src/assets/` et les référencer par import les
ferait passer par sharp, comme les photos d'éloquence. En extrapolant le ratio
obtenu sur celles-ci, on descendrait vraisemblablement sous 400 Ko.

### c. Polices tierces et RGPD

Voir section 6. Auto-héberger les trois familles supprime la dépendance à Google
et le transfert d'adresses IP.

### d. Pas de CSP

Le site n'a pas de Content-Security-Policy. Ajoutable dans `netlify.toml`, à
condition d'autoriser `fonts.googleapis.com`, `fonts.gstatic.com` et
`cdnjs.cloudflare.com`. Auto-héberger polices et GSAP réduirait la politique à
`'self'`, bien plus simple à tenir.

### e. Aucun garde-fou avant production

Push sur `main` égale mise en production. Pas de tests, pas de linter en CI, pas
de revue. Travailler par branche et fusionner après vérification du *deploy
preview* est la parade la moins coûteuse.

---

## 11. Ce qui n'existe pas

À noter, pour éviter de les chercher :

- pas de backend, pas d'API, pas de base de données
- pas de variables d'environnement ni de secrets
- pas de conteneur, pas de Dockerfile
- pas de CI/CD hors du build Netlify
- pas d'analytics, pas de tracking, pas de cookies
- pas de service worker, pas de mode hors ligne
- pas de sitemap.xml ni de flux RSS

`public/robots.txt` est le seul fichier d'indexation présent.