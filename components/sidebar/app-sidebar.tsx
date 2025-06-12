"use client";

import {
  FileText,
  FolderOpen,
  FileCode,
  User,
  Briefcase,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

interface FileItem {
  name: string;
  type: "file" | "folder";
  icon?: React.ReactNode;
  extension?: string;
  label?: string;
  children?: FileItem[];
}

// Estrutura simplificada do sidebar
const fileStructure: FileItem[] = [
  {
    name: "Sobre",
    type: "file",
    extension: "js",
    label: "_sobre",
    icon: <User className="w-4 h-4" />,
  },
  {
    name: "Projetos",
    type: "folder",
    icon: <FolderOpen className="w-4 h-4 text-[#dcb67a]" />,
    children: [
      {
        name: "Plataforma E-commerce",
        type: "file",
        extension: "js",
        label: "_projetos/ecommerce",
        icon: <FileCode className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "App de Tarefas",
        type: "file",
        extension: "js",
        label: "_projetos/taskapp",
        icon: <FileCode className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Dashboard do Clima",
        type: "file",
        extension: "js",
        label: "_projetos/weather",
        icon: <FileCode className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Lista de Projetos",
        type: "file",
        extension: "js",
        label: "_projetos",
        icon: <FileText className="w-4 h-4 text-yellow-500" />,
      },
    ],
  },
  {
    name: "Habilidades",
    type: "file",
    extension: "js",
    label: "_habilidades",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    name: "Contato",
    type: "file",
    extension: "js",
    label: "_contato",
    icon: <Mail className="w-4 h-4" />,
  },
];

export function AppSidebar() {
  const handleFileClick = (
    fileName: string,
    fileType: string,
    label?: string
  ) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("openFile", {
          detail: { fileName, fileType, label },
        })
      );
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="border-l border-[#3e3e42] bg-background"
    >
      <SidebarHeader className="border-b bg-background border-[#3e3e42] text-md border-t font-semibold h-15 flex justify-center items-center">
        _othavio_quiliao
      </SidebarHeader>

      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="pl-2 pt-2">
              {fileStructure.map((item, index) => (
                <SidebarMenuItem key={`${item.name}-${index}`}>
                  {item.type === "file" ? (
                    <SidebarMenuButton
                      onClick={() =>
                        handleFileClick(
                          item.name,
                          item.extension || "js",
                          item.label
                        )
                      }
                      className="h-7 hover:bg-[#2a2d2e] text-[#cccccc]"
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </SidebarMenuButton>
                  ) : (
                    <FolderItem item={item} handleFileClick={handleFileClick} />
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function FolderItem({
  item,
  handleFileClick,
}: {
  item: FileItem;
  handleFileClick: (fileName: string, fileType: string, label?: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton className="h-7 hover:bg-[#2a2d2e] text-[#cccccc] w-full">
          {isOpen ? (
            <ChevronDown className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1" />
          )}
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </SidebarMenuButton>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="pl-4">
          {item.children?.map((child, idx) => (
            <SidebarMenuItem key={`${child.name}-${idx}`}>
              <SidebarMenuButton
                onClick={() =>
                  handleFileClick(
                    child.name,
                    child.extension || "js",
                    child.label
                  )
                }
                className="h-7 hover:bg-[#2a2d2e] text-[#cccccc]"
              >
                {child.icon}
                <span className="text-sm">{child.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
