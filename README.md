# davinlaiacoma.com

Personal site and portfolio for Davin LaIacoma, built with React, TypeScript and Vite. Pages are prerendered to static HTML at build time and deployed to GitHub Pages.

## Run it locally

Requires Node 20 or newer.

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # typecheck, bundle and prerender into dist/
npm run preview   # serve the production build
```

## Where things live

```
public/              Served as-is: CNAME, resume PDF, favicon, photos (img/)
src/content/         All site copy and data, typed. Edit these to update the site.
  profile.ts         Name, intro, links, impact stats
  experience.ts      Jobs, highlights, leadership notes
  projects.ts        Featured project and repo cards
  skills.ts          Skill groups
  hobbies.ts         Off-the-clock cards (photo or character sheet)
  navigation.ts      Header links
src/components/      One component (plus co-located CSS) per section
src/styles/          Design tokens (tokens.css) and shared styles (global.css)
src/entry-server.tsx Server render used by scripts/prerender.mjs at build time
```

### Common changes

- **Update copy or stats**: edit the matching file in `src/content/`.
- **Add a repo card**: add an entry to `repos` in `src/content/projects.ts`.
- **Add a hobby photo**: put `name.jpg` and `name.webp` in `public/img/`, then add a `photo` entry in `src/content/hobbies.ts`.
- **Replace the resume**: overwrite `public/Davin-LaIacoma-Resume.pdf`.
- **Add a section**: create a component in `src/components/`, add it to `src/App.tsx`, and add a nav link in `src/content/navigation.ts`.
- **Change colors or fonts**: edit `src/styles/tokens.css`.

## Deploys

- **CI** (`.github/workflows/ci.yml`) builds every branch and pull request and checks the prerendered output.
- **Deploy** (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages on every push to `main`. If a build fails, nothing is deployed and the current site stays up.
