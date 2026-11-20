/* LIEF docs: intentionally dependency-free. */
(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const THEME_KEY = "lief-color-scheme";
  const THEME_PREFERENCES = new Set(["auto", "light", "dark"]);
  const LANGUAGE_KEY = "lief-api-language";
  const languageOrder = { python: 0, cpp: 1, rust: 2 };
  const languageLabels = { python: "Python", cpp: "C++", rust: "Rust" };
  const languageIcons = {
    python: "fa-brands fa-python",
    cpp: "fa-regular fa-file-code",
    rust: "fa-brands fa-rust",
  };

  const readStorage = (key, fallback = null) => {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (_) {
      return fallback;
    }
  };

  const writeStorage = (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (_) {
      // Documentation remains fully usable when storage is unavailable.
      return false;
    }
  };

  const readCookie = (key) => {
    try {
      const prefix = `${encodeURIComponent(key)}=`;
      const item = document.cookie.split("; ")
        .find((entry) => entry.startsWith(prefix));
      return item ? decodeURIComponent(item.slice(prefix.length)) : null;
    } catch (_) {
      return null;
    }
  };

  const writeCookie = (key, value) => {
    try {
      const secure = location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` +
        `; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    } catch (_) {
      // The localStorage copy remains the primary persistence mechanism.
    }
  };

  const normalizeThemePreference = (value, fallback = "auto") =>
    THEME_PREFERENCES.has(value) ? value :
      (THEME_PREFERENCES.has(fallback) ? fallback : "auto");

  const readThemePreference = (fallback = "auto") => {
    const stored = readStorage(THEME_KEY);
    if (THEME_PREFERENCES.has(stored)) return stored;

    const cookie = readCookie(THEME_KEY);
    return THEME_PREFERENCES.has(cookie)
      ? cookie
      : normalizeThemePreference(fallback);
  };

  const writeThemePreference = (preference) => {
    const normalized = normalizeThemePreference(preference);
    writeStorage(THEME_KEY, normalized);
    writeCookie(THEME_KEY, normalized);
    return normalized;
  };

  const preferredIsDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const applyTheme = (preference) => {
    const normalized = normalizeThemePreference(preference);
    const resolved = normalized === "auto"
      ? (preferredIsDark() ? "dark" : "light")
      : normalized;
    root.dataset.themePreference = normalized;
    root.dataset.theme = resolved;
    body.dataset.theme = resolved;

    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      const next = resolved === "dark" ? "light" : "dark";
      toggle.setAttribute("aria-label", `Use ${next} theme`);
      toggle.title = `Use ${next} theme`;
    }
  };

  const initTheme = () => {
    const syncTheme = () => {
      const preference = readThemePreference(
        root.dataset.themePreference || "auto"
      );
      applyTheme(preference);
      writeCookie(THEME_KEY, preference);
    };

    syncTheme();
    document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(writeThemePreference(next));
    });

    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener?.("change", () => {
      if (readThemePreference() === "auto") applyTheme("auto");
    });

    window.addEventListener("pageshow", syncTheme);
    window.addEventListener("storage", (event) => {
      if (event.key === THEME_KEY) syncTheme();
    });
  };

  const initSidebar = () => {
    const toggle = document.querySelector("[data-sidebar-toggle]");
    const closeButtons = document.querySelectorAll("[data-sidebar-close]");
    const sidebar = document.querySelector(".docs-sidebar");
    if (!toggle || !sidebar) return;

    const mobileSidebar = window.matchMedia("(max-width: 54rem)");
    const syncSidebarAccessibility = () => {
      sidebar.inert = mobileSidebar.matches && !body.classList.contains("nav-open");
    };

    const setOpen = (open) => {
      body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      syncSidebarAccessibility();
      if (open) sidebar.querySelector("a, button, input")?.focus();
      else toggle.focus({ preventScroll: true });
    };

    syncSidebarAccessibility();
    mobileSidebar.addEventListener?.("change", syncSidebarAccessibility);
    toggle.addEventListener("click", () => setOpen(!body.classList.contains("nav-open")));
    closeButtons.forEach((button) => button.addEventListener("click", () => setOpen(false)));
    sidebar.addEventListener("click", (event) => {
      if (event.target.closest("a") && window.innerWidth <= 864) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && body.classList.contains("nav-open")) setOpen(false);
    });
  };

  const normalizeLanguage = (value) => {
    const label = value.replace(/\s+/g, " ").trim().toLowerCase();
    if (label === "python" || label.startsWith("python ")) return "python";
    if (label === "c++" || label === "cpp" || label.startsWith("c++ ")) return "cpp";
    if (label === "rust" || label.startsWith("rust ")) return "rust";
    return null;
  };

  const languageForElement = (element) => {
    if (element.dataset.language) return element.dataset.language;
    if (element.classList.contains("py") || element.classList.contains("python")) return "python";
    if (element.classList.contains("cpp")) return "cpp";
    if (element.classList.contains("rust")) return "rust";
    return normalizeLanguage(element.textContent || "");
  };

  const activateTab = (tab) => {
    const tablist = tab.closest('[role="tablist"]');
    const tabs = tablist ? [...tablist.querySelectorAll(".sphinx-tabs-tab")] : [];
    const container = tablist?.closest(".sphinx-tabs");
    if (!container) return;

    tabs.forEach((item) => {
      item.setAttribute("aria-selected", String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    container.querySelectorAll(":scope > .sphinx-tabs-panel").forEach((panel) => {
      panel.toggleAttribute("hidden", panel.id !== tab.getAttribute("aria-controls"));
    });
  };

  const updatePreferredApi = (language) => {
    document.querySelectorAll(".dropdown-item[data-language]").forEach((item) => {
      item.classList.toggle("is-preferred", item.dataset.language === language);
    });
  };

  const syncLanguageTabs = (language, sourceList = null) => {
    document.querySelectorAll('.sphinx-tabs [role="tablist"]').forEach((tablist) => {
      if (tablist === sourceList) return;
      const match = [...tablist.querySelectorAll(".sphinx-tabs-tab")]
        .find((tab) => tab.dataset.language === language);
      if (match) activateTab(match);
    });
    updatePreferredApi(language);
  };

  const initTabs = () => {
    const tabs = [...document.querySelectorAll(".sphinx-tabs-tab")];
    tabs.forEach((tab) => {
      const language = normalizeLanguage(tab.textContent || "");
      if (language) {
        const label = languageLabels[language];
        tab.dataset.language = language;
        tab.setAttribute("aria-label", label);
        tab.title = label;

        let icon = tab.querySelector(".fa");
        if (!icon) {
          icon = document.createElement("i");
          tab.prepend(icon);
        }
        icon.className = `fa ${languageIcons[language]}`;
        icon.setAttribute("aria-hidden", "true");
        [...tab.childNodes].forEach((node) => {
          if (node !== icon) node.remove();
        });
      }
      // An already-selected tab should not collapse its own code panel.
      tab.closest('[role="tablist"]')?.classList.remove("closeable");
    });

    const saved = readStorage(LANGUAGE_KEY);
    if (saved && languageOrder[saved] !== undefined) syncLanguageTabs(saved);

    document.addEventListener("click", (event) => {
      const tab = event.target.closest(".sphinx-tabs-tab[data-language]");
      if (!tab) return;
      const language = tab.dataset.language;
      writeStorage(LANGUAGE_KEY, language);
      syncLanguageTabs(language, tab.closest('[role="tablist"]'));
    });
  };

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  };

  const initCodeCopy = () => {
    document.querySelectorAll(".highlight").forEach((block) => {
      if (block.querySelector(":scope > .copy-code")) return;
      const code = block.querySelector("pre");
      if (!code) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code";
      button.textContent = "Copy";
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.addEventListener("click", async () => {
        try {
          await copyText(code.innerText.replace(/\n$/, ""));
          button.textContent = "Copied";
          button.classList.add("is-copied");
          window.setTimeout(() => {
            button.textContent = "Copy";
            button.classList.remove("is-copied");
          }, 1600);
        } catch (_) {
          button.textContent = "Select code";
        }
      });
      block.append(button);
    });
  };

  const closeApiMenus = (except = null) => {
    document.querySelectorAll(".dropdown.is-open").forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.classList.remove("is-open");
      dropdown.querySelector('[data-toggle="dropdown"]')?.setAttribute("aria-expanded", "false");
    });
  };

  const initFeatureComparisons = () => {
    document.querySelectorAll(".docs-content table").forEach((table) => {
      const headings = [...table.querySelectorAll(":scope > thead > tr > th")];
      const labels = headings.map((heading) =>
        heading.textContent.replace(/\s+/g, " ").trim().toLowerCase());
      const expected = ["module", "regular version", "extended version", "note"];
      if (labels.length !== expected.length ||
          !labels.every((label, index) => label === expected[index])) return;

      const statusIcons = [...table.querySelectorAll(".fa-check, .fa-xmark")];
      if (statusIcons.length === 0) return;

      table.classList.add("feature-comparison");
      headings.forEach((heading) => {
        heading.scope = "col";
      });
      statusIcons.forEach((icon) => {
        const available = icon.classList.contains("fa-check");
        icon.setAttribute("role", "img");
        icon.setAttribute("aria-label", available ? "Available" : "Not available");
      });

      let extendedGroupStarted = false;
      table.querySelectorAll("tbody tr").forEach((row) => {
        row.cells[0]?.setAttribute("role", "rowheader");
        const extendedOnly = row.cells[1]?.querySelector(".fa-xmark");
        if (extendedOnly) {
          row.classList.add("is-extended-only");
          if (!extendedGroupStarted) row.classList.add("starts-extended-group");
          extendedGroupStarted = true;
        }
      });
    });
  };

  const initLegacyCards = () => {
    document.querySelectorAll(".docs-content .card.shadow-light .card-title")
      .forEach((title) => title.setAttribute("aria-level", "3"));

    document.querySelectorAll(".docs-content .card.shadow-light .btn")
      .forEach((button) => {
        button.textContent = "Access LIEF Extended";
        if (button.target === "_blank") {
          button.rel = "noopener";
          button.setAttribute("aria-label", "Access LIEF Extended (opens in a new tab)");
        }
      });
  };

  const initApiMenus = () => {
    const seenIds = new Map();
    const dropdowns = [...document.querySelectorAll(".dropdown")];
    const preferred = readStorage(LANGUAGE_KEY);

    dropdowns.forEach((dropdown, dropdownIndex) => {
      const trigger = dropdown.querySelector(":scope > [data-toggle=\"dropdown\"]");
      const menu = dropdown.querySelector(":scope > .dropdown-menu");
      if (!trigger || !menu) return;

      const originalId = trigger.id || `lief-api-${dropdownIndex + 1}`;
      const count = (seenIds.get(originalId) || 0) + 1;
      seenIds.set(originalId, count);
      trigger.id = count === 1 ? originalId : `${originalId}-${count}`;
      trigger.href = "#";
      trigger.setAttribute("role", "button");
      trigger.setAttribute("aria-haspopup", "menu");
      trigger.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-labelledby", trigger.id);
      menu.setAttribute("role", "menu");

      const items = [...menu.querySelectorAll(":scope > .dropdown-item")];
      items.forEach((item) => {
        const code = item.querySelector("code");
        const language = code ? languageForElement(code) : null;
        if (language) {
          const label = languageLabels[language];
          const symbol = code.textContent.replace(/\s+/g, " ").trim();
          const iconHost = code.querySelector(".pre") || code;
          let icon = code.querySelector(".fa");
          if (!icon) {
            icon = document.createElement("i");
            iconHost.prepend(icon);
          }
          icon.className = `fa ${languageIcons[language]}`;
          icon.setAttribute("aria-hidden", "true");
          item.dataset.language = language;
          item.setAttribute("aria-label", `Open ${label} API reference for ${symbol}`);
        }
        item.setAttribute("role", "menuitem");
        if (item.getAttribute("href") === "#") {
          item.classList.add("is-unavailable");
          item.setAttribute("aria-disabled", "true");
          const label = languageLabels[language] || "API";
          const symbol = code?.textContent.replace(/\s+/g, " ").trim() || "symbol";
          item.setAttribute("aria-label", `${label} API reference unavailable for ${symbol}`);
          item.title = `${label} reference unavailable`;
          item.addEventListener("click", (event) => event.preventDefault());
        }
      });
      items
        .sort((a, b) => (languageOrder[a.dataset.language] ?? 9) - (languageOrder[b.dataset.language] ?? 9))
        .forEach((item) => menu.append(item));

      const setOpen = (open, focusFirst = false) => {
        closeApiMenus(open ? dropdown : null);
        dropdown.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", String(open));
        if (open && focusFirst) {
          menu.querySelector('.dropdown-item:not([aria-disabled="true"])')?.focus();
        }
      };

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        setOpen(!dropdown.classList.contains("is-open"));
      });
      trigger.addEventListener("keydown", (event) => {
        if (["Enter", " ", "ArrowDown"].includes(event.key)) {
          event.preventDefault();
          setOpen(true, true);
        }
      });
      menu.addEventListener("keydown", (event) => {
        const enabled = [...menu.querySelectorAll('.dropdown-item:not([aria-disabled="true"])')];
        const index = enabled.indexOf(document.activeElement);
        if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          trigger.focus();
        } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const offset = event.key === "ArrowDown" ? 1 : -1;
          enabled[(index + offset + enabled.length) % enabled.length]?.focus();
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          enabled[event.key === "Home" ? 0 : enabled.length - 1]?.focus();
        }
      });
    });

    if (preferred) updatePreferredApi(preferred);
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".dropdown")) closeApiMenus();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeApiMenus();
    });
  };

  const initFontAwesomeIcons = () => {
    document.querySelectorAll('.docs-content [role="heading"]:not([aria-level])')
      .forEach((heading) => heading.setAttribute("aria-level", "2"));

    document.querySelectorAll(".fa, .fa-solid, .fa-regular, .fa-brands").forEach((icon) => {
      if (!icon.hasAttribute("aria-label") && icon.getAttribute("role") !== "img") {
        icon.setAttribute("aria-hidden", "true");
      }
    });
  };

  const initContentSemantics = () => {
    document.querySelectorAll(".docs-content .toctree-wrapper ul").forEach((list) => {
      list.setAttribute("role", "list");
      [...list.children].forEach((item) => {
        if (item.matches("li")) item.setAttribute("role", "listitem");
      });
    });

    document.querySelectorAll(".docs-content table.docutils thead th:not([scope])")
      .forEach((heading) => heading.setAttribute("scope", "col"));
    document.querySelectorAll(".docs-content table.docutils tbody tr > th:first-child:not([scope])")
      .forEach((heading) => heading.setAttribute("scope", "row"));
    document.querySelectorAll(".docs-content table.genindextable")
      .forEach((table) => table.setAttribute("role", "presentation"));

    const dataTables = [...document.querySelectorAll(`
      .docs-content table.docutils:not(
        .feature-comparison,
        .field-list,
        .hlist,
        .citation,
        .highlighttable,
        .indextable,
        .contentstable,
        .modindextable
      )
    `)];
    const scrollRegions = dataTables.map((table) => {
      const region = document.createElement("div");
      region.className = "table-scroll";
      table.before(region);
      region.append(table);

      const caption = table.querySelector("caption")?.textContent.trim();
      const columns = [...table.querySelectorAll(":scope > thead > tr > th")]
        .map((heading) => heading.textContent.replace(/\s+/g, " ").trim())
        .filter(Boolean);
      region.dataset.tableLabel = caption ||
        (columns.length ? `${columns.join(" and ")} table` : "Documentation table");
      return region;
    });

    const syncTableOverflow = () => {
      scrollRegions.forEach((region) => {
        const overflows = region.scrollWidth > region.clientWidth + 1;
        region.classList.toggle("is-overflowing", overflows);
        if (overflows) {
          region.tabIndex = 0;
          region.setAttribute("role", "region");
          region.setAttribute("aria-label", region.dataset.tableLabel);
        } else {
          region.removeAttribute("tabindex");
          region.removeAttribute("role");
          region.removeAttribute("aria-label");
        }
      });
    };

    requestAnimationFrame(syncTableOverflow);
    window.addEventListener("resize", syncTableOverflow, { passive: true });
  };

  const initComparisons = () => {
    document.querySelectorAll("img-comparison-slider").forEach((slider) => {
      if (slider.dataset.ready === "true") return;
      const first = slider.querySelector('[slot="first"]');
      const second = slider.querySelector('[slot="second"]');
      if (!first || !second) return;
      slider.dataset.ready = "true";
      first.dataset.comparisonSide = "first";
      second.dataset.comparisonSide = "second";

      const control = document.createElement("input");
      control.type = "range";
      control.min = "0";
      control.max = "100";
      control.value = "50";
      control.className = "comparison-control";
      control.setAttribute("aria-label", "Image comparison position");
      control.addEventListener("input", () => {
        slider.style.setProperty("--comparison-position", `${control.value}%`);
      });

      const handle = document.createElement("span");
      handle.className = "comparison-handle";
      handle.setAttribute("aria-hidden", "true");
      slider.append(handle, control);
    });
  };

  const initScrollSpy = () => {
    const links = [...document.querySelectorAll('.page-toc a[href^="#"]')];
    if (!("IntersectionObserver" in window) || links.length === 0) return;
    const byId = new Map();
    links.forEach((link) => {
      try {
        const id = decodeURIComponent(link.hash.slice(1));
        if (id && !byId.has(id)) byId.set(id, link);
      } catch (_) {}
    });

    const visible = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
      const active = [...byId.keys()].find((id) => visible.get(id));
      links.forEach((link) => link.classList.toggle("is-active", link === byId.get(active)));
    }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
    byId.forEach((_, id) => {
      const heading = document.getElementById(id);
      if (heading) observer.observe(heading);
    });
  };

  const initKeyboardSearch = () => {
    document.addEventListener("keydown", (event) => {
      const target = event.target;
      const isField = target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
      const shortcut = (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
        (event.key === "/" && !isField && !event.metaKey && !event.ctrlKey && !event.altKey);
      if (!shortcut) return;
      const input = document.querySelector(".header-search input, .sidebar-search input");
      if (input) {
        event.preventDefault();
        input.focus();
        input.select();
      }
    });
  };

  const initTopNav = () => {
    document.addEventListener("click", (event) => {
      document.querySelectorAll(".top-nav__dropdown[open]").forEach((details) => {
        if (!details.contains(event.target)) details.removeAttribute("open");
      });
    });
  };

  initTheme();
  initSidebar();
  initTabs();
  initCodeCopy();
  initFeatureComparisons();
  initLegacyCards();
  initApiMenus();
  initFontAwesomeIcons();
  initContentSemantics();
  initComparisons();
  initScrollSpy();
  initKeyboardSearch();
  initTopNav();
})();
