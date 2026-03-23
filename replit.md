# Code Fusion

## Project Overview
A static HTML website called "Code Fusion". No build system — plain HTML, CSS, and JavaScript served directly.

## Structure
- `index.html` — Main HTML file (single-page site)
- `assets/` — CSS, JS, and image assets
  - `style.css` — Main stylesheet
  - `imagesindex.js` — JavaScript
  - `images/` — Image assets

## Running Locally
The site is served with `serve` (npm package) on port 5000:
```
npx serve . -p 5000 -s --no-clipboard
```

## Deployment
Configured as a **static** deployment with `publicDir: "."`.

## Tech Stack
- Plain HTML5
- Tailwind CSS (via CDN)
- SwiperJS (via CDN)
- Google Fonts
- Vanilla JavaScript
