# Bryan B. Hubbard II — Portfolio

> 🔗 **Live:** [bryanhubbard.dev](https://bryanhubbard.dev)

**As a software developer**, I want to connect with teams and opportunities where I can bring my whole story—from Carnegie Hall to the retail floor to enterprise engineering, from mentoring staff and principal engineers to presenting at conferences—so that recruiters and hiring managers can see the full scope of what I offer: technical depth, leadership, and a unique perspective that bridges technology and people.

---

A production-grade personal portfolio built with **Angular 19+** (standalone components, signals, view transitions).

## Features
- Dark cinematic theme with electric teal accents
- Animated hero with typewriter effect (Software Engineer, PM, Toastmasters, Leadership Mentor, and more)
- Floating tech tags with staggered animations
- Scroll-reveal animations throughout
- Interactive experience tab switcher
- Career timeline
- Skills showcase (Angular, React, Next.js, Flutter, React Native, and more)
- Presentations section with video placeholder support
- Fully responsive (mobile-first)
- CI-ready headless testing (Karma + ChromeHeadlessNoSandbox)
- Firebase Hosting deployment

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
# Install dependencies
npm install

# Navigate into the project (use your folder name, e.g. cd bryan-portfolio or cd bryan-portfolio-2)
cd bryan-portfolio

# Start the dev server (use npx if Angular CLI isn't installed globally)
npx ng serve
```

Then open http://localhost:4200

**Optional:** Install Angular CLI globally for convenience: `npm install -g @angular/cli@^19`

### Running Tests
```bash
npx ng test --no-watch
```
Runs Karma + Jasmine in headless Chrome. CI-ready with ChromeHeadlessNoSandbox.

### Build for Production
```bash
npx ng build
```
Output goes to `dist/bryan-portfolio/browser` — ready for Firebase Hosting (or Netlify, Vercel, GitHub Pages).

## Project Structure
```
src/
  assets/
    images/               - Hero photo, education/certification images, favicon
  app/
    components/
      nav/                - Fixed navigation with hamburger (mobile)
      hero/               - Full-screen hero, typewriter (PM, Toastmasters, Leadership Mentor), floating tech tags
      about/              - Bio and career timeline
      skills/             - Skill card grid (Angular, React, Next.js, Flutter, React Native, etc.)
      education/          - Degrees and certifications
      experience/         - Interactive tabbed job history
      projects/           - Featured project cards
      presentations/      - Speaking and video section
      orange-inspiration/ - Orange Heart / BiT inspiration section
      contact/            - Contact with social links
  styles/
    main.css              - Global styles with all colors and typography
  index.html
  main.ts
```

## Design System
All colors and typography are written as plain CSS values directly in each component's `.css` file and in `src/styles/main.css`. To change the accent color, search and replace `#00d4aa` with your preferred color across all CSS files.

## Adding Videos
In `presentations.component.ts`, update the `videoPlaceholder: true` items and add a `videoUrl` field. Then in the HTML, replace the placeholder div with an `<iframe>` embed.

## Deploying to Firebase
1. Install Firebase CLI: `npm install firebase-tools --save-dev`
2. Login: `npx firebase login`
3. Initialize: `npx firebase init hosting` (choose `dist/bryan-portfolio/browser`, single-page app: Yes)
4. Build and deploy: `npx ng build` then `npx firebase deploy`

Update the Live URL at the top of this README after your first successful deploy.

---
Built by Bryan B. Hubbard II
