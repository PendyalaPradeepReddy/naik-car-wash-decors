# Naik Car Wash & Decors

A responsive automotive portfolio and local-business website built with React, TypeScript, Vite, and Tailwind CSS.

## Cloudflare Pages deployment

This repository is configured for Cloudflare Pages. In the Cloudflare dashboard, import the GitHub repository and use the following settings.

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `pnpm run build` |
| Build output directory | `dist/public` |
| Node.js version | `22` |

The project includes a `wrangler.toml` file, `_headers` rules for long-lived asset caching, and a `_redirects` SPA fallback so every portfolio route works after a direct visit or refresh. After deployment, set the production domain in `client/src/App.tsx`, `client/index.html`, `robots.txt`, and `sitemap.xml` before submitting the sitemap to Google Search Console.

## Local development

```bash
pnpm install
pnpm run dev
```

## Quality checks

```bash
pnpm run check
pnpm run build
```

## Images

Optimized portfolio imagery is bundled under `client/public/images` and is served from `/images/` in production. This makes the GitHub and Cloudflare Pages deployment independent of Manus storage URLs.
