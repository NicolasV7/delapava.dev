// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://delapava.dev',
  compressHTML: true,
  build: {
    // Everything external so the CSP can stay 'self' with no inline allowances.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
