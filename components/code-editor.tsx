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
  location: "Brasil",
  status: "Disponível para oportunidades",

  greeting() {
    return \`Olá! Eu sou \${this.name},
           um \${this.role} apaixonado
           localizado em \${this.location}.\`;
  }
};

console.log(developer.greeting());

// Vamos explorar meu trabalho juntos!
const navigation = [
  "📋 Sobre.js        // Saiba mais sobre mim",
  "🚀 Projetos.js     // Confira meus projetos",
  "💼 Habilidades.js  // Minhas competências",
  "📞 Contato.js      // Entre em contato"
];

navigation.forEach(item => console.log(item));`,

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

  disponibilidade: {
    status: "🟢 Disponível para novas oportunidades",
    horario_trabalho: "Seg-Sex, 9h-18h BRT",
    tempo_resposta: "Geralmente em até 24 horas",

    interessado_em: [
      "Posições full-time",
      "Projetos freelance",
      "Consultoria técnica",
      "Colaboração em código aberto"
    ]
  },

  contato_preferido: "email", // ou "linkedin"

  // Função de contato rápido
  enviarMensagem: function(mensagem) {
    return \`
      📧 Email: \${this.email}
      💬 Mensagem: \${mensagem}

      Retornarei em breve!
      Obrigado por entrar em contato! 🚀
    \`;
  }
};

// Sinta-se à vontade para entrar em contato!
console.log("Vamos construir algo incrível juntos! ✨");

export default infoContato;`,

  _readme: `# 💼 Meu Portfólio

Bem-vindo ao meu portfólio desenvolvido com tema VSCode!

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Icons**: Lucide React

## 📁 Estrutura do Projeto

\`\`\`
portfolio/
├── 📄 Sobre.js        # Página de apresentação
├── 👤 Projetos.js     # Projetos em destaque
├── 🚀 Habilidades.js  # Competências técnicas
├── 📞 Contato.js      # Informações de contato
└── 📖 README.md       # Este arquivo
\`\`\`

## 🎨 Features

- ✅ Interface similar ao VSCode
- ✅ Syntax highlighting
- ✅ Tabs funcionais
- ✅ Explorer de arquivos
- ✅ Barra de status
- ✅ Tema escuro

## 📫 Contato

Entre em contato comigo através dos links na barra de status!

---

*Construído com ❤️ usando Next.js*`,

  _package: `{
  "name": "othavio-portfolio",
  "version": "1.0.0",
  "description": "Portfólio pessoal desenvolvido com tema VSCode",
  "author": "Othavio Quilião",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "@radix-ui/react-collapsible": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.294.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/othavio-quiliao/portfolio"
  },
  "keywords": [
    "portfolio",
    "nextjs",
    "react",
    "typescript",
    "vscode-theme",
    "developer"
  ],
  "license": "MIT"
}`,
};

export function CodeEditor({ fileName, fileType }: CodeEditorProps) {
  const content =
    fileContents[fileName.toLowerCase()] ||
    `// Arquivo não encontrado: ${fileName}`;
  const lines = content.split("\n");

  const highlightSyntax = (line: string) => {
    // Comentários
    if (line.trim().startsWith("//")) {
      return <span className="text-gray-400">{line}</span>;
    }

    // Comentários de bloco
    if (
      line.includes("/**") ||
      line.includes("*/") ||
      line.trim().startsWith("*")
    ) {
      return <span className="text-[#6A9955]">{line}</span>;
    }

    // Strings
    if (line.includes('"') || line.includes("'") || line.includes("`")) {
      return (
        <span>
          {line.split(/("[^"]*"|'[^']*'|`[^`]*`)/).map((part, idx) =>
            idx % 2 === 1 ? (
              <span key={idx} className="text-emerald-400 font-semibold">
                {part}
              </span>
            ) : (
              <span key={idx}>{highlightKeywordsAndVariables(part)}</span>
            )
          )}
        </span>
      );
    }

    return <span>{highlightKeywordsAndVariables(line)}</span>;
  };

  const highlightKeywordsAndVariables = (text: string) => {
    const keywords =
      /(const|let|var|function|return|export|default|import|from|if|else|for|while|class|extends|async|await)/g;

    // Primeiro, destacamos keywords
    let result = text.split(keywords).map((part, idx) => {
      if (keywords.test(part)) {
        return (
          <span key={`keyword-${idx}`} className="text-zinc-300 font-semibold">
            {part}
          </span>
        );
      }

      // Para partes que não são keywords, destacamos variáveis
      const variableRegex = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g;
      const variableParts = part.split(variableRegex);

      return variableParts.map((variablePart, varIdx) => {
        // Verifica se é um identificador válido e não é uma keyword
        if (
          variableRegex.test(variablePart) &&
          !/(const|let|var|function|return|export|default|import|from|if|else|for|while|class|extends|async|await|console|log|forEach|split|map|includes|trim|startsWith|test)/.test(
            variablePart
          )
        ) {
          return (
            <span key={`var-${idx}-${varIdx}`} className="text-violet-500 ">
              {variablePart}
            </span>
          );
        }
        return variablePart;
      });
    });

    return result;
  };

  return (
    <div className="flex flex-1 bg-background overflow-hidden border-r border-[#3e3e42] h-full">
      {/* Números das linhas */}
      <div className="w-10 bg-background border-r  border-[#3e3e42] py-2 px-3 overflow-y-auto flex-shrink-0">
        {lines.map((_, i) => (
          <div
            key={i + 1}
            className="text-[#858585] text-right text-sm leading-6 select-none"
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Conteúdo do código */}
      <div className="flex-1 px-4 py-2 overflow-y-auto">
        <pre className="text-[#cccccc] leading-6 font-mono text-sm">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="min-h-[24px]">
                {highlightSyntax(line) || " "}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
