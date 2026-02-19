# Bryan B. Hubbard II — Portfolio

A production-grade personal portfolio built with **Angular 19** (standalone components, signals, view transitions).

## ✨ Features
- Dark cinematic theme with electric teal accents
- Animated hero with typewriter effect
- Floating tech tags with staggered animations
- Scroll-reveal animations throughout
- Interactive experience tab switcher
- Career timeline
- Presentations section with video placeholder support
- Fully responsive (mobile-first)
- Custom scrollbar, noise texture, glowing orbs

## 🚀 Getting Started

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

Then open [http://localhost:4200](http://localhost:4200)

### Build for Production
```bash
ng build
```
Output will be in the `dist/` folder — ready to deploy to Netlify, Vercel, or GitHub Pages.

## 📁 Project Structure
```
src/
  app/
    components/
      nav/          — Fixed navigation with scroll behavior
      hero/         — Full-screen hero with typewriter + stats
      about/        — Bio + career timeline
      skills/       — Skill card grid
      experience/   — Interactive tabbed job history
      projects/     — Featured project cards
      presentations/— Speaking & video section
      contact/      — Contact with social links
  styles/
    main.scss       — Global design system + CSS variables
  index.html
  main.ts
```

## 🎨 Design System
All colors and typography are controlled via CSS variables in `src/styles/main.scss`.
To change the accent color, update `--teal` and related variables.

## 📹 Adding Videos
In `presentations.component.ts`, update the `videoPlaceholder: true` items and add a `videoUrl` field. 
Then in the HTML, replace the placeholder div with an `<iframe>` embed.

## 🌐 Deploying to Netlify
1. Run `ng build`
2. Drag the `dist/bryan-portfolio/browser` folder into Netlify
3. Done!

---
Built with ❤️ by Bryan B. Hubbard II
