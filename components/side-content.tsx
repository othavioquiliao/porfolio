import React from "react";

interface TechIconProps {
  name: string;
  icon: string; // ID do ícone no skillicons.dev
  color?: string;
}

interface SideContentProps {
  technologies?: TechIconProps[];
  title?: string;
}

const defaultTechs: TechIconProps[] = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "next", color: "#000000" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
];

export function SideContent({
  technologies = defaultTechs,
  title = "Tecnologias",
}: SideContentProps) {
  return (
    <div className="flex flex-col h-full w-full p-4 overflow-y-auto">
      <h3 className="text-lg font-medium mb-4">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-[#2a2d2e] transition-colors"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md overflow-hidden">
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Créditos para o serviço */}
      <div className="mt-auto pt-4 text-xs text-gray-400 text-center">
        Ícones fornecidos por{" "}
        <a
          href="https://skillicons.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          skillicons.dev
        </a>
      </div>
    </div>
  );
}
