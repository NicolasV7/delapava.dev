# delapava.dev

Personal site. Astro, static output, no runtime JS beyond a ~1 KB script for scroll reveals. Fonts self-hosted (Fontsource), no third-party requests. Security headers in `public/_headers` (CSP `default-src 'none'`, HSTS, nosniff, etc.).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

## Deploy (Cloudflare Pages)

Pages → Create project → connect this repo → framework preset **Astro** (build `npm run build`, output `dist`). Then Custom domains → `delapava.dev` (DNS is already on Cloudflare). Nothing else to configure; `_headers` is picked up automatically.

Content lives in `src/pages/index.astro` (the `work` array and the copy). Styles in `src/styles/global.css`.
