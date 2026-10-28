---
name: landing-ui
description: Reglas visuales de la landing. Úsala en cualquier cambio de aspecto, texto visible o estructura de página.
---
Fuente única: `docs/design/reference.md`. Léela entera antes de tocar HTML o CSS.

Resumen operativo:
- Una columna de 768 px, fondo blanco, texto gris oscuro, títulos negros, gris claro para lo secundario. Sin colores de acento, sin fondos, sin sombras, sin iconos.
- Tipografía del sistema salvo decisión registrada. Enlaces subrayados en gris con `text-underline-offset: 3px`; al pasar el ratón, negro.
- Filas de proyecto: nombre a la izquierda, descripción a la derecha, toda la fila es enlace, fondo gris muy claro al pasar el ratón.
- Nada se mueve solo. Única transición permitida: color de enlaces, 150 ms. Respeta `prefers-reduced-motion` si hubiera cualquier otra.
- Tokens en `:root` de `src/styles/global.css`; nunca valores sueltos en componentes. Sin estilos inline: la CSP los bloquea.
- Texto visible en inglés, navegación y tagline en minúsculas.
- Peso objetivo: página completa bajo 30 KB sin fuentes.

Proceso: todo cambio visual se muestra al usuario (`npm run preview`, puerto por defecto 4321) y se espera "aprobado" antes de darlo por terminado. Si la referencia y el código actual se contradicen, manda la referencia; si la referencia calla, pregunta en "dudas".
