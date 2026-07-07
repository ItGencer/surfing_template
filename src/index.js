import "./styles.scss";
import aboutImageUrl from "./assets/about.jpg";

import courseImages1 from "./assets/courseImages1.webp";
import courseImages2 from "./assets/courseImages2.webp";
import courseImages3 from "./assets/courseImages3.webp";
import courseImages4 from "./assets/courseImages4.webp";

import locationImages1 from "./assets/locationImages1.jpg";
import locationImages2 from "./assets/locationImages2.webp";
import locationImages3 from "./assets/locationImages3.webp";
import locationImages4 from "./assets/locationImages4.jpg";
import locationImages5 from "./assets/locationImages5.jpg";

import surfingImageUrl from "./assets/surfing.webp";
import surfingTwoImageUrl from "./assets/surfing_2.webp";
import surfingThreeImageUrl from "./assets/surfing_3.webp";
import surfingThreeJpgUrl from "./assets/surfing-3.jpg";
import surfingFourImageUrl from "./assets/surfing-4.jpg";
import surfingFiveImageUrl from "./assets/surfing_5.webp";

const COURSE_IMAGES = [courseImages1, courseImages2, courseImages3, courseImages4];
const LOCATION_IMAGES = [
  locationImages1,
  locationImages2,
  locationImages3,
  locationImages4,
  locationImages5,
];
const GALLERY_IMAGES = [
  aboutImageUrl,
  locationImages1,
  locationImages2,
  locationImages3,
  surfingImageUrl,
  surfingTwoImageUrl,
  surfingThreeImageUrl,
];
const TESTIMONIAL_IMAGES = [
  courseImages3,
  surfingThreeImageUrl,
  courseImages1,
  locationImages5,
  courseImages2,
  locationImages2,
];

const SINGLE_IMAGES = [
  { selector: "[data-about-image]", src: aboutImageUrl },
  { selector: ".about__image", src: surfingImageUrl },
  { selector: ".locations__image", src: surfingThreeJpgUrl },
  { selector: ".courses__image", src: surfingTwoImageUrl },
  { selector: ".process__image", src: surfingThreeImageUrl },
  { selector: ".gallery__image", src: surfingThreeImageUrl },
  { selector: ".testimonials__image", src: surfingFourImageUrl },
  { selector: ".faq__image", src: surfingFiveImageUrl },
];

const INDEXED_IMAGE_GROUPS = [
  { selector: "[data-course-image]", datasetKey: "courseImage", images: COURSE_IMAGES },
  { selector: "[data-location-image]", datasetKey: "locationImage", images: LOCATION_IMAGES },
  { selector: "[data-gallery-image]", datasetKey: "galleryImage", images: GALLERY_IMAGES },
  {
    selector: "[data-testimonial-image]",
    datasetKey: "testimonialImage",
    images: TESTIMONIAL_IMAGES,
  },
];

class ImageHydrator {
  constructor(singleImages, indexedImageGroups) {
    this.singleImages = singleImages;
    this.indexedImageGroups = indexedImageGroups;
  }

  init() {
    this.hydrateSingleImages();
    this.hydrateIndexedImages();
  }

  hydrateSingleImages() {
    this.singleImages.forEach(({ selector, src }) => {
      const image = document.querySelector(selector);
      this.setImageSource(image, src);
    });
  }

  hydrateIndexedImages() {
    this.indexedImageGroups.forEach(({ selector, datasetKey, images }) => {
      document.querySelectorAll(selector).forEach((image) => {
        const index = Number(image.dataset[datasetKey] || 0);
        this.setImageSource(image, images[index]);
      });
    });
  }

  setImageSource(image, src) {
    if (!image || !src) {
      return;
    }

    image.src = src;
  }
}

class HeroTicker {
  constructor(root) {
    this.root = root;
    this.track = root.querySelector("[data-hero-ticker-track]");
    this.group = root.querySelector("[data-hero-ticker-group]");
    this.isResizeTicking = false;
  }

  init() {
    if (!this.track || !this.group) {
      return;
    }

    this.cloneGroup();
    this.update();
    window.addEventListener("resize", this.requestUpdate);
  }

  cloneGroup() {
    if (this.track.querySelector("[data-hero-ticker-clone]")) {
      return;
    }

    const clone = this.group.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.dataset.heroTickerClone = "true";
    this.track.appendChild(clone);
  }

  requestUpdate = () => {
    if (this.isResizeTicking) {
      return;
    }

    window.requestAnimationFrame(() => this.update());
    this.isResizeTicking = true;
  };

  update() {
    const groupWidth = this.group.getBoundingClientRect().width;

    if (groupWidth > 0) {
      this.track.style.setProperty("--ticker-offset", `-${groupWidth}px`);
      this.track.style.setProperty(
        "--ticker-duration",
        `${Math.max(groupWidth / 85, 18).toFixed(2)}s`,
      );
    }

    this.isResizeTicking = false;
  }
}

class HeroTickerManager {
  init() {
    document
      .querySelectorAll("[data-hero-ticker]")
      .forEach((tickerRoot) => new HeroTicker(tickerRoot).init());
  }
}

class HeaderNavigation {
  constructor() {
    this.header = document.querySelector("[data-header]");
    this.progressBar = document.querySelector("[data-scroll-progress]");
    this.menuToggle = document.querySelector("[data-menu-toggle]");
    this.navPanel = document.querySelector("[data-nav-panel]");
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.isScrollTicking = false;
  }

  init() {
    this.bindMenuToggle();
    this.bindDocumentEvents();
    this.bindWindowEvents();
    this.updateScrollState();
  }

  bindMenuToggle() {
    if (!this.menuToggle) {
      return;
    }

    this.menuToggle.addEventListener("click", () => {
      const isOpen = this.menuToggle.getAttribute("aria-expanded") === "true";
      this.setMenuState(!isOpen);
    });
  }

  bindDocumentEvents() {
    document.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("keydown", this.handleDocumentKeydown);
  }

  bindWindowEvents() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.requestScrollUpdate, { passive: true });
  }

  handleDocumentClick = (event) => {
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
      this.closeMenu();
      return;
    }

    event.preventDefault();
    this.closeMenu();
    this.scrollToTarget(target);
  };

  handleDocumentKeydown = (event) => {
    if (event.key === "Escape") {
      this.closeMenu();
    }
  };

  handleResize = () => {
    if (window.innerWidth > 900) {
      this.closeMenu();
    }

    this.requestScrollUpdate();
  };

  requestScrollUpdate = () => {
    if (this.isScrollTicking) {
      return;
    }

    window.requestAnimationFrame(() => this.updateScrollState());
    this.isScrollTicking = true;
  };

  updateScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;

    if (this.progressBar) {
      this.progressBar.style.transform = `scaleX(${progress})`;
    }

    if (this.header) {
      this.header.classList.toggle("is-scrolled", scrollTop > 4);
    }

    this.isScrollTicking = false;
  }

  setMenuState(isOpen) {
    if (!this.header || !this.menuToggle || !this.navPanel) {
      return;
    }

    this.header.classList.toggle("is-menu-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    this.menuToggle.setAttribute("aria-expanded", String(isOpen));
    this.menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  }

  closeMenu() {
    this.setMenuState(false);
  }

  scrollToTarget(target) {
    const headerHeight = this.header ? this.header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: this.reducedMotion.matches ? "auto" : "smooth",
    });
  }
}

class CounterAnimator {
  constructor(selector) {
    this.values = document.querySelectorAll(selector);
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.observer = null;
  }

  init() {
    if (!this.values.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      this.values.forEach((element) => this.setFinalValue(element));
      return;
    }

    this.observer = new IntersectionObserver(this.handleEntries, { threshold: 0.45 });
    this.values.forEach((element) => this.observer.observe(element));
  }

  handleEntries = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      this.revealValue(entry.target);
      this.observer.unobserve(entry.target);
    });
  };

  revealValue(element) {
    if (element.dataset.countStarted === "true") {
      return;
    }

    element.dataset.countStarted = "true";

    if (this.reducedMotion.matches) {
      this.setFinalValue(element);
      return;
    }

    this.animateValue(element);
  }

  setFinalValue(element) {
    element.textContent = `${element.dataset.count}${element.dataset.suffix || ""}`;
  }

  animateValue(element) {
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
  }
}

class LocationsHeaderPin {
  constructor() {
    this.section = document.querySelector(".locations");
    this.header = document.querySelector(".locations__inner__header");
    this.grid = document.querySelector(".locations__inner__grid");
    this.isTicking = false;
  }

  init() {
    if (!this.section || !this.header || !this.grid) {
      return;
    }

    window.addEventListener("scroll", this.requestUpdate, { passive: true });
    window.addEventListener("resize", this.requestUpdate);
    this.update();
  }

  requestUpdate = () => {
    if (this.isTicking) {
      return;
    }

    window.requestAnimationFrame(() => this.update());
    this.isTicking = true;
  };

  update() {
    if (window.innerWidth <= 900) {
      this.section.style.setProperty("--locations-header-opacity", "1");
      this.isTicking = false;
      return;
    }

    const sectionTop = this.section.getBoundingClientRect().top + window.scrollY;
    const gridTop = this.grid.getBoundingClientRect().top + window.scrollY;
    const scrollStart = Math.max(sectionTop + 80, gridTop - window.innerHeight * 0.62);
    const fadeDistance = Math.max(window.innerHeight * 0.58, 420);
    const progress = Math.min(Math.max((window.scrollY - scrollStart) / fadeDistance, 0), 1);
    const opacity = 1 - progress * 0.86;

    this.section.style.setProperty("--locations-header-opacity", opacity.toFixed(3));
    this.isTicking = false;
  }
}

class FaqAccordion {
  constructor(selector) {
    this.items = document.querySelectorAll(selector);
  }

  init() {
    if (!this.items.length) {
      return;
    }

    this.items.forEach((item) => this.bindItem(item));
  }

  bindItem(item) {
    const button = item.querySelector("[data-faq-button]");

    if (!button) {
      return;
    }

    button.setAttribute("aria-expanded", String(item.classList.contains("is-open")));
    button.addEventListener("click", () => this.toggleItem(item, button));
  }

  toggleItem(item, button) {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    this.closeAll();

    if (!isExpanded) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  }

  closeAll() {
    this.items.forEach((item) => {
      item.classList.remove("is-open");
      const button = item.querySelector("[data-faq-button]");

      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  }
}

class SurfingPage {
  init() {
    new ImageHydrator(SINGLE_IMAGES, INDEXED_IMAGE_GROUPS).init();
    new HeroTickerManager().init();
    new HeaderNavigation().init();
    new CounterAnimator("[data-stat-value]").init();
    new LocationsHeaderPin().init();
    new FaqAccordion("[data-faq-item]").init();
  }
}

const bootSurfingPage = () => new SurfingPage().init();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootSurfingPage);
} else {
  bootSurfingPage();
}
