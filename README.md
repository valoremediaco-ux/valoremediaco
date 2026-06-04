# Valoré Media — Static Site

Deployable version of `valore-final_32.html` with external assets and split HTML/CSS/JS.

## Structure

```
valore-media-site/
├── index.html          # Page markup + SEO meta
├── css/styles.css      # All styles (unchanged from source)
├── js/main.js          # Interactions, lazy video loading, overlays
├── videos/             # 14 MP4 files (portfolio + phone previews)
├── images/             # 25 JPG/PNG files (logos, hero, editorial)
└── asset-manifest.json # Asset inventory from conversion
```

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

(Any static file server works — `npx serve`, Netlify, Vercel, S3, etc.)

## Deploy

Upload the entire `valore-media-site` folder to your host’s web root. No build step required.

## Notes

- The subtle film-grain overlay in CSS uses an inline SVG data URL (tiny, not extracted).
- Videos lazy-load via `data-src` when scrolled into view; the phone mockup loads on page load.
- Google Fonts are still loaded from the CDN in `index.html`.
