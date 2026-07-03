# Testing

Оновлено: 2026-07-03.

## Поточний стан

Автоматичні тести в проєкті не налаштовані. Основна перевірка зараз - build check і ручна візуальна QA.

## Команди

```bash
npm run build
```

Очікування:

- Webpack завершує production build без помилок.
- Папка `public/` створюється або оновлюється.
- Немає помилок імпорту стилів, assets або JS.

```bash
npm start
```

Очікування:

- Dev server стартує на `http://localhost:3000`.
- Сторінка відкривається без runtime-помилок у консолі.

## Ручна перевірка UI

Перевіряти після кожної помітної зміни верстки:

- Desktop viewport: приблизно `1440x900`.
- Tablet viewport: приблизно `768x1024`.
- Mobile viewport: приблизно `390x844`.
- Немає горизонтального скролу.
- Header sticky, не тремтить і не перекриває важливий контент.
- Scroll progress bar заповнюється пропорційно прокрутці.
- Hero фото видно full-bleed, текст читабельний, `SURF*ING` не обрізається.
- Оранжевий asterisk і scribble виглядають як частина бренду, а не випадковий символ.
- Marquee рухається плавно, без ривків і без порожніх проміжків.
- Course overlay-картки не виходять за межі фото на mobile.
- Locations grid коректно переходить у одну колонку на mobile.
- Gallery masonry не створює великих порожніх дір.
- Testimonials readable на світлих і photo-background картках.
- FAQ accordion відкривається/закривається кліком і з клавіатури.
- Footer nav і великий logo-title не налазять один на одного.

## Accessibility Checklist

- У всіх важливих зображень є змістовний `alt`.
- Декоративні зображення мають порожній `alt=""` або приховані від screen reader.
- Кнопки FAQ мають доступну назву і `aria-expanded`.
- Mobile menu, якщо буде доданий, має керувати `aria-expanded`.
- Focus states видимі на buttons, links, FAQ controls.
- Контраст тексту на фото достатній завдяки overlay/gradient.
- Анімації marquee і bounce не заважають читанню; бажано врахувати `prefers-reduced-motion`.

## Browser QA

Мінімально перевірити:

- Chrome або Chromium.
- Mobile emulation у devtools.

`to confirm`: чи потрібна окрема перевірка Safari/Firefox.

## Release Checklist

- [ ] `npm run build` успішний.
- [ ] Візуальна перевірка desktop/tablet/mobile виконана.
- [ ] Консоль браузера без помилок.
- [ ] Немає битих зображень.
- [ ] Немає непідтверджених реальних контактів, URL або цін.
- [ ] `docs/codex/TASKS.md` оновлено після виконаних робіт.
- [ ] `docs/codex/DECISIONS.md` оновлено, якщо були нові рішення.

