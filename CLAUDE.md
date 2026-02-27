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
│   ├── ProjectShowcase.tsx      # Project flex row (desktop) + carousel (mobile) with GSAP stagger
│   ├── BlogCard.tsx             # Blog card (same pattern as ProjectCard)
│   ├── BlogShowcase.tsx         # Blog grid + carousel with GSAP stagger
│   └── ErrorBoundary.tsx        # Class-based error boundary for Suspense errors
├── lib/
│   ├── types.ts                 # Project and BlogPost interfaces
│   ├── constants.ts             # Bio text and contact details
│   ├── projects.ts              # Server functions: getProjects(), getProject(slug)
│   └── medium.ts                # RSS feed fetcher: getMediumPosts(), getMediumPost(slug)
├── contact/
│   ├── page.tsx                 # Contact page
│   ├── action.ts                # Server action: validates form, sends email via Resend
│   └── ContactForm.tsx          # Client form with useActionState
├── blogs/
│   ├── page.tsx                 # Server component: starts posts fetch, passes promise to BlogsClient
│   ├── BlogsClient.tsx          # Client: Suspense + BlogShowcaseResolver + hover state
│   └── [slug]/
│       ├── page.tsx             # Blog detail (SSR)
│       ├── ScrollableBlogContent.tsx  # Lenis smooth scroll wrapper for blog content
│       └── blog-content.css     # Styles for rendered Medium HTML
├── projects/
│   └── [slug]/
│       ├── page.tsx             # Project detail (SSR) — uses getProject(slug)
│       └── ScrollableGallery.tsx # Lenis smooth scroll image gallery
├── info/
│   └── page.tsx                 # About page with bio, contact, profile image, Download CV button
├── HomeClient.tsx               # Client: Suspense + ShowcaseResolver + hover state
├── layout.tsx                   # Root layout: metadata, fonts, JSON-LD schema
├── page.tsx                     # Home — server component, starts projects fetch, passes promise
├── error.tsx                    # Page-level error boundary (client component)
├── globals.css                  # Tailwind imports, CSS vars, scrollbar-hide utility
├── not-found.tsx                # 404 page
├── manifest.ts                  # PWA manifest
├── robots.ts                    # Robots.txt config
├── sitemap.ts                   # XML sitemap
└── opengraph-image.tsx          # Dynamic OG image (edge runtime, 1200x630)
public/
├── projects/
│   ├── trials/                  # trials-1.png … trials-5.png
│   ├── ecoventure/              # ecoventure-1.jpg … ecoventure-6.png
│   ├── monark/                  # monark-1.png … monark-6.png
│   └── saytrack/                # saytrack-1.png … saytrack-3.png
├── projects.json                # Project data source (edit here to add/update projects)
├── Resume.pdf                   # CV — linked from Download CV button on /info
├── kyle.jpg                     # Profile photo used on /info
└── blog-placeholder.png         # Fallback thumbnail for blog cards
```

## Pages / Routes

| Route              | Component                        | Rendering        | Description                                             |
| ------------------ | -------------------------------- | ---------------- | ------------------------------------------------------- |
| `/`                | `page.tsx` + `HomeClient.tsx`    | Server → Client  | Home — project showcase with hover name/service/year    |
| `/info`            | `info/page.tsx`                  | Client           | About — bio, contact info, profile image, Download CV   |
| `/blogs`           | `blogs/page.tsx` + `BlogsClient` | Server → Client  | Blog listing — Medium posts in showcase grid            |
| `/blogs/[slug]`    | `blogs/[slug]/page.tsx`          | SSR              | Blog detail — rendered HTML with Lenis scrolling        |
| `/projects/[slug]` | `projects/[slug]/page.tsx`       | SSR              | Project detail — metadata + scrollable image gallery    |
| `/contact`         | `contact/page.tsx`               | Client           | Contact form — sends email via Resend server action     |

## Data Layer

### Projects — `public/projects.json`

All project data lives in `/public/projects.json`. To add or update a project, edit that file directly.

```json
{
  "slug": "my-project",
  "name": "My Project",
  "year": 2025,
  "services": ["Web Development"],
  "techStack": ["Next.js", "Tailwind CSS"],
  "liveSite": "https://example.com",
  "carbonFootprint": "0.10g CO2/visit",
  "images": ["/projects/my-project/image-1.png"],
  "description": "..."
}
```

Server functions in `app/lib/projects.ts`:
- `getProjects()` — reads `public/projects.json` via `fs.readFileSync`, returns `Project[]`
- `getProject(slug)` — finds one project by slug

### Blog Posts — Medium RSS

`app/lib/medium.ts` fetches `https://medium.com/feed/@kylemendoza67` via `rss-parser`:
- `getMediumPosts()` — parses feed items, extracts thumbnail from `<img>` tags in HTML content (matches `cdn-images-1.medium.com` or `miro.medium.com`)
- `getMediumPost(slug)` — lookup by slug (last segment of Medium URL)

### TypeScript Types — `app/lib/types.ts`

```ts
interface Project {
  slug, name, year, services[], techStack[],
  liveSite, carbonFootprint, images[], description
}
interface BlogPost {
  title, slug, pubDate, content, thumbnail, link, categories[]
}
```

## Architecture Patterns

### Streaming with React Suspense (`use()` hook)

Used on both the home page and blogs page to stream data without blocking the full page render.

**How it works:**

1. The server component starts the fetch but does **not** await it — passes the in-flight `Promise` to the client wrapper as a prop.
2. The client wrapper renders the header immediately (no data dependency).
3. A `ShowcaseResolver`/`BlogShowcaseResolver` inner component unwraps the promise with React 19's `use()` hook, which suspends until the data arrives.
4. `<Suspense fallback={<...Fallback />}>` wraps the resolver — shows an animated skeleton while loading.
5. `<ErrorBoundary>` wraps the Suspense — catches failures and shows an inline error message.

```tsx
// page.tsx (server) — start fetch, don't await
export default function Page() {
  const projectsPromise = getProjects();
  return <HomeClient projectsPromise={projectsPromise} />;
}

// HomeClient.tsx (client) — header renders immediately, showcase suspends
<ErrorBoundary>
  <Suspense fallback={<ShowcaseFallback />}>
    <ShowcaseResolver projectsPromise={projectsPromise} ... />
  </Suspense>
</ErrorBoundary>

// ShowcaseResolver — unwraps promise, triggers Suspense while pending
function ShowcaseResolver({ projectsPromise, onLoaded, onHover, onLeave }) {
  const projects = use(projectsPromise);
  useEffect(() => { onLoaded(projects); }, []);
  return <ProjectShowcase projects={projects} ... />;
}
```

**Why refs for hover data:** `HomeClient` stores loaded projects in a `useRef` (populated by `onLoaded`) so the header can look up hovered project info by index without causing a re-render on load.

**Simulating loading:** Add `await new Promise(r => setTimeout(r, 3000))` inside `getProjects()` or `getMediumPosts()` temporarily.

**Simulating error:** Add `throw new Error("test")` inside `getProjects()` or `getMediumPosts()` temporarily.

### Server vs Client Components

- **Server**: `page.tsx` files — start data fetches, pass promises/data to client wrappers
- **Client**: All interactivity — animations, hover state, forms, Suspense boundaries
- Hybrid: server page → client wrapper (e.g. `blogs/page.tsx` → `BlogsClient.tsx`)

### Error Handling

| Mechanism | Where | Handles |
|-----------|-------|---------|
| `ErrorBoundary.tsx` (class) | Wraps Suspense in HomeClient/BlogsClient | Showcase-level fetch failures |
| `app/error.tsx` (client) | Next.js segment error boundary | Page-level unexpected errors |
| `notFound()` | `projects/[slug]`, `blogs/[slug]` | Invalid slugs → 404 page |

## Animation Patterns

### GSAP ScrambleText — `ScrambleText.tsx`

Core interaction pattern used throughout the site. Scrambles text character-by-character using GSAP's `ScrambleTextPlugin`.

- Plugin registered once on mount via `gsap.registerPlugin(ScrambleTextPlugin)`
- Text is split into **words**, each word scrambled individually in a `useCallback`
- Custom chars: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`, 0.8s duration, speed 1
- Width locked during animation to prevent layout jitter
- `scrambleOn` prop triggers scramble when parent hover state changes
- `withHover` prop enables bracket `[` `]` decoration with lime color on hover
- `alwaysActive` keeps the hover style on permanently (used for "Live View" link)
- Tracks `usePathname()` to highlight the active nav link

### GSAP Card Stagger — `ProjectShowcase.tsx`, `BlogShowcase.tsx`

Cards animate in from below on page load:

```ts
gsap.set(cards, { yPercent: 100, opacity: 0 });
gsap.to(cards, {
  yPercent: 0, opacity: 1,
  duration: 0.6, stagger: 0.08,
  ease: "power3.out", delay: 0.1
});
```

### Hover Blur Effect

When hovering one card, siblings blur. Implemented purely with Tailwind CSS group variants:
- Parent grid: `group/grid`
- Each card: `group-hover/grid:blur-xs` (blur when sibling hovered)
- Hovered card itself: `hover:blur-none!` (override to stay sharp)

### Lenis Smooth Scrolling — `ScrollableBlogContent.tsx`, `ScrollableGallery.tsx`

Applied to overflow containers in detail pages:

```ts
const lenis = new Lenis({ wrapper: el, content: el.firstChild });
function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
// cleanup:
lenis.destroy();
```

### CSS Transitions

Tailwind `transition-*` utilities for color, opacity, filter. Image height in ProjectCard shrinks on grid hover: `group-hover/grid:h-[60%]`, resets to `group-hover:h-[80%]!` on direct hover.

## Responsive Design

- Mobile-first with `lg:` breakpoint (1024px)
- Grid columns: 4 (mobile) → 10 (desktop)
- Projects/Blogs desktop: flex row with `flex-1` cards (fills width regardless of count)
- Projects/Blogs mobile: horizontal snap carousel (`snap-x snap-mandatory`, `w-[85%]` cards)
- `IntersectionObserver` on carousel to auto-update hover index as cards scroll into view (threshold 0.6)
- Navigation: full header on desktop (`hidden lg:flex`), bottom footer on mobile (`lg:hidden`)
- On mobile, first item is auto-selected via `window.matchMedia("(max-width: 1023px)")` in `ShowcaseResolver`/`BlogShowcaseResolver`

## Styling

- **Theme**: Dark mode via `prefers-color-scheme`, CSS custom properties
- **Colors**: Background `#0a0a0a`, Foreground `#ededed`, Accent `#9eff00` (lime)
- **Fonts**: `--font-sans` (Roboto), `--font-mono` (Fragment Mono), loaded via `next/font/google`
- **Custom utilities**: `.scrollbar-hide` (cross-browser: `-ms-overflow-style`, `scrollbar-width: none`, `::-webkit-scrollbar`)
- **`blog-content.css`**: Styles dynamically-rendered Medium HTML — typography, links (lime + italic), blockquotes (lime left border), code blocks (dark bg, custom font), images (max-width + border-radius)

## Special Features

### Info Page

- **Download CV**: `<a href="/Resume.pdf" download>` — triggers browser download of `public/Resume.pdf`
- **Email copy**: Click email to copy to clipboard, shows "EMAIL COPIED" for 2s
- **LinkedIn link**: Opens in new tab

### Contact Form — `contact/ContactForm.tsx` + `contact/action.ts`

- `useActionState` hook manages form state (pending, success, error)
- Server action validates name/email/message, calls Resend API
- `From`: `onboarding@resend.dev`, `Reply-To`: submitter email
- Env vars: `RESEND_API_KEY`, `CONTACT_EMAIL`

### Manila Clock — `PhTime.tsx`

- `setInterval` every 1000ms, formats `Date` with `timeZone: "Asia/Manila"`
- Shown in the home page header when no project is hovered

### Open Graph Image — `opengraph-image.tsx`

- Edge runtime, 1200×630px
- Dynamically generated with name and title in lime accent color

## Key Files for Common Tasks

| Task | File |
|------|------|
| Add / edit a project | `public/projects.json` |
| Add project images | `public/projects/<slug>/` |
| Update CV | Replace `public/Resume.pdf` |
| Change bio / contact info | `app/lib/constants.ts` |
| Modify scramble animation | `app/components/ScrambleText.tsx` |
| Modify card stagger | `app/components/ProjectShowcase.tsx`, `BlogShowcase.tsx` |
| Adjust smooth scrolling | `ScrollableBlogContent.tsx`, `ScrollableGallery.tsx` |
| Update SEO / metadata | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |
| Style blog content | `app/blogs/[slug]/blog-content.css` |
| Allowed image domains | `next.config.ts` (remotePatterns) |
| Deployment config | `netlify.toml` |

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

## External Integrations

- **Medium RSS**: `https://medium.com/feed/@kylemendoza67` — fetched server-side, no auth required
- **Resend**: Email delivery for contact form (server action in `app/contact/action.ts`)
- **Image CDNs**: `cdn-images-1.medium.com`, `miro.medium.com` allowed in `next.config.ts`

## Deployment

- **Platform**: Netlify via `@netlify/plugin-nextjs`
- **Node version**: 20 (set in `netlify.toml`)
- **Build command**: `npm run build`, publish dir: `.next`
- **PWA**: manifest with 192×192 and 512×512 icons, display standalone, short name "KM"
