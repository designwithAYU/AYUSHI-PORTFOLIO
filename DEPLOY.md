# Deploy Ayushi's Portfolio to GitHub Pages

This site is fully static and ready for GitHub Pages.
It uses **HashRouter** + a dynamic Vite `base`, so deep links and assets work correctly under `username.github.io/<repo>/`.

## 1. Push to GitHub

In Lovable: top-right → **GitHub → Connect to GitHub** → create a repository (e.g. `portfolio`).
Lovable will auto-sync your code to that repo.

## 2. One-time setup on your machine

```bash
git clone https://github.com/<your-username>/<repo>.git
cd <repo>
npm install
```

## 3. Deploy

Replace `<repo>` with your repo name (e.g. `portfolio`):

```bash
# macOS / Linux
VITE_BASE=/<repo>/ npm run build
npx gh-pages -d dist

# Windows (PowerShell)
$env:VITE_BASE="/<repo>/"; npm run build
npx gh-pages -d dist
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / root → Save**.

Your site will be live at:

```
https://<your-username>.github.io/<repo>/
```

## Notes
- The contact form opens the visitor's email app pre-filled to `ayushi.110718@gmail.com` (no backend needed — works perfectly on GitHub Pages).
- If you later want a real backend (database storage of messages), enable **Lovable Cloud** in this project and the form can be upgraded.