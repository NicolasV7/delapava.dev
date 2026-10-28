# Referencia de diseño: landing mínima

Referencia literal de medidas, estructura y tono: pepsipu.com, medido el 2026-10-28.
Se conserva el contenido propio de Nicolas; no se copia el texto de la referencia.
La primera reescritura fue rechazada y estas medidas sustituyen las aproximaciones anteriores.

## Carácter y alcance
Una columna de texto. Nada compite con las palabras: sin fondos decorativos, tarjetas,
sombras ni animaciones de entrada. Solo la fila-enlace de valoox lleva un icono ↗.
Parece una página escrita, no diseñada.
Solo la landing; el blog y la mascota siguen pendientes en `docs/DECISIONS.md`.
Sin imagen ni mascota hasta una decisión explícita del usuario.

## Estructura de la landing
1. Cabecera: nombre a la izquierda, enlace a `/`; navegación a la derecha: `work` y
   `contact`, anclas de esta página, en minúsculas.
2. Tagline pegada al nombre: 3–6 palabras en minúsculas, un `&`, sin punto final.
   Verbos o palabras función en gris claro mediante `.g`; sustantivos en negro.
3. Bio en primera persona, 2–4 frases cortas con hechos concretos. Conservar seguridad,
   experiencia full-stack y DevOps, web apps y APIs, informes, Cali, Colombia, UTC−5
   y búsqueda de roles remotos de seguridad. Mencionar Visbl, ÁREA 4 Market y Molara
   como sitios donde construyó software, sin enlaces. Después, mencionar valoox con
   enlace `.link` a `https://valoox.store`, antes de la frase de ubicación.
4. Introducción como «Some things I've built:» y lista de valoox, Molara, ÁREA 4 Market y Visbl.
   Nombre a la izquierda, descripción a la derecha; en móvil, apilados.
   Descripciones como fragmentos en minúsculas, sin punto final; conservar dominio,
   tecnologías de cada proyecto. valoox tiene una descripción más larga; Molara se
   limita a plataforma dental y tecnologías. Debajo, rol, modalidad y fechas reales,
   en minúsculas salvo nombres propios, con el formato «2022 → 2024 · full-stack · freelance».
5. Footer con tres filas: GitHub, LinkedIn y Email, línea punteada flexible y enlace
   al valor a la derecha. Conservar los destinos y el correo reales de la página.

No añadir una frase sobre escribir en el blog mientras no exista.
No usar adjetivos de marketing ni jerga de currículum. Bio con frases declarativas;
tagline, navegación y descripciones en minúsculas. No inventar hechos ni enlaces.

## Tokens de color
Solo en `:root` de `src/styles/global.css`; el modo oscuro redefine esos tokens
mediante `prefers-color-scheme: dark`, sin selector manual ni JS.

| Token | Claro | Oscuro |
|---|---|---|
| `--bg` | `#fff` | `#0a0a0a` |
| `--text` | `#404040` | `#d4d4d4` |
| `--heading` | `#000` | `#fff` |
| `--secondary` | `#737373` | `#8a8a8a` |
| `--muted` | `#a3a3a3` | `#6b6b6b` |
| `--line` | `#d4d4d4` | `#404040` |
| `--hover-bg` | `#f5f5f5` | `#262626` |

Sin colores de acento; énfasis con negro frente a gris. Mantener contraste AA en
texto principal y secundario. El gris claro literal de la tagline no alcanza AA:
2,52:1 en claro y 3,72:1 en oscuro; ajustar ese color requiere resolver la
incompatibilidad entre fidelidad literal y AA, sin dar por aprobada una excepción.

## Tipografía y medidas
- Fuente: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",`
  `"Segoe UI Symbol", "Noto Color Emoji"`. Sin fuentes descargadas.
- `html`: scroll suave; `auto` con `prefers-reduced-motion: reduce`.
- Body: fondo blanco y texto base `#404040`; padding vertical 3rem por debajo de
  640 px, 6rem desde 640 px y 8rem desde 1024 px; sin padding horizontal.
- Contenedor: `max-width: 768px`, centrado, padding lateral 1.5rem en todos los tamaños,
  incluyendo ese padding en el ancho máximo; wrapper con `line-height: 1.25`.
- Cabecera: flex, `space-between`, `align-items: flex-start`; margen inferior .75rem
  en móvil y .25rem desde 640 px. Permitir envolver en pantallas estrechas.
- Nombre: 24 px / 32 px, peso 700, negro; sin subrayado ni cambio al hover.
- Navegación: texto base de 16 px, sin subrayado; separación 1.5rem, texto gris
  `--text` y negro al hover.
- Tagline: 20 px / 28 px, peso 300, negro con palabras función en `--muted`;
  margen inferior 2rem.
- Bio e introducción: 18 px / 28 px, `--text`; separación de bloques 2rem.
- Enlaces en texto y footer (`.link`): subrayado `--muted`, offset 3 px;
  al hover, texto y subrayado en `--heading`. Transiciones de ambas propiedades
  de 150 ms con `cubic-bezier(.4,0,.2,1)`; en navegación, solo color.
- Lista de proyectos: 18 px, `line-height: 1.375`, separación entre filas 1rem.
- Fila: grid de una columna; desde 640 px, `1fr 2fr`. Padding .5rem .75rem,
  márgenes laterales −.75rem y separación vertical .25rem, sin gap horizontal añadido.
- Nombre de proyecto: 18 px, peso 500, `--heading`. Descripción: 18 px, `--text`.
  Fragmento continuo que se adapta al ancho disponible, sin punto final.
- Detalle bajo la descripción: 16 px / 24 px, `--secondary`, margen superior .125rem.
- valoox es la primera fila y la única fila-enlace: `<a>` al repositorio
  `https://github.com/NicolasV7/valoox`, sin `target="_blank"`. Nombre seguido de ↗,
  SVG inline decorativo de 18 px, `viewBox="0 0 24 24"`, sin relleno y trazo de 2 px
  con extremos y uniones redondeados; paths `M7 7h10v10` y `M7 17 17 7`.
  Icono en `--project-icon-color` (`#a3a3a3`); hover y foco con `--hover-bg`
  (`#f5f5f5` en claro, `#262626` en oscuro), transición de fondo de 150 ms.
  Molara, ÁREA 4 Market y Visbl conservan filas sin `<a>`, icono ni hover.
- Footer: margen superior 2rem, 18 px, filas en columna. Cada fila usa flex,
  alineación centrada y gap 1rem; etiqueta en `--secondary`, valor con `.link`.
  El `<hr>` tiene `flex: 1`, borde cero salvo superior punteado de 1 px en `--line`
  y margen superior .125rem.

## Reglas técnicas y verificación
- Sin JS en cliente, estilos inline ni scripts inline. CSS externo en
  `src/styles/global.css`; conservar `inlineStylesheets: 'never'` y la CSP existente.
- Tokens solo en `:root`; nunca valores de estilo sueltos en el componente.
- Solo transiciones de color de enlaces y fondo de la fila-enlace; nada se anima al cargar.
- Sin terceros ni dependencias nuevas; cada archivo tiene como máximo 200 líneas.
- Página completa bajo 30 KB sin fuentes. Verificar HTML y CSS generados y ausencia
  de `<script>`, `<style>` y atributos `style=` en `dist/`.
- `npm.cmd run check` debe pasar sin errores ni avisos nuevos.
- Mostrar el cambio visual mediante captura o preview y esperar «aprobado».

## Blog (cuando se active)
Misma cabecera y anchura. `/blog/` será una lista con fecha en `--secondary` a la
izquierda y título enlazado a la derecha. Cada entrada tendrá título, fecha y prosa
con `line-height: 1.6`; código en `pre` con fondo `--hover-bg` y fuente `ui-monospace`.
Las transiciones entre documentos siguen PENDIENTES: cabecera fija, salida de 5 px
hacia abajo en 350 ms y entrada desde 10 px a la izquierda en 350 ms, sin animación
inicial. No implementar hasta que exista una segunda página y se resuelva la decisión.
