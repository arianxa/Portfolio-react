# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio/CV single-page application for developer "Arantxa". Built with React 19 + Vite 7 + Tailwind CSS 4. All content is hardcoded in components (no backend). The UI language is Spanish.

## Commands

```bash
npm run dev        # Start dev server (localhost:5173, auto-opens browser)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No test framework is configured.

## Architecture

**Single-page app with hash-based anchor navigation** (no React Router). Sections are linked via `#hero`, `#projects`, `#skills`, `#contact` anchors with smooth scrolling. The Navbar tracks the active section via a scroll event listener.

**Component rendering flow:**
```
main.jsx → App.jsx → ScrollToTop
  → Navbar (scroll-tracking, responsive mobile menu via Headless UI Disclosure)
  → Hero → Aboutme → Projects → Skills → Contact → Footer
```

**Key stateful components:**
- `Navbar.jsx` — tracks scroll position to highlight active nav section
- `Projects.jsx` — manages project data array, selected project state, show all/show less toggle, and opens `ProjectModal`
- `ProjectModal.jsx` — receives selected project as prop, displays detail overlay

All other components are purely presentational.

## Styling

Tailwind CSS 4 with the `@tailwindcss/vite` plugin. Custom theme colors defined in `src/index.css` via the `@theme` directive (warm brown/beige palette). Custom breakpoints `3xl: 1400px` and `4xl: 1720px` added in `tailwind.config.js`.

FontAwesome 6.5.2 loaded via CDN in `index.html`. Icon libraries in use: `@heroicons/react`, `@fortawesome/react-fontawesome`, `@react-icons/all-files`.

## Conventions

- Functional components with hooks, Tailwind utility classes for styling
- Images imported as ES modules from `src/assets/img/`
- Project data (titles, descriptions, tech stacks, links) hardcoded in `Projects.jsx`
- Contact form is presentational only (not connected to a backend)
- ESLint 9 flat config; unused vars starting with uppercase or `_` are ignored
