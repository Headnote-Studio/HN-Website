# HeadnoteStudio.com — Website Overview

## What This Is

The public marketing website for **Headnote Studio** (https://headnotestudio.com), an AI-augmented digital marketing agency for small UK legal firms.

This is a **static HTML/CSS/JS site** with no build step, no framework, and no server-side code. Files are served as-is. It was migrated from a Hostinger Horizons (React/Vite) export and hand-authored as clean static HTML, mirroring the conventions of the sister site selectionwise.com.

## Repository

- **GitHub:** `Headnote-Studio/HN-Website` (https://github.com/Headnote-Studio/HN-Website)
- **Branch:** `main` (only branch)
- **Local path:** `C:\Headnote\HN-Website`

## Hosting & Deployment

- **Host:** Hostinger (shared hosting, Apache)
- **Domain:** headnotestudio.com (HTTPS enforced via `.htaccess`)
- **Deployment:** Git integration via Hostinger — pushing to `main` on GitHub triggers auto-deploy to the Hostinger web root (`public_html`)
- **No CI/CD pipelines** — no GitHub Actions, no build step
- **What you push is what goes live.** There is no staging environment.

### To deploy a change:
1. Edit files locally
2. `git pull origin main` (always pull first)
3. Commit to `main`
4. `git push origin main`
5. Hostinger pulls automatically — changes are live within minutes

## File Structure

```
/                       ← Web root (everything here is public)
├── index.html          ← Homepage
├── services.html       ← Services (four pillars)
├── about.html          ← About
├── contact.html        ← Contact (details only — no form)
├── privacy.html        ← Privacy Policy (PLACEHOLDER — needs real copy)
├── terms.html          ← Terms of Service (PLACEHOLDER — needs real copy)
├── 404.html            ← Custom error page
├── .htaccess           ← Apache config (HTTPS, redirects, security headers, caching, hotlink protection)
├── robots.txt          ← Crawler rules (AI bots explicitly allowed)
├── sitemap.xml         ← Sitemap for search engines
├── favicon.png
├── css/
│   └── styles.css      ← Single shared stylesheet (brand system)
├── js/
│   └── main.js         ← Mobile menu toggle + dynamic copyright year
└── images/
    ├── logo.png        ← Brand logo
    └── home-team.jpg   ← Homepage value-proposition photo
```

## Key Technical Details

- **No build step.** Edit HTML/CSS/JS directly. No npm, no bundler, no transpiler.
- **No templating.** Each HTML page is standalone — shared elements (nav, footer) are duplicated across every page. **If you change the nav or footer, you must update every `.html` file.**
- **One shared stylesheet** (`css/styles.css`) and one small script (`js/main.js`), linked with cache-busting query strings (`?v=1`).
- **Apache `.htaccess`** handles: HTTPS redirect, www→non-www redirect, extensionless URL rewrites (e.g. `/services` → `/services.html`), security headers, caching, compression, hotlink protection, and custom 404.
- **No database, no server-side processing, no environment variables, no contact form** — the Contact page lists email/phone/location with `mailto:`/`tel:` links.
- **SEO:** every page has a unique title, meta description, canonical URL, Open Graph + Twitter Card tags, and Schema.org JSON-LD.
- **Fonts:** Fraunces (headings) + Inter (body), loaded from Google Fonts.

## Brand Palette

| Name          | Hex       |
|---------------|-----------|
| Deep Ink      | `#10201C` |
| Counsel Green | `#1F5C4A` |
| Muted Brass   | `#B89B5E` |
| Parchment     | `#F6F1E8` |
| Sage Mist     | `#DDE8E1` |
| Charcoal      | `#202421` |
| Blue-Grey     | `#7896A3` |

## Safety Rules for Updates

1. **Always pull before editing:** `git pull origin main` to avoid conflicts.
2. **Test locally first.** Serve with `python -m http.server` (or any static server) and check in a browser before pushing.
3. **Push = live.** There is no review gate. Be careful.
4. **Navigation/footer changes affect all pages.** They are copy-pasted across every `.html` file — update them all.
5. **Do not modify `.htaccess` unless you understand Apache rewrite rules.** A broken `.htaccess` can take the whole site down.
6. **Do not delete or rename pages without updating:** the sitemap, internal links across all pages, and the footer/nav.
7. **Images are hotlink-protected** in `.htaccess` — only requests from `headnotestudio.com` can load them.
8. **Cache-bust after CSS/JS changes.** Cache TTLs: HTML = 1 hour, CSS/JS/images = 1 month, fonts = 1 year. After editing `styles.css` or `main.js`, bump the `?v=` number in every page's `<link>`/`<script>` tag, or browsers may serve stale files for up to a month.
9. **Never commit secrets** (`.env`, API keys, tokens). None are needed — this is a static site.

## Outstanding

- `privacy.html` and `terms.html` are placeholders — replace with real legal copy, then add them to `sitemap.xml` and remove their `noindex`.
- No analytics installed. Add a GA4 snippet to every page if/when a Measurement ID is available.

## This Is NOT the App

This repo is the marketing site only. It is unrelated to any separate application codebase.
