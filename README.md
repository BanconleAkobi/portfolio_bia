# Portfolio

Site statique Astro, publié sur https://banconle.fr par Netlify à chaque push sur `main`.
Détails techniques dans [INFRASTRUCTURE.md](INFRASTRUCTURE.md).

## Travailler en local avec Docker

Seul Docker (OrbStack) est nécessaire, pas besoin d'installer Node.

```sh
docker compose up -d
```

Le site est servi sur http://localhost:4321 (ou http://dev.portfolio.orb.local avec OrbStack)
et se recharge à chaque modification des fichiers.

Avant de pousser, vérifier le build de production :

```sh
docker compose --profile preview up -d preview
```

Il est servi sur http://localhost:4322.

Après une modification de `package.json`, reconstruire l'image et repartir de dépendances neuves :

```sh
docker compose up -d --build -V
```

Tout arrêter :

```sh
docker compose --profile preview down
```

## Sans Docker

Avec Node 22 : `npm install`, puis `npm run dev`, `npm run build` ou `npm run preview`.
