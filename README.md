# Bryan B. Hubbard II — Portfolio

A production-grade personal portfolio built with **Angular 19** (standalone components, signals, view transitions).

## Features
- Dark cinematic theme with electric teal accents
- Animated hero with typewriter effect
- Floating tech tags with staggered animations
- Scroll-reveal animations throughout
- Interactive experience tab switcher
- Career timeline
- Presentations section with video placeholder support
- Fully responsive (mobile-first)

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
# Install Angular CLI globally
npm install -g @angular/cli@19

# Navigate into the project
cd bryan-portfolio

# Install dependencies
npm install

# Start the dev server
ng serve
```

Then open http://localhost:4200

### Build for Production
```bash
ng build
```
Output will be in the `dist/` folder — ready to deploy to Netlify, Vercel, or GitHub Pages.

## Project Structure
```
src/
  app/
    components/
      nav/            - Fixed navigation with scroll behavior
      hero/           - Full-screen hero with typewriter and stats
      about/          - Bio and career timeline
      skills/         - Skill card grid
      education/      - Degrees and certifications
      experience/     - Interactive tabbed job history
      projects/       - Featured project cards
      presentations/  - Speaking and video section
      contact/        - Contact with social links
  styles/
    main.css          - Global styles with all colors and typography
  index.html
  main.ts
```

## Design System
All colors and typography are written as plain CSS values directly in each component's `.css` file and in `src/styles/main.css`. To change the accent color, search and replace `#00d4aa` with your preferred color across all CSS files.

## Adding Videos
In `presentations.component.ts`, update the `videoPlaceholder: true` items and add a `videoUrl` field. Then in the HTML, replace the placeholder div with an `<iframe>` embed.

## Deploying to Netlify
1. Run `ng build`
2. Drag the `dist/bryan-portfolio/browser` folder into Netlify
3. Done!

---
Built by Bryan B. Hubbard II
