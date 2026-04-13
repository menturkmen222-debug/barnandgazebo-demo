# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the API server and The Barn and Gazebo wedding venue website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### The Barn and Gazebo (`/`)
- **Path**: `artifacts/barn-and-gazebo/`
- **Type**: React + Vite (react-vite)
- **Stack**: React 18, Wouter (routing), Custom CSS design system (no Tailwind)
- **Pages**: Home, Venue, Packages, Gallery, Availability, Journal, Contact
- **Features**:
  - Cinematic parallax hero sections
  - Custom scroll-reveal animations (IntersectionObserver)
  - Masonry photo gallery with lightbox (keyboard + swipe navigation)
  - Interactive availability calendar (dual-month, custom built)
  - Contact form with full validation
  - Mobile responsive with hamburger menu overlay
  - Gold/dark luxury design system (Cormorant Garamond + Jost)

### API Server (`/api`)
- **Path**: `artifacts/api-server/`
- **Type**: Express 5 API

## Design System

Located in `artifacts/barn-and-gazebo/src/index.css`. Key tokens:
- Background: `#0E1208` (deep forest)
- Gold: `#C1A062` (warm gold)
- Fonts: Cormorant Garamond (display), Jost (body)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
