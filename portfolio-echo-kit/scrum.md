# scrum.md — Plan de trabajo (Scrum)

> La skill `portfolio-guide` actualiza este archivo: marca tareas, mueve historias entre sprints y anota decisiones.
> Estados: `[ ]` pendiente · `[~]` en curso · `[x]` hecho · `[!]` bloqueado (falta input tuyo)

## Visión
Migrar de jorge-troncoso.pages.dev a un portafolio con el formato del video de referencia ("ECHO"): preloader, hero con retrato, tarjeta que se expande, experiencia horizontal, carrusel curvo, hexágono→tambor, servicios, contacto. Contenido propio: IA local, RAG, backend y proyectos judiciales.

## Definition of Done (por historia)
- Se ve y se anima como la referencia en escritorio y móvil (390 px).
- Todo texto e imagen sale de `js/content.js`; ningún dato escrito a mano en el HTML.
- Funciona con `prefers-reduced-motion` y se navega con teclado.
- Imágenes optimizadas (WebP/AVIF, < 300 KB cada una).
- El slot queda marcado en `brief.md` (Inventario de imágenes).

## Roles
| Rol | Quién |
|---|---|
| Product Owner | Jorge (decide contenido e imágenes) |
| Dev | Jorge + agente (con la skill) |
| Reglas | La skill pregunta una cosa por vez; nunca inventa datos personales |

---

## Sprint 0 — Descubrimiento (½ día)
Meta: tener brief completo antes de tocar código.
- [~] **S0-1** Responder la sección 0 del brief (público, objetivo, acción).
- [x] **S0-2** Decidir la ruta: vanilla / migrar a Astro.
- [x] **S0-3** Elegir paleta y tipografías (o mantener las de la demo).
- [x] **S0-4** Inventariar qué del sitio actual se conserva (Tecnologías, Formación, Infra IA).

## Sprint 1 — Fundaciones y primera impresión (1–2 días)
Meta: preloader, nav, hero y "Sobre mí" con contenido real.
- [x] **S1-1** Preloader (palabra, duración). _Brief §1_
- [!] **S1-2** Nav + redes con URLs reales. _§2_ — falta LinkedIn (standby) y confirmar GitHub `vorsh98`
- [!] **S1-3** Hero: textos + retrato recortado. _§3_ `[!]` requiere `hero.portrait`
- [x] **S1-4** Sobre mí: gancho, pilares, botones, imagen y fondo. _§4_
- [x] **S1-5** Afinar el tiempo de la transición hero→tarjeta (`updateHA` en `main.js`).
**Demo**: abrir `index.html`, recorrer hasta la tarjeta expandida.

## Sprint 2 — Historia profesional (1–2 días)
Meta: experiencia y proyecto destacado.
- [x] **S2-1** Hitos de experiencia (3–5) con 3 logros cada uno. _§5_
- [x] **S2-2** Pestañas y texto fantasma. _§5_
- [x] **S2-3** Carrusel curvo: 3–6 proyectos con captura 16:9.6. _§6_ `[!]` requiere capturas
- [x] **S2-4** Revisar destello blanco (transición experiencia → destacado).
**Demo**: scroll completo hasta el carrusel; arrastrar con el mouse.

## Sprint 3 — Obras, servicios y cierre (1–2 días)
Meta: las secciones interactivas finales.
- [x] **S3-1** Obras: 6 trabajos con captura. _§7_ `[!]` requiere 6 imágenes
- [x] **S3-2** Índice clicable y enlaces a casos de estudio/repos.
- [~] **S3-3** Servicios (3–6) con entregables. _§8_
- [x] **S3-4** Contacto: palabra, canales, pie. _§9_
**Demo**: recorrido completo de punta a punta.

## Sprint 4 — Calidad y salida (1 día)
Meta: publicar.
- [~] **S4-1** Optimizar imágenes (WebP/AVIF) y fuentes locales (sin Google Fonts).
- [~] **S4-2** Pruebas: 390 px, 768 px, 1440 px; Chrome, Safari, Firefox.
- [x] **S4-3** Accesibilidad: foco visible, contraste, `alt`, reduced-motion.
- [ ] **S4-4** SEO: título, descripción, Open Graph, `lang="es-CL"`.
- [x] **S4-5** Si va a Astro: portar `content.js` a `src/data/site.ts` y cada módulo a un componente.
- [~] **S4-6** Desplegar en Cloudflare Pages (rama `main`) y revisar dominio.

---

## Backlog (después del lanzamiento)
- [ ] Versión en inglés (`content.en.js` + selector).
- [x] Casos de estudio por proyecto (una página cada uno).
- [ ] Carrusel con curvatura real en WebGL (OGL/three) y GSAP ScrollTrigger si se quiere más control.
- [x] Sección "Tecnologías" y "Formación continua" del sitio actual.
- [ ] Modo claro/oscuro global.

## Riesgos
| Riesgo | Mitigación |
|---|---|
| Faltan imágenes y se pierde impacto | Los placeholders generados mantienen la animación; priorizar `hero.portrait` y las 6 capturas |
| Animaciones pesadas en móvil | Carrusel limitado a DPR 2; `near()` evita calcular secciones lejanas |
| Contenido judicial sensible en capturas | Usar capturas con datos de ejemplo/anonimizadas; confirmar permisos |
| Scroll largo (≈ 30 pantallas) | Ajustar alturas en `setHeights()` |

## Registro de decisiones
| Fecha | Decisión | Por qué |
|---|---|---|
| 2026-10-23 | Demo en vanilla (HTML/CSS/JS) con `content.js` | Se prueba abriendo el archivo; migrar a Astro después es directo |
| 2026-10-23 | Migrar el kit a Astro 7.4.2 y reemplazar toda la web | Pedido del dueño: mantener el stack actual con las animaciones ECHO |
| 2026-10-23 | Obras se quedan con los 6 del kit | El dueño quiere ver la migración antes de integrar más proyectos |
| 2026-10-23 | LinkedIn en standby | El perfil aún no está actualizado |
| 2026-10-23 | Se elimina `mi-amor-7f3k.astro` | Pedido del dueño |

## Registro de sprints
_(la skill agrega aquí: fecha, qué se terminó, qué quedó bloqueado)_

**2026-10-23** — Migración a Astro completa: todas las secciones ECHO + Stack, IA local, Credenciales y páginas de proyecto. Verificado en 1440×810 y 390×844 (sin errores de consola, sin scroll horizontal, reduced-motion OK). Bloqueado: `hero.portrait`, LinkedIn, capturas de Anonimizador PJUD y Legal Chile Gemma. Por revisar: textos de Servicios y público objetivo.

**2026-10-23 (2)** — IA local → IA local y en la nube; diagrama del hero animado (órbita tipo carrusel, se detiene y muestra detalle al pasar el mouse o tocar; Workers → Llama.cpp, + LangGraph); stack con Llama.cpp, vLLM, Next.js y Argon2 (nueva categoría Seguridad); bloque Tipos de modelos (LLM, SLM, STT, NER, RLCD); tarjeta de infraestructura mixta; certificados Nodo/Desafío Latam y Claude Code 101. Por confirmar: descripción de RLCD.
