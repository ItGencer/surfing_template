import "./styles.scss";
import heroImageUrl from "./assets/hero-surf-wave.webp";
import aboutImageUrl from "./assets/about-surfers.webp";

const courseImages = [aboutImageUrl, heroImageUrl, heroImageUrl, aboutImageUrl];

const initImages = () => {
  const aboutImage = document.querySelector("[data-about-image]");
  const courseImageElements = document.querySelectorAll("[data-course-image]");

  if (aboutImage) {
    aboutImage.src = aboutImageUrl;
  }

  courseImageElements.forEach((image) => {
    const imageUrl = courseImages[Number(image.dataset.courseImage || 0)];

    if (imageUrl) {
      image.src = imageUrl;
    }
  });
};

const initHeroTicker = () => {
  const track = document.querySelector("[data-hero-ticker-track]");
  const group = document.querySelector("[data-hero-ticker-group]");

  if (!track || !group) {
    return;
  }

  if (!track.querySelector("[data-hero-ticker-clone]")) {
    const clone = group.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.dataset.heroTickerClone = "true";
    track.appendChild(clone);
  }

  let isResizeTicking = false;

  const updateTicker = () => {
    const groupWidth = group.getBoundingClientRect().width;

    if (groupWidth > 0) {
      track.style.setProperty("--ticker-offset", `-${groupWidth}px`);
      track.style.setProperty("--ticker-duration", `${Math.max(groupWidth / 85, 18).toFixed(2)}s`);
    }

    isResizeTicking = false;
  };

  const requestTickerUpdate = () => {
    if (!isResizeTicking) {
      window.requestAnimationFrame(updateTicker);
      isResizeTicking = true;
    }
  };

  window.addEventListener("resize", requestTickerUpdate);
  updateTicker();
};

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

const initAboutStats = () => {
  const statValues = document.querySelectorAll("[data-stat-value]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!statValues.length) {
    return;
  }

  const setFinalValue = (element) => {
    element.textContent = `${element.dataset.count}${element.dataset.suffix || ""}`;
  };

  const animateValue = (element) => {
    const target = Number(element.dataset.count || 0);
    const suffix = element.dataset.suffix || "";
    const duration = 900;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      element.textContent = `${current}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(update);
      }
    };

    window.requestAnimationFrame(update);
  };

  const revealValue = (element) => {
    if (element.dataset.countStarted === "true") {
      return;
    }

    element.dataset.countStarted = "true";

    if (reducedMotion.matches) {
      setFinalValue(element);
      return;
    }

    animateValue(element);
  };

  if (!("IntersectionObserver" in window)) {
    statValues.forEach(setFinalValue);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealValue(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 },
  );

  statValues.forEach((element) => observer.observe(element));
};

const initSurfingPage = () => {
  initImages();
  initHeroTicker();
  initSurfingHero();
  initAboutStats();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSurfingPage);
} else {
  initSurfingPage();
}

const imgAbout = document.querySelector(".about__image");
if (imgAbout) {
  const aboutImageUrl = new URL("./assets/surfing.webp", import.meta.url).href;

  imgAbout.src = aboutImageUrl;
}