# Kyle Dominic Mendoza — Portfolio

A modern, interactive portfolio featuring GSAP-powered animations, smooth scrolling, and a dynamic blog powered by Medium RSS.

**[kylemendoza.netlify.app](https://kylemendoza.netlify.app/)**

## Built With

- [Next.js 16](https://nextjs.org/) — App Router, Server Components, Server Actions
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) — ScrambleTextPlugin, staggered reveal animations
- [Lenis](https://lenis.darkroom.engineering/) — Smooth scrolling
- [Resend](https://resend.com/) — Contact form email delivery
- [rss-parser](https://github.com/rbren/rss-parser) — Medium blog integration

## Features

- **Text scramble animations** — Every heading and nav link uses GSAP ScrambleTextPlugin for character-by-character reveal effects
- **Staggered card reveals** — Project and blog cards animate in from bottom with a left-to-right stagger on page load
- **Smooth scrolling** — Lenis-powered smooth scroll on project galleries and blog content
- **Dynamic blog** — Automatically fetches and renders articles from Medium via RSS
- **Contact form** — Server action powered by Resend for email delivery
- **Responsive design** — Mobile snap carousels, desktop hover grids, adaptive navigation
- **SEO optimized** — Dynamic sitemap, robots.txt, OpenGraph images, JSON-LD structured data
- **PWA ready** — Web app manifest with maskable icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/Ch4seProjects/gsap-kylemendoza.git
cd gsap-kylemendoza

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

Add your environment variables to `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is configured for **Netlify** deployment via `netlify.toml`.

1. Connect your GitHub repo to [Netlify](https://app.netlify.com/)
2. Build settings are auto-detected from `netlify.toml`
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL` as environment variables in the Netlify dashboard

## Project Structure

```
app/
├── components/         # UI components (Navigation, ScrambleText, Cards, Showcases)
├── lib/                # Types, constants, mock data, Medium RSS fetcher
├── contact/            # Contact page + Resend server action
├── blogs/              # Blog listing + dynamic [slug] detail pages
├── projects/           # Dynamic [slug] project detail pages
├── info/               # About page
├── layout.tsx          # Root layout with metadata and fonts
├── page.tsx            # Home page
└── globals.css         # Tailwind config, theme variables, utilities
```

## License

This project is for personal portfolio use.
