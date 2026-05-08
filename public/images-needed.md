# Imágenes que faltan en `site/public/img/`

El componente `Sections.tsx` referencia las imágenes locales por nombre simple
(sin sufijos del CMS de WordPress). Si alguna no existe en `site/public/img/`,
descárgala desde la web original y guárdala con el nombre indicado.

| Nombre local                                         | Sección       | Origen sugerido                                                      |
|------------------------------------------------------|---------------|----------------------------------------------------------------------|
| `cegielnia02.jpg`                                    | Proces        | https://cegielnia.com/wp-content/uploads/2025/05/cegielnia02-1.jpg   |
| `amek.jpg`                                           | Historia      | https://cegielnia.com/wp-content/uploads/2025/05/amek-1.jpg          |
| `cegielnia01.jpg`                                    | Historia      | https://cegielnia.com/wp-content/uploads/2025/05/cegielnia01-1.jpg   |
| `cegielnia02.jpg` (reutilizada)                      | Historia      | igual que arriba                                                     |

## Recomendaciones de optimización

1. Reescálalas a un máximo de **2000px** en el lado más largo.
2. Conviértelas a `webp` o `avif` (Next.js sirve `webp/avif` automáticamente
   cuando la fuente es `jpg/png`, así que basta con dejar `.jpg`).
3. Comprime con `mozjpeg` calidad 80 o `cwebp -q 78`.

Una vez colocadas en `site/public/img/`, el componente `Sections.tsx` ya las
está consumiendo a través de `next/image` con `fill` + `sizes` correctos.
