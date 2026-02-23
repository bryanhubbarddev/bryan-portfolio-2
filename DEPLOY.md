# Deploy to Firebase Production

This project uses **Firebase Hosting** for the live site at `https://bryan-hubbard-dev.web.app`.

## Prerequisites

- Node.js and npm installed
- Firebase CLI (`npx firebase` or `firebase-tools` as dev dependency)
- Logged into Firebase: `npx firebase login`

## Deployment Process

### 1. Merge your changes to `main` (required by branch protection)

Your repo requires pull requests—you cannot push directly to `main`.

```bash
# Push your feature branch
git push origin fix-mobile-overlap

# Create PR on GitHub: fix-mobile-overlap → main
# Merge the PR on GitHub
```

### 2. Update local `main` and build

```bash
git checkout main
git pull origin main
```

### 3. Build for production

```bash
ng build --configuration production
```

Output goes to `dist/bryan-portfolio/browser/` (Firebase serves this folder).

### 4. Deploy to Firebase

```bash
npx firebase deploy
```

### 5. Verify

Open: **https://bryan-hubbard-dev.web.app**

---

## Quick Reference

| Step | Command |
|------|---------|
| Push branch | `git push origin fix-mobile-overlap` |
| Merge PR | Do on GitHub |
| Checkout main | `git checkout main` |
| Pull latest | `git pull origin main` |
| Build | `ng build --configuration production` |
| Deploy | `npx firebase deploy` |

## Firebase Config

- **Project:** `bryan-hubbard-dev`
- **Public folder:** `dist/bryan-portfolio/browser`
- **SPA rewrite:** All routes → `/index.html` (for Angular routing)
