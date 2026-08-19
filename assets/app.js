(() => {
  const data = window.PORTFOLIO_DATA;

  const icons = {
    "arrow-up": '<path d="m18 15-6-6-6 6"/><path d="M12 9v12"/>',
    "arrow-up-right": '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
    "award": '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    "bot": '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
    "brain-circuit": '<path d="M9.5 4A2.5 2.5 0 0 1 12 6.5V20a2 2 0 0 1-4 0 2 2 0 0 1-2-2 2 2 0 0 1-2-2.4 2.5 2.5 0 0 1 .5-4.6 2.5 2.5 0 0 1 1.5-4.5A2.5 2.5 0 0 1 9.5 4Z"/><path d="M14.5 4A2.5 2.5 0 0 0 12 6.5V20a2 2 0 0 0 4 0 2 2 0 0 0 2-2 2 2 0 0 0 2-2.4 2.5 2.5 0 0 0-.5-4.6A2.5 2.5 0 0 0 18 6.5 2.5 2.5 0 0 0 14.5 4Z"/>',
    "briefcase-business": '<path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    "calendar-check": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    "check": '<path d="m20 6-11 11-5-5"/>',
    "chart-no-axes-combined": '<path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.708 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/>',
    "code-2": '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
    "copy": '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    "file-text": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h8"/>',
    "folder-kanban": '<path d="M2 7h5l2 2h13"/><path d="M5 13h14"/><path d="M12 13v6"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
    "github": '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.65 5.65 0 0 0 19.22 3.3 5.4 5.4 0 0 0 19.08 1S17.9.65 15 2.48a13.38 13.38 0 0 0-7 0C5.1.65 3.92 1 3.92 1a5.4 5.4 0 0 0-.14 2.3A5.65 5.65 0 0 0 2.28 7.3c0 5.6 3.44 6.85 6.72 7.25A4.8 4.8 0 0 0 8 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    "layout-template": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    "list-checks": '<path d="m3 7 2 2 4-4"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "menu": '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    "medal": '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.61 2.14a2 2 0 0 1 .13 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "message-circle": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
    "messages-square": '<path d="M14 9a2 2 0 0 1-2 2H6l-4 3V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v10l-4-3h-6a2 2 0 0 1-2-2v-1"/>',
    "moon": '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    "panels-top-left": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    "radio-tower": '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2a6 6 0 0 1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="m16.2 7.8a6 6 0 0 1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
    "rocket": '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.12-.1-2.91a2.18 2.18 0 0 0-2.9-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    "send": '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    "server": '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    "shopping-cart": '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L22 7H5.12"/>',
    "sparkles": '<path d="m12 3-1.9 4.8a2 2 0 0 1-1.1 1.1L4.2 11l4.8 1.9a2 2 0 0 1 1.1 1.1l1.9 4.8 1.9-4.8a2 2 0 0 1 1.1-1.1l4.8-1.9-4.8-1.9a2 2 0 0 1-1.1-1.1Z"/><path d="M5 3v4"/><path d="M7 5H3"/>',
    "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    "ticket-check": '<path d="M2 9a3 3 0 0 0 0 6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a3 3 0 0 0 0-6V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9 12 2 2 4-4"/>',
    "workflow": '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
  };

  function iconSvg(name, className = "icon") {
    const paths = icons[name] || icons["code-2"];
    return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach((el) => {
      el.innerHTML = iconSvg(el.dataset.icon);
      el.classList.add("icon-slot");
    });
  }

  const projectGrid = document.getElementById("projectGrid");
  const filters = document.getElementById("projectFilters");
  const projectCount = document.getElementById("projectCount");
  const dialog = document.getElementById("projectDialog");
  const dialogContent = document.getElementById("dialogContent");
  let currentFilter = "All";

  function renderFilters() {
    filters.innerHTML = data.categories.map((category) => `
      <button class="filter ${category === currentFilter ? "active" : ""}" type="button" data-filter="${category}">
        ${category}
      </button>
    `).join("");
  }

  function renderProjects() {
    const list = currentFilter === "All"
      ? data.projects
      : data.projects.filter((project) => project.category === currentFilter);

    projectCount.textContent = `${list.length} project${list.length === 1 ? "" : "s"}`;
    projectGrid.innerHTML = list.map((project, index) => {
      const projectIndex = data.projects.indexOf(project);
      return `
      <article class="project-card reveal visible" style="--delay:${index * 35}ms" data-project-card="${projectIndex}" tabindex="0" aria-label="Open details for ${project.title}">
        <div class="project-visual accent-${project.accent}">
          <div class="project-icon">${iconSvg(project.icon, "icon icon-lg")}</div>
          <div class="visual-grid" aria-hidden="true"></div>
          <span class="project-index">${String(data.projects.indexOf(project) + 1).padStart(2, "0")}</span>
        </div>
        <div class="project-body">
          <span class="project-category">${project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tech-list">${project.stack.slice(0, 8).map((tech) => `<span>${tech}</span>`).join("")}${project.stack.length > 8 ? `<span class="tech-more">+${project.stack.length - 8}</span>` : ""}</div>
          <div class="project-actions">
            <button class="project-detail" type="button" data-project="${projectIndex}">Details ${iconSvg("arrow-up-right")}</button>
            <a href="${project.github}" target="_blank" rel="noreferrer">GitHub ${iconSvg("github")}</a>
          </div>
        </div>
      </article>
    `;
    }).join("");
  }

  function renderStack() {
    document.getElementById("stackGrid").innerHTML = data.stackGroups.map((group) => `
      <article class="stack-card reveal">
        <div class="stack-title">${iconSvg(group.icon, "icon icon-lg")}<h3>${group.title}</h3></div>
        <div class="stack-items">${group.items.map((item) => `<span>${item}</span>`).join("")}</div>
      </article>
    `).join("");
  }

  function renderTimeline() {
    document.getElementById("timeline").innerHTML = data.timeline.map((item) => `
      <article class="timeline-item reveal">
        <div class="timeline-icon">${iconSvg(item.icon)}</div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <span class="timeline-date">${item.dates}</span>
      </article>
    `).join("");
  }

  let dialogTrigger = null;

  function openProject(index) {
    const project = data.projects[index];
    if (!project) return;

    const contributionLabel = project.contributionLabel || "Key contributions";
    const highlights = project.highlights || project.details || [];
    dialogTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    dialogContent.innerHTML = `
      <div class="dialog-kicker">${project.category}</div>
      <div class="dialog-heading">
        <div class="dialog-project-icon accent-${project.accent}">${iconSvg(project.icon, "icon icon-xl")}</div>
        <div>
          <h2 id="dialogTitle">${project.title}</h2>
          <p class="dialog-overview">${project.summary}</p>
        </div>
      </div>

      <div class="dialog-case-grid">
        <div class="dialog-section dialog-info-card problem-card">
          <h3 class="dialog-section-label">The problem</h3>
          <p>${project.problem || project.summary}</p>
        </div>

        <div class="dialog-section dialog-info-card solution-card">
          <h3 class="dialog-section-label">Solution / approach</h3>
          <p>${project.solution || project.summary}</p>
        </div>
      </div>

      ${project.impact ? `
        <div class="dialog-impact">${iconSvg("rocket")}<span>${project.impact}</span></div>
      ` : ""}

      <div class="dialog-section">
        <h3 class="dialog-section-label">${contributionLabel}</h3>
        <ul class="detail-list dialog-highlights">${highlights.map((detail) => `<li><span class="detail-check">${iconSvg("check")}</span><span>${detail}</span></li>`).join("")}</ul>
      </div>

      <div class="dialog-section">
        <h3 class="dialog-section-label">Technology stack</h3>
        <div class="tech-list dialog-tech">${project.stack.map((tech) => `<span>${tech}</span>`).join("")}</div>
      </div>

      <div class="dialog-actions">
        <a class="btn primary" href="${project.github}" target="_blank" rel="noreferrer">${iconSvg("github")} View on GitHub</a>
      </div>
    `;

    if (!dialog.open) dialog.showModal();
    document.body.classList.add("modal-open");
    dialogContent.scrollTop = 0;
    document.getElementById("dialogClose").focus({ preventScroll: true });
  }

  function closeProject() {
    if (dialog.open) dialog.close();
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    currentFilter = button.dataset.filter;
    renderFilters();
    renderProjects();
  });

  projectGrid.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-project]");
    if (detailButton) {
      openProject(Number(detailButton.dataset.project));
      return;
    }

    // Keep external links working normally; clicking anywhere else on a card opens its modal.
    if (event.target.closest("a, button")) return;
    const card = event.target.closest("[data-project-card]");
    if (card) openProject(Number(card.dataset.projectCard));
  });

  projectGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.target.closest("a, button")) return;
    const card = event.target.closest("[data-project-card]");
    if (!card) return;
    event.preventDefault();
    openProject(Number(card.dataset.projectCard));
  });

  document.getElementById("dialogClose").addEventListener("click", (event) => {
    event.stopPropagation();
    closeProject();
  });

  dialog.addEventListener("click", (event) => {
    // Native <dialog> backdrop clicks target the dialog itself. Only close when
    // the pointer is outside the visible dialog rectangle, never from content clicks.
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeProject();
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    dialogContent.scrollTop = 0;

    if (dialogTrigger && document.contains(dialogTrigger)) {
      dialogTrigger.focus({ preventScroll: true });
    }
    dialogTrigger = null;
  });

  const themeToggle = document.getElementById("themeToggle");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch {}
  const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
    themeToggle.innerHTML = iconSvg(theme === "dark" ? "sun" : "moon");
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }
  setTheme(preferredTheme);
  themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  function setMobileMenu(open) {
    mobileNav.classList.toggle("open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    mobileNav.inert = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    menuToggle.innerHTML = iconSvg(open ? "x" : "menu");
    document.body.classList.toggle("nav-open", open);
  }

  setMobileMenu(false);
  menuToggle.addEventListener("click", () => setMobileMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
  mobileNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMobileMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMobileMenu(false);
      menuToggle.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760 && menuToggle.getAttribute("aria-expanded") === "true") setMobileMenu(false);
  }, { passive: true });

  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");
  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
    backToTop.classList.toggle("show", window.scrollY > 700);
  }
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.getElementById("copyEmail").addEventListener("click", async () => {
    const status = document.getElementById("copyStatus");
    try {
      await navigator.clipboard.writeText("dev.hadeed@gmail.com");
      status.textContent = "Email copied to clipboard.";
    } catch {
      status.textContent = "Copy failed — email: dev.hadeed@gmail.com";
    }
    setTimeout(() => { status.textContent = ""; }, 2600);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  renderFilters();
  renderProjects();
  renderStack();
  renderTimeline();
  hydrateIcons();

  const trackedSections = ["work", "stack", "about", "experience", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const trackedLinks = [...document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav a[href^="#"]')];

  function setActiveSection(id) {
    trackedLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
  }

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.08, 0.2] });
    trackedSections.forEach((section) => navObserver.observe(section));
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }
})();
