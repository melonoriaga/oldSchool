
# Old School Landing (React + Vite)

Landing editorial/brutalista de Old School, construida con React, Tailwind v4 y animaciones con GSAP.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- GSAP (`ScrollTrigger`) para animaciones de entrada y scroll
- Componentes utilitarios de `src/app/components/ui`

## Scripts

- `npm run dev`: levanta entorno local
- `npm run build`: build de producción
- `npm run lint`: linting con ESLint
- `npm run typecheck`: chequeo de tipos TS
- `npm run format`: formateo con Prettier

## Fuentes (Typography)

La carga está centralizada en `src/styles/fonts.css`.

### Google Fonts (uso principal)

- `Onest`: fuente base de lectura/UI general
- `Sora`: headings del sistema editorial

### Fuente local (acento)

- `Caprasimo`: se carga con `@font-face` desde:
  - `src/assets/fonts/Caprasimo/Caprasimo-Regular.ttf`
- Se usa de forma selectiva con la clase utilitaria:
  - `.os-title-capra`

### Dónde se aplican

- Base global (`body`): `Onest` (`src/styles/theme.css`)
- Títulos editoriales (`.os-section-title`, `.os-section-h2`, `.os-pull`): `Sora` (`src/styles/editorial.css`)
- Títulos destacados (ej. hero y algunos H2): `os-title-capra`

## Paleta de colores

Tokens en `src/styles/theme.css`:

- `--os-paper`: `#f3efe6` (fondo papel)
- `--os-cyan`: `#19c9ef` (primario de botones/acentos)
- `--os-navy`: `#0f2f57` (links, fondos y contraste)
- `--os-orange`: `#ff5700` (acento secundario)
- `--os-black`: `#000000`
- `--os-white`: `#ffffff`

### Reglas de uso actuales

- Botón primario: celeste (`.os-btn-primary`)
- Links: azul (`a`, `a:hover` en `theme.css`)
- Naranja: acento puntual (subrayados, énfasis, detalles de marca)

## Sistema de estilos

Entrada de estilos: `src/styles/index.css`

Orden de import (importante):

1. `fonts.css`
2. `tailwind.css`
3. `theme.css`
4. `editorial.css`

### Rol de cada archivo

- `theme.css`
  - Tokens CSS (`:root`)
  - Integración con `@theme inline` de Tailwind
  - Estilos base globales (`body`, `a`, tipografía HTML)
- `editorial.css`
  - Clases utilitarias visuales del sistema Old School (`.os-*`)
  - Botones, bandas de color, tipografía de secciones, grids editoriales
  - Animaciones CSS de marquee y utilidades del hero
- `fonts.css`
  - Google Fonts + `@font-face` local de Caprasimo

## Arquitectura de secciones

El orden de render principal está en `src/app/App.tsx`:

1. `Header`
2. `FloatingMenu`
3. `Hero`
4. `Section02` a `Section21`
5. `TestimoniosBlock`
6. `Section23`, `Section24`, `Section25`
7. `MuseoBlock`
8. `PostulacionBlock`
9. `Footer`
10. `WhatsAppButton`
11. `PostulacionForm` (modal)

### Convenciones de composición

- Cada bloque es un componente independiente en `src/app/components`
- Bordes gruesos y retícula editorial: clases como `.os-grid-border`, `.os-section-head-row`
- Numeración de secciones: `.os-brutal-num` / `.os-brutal-num-sub`

## Hero (media + animación)

`src/app/components/hero/HeroMediaColumn.tsx`:

- Slider automático con imágenes locales de `src/assets/home`
- Dots clickeables para navegación manual
- Overlays para contraste (`gradient`, `Grainient`, marquee diagonal)
- Mantiene encuadre “cover” original con `.os-hero-media-viewport`

## Estructura de carpetas (resumen)

```txt
src/
  app/
    App.tsx
    components/
      Hero.tsx
      Section02.tsx ... Section25.tsx
      hero/HeroMediaColumn.tsx
  assets/
    home/
    fonts/Caprasimo/
  styles/
    index.css
    fonts.css
    theme.css
    editorial.css
```

## Guía rápida para editar diseño

- Cambiar colores globales: `src/styles/theme.css` (variables `--os-*`)
- Ajustar sistema visual Old School: `src/styles/editorial.css`
- Cambiar tipografías: `src/styles/fonts.css` + clases `.os-*`
- Orden/alta de secciones: `src/app/App.tsx`

## Notas técnicas

- Alias `@` apunta a `src` (configurado en `vite.config.ts`)
- Entrada de app: `src/main.tsx`
- Setup de GSAP global: `src/app/gsapSetup.ts`
  