# brief.md — Brief del portafolio

> Este archivo lo **completa la skill `portfolio-guide`** conversando contigo, sección por sección.
> Cada bloque tiene: qué es, qué animación lleva, qué te pregunta la skill y el estado de tus respuestas.
> Marca `[x]` cuando una sección esté definida. Las respuestas se vuelcan después en `js/content.js`.

## 0 · Proyecto

| Campo | Respuesta |
|---|---|
| Nombre de quien se presenta | Jorge Troncoso |
| Rol / titular | IA Developer & Solutions Architect |
| Ciudad / zona horaria | Santiago, Chile · America/Santiago |
| Idioma del sitio | Español (es_CL) |
| Público objetivo | Reclutadores y clientes (borrador propuesto, por confirmar) |
| Objetivo principal del sitio | Mostrar proyectos de desarrollo web e IA local |
| Acción que debe hacer el visitante | Ver casos de estudio y escribir por correo o WhatsApp |
| Dominio / hosting | jorge-troncoso.pages.dev (Cloudflare Pages) |
| Stack de destino | **Astro 7.4.2** (estático) — el kit se portó a `src/` (decisión 2026-10-23) |
| Dirección visual | Formato "ECHO": claro/oscuro alternados, tipografía gigante, brillo en secciones oscuras |
| Paleta | Claro `#efeeea` · Tinta `#0c0c0e` · Noche `#06070c` (acento opcional: ______) |
| Tipografías | Manrope 800 (títulos) + JetBrains Mono (datos) |
| Referencias de contenido | https://jorge-troncoso.pages.dev |

---

## Cómo se registra cada sección

Cada sección usa la misma ficha:

- **Qué ves / animación**: lo que hace la web de referencia.
- **Contenido**: textos que necesita (`content.js` → clave).
- **Imágenes (slots)**: cada slot tiene `id`, formato recomendado y qué pasa si lo dejas vacío.
- **Preguntas de la skill**: lo que te va a consultar el agente.
- **Decisión**: tu respuesta (la skill la escribe aquí).

---

## 1 · Preloader — `preloader`
- **Animación**: trazo luminoso que se dibuja y termina en un punto; la palabra aparece letra a letra con brillo; al terminar, la cortina negra sube.
- **Contenido**: palabra (1 palabra, ≤ 8 letras).
- **Imágenes**: ninguna.
- **Preguntas**: ¿Qué palabra va (nombre, alias, marca)? ¿Quieres preloader o entrar directo? ¿Duración (2.4 s por defecto)?
- **Decisión**: JORGE · preloader activo · 2.4 s; se omite al volver en la misma sesión o al entrar con `#ancla` `[x]`

## 2 · Navegación — `nav`, `social`
- **Animación**: baja desde arriba al terminar el preloader; píldora central con enlace activo; cambia a tema oscuro/claro según la sección; en móvil solo logo + redes.
- **Contenido**: logo (2 letras), 5–6 enlaces, 3–4 redes.
- **Imágenes**: ninguna (iconos en SVG).
- **Preguntas**: ¿Qué secciones aparecen en el menú? ¿Qué redes y URLs reales (GitHub, LinkedIn, correo, WhatsApp)?
- **Decisión**: Inicio, Sobre mí, Experiencia, Proyectos, Stack, Servicios + menú móvil (incluye Contacto). Redes: GitHub `vorsh98`, WhatsApp, correo. LinkedIn en standby `[x]`

## 3 · Hero — `hero`
- **Animación**: dos líneas gigantes suben con máscara; la segunda línea se desvanece hacia abajo; el retrato recortado queda **delante** del título y aparece desde desenfoque.
- **Contenido**: línea 1, línea 2, frase de apoyo (≤ 140 caracteres), sello ("DESARROLLADOR IA · DESDE 2019"), 3 etiquetas.
- **Imágenes (slots)**:
  - `hero.portrait` — retrato **PNG con fondo transparente**, busto, ≥ 1200 px de alto, idealmente en blanco y negro con alto contraste. Si está vacío: silueta placeholder.
- **Preguntas**: ¿Qué dos líneas dicen quién eres? ¿Tienes un retrato recortado o lo generamos/retocamos? ¿Blanco y negro o color?
- **Decisión**: JORGE / TRONCOSO · tagline y etiquetas desde la web actual · sin retrato: se muestra el diagrama "LOCAL AI CORE" `[x]` (retrato `[!]` pendiente)

## 4 · Sobre mí — `about`
- **Animación**: al hacer scroll el hero se encoge hasta una tarjeta redondeada sobre un fondo oscuro de remolinos; aparece "SOBRE / MÍ", las palabras se separan a los lados y la tarjeta se expande a pantalla completa mostrando un haz de luz y el contenido.
- **Contenido**: 2 palabras del título, frase gancho, titular, 2 columnas (Oficio / Fundamentos), 2 botones.
- **Imágenes (slots)**:
  - `about.image` — imagen de la tarjeta/pantalla completa (16:9, ≥ 1920×1080, oscura, un punto focal de luz). Vacío: haz de luz generado.
  - `about.bg` — fondo exterior (textura oscura tipo remolino/pintura). Vacío: remolinos generados.
- **Preguntas**: ¿Qué te define en una frase? ¿Qué dos pilares quieres destacar? ¿Tienes una foto/ilustración para la tarjeta? ¿Qué dos botones?
- **Decisión**: Gancho, titular y pilares desde el Perfil actual · botones Ver proyectos / Contactar · fondos generados `[x]`

## 5 · Experiencia — `experience`
- **Animación**: sección fija donde el scroll mueve paneles horizontales; los títulos se desenfocan y se duplican con desfase cromático al moverse; texto gigante fantasma de fondo; pestañas y barra de progreso.
- **Contenido**: título (2 líneas), intro, texto fantasma (2 filas), pestañas, y por cada hito: fechas, organización, tipo, título (2 líneas), descripción, 3 logros.
- **Imágenes**: ninguna.
- **Preguntas**: ¿Qué hitos incluimos (3 a 5 recomendado)? ¿Qué 3 logros por hito? ¿Cómo agrupamos las pestañas (Experiencia / Formación / Freelance)? ¿Qué palabras gigantes van de fondo?
- **Decisión**: CAPJ y TOP San Bernardo (2019–2024), 4.º TOP Santiago (2024–2026), Formación continua · pestañas Experiencia / Formación `[x]`

## 6 · Proyecto destacado — `featured`
- **Animación**: tras un destello blanco que sube desde abajo, carrusel horizontal con las tarjetas curvadas en un cilindro; scroll o arrastre las desplaza; el pie cambia con fundido.
- **Contenido**: etiqueta de categoría, y por proyecto: título, subtítulo (stack/rol).
- **Imágenes (slots)**: `featured.items[n].image` — captura del sitio/app, **16:9.6** (960×576 mínimo), una por proyecto (3 a 6). Vacío: tarjeta generada con el título.
- **Preguntas**: ¿Qué proyectos son los más fuertes? ¿Tienes capturas o las preparo? ¿Qué categoría usamos como etiqueta?
- **Decisión**: 5 proyectos de `projects.ts` con capturas reales; Legal Chile Gemma sin captura (placeholder). Tocar una tarjeta abre el caso `[x]`

## 7 · Obras — `works`
- **Animación**: 6 tarjetas inclinadas forman un hexágono que gira; al seguir bajando se pliegan en un tambor vertical 3D; el nombre activo aparece a la izquierda y el índice a la derecha.
- **Contenido**: texto central ("OBRAS '26"), pista de uso, 6 títulos.
- **Imágenes (slots)**: `works.items[n].image` — **exactamente 6**, 16:9.6, captura completa de página. Vacío: tarjeta generada.
- **Preguntas**: ¿Cuáles son los 6 trabajos? ¿Mismos del carrusel o distintos? ¿Enlace a caso de estudio o repo para cada uno?
- **Decisión**: Se mantienen los 6 del kit (Anonimizador PJUD sin caso ni captura, por decisión del dueño) `[x]`

## 8 · Servicios — `services`
- **Animación**: acordeón de píldoras; la abierta se vuelve una tarjeta negra con descripción, entregables y botón.
- **Contenido**: titular, bajada, 3–6 servicios (nombre, descripción, entregables, botón).
- **Imágenes**: ninguna.
- **Preguntas**: ¿Qué servicios ofreces realmente? ¿Qué entrega cada uno? ¿Cuál abre por defecto?
- **Decisión**: 5 servicios redactados desde los proyectos reales — **borrador por revisar** `[~]`

## 9 · Contacto — `contact`
- **Animación**: línea de luz que cruza la parte superior; la palabra gigante cromada sube letra a letra y un foco de luz sigue al cursor; botones en píldora.
- **Contenido**: palabra gigante, 3–4 botones (URL real), pie.
- **Imágenes**: ninguna.
- **Preguntas**: ¿Qué palabra cierra ("HABLEMOS", "CONTACTO")? ¿Qué canales y URLs? ¿Correo o WhatsApp como principal?
- **Decisión**: HABLEMOS · GitHub, WhatsApp, Escríbeme (correo, principal) `[x]`

---

## Inventario de imágenes (la skill lo mantiene al día)

| Slot | Sección | Formato | Estado | Archivo |
|---|---|---|---|---|
| `hero.portrait` | Hero | PNG transparente, busto | ⬜ pendiente (se usa diagrama) | `public/images/...` |
| `about.image` | Sobre mí | 16:9, 1920×1080 | ⬜ opcional (haz de luz generado) | — |
| `about.bg` | Sobre mí | 16:9, oscuro | ⬜ opcional | `assets/img/bg-about.webp` |
| `featured.items[0..4]` | Destacado | 1440×864 | ✅ 4/5 (falta Legal Chile Gemma) | `public/images/echo/*.webp` |
| `works.items[0..5]` | Obras | 1440×864 | ✅ 4/6 (faltan Anonimizador, Legal Chile Gemma) | `public/images/echo/*.webp` |

## Decisiones abiertas
- [x] Se mantiene Astro; el kit se portó (contenido en `src/data/site.ts`, motor en `src/scripts/echo.ts`).
- [x] Se conservan Stack (logos por categoría), IA local, Credenciales y las páginas `/proyectos/[slug]`, rediseñadas en formato ECHO.
- [ ] ¿Inglés además de español?
