# PnP Technologies - Studio Transformation Log

Permanent record of the redesign and certification of the PnP Technologies studio footprint (`pnpsaas.com`).

## 1. Core Brand Shift

* **Original State:** Generic SaaS landing page for a .NET Starter Kit.
* **Final State:** Apple-native software studio: “Privacy-first Apple-native software.”
* **Public Identity:** “PnP Technologies” (public) / “PnP Technologies LLC” (legal).

## 2. Design System

* **Aesthetic:** Inspired by current `apple.com` language.
* **Palette:** Pure White (#FFFFFF), Apple Off-White (#F5F5F7), Jet Black (#1D1D1F).
* **Typography:** Inter (UI), Playfair Display (editorial); Apple-like leading/tracking.
* **Materiality:** Soft elevation, translucent glass headers.

## 3. Engineering & Consistency

* Shared header/footer patterns across marketing and legal pages.
* Navigation: Software, Philosophy, Privacy, Support (plus Legal in footer: Privacy, Terms).
* Production Tailwind build at `dist/style.css`.
* Patch versioning visible in footers (current: **v1.0.20**).

## 4. Accessibility & Quality

* WCAG 2 AA posture (contrast, semantics, ARIA on global nav).
* Mobile Safari: `100dvh`, full-screen menu with body scroll lock.

## 5. Social Identity & Previews

* Open Graph / Twitter cards for iMessage, WhatsApp, and X (WhatsApp: `og:title` / `og:description` / `og:url` / `og:image` in `<head>`; image &lt; 600KB, ≥300px wide, aspect ≤ 4:1).
* **Studio mark:** `images/pnp-technologies-icon.png` (footer); share card `images/pnp-technologies-og.jpg` (`1200×630`) on home / support / privacy / terms.
* **Product share images:** `ai-executive-assistant-icon.jpg`, `cine-drive-og.jpg`, `family-finance-og.jpg` (on-page display still uses the high-res `*-icon` assets).
* **Favicon:** `images/favicon.svg` (brand gradient). Do not reuse a product icon for studio share or footer.

## 6. Product Narratives

* **Ai Executive Assistant:** Continuity intelligence / private executive memory (iOS).
* **Cine Drive:** Cinema-grade external SSD workflows for iPhone.
* **Family Finance Ledger:** Offline-first macOS private ledger — local SwiftData, CSV/PDF imports, Vision OCR, budgets/charts, optional private CloudKit sync. No bank feeds. **Live** on the Mac App Store (Free + Family Finance Pro via IAP: Monthly $0.99, Yearly $9.99, Lifetime $39.99; 14-day intro when eligible). Store: https://apps.apple.com/us/app/family-finance-ledger/id6790012195?mt=12

## 7. Legal & App Store readiness (2026-07-14)

* Restored full **Terms of Service** (`terms.html`) covering Mac App Store licensing, Free/Pro, auto-renew, cancellation in System Settings, and Apple-handled refunds.
* Updated **Privacy Policy** purchases section for StoreKit / Apple IAP (plus optional merchant-of-record for non–App Store products).
* Added **`privacy-policy.html`** as a **full copy** of `privacy.html` so `/privacy-policy` never 404s (older app/docs links). Preferred Connect URL remains **`https://pnpsaas.com/privacy`**.
* Support page documents Pro subscription management.
* Family Finance product page CTA points to the Mac App Store (live 2026-07-24).
* Deployed to GitHub Pages; live checks: `/privacy`, `/privacy-policy`, `/terms`, `/support`, `/family-finance` → **200**.

## 8. Mac App Store launch (2026-07-24)

* Family Finance Ledger **1.1** approved and publicly live.
* Site CTAs updated: `family-finance.html` hero, home product card, support download link.
* Canonical Mac App Store URL: https://apps.apple.com/us/app/family-finance-ledger/id6790012195?mt=12

## Current Deployment

* **Version:** v1.0.20 (footer / asset query)
* **Status:** Live on GitHub Pages; Family Finance **Live** on Mac App Store.
* **Canonical privacy URL for App Store Connect:** `https://pnpsaas.com/privacy`
* **Mac App Store:** https://apps.apple.com/us/app/family-finance-ledger/id6790012195?mt=12
