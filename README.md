<div align="center">

# AAA Future-Edge

**A responsive corporate website for AAA Future-Edge**

Built with Next.js, React, TypeScript, and Tailwind CSS.

</div>

---

## Overview

AAA Future-Edge is a multi-page corporate website that introduces the company and presents its consulting services, career opportunities, articles, gallery, and contact information. Its purpose is to help visitors learn about the organization, explore HR and IT services, and find ways to get in touch or review career opportunities.

## Key features

- Responsive, multi-page website with shared navigation and footer
- Company overview, team, mission, vision, and values sections
- HR and IT strategies, services, and core business offerings
- Career counselling, health tourism, and scope-of-work information
- Career listings and a job information page
- Blog articles with an interactive article view
- Filterable image gallery
- Contact information, an embedded map, and contact form interface
- Local image and video assets for page content and backgrounds

## Technology stack

| Technology | Role |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router, page rendering, metadata, and production build |
| [React 19](https://react.dev/) | User interfaces and interactive components |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI 5](https://daisyui.com/) | Tailwind CSS component utilities |
| [React Icons](https://react-icons.github.io/react-icons/) | Interface and content icons |
| [react-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel) | Carousel functionality |
| [pnpm](https://pnpm.io/) | Package management |

## Requirements

- Node.js **20.9 or later**
- pnpm **12.4.2**, as declared in `package.json`

## Getting started

### Prerequisites

- Install Node.js **20.9 or later** and pnpm **12.4.2**.
- Make sure Git is available if you need to clone the repository.

### Clone and install

```bash
git clone https://github.com/ruhulamin18/AAA-Future-Edge.git
cd AAA-Future-Edge
pnpm install --frozen-lockfile
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot reloading while you edit the source files.

### Build and run for production

```bash
pnpm build
pnpm start
```

The production server runs at [http://localhost:3000](http://localhost:3000) by default. Set the `PORT` environment variable to use a different port.

## Installation and commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm lint` | Run ESLint |
| `pnpm exec tsc --noEmit` | Check TypeScript types without emitting files |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build |

## Project structure

```text
app/
  (page)/               Route pages and page-level metadata
  globals.css           Global styles and Tailwind CSS import
  layout.tsx            Root layout and sitewide metadata
  providers.tsx         Shared client-side providers
  robots.ts              Search crawler rules
  sitemap.ts             Public route sitemap

assets/                  Imported images and other source assets
components/
  Home/                  Homepage sections
  Others/                Page and service-specific sections
  Shared/                Shared navigation and footer
layouts/                 Shared application layout
lib/                     Shared utilities, including metadata helpers
public/
  images/                Website images and page backgrounds
  videos/                Public video assets
  AAA_Logo.png           Company logo asset
  flogo.png              Site icon and navigation logo asset

next.config.ts            Next.js configuration
proxy.ts                  Canonical host, legacy route, and job-ID handling
eslint.config.mjs         ESLint configuration
postcss.config.mjs        Tailwind CSS/PostCSS configuration
tsconfig.json             TypeScript configuration
package.json              Scripts and dependencies
pnpm-lock.yaml            Locked dependency versions
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/explore` | Company overview |
| `/hr-strategy` | HR strategy |
| `/it-strategy` | IT strategy |
| `/scope-of-works` | Scope of works |
| `/hr-services` | HR services |
| `/it-services` | IT services |
| `/core-services` | Core services |
| `/career-counselling` | Career counselling |
| `/health-tourism` | Health tourism |
| `/career` | Career listings |
| `/job/1` | Job information and application interface |
| `/blog` | Blog articles |
| `/gallery` | Gallery |
| `/contact` | Contact information and form interface |

Legacy uppercase URLs for selected strategy and service pages redirect to their lowercase canonical routes. Unknown job IDs return a not-found response.

## SEO and performance

- Unique page titles, descriptions, canonical URLs, Open Graph, and Twitter/X metadata are defined through the Next.js App Router metadata API.
- Sitewide metadata includes the configured production base URL, social preview image, icons, and Organization structured data.
- `app/robots.ts` allows public crawling and points search engines to the sitemap.
- `app/sitemap.ts` lists intended public routes, including the available job detail page.
- `proxy.ts` redirects `www.aaa-fe.com` to `aaa-fe.com`, normalizes selected legacy paths, and returns not-found responses for unsupported job IDs.
- The App Router and `next/link` provide client-side navigation; static routes are prerendered as part of the production build where supported.
- `next/image` is used for suitable images, and the remote image sources supported by the optimizer are explicitly restricted in `next.config.ts`.
- No Lighthouse or real-user Core Web Vitals scores are claimed by this README.

## Assets and external services

Local images, logos, and video files are served from `public/` and referenced by URL paths such as `/images/home-hero.png`. Some page imagery and embedded content use external hosts, so those assets depend on the availability of the third-party services. Remote image optimization is restricted to the hosts and paths configured in `next.config.ts`.

## Current implementation notes

- The contact form currently displays a client-side confirmation; it is not connected to a message delivery service or API.
- The job application form is not connected to a backend. Only `/job/1` has a corresponding job detail record; other displayed listing actions lead to the Contact page.
- Blog articles and career listing content are maintained in the application source rather than loaded from a content-management system.
- No environment variables are currently required to run the project locally.
- No license is specified in this repository.

## Developer information

### Developed by

**Md. Ruhul Amin**
Computer Science and Engineering (CSE)

Daffodil International University

- GitHub: [@ruhulamin18](https://github.com/ruhulamin18)
- Repository: [AAA-Future-Edge](https://github.com/ruhulamin18/AAA-Future-Edge)

## Development guidance

- Keep route-specific metadata alongside its page in `app/(page)/`.
- Reuse the shared metadata helper in `lib/metadata.ts` when adding a static page.
- Add public routes to `app/sitemap.ts` when they should be discoverable by search engines.
- Use `next/link` for internal navigation and `next/image` for suitable local or configured remote images.
- Keep private credentials and local environment files out of version control.

## Deployment

The application can be deployed to a platform that supports Next.js 16. Build the site using `pnpm build`, then run the generated production application using `pnpm start` or the platform's Next.js deployment integration. Configure the production host and DNS so that `aaa-fe.com` is canonical; requests to `www.aaa-fe.com` are redirected to the apex domain.

## License

This repository does not currently specify a license. All rights are reserved by default unless the project owner adds a license file or other explicit licensing terms.
