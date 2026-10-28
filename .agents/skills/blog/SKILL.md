---
name: blog
description: Cómo se construye y se escribe en el blog de ciberseguridad. EN ESPERA: no la apliques hasta que el usuario active el blog.
---
Estado: en espera. Si una tarea pide tocar el blog y no hay una decisión en `docs/DECISIONS.md` que lo active, detente y pregunta.

Cuando se active:
- Contenido en `src/content/blog/<slug>.md` con frontmatter validado por Zod en `src/content.config.ts`: `title`, `description`, `date` (ISO), `tags` (lista), `draft` (booleano, por defecto false).
- Rutas: `src/pages/blog/index.astro` (lista, más reciente primero, sin borradores) y `src/pages/blog/[slug].astro` (entrada). Slug en kebab-case, en inglés, sin fecha en la URL.
- Diseño según la sección "Blog" de `docs/design/reference.md`: misma cabecera y anchura que la landing.
- Añadir `@astrojs/sitemap` y `@astrojs/rss` solo tras registrar la decisión. Sin comentarios, sin buscador, sin analítica.
- Entradas en inglés. Nada de datos de clientes ni de hallazgos sin divulgación responsable cerrada.
- Cada entrada nueva pasa `npm.cmd run check`; la fecha de `lastmod` del sitemap sale de git.
