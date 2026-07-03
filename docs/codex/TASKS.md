# Tasks

Оновлено: 2026-07-03.

## Documentation

- [x] Створити `CODEX.md` для майбутніх сесій Codex.
- [x] Створити `docs/codex/PROJECT_CONTEXT.md`.
- [x] Створити `docs/codex/TASKS.md`.
- [x] Створити `docs/codex/DECISIONS.md`.
- [x] Створити `docs/codex/TESTING.md`.
- [x] Створити `docs/design/BLOCK_SPEC.md`.
- [x] Створити `docs/design/references/` для референсів, скриншотів і зображень.

## To Confirm

- [ ] Підтвердити, чи наступний крок - повна верстка сайту в цьому Webpack-проєкті.
- [ ] Підтвердити джерело фото: локальні assets, власні файли, Unsplash/Pexels або AI-generated images.
- [ ] Підтвердити шрифти: локальні, Google Fonts або системні fallback.
- [ ] Підтвердити авторський текст у footer: `Ask AI About [Ім'я автора]`.
- [ ] Підтвердити, чи перейменовувати npm package з `my-portfolio-card`.
- [ ] Підтвердити реальні contact/enroll дії: mail link, форма, modal або заглушка.

## Implementation Backlog

- [ ] Створити базову структуру `src/index.html` з усіма секціями landing.
- [ ] Додати `src/styles.scss` і імпортувати його в `src/index.js`.
- [ ] Винести design tokens у `:root`: кольори, шрифти, радіуси, контейнер, відступи.
- [ ] Додати папку `src/assets/` і підготувати зображення для hero, banners, courses, locations, gallery, testimonials, footer.
- [ ] Реалізувати sticky header з desktop nav, contact button і scroll progress bar.
- [ ] Реалізувати hero `SURF*ING` з оранжевим asterisk і scribble underline.
- [ ] Реалізувати marquee warning ticker і повторити його перед footer.
- [ ] Реалізувати About секцію з фото, текстовими блоками і статистикою.
- [ ] Реалізувати Courses секцію з image + overlay card патерном.
- [ ] Реалізувати Locations masonry-like grid.
- [ ] Реалізувати Process grid `Beach to Board`.
- [ ] Реалізувати Gallery masonry grid.
- [ ] Реалізувати Testimonials grid з light/photo-card варіантами.
- [ ] Реалізувати FAQ accordion, перший пункт відкритий за замовчуванням.
- [ ] Реалізувати footer з великим `SURF*IING/SURF*ING`, nav links і attribution row.
- [ ] Додати адаптивність для tablet/mobile.
- [ ] Додати manual QA screenshots у `docs/design/references/` після першої візуальної версії.

## Quality Checklist

- [ ] `npm run build` проходить без помилок.
- [ ] `npm start` відкриває сторінку на `http://localhost:3000`.
- [ ] Desktop layout не має горизонтального скролу.
- [ ] Mobile layout не обрізає hero-title, cards або navigation.
- [ ] Header не перекриває контент після переходу по anchors.
- [ ] Scroll progress bar рухається коректно.
- [ ] Marquee анімується плавно і не створює layout shift.
- [ ] FAQ accordion доступний з клавіатури.
- [ ] Фото мають alt-тексти або декоративно приховані, якщо вони не несуть змісту.

