# 04 — Components & Styling

[← Back to Wiki Index](README.md)

## Root Layout & Typography

[src/app/layout.tsx](../../src/app/layout.tsx) configures:
- **Google Fonts** exposed as CSS variables:
  - `Inter` (`--font-inter`) — body text (`--font-sans`)
  - `Fredoka` (`--font-fredoka`) — headings & tactile buttons (`--font-display`)
  - `Caveat` (`--font-caveat`) — accent script (`--font-accent`)
- **Global Shell**: Wraps all pages in `<Header />`, `<main className="flex-grow">{children}</main>`, `<Footer />`, and `<ScrollToTop />`.
- **SEO & OpenGraph Metadata**: Sets `metadataBase` to `https://www.northernvisionke.org` along with site-wide title, description, keywords, and OpenGraph defaults.

---

## Tailwind CSS v4 Theme (`src/app/globals.css`)

[src/app/globals.css](../../src/app/globals.css) defines the design system via Tailwind v4 `@theme`:

| Token | Value | Role |
| :--- | :--- | :--- |
| `--color-brand-gold` | `#F39C12` | Accent / highlights |
| `--color-brand-espresso` | `#2B1100` | Headings & dark surfaces (`--color-heading`) |
| `--color-brand-cream` | `#F5F2EB` | Warm neutral surfaces (`--color-neutral-light`) |
| `--color-brand-rust` | `#D35400` | Primary brand actions (`--color-primary`) |
| `--color-brand-light-bg` | `#FAFAFA` | Page background |
| `--color-body` | `#4A4A4A` | Body copy |
| `--color-muted` | `rgba(43, 17, 0, 0.15)` | Borders & subtle dividers |

Custom container breakpoints (`640px`, `768px`, `1024px+`) and button typography rules (`button`, `a.rounded-full`, `a.rounded-xl`, `.tactile-btn`) are also defined globally.

---

## Shared & Feature Components

| Component | Location | Responsibility |
| :--- | :--- | :--- |
| `Header` | [src/app/components/Header.tsx](../../src/app/components/Header.tsx) | Sticky glass navigation bar & responsive mobile drawer |
| `Footer` | [src/app/components/Footer.tsx](../../src/app/components/Footer.tsx) | Site-wide footer links & organizational info |
| `ScrollToTop` | [src/components/ScrollToTop.tsx](../../src/components/ScrollToTop.tsx) | Floating scroll-to-top button |
| `CircleGalleryModal` | [src/app/components/CircleGalleryModal.tsx](../../src/app/components/CircleGalleryModal.tsx) | 2/3-column grid + fullscreen lightbox (`Esc`, `ArrowLeft`, `ArrowRight` keyboard navigation, top-right close button) |
| `MediaGalleryClient` | [src/app/media-gallery/MediaGalleryClient.tsx](../../src/app/media-gallery/MediaGalleryClient.tsx) | Category filter pills (`w-auto` wrap on mobile), Realtime WebSocket sync, native MP4 lightbox player |
| `ResourcesGallery` | [src/app/resources/ResourcesGallery.tsx](../../src/app/resources/ResourcesGallery.tsx) | Two-row 12-image showcase with `createPortal` fullscreen modal, pause-on-hover, and touch swipe |
| `FarmGallery` | [src/app/our-impact/gotu-farm/FarmGallery.tsx](../../src/app/our-impact/gotu-farm/FarmGallery.tsx) | Interactive photo gallery for Gotu Gamachu Farm |
| `CircleKeepersGallery` | [src/app/healing-circles/circle-keepers/CircleKeepersGallery.tsx](../../src/app/healing-circles/circle-keepers/CircleKeepersGallery.tsx) | Gallery for Circle Keeper training |
| `PublicationInteractive` | [src/app/resources/publications/two-worldviews/PublicationInteractive.tsx](../../src/app/resources/publications/two-worldviews/PublicationInteractive.tsx) | Interactive reader for *Two Worldviews* |
| `VisitApplicationForm` | [src/app/our-impact/eco-tourism/VisitApplicationForm.tsx](../../src/app/our-impact/eco-tourism/VisitApplicationForm.tsx) | Eco-tourism visit request form with client-side validation & submission state |
| `RegistrationForm` | [src/app/our-impact/holiday-camp/RegistrationForm.tsx](../../src/app/our-impact/holiday-camp/RegistrationForm.tsx) | Holiday camp parent email interest form |
