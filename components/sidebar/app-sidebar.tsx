"use client";

import {
  FileText,
  FolderOpen,
  Package,
  FileCode,
  BookOpen,
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

interface FileItem {
  name: string;
  type: "file" | "folder";
  extension?: string;
  children?: FileItem[];
  label?: string;
}

const fileStructure: FileItem[] = [
  {
    name: "Bem-vindo",
    type: "folder",
    children: [
      { name: "Sobre", type: "file", extension: "js", label: "_sobre" },
      { name: "Contato", type: "file", extension: "js", label: "_contato" },
    ],
  },
  {
    name: "Projetos",
    type: "folder",
    children: [
      {
        name: "Projeto 1",
        type: "file",
        extension: "js",
        label: "_projeto1",
      },
      {
        name: "Projeto 2",
        type: "file",
        extension: "ts",
        label: "_projeto2",
      },
      {
        name: "Projeto 3",
        type: "file",
        extension: "ts",
        label: "_projeto3",
      },
    ],
  },
];

const getFileIcon = (extension?: string) => {
  switch (extension) {
    case "js":
      return <FileCode className="w-4 h-4 text-yellow-500" />;
    case "ts":
      return <FileCode className="w-4 h-4 text-blue-500" />;
    case "json":
      return <Package className="w-4 h-4 text-orange-500" />;
    case "md":
      return <BookOpen className="w-4 h-4 text-blue-400" />;
    default:
      return <FileText className="w-4 h-4 text-gray-400" />;
  }
};

function FileTreeItem({
  item,
  depth = 0,
  onFileClick,
}: {
  item: FileItem;
  depth?: number;
  onFileClick: (fileName: string, fileType: string, label?: string) => void;
}) {
  const handleFileClick = () => {
    if (item.type === "file") {
      onFileClick(item.name, item.extension || "txt", item.label);
    }
  };

  if (item.type === "file") {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={handleFileClick}
          className="h-7 hover:bg-[#2a2d2e] text-[#cccccc]"
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          {getFileIcon(item.extension)}
          <span className="text-sm">{item.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible defaultOpen={depth === 0}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="h-7 hover:bg-[#2a2d2e] text-[#cccccc]"
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            <FolderOpen className="w-4 h-4 text-[#dcb67a]" />
            <span className="text-sm">{item.name}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>
      </SidebarMenuItem>

      <CollapsibleContent>
        {item.children?.map((child, index) => (
          <FileTreeItem
            key={`${child.name}-${index}`}
            item={child}
            depth={depth + 1}
            onFileClick={onFileClick}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

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
      <SidebarHeader className="border-b bg-background border-[#3e3e42] text-md border-t  font-semibold h-15 flex  justify-center items-center  ">
        _othavio_quiliao
      </SidebarHeader>

      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="pl-2 pt-2">
              {fileStructure.map((item, index) => (
                <FileTreeItem
                  key={`${item.name}-${index}`}
                  item={item}
                  onFileClick={handleFileClick}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
