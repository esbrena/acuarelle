# Acuarelle - portfolio artistico gestionado desde Excel

Portfolio premium para una artista/ilustradora, construido con Next.js, TypeScript, Tailwind CSS y Framer Motion. El contenido de obras, categorias, disponibilidad, imagenes y slugs se gestiona desde un Excel editable que actua como CMS ligero.

## Stack

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- Framer Motion
- ExcelJS para leer/generar Excel
- Generacion estatica de rutas de obra y categoria
- SEO dinamico, OpenGraph, sitemap y robots

## Flujo Excel -> web

1. Sube las imagenes al servidor en `public/artworks/`.
2. Edita `content/obras.xlsx`.
3. Ejecuta:

```bash
npm run ovh:zip
```

4. Sube a OVH el ZIP generado en:

```text
dist/acuarelle-ovh.zip
```

El comando `npm run ovh:zip` lee el Excel, genera la web estatica en `out/` y crea un ZIP listo para subir a la carpeta `www/` de OVH.

Para instrucciones paso a paso sin conocimientos tecnicos, lee `GUIA-OVH.md`.

## Columnas del Excel

La primera hoja del Excel debe tener esta cabecera exacta:

| columna | descripcion |
| --- | --- |
| `nombre_obra` | Titulo visible de la obra |
| `categorias` | Lista separada por comas: `acuarela,paisaje,mar` |
| `descripcion` | Texto artistico largo |
| `soporte` | Papel, lienzo, etc. |
| `tecnica` | Acuarela, tinta, gouache... |
| `tamaño` | Formato fisico |
| `disponible_original` | `si/no` |
| `disponible_print` | `si/no` |
| `imagenes` | Lista separada por comas: `obra.jpg,obra-detalle.jpg` |
| `destacada` | `si/no` para Home |
| `slug` | Opcional; si esta vacio se autogenera |
| `año` | Opcional |

Si `imagenes` contiene solo un nombre de archivo, se resuelve como `/artworks/nombre.jpg`. Tambien se aceptan rutas absolutas (`/mi-carpeta/obra.jpg`) o URLs remotas.

## Scripts de contenido

```bash
npm run ovh:zip
```

Genera la web estatica compatible con hosting compartido OVH y crea `dist/acuarelle-ovh.zip`.

```bash
npm run content:example
```

Crea un Excel de ejemplo en `content/obras.xlsx`.

```bash
npm run content:build
```

Lee el Excel, valida columnas, genera slugs unicos, detecta imagenes locales faltantes, calcula categorias y escribe `data/generated/site-content.json`.

## Arquitectura

```text
app/                 Rutas App Router, metadata, sitemap y robots
components/          Componentes visuales y secciones reutilizables
content/             Excel editable y textos globales del sitio
data/generated/      Cache JSON generado desde Excel
lib/                 Tipos, parser helpers, imagenes, slugs y acceso a datos
animations/          Variantes de Framer Motion
styles/              Estilos globales Tailwind
public/artworks/     Imagenes subidas manualmente
public/artist/       Imagen de artista
public/brand/        Logo
scripts/             Generador de Excel y parser Excel -> JSON
```

## Personalizacion

- Textos globales, email, redes sociales y rutas base: `content/site.ts`.
- Estilo editorial, colores y grano visual: `styles/globals.css`.
- Home: `components/sections/*`.
- Portfolio y filtros: `components/PortfolioExperience.tsx`.
- Galeria fullscreen: `components/ArtworkGallery.tsx`.

## SEO

La web incluye:

- Metadata base y OpenGraph global.
- Metadata dinamica para cada obra y categoria.
- URLs limpias: `/obra/[slug]`, `/categoria/[slug]`.
- `app/sitemap.ts` y `app/robots.ts`.
- Imagenes servidas desde `public/artworks` con `next/image`.

## Notas de operacion

- El proyecto esta configurado con `output: "export"` para generar una web estatica en `out/`, compatible con hostings compartidos como OVH.
- Si una imagen indicada en el Excel no existe, el build no se rompe: se registra un aviso y la web muestra un fondo artistico de reserva.
- Si hay slugs duplicados, el parser anade sufijos (`obra`, `obra-2`, `obra-3`).
- Las categorias se generan automaticamente a partir de la columna `categorias`.
