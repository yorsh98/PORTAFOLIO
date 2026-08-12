type Project = {
  slug: string;
  title: string;
  category: string;
  kind: 'web' | 'model';
  description: string;
  objective: string;
  solution: string;
  architecture: string;
  infrastructure: string;
  publicationNote: string;
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: 'plataforma-ia-unificada',
    title: 'Plataforma IA Unificada',
    category: 'Desarrollo web + IA',
    kind: 'web',
    description: 'Plataforma web que orquesta agentes especializados apoyados por modelos de Machine Learning, Deep Learning e IA: analizador de autos de apertura, anonimizador de sentencias, transcriptor de audios STT y chatbot RAG con recuperación de información.',
    objective: 'Centralizar capacidades de inteligencia artificial en una experiencia web coherente para trabajar con documentos, audio y consultas asistidas.',
    solution: 'Una interfaz Laravel integra servicios especializados para procesamiento documental y flujos conversacionales, manteniendo separados los componentes de ejecución y persistencia.',
    architecture: 'Arquitectura de microservicios orientada a módulos. Un portal central Laravel administra autenticación, permisos y experiencia de usuario; los motores de IA funcionan como APIs internas independientes. PostgreSQL, Redis y colas Celery soportan persistencia, caché y procesamiento asíncrono.',
    infrastructure: 'Infraestructura contenerizada con Docker Compose. Un portal Laravel expuesto a usuarios integra servicios internos FastAPI para análisis, anonimización, transcripción y chatbots. Utiliza PostgreSQL, Redis, colas Celery, almacenamiento de archivos, Ollama para modelos locales y GPU NVIDIA para cargas de IA.',
    publicationNote: 'El caso presenta la arquitectura y las capacidades a nivel general. No incluye documentos, flujos internos, credenciales ni capturas con información sensible.',
    technologies: ['Laravel', 'React', 'TypeScript', 'PHP', 'Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'pgvector', 'LangChain', 'LangGraph', 'NER', 'STT', 'Gemma 4', 'Ollama', 'Docker'],
    image: {
      src: '/images/projects/PLATAFORMA%20IA/1.webp',
      alt: 'Vista principal de la Plataforma IA Unificada.'
    },
    gallery: [
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2020-59-28.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2020-59-52.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2020-59-54.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2020-59-57.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-00-10.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-00-21.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-00-28.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-00-39.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-00-44.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-00-48.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-01-28.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-01-37.webp',
      '/images/projects/PLATAFORMA%20IA/Captura%20desde%202026-07-28%2021-02-00.webp'
    ]
  },
  {
    slug: '4totop',
    title: '4toTOP',
    category: 'Desarrollo web',
    kind: 'web',
    description: 'Plataforma web para administrar información, archivos, permisos, comunicaciones y flujos operativos en un mismo entorno.',
    objective: 'Organizar procesos operativos y acceso a información mediante una aplicación web estructurada alrededor de permisos y flujos de trabajo.',
    solution: 'La aplicación utiliza Laravel para el dominio y la persistencia, con componentes Livewire y Volt para una experiencia de administración dinámica.',
    architecture: 'Arquitectura monolítica MVC basada en Laravel. Controladores, modelos y vistas gestionan la lógica del sistema, con Livewire para interfaces dinámicas. Incluye módulos de roles, datos, archivos, correo y reportes dentro de una única aplicación.',
    infrastructure: 'Aplicación Laravel desplegable sobre servidor PHP con base de datos MariaDB. Incluye procesamiento de colas, tareas programadas, Vite para activos frontend y conectividad IMAP para integración de correo.',
    publicationNote: 'La documentación pública se limita a las capacidades generales del producto. La captura publicada excluye datos personales, credenciales y vistas operativas internas.',
    technologies: ['Laravel', 'Livewire', 'Volt', 'Tailwind CSS', 'Bootstrap', 'DataTables', 'Pest'],
    image: {
      src: '/images/projects/4toTOP/1.webp',
      alt: 'Vista principal de la plataforma 4toTOP.'
    },
    gallery: [
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-36-48.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-38-47.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-38-54.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-13.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-18.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-22.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-32.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-36.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-40.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-48.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-54.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-39-58.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-40-10.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-40-55.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-41-12.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-41-19.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-41-25.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-41-32.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-41-38.webp',
      '/images/projects/4toTOP/Captura%20desde%202026-07-28%2020-41-43.webp'
    ]
  },
  {
    slug: 'chatbot-unijud',
    title: 'Chatbot UNIJUD',
    category: 'Desarrollo web + RAG',
    kind: 'web',
    description: 'Asistente documental con ingesta multiformato, recuperación vectorial, modelos locales y funciones de voz.',
    objective: 'Facilitar la consulta de colecciones documentales mediante conversaciones con contexto recuperado desde fuentes procesadas.',
    solution: 'El sistema combina una interfaz web con servicios de ingesta, indexación y orquestación conversacional para responder sobre documentos disponibles.',
    architecture: 'Arquitectura RAG desacoplada. El frontend Laravel/Vue consume una API FastAPI, que coordina flujos LangGraph, consulta documentos indexados en PostgreSQL con pgvector y utiliza Ollama para generar respuestas. Cada respuesta incorpora contexto recuperado y citas de las fuentes.',
    infrastructure: 'Arquitectura de servicios con Docker Compose: frontend Laravel/Inertia, API FastAPI, PostgreSQL con pgvector para búsqueda semántica y Ollama para modelos locales. Incorpora almacenamiento documental, procesamiento RAG y servicios opcionales de voz mediante Whisper y Kokoro TTS.',
    publicationNote: 'Se publica únicamente una descripción técnica de alto nivel. Las fuentes documentales, configuraciones internas y futuras capturas se revisarán antes de incorporarse.',
    technologies: ['Laravel', 'Vue 3', 'FastAPI', 'LangGraph', 'Ollama', 'PostgreSQL', 'pgvector', 'Faster-Whisper'],
    image: {
      src: '/images/projects/CHATBOT%20RAG/1.webp',
      alt: 'Vista principal del asistente documental Chatbot UNIJUD.'
    },
    gallery: [
      '/images/projects/CHATBOT%20RAG/Captura-desde-2026-07-28-21-14-20.webp',
      '/images/projects/CHATBOT%20RAG/Captura-desde-2026-07-28-21-15-12.webp'
    ]
  },
  {
    slug: 'crm-whatsapp',
    title: 'CRM comercial para WhatsApp',
    category: 'Desarrollo web + IA',
    kind: 'web',
    description: 'CRM comercial para atender las consultas de clientes de tu empresa por WhatsApp, respondiendo con información del negocio hasta que se requiere la intervención de una persona.',
    objective: 'Dar una atención comercial más ágil y consistente, conectando cada consulta con la información disponible del negocio.',
    solution: 'El cliente escribe por WhatsApp, el sistema organiza la conversación y el agente consulta la información comercial para entregar una respuesta clara. La atención continúa de forma asistida hasta que la consulta requiere la intervención de un operador humano.',
    architecture: 'Una capa de mensajería recibe las consultas y las conecta con el CRM, donde se concentra la información comercial. La solución incorpora IA en la nube para apoyar la comprensión de consultas y la preparación de respuestas con el contexto disponible.',
    infrastructure: 'Aplicación web con una consola operativa para administrar conversaciones, clientes, productos, inventario y cotizaciones, preparada para acompañar el flujo de atención por WhatsApp.',
    publicationNote: 'El caso se publica sin datos de clientes, teléfonos, conversaciones, cotizaciones, adjuntos, credenciales ni información interna. Las capturas se incorporarán tras su revisión y anonimización.',
    technologies: ['Laravel', 'React', 'FastAPI', 'WhatsApp Cloud API', 'IA en la nube', 'PostgreSQL', 'Redis', 'Docker'],
    image: {
      src: '/images/projects/CRM-WHATSAPP/1.webp',
      alt: 'Vista principal del CRM comercial para WhatsApp.'
    },
    gallery: [
      '/images/projects/CRM-WHATSAPP/1.webp',
      '/images/projects/CRM-WHATSAPP/2.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-03-03.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-03-19.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-03-31.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-03-39.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-04-10.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-04-29.webp',
      '/images/projects/CRM-WHATSAPP/Captura%20desde%202026-08-11%2022-04-36.webp'
    ]
  },
  {
    slug: 'legal-chile-gemma',
    title: 'Legal Chile Gemma Fine-tune',
    category: 'Modelo fine-tuneado',
    kind: 'model',
    description: 'Adaptación de Gemma al dominio legal chileno, junto con un agente para extraer y estructurar información jurídica disponible en la web.',
    objective: 'Explorar un modelo especializado para trabajar con legislación chilena, incluyendo leyes, códigos y material legislativo, sin depender de un único flujo manual de consulta.',
    solution: 'Un pipeline prepara datos legales para fine-tuning mediante adaptadores LoRA/QLoRA. En paralelo, un agente de extracción recopila y estructura información legal chilena publicada en la web para apoyar el trabajo con fuentes.',
    architecture: 'Arquitectura de pipeline local para IA jurídica. Recolecta normas desde BCN/Ley Chile, conserva fuentes originales, normaliza y valida documentos, genera fragmentos citables para RAG y construye datasets de entrenamiento. El modelo Gemma se ajusta mediante LoRA/QLoRA y se evalúa comparando el modelo base con el adaptador, siempre usando recuperación de contexto y citas verificables. Incluye una interfaz Streamlit para pruebas manuales.',
    infrastructure: 'Entorno local sobre Ubuntu 24.04 con Python 3.11+, PyTorch y CUDA 12.8. Utiliza una GPU NVIDIA RTX 3080 Ti con 16 GB de VRAM para entrenamiento e inferencia. Almacena datos, índices RAG y resultados en archivos JSONL y bases SQLite con FTS5. El modelo base y los adaptadores LoRA/QLoRA se mantienen localmente, sin requerir servicios cloud.',
    publicationNote: 'El proyecto no sustituye asesoría legal ni publica documentos privados. Las fuentes, licencias y condiciones de uso se revisan antes de integrarlas al conjunto de datos.',
    technologies: ['Python', 'Gemma', 'LoRA', 'QLoRA', 'Transformers', 'PEFT', 'TRL', 'BitsAndBytes']
  }
];
