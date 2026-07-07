# Tasks

Оновлено: 2026-07-05.

## Documentation

- [x] Створити `CODEX.md` для майбутніх сесій Codex.
- [x] Створити `docs/codex/PROJECT_CONTEXT.md`.
- [x] Створити `docs/codex/TASKS.md`.
- [x] Створити `docs/codex/DECISIONS.md`.
- [x] Створити `docs/codex/TESTING.md`.
- [x] Створити `docs/design/BLOCK_SPEC.md`.
- [x] Створити `docs/design/references/` для референсів, скриншотів і зображень.
- [x] Оновити `docs/design/BLOCK_SPEC.md` під поточну Hero first screen і screenshot-like header.
- [x] Оновити `docs/design/BLOCK_SPEC.md` під поточний About block.
- [x] Оновити `docs/design/BLOCK_SPEC.md` під Hero Marquee Warning Ticker.
- [x] Оновити `docs/design/BLOCK_SPEC.md` під поточний Courses sticky stack block.
- [x] Оновити `docs/design/BLOCK_SPEC.md` під поточний Beaches / Locations block.
- [x] Оновити `docs/design/BLOCK_SPEC.md` під поточний Testimonials block.

## Completed This Iteration - Hero

- [x] Реалізувати screenshot-like sticky header з logo, desktop nav, `Contact Us` button і mobile hamburger.
- [x] Реалізувати Hero first screen з full-bleed surf-фоном, `SURF*ING`, оранжевим asterisk, scribble underline, subtitle, rating і chevron.
- [x] Додати оптимізований bitmap asset `src/assets/hero-surf-wave.webp`.
- [x] Додати `src/styles.scss` і підключити його через `src/index.js`.
- [x] Додати JS для scroll progress, mobile menu, `Escape` close і smooth anchor scroll.
- [x] Додати QA screenshots: `docs/design/references/hero-desktop-qa.png`, `docs/design/references/hero-mobile-qa.png`.

## Completed This Iteration - About

- [x] Реалізувати `section#about` з heading `Welcome to Surfing Institute®`, оранжевим kicker і scribble underline.
- [x] Додати двоколонковий About layout: локальне фото, блоки `About Us` і `Our Mission`.
- [x] Додати stat cards `120+`, `95%`, `30+` з outline-іконками.
- [x] Додати оптимізований bitmap asset `src/assets/about-surfers.webp`.
- [x] Додати JS count-up animation для stat values через `IntersectionObserver`.
- [x] Додати About QA screenshots: `docs/design/references/about-desktop-qa.png`, `docs/design/references/about-mobile-qa.png`.

## Completed This Iteration - Hero Marquee

- [x] Додати Hero bottom ticker як частину `section.hero`, між Hero content і About.
- [x] Додати inline SVG icons для `SHARK SIGHTED`, `WARNING`, `NO SWIMMING`.
- [x] Додати CSS seamless marquee animation, hover pause і `prefers-reduced-motion` fallback.
- [x] Додати JS для клонування ticker group і розрахунку animation duration.
- [x] Додати QA screenshots: `docs/design/references/hero-ticker-desktop-qa.png`, `docs/design/references/hero-ticker-mobile-qa.png`.


## Completed This Iteration - Courses

- [x] Реалізувати `section#courses` з header `Courses` / `Find Your Wave` і оранжевим scribble underline.
- [x] Додати 4 course panels: Beginner, Intermediate, Advanced, Kids & Teens.
- [x] Реалізувати sticky stacked scroll behavior: panel зупиняється під header, наступний panel наїжджає поверх попереднього через `position: sticky`, negative overlap і z-index.
- [x] Додати overlay course cards з `Enroll Now`, meta line, 5 stars і trusted students text.
- [x] Додати responsive fallback: на tablet/mobile панелі стають звичайними stacked cards без небезпечного накладання тексту.
- [x] Підключити локальні WebP assets через Webpack import для Courses images без зовнішніх URL.


## Completed This Iteration - Beaches / Locations

- [x] Реалізувати `section#locations` з visual label `Beaches`, title `Our Locations`, subtitle і оранжевим scribble underline.
- [x] Додати 5 location cards: Bali, Byron Bay, Goa, Hossegor, Santa Cruz.
- [x] Зробити desktop masonry-like композицію: cards розкладені ліворуч/праворуч/по центру з великими вертикальними проміжками як на screenshots.
- [x] Додати card styling: white card, subtle border, rounded image, large bold location title, inline country flag і muted description.
- [x] Додати responsive fallback: одна колонка на tablet/mobile без negative overlap і горизонтального скролу.
- [x] Підключити локальні WebP assets через Webpack imports для location images без зовнішніх URL.


## Completed This Iteration - Testimonials

- [x] Реалізувати `section#testimonials` з label `Testimonials`, title `Riders' Words`, subtitle і оранжевим scribble underline.
- [x] Додати 6 testimonial cards: Diego, Sofia, Jack, Liam, Emma, Priya.
- [x] Зробити screenshot-like 3x2 desktop grid з light cards і photo-background cards.
- [x] Додати quote marks, bold quote text, author/country з прапорами, thumbnails на light cards і gradient overlay на photo cards.
- [x] Підключити локальні assets через Webpack imports для testimonial images без зовнішніх URL.
- [x] Додати responsive fallback: 2 колонки на tablet, 1 колонка на mobile.

## To Confirm

- [ ] Підтвердити, чи наступний крок - повна верстка сайту в цьому Webpack-проєкті.
- [ ] Підтвердити джерело фото: локальні assets, власні файли, Unsplash/Pexels або AI-generated images.
- [ ] Підтвердити шрифти: локальні, Google Fonts або системні fallback.
- [ ] Підтвердити авторський текст у footer: `Ask AI About [Ім'я автора]`.
- [ ] Підтвердити, чи перейменовувати npm package з `my-portfolio-card`.
- [ ] Підтвердити реальні contact/enroll дії: mail link, форма, modal або заглушка.

## Implementation Backlog

- [ ] Створити базову структуру `src/index.html` з усіма секціями landing.
- [x] Додати `src/styles.scss` і імпортувати його в `src/index.js`.
- [x] Винести design tokens у `:root`: кольори, шрифти, радіуси, контейнер, відступи.
- [ ] Додати папку `src/assets/` і підготувати зображення для hero, banners, courses, locations, gallery, testimonials, footer.
- [x] Реалізувати sticky header з desktop nav, contact button і scroll progress bar.
- [x] Реалізувати hero `SURF*ING` з оранжевим asterisk і scribble underline.
- [ ] Реалізувати marquee warning ticker і повторити його перед footer. Hero ticker готовий; before-footer повтор ще в backlog.
- [x] Реалізувати About секцію з фото, текстовими блоками і статистикою.
- [x] Реалізувати Courses секцію з image + overlay card патерном і sticky stacked scroll behavior.
- [x] Реалізувати Locations masonry-like grid.
- [x] Реалізувати Process grid `Beach to Board`.
- [x] Реалізувати Photos block з трьома незалежними вертикальними каруселями.
- [x] Реалізувати Testimonials grid з light/photo-card варіантами.
- [x] Реалізувати FAQ accordion, перший пункт відкритий за замовчуванням.
- [x] Реалізувати footer з великим `SURF*ING`, nav links і attribution row.
- [ ] Додати адаптивність для tablet/mobile.
- [x] Додати manual QA screenshots у `docs/design/references/` після першої візуальної версії.

## Quality Checklist

- [ ] `npm run build` проходить без помилок.
- [ ] `npm run build` не виконано в Codex-середовищі: `node`/`npm` відсутні у PATH.
- [x] Локальний production build через `.\node_modules\.bin\webpack.cmd --mode production` проходить без помилок.
- [ ] `npm start` відкриває сторінку на `http://localhost:3000`.
- [x] Dev server через `.\node_modules\.bin\webpack.cmd serve --mode development --host 127.0.0.1 --no-open` відкриває сторінку на `http://127.0.0.1:3000`.
- [x] Desktop layout не має горизонтального скролу.
- [x] Mobile layout не обрізає hero-title, cards або navigation.
- [x] Header не перекриває контент після переходу по anchors.
- [x] Scroll progress bar рухається коректно.
- [x] Hero marquee анімується плавно і не створює layout shift.
- [x] FAQ accordion доступний з клавіатури.
- [ ] Фото мають alt-тексти або декоративно приховані, якщо вони не несуть змісту.
