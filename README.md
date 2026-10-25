# Portafolio profesional de Jorge Troncoso

Sitio estático en Astro con formato "ECHO": preloader, hero que se encoge en una tarjeta, experiencia en paneles horizontales, carrusel curvo de proyectos, obras en hexágono → tambor, servicios y contacto. Se publica en Cloudflare Pages desde GitHub y genera su salida en `dist/`.

## Estructura

- `src/data/site.ts` — todo el contenido de la portada (textos, enlaces, imágenes).
- `src/data/projects.ts` — casos de estudio (`/proyectos/[slug]`).
- `src/data/technologies.ts` — stack por categoría (logos de Simple Icons).
- `src/scripts/echo.ts` — motor de animación por scroll (respeta `prefers-reduced-motion`).
- `src/styles/global.css` — estilos ECHO + Tailwind.
- `portfolio-echo-kit/` — kit original de referencia (brief, scrum y demo vanilla).
- `.claude/skills/portfolio-guide/` — skill que guía la edición del contenido.

## Proyectos publicados

- Plataforma IA Unificada
- 4toTOP
- Chatbot UNIJUD
- CRM comercial para WhatsApp
- Legal Chile Gemma Fine-tune

Las capturas deben convertirse a WebP o AVIF, tener texto alternativo y revisarse para eliminar datos sensibles antes de incorporarse.

## Desarrollo

Requiere Node.js ≥ 22.23.4 (ver `.nvmrc`).

```bash
npm run check
npm run build
npm run preview
```

## Stack

- Astro 7 con salida estática y view transitions nativas entre páginas
- TypeScript estricto
- Tailwind CSS 4
- SVG de Simple Icons renderizados en build
- Cloudflare Pages
