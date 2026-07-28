# Portafolio profesional de Jorge Troncoso

Sitio estático con navegación en cliente para presentar trabajo de desarrollo web, backend e inteligencia artificial local. Se publica en Cloudflare Pages desde GitHub y genera su salida en `dist/`.

## Proyectos publicados

- Plataforma IA Unificada
- 4toTOP
- Chatbot UNIJUD
- Legal Chile Gemma Fine-tune

Las capturas se añadirán cuando estén disponibles. Antes de incorporarlas deben convertirse a WebP o AVIF, tener texto alternativo y revisarse para eliminar datos sensibles.

## Stack

- Astro con salida estática
- Astro ClientRouter para navegación sin recarga completa y layout persistente
- TypeScript
- Tailwind CSS
- SVG de Simple Icons renderizados estáticamente por Astro
- Cloudflare Pages

## Requisitos

- Node.js 22.12.0 o superior
- npm

La versión de desarrollo usada por el proyecto está en `.nvmrc`.

## Desarrollo local

```bash
nvm use
npm install
npm run dev
```

El sitio queda disponible normalmente en `http://localhost:4321`.

## Verificación y compilación

```bash
npm run check
npm run build
```

La compilación estática se genera en `dist/`.

## Despliegue en Cloudflare Pages

1. Subir el repositorio a GitHub.
2. En Cloudflare, abrir **Workers & Pages → Create → Pages → Connect to Git**.
3. Seleccionar este repositorio.
4. Usar la siguiente configuración:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node.js version: 22
```

5. Guardar y desplegar. Cloudflare asignará una dirección `*.pages.dev`.

Cuando exista un dominio propio, se debe añadir en `astro.config.mjs` mediante `site` para habilitar URL canónica, sitemap y metadatos sociales completos.

## Privacidad y contenido

- No subir credenciales, archivos `.env`, IP privadas ni documentos no autorizados.
- No afirmar métricas, rendimiento o resultados que no puedan verificarse.
- Revisar licencias y procedencia de toda fuente web incluida en datasets o procesos de extracción.
- Mantener capturas y diagramas libres de datos personales, institucionales o internos.
