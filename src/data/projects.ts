type Shot = { src: string; caption: string };

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
  gallery?: (string | Shot)[];
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
    publicationNote: 'Las capturas se tomaron sobre un entorno sin registros reales. Se excluyeron las vistas con nombres de funcionarios, planos del edificio, números de causa, correos institucionales y registros de actividad.',
    technologies: ['Laravel', 'Livewire', 'Volt', 'Tailwind CSS', 'Bootstrap', 'DataTables', 'Pest'],
    image: {
      src: '/images/projects/4toTOP/1.webp',
      alt: 'Vista principal de la plataforma 4toTOP.'
    },
    gallery: [
      { src: '/images/projects/4toTOP/01-inicio.webp', caption: 'Portada pública con accesos a los módulos' },
      { src: '/images/projects/4toTOP/04-programacion-diaria.webp', caption: 'Programación diaria de audiencias por turno' },
      { src: '/images/projects/4toTOP/05-procedimientos.webp', caption: 'Biblioteca de procedimientos internos' },
      { src: '/images/projects/4toTOP/08-buscador-sentencias.webp', caption: 'Índice y buscador de sentencias' },
      { src: '/images/projects/4toTOP/09-ausencias.webp', caption: 'Calendario de ausentismo por tipo de permiso' },
      { src: '/images/projects/4toTOP/12-bitacora-pruebas.webp', caption: 'Bitácora pública de pruebas por juicio' },
      { src: '/images/projects/4toTOP/13-convertir-archivos.webp', caption: 'Conversión de PDF a Word y M4A a MP3' },
      { src: '/images/projects/4toTOP/15-iniciar-sesion.webp', caption: 'Inicio de sesión' },
      { src: '/images/projects/4toTOP/18-backoffice-inicio.webp', caption: 'Backoffice: panel de módulos según permisos' },
      { src: '/images/projects/4toTOP/19-backoffice-funcionarios.webp', caption: 'Catálogo global de funcionarios' },
      { src: '/images/projects/4toTOP/21-backoffice-turnos.webp', caption: 'Configuración y envío de la tabla semanal de turnos' },
      { src: '/images/projects/4toTOP/24-backoffice-testigos-peritos.webp', caption: 'Unidad de testigos y peritos con importación desde Excel' },
      { src: '/images/projects/4toTOP/27-backoffice-documentos.webp', caption: 'Biblioteca documental por colecciones' },
      { src: '/images/projects/4toTOP/34-backoffice-insumos-solicitudes.webp', caption: 'Solicitudes de insumos' },
      { src: '/images/projects/4toTOP/39-backoffice-insumos-reportes.webp', caption: 'Reportes de asignación de insumos' },
      { src: '/images/projects/4toTOP/40-backoffice-seguridad-roles.webp', caption: 'Roles de acceso' },
      { src: '/images/projects/4toTOP/44-backoffice-seguridad-permisos.webp', caption: 'Permisos por módulo: ver o gestionar' }
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
  },
  {
    slug: 'proviemplea',
    title: 'ProviEmplea 2026',
    category: 'Proyecto académico · Full stack',
    kind: 'web',
    description: 'Plataforma de intermediación laboral municipal con búsqueda inversa: empresas validadas buscan talentos mediante CV protegidos y solicitan el contacto a través del Departamento de Empleo.',
    objective: 'Ordenar y digitalizar la intermediación laboral municipal (inscripción, perfilamiento, derivación y seguimiento) sin exponer datos personales de quienes buscan empleo.',
    solution: 'Tres portales sobre una misma API: personas completan su perfil y cargan su CV con consentimiento; empresas validadas revisan una vitrina de CV ciegos y piden contacto; el equipo municipal valida perfiles, gestiona solicitudes, deja notas internas y exporta reportes.',
    architecture: 'Monorepo con backend y frontend separados. Una API REST Laravel versionada bajo /api/v1, autenticada con Bearer Token (Sanctum) y documentada con Swagger/OpenAPI, concentra reglas de privacidad, policies, auditoría y rate limiting. El frontend Laravel + React con Inertia y TypeScript consume la API mediante servicios tipados. El análisis de CV funciona con expresiones regulares por defecto, con Ollama local u OpenAI como opción configurable.',
    infrastructure: 'Backend en Docker Compose con PHP-FPM, Nginx, MySQL, cola en base de datos, scheduler, Mailpit y LibreOffice para procesar documentos. El frontend se ejecuta con Vite. Incluye un widget de accesibilidad propio con opciones de texto, contraste y navegación.',
    publicationNote: 'Proyecto académico desarrollado para una evaluación de IPSS; no es un sistema oficial de la Municipalidad de Providencia. Todas las capturas usan cuentas y datos de demostración.',
    technologies: ['Laravel', 'Sanctum', 'React', 'TypeScript', 'Inertia', 'Tailwind CSS', 'MySQL', 'Swagger/OpenAPI', 'Docker', 'Ollama'],
    image: {
      src: '/images/projects/proviemplea/01-01-inicio-portada.webp',
      alt: 'Portada pública de ProviEmplea 2026.'
    },
    gallery: [
      { src: '/images/projects/proviemplea/01-01-inicio-portada.webp', caption: 'Portada pública' },
      { src: '/images/projects/proviemplea/01-02-accesos-persona-empresa-admin.webp', caption: 'Accesos para personas, empresas y gestión municipal' },
      { src: '/images/projects/proviemplea/01-04-flujo-de-uso.webp', caption: 'Flujo: del perfil laboral a la solicitud intermediada' },
      { src: '/images/projects/proviemplea/01-08-registro-persona.webp', caption: 'Registro de persona o empresa' },
      { src: '/images/projects/proviemplea/01-13-panel-accesibilidad.webp', caption: 'Widget de accesibilidad' },
      { src: '/images/projects/proviemplea/02-01-panel-persona.webp', caption: 'Panel persona: perfil laboral y carga de CV' },
      { src: '/images/projects/proviemplea/02-02-perfil-laboral-carga-cv-protegido.webp', caption: 'Consentimiento y estado del CV protegido' },
      { src: '/images/projects/proviemplea/03-01-panel-empresa-vitrina-talentos.webp', caption: 'Panel empresa: vitrina de talentos' },
      { src: '/images/projects/proviemplea/03-03-cv-protegido-educacion-experiencia.webp', caption: 'CV ciego: educación y experiencia sin datos de contacto' },
      { src: '/images/projects/proviemplea/03-04-contacto-intermediado.webp', caption: 'Solicitud de contacto intermediado' },
      { src: '/images/projects/proviemplea/04-01-panel-admin-metricas.webp', caption: 'Panel de administración con indicadores' },
      { src: '/images/projects/proviemplea/04-02-gestion-talentos-empresas-solicitudes.webp', caption: 'Gestión de talentos, empresas y solicitudes' },
      { src: '/images/projects/proviemplea/04-03-notas-reportes-configuracion-ia.webp', caption: 'Notas internas, reportes y configuración de IA' }
    ]
  },
  {
    slug: 'ventasfix',
    title: 'VentasFix',
    category: 'Proyecto académico · Full stack',
    kind: 'web',
    description: 'Plataforma full stack con un backoffice administrativo protegido por roles y una tienda pública independiente, ambas sobre una API REST compartida.',
    objective: 'Construir una solución de extremo a extremo y reproducible: autenticación, autorización por roles, CRUD de usuarios, productos y clientes, y un catálogo público con carrito y checkout.',
    solution: 'El backoffice permite administrar usuarios, productos con imagen y clientes empresa, con un dashboard alimentado desde la base de datos. La tienda ofrece catálogo con búsqueda, filtros, orden y paginación, carrito persistente y un checkout demostrativo para personas o empresas, sin pago real.',
    architecture: 'Monorepo con dos SPA React independientes y un backend FastAPI común. El backend sigue el flujo Router → Controller → Service → Repository → SQLAlchemy, con RBAC como dependencia, validación con Pydantic y un contrato de errores uniforme. En el frontend, TanStack Query administra el estado remoto y Zustand la sesión, el carrito y las preferencias.',
    infrastructure: 'Docker Compose con la API FastAPI, PostgreSQL con migraciones Alembic, Redis para sesiones y almacenamiento local de imágenes. Seguridad con Argon2, access tokens JWT en memoria, refresh tokens en cookies HttpOnly con rotación y revocación, y rate limiting en el login. Calidad verificada con Pytest, Ruff, mypy, Vitest y ESLint.',
    publicationNote: 'Proyecto académico individual para Desarrollo de Software Web I (IPSS). Todas las capturas usan datos de demostración y el checkout no procesa pagos.',
    technologies: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Docker'],
    image: {
      src: '/images/projects/ventasfix/tienda-02-inicio.webp',
      alt: 'Portada de la tienda pública de VentasFix.'
    },
    gallery: [
      { src: '/images/projects/ventasfix/tienda-02-inicio.webp', caption: 'Tienda: productos destacados' },
      { src: '/images/projects/ventasfix/tienda-03-catalogo.webp', caption: 'Catálogo con búsqueda, filtros y orden' },
      { src: '/images/projects/ventasfix/tienda-04-detalle-producto.webp', caption: 'Detalle de producto' },
      { src: '/images/projects/ventasfix/tienda-05-carrito.webp', caption: 'Carrito persistente' },
      { src: '/images/projects/ventasfix/tienda-10-checkout-empresa.webp', caption: 'Checkout demostrativo para empresas' },
      { src: '/images/projects/ventasfix/tienda-07-login.webp', caption: 'Inicio de sesión opcional' },
      { src: '/images/projects/ventasfix/tienda-08-accesibilidad.webp', caption: 'Preferencias de accesibilidad' },
      { src: '/images/projects/ventasfix/backoffice-01-login.webp', caption: 'Backoffice: acceso de trabajadores' },
      { src: '/images/projects/ventasfix/backoffice-02-dashboard.webp', caption: 'Dashboard con datos de la base' },
      { src: '/images/projects/ventasfix/backoffice-03-usuarios.webp', caption: 'Usuarios y roles' },
      { src: '/images/projects/ventasfix/backoffice-05-productos.webp', caption: 'Productos: precios y existencias' },
      { src: '/images/projects/ventasfix/backoffice-11-detalle-producto.webp', caption: 'Ficha de producto' },
      { src: '/images/projects/ventasfix/backoffice-08-nuevo-cliente.webp', caption: 'Alta de cliente empresa' },
      { src: '/images/projects/ventasfix/backoffice-error-403.webp', caption: 'Vista de error 403 por permisos' }
    ]
  }
];
