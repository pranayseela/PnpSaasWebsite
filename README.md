# PnP Technologies Website

Premium, Apple-inspired marketing site for **PnP Technologies** (`https://pnpsaas.com`).

GitHub Pages hosts this repo. Clean URLs (e.g. `/privacy`, `/terms`) resolve to the matching `.html` files.

## Brand

- **Positioning:** Private. Native. Purpose-built.
- **Studio:** Independent Apple software — focused apps from real workflows.
- **Privacy:** Local-first; no studio-hosted databases for private app content. Optional sync uses Apple CloudKit where offered.
- **Visual:** Apple-like restraint; brand gradient cyan → blue → magenta aligned with app icons.

## Products

| Product | Platform | Status | Page |
|--------|----------|--------|------|
| Ai Executive Assistant | iOS | Live on App Store | `ai-executive-assistant.html` |
| Cine Drive | iOS | Coming soon | `cine-drive.html` |
| Family Finance Ledger | macOS | Live on Mac App Store | `family-finance.html` |

**App Store (Ai Executive Assistant):** https://apps.apple.com/us/app/ai-executive-assistant-pro/id6769393650  

**Mac App Store (Family Finance):** https://apps.apple.com/us/app/family-finance-ledger/id6790012195?mt=12  

Family Finance Pro: Monthly ($0.99), Yearly ($9.99), Lifetime ($39.99); optional 14-day intro on subscriptions when eligible.

Product facts for cards, pricing, and status live in **`js/products.js`**. Set `free` / `freeBadge` there when a flagship free app ships.

## Site structure

| File | Role |
|------|------|
| `index.html` | Studio home — hero, apps, privacy, origin, why PnP |
| `about.html` | Studio story |
| `ai-executive-assistant.html` | Product landing |
| `cine-drive.html` | Product landing |
| `family-finance.html` | Product landing + Free/Pro pricing |
| `support.html` | Contact & support |
| `privacy.html` | Canonical Privacy Policy |
| `privacy-policy.html` | Full alias copy of privacy policy |
| `terms.html` | Terms of Service |
| `js/products.js` | Central product catalog |
| `js/site.js` | Nav, fade-in, product grid, structured data |
| `css/site.css` | Shared site styles |
| `robots.txt` / `sitemap.xml` | Crawlers |
| `dist/style.css` | Built Tailwind CSS |

## Local development

```bash
npm install
npm run build:css    # regenerate dist/style.css
npx --yes serve .    # or any static server
```

Version bump (footer / cache query): `node increment_version.js` → currently **v1.0.22**.

## Legal URLs (App Store Connect)

| Purpose | URL |
|--------|-----|
| Privacy | https://pnpsaas.com/privacy |
| Terms | https://pnpsaas.com/terms |
| Support | https://pnpsaas.com/support |

Edit **`privacy.html` first**, then copy to **`privacy-policy.html`** (adjust `og:url` only; keep canonical on `privacy.html`).

## Notes

- No third-party analytics by design (privacy-first). Architecture can accept a privacy-conscious analytics hook later.
- Prefer product icons / OG JPGs already under `images/` for shares; keep OG assets under 600KB.
