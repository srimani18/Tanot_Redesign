# Tanot Solutions — Next.js Homepage Redesign

A responsive Next.js implementation of the Tanot Solutions homepage redesign concept. The project uses the Next.js App Router, React, TypeScript, and CSS design tokens with reusable React components.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Implementation notes

- `app/page.tsx` contains reusable React components and data-driven service, process, and article sections.
- `app/globals.css` contains the responsive visual system, layout rules, and reduced-motion support.
- `app/layout.tsx` defines document metadata, canonical URL, Open Graph metadata, and viewport settings.
- The mobile navigation and FAQ accordions use React state, rather than direct DOM scripting.
- The performance dashboard, partner names, results, and testimonial are concept/placeholder content. Verify all figures, logos, testimonials, contact details, and permissions before production launch.
- The CTA currently uses a mailto link. Connect a validated server-side form or CRM endpoint if lead capture is required.
- Before replacing an existing site, audit current URL paths, metadata, analytics, redirects, and Search Console data to protect SEO equity.

## Suggested next steps

1. Confirm the brand assets and approved proof points.
2. Connect the CMS if non-technical content editing is required (for example, Sanity).
3. Add production contact-form handling, spam protection, and CRM integration if needed.
4. Test keyboard accessibility, responsive breakpoints, Core Web Vitals, and redirects before deployment.
