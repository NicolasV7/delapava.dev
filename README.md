# delapava.dev

Personal site. Astro, static output, no runtime JS beyond a ~1 KB script for scroll reveals. Fonts self-hosted (Fontsource), no third-party requests. Security headers in `public/_headers` (CSP `default-src 'none'`, HSTS, nosniff, etc.).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

## Deploy (Cloudflare Workers, static assets)

`npm run build && npx wrangler deploy` (needs `npx wrangler login` once). `wrangler.jsonc` serves `dist/` as static assets and binds the custom domain `delapava.dev`; `_headers` is applied by the assets layer.

Content lives in `src/pages/index.astro` (the `work` array and the copy). Styles in `src/styles/global.css`.
