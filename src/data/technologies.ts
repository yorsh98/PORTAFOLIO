type TechnologyCategory = 'frontend' | 'backend' | 'ai' | 'data' | 'infrastructure';
type Technology = { name: string; slug: string; category: TechnologyCategory };

export const categoryLabels: Record<TechnologyCategory, string> = {
  frontend: 'Frontend', backend: 'Backend y APIs', ai: 'IA y RAG', data: 'Datos', infrastructure: 'Infraestructura'
};

export const technologies: Technology[] = [
  ['HTML5','html5','frontend'],['CSS3','css3','frontend'],['JavaScript','javascript','frontend'],['TypeScript','typescript','frontend'],['React','react','frontend'],['Vue.js','vuedotjs','frontend'],['Livewire','livewire','frontend'],['Tailwind CSS','tailwindcss','frontend'],['Vite','vite','frontend'],['Astro','astro','frontend'],['Bootstrap','bootstrap','frontend'],['Laravel','laravel','backend'],['PHP','php','backend'],['Python','python','backend'],['FastAPI','fastapi','backend'],['PostgreSQL','postgresql','data'],['MariaDB','mariadb','data'],['Redis','redis','data'],['Ollama','ollama','ai'],['LangChain','langchain','ai'],['LangGraph','langgraph','ai'],['Hugging Face','huggingface','ai'],['pgvector','pgvector','ai'],['MCP','modelcontextprotocol','ai'],['Docker','docker','infrastructure'],['Ubuntu','ubuntu','infrastructure'],['NVIDIA','nvidia','infrastructure'],['CUDA','cuda','infrastructure']
  ].map(([name, slug, category]) => ({ name, slug, category: category as TechnologyCategory }));
