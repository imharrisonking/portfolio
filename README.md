# Harrison King's Portfolio

A modern portfolio website built with Next.js 15, showcasing professional work and personal projects. Features a clean, minimal design with animated components and blog support.

## Tech Stack

- **Framework**: Next.js 15.1.1 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (alpha) with PostCSS
- **Animation**: Motion library (v11) with Motion-Primitives components
- **Blog**: MDX support for Markdown content with syntax highlighting
- **Theme**: Dark mode support via next-themes
- **Icons**: Lucide React icon library

## Key Dependencies

- `next` - React framework with App Router
- `react` & `react-dom` - React 19 for UI components  
- `motion` - Animation library for interactive components
- `tailwindcss` - Utility-first CSS framework
- `@next/mdx` & `@mdx-js/react` - MDX support for blog posts
- `next-themes` - Theme switching functionality
- `sugar-high` - Syntax highlighting for code blocks
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Conditional styling utilities

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable UI components with animations
- `/lib` - Utility functions and constants
- `/hooks` - Custom React hooks
- `/public` - Static assets and icons

Content is managed through `app/data.ts` for easy customization.