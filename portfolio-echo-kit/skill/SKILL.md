---
name: portfolio-guide
description: Guía paso a paso, con preguntas, para construir un portafolio animado estilo "ECHO" (preloader, hero con retrato, tarjeta que se expande, experiencia horizontal, carrusel curvo, hexágono a tambor, servicios, contacto). Úsala al crear o migrar un portafolio, o al completar brief.md, scrum.md o js/content.js.
---

# portfolio-guide — Construir el portafolio conversando

Convierte a cualquier persona en dueña de un portafolio animado. Tú (el agente) **preguntas sección por sección**, registras las respuestas en `brief.md`, planificas en `scrum.md` y rellenas `js/content.js`. La persona decide; tú no inventas sus datos.

## Archivos del kit (en la raíz del proyecto)
- `index.html`, `css/styles.css`, `js/main.js` — motor de animación (no se toca para cambiar contenido).
- `js/content.js` — única fuente de verdad: todo texto e imagen (`image: null` = placeholder generado).
- `brief.md` — ficha por sección: animación, contenido, slots de imagen, preguntas, decisión.
- `scrum.md` — sprints, tareas `[ ] [~] [x] [!]`, riesgos, registro de decisiones.
- `assets/img/` — imágenes de la persona.

Si faltan archivos del kit, créalos desde este documento (catálogo y especificaciones abajo) y avisa qué generaste. Si el proyecto ya existe en otro stack (p. ej. Astro), conserva el stack: porta `content.js` a datos del framework y cada módulo a un componente.

## Reglas de oro
1. **Una pregunta por vez** (máximo 3 muy relacionadas). Usa AskUserQuestion con 2–4 opciones concretas cuando existan; la persona siempre puede escribir otra respuesta. Si la herramienta no existe, pregunta en texto plano.
2. **Nunca inventes** nombre, cargos, fechas, métricas, URLs, correos ni logros. Si falta un dato: deja el valor de ejemplo, márcalo `[!]` en `scrum.md` y sigue.
3. **Propón borradores** de copy cuando la persona dude (corto, en voz activa, sin relleno) y pide aprobación antes de guardarlos.
4. **Imágenes**: por cada slot pregunta qué hay. Opciones: «tengo el archivo» (pide ruta y cópiala a `assets/img/`), «lo preparo después» (déjalo `null`), «ayúdame a conseguirlo» (explica formato y encuadre del slot). Nunca descargues ni copies imágenes de terceros ni de la web de referencia.
5. **No copies la marca de la referencia**: este kit replica *formato, ritmo y transiciones*, no nombres, textos ni imágenes del sitio original.
6. **Confidencialidad**: antes de usar capturas de sistemas internos (p. ej. judiciales) pregunta si tienen datos reales; sugiere datos de ejemplo o anonimizados.
7. **Respeta el idioma** de la persona (por defecto el del brief) y su nivel técnico: con perfil técnico habla de archivos y claves; con perfil no técnico, solo de secciones y fotos.
8. Después de **cada sección definida**: actualiza `brief.md` (decisión + `[x]` + inventario de imágenes), `content.js` y `scrum.md` (tarea hecha o bloqueada). Muestra un resumen de 2–3 líneas y pasa a la siguiente.

## Flujo
### Paso 0 — Arranque
1. Lee `brief.md`, `scrum.md` y `js/content.js`. Detecta qué secciones están `[x]`, cuáles `[!]`. Si hay avance, di dónde quedaron y ofrece continuar.
2. Si hay un sitio actual (URL en el brief), revísalo y **propón** contenido a partir de él; la persona confirma o corrige.
3. Pregunta (sección 0 del brief): para quién es el sitio, objetivo principal, acción que debe hacer el visitante, idioma, qué conservar del sitio actual, ruta (vanilla o framework), paleta y tipografías (por defecto: claro `#efeeea`, tinta `#0c0c0e`, noche `#06070c`; Manrope 800 + JetBrains Mono). Pregunta también si quiere recorrer **todas** las secciones o solo algunas.

### Paso 1 — Recorrido por secciones (en este orden)
Para cada sección: explica en una frase qué hace la animación, haz las preguntas, guarda, confirma.

| # | Sección | Clave en content.js | Slots de imagen |
|---|---|---|---|
| 1 | Preloader | `preloader.word` | — |
| 2 | Navegación | `nav`, `social`, `brand` | — |
| 3 | Hero | `hero.*` | `hero.portrait` (PNG transparente, busto, ≥1200 px alto) |
| 4 | Sobre mí | `about.*` | `about.image` (16:9 oscura), `about.bg` (opcional) |
| 5 | Experiencia | `experience.*` | — |
| 6 | Proyecto destacado | `featured.*` | `featured.items[n].image` (960×576+, 3–6) |
| 7 | Obras | `works.*` | `works.items[n].image` (**exactamente 6**) |
| 8 | Servicios | `services.*` | — |
| 9 | Contacto | `contact.*` | — |

**Preguntas por sección** (adapta, no leas como formulario):
1. *Preloader*: ¿qué palabra va (nombre, alias, marca; ≤8 letras)? ¿Preloader o entrar directo?
2. *Nav*: ¿qué secciones aparecen en el menú? ¿Qué redes y URLs reales (GitHub, LinkedIn, correo, WhatsApp)?
3. *Hero*: ¿qué dos líneas gigantes dicen quién eres (≤12 caracteres cada una)? ¿Frase de apoyo ≤140 caracteres? ¿Sello y 3 etiquetas? ¿Tienes un retrato recortado con fondo transparente? ¿Blanco y negro o color?
4. *Sobre mí*: ¿qué te define en una frase? ¿Qué dos pilares (oficio / fundamentos)? ¿Qué dos botones? ¿Foto o ilustración para la tarjeta y fondo oscuro de textura?
5. *Experiencia*: ¿qué hitos (3–5)? Por hito: fechas, organización, tipo, título en 2 líneas, descripción corta, 3 logros. ¿Cómo agrupamos las pestañas (Experiencia / Formación / Freelance)? ¿Qué palabras gigantes de fondo?
6. *Destacado*: ¿cuáles son tus 3–6 proyectos más fuertes? Por proyecto: título, subtítulo (stack o rol) y captura. ¿Qué etiqueta de categoría?
7. *Obras*: ¿cuáles son los 6 trabajos (iguales o distintos al carrusel)? ¿Enlace de caso de estudio o repo? Si tiene menos de 6, propón repetir o completar con proyectos personales; no dejes menos de 6.
8. *Servicios*: ¿qué ofreces realmente (3–6)? Por servicio: descripción, entregables, texto del botón. ¿Cuál abre primero?
9. *Contacto*: ¿qué palabra cierra? ¿Qué canales y URLs? ¿Cuál es el principal?

### Paso 2 — Plan (`scrum.md`)
Tras el recorrido (o antes, si la persona lo pide): reordena sprints según lo bloqueado, estima con la persona (días disponibles por semana), deja `[!]` en todo lo que dependa de imágenes o datos pendientes, y agrega fecha objetivo. Sprints base: 0 Descubrimiento, 1 Fundaciones (preloader, nav, hero, sobre mí), 2 Historia (experiencia, destacado), 3 Obras/servicios/contacto, 4 Calidad y salida.

### Paso 3 — Construcción y verificación
1. Vuelca `brief.md` en `js/content.js` (strings escapados; `image` con ruta relativa o `null`).
2. Abre el sitio (servidor estático o `file://`) y revisa con capturas en 1440×810 y 390×844 en estos puntos de scroll: hero (0), tarjeta (~.2/.33), "SOBRE MÍ" (~.42), pantalla completa (~.95), cada panel de experiencia, carrusel, hexágono (~.05), tambor (~.5), servicios, contacto. Confirma que no hay errores de consola y que ningún título se corta en móvil.
3. Si cambió el largo del contenido, ajusta alturas en `setHeights()`.
4. Cierra: marca tareas en `scrum.md`, agrega entrada al registro de sprints y lista qué falta (imágenes, URLs).

## Especificación de animaciones (para ajustar o reconstruir)
Patrón general: cada sección fija es un contenedor alto con `.stage { position: sticky; top: 0; height: 100vh }`. El progreso `p = clamp(-rect.top / (rect.height - innerHeight))` se suaviza con `cur += (p - cur) * 0.12` y maneja las transformaciones en `requestAnimationFrame`. Solo se calculan secciones cercanas a la pantalla. Con `prefers-reduced-motion` el factor es 1 y no hay preloader.

1. **Preloader** (≈2.4 s): fondo negro; un `path` SVG se dibuja con `stroke-dashoffset` (1.5 s, ease-out cúbico) y un punto sigue la punta (`getPointAtLength`); la palabra entra letra a letra (delay 0.09 s) con `text-shadow` luminoso; se añade un punto final; la cortina sube (`translateY(-100%)`, 1 s, `cubic-bezier(.76,0,.24,1)`). Luego `body.ready` dispara el resto.
2. **Nav**: `fixed`, baja con `translateY` al estar `ready`; píldoras con `backdrop-filter`; `data-theme` claro/oscuro según la sección bajo la barra; enlace activo por posición de scroll; clic hace scroll suave a la sección.
3. **Hero** (claro): título 2 líneas, `font-size: clamp(50px,12.4vw,210px)`, `letter-spacing:-.05em`, `line-height:.86`; cada línea dentro de una máscara (`overflow:hidden`) que sube con `translateY(112%→0)` en 1.3 s (la 2.ª con 0.12 s de retraso); la 2.ª línea lleva degradado vertical que se desvanece a transparente; el retrato (PNG recortado, `z-index` mayor que el título) entra desde `blur(14px)`. El título recibe `blur` hasta 3 px al encoger.
4. **Hero → Sobre mí** (contenedor 520vh, `p` 0–1):
   - 0–.28: la tarjeta (`100vw×100vh`) escala 1→.3 con borde redondeado `(1-s)*70/s px`; aparece el fondo oscuro de remolinos.
   - .20–.28: aparecen «SOBRE / MÍ» apilados (`mix-blend-mode:difference`).
   - .27–.39: crossfade hero → capa oscura con haz de luz (cono blanco difuminado + punto luminoso).
   - .34–.48: las palabras se separan a izquierda/derecha (`.30·vw`) y se alinean en una línea.
   - .46–.76: la tarjeta escala .3→1 (ease in-out cúbico); las palabras siguen hacia afuera y se desvanecen (.52–.66).
   - .80–.94: sube y aparece el contenido (gancho, titular, columnas, botones).
5. **Experiencia** (contenedor `(paneles·85+100)vh`): pista horizontal `translateX(-pos·100vw)`; `pos` avanza con **dwell** (`floor + ease(clamp((frac-.25)/.5))`) para que cada panel se detenga; títulos con `blur(distancia·5px)`, `text-shadow` doble desfasado (blanco y azul) proporcional a la distancia al centro (efecto de duplicado/glitch) y glow 28 px; dos filas de texto fantasma (`opacity .12`) se mueven en sentidos opuestos; barra de progreso superior de 2 px; pestañas se activan según el panel y hacen scroll al hacer clic. Al llegar a `p>.86` un bloque claro sube con `scaleY` y borde superior blanco brillante (destello) hasta cubrir la pantalla.
6. **Carrusel curvo** (contenedor `(n·70+100)vh`, canvas 2D): cada tarjeta es una textura (imagen o placeholder). Se dibuja en tiras de 2.5 px sobre un cilindro: para la tira en coordenada de arco `s`, `φ=s/R`, `X=R·sin φ`, `Z=R(1-cos φ)`, escala `f=F/(F+Z)` con `R=.62·ancho`, `F=1.15·R`; `screenX=cx+X·f`, alto `=cardH·f`. El desplazamiento usa dwell por tarjeta y se suaviza (`.2`); arrastre con mouse suma `drag` y al soltar encaja en la tarjeta más cercana; el pie (título, subtítulo, `01 / 05`) cambia con fundido de 140 ms. Para curvatura real, migrar a WebGL (OGL/three) con planos doblados.
7. **Obras** (contenedor `(6·70+160)vh`, tarjetas DOM con `perspective:1400px`): `t=ease(p/.22)` mezcla dos layouts por tarjeta. *Hexágono*: ángulo `i/6·360-90+spin`, posición `(cos·1.15R, sin·R)`, `rotateZ(ángulo+90°)`, `rotateX(22°)`, escala .86, giro lento `14°/s·(1-t)`. *Tambor* (`pos` continuo = progreso restante·(n-1) + arrastre): `y=k·.72·ancho`, `rotateX(-34°·k)` (máx 75°), `z=-|k|·.5·ancho`, escala `1.5-.2|k|`, opacidad `1.15-.5|k|`. Texto central se apaga con `t`, etiqueta izquierda aparece, índice derecho marca la activa; clic en tarjeta o índice hace scroll a ese punto; hay pista «scroll o arrastra».
8. **Servicios**: píldoras (`border-radius:999px`); la abierta pasa a tarjeta negra (`radius 22px`) y el cuerpo se anima con `grid-template-rows: 0fr→1fr` (.6 s); `aria-expanded` actualizado.
9. **Contacto**: línea de luz superior `scaleX 0→1` (1.4 s); palabra gigante con degradado cromado y foco radial que sigue al cursor (`--mx/--my`); letras suben escalonadas (55 ms); botones en píldora, el principal en blanco.

Tokens: claro `#efeeea`, tinta `#0c0c0e`, noche `#06070c`, líneas `rgba(0,0,0,.12)`; Manrope 800 con `letter-spacing:-.045em` para títulos, JetBrains Mono 10–11 px para datos; easing `cubic-bezier(.2,.8,.2,1)`.

## Plantillas mínimas (si hay que recrear los archivos)
**brief.md** — sección 0 (tabla de proyecto: nombre, rol, ciudad, idioma, público, objetivo, acción, dominio, stack, paleta, tipografías, referencias) + una ficha por sección con: Animación, Contenido, Imágenes (slots), Preguntas, Decisión `[ ]` + tabla «Inventario de imágenes» (slot, sección, formato, estado, archivo) + «Decisiones abiertas».
**scrum.md** — Visión, Definition of Done, Roles, Sprints 0–4 con tareas `S1-1…` enlazadas a secciones del brief y marcadas `[ ] [~] [x] [!]`, Backlog, Riesgos, Registro de decisiones, Registro de sprints.

## Cierre de cada sesión
Resume en ≤5 líneas: qué secciones quedaron `[x]`, qué imágenes o datos faltan (con el slot exacto), y cuál es la siguiente pregunta. No repitas el contenido de los archivos.
