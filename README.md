# yarrib.github.io

Personal site, built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

- Posts live in `src/content/writing/*.md`. Front matter: `title`, `description`, `date`, `tags`, `draft`.
  Set `draft: true` to keep a post out of the build.
- Projects, resume and skills are data files in `src/data/`.
- Pushing to `main` builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.
