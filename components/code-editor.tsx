import { CodeBlock } from "./code-block";

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

  return (
    <div className="flex flex-1 w-full h-full gap-10">
      <div className="flex flex-1 w-1/2 bg-background overflow-hidden border-r border-gradient-to-r from-transparent to-background h-full">
        <CodeBlock language={language}>{content}</CodeBlock>
      </div>
      <div className="flex flex-1 w-1/2 bg-background overflow-hidden border-x border-gradient-to-r from-transparent to-background h-full">
        Algum outro conteúdo
      </div>
    </div>
  );
}
