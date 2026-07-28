export type Project = {
  slug: string;
  title: string;
  category: string;
  kind: 'web' | 'model';
  description: string;
  objective: string;
  solution: string;
  architecture: string;
  publicationNote: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: 'plataforma-ia-unificada',
    title: 'Plataforma IA Unificada',
    category: 'Desarrollo web + IA',
    kind: 'web',
    description: 'Plataforma web que reúne flujos de análisis documental, anonimización, transcripción y asistentes conversacionales basados en recuperación de información.',
    objective: 'Centralizar capacidades de inteligencia artificial en una experiencia web coherente para trabajar con documentos, audio y consultas asistidas.',
    solution: 'Una interfaz Laravel integra servicios especializados para procesamiento documental y flujos conversacionales, manteniendo separados los componentes de ejecución y persistencia.',
    architecture: 'Laravel y React coordinan la interfaz y los flujos de aplicación. FastAPI, Celery y Redis atienden tareas asíncronas; PostgreSQL y pgvector soportan los datos y la recuperación vectorial. Los modelos locales se ejecutan con Ollama en contenedores.',
    publicationNote: 'El caso presenta la arquitectura y las capacidades a nivel general. No incluye documentos, flujos internos, credenciales ni capturas con información sensible.',
    technologies: ['Laravel', 'React', 'TypeScript', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'pgvector', 'LangGraph', 'Ollama', 'Docker']
  },
  {
    slug: '4totop',
    title: '4toTOP',
    category: 'Desarrollo web',
    kind: 'web',
    description: 'Plataforma web para administrar información, archivos, permisos, comunicaciones y flujos operativos en un mismo entorno.',
    objective: 'Organizar procesos operativos y acceso a información mediante una aplicación web estructurada alrededor de permisos y flujos de trabajo.',
    solution: 'La aplicación utiliza Laravel para el dominio y la persistencia, con componentes Livewire y Volt para una experiencia de administración dinámica.',
    architecture: 'Laravel concentra reglas de negocio, autorización y acceso a datos. Livewire, Volt y Tailwind CSS componen las vistas, mientras que DataTables apoya la exploración de información. Las pruebas automatizadas cubren comportamientos de la aplicación.',
    publicationNote: 'La documentación pública se limita a las capacidades generales del producto. Las imágenes se incorporarán una vez revisadas y anonimizadas.',
    technologies: ['Laravel', 'Livewire', 'Volt', 'Tailwind CSS', 'Bootstrap', 'DataTables', 'Pest']
  },
  {
    slug: 'chatbot-unijud',
    title: 'Chatbot UNIJUD',
    category: 'Desarrollo web + RAG',
    kind: 'web',
    description: 'Asistente documental con ingesta multiformato, recuperación vectorial, modelos locales y funciones de voz.',
    objective: 'Facilitar la consulta de colecciones documentales mediante conversaciones con contexto recuperado desde fuentes procesadas.',
    solution: 'El sistema combina una interfaz web con servicios de ingesta, indexación y orquestación conversacional para responder sobre documentos disponibles.',
    architecture: 'Laravel y Vue entregan la experiencia web. FastAPI y LangGraph coordinan los flujos de consulta; PostgreSQL con pgvector almacena contenido y vectores. Ollama ejecuta modelos locales y Faster-Whisper aporta procesamiento de voz.',
    publicationNote: 'Se publica únicamente una descripción técnica de alto nivel. Las fuentes documentales, configuraciones internas y futuras capturas se revisarán antes de incorporarse.',
    technologies: ['Laravel', 'Vue 3', 'FastAPI', 'LangGraph', 'Ollama', 'PostgreSQL', 'pgvector', 'Faster-Whisper']
  },
  {
    slug: 'legal-chile-gemma',
    title: 'Legal Chile Gemma Fine-tune',
    category: 'Modelo fine-tuneado',
    kind: 'model',
    description: 'Adaptación de Gemma al dominio legal chileno, junto con un agente para extraer y estructurar información jurídica disponible en la web.',
    objective: 'Explorar un modelo especializado para trabajar con legislación chilena, incluyendo leyes, códigos y material legislativo, sin depender de un único flujo manual de consulta.',
    solution: 'Un pipeline prepara datos legales para fine-tuning mediante adaptadores LoRA/QLoRA. En paralelo, un agente de extracción recopila y estructura información legal chilena publicada en la web para apoyar el trabajo con fuentes.',
    architecture: 'Python organiza la preparación de datos, entrenamiento y evaluación técnica. Gemma se adapta con Transformers, PEFT, TRL y BitsAndBytes. El agente de extracción procesa fuentes públicas y conserva su procedencia para permitir revisión posterior.',
    publicationNote: 'El proyecto no sustituye asesoría legal ni publica documentos privados. Las fuentes, licencias y condiciones de uso se revisan antes de integrarlas al conjunto de datos.',
    technologies: ['Python', 'Gemma', 'LoRA', 'QLoRA', 'Transformers', 'PEFT', 'TRL', 'BitsAndBytes']
  }
];
