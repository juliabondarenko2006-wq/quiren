# Quiren — Single-Book Sales HTML Template

A free, dependency-free template for **selling one book**. Five pages, static HTML, two
stylesheets and one small script. No framework, no build step, no jQuery.

Built for html.design.

---

## Why this one

The catalogue had a `book-store-website-template` — a shop selling many books — but nothing
for a single title. That is the far more common need: an author launching one novel, a small
press promoting a lead title, a self-published writer who needs somewhere to point people.

## Layout spine — a book's front matter

Not a hero-features-testimonials landing page. The structure follows how a printed book
actually opens:

1. **Half-title line** — a mono colophon strip: *A novel · Iris Halloran · Quiren Press · March 2026*
2. **The jacket** — the cover, drawn in CSS, with a gilt rule frame, a spine and a page block
3. **Praise** — blurbs set as pull quotes on hairline rules
4. **Synopsis** — on a real reading measure, not full width
5. **The opening** — a typeset extract that fades out into "keep reading"
6. **Editions** → **Author**

## Pages

| File | What it demonstrates |
|---|---|
| `index.html` | Colophon strip, CSS jacket, format switcher, star line, praise, synopsis, typeset extract teaser, four editions, author block |
| `excerpt.html` | A full opening chapter set as a printed page — the typographic showcase |
| `author.html` | Biography, previous titles, and a working enquiry form with routing |
| `editions.html` | Four formats with specs and prices, retailer row, bibliographic detail table |
| `press.html` | Six reviews, tour dates, and a press-kit block |

## The cover is CSS, not a stock mockup

`.jacket` is built from type and borders — an inset gilt rule, a rotated `.jacket__spine`
and a striped `.jacket__pages` block on the Y axis, with a 3D tilt that eases flatter on
hover. Nothing is an image.

That matters practically: a stock cover mockup would never match your actual title, and
swapping the artwork on a photo means re-rendering a mockup. Here you change three lines of
HTML — imprint, title, author — and the jacket is yours. Under `prefers-reduced-motion` the
tilt is removed and the spine and page block are hidden, so it renders flat and clean.

## The typeset page

`.leaf` sets text the way a book does, and it is the reason to choose this template over a
generic landing page:

- A real reading measure (`--measure`, ~66 characters) rather than full-bleed text
- Drop cap on the opening paragraph only, with a small-caps first line
- Running head and folio (page number)
- Justified setting with `hyphens: auto`, and first-line indents on continuation paragraphs
- Set on paper — the one place in the site that leaves the oxblood ground

The teaser on the home page uses the same component with `.leaf--teaser`, which caps the
height and fades the text out.

## Design direction

- **Colour** — oxblood `#3b1420` ground, bone `#f3ebe1` type, gilt `#d8a657` accent. It is a
  hardback jacket, not a web page. Paper `#f6f1e8` appears only inside the typeset extract.
- **Type** — Bodoni Moda for display (a didone, which is what jackets have used for two
  centuries), Literata for reading (designed for long-form screen text), Red Hat Mono for
  the colophon lines, labels and folios.
- **Texture** — a fixed SVG bookcloth grain in `overlay`, one inline data URI.

## Files

```
quiren/
├── index.html  excerpt.html  author.html
├── editions.html  press.html
├── assets/
│   ├── css/  tokens.css · book.css
│   ├── js/   main.js
│   └── img/  CREDITS.md
└── README.md
```

**6.0 KB of CSS and 1.2 KB of JavaScript, gzipped.** Zero dependencies.

## Customising

Everything visual is a custom property at the top of `assets/css/tokens.css`:

```css
:root {
  --wine: #3b1420;   /* the jacket ground */
  --bone: #f3ebe1;   /* type              */
  --gilt: #d8a657;   /* the one accent    */
  --paper: #f6f1e8;  /* the extract page  */
  --measure: 34rem;  /* the reading column */
}
```

Change `--wine` and `--gilt` together and the whole book changes character — a black-and-red
thriller, a pale literary jacket, a green nature title.

To make it your book: edit the three lines inside `.jacket__front`, the title and hook in the
hero, and paste your own opening chapter into `.leaf__body` on `excerpt.html`.

## Accessibility

- Semantic landmarks; the jacket's decorative spine and page block are `aria-hidden`
- Star rating is decorative and hidden from assistive tech, with the score in adjacent text
- Format chips are real buttons; the buy label and price update together
- Focus rings visible throughout; `prefers-reduced-motion` removes the tilt, reveals and transitions

## Notes

- Photography loads from Unsplash at request time — see `assets/img/CREDITS.md`.
- Buttons that would take payment raise a toast. This is a front-end template; wire checkout
  to your own retailer links or payment provider.
- The book, author, reviews and quoted publications are invented for the demo. Replace them.

---

**Name check (informal, not a legal opinion)** — "Quiren"

- Google: no company, imprint or brand under this name; nearest is Quirk Books (a different
  Philadelphia publisher, different name)
- USPTO: no record returned for the exact mark
- Domain: no owner found for quiren.com
- Rejected during the search: **Halvane** (an active French supplements company),
  **Marrowe** (too close to the live MARROW mark)
- A *quire* is the binder's term for a gathered section of a book, which is where the name comes from
- Verdict: clear to ship
