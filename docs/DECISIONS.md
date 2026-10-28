# Decisiones

| Fecha | Decisión | Por qué |
|---|---|---|
| 2026-10-28 | Harness creado: Claude dirige, Codex ejecuta (ver `CLAUDE.md` y `AGENTS.md`). Mismo esquema que DLP y el monorepo de CSD | Contexto limpio del hilo principal; reglas únicas para ambos agentes |
| 2026-10-28 | Stack cerrado en `docs/STACK.md`: Astro 7 estático + npm + Cloudflare Workers (assets). Nada nuevo sin decisión | Evitar una librería nueva por tarea |
| 2026-10-28 | Definición de terminado: `npm run check` = `astro check` + `astro build`. Se añaden `@astrojs/check` y `typescript` como devDependencies | El repo no verificaba tipos |
| 2026-10-28 | Referencia de diseño: `docs/design/reference.md`, inspirada en pepsipu.com. Sustituye al diseño "manual Unix" (NICOLAS(1), Gengar ASCII, acento violeta, scroll reveal) | El usuario quiere una landing "mil veces más sencilla" |
| 2026-10-28 | Alcance: primero solo la landing. El blog de ciberseguridad queda en espera, con su stack ya fijado en `docs/STACK.md` para no improvisar cuando se active | Pedido del usuario |
| 2026-10-28 | El texto visible del sitio sigue en inglés, como hoy. Documentos, commits y comunicación en español | El sitio busca trabajo remoto en seguridad; la referencia también está en inglés |
| 2026-10-28 | Sin JS en cliente en la landing. Sin analítica de terceros (la CSP `default-src 'none'` se mantiene) | Simplicidad y la política de seguridad ya existente |
| PENDIENTE | Qué hacer con las fuentes instaladas (Bricolage Grotesque, Geist Mono): quitarlas y usar `system-ui`, o conservar una | La referencia usa fuente del sistema; quitarlas elimina dos dependencias |
| PENDIENTE | Contenido de la landing: qué proyectos listar (hoy: Molara, ÁREA 4 Market, Visbl, los tres sin enlace) y si se enlaza a repositorios o demos | pepsipu enlaza cada proyecto a algo real |
| PENDIENTE | Modo oscuro: la referencia lo tiene (`prefers-color-scheme`); el sitio actual no | Decidir antes de escribir los tokens definitivos |
| PENDIENTE | Al activar el blog: añadir `@astrojs/sitemap` y `@astrojs/rss`, y un `robots.txt` | Hoy no hay sitemap ni robots |
