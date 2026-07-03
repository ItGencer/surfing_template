# CODEX.md

Це робоча інструкція для майбутніх сесій Codex у проєкті `Surfing_template`.

## Суть проєкту

`Surfing_template` - статичний фронтенд-шаблон сайту "Surfing Institute": енергійний сайт surf-школи з full-bleed фото, великим hero `SURF*ING`, оранжевим акцентом, sticky header, секціями курсів, локацій, процесу навчання, галереї, відгуків, FAQ і футером.

Поточний стан коду: Webpack-проєкт з майже порожніми `src/index.html` і `src/index.js`. Документація в `docs/` є джерелом вимог для наступної верстки.

## Підтверджений стек

- Node.js/npm проєкт.
- Webpack 5.
- `webpack-dev-server` на порту `3000`.
- `html-webpack-plugin`.
- `mini-css-extract-plugin`.
- `sass-loader`, `sass`, `css-loader`.
- Обробка зображень через Webpack asset modules.

`to confirm`: чи залишати назву пакета `my-portfolio-card` у `package.json`, чи перейменувати під Surfing Institute.

## Основні команди

```bash
npm install
npm start
npm run build
```

- `npm start` запускає локальний dev server на `http://localhost:3000`.
- `npm run build` збирає production-файли в `public/`.
- Автоматичні тести поки не налаштовані.

У Codex sandbox може з'являтися повідомлення Git про `dubious ownership`. Це не означає, що проєкт зламаний.

## Перед початком роботи

1. Прочитай [PROJECT_CONTEXT.md](docs/codex/PROJECT_CONTEXT.md).
2. Перевір актуальні задачі в [TASKS.md](docs/codex/TASKS.md).
3. Звір дизайн з [BLOCK_SPEC.md](docs/design/BLOCK_SPEC.md).
4. Якщо змінюєш архітектурне або дизайн-рішення, додай запис у [DECISIONS.md](docs/codex/DECISIONS.md).
5. Перед завершенням перевір зміни за [TESTING.md](docs/codex/TESTING.md).

## Як працювати з кодом

- Тримай реалізацію простою: це односторінковий static landing, не застосунок із бекендом.
- Не додавай фреймворк без явного рішення. Поточний стек - vanilla HTML/JS + Sass через Webpack.
- Якщо створюєш стилі, бажаний шлях: `src/styles.scss`, імпортований у `src/index.js`.
- Винеси кольори, радіуси, шрифти, відступи й тривалості анімацій у CSS-змінні.
- Розбий JS на невеликі функції тільки для поведінки, яка справді потрібна: scroll progress, FAQ accordion, mobile nav, можливо marquee control.
- Зображення тримай у `src/assets/` або іншій зрозумілій папці, яку обробляє Webpack.
- Не хардкодь зовнішні URL, секрети, аналітику, API або форми відправки без підтвердження.

## Що важливо не зламати

- Sticky header з прогрес-баром скролу.
- Full-bleed hero і фото-переходи між секціями.
- Оранжевий акцент `#F5621E`/`#FF6A00` як головний бренд-колір.
- Великі, контрастні заголовки і фірмові scribble-підкреслення.
- Повторюваний marquee warning ticker під hero і перед footer.
- FAQ accordion з коректними open/closed станами.
- Адаптивність: mobile layout не має обрізати заголовок `SURF*ING`, overlay-картки курсів або навігацію.

## Перевірка перед фіналом

- Запусти `npm run build`.
- Якщо змінював UI, запусти `npm start` і перевір сторінку в браузері.
- Перевір desktop і mobile viewport.
- Перевір, що немає горизонтального скролу.
- Перевір sticky header, scroll progress, marquee, FAQ accordion, кнопки, секційні переходи.
- Перевір, що зображення не порожні, не занадто темні й не заважають читанню тексту.

