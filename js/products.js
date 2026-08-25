/**
 * PnP Technologies — centralized product catalog.
 * Update this file when adding apps or changing App Store / pricing details.
 * Homepage cards and structured data read from window.PNP_PRODUCTS.
 */
window.PNP_PRODUCTS = [
  {
    id: "ai-executive-assistant",
    name: "Ai Executive Assistant",
    slug: "ai-executive-assistant.html",
    tagline: "Your private executive memory — calm continuity for a fragmented day.",
    shortDescription: "Private executive memory that helps you stop mentally carrying everything.",
    valueProposition: "Continuity of thought, without the cognitive load of managing it all yourself.",
    audience: "Founders and professionals who need their thoughts to stay with them.",
    platform: "iOS",
    status: "live",
    statusLabel: "Available on the App Store",
    free: false,
    freeBadge: null,
    icon: "images/ai-executive-assistant-icon.jpg",
    ogImage: "images/ai-executive-assistant-icon.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/ai-executive-assistant-pro/id6769393650",
    appStoreLabel: "Download on the App Store",
    privacyModel: "local",
    privacySummary: "Your data stays on your device.",
    requirements: "iOS 17.0+",
    pricing: {
      model: "freemium",
      summary: "Free download with optional Executive Pro via In-App Purchase.",
      tiers: []
    },
    features: [
      "Executive Brief — a calm morning synthesis of themes and follow-ups",
      "On-device continuity for notes and voice capture",
      "Designed for focus, not notification noise",
      "Apple-native interface language"
    ]
  },
  {
    id: "cine-drive",
    name: "Cine Drive",
    slug: "cine-drive.html",
    tagline: "Professional video recording, built around the iPhone.",
    shortDescription: "Professional external SSD recording workflows for iPhone.",
    valueProposition: "High-bitrate ProRes capture to external storage, with a focused creator workflow.",
    audience: "Creators and filmmakers who shoot on iPhone and need external SSD workflows.",
    platform: "iOS",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    free: false,
    freeBadge: null,
    icon: "images/cine-drive-icon.jpg",
    ogImage: "images/cine-drive-og.jpg",
    appStoreUrl: null,
    appStoreLabel: null,
    privacyModel: "local",
    privacySummary: "Your media stays on your device and drives you control.",
    requirements: "iPhone with USB-C external storage support",
    pricing: {
      model: "tba",
      summary: "Pricing will be announced at App Store release.",
      tiers: []
    },
    features: [
      "ProRes capture directly to external USB-C drives",
      "Workflow built around external SSD recording",
      "Media organization and review for creators",
      "Deep integration with iOS camera APIs"
    ]
  },
  {
    id: "family-finance",
    name: "Family Finance",
    slug: "family-finance.html",
    tagline: "A private ledger for macOS — local by default, yours to control.",
    shortDescription: "Offline-first private ledger for macOS with local OCR, imports, and budgets.",
    valueProposition: "Track household finances without bank feeds, accounts, or a studio-hosted cloud.",
    audience: "People who want a private Mac ledger without connecting bank APIs.",
    platform: "macOS",
    status: "live",
    statusLabel: "Available on the Mac App Store",
    free: false,
    freeBadge: null,
    icon: "images/family-finance-icon.jpg",
    ogImage: "images/family-finance-og.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/family-finance-ledger/id6790012195?mt=12",
    appStoreLabel: "Download on the Mac App Store",
    privacyModel: "local-with-icloud",
    privacySummary: "Your data stays local by default, with optional iCloud synchronization when you choose to enable it.",
    requirements: "macOS Sonoma 14.0+",
    pricing: {
      model: "freemium",
      summary: "Free download with optional Family Finance Pro via In-App Purchase.",
      tiers: [
        { name: "Monthly", price: "$0.99", note: "14-day intro when eligible" },
        { name: "Yearly", price: "$9.99", note: "14-day intro when eligible" },
        { name: "Lifetime", price: "$39.99", note: "One-time purchase" }
      ]
    },
    features: [
      "CSV and PDF statement imports with duplicate-aware review",
      "On-device Vision OCR for receipts",
      "Category rules, budgets with rollover, and Swift Charts",
      "Optional private CloudKit sync — no Family Finance cloud backend",
      "SQLite export and restore you control"
    ]
  }
];

window.PNP_STUDIO = {
  name: "PnP Technologies",
  legalName: "PnP Technologies LLC",
  url: "https://pnpsaas.com/",
  tagline: "Private. Native. Purpose-built.",
  description: "Independent software studio creating focused, native Apple applications.",
  email: "support@pnpsaas.com",
  ogImage: "https://pnpsaas.com/images/pnp-technologies-og.jpg"
};
