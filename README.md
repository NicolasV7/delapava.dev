# delapava.dev

Sitio personal de Nicolas De La Pava, investigador de seguridad en Cali.
Está construido con Astro y genera archivos estáticos para Cloudflare Workers.
El objetivo actual es una landing mínima; el blog de ciberseguridad está en espera.

## Desarrollo y verificación

Requiere Node.js ≥ 22.12 y npm.

| Comando | Uso |
| --- | --- |
| `npm ci` | Instala las dependencias del archivo de bloqueo. |
| `npm run dev` | Inicia el servidor local en http://localhost:4321. |
| `npm run check` | Verifica tipos con Astro y compila el sitio en `dist/`. |
| `npm run preview` | Sirve la compilación local para revisarla. |

En PowerShell, usa `npm.cmd` si la política de ejecución bloquea `npm`.

## Despliegue manual

El despliegue se realiza solo por petición explícita del usuario, tras pasar
`npm run check`. Autentícate con `npx wrangler login` si hace falta y ejecuta
`npx wrangler deploy` para publicar la compilación verificada de `dist/`.
`wrangler.jsonc` configura los assets y el dominio `delapava.dev`.
Las cabeceras de seguridad se mantienen en `public/_headers`.
No hay CI: un push no despliega.

## Trabajo con agentes

Consulta [AGENTS.md](AGENTS.md) para las reglas y [CLAUDE.md](CLAUDE.md)
para la orquestación. Respeta el stack cerrado de [docs/STACK.md](docs/STACK.md),
las decisiones de [docs/DECISIONS.md](docs/DECISIONS.md) y la referencia visual
de [docs/design/reference.md](docs/design/reference.md).
Aplica la skill correspondiente de [.agents/skills](.agents/skills/).
