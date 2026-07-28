# AGENTS.md — instrucciones para agentes de desarrollo

## Propósito

Este proyecto es un **portafolio profesional personal**. Su objetivo es presentar proyectos de desarrollo web, arquitectura backend, infraestructura local de IA, RAG, procesamiento documental, audio y fine-tuning.

El destino de producción es **Cloudflare Pages**, conectado a GitHub. La primera versión debe mantenerse completamente estática y generar su salida en `dist/`.

## Stack obligatorio

- Astro con `output: "static"`
- TypeScript estricto
- Tailwind CSS
- React solo para islas que necesiten interacción
- Markdown/MDX o Astro Content Collections para casos de estudio
- SVG o Simple Icons para logos

## Restricciones

- No introducir Laravel, PHP, FastAPI, Python, Docker o una base de datos como runtime de este sitio.
- No activar SSR sin una decisión explícita y documentada.
- No incluir claves, tokens, IP privadas, credenciales, documentos institucionales ni datos personales.
- No afirmar métricas, rendimientos o resultados sin evidencia.
- No publicar versiones de infraestructura sin una nota temporal o revisión.
- Mantener `npm run build` libre de errores.

## Diseño

- Estética oscura, técnica, limpia y profesional.
- Priorizar jerarquía visual, contraste y legibilidad.
- Animaciones discretas y compatibles con `prefers-reduced-motion`.
- Las tecnologías se muestran por categorías con sus logos.
- Evitar porcentajes de dominio, barras de habilidad y efectos excesivos.

## Contenido

- Cada proyecto debe explicar problema, solución, arquitectura, decisiones, tecnologías, resultados verificables y restricciones de publicación.
- Los proyectos privados deben señalarse y anonimizarse.
- Las capturas deben convertirse a WebP/AVIF y revisar que no contengan datos sensibles.

## Cloudflare Pages

Configuración esperada:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

Antes de entregar cambios, ejecutar:

```bash
npm run check
npm run build
```
