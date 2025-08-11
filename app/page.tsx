"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code,
  Database,
  Globe,
} from "lucide-react";

type ParticleStyle = {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
};

function ParticleField({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const generated: ParticleStyle[] = Array.from({ length: count }).map(
      () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      })
    );
    setParticles(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((style, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
          style={style}
        />
      ))}
    </div>
  );
}

// Componente de texto com efeito de descriptografia
function DecryptionText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypting(false);
        }

        iteration += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span
      className={`font-mono ${isDecrypting ? "text-green-400" : "text-white"}`}
    >
      {displayText}
    </span>
  );
}

// Componente de linha de terminal
function TerminalLine({
  children,
  prompt = "$",
}: {
  children: React.ReactNode;
  prompt?: string;
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-green-400">{prompt}</span>
      <span className="text-cyan-400">~</span>
      <span className="text-white">{children}</span>
    </div>
  );
}

export default function Home() {
  const [currentCommand, setCurrentCommand] = useState(0);

  const commands = [
    "whoami",
    "ls -la skills/",
    "cat projects.json",
    "git status",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Production",
    },
    {
      name: "Task Management App",
      description: "Real-time collaborative task management with WebSocket",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      status: "Development",
    },
    {
      name: "AI Chat Bot",
      description: "Intelligent chatbot using OpenAI API and vector database",
      tech: ["Python", "FastAPI", "Pinecone"],
      status: "Beta",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Terminal header */}
      <div className="relative z-10 border-b border-green-900/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
              <Terminal className="w-4 h-4" />
              <span>portfolio@developer:~</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="space-y-4 mb-8">
            <TerminalLine>
              <DecryptionText text={commands[currentCommand]} />
            </TerminalLine>

            <div className="pl-6 space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold">
                <DecryptionText text="Othavio Quilião " delay={500} />
              </h1>
              <p className="text-xl text-gray-300 font-mono">
                <DecryptionText text="Full Stack Developer " delay={1000} />
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          <div className="font-mono text-sm text-gray-400 space-y-1">
            <TerminalLine prompt=">">{`console.log("Welcome to my digital space!")`}</TerminalLine>
            <TerminalLine prompt=">">{`// Building the future, one line of code at a time`}</TerminalLine>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="mb-6">
            <TerminalLine>ls -la skills/</TerminalLine>
          </div>

          <Card className="bg-gray-900/50 border-green-900/30 backdrop-blur-sm">
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 font-mono text-sm"
                  >
                    <Code className="w-4 h-4 text-green-400" />
                    <DecryptionText text={skill} delay={index * 100} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="mb-6">
            <TerminalLine>cat projects.json</TerminalLine>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="bg-gray-900/50 border-green-900/30 backdrop-blur-sm hover:border-green-500/50 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-mono text-lg text-green-400">
                      <DecryptionText text={project.name} delay={index * 200} />
                    </h3>
                    <Badge
                      variant="outline"
                      className={`
                        ${
                          project.status === "Production"
                            ? "border-green-500 text-green-400"
                            : ""
                        }
                        ${
                          project.status === "Development"
                            ? "border-yellow-500 text-yellow-400"
                            : ""
                        }
                        ${
                          project.status === "Beta"
                            ? "border-blue-500 text-blue-400"
                            : ""
                        }
                      `}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-800 text-cyan-400 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Status Section */}
        <section>
          <div className="mb-6">
            <TerminalLine>git status</TerminalLine>
          </div>

          <Card className="bg-gray-900/50 border-green-900/30 backdrop-blur-sm">
            <div className="p-6">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400">
                    Currently available for new opportunities
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400">
                    Learning: Rust & WebAssembly
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400">
                    Location: São Paulo, Brazil
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      {/* Floating particles effect */}
      <ParticleField count={20} />
    </div>
  );
}
