# Cyanoïde Portal — Contexte projet

## Résumé

Site portail personnel de Constantin (cyanoide), déployé sur GitHub Pages à `https://cyanoide.github.io/cyanoide/`. C'est une passerelle vers tous ses sites/projets, avec une esthétique inspirée des menus de **Nier Automata**.

**Repo GitHub :** `https://github.com/cyanoide/cyanoide.git`
**Site live :** `https://cyanoide.github.io/cyanoide/`

## Stack technique

- **Vite + React 19 + Three.js** (WebGL)
- Particules GPU avec shaders GLSL custom
- Fonts Google : Rajdhani (titres) + Share Tech Mono (monospace)
- Déploiement : GitHub Pages via branche `gh-pages` (script `deploy.sh`)

## Architecture du projet

```
portal/
├── index.html                  # Point d'entrée, favicon, fonts
├── package.json
├── vite.config.js              # base: '/cyanoide/' pour GitHub Pages
├── deploy.sh                   # Script de déploiement gh-pages
├── .github/workflows/deploy.yml # GitHub Actions (backup, pas utilisé actuellement)
├── .gitignore
├── public/
│   ├── favicon.svg             # Favicon (logo Cyanoide en bleu)
│   └── svg/                    # SVG des sites (chargés dynamiquement)
│       ├── CYANOIDE.svg        # Logo principal
│       ├── github.svg, youtube.svg, instagram.svg, etc.
│       └── (les fichiers *_lower.svg sont des doublons à supprimer)
└── src/
    ├── main.jsx                # Point d'entrée React
    ├── App.jsx                 # Layout principal, state thème/sélection
    ├── App.css                 # Tout le style (thème, Nier UI, effets, responsive)
    ├── data/
    │   └── sites.js            # Liste des sites avec id, label, url, emoji, svg, description
    ├── components/
    │   ├── Menu.jsx            # Menu latéral gauche style Nier (typewriter, icônes SVG inline, stagger)
    │   ├── ParticleCloud.jsx   # Système de 7000 particules Three.js (spring physics, mouse repulsion, wander)
    │   ├── ThemeToggle.jsx     # Switch jour/nuit
    │   └── Overlay.jsx         # Effets visuels (scanlines, bruit animé, vignette, glitch line)
    └── utils/
        └── emojiSampler.js     # Sampling de positions depuis emoji ou SVG → nuage de particules
```

## Fonctionnement clé

### Système de particules (ParticleCloud.jsx)
- **7000 particules** rendues en WebGL via Three.js Points + ShaderMaterial custom
- Les particules forment la shape d'un SVG (ou emoji en fallback) : le SVG est rendu sur un canvas offscreen, les pixels sont samplés pour obtenir des positions cibles
- **Spring physics** : chaque particule a une cible, une vélocité, un damping (0.94) et un spring (0.012)
- **Mouse repulsion** : les particules fuient le curseur (rayon 0.4, force 0.06)
- **Wander organique** : chaque particule a une phase sinusoïdale unique pour un léger mouvement permanent
- **Transition entre shapes** : quand on change de site, les particules "burst" puis convergent vers la nouvelle forme
- Taille fixe 4px, profondeur Z réduite (0.06) pour un motif serré et lisible

### Chargement SVG (emojiSampler.js)
- `sampleSVG(url, count)` : charge un SVG, le dessine sur un canvas, sample les pixels non-transparents
- `sampleEmoji(emoji, count)` : même chose avec un emoji en fallback
- Jitter minimal (0.0015) pour un rendu dense

### Menu (Menu.jsx)
- Les icônes SVG sont chargées via fetch et injectées en inline avec `currentColor` pour suivre le thème
- Titre "CYANOIDE" en typewriter effect
- Items apparaissent en stagger (60ms chacun)
- Click = sélectionner (change le nuage), Double-click = ouvrir le lien

### Thème (App.css)
- **Light** : fond blanc (#f5f5f0), accent bleu (#0000FF) — thème par défaut
- **Dark** : fond noir (#0a0a0a), accent jaune (#FFFF00)
- Transition smooth sur toutes les propriétés (0.6s)
- Le toggle est en `position: fixed` en haut à droite (côté particules), en mobile il descend à top: 31px

### Effets Nier (Overlay.jsx + App.css)
- Scanlines CRT (repeating-linear-gradient)
- Grain/bruit animé (canvas 256x256, re-généré toutes les 100ms)
- Vignette (radial-gradient)
- Glitch line horizontale aléatoire (CSS animation 8s)
- Glitch texte sur le titre (CSS animation 10s)
- Grille de fond subtile

## Sites listés

| id | label | SVG | Description |
|---|---|---|---|
| cyanoide | Cyanoide | CYANOIDE.svg | Espace d'expression... (sélectionné par défaut) |
| github | Github | github.svg | |
| youtube | Youtube | youtube.svg | |
| instagram | Instagram | instagram.svg | |
| x | X | X.svg | |
| five | FIVE | FIVE.svg | |
| ratp | Ratp RER | ratp.svg | |
| looper | Looper Music | looper.svg | |
| soundcloud | SoundCloud | Soundcloud.svg | |
| life | Life Tracker | life.svg | |
| camera | Camera Map | cameramap.svg | |
| mail | Contact Me | contact.svg | |
| pattern | Pattern Maker | pattern.svg | |

## Déploiement

```bash
cd portal
npm run build
cd dist && git init && git checkout -b gh-pages && git add -A && git commit -m "Deploy" && git remote add origin https://github.com/cyanoide/cyanoide.git && git push -f origin gh-pages && cd ..
```

Ou : `./deploy.sh`

GitHub Pages config : Source = branche `gh-pages`, dossier `/ (root)`.

## Nettoyage à faire

- Supprimer les fichiers `*_lower.svg` dans `public/svg/` (cyanoide_lower, five_lower, soundcloud_lower, x_lower) — ce sont des doublons créés par erreur
