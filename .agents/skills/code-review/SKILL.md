---
name: code-review
description: Revisión de un diff en delapava.dev. Úsala cuando te pidan revisar cambios antes de commitear.
---
Revisa el diff contra estas preguntas, en orden:
1. ¿Cumple `docs/STACK.md`? Sin dependencias, JS en cliente, estilos inline ni terceros nuevos.
2. ¿Cumple `docs/design/reference.md`? Tokens, anchura, tipografía, sin acentos ni animaciones.
3. ¿Se mantienen las cabeceras de `public/_headers`? Ningún recurso que la CSP vaya a bloquear.
4. ¿`npm.cmd run check` pasa sin avisos nuevos? ¿Algún archivo supera 200 líneas?
5. ¿Hay texto visible que no esté en inglés, o nombres de archivo que no estén en inglés?
6. ¿Se cuela algo sensible (tokens, correos ajenos, datos de clientes)?

Responde con una lista de hallazgos: ruta, línea, qué está mal, qué hacer. Si no hay nada, dilo en una línea. Máximo 20 líneas, sin código.
