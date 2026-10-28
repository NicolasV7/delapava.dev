# Referencia de diseño: landing mínima

Inspirada en pepsipu.com (visto el 2026-10-28). Es una referencia de carácter, no para copiar texto ni contenido.

## Carácter
Una columna de texto. Nada compite con las palabras: sin fondos, sin tarjetas con sombra, sin animaciones, sin iconos. Parece una página escrita, no diseñada.

## Estructura de la landing (de arriba abajo)
1. Cabecera: nombre a la izquierda (enlace a `/`), navegación a la derecha con uno o dos enlaces de texto (`blog`, y opcionalmente otro).
2. Tagline de una línea, ligera, con la palabra clave en gris claro (por ejemplo, "breaks software & writes about it").
3. Bio de un párrafo con enlaces inline a empresas, equipos o proyectos.
4. "Some things I have made/worked on:" seguido de una lista de proyectos. Cada fila: nombre a la izquierda, descripción de una línea a la derecha; en móvil, apilado. Toda la fila es el enlace; al pasar el ratón el fondo se tiñe de gris muy claro.
5. Una frase que apunta al blog ("I write about ... on my blog").
6. Contacto al pie: GitHub, LinkedIn, email, separados por `* * *` o un punto medio. Sin iconos.

Opcional, solo si el usuario lo pide: una foto pequeña con pie de foto.

## Tokens
| Token | Claro | Oscuro (si se aprueba) |
|---|---|---|
| `--bg` | `#ffffff` | `#0a0a0a` |
| `--text` | `#404040` | `#d4d4d4` |
| `--heading` | `#000000` | `#ffffff` |
| `--muted` | `#a3a3a3` | `#737373` |
| `--hover-bg` | `#f5f5f5` | `#171717` |
| `--underline` | `#a3a3a3` | `#737373` |

- Ancho: `max-width: 768px`, centrado, padding lateral 1rem (1.5rem desde 640px).
- Espacio vertical de página: 3rem arriba y abajo en móvil, 6rem desde 640px, 8rem desde 1024px.
- Tipografía: `system-ui, sans-serif`. Cuerpo 1.125rem, `line-height: 1.5`. Nombre 1.5rem negrita. Tagline 1.25rem peso 300.
- Enlaces: subrayado con `text-decoration-color: var(--underline)`, `text-underline-offset: 3px`; al pasar el ratón, texto y subrayado en `--heading`. Transición de color de 150 ms.
- Filas de proyecto: grid `1fr 2fr` desde 640px, padding `0.5rem 0.75rem`, margen negativo lateral de `0.75rem` para que el fondo de hover sobresalga del texto. Descripción en `--muted` con `margin-top: 0.125rem`.
- Separación entre bloques: 2rem. Dentro de un bloque: 1rem.

## Reglas
- Sin JS en cliente. Sin estilos inline (la CSP los bloquea). Todo en `src/styles/global.css`.
- Sin colores fuera de la tabla. Sin acento de color: el énfasis se hace con negro frente a gris.
- Sin animaciones salvo la transición de color de 150 ms en enlaces. Nada se mueve solo.
- Texto en minúsculas en navegación y tagline; frases normales en bio y proyectos.
- La página completa debe pesar menos de 30 KB sin fuentes.

## Blog (cuando se active)
Misma cabecera y anchura. `/blog/` es una lista: fecha en `--muted` a la izquierda, título enlazado a la derecha. Cada entrada: título, fecha, cuerpo en prosa con `line-height: 1.6`, bloques de código con `pre` de fondo `--hover-bg` y fuente `ui-monospace`.
