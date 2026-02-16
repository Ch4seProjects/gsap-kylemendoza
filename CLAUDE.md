# Kyle Dominic Mendoza — Portfolio

An interactive, animation-driven portfolio built with Next.js 16, GSAP, Lenis, and Tailwind CSS v4. Deployed on Netlify.

**Live URL**: https://kylemendoza.netlify.app/

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animations**: GSAP 3.14 (ScrambleTextPlugin) + Lenis (smooth scrolling)
- **Email**: Resend (contact form server action)
- **Content**: Medium RSS feed via rss-parser
- **Deployment**: Netlify with @netlify/plugin-nextjs
- **Fonts**: Fragment Mono (monospace), Roboto (sans-serif)

## Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Container.tsx        # Page wrapper with Navigation, GridBackground, mobile footer
│   │   └── GridBackground.tsx   # Responsive grid overlay (4/6/10 columns)
│   ├── Navigation.tsx           # Header nav with ScrambleText links
│   ├── ScrambleText.tsx         # Core GSAP text scramble animation component
│   ├── PhTime.tsx               # Live Manila timezone clock
│   ├── ProjectCard.tsx          # Project card with hover image/blur effects
│   ├── ProjectShowcase.tsx      # Project grid (desktop) + carousel (mobile) with GSAP stagger
│   ├── BlogCard.tsx             # Blog card (same pattern as ProjectCard)
│   └── BlogShowcase.tsx         # Blog grid + carousel with GSAP stagger
├── lib/
│   ├── types.ts                 # Project and BlogPost interfaces
│   ├── constants.ts             # Bio text and contact details
│   ├── mocks.ts                 # 5 project entries with metadata and Unsplash images
│   └── medium.ts                # RSS feed fetcher (getMediumPosts, getMediumPost)
├── contact/
│   ├── page.tsx                 # Contact page
│   ├── action.ts                # Server action: validates form, sends email via Resend
│   └── ContactForm.tsx          # Client form with useActionState
├── blogs/
│   ├── page.tsx                 # Server component: fetches posts, renders BlogsClient
│   ├── BlogsClient.tsx          # Client component: hover state + BlogShowcase
│   └── [slug]/
│       ├── page.tsx             # Blog detail (SSR)
│       ├── ScrollableBlogContent.tsx  # Lenis smooth scroll wrapper for blog content
│       └── blog-content.css     # Styles for rendered Medium HTML
├── projects/
│   └── [slug]/
│       ├── page.tsx             # Project detail (SSR)
│       └── ScrollableGallery.tsx # Lenis smooth scroll image gallery
├── info/
│   └── page.tsx                 # About page with bio, contact, profile image
├── layout.tsx                   # Root layout: metadata, fonts, JSON-LD schema
├── page.tsx                     # Home page: project showcase with hover text
├── globals.css                  # Tailwind imports, CSS vars, scrollbar-hide utility
├── not-found.tsx                # 404 page
├── manifest.ts                  # PWA manifest
├── robots.ts                    # Robots.txt config
├── sitemap.ts                   # XML sitemap
└── opengraph-image.tsx          # Dynamic OG image (edge runtime, 1200x630)
```

## Pages / Routes

| Route              | Component                  | Rendering       | Description                                          |
| ------------------ | -------------------------- | --------------- | ---------------------------------------------------- |
| `/`                | `page.tsx`                 | Client          | Home — project showcase grid with hover effects      |
| `/info`            | `info/page.tsx`            | Client          | About — bio, contact info, profile image             |
| `/blogs`           | `blogs/page.tsx`           | Server → Client | Blog listing — Medium posts in showcase grid         |
| `/blogs/[slug]`    | `blogs/[slug]/page.tsx`    | SSR             | Blog detail — rendered HTML with Lenis scrolling     |
| `/projects/[slug]` | `projects/[slug]/page.tsx` | SSR             | Project detail — metadata + scrollable image gallery |
| `/contact`         | `contact/page.tsx`         | Client          | Contact form — sends email via Resend server action  |

## Architecture Patterns

### Server vs Client Components

- **Server components** handle data fetching (RSS feed, project lookup by slug)
- **Client components** handle all interactivity (animations, hover state, forms)
- Hybrid pattern: server page fetches data, passes to client wrapper (e.g. `blogs/page.tsx` → `BlogsClient.tsx`)

### Animation Patterns

- **GSAP ScrambleTextPlugin**: Text character scramble on mount/hover (ScrambleText component)
- **GSAP stagger**: Cards animate in left-to-right on page load (ProjectShowcase, BlogShowcase)
  - `gsap.set` → hidden below, `gsap.to` → yPercent 0, stagger 0.08s, power3.out easing
- **Lenis smooth scroll**: Applied to overflow containers in detail pages (ScrollableBlogContent, ScrollableGallery)
  - Pattern: `new Lenis({ wrapper, content })` + `requestAnimationFrame` loop + `destroy()` cleanup
- **CSS transitions**: Tailwind `transition-*` for color/opacity/filter (blur on sibling card hover)

### Responsive Design

- Mobile-first with `lg:` breakpoint (1024px)
- Grid columns: 4 (mobile) → 10 (desktop)
- Mobile: horizontal snap carousel for projects/blogs
- Desktop: static grid with hover effects
- Navigation: full header on desktop, bottom footer on mobile

## Styling

- **Theme**: Dark mode via `prefers-color-scheme`, CSS custom properties
- **Colors**: Background #0a0a0a (dark), Foreground #ededed, Accent #9eff00 (lime)
- **Custom utilities**: `scrollbar-hide` (cross-browser scrollbar hiding)
- **blog-content.css**: Styles dynamically rendered Medium HTML (typography, links, blockquotes, code blocks)

## Environment Variables

```env
RESEND_API_KEY=   # Resend API key for contact form email delivery
CONTACT_EMAIL=    # Recipient email for contact form submissions
```

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Key Files for Common Tasks

- **Add a new project**: `app/lib/mocks.ts` (add to projects array)
- **Change bio/contact info**: `app/lib/constants.ts`
- **Modify animations**: `app/components/ProjectShowcase.tsx`, `BlogShowcase.tsx`, `ScrambleText.tsx`
- **Update SEO/metadata**: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- **Style blog content**: `app/blogs/[slug]/blog-content.css`
- **Adjust smooth scrolling**: `ScrollableBlogContent.tsx`, `ScrollableGallery.tsx`
- **Image domains**: `next.config.ts` (remotePatterns)
- **Deployment config**: `netlify.toml`

## External Integrations

- **Medium RSS**: `https://medium.com/feed/@kylemendoza67` — fetched server-side, no auth required
- **Resend**: Email delivery for contact form (server action in `app/contact/action.ts`)
- **Unsplash**: Project images via next/image optimization (configured in `next.config.ts`)
