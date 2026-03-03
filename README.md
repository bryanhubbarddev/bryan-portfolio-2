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
- **Honors & Recognition** section with award cards and images
- Presentations section with video support
- Featured projects with images and live app links
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

# Start the dev server
npx ng serve
```

Then open http://localhost:4200

**Optional:** Install Angular CLI globally for convenience: `npm install -g @angular/cli@^19`

### Running Tests
```bash
npm test -- --watch=false
```
Runs Karma + Jasmine in headless Chrome. CI-ready with `ChromeHeadlessNoSandbox`.

### Build for Production
```bash
npm run build
```
Output goes to `dist/bryan-portfolio/browser` — ready for Firebase Hosting (or Netlify, Vercel, GitHub Pages).

## Project Structure
```
src/
  assets/
    images/               - Hero photo, education/certification images, award images
    documents/            - PDFs (e.g. Tech Ed presentation)
    videos/               - Demo videos (HomerCon, Toastmasters)
  app/
    components/
      nav/                - Fixed navigation with hamburger (mobile)
      hero/               - Full-screen hero, typewriter, floating tech tags
      about/              - Bio and career timeline
      education/          - Degrees and certifications
      skills/             - Skill card grid
      experience/         - Interactive tabbed job history
      projects/           - Featured project cards (with images, View Live App links)
      honors-awards/      - Honors & Recognition section
      presentations/      - Speaking and video section
      contact/            - Contact with social links
  styles/
    main.css              - Global styles, typography, section layout
  index.html
  main.ts
```

## Test Structure
Tests follow Angular's default convention: each component has a `.spec.ts` file alongside its implementation.

- **Framework:** Jasmine
- **Runner:** Karma
- **Browser:** ChromeHeadlessNoSandbox (headless, no-sandbox for CI)
- **Location:** `src/app/components/**/*.spec.ts`
- **Run once:** `npm test -- --watch=false`

| Component      | Spec File                          |
|----------------|------------------------------------|
| App            | `app.component.spec.ts`            |
| Nav            | (no spec; tested via App)          |
| Hero           | `hero/hero.component.spec.ts`      |
| About          | `about/about.component.spec.ts`   |
| Education      | `education/education.component.spec.ts` |
| Skills         | `skills/skills.component.spec.ts` |
| Experience     | `experience/experience.component.spec.ts` |
| Projects       | `projects/projects.component.spec.ts` |
| Honors & Awards| `honors-awards/honors-awards.component.spec.ts` |
| Presentations  | `presentations/presentations.component.spec.ts` |
| Contact        | `contact/contact.component.spec.ts` |

## Design System
All colors and typography are written as plain CSS values directly in each component's `.css` file and in `src/styles/main.css`. To change the accent color, search and replace `#00d4aa` with your preferred color across all CSS files.

## Adding Videos
In `presentations.component.ts`, add a `video` field with a base-relative path (e.g. `assets/videos/your-video.mp4`). Use base-relative paths so videos work when the app is served from a sub-path.

## Deploying to Firebase
1. Install Firebase CLI: `npm install firebase-tools --save-dev`
2. Login: `npx firebase login`
3. Initialize: `npx firebase init hosting` (choose `dist/bryan-portfolio/browser`, single-page app: Yes)
4. Build and deploy: `npm run build` then `npx firebase deploy`

Update the Live URL at the top of this README after your first successful deploy.

---
Built by Bryan Hubbard
