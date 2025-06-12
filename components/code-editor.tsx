import { CodeBlock } from "./code-block";
import { SideContent } from "./side-content";
import React from "react";

interface CodeEditorProps {
  fileName: string;
  fileType: string;
}

const fileContents: Record<string, string> = {
  _sobre: `console.log("Bem-vindo ao meu portfólio! 👋");

// Olá! Eu sou um desenvolvedor apaixonado
const developer = {
  name: "Othavio Quilião",
  role: "Full Stack Developer",
  location: "Brasil - Curitiba",
  status: "Disponível para oportunidades",
};
`,

  _projetos: `// Meus Projetos em Destaque 🚀

const projetos = [
  {
    nome: "Plataforma E-commerce",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    descricao: "E-commerce full-stack com dashboard admin",
    status: "Produção",
    github: "github.com/usuario/ecommerce",
    live: "minhaloja.vercel.app",
    destaques: [
      "💳 Processamento de pagamentos integrado",
      "📊 Dashboard de analytics em tempo real",
      "🔐 Sistema de autenticação JWT",
      "📱 Design completamente responsivo"
    ]
  },

  {
    nome: "App de Gerenciamento de Tarefas",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    descricao: "Ferramenta colaborativa de gestão de projetos",
    status: "Desenvolvimento",
    github: "github.com/usuario/taskapp",
    destaques: [
      "⚡ Colaboração em tempo real",
      "🎯 Interface drag & drop",
      "📈 Acompanhamento de progresso",
      "👥 Gestão de equipes"
    ]
  },

  {
    nome: "Dashboard do Clima",
    tech: ["Vue.js", "Express", "OpenWeather API"],
    descricao: "App de clima bonito com previsões",
    status: "Concluído",
    github: "github.com/usuario/weather",
    live: "weather-dash.netlify.app",
    destaques: [
      "🌤️ Previsões de 7 dias",
      "📍 Clima baseado em localização",
      "📊 Gráficos interativos",
      "🎨 Ícones de clima animados"
    ]
  }
];

// Atualmente trabalhando em...
const projetoAtual = {
  nome: "Assistente de Código IA",
  descricao: "Extensão VS Code para ajuda com IA",
  progresso: "75%",
  lancamento_previsto: "Q2 2024"
};

console.log("Confira meu trabalho! 💻");`,

  // Conteúdo específico para cada projeto
  "_projetos/ecommerce": `// Projeto: Plataforma E-commerce

/**
 * Detalhes do Projeto
 * ==================
 *
 * Nome: Plataforma E-commerce
 * Status: Produção
 * GitHub: github.com/usuario/ecommerce
 * Live: minhaloja.vercel.app
 */

// Tecnologias utilizadas
const tech = {
  frontend: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
  backend: ["Node.js", "Express", "TypeScript"],
  database: ["PostgreSQL", "Prisma"],
  payment: ["Stripe"],
  deployment: ["Vercel", "Railway"]
};

// Funcionalidades principais
const features = [
  "Catálogo de produtos com filtragem avançada",
  "Carrinho de compras persistente",
  "Processamento de pagamentos com Stripe",
  "Dashboard admin para gerenciamento de produtos",
  "Sistema de autenticação com NextAuth.js",
  "Analytics em tempo real",
  "Design responsivo para todas as telas"
];

// Desafios e soluções
const challenges = {
  "Processamento de pagamentos": "Implementação de webhooks do Stripe para confirmar transações",
  "Performance": "Otimização com ISR (Incremental Static Regeneration)",
  "SEO": "Implementação de meta tags dinâmicas e sitemap",
  "UX": "Testes de usabilidade com usuários reais"
};

// Aprendizados
const learnings = [
  "Integração de gateway de pagamento",
  "Otimização de performance em Next.js",
  "Modelagem de dados para e-commerce",
  "Implementação de dashboards admin"
];

console.log("Projeto completo com foco em experiência do usuário e escalabilidade");`,

  "_projetos/taskapp": `// Projeto: App de Gerenciamento de Tarefas

/**
 * Detalhes do Projeto
 * ==================
 *
 * Nome: TaskFlow - Gerenciamento de Tarefas
 * Status: Desenvolvimento (80% concluído)
 * GitHub: github.com/usuario/taskapp
 */

// Tecnologias utilizadas
const tech = {
  frontend: ["React", "TypeScript", "Chakra UI", "React DnD"],
  backend: ["Node.js", "Express", "Socket.io"],
  database: ["MongoDB", "Mongoose"],
  deployment: ["Netlify", "Render"]
};

// Funcionalidades principais
const features = [
  "Quadros Kanban com arrastar e soltar",
  "Colaboração em tempo real com Socket.io",
  "Sistema de comentários em tarefas",
  "Notificações em tempo real",
  "Atribuição de tarefas a membros",
  "Filtros e busca avançada",
  "Modo offline com sincronização"
];

// Desafios e soluções
const challenges = {
  "Sincronização em tempo real": "Implementação de Socket.io com salas por projeto",
  "Conflitos de edição": "Sistema de bloqueio temporário durante edição",
  "Performance": "Virtualização de listas para grandes volumes de tarefas",
  "Offline mode": "IndexedDB para armazenamento local com sincronização"
};

// Próximos passos
const nextSteps = [
  "Implementar integração com calendário",
  "Adicionar relatórios e analytics",
  "Desenvolver aplicativo móvel com React Native",
  "Implementar sistema de templates de projetos"
];

console.log("Projeto focado em produtividade e colaboração em equipe");`,

  "_projetos/weather": `// Projeto: Dashboard do Clima

/**
 * Detalhes do Projeto
 * ==================
 *
 * Nome: WeatherVue - Dashboard do Clima
 * Status: Concluído
 * GitHub: github.com/usuario/weather
 * Live: weather-dash.netlify.app
 */

// Tecnologias utilizadas
const tech = {
  frontend: ["Vue.js", "Vuex", "TailwindCSS", "Chart.js"],
  backend: ["Express", "Node.js"],
  apis: ["OpenWeather API", "Mapbox API"],
  deployment: ["Netlify", "Heroku"]
};

// Funcionalidades principais
const features = [
  "Previsão do tempo para 7 dias",
  "Gráficos interativos de temperatura e precipitação",
  "Geolocalização automática",
  "Busca por cidade com autocompletar",
  "Alertas de clima extremo",
  "Mapa interativo com camadas de clima",
  "Modo escuro/claro automático baseado no horário"
];

// Desafios e soluções
const challenges = {
  "Limitações de API": "Implementação de cache para reduzir chamadas",
  "Visualização de dados": "Gráficos personalizados com Chart.js",
  "UX em dispositivos móveis": "Design responsivo com abordagem mobile-first",
  "Performance": "Lazy loading e code splitting"
};

// Métricas e resultados
const metrics = {
  usuarios: "5,000+ mensais",
  satisfacao: "4.8/5 estrelas",
  performance: "98/100 no Lighthouse",
  retencao: "65% retornam semanalmente"
};

console.log("Projeto com foco em UX e visualização de dados meteorológicos");`,

  _habilidades: `// Minhas Habilidades e Competências 💪

const habilidades = {
  frontend: {
    linguagens: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    frameworks: ["React", "Next.js", "Vue.js", "Angular"],
    styling: ["Tailwind CSS", "Styled Components", "SCSS", "CSS Modules"],
    ferramentas: ["Webpack", "Vite", "ESLint", "Prettier"]
  },

  backend: {
    linguagens: ["Node.js", "Python", "Java", "PHP"],
    frameworks: ["Express.js", "Fastify", "Django", "Spring Boot"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    orms: ["Prisma", "TypeORM", "Mongoose", "Sequelize"]
  },

  devops: {
    cloud: ["AWS", "Google Cloud", "Vercel", "Netlify"],
    containers: ["Docker", "Docker Compose", "Kubernetes"],
    ci_cd: ["GitHub Actions", "GitLab CI", "Jenkins"],
    monitoring: ["Sentry", "LogRocket", "New Relic"]
  },

  ferramentas: {
    versionamento: ["Git", "GitHub", "GitLab", "Bitbucket"],
    design: ["Figma", "Adobe XD", "Photoshop"],
    apis: ["REST", "GraphQL", "WebSockets", "tRPC"],
    testes: ["Jest", "Cypress", "Testing Library", "Vitest"]
  },

  softSkills: [
    "Trabalho em equipe",
    "Comunicação efetiva",
    "Resolução de problemas",
    "Pensamento crítico",
    "Adaptabilidade",
    "Liderança técnica",
    "Mentoria",
    "Gestão de tempo"
  ],

  certificacoes: [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "MongoDB University Certificate"
  ]
};

// Nível de experiência
const nivelExperiencia = {
  javascript: "Avançado",
  react: "Avançado",
  nodejs: "Avançado",
  typescript: "Intermediário",
  python: "Intermediário",
  aws: "Intermediário",
  docker: "Intermediário"
};

console.log("Sempre aprendendo e evoluindo! 🚀");`,

  _contato: `// Vamos nos Conectar! 📬

const infoContato = {
  email: "othavio.quiliao@exemplo.com",
  telefone: "+55 11 99999-9999",
  localizacao: "São Paulo, SP - Brasil",
  fuso_horario: "GMT-3 (BRT)",

  social: {
    github: "github.com/othavio-quiliao",
    linkedin: "linkedin.com/in/othavio-quiliao",
    twitter: "@othavio_dev",
    portfolio: "othavio.dev"
  },

  contato_preferido: "email", // ou "linkedin"
};

// Sinta-se à vontade para entrar em contato!
console.log("Vamos construir algo incrível juntos! ✨");

export default infoContato;`,
};

// Mapeamento de tecnologias por arquivo
const fileTechnologies: Record<
  string,
  Array<{ name: string; icon: string; color: string }>
> = {
  _sobre: [
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Next.js", icon: "nextjs", color: "#000000" },
  ],
  _projetos: [
    { name: "Next.js", icon: "nextjs", color: "#000000" },
    { name: "TypeScript", icon: "ts", color: "#3178C6" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "PostgreSQL", icon: "postgres", color: "#336791" },
    { name: "Vue.js", icon: "vue", color: "#4FC08D" },
    { name: "Express", icon: "express", color: "#000000" },
  ],
  "_projetos/ecommerce": [
    { name: "Next.js", icon: "nextjs", color: "#000000" },
    { name: "TypeScript", icon: "ts", color: "#3178C6" },
    { name: "TailwindCSS", icon: "tailwind", color: "#06B6D4" },
    { name: "PostgreSQL", icon: "postgres", color: "#336791" },
    { name: "Prisma", icon: "prisma", color: "#2D3748" },
    { name: "Stripe", icon: "stripe", color: "#008CDD" },
    { name: "Vercel", icon: "vercel", color: "#000000" },
  ],
  "_projetos/taskapp": [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "TypeScript", icon: "ts", color: "#3178C6" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "Socket.io", icon: "socketio", color: "#010101" },
    { name: "Express", icon: "express", color: "#000000" },
  ],
  "_projetos/weather": [
    { name: "Vue.js", icon: "vue", color: "#4FC08D" },
    { name: "Express", icon: "express", color: "#000000" },
    { name: "TailwindCSS", icon: "tailwind", color: "#06B6D4" },
    { name: "Chart.js", icon: "js", color: "#F7DF1E" },
    { name: "Netlify", icon: "netlify", color: "#00C7B7" },
  ],
  _habilidades: [
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "TypeScript", icon: "ts", color: "#3178C6" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "AWS", icon: "aws", color: "#FF9900" },
    { name: "Google Cloud", icon: "gcp", color: "#4285F4" },
    { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  ],
  _contato: [
    { name: "HTML", icon: "html", color: "#E34F26" },
    { name: "CSS", icon: "css", color: "#1572B6" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
  ],
};

// Mapear extensões de arquivo para linguagens do SyntaxHighlighter
const getLanguageFromFileType = (
  fileType: string,
  fileName: string
): string => {
  if (fileName.toLowerCase().includes("readme")) return "markdown";
  if (fileName.toLowerCase().includes("package")) return "json";

  switch (fileType.toLowerCase()) {
    case "javascript":
    case "js":
      return "javascript";
    case "typescript":
    case "ts":
      return "typescript";
    case "json":
      return "json";
    case "markdown":
    case "md":
      return "markdown";
    case "html":
      return "html";
    case "css":
      return "css";
    case "python":
    case "py":
      return "python";
    default:
      return "javascript"; // fallback
  }
};

export function CodeEditor({ fileName, fileType }: CodeEditorProps) {
  const content =
    fileContents[fileName.toLowerCase()] ||
    `// Arquivo não encontrado: ${fileName}`;
  const language = getLanguageFromFileType(fileType, fileName);
  const technologies = fileTechnologies[fileName.toLowerCase()] || [];

  return (
    <div className="flex flex-1 w-full h-full gap-10">
      <div className="flex flex-1 w-1/2 bg-background overflow-hidden border-r border-gradient-to-r from-transparent to-background h-full">
        <CodeBlock language={language}>{content}</CodeBlock>
      </div>
      <div className="flex flex-1 w-1/2 bg-background overflow-hidden border-x border-gradient-to-r from-transparent to-background h-full">
        <SideContent
          technologies={technologies}
          title="Tecnologias utilizadas"
        />
      </div>
    </div>
  );
}
