# Ceramika Sośnica — sitio Next.js

Rediseño de [cegielnia.com](https://cegielnia.com/) en Next.js 15 (App Router) +
React 19 + React Three Fiber + Drei + framer-motion.

## Stack

- **Next.js 15** (App Router, RSC + Client Components)
- **React 19**
- **React Three Fiber 9** + **Drei 10** — para las nubes volumétricas reales
  (`<Cloud>` portado de `../nube/app/components/models/Cloud.tsx`)
- **framer-motion 12** — reveals on-scroll y baner de cookies
- **next/font** — Inter + Cormorant Garamond + JetBrains Mono (auto-self-hosted)
- **next/image** — AVIF/WebP automáticos

## Cómo arrancar

```powershell
cd site
npm install
npm run dev
```

Abre http://localhost:3000.

## Build de producción

```powershell
npm run build
npm start
```

## Estructura

```
site/
  app/
    layout.tsx          # Fuentes + metadata global
    page.tsx            # Home
    globals.css         # Sistema de diseño
    sitemap.ts          # /sitemap.xml dinámico
    components/
      Header.tsx
      Hero.tsx          # Sección hero con HeroCanvas dinámico
      HeroCanvas.tsx    # <Canvas> con AdaptiveDpr + PerformanceMonitor
      Cloud.tsx         # Cluster de Drei <Cloud> (port directo de nube/)
      Sections.tsx      # Oferta · Proces · Historia · Transport · Kontakt
      Footer.tsx
      CookieBanner.tsx
      Reveal.tsx        # framer-motion whileInView wrapper
    polityka-prywatnosci/page.tsx
    polityka-cookies/page.tsx
  public/
    img/                # imágenes locales
    robots.txt
    images-needed.md    # listado de imágenes que faltan por descargar
```

## Optimizaciones aplicadas

- **Canvas WebGL diferido** con `next/dynamic({ ssr: false })` — el JS de
  Three.js no bloquea el First Contentful Paint.
- **`PerformanceMonitor`** de Drei baja `dpr` automáticamente si la GPU sufre.
- **`AdaptiveDpr` + `AdaptiveEvents`** — pixelado dinámico al interactuar.
- **`antialias: false`** — el coste no compensa para nubes volumétricas.
- **`optimizePackageImports`** para `framer-motion` y `@react-three/drei`.
- Fuentes self-hosted vía `next/font` (sin tráfico a Google).
- `next/image` con `sizes` correcto en cada uso.
- Banner de cookies con `localStorage` + `prefers-reduced-motion`-friendly.

## Conformidad legal (Polonia)

- `/polityka-prywatnosci` — texto base RODO + placeholders `[UZUPEŁNIĆ]`.
- `/polityka-cookies` — texto base + listado de proveedores a completar.
- Banner de consentimiento con opciones **Akceptuję / Tylko niezbędne**.

> **Importante:** los placeholders `[UZUPEŁNIĆ]` deben ser revisados por la
> empresa (especialmente la lista de procesadores y proveedores externos como
> Google Analytics) antes de publicar.

## Imágenes pendientes

Ver `public/images-needed.md`.
