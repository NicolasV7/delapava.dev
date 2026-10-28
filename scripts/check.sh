#!/usr/bin/env bash
# Red de seguridad del hook Stop de Claude. Corre `npm run check` solo si hay cambios de código sin commitear.
# Para forzarlo siempre: `bash scripts/check.sh --all`. Codex usa `npm run check` directamente.
set -e
cd "$(dirname "$0")/.."
[ -d node_modules ] || { echo "check: falta node_modules, ejecuta npm ci"; exit 1; }
if [ "$1" != "--all" ] && [ -z "$(git status --porcelain -- src public astro.config.mjs package.json tsconfig.json wrangler.jsonc)" ]; then
  echo "check: sin cambios de código pendientes, OK"
  exit 0
fi
npm run check
echo "check: OK"
