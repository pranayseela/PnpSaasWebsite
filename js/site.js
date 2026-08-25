(function () {
  function initFadeIns() {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els = document.querySelectorAll(".fade-in");
    if (prefersReduced) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { observer.observe(el); });
  }

  function initMobileNav() {
    var menuToggle = document.getElementById("menu-toggle");
    var mobileMenu = document.getElementById("mobile-menu");
    if (!menuToggle || !mobileMenu) return;
    var body = document.body;

    function closeMenu() {
      mobileMenu.classList.add("hidden-custom");
      body.classList.remove("menu-open");
      menuToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
      menuToggle.setAttribute("aria-label", "Open Menu");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      mobileMenu.classList.remove("hidden-custom");
      body.classList.add("menu-open");
      menuToggle.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
      menuToggle.setAttribute("aria-label", "Close Menu");
      menuToggle.setAttribute("aria-expanded", "true");
    }

    menuToggle.addEventListener("click", function () {
      if (mobileMenu.classList.contains("hidden-custom")) openMenu();
      else closeMenu();
    });

    mobileMenu.querySelectorAll(".mobile-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function statusClass(status) {
    if (status === "live") return "live";
    return "soon";
  }

  function renderProductCards(container) {
    if (!container || !window.PNP_PRODUCTS) return;
    if (container.querySelector("[data-product-id]")) return;
    container.innerHTML = window.PNP_PRODUCTS.map(function (p) {
      var storeLink = p.appStoreUrl
        ? '<a href="' + escapeHtml(p.appStoreUrl) + '" target="_blank" rel="noopener noreferrer" class="text-premium text-[17px] font-semibold hover:opacity-80 inline-flex items-center gap-2">' +
          escapeHtml(p.appStoreLabel || "Download") +
          ' <i class="fab fa-apple text-[13px]" aria-hidden="true"></i></a>'
        : '<span class="text-[15px] font-medium text-apple-black/50">' + escapeHtml(p.statusLabel) + "</span>";

      var freeBadge = p.freeBadge
        ? '<span class="product-badge free">' + escapeHtml(p.freeBadge) + "</span>"
        : "";

      return (
        '<article class="product-card" data-product-id="' + escapeHtml(p.id) + '">' +
          '<div class="mb-8">' +
            '<img src="' + escapeHtml(p.icon) + '" alt="" class="brand-icon-card shadow-md shadow-black/5" width="72" height="72" loading="lazy">' +
          "</div>" +
          '<div class="flex flex-wrap items-center gap-2 mb-3">' +
            '<span class="product-badge ' + statusClass(p.status) + '">' + escapeHtml(p.statusLabel) + "</span>" +
            freeBadge +
          "</div>" +
          "<h3 class=\"text-2xl md:text-[28px] font-semibold mb-2 tracking-tight text-[#1D1D1F]\">" + escapeHtml(p.name) + "</h3>" +
          '<p class="text-[13px] font-medium text-apple-black/45 mb-4">' + escapeHtml(p.platform) + "</p>" +
          '<p class="text-[#1D1D1F]/80 text-[16px] leading-relaxed mb-3">' + escapeHtml(p.tagline) + "</p>" +
          '<p class="text-apple-black/55 text-[14px] leading-relaxed mb-8 flex-1">' +
            "<span class=\"font-medium text-apple-black/70\">Who it's for:</span> " + escapeHtml(p.audience) +
          "</p>" +
          '<div class="flex flex-col items-start gap-3 mt-auto">' +
            storeLink +
            '<a href="' + escapeHtml(p.slug) + '" class="text-[#1D1D1F] text-[15px] font-semibold hover:opacity-70 inline-flex items-center gap-2">Explore ' +
              escapeHtml(p.name) +
              ' <i class="fas fa-chevron-right text-[10px]" aria-hidden="true"></i></a>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function injectStructuredData() {
    if (!window.PNP_STUDIO || !window.PNP_PRODUCTS) return;
    if (document.getElementById("pnp-structured-data")) return;

    var studio = window.PNP_STUDIO;
    var graph = [
      {
        "@type": "Organization",
        "@id": studio.url + "#organization",
        name: studio.name,
        legalName: studio.legalName,
        url: studio.url,
        email: studio.email,
        logo: "https://pnpsaas.com/images/pnp-technologies-icon.png",
        description: studio.description,
        sameAs: []
      },
      {
        "@type": "WebSite",
        "@id": studio.url + "#website",
        url: studio.url,
        name: studio.name,
        description: studio.description,
        publisher: { "@id": studio.url + "#organization" }
      }
    ];

    window.PNP_PRODUCTS.forEach(function (p) {
      var app = {
        "@type": "SoftwareApplication",
        name: p.name,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: p.platform === "macOS" ? "macOS" : "iOS",
        description: p.shortDescription,
        url: "https://pnpsaas.com/" + p.slug,
        image: "https://pnpsaas.com/" + (p.ogImage || p.icon),
        author: { "@id": studio.url + "#organization" }
      };
      if (p.appStoreUrl) {
        app.downloadUrl = p.appStoreUrl;
        app.offers = {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        };
      }
      graph.push(app);
    });

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "pnp-structured-data";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph
    });
    document.head.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("product-grid");
    if (grid) renderProductCards(grid);
    if (document.body && document.body.dataset.page === "home") injectStructuredData();
    initFadeIns();
    initMobileNav();
  });
})();
