(() => {
  "use strict";

  const root = document.documentElement;
  const themeKey = "lief-color-scheme";
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const systemScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const mobileNavigation = window.matchMedia("(max-width: 61rem)");
  const pageRegions = document.querySelectorAll("main, .site-footer");
  const heroIllustration = document.querySelector("[data-hero-illustration]");
  const heroVariants = new Map();
  let heroRequest = 0;

  const setHeroIllustration = async (theme) => {
    if (!heroIllustration || heroIllustration.dataset.variant === theme) return;
    const url = theme === "dark"
      ? heroIllustration.dataset.darkSrc
      : heroIllustration.dataset.lightSrc;
    if (!url) return;

    const request = ++heroRequest;
    heroIllustration.setAttribute("aria-busy", "true");

    try {
      let markup = heroVariants.get(theme);
      if (!markup) {
        const response = await fetch(url, { credentials: "same-origin" });
        if (!response.ok) throw new Error("Unable to load hero artwork: " + response.status);
        markup = await response.text();
        heroVariants.set(theme, markup);
      }
      if (request !== heroRequest) return;

      const template = document.createElement("template");
      template.innerHTML = markup;
      const svg = template.content.querySelector("svg");
      if (!svg) throw new Error("Hero artwork is not an SVG");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      heroIllustration.replaceChildren(svg);
      heroIllustration.dataset.variant = theme;
      heroIllustration.setAttribute("aria-busy", "false");
    } catch (_) {
      if (request !== heroRequest) return;
      const fallback = new Image();
      fallback.src = url;
      fallback.alt = "";
      heroIllustration.replaceChildren(fallback);
      heroIllustration.dataset.variant = theme;
      heroIllustration.setAttribute("aria-busy", "false");
    }
  };

  const setTheme = (preference, persist = true) => {
    const resolved = preference === "auto"
      ? (systemScheme.matches ? "dark" : "light")
      : preference;
    root.dataset.themePreference = preference;
    root.dataset.theme = resolved;
    document.body.dataset.theme = resolved;
    setHeroIllustration(resolved);
    if (persist) {
      try { localStorage.setItem(themeKey, preference); } catch (_) {}
    }
    if (themeToggle) {
      const next = resolved === "dark" ? "light" : "dark";
      themeToggle.setAttribute("aria-label", `Use ${next} theme`);
      themeToggle.title = `Use ${next} theme`;
    }
  };

  themeToggle?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  systemScheme.addEventListener?.("change", () => {
    if (root.dataset.themePreference === "auto") setTheme("auto", false);
  });

  const closeMenu = () => {
    if (!menu || !menuToggle) return;
    menu.removeAttribute("data-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
    pageRegions.forEach((region) => { region.inert = false; });
  };

  menuToggle?.addEventListener("click", () => {
    const open = !menu?.hasAttribute("data-open");
    if (open) {
      menu?.setAttribute("data-open", "");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Close navigation");
      document.body.classList.add("menu-open");
      pageRegions.forEach((region) => { region.inert = true; });
    } else {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const menuWasOpen = menu?.hasAttribute("data-open");
      closeMenu();
      document.querySelectorAll(".top-nav__dropdown[open]").forEach((item) => {
        item.removeAttribute("open");
      });
      if (menuWasOpen) menuToggle?.focus();
    }
  });

  mobileNavigation.addEventListener?.("change", (event) => {
    if (!event.matches) closeMenu();
  });

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".top-nav__dropdown[open]").forEach((item) => {
      if (!item.contains(event.target)) item.removeAttribute("open");
    });
  });

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") || "";
      const original = button.querySelector("span")?.textContent;
      try {
        await navigator.clipboard.writeText(value);
        button.classList.add("is-copied");
        const label = button.querySelector("span");
        if (label) label.textContent = "Copied";
        window.setTimeout(() => {
          button.classList.remove("is-copied");
          if (label && original) label.textContent = original;
        }, 1600);
      } catch (_) {}
    });
  });

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.setAttribute("data-visible", ""));
  }

  setTheme(root.dataset.themePreference || "auto", false);
})();
