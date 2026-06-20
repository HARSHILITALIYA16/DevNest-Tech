# DevNest Tech — Static HTML/CSS Site

This is a plain **HTML + CSS + vanilla JS** conversion of the original
React (TanStack Router + Tailwind + shadcn/ui) project. No build step,
no framework, no Node — just open `index.html` in a browser or host
the folder on any static web server.

The UI, layout, colors, gradients, spacing, fonts and copy are all
preserved exactly as in the original React app.

## Structure

```
devnest-static/
├── index.html                     Home
├── about.html                     About
├── apps.html                      Apps list
├── contact.html                   Contact (mailto form)
├── cricrun-counter.html           CricRun Counter app page
├── privacy.html                   Site Privacy Policy
├── terms.html                     Site Terms & Conditions
├── cricrun-counter-privacy.html   CricRun Counter Privacy Policy
├── cricrun-counter-terms.html     CricRun Counter Terms & Conditions
├── 404.html                       Not found page
├── css/
│   └── style.css                  All styles (design tokens, layout, components)
├── js/
│   └── main.js                    Mobile nav toggle, active-link highlight, contact form
└── images/
    ├── devnest_logo.png           ⚠️ placeholder logo — replace with the real one
    └── cricrun-preview.jpeg       ⚠️ placeholder screenshot — replace with the real one
```

## About the images

The original React project referenced the logo and app screenshot via
a private Lovable asset host (`/__l5e/assets-v1/...`) rather than
bundling the actual image files in the zip, so they weren't available
to copy over. I generated placeholder images with the same dimensions
and roughly the same colors so the layout looks right immediately.

**To use your real images:** just replace these two files (keep the same
filenames, or update the `src` paths in the HTML if you rename them):

- `images/devnest_logo.png` — the DevNest Tech logo (used in header, hero, footer)
- `images/cricrun-preview.jpeg` — the CricRun Counter app screenshot (used on the CricRun page)

## Notes on the conversion

- **Routing** → real folder-free multi-page site. Each route became its
  own `.html` file; internal links point directly to `*.html` files
  instead of going through a client-side router.
- **Tailwind utility classes** → translated into named CSS classes in
  `css/style.css` (e.g. `.hero`, `.card`, `.btn-primary`), using the
  exact same color tokens (OKLCH values), gradients, radii and shadows
  from the original `styles.css` theme.
- **lucide-react icons** → inlined as raw `<svg>` elements with the same
  paths, so no icon library/dependency is needed.
- **Mobile nav, active-link highlighting, contact form submission** →
  reimplemented in plain JS in `js/main.js` (previously React state/handlers).
- Google Fonts (Inter + Space Grotesk) are loaded the same way, via a
  `@import` in `css/style.css`.

## Running locally

No build tools needed. Either:

- Just double-click `index.html`, or
- Run a tiny local server from this folder, e.g.:
  ```
  python3 -m http.server 8080
  ```
  then visit `http://localhost:8080`.

## Deploying

Upload the whole folder as-is to any static host (Netlify, Vercel,
GitHub Pages, S3, cPanel, etc.) — there's nothing to build.
