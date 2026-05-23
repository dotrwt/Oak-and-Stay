# Prompt: Rebrand & UI Overhaul — "Oak & Stay"

You are working on an existing full-stack rental marketplace web application built with **Node.js, Express 5, MongoDB/Mongoose, EJS templates with ejs-mate layouts, and Passport.js authentication**. The project follows a standard MVC structure with a `views/` folder containing EJS templates, a `public/` folder for static assets (CSS and client-side JS), and a `logo/` folder for branding assets.

---

## Your Task

Perform a **visual rebrand and UI overhaul only**. You must not touch any backend logic, routes, controllers, models, middleware, validation schemas, or database queries. All existing functionality — listings CRUD, reviews, user auth, image uploads, flash messages — must continue to work exactly as before.

---

## 1. Rename the Project

- Replace every occurrence of the old project name in the UI with **"Oak & Stay"**
- This includes: the browser `<title>` tag, the navbar brand/logo text, any footer copyright lines, page headings that reference the app name, and any meta description tags
- Do **not** rename any files, folders, variables, routes, or database fields

---

## 2. Replace the Logo

Design and implement a new SVG logo for **Oak & Stay** with these characteristics:

- An inline SVG mark — no external image file required
- The mark should evoke **warmth, nature, and shelter**: consider a minimal oak leaf, a stylised roof/house silhouette, or a combination of both
- Pair the mark with the wordmark **"Oak & Stay"** in a distinguished serif or slab-serif typeface (e.g. Playfair Display, Lora, Freight Display, or similar — load from Google Fonts if needed)
- The logo must look sharp in both the navbar (small, ~32px tall) and any larger hero/header placements
- Provide both a **light-background version** (dark mark) and a **dark-background version** (light/cream mark) using CSS classes so the navbar can switch variants depending on its background

---

## 3. UI Overhaul — Design Direction

Adopt a **warm, editorial, boutique-hotel aesthetic**: think rich earth tones, generous whitespace, refined typography, and subtle motion. The feeling should be "premium short-term rental" — elevated but approachable.

### Color Palette (implement as CSS custom properties in a `:root` block)

```css
:root {
  --oak-bark:     #2C1A0E;   /* deep espresso — primary text, navbar bg */
  --oak-warm:     #7C4A1E;   /* warm chestnut — accents, CTAs, links */
  --oak-sand:     #F5EFE6;   /* cream — page background */
  --oak-moss:     #4A5E3A;   /* forest green — secondary accent, badges */
  --oak-mist:     #EAE3D9;   /* light warm grey — card backgrounds, inputs */
  --oak-white:    #FDFAF7;   /* off-white — navbar on light pages */
  --oak-highlight:#C8864A;   /* amber highlight — hover states, stars */
  --radius-sm:    6px;
  --radius-md:    12px;
  --radius-lg:    20px;
  --shadow-card:  0 2px 12px rgba(44,26,14,0.08);
  --shadow-hover: 0 8px 28px rgba(44,26,14,0.16);
  --transition:   all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Typography

- **Display / headings**: Load `Playfair Display` (Google Fonts) — use for `h1`, `h2`, hero text, listing titles
- **Body / UI**: Load `DM Sans` (Google Fonts) — use for paragraphs, labels, nav links, buttons
- Set a comfortable base: `font-size: 16px`, `line-height: 1.7` on `body`
- Heading scale: `h1` 2.6rem, `h2` 2rem, `h3` 1.4rem — all in Playfair Display, `font-weight: 700`

---

## 4. Component-by-Component UI Instructions

### Navbar

- Background: `var(--oak-bark)` with a subtle `backdrop-filter: blur(8px)` when scrolled (add a `.scrolled` class via a small JS scroll listener)
- Logo: use the light variant of the new SVG logo on the left
- Nav links: DM Sans, 0.9rem, `var(--oak-white)` color, underline animation on hover (a `::after` pseudo-element that slides in from left)
- CTA buttons (Login, Register): pill shape (`border-radius: 999px`), outlined style normally, filled `var(--oak-warm)` on hover, smooth transition
- Active link: `var(--oak-highlight)` color
- On mobile: collapse into a hamburger menu (pure CSS checkbox toggle or minimal JS); the menu should slide down smoothly
- Make it fully **sticky** (`position: sticky; top: 0; z-index: 100`)

### Flash Messages

- Style as a slim, full-width banner just below the navbar — not a floating alert box
- Success: `var(--oak-moss)` left border (4px) on a `var(--oak-mist)` background
- Error/danger: warm red left border on a matching tinted background
- Auto-dismiss after 4 seconds with a fade-out CSS animation
- Include a close `×` button on the right

### Home / Listings Index Page

- Page background: `var(--oak-sand)`
- Add a **hero section** at the top (only on the index page) — a full-width banner with:
  - A warm gradient overlay (`linear-gradient(135deg, rgba(44,26,14,0.72), rgba(124,74,30,0.45))`) over a large background image (use the first featured listing image, or a CSS placeholder pattern if none)
  - Centered headline in Playfair Display: `"Find your perfect stay"` (large, white, ~3.5rem)
  - A short subline: `"Handpicked rentals for every kind of escape"` in DM Sans
  - Do not add a search bar — keep to what exists

- Listings grid: CSS Grid, `repeat(auto-fill, minmax(300px, 1fr))`, gap `1.5rem`, max-width `1200px`, centered with auto margins

### Listing Cards

This is the most important component — make it feel premium:

- Background: `var(--oak-white)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-card)`
- On hover: `transform: translateY(-4px)`, `box-shadow: var(--shadow-hover)`, smooth `var(--transition)`
- Image: 16:9 aspect ratio enforced with `aspect-ratio: 16/9`, `object-fit: cover`, `border-radius: var(--radius-lg) var(--radius-lg) 0 0`
- Image overlay on hover: a subtle warm gradient fades in from the bottom
- Card body: `padding: 1.2rem 1.4rem`
- Listing title: Playfair Display, `1.1rem`, `var(--oak-bark)`, single-line clamp with ellipsis
- Location/price text: DM Sans, `0.875rem`, `var(--oak-warm)`
- A thin `var(--oak-mist)` separator line between image and body
- "View Details" link styled as a small pill button that appears on hover

### Show / Detail Page (Single Listing)

- Two-column layout on desktop: image gallery on the left (60%), listing info on the right (40%)
- On mobile: stacks to single column
- Image: full-width within its column, `border-radius: var(--radius-md)`, shadow
- Listing title: `h1` in Playfair Display, large
- Price and location in `var(--oak-warm)`
- Description block: comfortable reading width (`max-width: 65ch`), `line-height: 1.8`
- Owner info: small card with avatar initial (CSS-generated circle, `var(--oak-warm)` background), owner name, and "Listed by" label

### Reviews Section

- Keep all existing review form fields and submit logic intact
- Style the review list as vertical cards: `var(--oak-mist)` background, `border-radius: var(--radius-md)`, subtle left border `var(--oak-highlight)`
- Reviewer name: DM Sans bold, `var(--oak-bark)`
- Review text: italic, `var(--oak-bark)` at 80% opacity
- Rating stars (if present): color `var(--oak-highlight)`
- Review form: inputs with `border: 1.5px solid var(--oak-mist)`, focus ring in `var(--oak-warm)`, labels in DM Sans small caps

### Forms (New Listing, Edit Listing, Login, Register)

- Centered card layout: max-width `520px`, `margin: 3rem auto`, `padding: 2.5rem`, `background: var(--oak-white)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-card)`
- All `<input>`, `<textarea>`, `<select>`: full width, `padding: 0.75rem 1rem`, `border: 1.5px solid var(--oak-mist)`, `border-radius: var(--radius-sm)`, `background: var(--oak-sand)`, `font-family: DM Sans`; on focus: border color `var(--oak-warm)`, soft box-shadow glow
- Labels: DM Sans, `0.8rem`, `letter-spacing: 0.06em`, `text-transform: uppercase`, `color: var(--oak-bark)` at 60% opacity
- Submit buttons: full width, `background: var(--oak-warm)`, white text, `border-radius: var(--radius-md)`, `padding: 0.85rem`, hover darkens to `var(--oak-bark)`, transition
- Validation error messages: DM Sans, `0.8rem`, warm red, appear below the relevant field

### Buttons (Global)

Define reusable button styles:

```
.btn-primary   → filled var(--oak-warm), white text, hover darkens
.btn-secondary → outlined var(--oak-warm), transparent bg, hover fills
.btn-danger    → filled warm red (#B94040), white text
.btn-sm        → 0.8rem font, reduced padding, same radius
```

All buttons: `border-radius: var(--radius-md)`, `font-family: DM Sans`, `font-weight: 500`, `letter-spacing: 0.02em`, `cursor: pointer`, smooth `var(--transition)`

### Footer

- Background: `var(--oak-bark)`, text `var(--oak-white)` at 70% opacity
- Two rows: top row with logo (light variant) + short tagline; bottom row with copyright `© 2025 Oak & Stay`
- Minimal padding (`2rem`), clean sans-serif, no elaborate columns needed

---

## 5. Responsiveness Requirements

Implement a **mobile-first** approach:

- Base styles target mobile (≤ 480px)
- `@media (min-width: 640px)` — tablet adjustments
- `@media (min-width: 1024px)` — desktop layout (two-column detail page, full grid, expanded navbar)

Breakpoint behaviour:
- Listings grid: 1 column on mobile → 2 on tablet → 3+ on desktop
- Detail page: stacked on mobile → two-column on desktop
- Navbar: hamburger on mobile → full horizontal on desktop
- Forms: full-width on mobile → centred card on desktop
- Hero headline: ~2rem on mobile → ~3.5rem on desktop

---

## 6. Micro-interactions & Motion

Add tasteful motion — nothing jarring:

- Cards: `translateY(-4px)` on hover (already specified above)
- Page load: a subtle `fade-in` animation on the main content area (`opacity 0 → 1`, `translateY 12px → 0`, duration `0.4s`, `ease-out`)
- Buttons: scale `1.02` on hover, scale `0.98` on active press
- Navbar links: sliding underline via `::after` pseudo-element
- Flash banners: slide down from top on enter, fade out on dismiss
- Image cards: image scales `1.04` on card hover (overflow hidden on the image wrapper)

All animations must respect `@media (prefers-reduced-motion: reduce)` — wrap keyframe animations in that query and disable them if the user prefers reduced motion.

---

## 7. What NOT to Change

- **No changes** to any `.js` files in `controller/`, `routes/`, `models/`, `utils/`, `middleware.js`, `app.js`, `schema.js`, or `cloudConfig.js`
- **No changes** to EJS template logic, form `action` attributes, `method` attributes, or any `<%=`, `<%`, `<%-` template tags
- **No changes** to Passport.js session handling, flash message generation, or Mongoose queries
- **No changes** to file/folder names or environment variable names
- **No removal** of any existing form fields, even if they are being restyled
- **No changes** to listing content, review content, or any user-facing text other than the app name

---

## Deliverables

1. Updated `public/css/style.css` (or a new `public/css/oak-stay.css` if you prefer to keep the original) — containing all the CSS variables, typography imports, component styles, and media queries described above
2. Updated `views/layouts/boilerplate.ejs` (or equivalent base layout) — with the new navbar HTML/SVG logo, Google Fonts `<link>` tags, and the updated `<title>` tag
3. Updated `views/listings/index.ejs` — with the hero section and restyled listing cards
4. Updated `views/listings/show.ejs` — with the two-column layout
5. Any other view files that need markup changes to support the new styles (forms, auth pages, footer)
6. A brief note on any Google Fonts CDN links added to the `<head>`

Do not modify any other files.