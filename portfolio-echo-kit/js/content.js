/* ==========================================================
   content.js — ÚNICA fuente de verdad del portafolio.
   Todo texto e imagen vive aquí. La skill `portfolio-guide`
   rellena este archivo a partir de brief.md.
   - image: null  → se genera un placeholder automático.
   - image: "assets/img/archivo.webp" → se usa tu imagen.
   Los textos de ejemplo son editables (basados en tu portafolio actual).
   ========================================================== */
window.SITE = {
  lang: 'es',

  brand: { logo: 'JT', name: 'Jorge Troncoso', role: 'IA Developer & Solutions Architect', city: 'Santiago, Chile' },

  /* 1 · PRELOADER — palabra con trazo animado */
  preloader: { word: 'JORGE' },

  /* 2 · NAV */
  nav: [
    ['home', 'Inicio'], ['about', 'Sobre mí'], ['experience', 'Experiencia'],
    ['projects', 'Proyectos'], ['works', 'Obras'], ['services', 'Servicios']
  ],
  social: [
    { id: 'github',   label: 'GitHub',   href: 'https://github.com/vorsh98' },
    { id: 'linkedin', label: 'LinkedIn', href: '#' },
    { id: 'mail',     label: 'Correo',   href: 'mailto:correo@dominio.cl' },
    { id: 'whatsapp', label: 'WhatsApp', href: '#' }
  ],

  /* 3 · HERO — título gigante + retrato recortado (PNG transparente) */
  hero: {
    line1: 'EXPLORA MI',
    line2: 'PORTAFOLIO',
    tagline: 'Construyo plataformas de IA local, sistemas web y automatizaciones que se entienden y se pueden auditar.',
    est: 'DESARROLLADOR IA · DESDE 2019',
    side: ['IA LOCAL', 'BACKEND', 'RAG DOCUMENTAL'],
    portrait: null            // ej: "assets/img/retrato.png"
  },

  /* 4 · SOBRE MÍ — tarjeta que se expande */
  about: {
    words: ['SOBRE', 'MÍ'],
    kicker: 'Convierto procesos complejos en sistemas de IA rápidos, trazables y útiles',
    headline: 'Desarrollo con criterio de arquitecto',
    cols: [
      { k: 'Oficio', v: 'Aplicaciones web, servicios backend e infraestructura local de IA, con foco en soluciones que resisten el uso real.' },
      { k: 'Fundamentos', v: 'Soporte tecnológico, redes y servidores desde 2019: primero que funcione, luego que escale.' }
    ],
    ctas: [{ label: 'Ver proyectos', go: 'projects', primary: true }, { label: 'Servicios', go: 'services' }],
    image: null,              // fondo/foto de la tarjeta (ej: "assets/img/about.webp")
    bg: null                  // fondo exterior con remolinos (ej: "assets/img/bg-about.webp")
  },

  /* 5 · EXPERIENCIA — paneles horizontales con glitch */
  experience: {
    title: ['DÓNDE', 'HE ESTADO'],
    kicker: 'ORIGEN Y FUNDAMENTOS',
    intro: 'Un recorrido por los roles y entornos donde aprendí a construir sistemas que se usan todos los días.',
    ghost: ['DESARROLLADOR IA', 'PODER JUDICIAL · 2019 — 2026'],
    tabs: ['EXPERIENCIA', 'FORMACIÓN'],
    items: [
      { tab: 0, dates: '2019 — 2024', org: 'CAPJ y TOP San Bernardo', kind: 'PROFESIONAL', title: ['SOPORTE', 'TECNOLÓGICO'],
        text: 'Administración de equipos, respaldos, redes y sistemas remotos; atención de emergencias en salas de audiencias híbridas.',
        milestones: [
          { k: 'CONTINUIDAD', v: 'Soporte a usuarios, equipos y redes.' },
          { k: 'RESPALDOS', v: 'Resguardo y recuperación de información.' },
          { k: 'AUDIENCIAS', v: 'Operación de salas híbridas.' }
        ] },
      { tab: 0, dates: '2024 — 2026', org: '4.º Tribunal Oral en lo Penal de Santiago', kind: 'PROFESIONAL', title: ['DESARROLLO', 'IA Y WEB'],
        text: 'Diseño de sistemas internos y automatizaciones para procesos institucionales, con IA aplicada sobre infraestructura local.',
        milestones: [
          { k: 'PLATAFORMA', v: 'Plataforma de IA unificada.' },
          { k: 'SISTEMA', v: '4toTOP: gestión operativa y documental.' },
          { k: 'ASISTENTE', v: 'Chatbot UNIJUD con RAG.' }
        ] },
      { tab: 1, dates: '2024 — 2026', org: 'INACAP y especialización', kind: 'FORMACIÓN', title: ['FORMACIÓN', 'CONTINUA'],
        text: 'Diplomado y cursos de IA aplicada a negocios, bases de datos, Machine Learning, GitHub y Laravel.',
        milestones: [
          { k: 'IA', v: 'IA aplicada a negocios.' },
          { k: 'DATOS', v: 'Bases de datos y bases de IA.' },
          { k: 'CÓDIGO', v: 'GitHub y Laravel.' }
        ] }
    ]
  },

  /* 6 · PROYECTO DESTACADO — carrusel curvo */
  featured: {
    eyebrow: 'PROYECTO DESTACADO',
    category: 'IA APLICADA',
    items: [
      { title: 'Plataforma IA Unificada', sub: 'Agentes especializados · Laravel, React, Python', image: null },
      { title: 'Chatbot UNIJUD', sub: 'RAG documental · Vue 3, FastAPI, Ollama', image: null },
      { title: 'Legal Chile Gemma', sub: 'Fine-tuning legal · LoRA / QLoRA', image: null },
      { title: 'Anonimizador PJUD', sub: 'Anonimización local · NER + FastAPI', image: null },
      { title: 'CRM para WhatsApp', sub: 'Atención comercial · Laravel, React', image: null }
    ]
  },

  /* 7 · OBRAS — anillo hexagonal → tambor vertical (necesita 6) */
  works: {
    center: "OBRAS '26",
    hint: 'SCROLL O ARRASTRA EL TAMBOR',
    items: [
      { title: 'Plataforma IA Unificada', image: null },
      { title: '4toTOP', image: null },
      { title: 'Chatbot UNIJUD', image: null },
      { title: 'Anonimizador PJUD', image: null },
      { title: 'CRM WhatsApp', image: null },
      { title: 'Legal Chile Gemma', image: null }
    ]
  },

  /* 8 · SERVICIOS — acordeón */
  services: {
    title: 'LOS SERVICIOS QUE OFREZCO',
    text: 'Sistemas de IA y web pensados para operar con datos propios, sin depender de terceros para lo esencial.',
    items: [
      { title: 'Plataformas de IA local', text: 'Agentes, OCR y extracción de documentos sobre infraestructura propia, con resultados trazables.', deliverables: 'Arquitectura, agentes, API, despliegue con Docker', cta: 'Consultar' },
      { title: 'RAG y chatbots documentales', text: 'Asistentes que responden con tus documentos, con búsqueda vectorial y modelos locales.', deliverables: 'Ingesta, pgvector, chatbot, voz opcional', cta: 'Consultar' },
      { title: 'Sistemas web a medida', text: 'Aplicaciones internas con Laravel, Livewire y paneles de gestión listos para el uso diario.', deliverables: 'Backend, panel, permisos, exportes', cta: 'Consultar' },
      { title: 'Automatización de procesos', text: 'Flujos que reemplazan tareas manuales con revisión humana donde importa.', deliverables: 'Flujos, integraciones, alertas', cta: 'Consultar' },
      { title: 'Infraestructura de IA', text: 'Servidores locales, GPU y servicios desacoplados listos para crecer.', deliverables: 'Docker Compose, CUDA, monitoreo', cta: 'Consultar' }
    ]
  },

  /* 9 · CONTACTO */
  contact: {
    title: 'HABLEMOS',
    pills: [
      { label: 'GitHub', href: 'https://github.com/vorsh98' },
      { label: 'LinkedIn', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Escríbeme', href: 'mailto:correo@dominio.cl', primary: true }
    ],
    footer: ['© 2026 Jorge Troncoso', 'Santiago, Chile', 'Hecho con Astro']
  }
};
