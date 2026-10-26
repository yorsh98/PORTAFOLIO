/* Contenido del portafolio en formato ECHO (portado desde portfolio-echo-kit/js/content.js).
   Todo texto e imagen de la portada sale de aquí. image: null → placeholder generado en cliente. */
import { projects } from './projects';

const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
const caseUrl = (slug: string) => (bySlug(slug) ? `/proyectos/${slug}` : null);

export type Social = { id: 'github' | 'linkedin' | 'mail' | 'whatsapp'; label: string; href: string };
export type FeaturedItem = { title: string; sub: string; image: string | null; href: string | null };
export type WorkItem = { title: string; image: string | null; href: string | null };

export const contactLinks = {
  email: 'mailto:jorge.troncoso4@gmail.com',
  whatsapp: 'https://wa.me/56950254516',
  github: 'https://github.com/yorsh98'
};

export const site = {
  brand: { logo: 'JT', name: 'Jorge Troncoso', role: 'Desarrollo web e IA local y en la nube', city: 'Santiago, Chile' },

  preloader: { word: 'JORGE' },

  nav: [
    ['home', 'Inicio'], ['about', 'Sobre mí'], ['experience', 'Experiencia'],
    ['projects', 'Proyectos'], ['stack', 'Stack'], ['services', 'Servicios']
  ] as const,

  // LinkedIn en standby: se agrega cuando el perfil esté actualizado.
  social: [
    { id: 'github', label: 'GitHub', href: contactLinks.github },
    { id: 'whatsapp', label: 'WhatsApp', href: contactLinks.whatsapp },
    { id: 'mail', label: 'Correo', href: contactLinks.email }
  ] satisfies Social[],

  hero: {
    line1: 'JORGE',
    line2: 'TRONCOSO',
    tagline: 'Construyo software que conecta datos, procesos e inteligencia artificial local y en la nube.',
    est: 'DESARROLLO WEB · IA LOCAL Y EN LA NUBE · RAG',
    side: ['LARAVEL + REACT/VUE', 'FASTAPI + CELERY', 'OLLAMA + LANGGRAPH'],
    // Diagrama animado bajo el título: los nodos orbitan el núcleo; al pasar el mouse se detiene y muestra el detalle.
    core: {
      kicker: 'LOCAL + CLOUD AI',
      title: 'Desarrollo + IA',
      nodes: [
        { label: 'Laravel UI', info: 'Portales con autenticación, roles y permisos.' },
        { label: 'FastAPI', info: 'Servicios de IA expuestos como APIs internas.' },
        { label: 'Llama.cpp', info: 'Inferencia local de modelos cuantizados en CPU y GPU.' },
        { label: 'LangGraph', info: 'Orquestación de agentes con flujos y estados.' },
        { label: 'PostgreSQL', info: 'Persistencia de usuarios, tareas y resultados.' },
        { label: 'pgvector', info: 'Búsqueda semántica sobre embeddings.' },
        { label: 'RAG', info: 'Respuestas con contexto recuperado, fuentes y citas.' }
      ]
    },
    portrait: null as string | null
  },

  about: {
    words: ['SOBRE', 'MÍ'],
    kicker: 'Tecnología que resuelve, automatiza y sostiene la operación',
    headline: 'Del incidente a la solución',
    intro: 'Soy Jorge Troncoso. Empecé en 2019 dando soporte TI en tribunales —equipos, redes, servidores y salas de audiencia— y hoy desarrollo plataformas web, servicios de IA y automatizaciones para la gestión documental.',
    facts: ['TI desde 2019', 'Santiago, Chile', 'Diplomado en IA · INACAP', 'Desarrollo para un tribunal oral en lo penal'],
    cols: [
      { k: 'Oficio', v: 'Aplicaciones web, servicios backend e infraestructura de IA local y en la nube para flujos documentales, recuperación de información y automatización.' },
      { k: 'Fundamentos', v: 'Soporte tecnológico y continuidad operativa desde 2019: equipos, redes, servidores locales y salas de audiencias híbridas.' },
      { k: 'Método', v: 'Desarrollo agéntico con Claude Code, Codex y opencode: reglas por repositorio, skills y servidores MCP. Reviso cada cambio y el build verificado decide qué se entrega.' }
    ],
    ctas: [{ label: 'Ver proyectos', go: 'projects', primary: true }, { label: 'Contactar', go: 'contact', primary: false }]
  },

  experience: {
    title: ['DÓNDE', 'HE ESTADO'],
    kicker: 'EXPERIENCIA APLICADA',
    intro: 'Resolver primero. Mejorar después. Un recorrido por los entornos donde aprendí a construir herramientas que se usan todos los días.',
    ghost: ['DESARROLLO · IA LOCAL Y EN LA NUBE', 'SOPORTE TI · DESDE 2019'],
    tabs: ['EXPERIENCIA', 'FORMACIÓN'],
    items: [
      { tab: 0, dates: '2019 — 2024', org: 'CAPJ y TOP San Bernardo', kind: 'Administrativo Encargado Informática', title: ['SOPORTE', 'TECNOLÓGICO'],
        text: 'Administración de equipos, respaldo de audios, red local, sistemas remotos, archivos compartidos y atención de emergencias informáticas para distintas competencias jurisdiccionales.',
        milestones: [
          { k: 'CONTINUIDAD', v: 'Soporte a usuarios, equipos, impresoras y redes.' },
          { k: 'RESPALDOS', v: 'Resguardo de audios y archivos compartidos.' },
          { k: 'AUDIENCIAS', v: 'Operación de salas de audiencias híbridas.' }
        ] },
      { tab: 0, dates: '2024 — 2026', org: '4.º Tribunal de Juicio Oral en lo Penal de Santiago', kind: 'Administrativo informático', title: ['DESARROLLO', 'IA Y WEB'],
        text: 'Mejoras tecnológicas, flujos de trabajo locales y desarrollos que integran IA local para la gestión documental.',
        milestones: [
          { k: 'PLATAFORMA', v: 'Plataforma IA Unificada: portal, roles y módulos de IA.' },
          { k: 'SISTEMA', v: '4toTOP: permisos, archivos, correo IMAP y reportes.' },
          { k: 'ASISTENTE', v: 'Chatbot UNIJUD: RAG con fuentes y citas.' }
        ] },
      { tab: 1, dates: 'Formación continua', org: 'INACAP · Desafío Latam · Claude Academy · Código Facilito', kind: 'Credenciales', title: ['FORMACIÓN', 'CONTINUA'],
        text: 'Diplomado en Inteligencia Artificial aplicada a negocios, curso de Transformación Digital con IA y Automatización, y formación complementaria en datos, Machine Learning y desarrollo asistido por IA.',
        milestones: [
          { k: 'IA', v: 'Diplomado IA aplicada a negocios (INACAP) y Transformación Digital con IA y Automatización (Desafío Latam, 150 h).' },
          { k: 'DATOS', v: 'Bases de datos y Machine Learning para decisiones.' },
          { k: 'CÓDIGO', v: 'Claude Code 101, GitHub a fondo y Laravel profesional.' },
          { k: 'A FUTURO · CIBERSEGURIDAD', v: 'Diplomado en Ethical Hacking / Pentesting (INACAP), actualmente en curso.' }
        ] }
    ]
  },

  featured: {
    eyebrow: 'PROYECTOS DESTACADOS',
    category: 'CASOS DE TRABAJO',
    items: [
      { title: 'Plataforma IA Unificada', sub: 'Agentes especializados · Laravel, FastAPI, Ollama', image: '/images/echo/plataforma-ia.webp', href: caseUrl('plataforma-ia-unificada') },
      { title: '4toTOP', sub: 'Gestión operativa · Laravel, Livewire', image: '/images/echo/4totop.webp', href: caseUrl('4totop') },
      { title: 'Chatbot UNIJUD', sub: 'RAG documental · Vue 3, FastAPI, LangGraph', image: '/images/echo/chatbot-unijud.webp', href: caseUrl('chatbot-unijud') },
      { title: 'CRM para WhatsApp', sub: 'Atención comercial · Laravel, React, FastAPI', image: '/images/echo/crm-whatsapp.webp', href: caseUrl('crm-whatsapp') },
      { title: 'Legal Chile Gemma', sub: 'Fine-tuning legal · LoRA / QLoRA', image: null, href: caseUrl('legal-chile-gemma') }
    ] satisfies FeaturedItem[]
  },

  works: {
    center: "OBRAS '26",
    hint: 'SCROLL O ARRASTRA EL TAMBOR',
    items: [
      { title: 'Plataforma IA Unificada', image: '/images/echo/plataforma-ia.webp', href: caseUrl('plataforma-ia-unificada') },
      { title: '4toTOP', image: '/images/echo/4totop.webp', href: caseUrl('4totop') },
      { title: 'Chatbot UNIJUD', image: '/images/echo/chatbot-unijud.webp', href: caseUrl('chatbot-unijud') },
      { title: 'Anonimizador', image: null, href: null },
      { title: 'CRM WhatsApp', image: '/images/echo/crm-whatsapp.webp', href: caseUrl('crm-whatsapp') },
      { title: 'Legal Chile Gemma', image: null, href: caseUrl('legal-chile-gemma') },
      { title: 'ProviEmplea 2026', image: '/images/echo/proviemplea.webp', href: caseUrl('proviemplea') },
      { title: 'VentasFix', image: '/images/echo/ventasfix.webp', href: caseUrl('ventasfix') }
    ] satisfies WorkItem[]
  },

  stack: {
    eyebrow: 'STACK TÉCNICO',
    title: 'HERRAMIENTAS CONECTADAS',
    text: 'Para construir productos web, servicios, datos e inteligencia artificial local y en la nube.'
  },

  localAi: {
    eyebrow: 'ENTORNO DE CÓMPUTO',
    title: ['IA LOCAL', 'Y EN LA NUBE'],
    text: 'Una plataforma propia para ejecutar modelos, agentes, recuperación documental y servicios con aceleración GPU, que también se conecta con modelos en la nube cuando el caso lo requiere.',
    models: {
      label: 'TIPOS DE MODELOS',
      items: [
        { k: 'LLM', name: 'Modelos de lenguaje grandes', v: 'Chatbots, RAG y agentes con Gemma, Qwen y Llama, ejecutados en local o en la nube.' },
        { k: 'SLM', name: 'Modelos de lenguaje pequeños', v: 'Modelos livianos para tareas acotadas, con baja latencia y menor consumo de GPU.' },
        { k: 'STT', name: 'Voz a texto', v: 'Transcripción de audios a texto revisable con Faster-Whisper.' },
        { k: 'NER', name: 'Reconocimiento de entidades', v: 'Detección de nombres y datos personales para anonimizar documentos.' },
        { k: 'RLCD', name: 'Reinforcement Learning for Calibrated Decisions', v: 'Aprendizaje por refuerzo para decisiones calibradas.' }
      ]
    },
    hybrid: {
      label: 'Infraestructura mixta',
      title: 'Local + nube en una misma arquitectura',
      text: 'Los servicios se desacoplan para que cada tarea use el motor adecuado: modelos locales cuando los datos deben quedarse en el entorno administrado, y modelos en la nube cuando se necesita más capacidad o disponibilidad. La aplicación consume ambos a través de la misma capa de APIs.',
      tags: ['Ollama', 'Llama.cpp', 'vLLM', 'APIs de IA en la nube', 'FastAPI']
    },
    layers: [
      { label: 'Plataforma base', title: 'Ubuntu 26.04 LTS', text: 'Sistema anfitrión para servicios, almacenamiento, red local y administración del entorno.', tags: ['Linux', 'Docker Compose'] },
      { label: 'Procesamiento', title: 'NVIDIA GPU', text: 'Drivers, CUDA y NVIDIA Container Toolkit habilitan inferencia y entrenamiento en contenedores.', tags: ['CUDA', 'Container Toolkit'] },
      { label: 'Modelos locales', title: 'Ollama · Llama.cpp · vLLM', text: 'Inferencia de Gemma, Qwen y otros modelos abiertos, embeddings y adaptación especializada mediante LoRA y QLoRA.', tags: ['LLMs', 'Fine-tuning'] },
      { label: 'Entornos de agentes', title: 'OpenClaw · Hermes Agent', text: 'Agentes con herramientas para ejecutar tareas, coordinar flujos y apoyar automatizaciones.', tags: ['Tools', 'Workflows'] },
      { label: 'Datos y conocimiento', title: 'PostgreSQL · pgvector · Redis', text: 'Persistencia, búsqueda semántica, estados, colas e índices para aplicaciones con contexto.', tags: ['RAG', 'Embeddings'] },
      { label: 'Servicios aplicados', title: 'APIs · Workers · Procesamiento', text: 'OCR, audio, NLP, transcripción y tareas asíncronas operadas como servicios desacoplados.', tags: ['Health checks', 'Logs'] }
    ]
  },

  credentials: {
    eyebrow: 'FORMACIÓN CONTINUA',
    title: 'CURSOS Y DIPLOMADOS',
    text: 'Formación en inteligencia artificial, datos y desarrollo. Selecciona un curso para ver su certificado.',
    items: [
      { title: 'Claude Code 101', org: 'Claude Academy', kind: 'Destacado', image: '/images/profile/claude-code-101.webp', verify: 'https://academy.claude.com/verify/93acc051fa6fd30931a68ea8313b9e93' },
      { title: 'Claude Platform 101', org: 'Claude Academy', kind: 'Destacado', image: '/images/profile/claude-platform-101.webp', verify: 'https://academy.claude.com/verify/ca4776b64581e1b0547961e4490a11b2' },
      { title: 'Diplomado Inteligencia Artificial aplicada a negocios', org: 'INACAP', kind: 'Destacado', image: '/images/profile/Captura desde 2026-07-28 21-51-24.webp' },
      { title: 'Fundamentos de Inteligencia Artificial aplicada a negocios', org: 'INACAP', kind: 'Curso del diplomado', image: '/images/profile/Captura desde 2026-07-28 21-52-26.webp' },
      { title: 'Incorporación de Inteligencia Artificial', org: 'INACAP', kind: 'Curso del diplomado', image: '/images/profile/Captura desde 2026-07-28 21-52-40.webp' },
      { title: 'Desarrollo y gestión de bases de datos', org: 'INACAP', kind: 'Curso del diplomado', image: '/images/profile/Captura desde 2026-07-28 21-52-16.webp' },
      { title: 'Adopción de Machine Learning para la toma de decisiones', org: 'INACAP', kind: 'Curso del diplomado', image: '/images/profile/Captura desde 2026-07-28 21-51-47.webp' },
      { title: 'Transformación Digital con IA y Automatización', org: 'Nodo · Desafío Latam', kind: 'Certificación', image: '/images/profile/nodo-transformacion-digital-ia.webp' },
      { title: 'Curso de Laravel Profesional', org: 'Código Facilito', kind: 'Curso', image: '/images/profile/Captura desde 2026-07-28 21-50-47.webp' },
      { title: 'Bases y Conceptos de Inteligencia Artificial', org: 'Código Facilito', kind: 'Curso', image: '/images/profile/Captura desde 2026-07-28 21-50-37.webp' },
      { title: 'Curso a fondo de GitHub', org: 'Código Facilito', kind: 'Curso', image: '/images/profile/Captura desde 2026-07-28 21-50-29.webp' }
    ]
  },

  services: {
    title: 'LO QUE PUEDO CONSTRUIR',
    text: 'Sistemas web y de IA pensados para operar con datos propios, con revisión humana donde importa.',
    items: [
      { title: 'Plataformas de IA local y en la nube', text: 'Agentes, análisis y procesamiento de documentos sobre infraestructura propia o servicios en la nube, con resultados trazables.', deliverables: 'Arquitectura, agentes, API, Docker', cta: 'Consultar' },
      { title: 'RAG y chatbots documentales', text: 'Asistentes que responden con tus documentos, con búsqueda vectorial, modelos locales y citas a las fuentes.', deliverables: 'Ingesta, pgvector, chatbot, voz opcional', cta: 'Consultar' },
      { title: 'Sistemas web a medida', text: 'Aplicaciones internas con Laravel, Livewire, React o Vue, con permisos, archivos y reportes.', deliverables: 'Backend, panel, permisos, exportes', cta: 'Consultar' },
      { title: 'Automatización de procesos', text: 'Flujos que reemplazan tareas manuales, integran canales como WhatsApp o correo y escalan a una persona cuando hace falta.', deliverables: 'Flujos, integraciones, alertas', cta: 'Consultar' },
      { title: 'Infraestructura de IA mixta', text: 'Servidores locales con GPU combinados con modelos en la nube, mediante servicios desacoplados listos para crecer.', deliverables: 'Docker Compose, CUDA, llama.cpp / vLLM, APIs', cta: 'Consultar' }
    ]
  },

  contact: {
    title: 'HABLEMOS',
    pills: [
      { label: 'GitHub', href: contactLinks.github, primary: false },
      { label: 'WhatsApp', href: contactLinks.whatsapp, primary: false },
      { label: 'Escríbeme', href: contactLinks.email, primary: true }
    ],
    footer: ['© 2026 Jorge Troncoso', 'Santiago, Chile', 'Hecho con Astro']
  }
};

export type Site = typeof site;
