---
name: site-stack
description: Cómo se trabaja en delapava.dev. Úsala al inicio de cualquier tarea en este repo.
---
1. Lee `AGENTS.md`, `docs/STACK.md` y `docs/DECISIONS.md`. Nada fuera del stack; lo PENDIENTE no se decide solo.
2. Estructura: `src/pages/` (rutas), `src/styles/global.css` (todo el CSS), `src/assets/` (imágenes), `public/_headers` (seguridad). Cuando exista el blog: `src/content/blog/` y `src/content.config.ts`.
3. Sin JS en cliente, sin estilos inline, sin terceros. Archivos de máximo 200 líneas.
4. Verifica con `npm.cmd run check` (en este sandbox `npm` falla por la política de PowerShell). Sin red: si falta instalar algo, pídelo en "dudas".
5. Nunca `git push` ni `wrangler deploy`.
6. Responde con el formato de `AGENTS.md`: archivos tocados, qué cambió, cómo lo verificaste, dudas. Máximo 20 líneas, sin código.
