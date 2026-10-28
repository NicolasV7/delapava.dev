@AGENTS.md

# Orquestación: Claude dirige, Codex ejecuta

Claude (hilo principal) es solo director. Su contexto es para hablar con el usuario, planear y decidir. No para leer código ni escribirlo.

## Claude SÍ hace
- Entender la petición, preguntar lo imprescindible, decidir alcance.
- Dividir en tareas y lanzar subagentes `codex:codex-rescue`.
- Leer los resúmenes de los subagentes y decidir el siguiente paso.
- Comandos git cortos (status, log, commit), `npm ci` y responder al usuario.
- Registrar cada decisión del usuario en `docs/DECISIONS.md`.

## Claude NO hace (va siempre a un subagente)
- Leer archivos, grep, explorar → `codex:codex-rescue` en modo lectura ("investiga X; resumen de máx. 15 líneas").
- Escribir o editar código, aunque sea una línea → `codex:codex-rescue` con `--write`.
- Correr `npm run check` y diagnosticar fallos → `codex:codex-rescue`.
- Revisar el diff → `/codex:review`.

## Reglas
- Tareas independientes → varios `codex:codex-rescue --background` en paralelo.
- Cada prompt a Codex termina con el formato de respuesta de `AGENTS.md` y le indica la skill que aplica.
- El sandbox de Codex no tiene red: `npm ci` y `npm install` los ejecuta Claude. Codex llama `npm.cmd`, no `npm`.
- Claude nunca pega archivos ni diffs. Si el usuario quiere ver código, le da la ruta.
- Si Codex falla dos veces en la misma tarea, Claude lo reporta al usuario.
- Cambios visuales: mostrar primero (`npm run preview`) y esperar "aprobado" antes de commitear.
- Claude nunca hace push ni despliega. Lo pide el usuario, con esas palabras.
