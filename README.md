# Taller de Inteligencia Artificial — CONAF / UIA

Web de apoyo a los talleres de IA para funcionarios de CONAF (no técnicos). Una sola app
sirve tres recorridos según la ruta: el taller CONAF/UIA (`/`), el taller de personas
(`/personal`) y la charla sin actividades (`/personal2`).

Publicada en https://sud-austral.github.io/CLASE_TALLER_/ (GitHub Pages).

## Correrla

```bash
cd taller-ia
npm ci
npm run dev      # http://localhost:5173/CLASE_TALLER_/
npm run build    # deja taller-ia/dist
npm run lint
```

Verificado el 2026-11-24: `npm ci` y `npm run build` pasan; `npm run lint` da 1 error
conocido (ver `CLAUDE.md`). El `npm run dev` no se comprobó.

## Despliegue

`.github/workflows/deploy.yml`: en cada push a `main` (o a mano), compila `taller-ia`,
copia `index.html` a `dist/personal/`, `dist/personal2/` y `dist/404.html` (fallback SPA),
y publica `taller-ia/dist` en GitHub Pages. No hay servidor propio ni secretos.

## Material

Los `*-fuente.html` de la raíz son la fuente de los PDF impresos (guías, tarjetas, programa).
`VALIDAR-CONTENIDO-LEGAL.md` lista lo que debe revisar alguien de jurídica antes de usarlo.
