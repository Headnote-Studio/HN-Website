# HeadnoteStudio.com — Website Overview

## What This Is

The public marketing website for **Headnote Studio** (https://headnotestudio.com), an AI-augmented digital marketing agency for small UK legal firms.

This is a **static HTML/CSS/JS site** with no build step, no framework, and no server-side code. Files are served as-is. It is hand-authored as clean static HTML, mirroring the conventions of the sister site selectionwise.com.

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
├── services.html       ← Services (four pillars + "How to begin" ladder)
├── method.html         ← Our method (evidence tagging, one honest number, fee guarantees)
├── about.html          ← About (+ "What we will never do" promises)
├── contact.html        ← Contact (details + #snapshot section — mailto, no form)
├── privacy.html        ← Privacy Policy
├── terms.html          ← Terms of Service
├── 404.html            ← Custom error page
├── .htaccess           ← Apache config (HTTPS, redirects, security headers, caching, hotlink protection)
├── robots.txt          ← Crawler rules (AI bots explicitly allowed)
├── sitemap.xml         ← Sitemap for search engines
├── icon.png            ← Favicon (Headnote app-icon mark)
├── css/
│   └── styles.css      ← Single shared stylesheet (brand system)
├── js/
│   └── main.js         ← Mobile menu toggle + dynamic copyright year
└── images/
    ├── logo-mark.png       ← Brand mark (light, transparent — for dark nav/footer)
    └── home-team-photo.jpg ← Homepage value-proposition photo (optimised JPG)
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

## Content Conventions (keep consistent)

- **Four-pillar order:** wherever the pillars appear (home "Four pillars, one service" cards, the Services page blocks, and prose mentions), the order is **Visibility → Content → Monitoring → Referrer network** — Visibility first, Referrer network last. Move each pillar's icon, heading and text together as a block.
- **Referrer network framing:** lead with the local *network of influence* — the professional introducers who refer (accountants, mortgage brokers, estate agents, financial advisers) **and** the community voices, groups and channels where ideal clients pay attention — not just "finding referrers". No paid-"influencer" promises.
- **Footer tagline** ("The first note your next client sees.") is set in **Muted Brass** (`--muted-brass`, `#B89B5E`).
- **Compliance guardrails (apply to all copy):** no prices anywhere on the site; guarantee language only ever refers to **refunds of our own fee** (never rankings or outcomes); the client's nominated partner keeps written sign-off; AI is used in production but people review before publication (keep the footer disclosure line intact). UK English throughout. No new colours/fonts beyond the brand palette.

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

- No analytics installed. Add a GA4 snippet to every page if/when a Measurement ID is available.
- `privacy.html` / `terms.html` contain standard boilerplate suitable for an information-only site. Have a solicitor review before relying on them, and update if the business starts collecting data (forms, analytics, accounts).

## Deployment Method (Hostinger Git)

The site is deployed via Hostinger's **classic Git tool** (hPanel → headnotestudio.com → Dashboard → Advanced → GIT), pulling from GitHub into `public_html`, with **auto-deployment** enabled (every push to `main` redeploys).

**Repo is currently PUBLIC**, so Hostinger clones it over the HTTPS URL (`https://github.com/Headnote-Studio/HN-Website.git`) with no key. This was chosen because Hostinger issues **one SSH key per hosting account**, and that key is already used as the deploy key for the SelectionWise repo — GitHub won't reuse the same key as a deploy key on a second private repo.

### To switch this repo to PRIVATE later
Use one of:
1. **Account-level SSH key:** remove Hostinger's key from the SelectionWise repo's Deploy keys, then add the same public key under the GitHub *user account* (Settings → SSH and GPG keys). Account keys grant access to all the user's repos, covering both sites. Then set the Hostinger GIT repository field to the SSH URL `git@github.com:Headnote-Studio/HN-Website.git`.
2. **GitHub Actions → FTP/SFTP:** a workflow uploads files to Hostinger on push (repo stays private; adds a CI step).

## This Is NOT the App

This repo is the marketing site only. It is unrelated to any separate application codebase.
