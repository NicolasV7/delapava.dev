# Stack cerrado de delapava.dev

Lo que está aquí se usa. Lo que no está, no entra sin una entrada aprobada en `docs/DECISIONS.md`.

## Base
| Capa | Elección | Notas |
|---|---|---|
| Framework | Astro 7, `output: static` | Sin adaptador. Páginas `.astro`, contenido en Markdown cuando exista el blog |
| Gestor de paquetes | npm + `package-lock.json` | Instalar con `npm ci` |
| Node | ≥ 22.12 | Definido en `package.json` `engines` |
| Lenguaje | TypeScript strict (`astro/tsconfigs/strict`) | Verificado con `astro check` (`@astrojs/check` + `typescript`) |
| Estilos | CSS propio en `src/styles/global.css` con variables | Sin Tailwind, sin preprocesadores |
| Tipografía | Fuente del sistema (`system-ui`) por defecto. Fontsource solo si una decisión lo registra | Hoy el repo tiene Bricolage Grotesque y Geist Mono; su destino está en DECISIONS |
| JS en cliente | Ninguno | Si una decisión lo permite: un único `<script>` de Astro, sin inline |
| Imágenes | `astro:assets` con `src/assets/` | Formatos web (webp/avif), tamaño al mostrado |

## Blog (en espera, no construir todavía)
| Capa | Elección |
|---|---|
| Contenido | Content Collections de Astro (`src/content/blog/*.md`) con esquema Zod |
| Rutas | `/blog/` lista y `/blog/<slug>/` entrada |
| Extras | `@astrojs/sitemap` y `@astrojs/rss` cuando se active el blog (decisión pendiente de registrar) |

## Despliegue
| Qué | Cómo |
|---|---|
| Hosting | Cloudflare Workers con assets estáticos (`wrangler.jsonc`, directorio `dist/`) |
| Dominio | `delapava.dev` como custom domain; `workers.dev` como vista previa |
| Comando | `npm run build && npx wrangler deploy`, manual, solo cuando el usuario lo pide |
| CI | No hay. Un push no despliega |
| Cabeceras | `public/_headers`: CSP `default-src 'none'`, HSTS, nosniff, DENY, COOP/CORP. Se mantienen |

## Verificación
- `npm run check` = `astro check && astro build`. Es la definición de terminado.
- `npm run preview` para mostrar cambios visuales antes de aprobar.
- No hay tests. Si aparece lógica no trivial, proponer Vitest en DECISIONS.

## Prohibido
React/Vue/Svelte/Solid y cualquier isla; Tailwind, Bootstrap u otro framework CSS; adaptadores SSR; librerías de animación o carrusel; analítica de terceros (Umami, GA, Plausible); fuentes o scripts externos; CMS externo; axios, lodash, moment/dayjs.
