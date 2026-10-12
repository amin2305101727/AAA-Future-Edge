<div align="center">

# AAA Future Edge

Corporate website for AAA Future Edge, built with Next.js, TypeScript, and Tailwind CSS 4.

</div>

## About

The website presents AAA Future Edge's consulting services, company information, career opportunities, articles, gallery, and contact details. It uses the Next.js App Router and preserves the site's existing branding and content.

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4 with DaisyUI 5
- pnpm

## Getting started

### Requirements

- Node.js 20.9 or newer
- pnpm 12.4.2 (the version declared in `package.json`)

### Install dependencies

```bash
pnpm install --frozen-lockfile
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm lint` | Run ESLint |
| `pnpm exec tsc --noEmit` | Check TypeScript types |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |

To run the production version locally:

```bash
pnpm build
pnpm start
```

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/explore` | About AAA Future Edge |
| `/career` | Careers |
| `/job/1` | Job details and application information |
| `/contact` | Contact details and form |
| `/gallery` | Gallery |
| `/blog` | Blog |
| `/core-services` | Core services |
| `/it-strategy` | IT strategy |
| `/hr-strategy` | HR strategy |
| `/it-services` | IT services |
| `/hr-services` | HR services |
| `/career-counselling` | Career counselling |
| `/health-tourism` | Health tourism |
| `/scope-of-works` | Scope of works |

Legacy uppercase URLs redirect to their lowercase equivalents. SEO metadata, `robots.txt`, and `sitemap.xml` are provided by the App Router.

## Project structure

```text
app/          App Router layouts, routes, metadata, and global styles
components/   Reusable TypeScript React components
assets/       Imported source images and other assets
public/       Static public assets
layouts/      Shared site layout
lib/          Shared helpers, including metadata utilities
```

## Notes

- The contact and job application forms currently have no submission endpoint or integration.
- The career listing includes links for several job IDs, but only job ID `1` has a detail record.
- Some images and visual assets are served by external hosts, so their availability depends on those services.

## License

No license is currently specified for this repository.