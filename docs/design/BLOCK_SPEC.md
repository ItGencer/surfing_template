# Block Spec - Surfing Institute

Оновлено: 2026-07-05.

Це блокова специфікація сайту "Surfing Institute" для реалізації у `Surfing_template`. Джерело - доданий дизайн-промпт користувача.

## Загальна стилістика

- Тема: surf-школа / інститут серфінгу.
- Візуальний ритм: full-bleed фото хвиль і серферів, потім контент-секція, потім знову full-bleed фото.
- Настрій: сучасний, енергійний, спортивний.
- Контраст: білий/чорний + один яскравий оранжевий акцент.
- Контейнер: `max-width: 1200-1280px`, бокові відступи `24-40px`.
- Desktop section padding: `96-120px` зверху і знизу.
- Image radius: `16-20px`.
- Card radius: `12px`.
- Button radius: `999px`.
- Тіні: мінімальні, переважно flat UI.

## Design Tokens

```css
:root {
  --color-accent: #f5621e;
  --color-accent-strong: #ff6a00;
  --color-text: #111111;
  --color-muted: #6b6b6b;
  --color-card: #f7f7f6;
  --color-border: #e5e5e3;
  --color-white: #ffffff;
  --radius-card: 12px;
  --radius-image: 16px;
  --radius-pill: 999px;
  --container: 1280px;
  --font-display: "Archivo Black", "Anton", "Poppins", sans-serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-logo: "Space Mono", "JetBrains Mono", monospace;
}
```

`to confirm`: точні шрифти і спосіб підключення.

## Глобальні патерни

### Section Header

Повторюється перед великими секціями.

- Маленький label: outline icon `~16px` + uppercase text `~13px`, оранжевий, centered.
- H2: `48-64px`, жирний, чорний, sentence case.
- Scribble underline: оранжевий SVG path під ключовим словом.
- Subtitle: `16-18px`, сірий `#6B6B6B`, centered, `max-width ~600px`.

### Full-Bleed Photo Divider

- Фото на всю ширину viewport.
- Без контейнера і тексту.
- Висота залежить від секції: від великого banner до майже full-screen.
- Фото має реально показувати хвилі, океан, серферів, дошки або пляж.

### Buttons

- Оранжевий фон.
- Білий текст.
- Pill shape.
- Font weight `600`.
- Єдині приклади: `Contact Us`, `Enroll Now`.

### Cards

- Світла база: `#F7F7F6`.
- Radius `12px`.
- Padding `24-32px`.
- Мінімум тіней.

### Brand Logo Text

- `SURF*ING` у hero.
- `SURF*IING` або `SURF*ING` у footer - spelling `to confirm`, бо в описі є обидва варіанти.
- Asterisk замінюється оранжевим графічним символом.
- Під словом - оранжевий scribble underline.

## Структура сторінки

```text
Header
Hero
Marquee Warning Ticker
About
Courses
Locations
Process
Gallery
Testimonials
FAQ
Marquee Warning Ticker
Footer
```

## Поточна задача: Hero first screen

Джерело уточнення - скриншот `Screenshot 2026-07-03 155304.png`, де показано верхню частину першого екрана. Для цієї ітерації реалізується тільки top experience: screenshot-like header + Hero. Інші секції можуть існувати лише як anchor targets/заглушки для навігації, без повної верстки блоків.

- Header у першій ітерації має точно підтримати референс: біла смуга приблизно `64px`, logo `Surfing` лівіше центру, desktop nav по центру, оранжева pill-кнопка `Contact Us` праворуч.
- Hero розташовується одразу під header і займає решту першого екрану.
- Hero повинен мати реальний bitmap-фон з хвилею/серфером у `src/assets/`, без зовнішнього URL.
- Перший екран має працювати на desktop і mobile: nav collapse у hamburger, button залишається доступною у mobile menu.
- Обов'язковий JS для цієї ітерації: scroll progress, mobile menu, smooth anchor scroll, hero chevron scroll.

## Поточна задача: About block

Джерело уточнення - скриншоти `Screenshot 2026-07-03 163140.png` і `Screenshot 2026-07-03 163156.png`, але локальні файли недоступні для читання в поточному середовищі. Для цієї ітерації About реалізується за наявною специфікацією нижче, без зміни Hero/Header.

- About розміщується одразу після Hero і має реальний `section#about`, щоб header nav і hero chevron скролили до блоку.
- Секція має білий фон, великий вертикальний відступ, центральний заголовок і двоколонковий content layout.
- Ліворуч: rounded image з локального asset `src/assets/`, без зовнішніх URL.
- Праворуч: два інформаційні блоки `About Us` і `Our Mission` з оранжевими outline-іконками, коротким текстом і видимими focus/hover станами тільки там, де є інтерактив.
- Під основним content layout: три stat cards `120+`, `95%`, `30+` з іконками і підписами.
- JS для цієї ітерації: count-up animation для stat values через `IntersectionObserver`, з fallback без анімації якщо observer недоступний або `prefers-reduced-motion`.
- Mobile: одна колонка, фото над текстом, stat cards складаються в одну колонку; текст не має накладатися на зображення або картки.

## Поточна задача: Hero Marquee Warning Ticker

Джерело уточнення - скриншоти `Screenshot 2026-07-03 165804.png` і `Screenshot 2026-07-03 165817.png`.

- Marquee реалізується як нижня частина `section class="hero" aria-labelledby="hero-title"`, а не окрема секція після Hero.
- Візуально ticker стоїть між Hero image і About: full-width orange strip, без контейнера, одразу перед білим фоном About.
- Height: `72-82px` desktop, `60-68px` mobile.
- Background: `#ff4b00` або `--color-accent-strong`.
- Text: білий, uppercase, heavy/bold, `24-28px` desktop, `18-22px` mobile, без letter-spacing.
- Поряд із текстом використовувати inline SVG outline icons білого кольору:
  - lifebuoy icon + `SHARK SIGHTED`;
  - fish/rocket-like shark icon + `WARNING`;
  - warning triangle icon + `NO SWIMMING`.
- Text order repeats exactly: `SHARK SIGHTED`, `WARNING`, `NO SWIMMING`.
- Animation: seamless horizontal loop, no empty gaps, no layout shift.
- JS для цієї ітерації: clone ticker group for seamless loop, set `aria-hidden` on cloned group, calculate animation duration from content width.
- Accessibility: visible text may repeat, but cloned moving copy must be `aria-hidden`; animation must stop for `prefers-reduced-motion`.

## 1. Header

- Sticky/fixed header.
- Висота: `64px` для screenshot-like першого екрана; попередній діапазон `72-80px` лишається допустимим для майбутньої повної версії.
- Білий фон.
- Bottom border: `1px solid #ECECEC`.
- Ліворуч logo:
  - іконка з двох оранжевих паралелограмів;
  - текст `Surfing` моноширинним шрифтом.
- Навігація: `About`, `Courses`, `Locations`, `Why Us`, `Testimonials`.
- Gap між nav items: `28-32px`.
- Праворуч button `Contact Us`.
- Під header: scroll progress bar висотою `4-5px`, оранжевий.

Mobile behavior для цієї ітерації: hamburger menu з `aria-expanded`, slide/dropdown panel під header, закриття після кліку по nav link або `Escape`.

## 2. Hero

- Full-bleed background photo: ocean wave with surfer.
- Height: `calc(100vh - 64px)` або мінімум `620px` на desktop; на mobile не менше `560px`.
- Dark gradient overlay знизу для читабельності.
- Centered H1: `SURF*ING`.
  - White.
  - `96-130px` desktop або responsive `clamp()`.
  - Very bold.
  - Uppercase.
  - Tight letter spacing.
- `*` - окремий оранжевий asterisk/star element.
- Під H1 - оранжевий SVG scribble underline.
- Додатковий eyebrow/label не потрібен, щоб Hero не виглядав як маркетингова заглушка.
- Rating block closer to bottom:
  - 5 orange stars;
  - `4.9/5` white bold;
  - caption `Best Rated Surfing Institute`.
- Subtitle:
  - `Whether you're a beginner or chasing barrels, we've got the perfect wave for you.`
  - White, centered, `20-24px`.
- Bottom center: small chevron-down icon with subtle bounce.

## 3. Marquee Warning Ticker

- Full width orange strip.
- Height: `60-70px`.
- Infinite horizontal scroll.
- White uppercase bold text `18-20px`.
- Items repeat:
  - fish outline icon;
  - `WARNING`;
  - triangle alert icon;
  - `NO SWIMMING`;
  - lifebuoy icon;
  - `SHARK SIGHTED`.
- Gap: `32-40px`.
- Same component is reused before footer.
- First implementation note: the first ticker is embedded at the bottom of Hero as `.hero-ticker`; the before-footer reuse remains in backlog.

## 4. About - Welcome to Surfing Institute

- Section padding: `~100px 0`.
- Heading:
  - line 1: `Welcome to`, gray, normal weight, `~48px`;
  - line 2: `Surfing Institute®`, black, bold, `~56px`;
  - orange scribble under key word;
  - `®` small orange superscript circle style.
- Two-column content:
  - Left: rounded photo of surfers in wave, width `~45%`.
  - Right: content blocks `About Us` and `Our Mission`.
  - Each block has orange outline icon, H3 `~22px`, gray paragraph `~15px`, line-height `1.6`.
- Stats row:
  - 3 cards.
  - Background `#F7F7F6`.
  - Icons: graduation cap, thumbs up, certificate.
  - Values: `120+`, `95%`, `30+`.
  - Labels: `Happy Students Taught`, `Student Satisfaction Rate`, `Certified Instructors`.

## Поточна задача: Courses sticky stack

Джерело уточнення - скриншоти користувача з Courses block. Для цієї ітерації реалізується тільки Courses після About, без зміни інших наступних секцій.

- Courses розміщується після About і має real `section#courses`, щоб header nav скролив до блоку.
- Section header:
  - label `Courses` з маленькою outline-іконкою в оранжевому кольорі;
  - title `Find Your Wave`;
  - оранжевий scribble stroke проходить під словом `Wave` і частково перетинає title, як у референсі;
  - centered subtitle: `To inspire surfers to connect with the ocean through fun, safe, and high-quality instruction.`
- Course stack:
  - 4 великі image panels у центральному контейнері `max-width ~1100px`;
  - panel height desktop `560-620px`, radius `12-16px`;
  - кожна panel має `position: sticky` і зупиняється під sticky header біля верху viewport;
  - наступна panel має більший `z-index` і під час скролу наїжджає поверх попередньої;
  - вертикальний overlap між panels приблизно `-240px` desktop, щоб у проміжних станах було видно складання блоків один на одного;
  - останній panel має додатковий bottom spacer, щоб sticky state міг дограти перед наступною секцією.
- Overlay card:
  - біла картка поверх фото, width `420-480px`, padding `36-44px`, radius `12px`;
  - позиції чергуються як у screenshots: beginner left, intermediate right, advanced left, kids right;
  - на desktop overlay не виходить за межі image panel;
  - mobile: overlay стає нижнім content block всередині panel, image лишається зверху, sticky overlap вимикається або сильно зменшується, щоб текст не перекривався.
- Course examples:
  - `Beginner Surfing Course`;
  - `Intermediate Coaching Surf`;
  - `Advanced Surfing Training`;
  - `Kids & Teens Surf Camps`.
- Inside overlay:
  - H3 `~40-48px` desktop;
  - description `~16px`, muted;
  - meta line, for example `Duration: 5 Days | Equipment Included`;
  - bottom row with `Enroll Now` pill button, 5 orange stars and `Trusted by ... students`.

## 5. Courses - Find Your Wave

- See current task above for the implemented sticky stack behavior.

## Поточна задача: Beaches / Locations block

Джерело уточнення - скриншоти користувача з Beaches block. Для цієї ітерації реалізується Locations section з візуальним label `Beaches`, без зміни Header/Hero/About/Courses.

- Секція має `section#locations`, щоб існуючий nav link `Locations` працював без зміни header.
- Візуальний header:
  - label `Beaches` з маленькою outline palm/beach icon, centered, оранжевий;
  - title `Our Locations`, дуже великий чорний, centered;
  - orange scribble stroke під словом/центром title, частково перетинає літери;
  - subtitle: `We run sessions in some of the world's most iconic surf spots`.
- Header має бути візуально під grid у проміжних scroll станах: cards можуть заходити поверх title/subtitle, як на screenshots. Для цього grid має negative top overlap і cards мають більший stacking layer.
- Layout desktop:
  - широкий контейнер `max-width ~1200px`;
  - masonry-like композиція з 5 cards;
  - Bali card зліва високо;
  - Byron Bay card справа зі зміщенням вниз;
  - Goa card centered нижче;
  - Hossegor card зліва нижче;
  - Santa Cruz card справа, приблизно навпроти Hossegor;
  - великі вертикальні проміжки між рядами, багато білого простору.
- Card style:
  - white/light card with `1px` border `#ECECEC`, radius `12px`, padding `20px` desktop;
  - image top, radius `8-10px`, height `300-360px`, `object-fit: cover`;
  - H3 `~28-34px`, display font, black;
  - country flag/emoji inline after title, `~28px`;
  - description muted, `16-18px`, line-height `1.45`;
  - flat/minimal shadow only if needed.
- Locations content:
  - `Bali, Indonesia` + `🇮🇩`;
  - `Byron Bay, Australia` + `🇦🇺`;
  - `Goa, India` + `🇮🇳`;
  - `Hossegor, France` + `🇫🇷`;
  - `Santa Cruz, California` + `🇺🇸`.
- Responsive:
  - tablet/mobile collapses to one column;
  - no negative overlap on narrow screens;
  - images keep stable aspect ratio;
  - cards and title must not create horizontal scroll.

## 6. Locations - Our Locations

- See current task above for the implemented Beaches/Locations block behavior.

## 7. Process - Beach to Board

- Before section: full-bleed surfer silhouette/wave banner.
- Section header:
  - label `Process`;
  - title `Beach to Board`;
  - subtitle `We make learning to surf easy, safe, and fun no experience needed.`
- Grid: 3 columns x 2 rows desktop, single column mobile.
- Step card:
  - Background `#F7F7F6`.
  - Radius `12px`.
  - Padding `~32px`.
  - Top row: orange outline icon left, step number right `01-06`.
  - H3 `~22px`.
  - Description `~14px`.
- Steps:
  - `01` Awareness.
  - `02` Familiarization.
  - `03` Paddling.
  - `04` Pop-Up.
  - `05` Wave Reading.
  - `06` Catch & Ride.

## 8. Photos - Meet Memories

- Section header:
  - label `Photos`;
  - title `Meet Memories`;
  - subtitle `Snapshots of unforgettable rides and perfect waves.`
- Layout:
  - three independent vertical carousel columns desktop.
  - Column 1: 3 photos, scrolling bottom-to-top cyclically.
  - Column 2: 3 photos, scrolling top-to-bottom cyclically.
  - Column 3: 4 photos, scrolling bottom-to-top cyclically.
  - Each column has its own speed and loop direction; the columns are not linked.
- Card style:
  - white/light card with `1px` border `#ECECEC`, radius `12px`, overflow hidden.
  - image fills card with `object-fit: cover`.
  - consistent vertical gap between cards.
- Responsive:
  - tablet: 2 columns.
  - mobile: 1 column.
  - avoid horizontal scroll.

## Поточна задача: Testimonials - Riders' Words

Джерело уточнення - скриншоти користувача з Testimonials block. Для цієї ітерації реалізується тільки Testimonials після Photos/Gallery, без зміни попередніх блоків.

- Секція має `section#testimonials`, щоб існуючий nav link `Testimonials` працював.
- Section header:
  - label `Testimonials` з маленькою outline heart icon, centered, оранжевий;
  - title `Riders' Words`, дуже великий чорний, centered;
  - orange scribble stroke під словом/центром title, частково заходить на літери;
  - subtitle: `Real stories from students who've paddled out, stood up, and fallen in love with the waves.`
- Layout desktop:
  - container `max-width ~1120-1200px`;
  - grid 3 columns x 2 rows;
  - gap `12-16px`, як на screenshot;
  - cards мають однакову ширину, але можуть виглядати різними через photo background або thumbnail.
- Card variants:
  - Light card: white / very light background, `1px` border `#ECECEC`, radius `8-12px`, black quote text, orange quote mark, optional bottom thumbnail image.
  - Photo card: image fills full card, dark gradient overlay, white quote mark/text/name/country.
- Card content:
  - quote mark `”` або paired quote glyph у top-left, `~34-42px`, orange on light cards, white on photo cards;
  - quote text `~22-25px` desktop, bold, line-height `1.18-1.28`;
  - author name `~15-17px`, bold/medium;
  - country label + flag emoji inline;
  - thumbnail on light cards: rounded image near bottom, height `120-150px`, full card width minus padding.
- People and exact copy:
  - Diego, Brazil 🇧🇷: `I never thought surfing could be this fun until these amazing instructors guided me patiently.`
  - Sofia, Spain 🇪🇸: `From my first paddle to my first wave, the team made every moment truly unforgettable.`
  - Jack, Australia 🇦🇺: `I felt safe, supported, and inspired throughout my entire learning journey with this passionate crew.`
  - Liam, USA 🇺🇸: `The instructors' energy and patience turned my nervousness into pure joy riding beautiful waves.`
  - Emma, UK 🇬🇧: `This surf school changed my life, giving me confidence and unforgettable memories.`
  - Priya, India 🇮🇳: `These coaches made learning easy, fun, and exciting while boosting my confidence in the ocean.`
- Responsive:
  - tablet: 2 columns;
  - mobile: 1 column;
  - photo cards must keep readable contrast and no text/image overlap.

## 9. Testimonials - Riders' Words

- See current task above for implemented screenshot-like Testimonials grid.

## 10. FAQ - Got Questions?

- Section header:
  - label `FAQs`;
  - title `Got Questions?`;
  - subtitle `Everything you need to know before you grab your board and hit the waves.`
- Accordion layout:
  - One column, `max-width ~900px`, centered.
  - Each item uses a light card background `#F7F7F6` with a `12px` radius.
  - Question text uses `18px`, bold, with a right-side toggle icon.
  - The closed state shows a `+` SVG icon and the open state switches to a `−` SVG icon.
  - The first item is open by default.
- Content copy:
  - `Do I need any surfing experience to join?` → `Not at all! We welcome complete beginners and will guide you from your very first paddle to riding waves confidently.`
  - `What should I bring to my surf lesson?` → `We provide boards and wetsuits. Just bring swimwear, sunscreen, a towel, and plenty of enthusiasm.`
  - `Are lessons safe for kids?` → `Yes! We offer specially designed sessions for children, with extra safety measures and small student-to-instructor ratios.`
  - `Can I book private lessons?` → `Absolutely. We offer both group and private coaching for individuals, friends, or families who want a personalized experience.`
  - `How long is a typical lesson?` → `Most sessions run for about 2 hours, giving you plenty of time to learn, practice, and have fun in the water.`
- Interaction:
  - Clicking a question toggles the answer open and closed.
  - The button updates `aria-expanded` and the icon state for accessibility.
  - `Can I book private lessons?`
  - `How long is a typical lesson?`

## 11. Footer

- Repeat the same warning marquee directly above the footer section.
- Footer background: dark surf-inspired surface, with a bright orange accent for the brand mark and scribble underline.
- Large decorative logo-title:
  - `SURF*ING` as the primary footer brand wordmark.
  - Orange asterisk/star.
  - Orange scribble underline.
- Footer nav links:
  - `About`;
  - `Courses`;
  - `Locations`;
  - `Why Us`;
  - `Testimonials`;
  - `FAQs`;
  - `Gallery`;
  - `Contact`.
- Divider line: `1px solid rgba(255,255,255,0.16)`.
- Bottom attribution: `Ask AI About Surfing Institute` with three small accent dots/icons.

## Responsive Notes

- Hero H1 must use responsive clamp so it never overflows mobile.
- Desktop nav can collapse on mobile.
- Course overlay cards should become normal stacked cards under images on narrow screens.
- Locations, Process, Testimonials grids should collapse to one column on mobile.
- Gallery can become 2 columns on tablet and 1 column on small mobile.
- Section padding should shrink on mobile, for example `64-80px`.
- Avoid text overlap with images, cards, ticker and footer logo.

## Interaction Notes

- Scroll progress bar reads current scroll position.
- Header nav links should anchor to sections.
- FAQ items toggle open/closed and update accessible state.
- Marquee should respect `prefers-reduced-motion`.
- Chevron in hero can smoothly scroll to About section.

## Open Questions

- Exact images and image licenses.
- Exact font source.
- Exact mobile navigation behavior.
- Real contact/enroll flow.
- Footer author name and AI icons.
- Whether final footer spelling is `SURF*ING` or `SURF*IING`.
