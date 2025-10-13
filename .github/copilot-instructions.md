# Copilot Instructions for NVCBO Landing Page

## Project Overview
- **Type:** Static Bootstrap 5 landing page for NorthernVision Community Based Organization (NVCBO)
- **Live Site:** https://vrxmike.github.io/nvcbo-landing-page/
- **Stack:** HTML5, Bootstrap 5, Font Awesome, Simple Line Icons, custom CSS/JS
- **Key Files:** `index.html`, `assets/` (css, js, fonts, img), `.gitattributes`, `.github/workflows/`

## Architecture & Patterns
- **Single-page app:** All content is in `index.html` with Bootstrap sections (About, Services, Portfolio, Contact)
- **Assets:**
  - CSS: Bootstrap, custom overrides in `assets/css/bss-overrides.css`
  - JS: Minimal, mostly `assets/js/stylish-portfolio.js` for sidebar/menu/scroll
  - Fonts: Font Awesome and Simple Line Icons (ensure lowercase filenames)
  - Images: All in `assets/img/`, referenced locally (no CDN)
- **No build step:** All files are static; no npm, node, or bundler required

## Developer Workflows
- **Local development:**
  - Serve with Python: `python3 -m http.server 8080` (see `README.md`)
  - Open `http://localhost:8080` in browser
- **Deployment:**
  - Auto-deployed to GitHub Pages via Actions (`.github/workflows/static.yml`, `deploy-pages.yml`)
  - Push to `master` triggers deployment
- **Testing:**
  - Manual: Open in browser, verify images, icons, and layout
  - Use `curl` to check asset loading (see `DEPLOYMENT_FIXES.md`)

## Project-Specific Conventions
- **Case sensitivity:** All asset filenames (fonts, images) must be lowercase for GitHub Pages compatibility
- **Git LFS:** Only large font files are tracked with LFS; images and icons are regular Git files (see `.gitattributes`)
- **Portfolio structure:** `<img>` tags must be inside `<a>` tags for Bootstrap hover/caption effects
- **Font references:** CSS must match actual font filenames exactly (lowercase)
- **Favicon:** Multiple favicon files in root, referenced in `<head>` and `site.webmanifest`
- **No external dependencies:** All assets are local except for Google Fonts

## Integration & External Dependencies
- **Bootstrap 5:** Local copy in `assets/bootstrap/`
- **Font Awesome & Simple Line Icons:** Local fonts in `assets/fonts/`, CSS in `assets/fonts/`
- **No backend, no API calls, no dynamic data**

## Examples
- **Fixing a broken icon:** If an icon doesn't render, check that the font file is lowercase and CSS references match
- **Adding an image:** Place in `assets/img/`, reference with a relative path in HTML
- **Modifying styles:** Edit `assets/css/bss-overrides.css` for custom Bootstrap tweaks

## References
- See `DEPLOYMENT_FIXES.md` for detailed deployment and troubleshooting history
- See `QUICK_FIX_SUMMARY.md` for a summary of common fixes
- See `.gitattributes` for LFS and asset handling rules

---
*Last updated: October 13, 2025*
