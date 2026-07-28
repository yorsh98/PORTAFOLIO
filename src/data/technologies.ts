export type TechnologyCategory = 'frontend' | 'backend' | 'ai' | 'data' | 'infrastructure' | 'documents' | 'audio' | 'quality';
export type Technology = { name: string; slug: string; category: TechnologyCategory; featured?: boolean };

export const categoryLabels: Record<TechnologyCategory, string> = {
  frontend: 'Frontend', backend: 'Backend y APIs', ai: 'IA y RAG', data: 'Datos', infrastructure: 'Infraestructura', documents: 'Documentos y OCR', audio: 'Audio y voz', quality: 'Calidad y herramientas'
};

export const technologies: Technology[] = [
  ['HTML5','html5','frontend'],['CSS3','css3','frontend'],['JavaScript','javascript','frontend'],['TypeScript','typescript','frontend'],['React','react','frontend'],['Vue.js','vuedotjs','frontend'],['Livewire','livewire','frontend'],['Tailwind CSS','tailwindcss','frontend'],['Vite','vite','frontend'],['Laravel','laravel','backend'],['PHP','php','backend'],['Python','python','backend'],['FastAPI','fastapi','backend'],['PostgreSQL','postgresql','data'],['MariaDB','mariadb','data'],['Redis','redis','data'],['Ollama','ollama','ai'],['LangChain','langchain','ai'],['LangGraph','langgraph','ai'],['Hugging Face','huggingface','ai'],['PyTorch','pytorch','ai'],['OpenCV','opencv','documents'],['Tesseract','tesseract','documents'],['FFmpeg','ffmpeg','audio'],['Docker','docker','infrastructure'],['Ubuntu','ubuntu','infrastructure'],['NVIDIA','nvidia','infrastructure'],['Git','git','quality'],['GitHub','github','quality'],['VS Code','visualstudiocode','quality'],['Pytest','pytest','quality'],['ESLint','eslint','quality']
  ].map(([name, slug, category], index) => ({ name, slug, category: category as TechnologyCategory, featured: index < 25 }));
