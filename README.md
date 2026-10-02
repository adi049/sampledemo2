# LUNA Insurance — insurance marketplace (React + Vite)

A multi-page insurance marketplace front end: quote-first homepage, nine insurance
categories, grouped product pages, claims/renewal/support journeys, and a corporate
navy footer. Built as a design and product demonstration — no policy is issued and
no payment is collected.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the build on :4173
```

## Stack

| Concern | Choice |
| --- | --- |
| Framework | React 18 + Vite 5 |
| Routing | react-router-dom 6 |
| Styling | Tailwind CSS 3 (custom theme, no UI kit) |
| Animation | Framer Motion 11 (`whileInView` reveals only) |
| Icons | lucide-react (line icons, no emoji) |
| Fonts | Manrope Variable (display) + Inter Variable (text), self-hosted via Fontsource |

## Routes

```
/                                  Home
/insurance                         All categories
/insurance/:category               Category overview (9 categories)
/insurance/:category/:product      Product detail (24 products)
/quote                             Quote form (?type=car|bike|health|life)
/claims        /renewal            Claims and renewal journeys
/support       /faq                Support channels, FAQ
/about  /contact  /careers  /partners  /how-it-works
/login                             OTP-style sign-in (UI only)
/legal/privacy | /legal/terms | /legal/disclaimer
*                                  404
```

Unknown category or product slugs redirect to `/insurance`; an unknown
`/legal/:slug` redirects to the privacy page.

## Design system

Palette (the only colours used):

```
#0B1F33 navy      #123B5D navy-mid   #0F766E teal      #E6F7F4 teal-tint
#D4A72C gold      #F3E8C2 gold-tint  #F7F8F6 offwhite  #FFFFFF white
#17212B text      #5E6B75 muted      #DCE5E8 border    #B3261E error
```

Radii: buttons 9px, cards 14px, inputs 9px, section blocks 18px — nothing
pill-shaped. Section rhythm: 80–120px desktop, 50–80px mobile.

Motion contract: opacity 0→1 with translateY 20→0, `viewport={{ once: true,
amount: 0.2 }}`, 400–650ms, ease `[0.22, 1, 0.36, 1]`, 60–100ms stagger. No
rotation, bounce, spin, or aggressive zoom. Card hover is a 3–4px lift, a border
colour change, a soft shadow and a 2–3px icon nudge.

## Structure

```
src/
  components/
    layout/    Header (mega menu), MobileNav, Footer, Logo
    home/      Hero, QuoteWidget, CategoryGrid, TrustBand, ProductExplorer,
               WhyChooseUs, HowItWorks, Partners, DigitalExperience,
               SupportSection, FaqSection, FinalCta
    shared/    PageHero + Breadcrumbs, Blocks (CardGrid/Checklist/NoteCard/
               ProductCards/StatementRow), ContactForm
    ui/        Reveal (Reveal/Stagger/StaggerItem/RevealImage), Button,
               Section (Container/Section/SectionHeading), Accordion
  data/        catalog.js (categories + products), content.js (nav + copy)
  pages/       17 route components
  lib/         cn.js, usePageTitle.js
```

## Content honesty

The brief forbids invented proof. Accordingly the site contains **no** customer
counts, policy counts, claim-settlement ratios, app download numbers,
testimonials, star ratings, named reviewers, partner logos or contact details.

- Trust statements are qualitative ("Plans from licensed insurers", "No
  sponsored ranking").
- The partner section renders neutral "Provider slot" placeholders.
- Testimonials are replaced by a factual customer-support section.
- The careers page states there are no open vacancies rather than inventing
  roles; address and support email are marked as placeholders to be published
  before launch.
- `/legal/disclaimer` and the footer bottom bar carry the demonstration-build
  statement and note where regulatory registration details must go.

Product copy sticks to verifiable Indian insurance facts: third-party motor
cover is mandatory under the Motor Vehicles Act, No Claim Bonus, cashless
network hospitals and garages, pre-existing-disease waiting periods, tax
treatment under Sections 80C/80D/10(10D) "subject to conditions", pure term
plans having no maturity benefit, and Insurance Ombudsman escalation.

## Responsive behaviour

Verified at 360 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 px across all 33
routes: no horizontal overflow, no clipped text, no broken forms.

- Grids collapse 4 → 2 → 1.
- Mobile hero order: headline → description → CTAs → quote form → visual.
- Mobile inputs are full-width at 44–52px; interactive targets are ≥44px.
- Desktop navigation appears at `lg`; the callback link and mega-menu promo
  column appear at `xl`; below `lg` a full-screen animated panel takes over.
- Product navigation on mobile uses horizontal scroll tabs.

## Notes

- `vite.config.js` binds `0.0.0.0:5173` with `allowedHosts: true` so the dev
  server works behind a proxied preview host.
- Forms are front-end only: they validate, show success states and pass values
  through the URL, but no data is transmitted anywhere.
- Imagery is in `src/assets/`; SMC Insurance was used as a structural/UX
  reference only — no text, images, logos, data or other assets were copied.
