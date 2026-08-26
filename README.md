# Silvia Castelletti Psicologa

Website built with React + Vite.

## Commands

```bash
npm install     # install dependencies
npm run dev     # start the dev server on http://localhost:8000
npm run build   # production build in dist/
npm run preview # preview the build locally
```

## Structure

- `src/content` — site copy (JSON + Markdown), editable without touching the components
- `src/section` — home page sections (Who I am, How I work, My approach, Where I receive, Contacts)
- `src/components` — shared components (Layout, Header, Footer, Card, Input, TextArea, SEO)
- `src/pages` — pages mapped to routes
- `src/assets/images` — images imported by the components

## Configuration

The Azure Function endpoint used to send emails is configurable via the
`VITE_SEND_EMAIL_API_URL` environment variable (`.env` file). If not set,
the production endpoint is used.

## Deploy

The site is a Single Page Application: the server must respond with
`index.html` for all unknown routes. For Azure Static Web Apps the rule
is already included in `public/staticwebapp.config.json`. For Netlify,
the fallback rule is included in `public/_redirects` and `netlify.toml`.
