import "./styles.scss";

const initSurfingHero = () => {
  const header = document.querySelector("[data-header]");
  const progressBar = document.querySelector("[data-scroll-progress]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let isScrollTicking = false;

  const updateScrollState = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 4);
    }

    isScrollTicking = false;
  };

  const requestScrollUpdate = () => {
    if (!isScrollTicking) {
      window.requestAnimationFrame(updateScrollState);
      isScrollTicking = true;
    }
  };

  const setMenuState = (isOpen) => {
    if (!header || !menuToggle || !navPanel) {
      return;
    }

    header.classList.toggle("is-menu-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  const closeMenu = () => setMenuState(false);

  const scrollToTarget = (target) => {
    const headerHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link) {
      return;
    }

    const hash = link.getAttribute("href");

    if (!hash || hash === "#") {
      return;
    }

    const target = document.getElementById(hash.slice(1));

    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();
    scrollToTarget(target);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }

    requestScrollUpdate();
  });

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  updateScrollState();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSurfingHero);
} else {
  initSurfingHero();
}
