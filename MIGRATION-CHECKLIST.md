# AAA Future Edge migration checklist

Audit date: 2026-10-13

## Source-to-target file mapping

The Vite source contains 97 files under `src/components/`, 47 files under
`src/assets/`, and 22 files under `public/`. The target already contains
byte-identical copies of all three inventories. Component and asset paths are
preserved relative to their respective roots unless noted below.

| Source | Target | Status / action |
| --- | --- | --- |
| `src/main.jsx` | `app/layout.tsx`, `app/providers.tsx`, `proxy.ts` | Replace Vite bootstrap, global toaster, and browser-only canonical-host redirect |
| `src/index.css` | `app/globals.css` | Use the target's Tailwind CSS 4 and DaisyUI 5 setup |
| `src/router/Router.jsx` | `app/**/page.tsx`, `next.config.ts` | Replace React Router routes; redirect legacy uppercase URLs to lowercase routes |
| `src/layouts/Main.jsx` | `layouts/Main.tsx`, mounted by `app/layout.tsx` | Replace `Outlet` with shared navbar, page content, and footer |
| `src/components/Home/Root.jsx` | `app/(page)/page.tsx` | Preserve currently active homepage sections; leave commented sections inactive |
| `src/components/Others/ExploreUs/ExploreUs.jsx` | `app/(page)/explore/page.tsx` | Preserve page composition |
| `src/components/Others/Career/CareerMain.jsx` | `app/(page)/career/page.tsx` | Preserve career page composition |
| `src/components/Others/Career/JobDetails.jsx` | `app/(page)/job/[id]/page.tsx` | Use App Router params and return 404 for an unknown job |
| `src/components/Others/ContactUs/ContactUs.jsx` | `app/(page)/contact/page.tsx` | Preserve existing page and its unimplemented form integration |
| `src/components/Others/Gallery/GalleryData.jsx` | `app/(page)/gallery/page.tsx` | Preserve gallery |
| `src/components/Others/Blogs/Blogs.jsx` | `app/(page)/blog/page.tsx` | Preserve blog page |
| `src/components/Others/Solutions/IT/ITStrategy.jsx` | `app/(page)/it-strategy/page.tsx` | Preserve IT strategy |
| `src/components/Scope of works/ScopeOfWorks.jsx` | `app/(page)/scope-of-works/page.tsx` | Preserve scope of works |
| `src/components/Others/Services/Core Services/CoreServicesLayout.jsx` | `app/(page)/core-services/page.tsx` | Preserve core services |
| `src/components/Others/Solutions/HR/HRStrategy.jsx` | `app/(page)/hr-strategy/page.tsx` | Preserve HR strategy |
| `src/components/Others/Services/HR-Service/HRServices.jsx` | `app/(page)/hr-services/page.tsx` | Preserve HR services |
| `src/components/Others/Services/IT-Service/ITService.jsx` | `app/(page)/it-services/page.tsx` | Preserve IT services |
| `src/components/Others/Services/Career-Counciling/CareerCounciling.jsx` | `app/(page)/career-counselling/page.tsx` | Preserve career counselling |
| `src/components/Others/Services/Health-Tourism/Health-Tourism.jsx` | `app/(page)/health-tourism/page.tsx` | Preserve existing coming-soon content |
| `src/components/**` | `components/**` | Preserve the full mirrored component tree; adapt React Router imports, Next.js client boundaries, and static image handling where required |
| `src/assets/**` | `assets/**` | Preserve all 47 source assets at their existing relative paths |
| `public/**` | `public/**` | Preserve all 22 public assets at their existing relative paths |
| `index.html` | `app/layout.tsx`, `app/favicon.ico` | Move title/metadata and preserve the existing brand favicon |
| `package.json`, `package-lock.json` | existing target `package.json`, `pnpm-lock.yaml` | Keep the target's Next.js/React/Tailwind versions; remove only confirmed-unused source dependencies |
| `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `eslint.config.js` | existing target Next.js, Tailwind CSS 4, PostCSS, and ESLint configuration | Do not copy Vite/Tailwind 3 configuration into the target |

All other files in `src/components/` (including nested components and
component-specific CSS) map to the same relative path under `components/`;
JSX component files use the `.tsx` extension. This includes these groups:

- `components/Error/`
- `components/Home/` (`About/`, `GlobalPartners/`, `Goal/`, `Hero/`,
  `NewClient/`, `Our Clients/`, `Plan/`, and `Reviews/`)
- `components/HR/`
- `components/Others/` (`Blogs/`, `Career/`, `ContactUs/`, `ExploreUs/`,
  `Gallery/`, `Services/`, and `Solutions/`)
- `components/Scope of works/`
- `components/ServicesNew/`
- `components/Shared/` (`Footer/` and `Navbar/`)

## Route mapping

| Existing Vite URL | Next.js URL | Source page component | Status |
| --- | --- | --- | --- |
| `/` | `/` | `components/Home/Root.jsx` | Done |
| `/explore` | `/explore` | `components/Others/ExploreUs/ExploreUs.jsx` | Done |
| `/career` | `/career` | `components/Others/Career/CareerMain.jsx` | Done |
| `/job/:id` | `/job/[id]` | `components/Others/Career/JobDetails.jsx` | Done; existing detail record `/job/1` is prerendered |
| `/contact` | `/contact` | `components/Others/ContactUs/ContactUs.jsx` | Done |
| `/gallery` | `/gallery` | `components/Others/Gallery/GalleryData.jsx` | Done |
| `/blog` | `/blog` | `components/Others/Blogs/Blogs.jsx` | Done |
| `/IT-Strategy` | `/it-strategy` | `components/Others/Solutions/IT/ITStrategy.jsx` | Done; legacy redirect |
| `/Scope-of-works` | `/scope-of-works` | `components/Scope of works/ScopeOfWorks.jsx` | Done; legacy redirect |
| `/core-services` | `/core-services` | `components/Others/Services/Core Services/CoreServicesLayout.jsx` | Done |
| `/HR-Strategy` | `/hr-strategy` | `components/Others/Solutions/HR/HRStrategy.jsx` | Done; legacy redirect |
| `/HR-Services` | `/hr-services` | `components/Others/Services/HR-Service/HRServices.jsx` | Done; legacy redirect |
| `/IT-Services` | `/it-services` | `components/Others/Services/IT-Service/ITService.jsx` | Done; legacy redirect |
| `/Career-Counselling` | `/career-counselling` | `components/Others/Services/Career-Counciling/CareerCounciling.jsx` | Done; legacy redirect |
| `/Health-Tourism` | `/health-tourism` | `components/Others/Services/Health-Tourism/Health-Tourism.jsx` | Done; legacy redirect |

## Audited behavior and integrations

- The source initializes AOS but contains no `data-aos` attributes; AOS and
  Swiper were unused and removed from target dependencies.
- The hero uses `react-multi-carousel`; the reviews carousel and global-partner
  tabs exist but are not mounted on the homepage.
- The contact form has no submit handler, endpoint, or notification flow. The
  job application form has required fields but no submit handler or application
  endpoint.
- The dynamic job data contains one detail record (`id: 1`), while the career
  listing links to IDs 1–6; unknown details now produce an actual 404 response.
- The source redirects `www.aaa-fe.com` to `aaa-fe.com`; the target's existing
  metadata confirms `https://aaa-fe.com` as the production origin.
- An existing blog stylesheet referred to a missing `assets/a-images/writing.jpg`.
  That missing background reference was removed without introducing a
  replacement image. The existing homepage AVIF was moved to `public/images/`
  for Next Image optimization; the source asset copy remains intact.

## Completion checks

- [x] Audit source routes, source entry/layout, component imports, integrations,
  and target changes.
- [x] Verify source components, imported assets, and public assets exist in the
  target without overwriting the source.
- [x] Add App Router pages and shared layout.
- [x] Migrate router links and adapt browser-only/client components.
- [x] Add metadata, canonical URLs, robots, sitemap, and not-found handling.
- [x] Install/verify dependencies with `pnpm install --frozen-lockfile`.
- [x] Run ESLint, production build, and route/asset smoke checks.

## Current target audit: TypeScript and Tailwind CSS 4

Inventory checked on 2026-10-13 from the current Next.js workspace:

| Area | Files found | Current status |
| --- | ---: | --- |
| `app/` routes and framework files | 22 | Routes already use `.tsx`/`.ts`; keep App Router paths and URLs |
| `components/` | 86 | 73 `.tsx` components and no retained component `.css` files |
| `layouts/` | 1 | `Main.tsx`; children and component props are typed |
| `lib/` | 1 | Existing `metadata.ts`; keep typed |
| `assets/` | Existing copied asset tree | Preserve all imported assets |
| `public/` | Existing copied public tree | Preserve public URLs and files |
| TypeScript configuration | `tsconfig.json` | Strict mode is enabled; JavaScript source is disabled |
| Tailwind configuration | `app/globals.css`, `postcss.config.mjs` | Tailwind CSS 4 and DaisyUI 5 use the documented PostCSS integration |

The App Router route files already exist under `app/(page)/` and expose the
public paths listed above. The audited component imports contain no active
React Router, AOS, or Swiper usage; retain React Icons and React Multi Carousel
where they are used. Browser-side state and carousel components must remain
client components; static page composition should remain server-rendered.

### Conversion work

- [x] Convert all 73 component `.jsx` files and `layouts/Main.jsx` to `.tsx`.
- [x] Add explicit types for component props, event handlers, callbacks, and data that TypeScript surfaces.
- [x] Replace the nonstandard Tailwind Turbopack loader setup with the documented Tailwind 4 PostCSS integration.
- [x] Move the simple banner and clients layouts to Tailwind utilities; remove empty, commented, or unused stylesheets.
- [x] Convert Hero and Goal component styles to Tailwind CSS utilities and remove `Hero.css` and `Goal.css`.
- [x] Convert the requested Blog, ExploreUs, and HR banner styling to Tailwind utilities; remove their obsolete stylesheets.
- [x] Confirm the requested Career and Security stylesheets had no live component usage and remove them.
- [x] Confirm `ITServiceBanner.css` is not present; the IT service banner already uses Tailwind utilities.
- [x] Remove unused Business and IT service-choice stylesheets after confirming their selectors were not used by the components.
- [x] Remove the unused ContactComponent stylesheet after confirming the live component already uses Tailwind utilities and did not match any of its selectors.
- [x] Re-run ESLint, TypeScript checks, production build, and route/interaction smoke checks.
  - `pnpm lint` exits successfully with 0 errors and 94 warnings, primarily for
    existing raw `<img>` elements and unused values in `BlogMain` and
    `MissionVision`.
  - `pnpm exec tsc --noEmit` passes.
  - `pnpm build` passes and generates all 21 App Router output entries.
  - All 15 page routes, `robots.txt`, and `sitemap.xml` return HTTP 200;
    legacy uppercase URLs redirect with HTTP 308, and unknown URLs return 404.
  - The production browser smoke test confirms the requested visible homepage
    section order, one active Goal image that changes on next, and no horizontal
    overflow at desktop or 390px mobile width. No broken homepage images were
    detected.
  - Crawling internal links found 18 destinations; `/job/2` through `/job/6`
    return 404 because the existing job data only contains record `id: 1`.
  - The browser could not load existing third-party Rareblocks assets from
    `cdn.rareblocks.xyz`; their availability remains dependent on that host.

No component-specific CSS files remain. Goal retains the third-party
`react-multi-carousel` stylesheet for slider mechanics.

### Additional requested Tailwind conversion

- `LatestPost.tsx`, `Box.tsx`, and `WhoWeAre.tsx` now use Tailwind utilities for
  the former component styling.
- `HRBanner.tsx` renders its former CSS background with a static Next Image
  layer and Tailwind positioning/object-fit utilities.
- `Blogs.css` had no matching classes in `BlogMain.tsx`; `CareerComponent.css`
  had no matching component/import; `Mission.css` selectors were not used by
  `MissionVision.tsx`; and `Security.css`'s selector was not used by
  `Security.tsx`. Those unused stylesheets and their imports were removed
  without adding them to unrelated markup.
- No JavaScript/JSX files were present in the targeted groups; those components
  were already TypeScript.
