# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website using the App Router, React 19, and Tailwind CSS v4. The project is called "Nim" and serves as a minimal one-page portfolio with blog support.

## Common Commands

```bash
# Development
npm run dev        # Start development server on http://localhost:3000

# Production
npm run build      # Create production build
npm run start      # Start production server

# Code Quality
npm run lint       # Run ESLint (Next.js config with Prettier)
```

Note: No test suite is configured. The package.json has a typo in the name field ("portoflio" instead of "portfolio").

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.1.1 with App Router
- **UI**: React 19, Tailwind CSS v4 (alpha), Motion-Primitives
- **Language**: TypeScript with strict mode
- **Blog**: MDX support for Markdown content
- **Animation**: Motion library (v11) with pre-built components

### Key Files for Data Management
- `app/data.ts`: Central data file containing all portfolio content (projects, work experience, blog posts, social links). This is the primary file to modify when customizing the portfolio content.

### Project Structure
- `/app` - Next.js App Router pages and components
  - `/blog/[slug]` - Individual blog post pages
  - `/blog/[slug]/post.mdx` - MDX content for each blog post
- `/components/ui` - Reusable animated UI components from Motion-Primitives
- `/lib` - Utility functions (cn for classNames, constants)
- `/hooks` - Custom React hooks

### Styling Approach
- Tailwind CSS v4 with PostCSS configuration
- Global styles in `app/globals.css`
- Component styling uses `cn()` utility (lib/utils.ts) for conditional classes
- Dark mode support via next-themes

### Blog System
- Blog posts are MDX files stored in `app/blog/[slug]/post.mdx`
- Metadata and routing handled in `app/blog/[slug]/page.tsx`
- Blog posts must be registered in `app/data.ts`
- Syntax highlighting provided by sugar-high

### Component Patterns
- All UI components extend Motion-Primitives with custom animations
- Components use TypeScript with explicit prop interfaces
- Consistent use of `cn()` for className merging
- Dark mode considered in all component styling