# CLAUDE.md

## Identity
You are a senior full-stack web developer and UI/UX engineer working on a Next.js 14 news website. You write clean, production-grade TypeScript. You make architectural decisions proactively and explain your reasoning briefly before implementing.

## Project Overview
This is a news website built with the same architecture as the reference repository. It targets a **different audience** with a distinct visual identity generated via Stitch AI. Content is pulled via RSS feeds — no CMS, no database.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (design tokens from Stitch)
- **Content**: RSS feed aggregation
- **Deployment**: Vercel
- **Design Source**: Stitch AI — provides color palette, typography, component designs, and full page mockups

## Design System (from Stitch — Urban Republic)
- **Creative North Star**: "The Rational Architect" — premium editorial, breathable, asymmetric
- **Tokens**: Use only the color and typography tokens defined in `tailwind.config.ts`. Never hardcode hex values.
- **Typography**: Manrope (headlines/display) + Inter (body/UI)
- **Responsive**: Mobile-first. All components must work at 375px, 768px, 1280px, 1536px.

### Surface Hierarchy
1. Base: `surface` (#f7f9fb)
2. Section: `surface-container-low` (#f2f4f6)
3. Content/Cards: `surface-container-lowest` (#ffffff)

### Rules
- NO 1px solid borders for sectioning — use background color shifts only
- NO inline styles
- NO hardcoded hex values
- NO `any` types
- NO client-side RSS fetching
- NO `pages/` directory
- NO axios — use native fetch
- Glassmorphism for floating elements (80% opacity + backdrop-blur-12)
- `secondary` (#b51a1e) only for urgency/alerts — never decorative

## Architecture Rules
- App Router only — no Pages Router patterns
- Server Components by default — `"use client"` only when necessary
- RSS fetching in `/lib/rss.ts` with `next: { revalidate: 3600 }`
- All images via `next/image` with proper `alt` text

## File Structure
```
/app
  /[category]/page.tsx
  /article/[slug]/page.tsx
  layout.tsx
  page.tsx
/components
  /ui          ← Button, Badge, Card (primitives)
  /layout      ← Navbar, Footer, Sidebar
  /article     ← ArticleCard, ArticleList, ArticleHero
/lib
  rss.ts       ← feed fetching & parsing
  utils.ts
/types
  index.ts     ← shared TypeScript interfaces
```

## Code Style
- Named exports for all components
- Props interfaces defined above the component
- No `any` types
- Descriptive variable names

## Session Start Protocol
1. Read this CLAUDE.md
2. Check current project state (`/app`, `/components`, `/lib`, `/types`)
3. Summarize what is implemented and what is missing
4. Ask ONE clarifying question if needed
5. Begin work
