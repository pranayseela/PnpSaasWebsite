# PnP Technologies Website

Premium, Apple-inspired marketing site for **PnP Technologies** (`https://pnpsaas.com`), covering **Ai Executive Assistant**, **Cine Drive**, and **Family Finance**.

GitHub Pages hosts this repo. Clean URLs (e.g. `/privacy`, `/terms`) resolve to the matching `.html` files.

## Brand System

- **Premium Gradient:** Cyan → Blue → Purple/Pink (aligned with app icons).
- **Local-First Privacy:** On-device processing; no studio-hosted user databases for app content.
- **Apple-Native Aesthetic:** Minimalist layout for the Apple ecosystem.

## Products

| Product | Platform | Site page | Notes |
|--------|----------|-----------|--------|
| Ai Executive Assistant | iOS | `ai-executive-assistant.html` | Private executive memory |
| Cine Drive | iOS | `cine-drive.html` | External SSD recording for iPhone |
| Family Finance Ledger | macOS | `family-finance.html` | Offline-first private ledger; Free + Pro via Mac App Store IAP |

**Family Finance Pro (App Store):** Monthly ($0.99), Yearly ($9.99), Lifetime ($39.99); optional 14-day intro on subscriptions when eligible. Cancel Monthly/Yearly in System Settings → Apple ID → Subscriptions.

## App Store & legal URLs

Use these on App Store Connect and in-app legal links:

| Purpose | Preferred URL | Alias / notes |
|--------|---------------|----------------|
| Privacy Policy | `https://pnpsaas.com/privacy` | Also `privacy.html`. Full duplicate at `/privacy-policy` and `privacy-policy.html` (same body; for older app/docs links). Canonical points to `privacy.html`. |
| Terms of Service | `https://pnpsaas.com/terms` | Also `terms.html` — covers Free/Pro, StoreKit, auto-renew, Apple refunds. |
| Support | `https://pnpsaas.com/support` | Also `support.html` — includes Family Finance Pro / subscription help. |
| Marketing | `https://pnpsaas.com` | Studio home |
| Product | `https://pnpsaas.com/family-finance` | Product landing |

Privacy policy states Mac App Store / StoreKit purchases are processed by Apple; Family Finance has no PnP billing backend. Optional iCloud sync uses the user’s private CloudKit container.

## Site structure

| File | Role |
|------|------|
| `index.html` | Studio overview and philosophy |
| `ai-executive-assistant.html` | Ai Assistant product |
| `cine-drive.html` | Cine Drive product |
| `family-finance.html` | Family Finance (macOS) product + Free/Pro summary |
| `support.html` | Support + Pro subscription guidance |
| `privacy.html` | Canonical Privacy Policy |
| `privacy-policy.html` | **Full copy** of the privacy policy (alias URL; do not diverge body copy) |
| `terms.html` | Terms of Service |
| `sitemap.xml` | Search / sitemap entries |
| `dist/style.css` | Built Tailwind CSS |
| `images/` | Brand + product icons and OG assets (see below) |

### Brand & product images (`images/`)

| File | Role |
|------|------|
| `pnp-technologies-icon.png` | Studio mark (footer on all pages) |
| `pnp-technologies-og.jpg` | Studio Open Graph / WhatsApp share (`1200×630`) — home, support, privacy, terms |
| `ai-executive-assistant-icon.jpg` | Ai Executive Assistant product icon + product OG |
| `cine-drive-icon.png` | Cine Drive product icon + product OG |
| `family-finance-icon.png` | Family Finance product icon + product OG |
| `favicon.svg` | Browser tab icon (brand gradient) |

Product pages keep their own app icon for social previews; studio pages use `pnp-technologies-og.jpg`. Brand colors: `#00DBFF` → `#3A69FF` → `#FF2BFF`.

### Keeping privacy pages in sync

Edit **`privacy.html` first**, then copy the full file to **`privacy-policy.html`** and only adjust `og:url` (to `privacy-policy.html`) while keeping `rel="canonical"` on `https://pnpsaas.com/privacy.html`. Do not replace the canonical page with a redirect-only stub.

## Technology

- **Tailwind CSS** with local production build (`dist/style.css`).
- **Typography:** Inter (UI), Playfair Display (editorial).
- Version bump helper: `increment_version.js` (footer / cache-bust strings). Include `privacy-policy.html` when bumping if that file is in the script’s file list.

## Related docs in this repo

- `pnpsaas.md` — studio transformation / deployment log
- `company-strategy.md` — umbrella brand and portfolio
- `redesign-plan.md` — historical Ai Assistant redesign plan (superseded by current live site)

## Current Version

Site footers / CSS cache query: **`v1.0.20`**
