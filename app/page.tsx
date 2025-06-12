"use client";

import { useState, useEffect, useCallback } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { CodeEditor } from "@/components/code-editor";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TabItem {
  id: string;
  name: string;
  type: string;
}

export default function Home() {
  // Estado para controlar as abas abertas e a aba ativa
  const [activeTab, setActiveTab] = useState("_sobre");
  const [openTabs, setOpenTabs] = useState<TabItem[]>([
    { id: "_sobre", name: "Sobre", type: "javascript" },
  ]);

  // Função para abrir um arquivo em uma nova aba
  const openFile = useCallback(
    (fileName: string, fileType: string, label?: string) => {
      const tabId = label || fileName;
      const existingTab = openTabs.find((tab) => tab.id === tabId);

      if (!existingTab) {
        const newTab = { id: tabId, name: fileName, type: fileType };
        setOpenTabs([...openTabs, newTab]);
      }

      setActiveTab(tabId);
    },
    [openTabs]
  );

  // Função para fechar uma aba
  const closeTab = (tabId: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    const newTabs = openTabs.filter((tab) => tab.id !== tabId);

    if (newTabs.length === 0) {
      // Reabrir a aba padrão se todas as abas forem fechadas
      const defaultTab = { id: "_sobre", name: "Sobre", type: "javascript" };
      setOpenTabs([defaultTab]);
      setActiveTab("_sobre");
    } else if (activeTab === tabId) {
      // Mudar para a última aba se a aba ativa for fechada
      setActiveTab(newTabs[newTabs.length - 1].id);
    }

    setOpenTabs(newTabs);
  };

  // Escutar eventos de abertura de arquivo do sidebar
  useEffect(() => {
    const handleOpenFile = (event: CustomEvent) => {
      const { fileName, fileType, label } = event.detail;
      openFile(fileName, fileType, label);
    };

    window.addEventListener("openFile", handleOpenFile as EventListener);
    return () => {
      window.removeEventListener("openFile", handleOpenFile as EventListener);
    };
  }, [openFile]);

  return (
    <div className="h-screen bg-background text-[#cccccc] font-mono text-sm flex flex-col">
      <div className="flex-1 flex flex-col overflow-hidden">
        {openTabs.length > 0 && (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex-1 flex flex-col"
          >
            {/* Barra de abas */}
            <div className="bg-background h-15 justify-between border-[#3e3e42] flex border-b border-t">
              <div className="flex border-[#3e3e42] text-lg">
                {openTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`group min-w-44 h-15 flex items-center justify-between px-4 border-r border-[#3e3e42] text-base cursor-pointer ${
                      activeTab === tab.id
                        ? "border-b-3 border-b-[#007acc]"
                        : "border-b hover:bg-[#2a2d2e]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="truncate">{tab.name}</span>
                    {openTabs.length > 1 && (
                      <Button
                        onClick={(e) => closeTab(tab.id, e)}
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] size-5 ml-2"
                      >
                        <X className="size-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="border-l border-r border-[#3e3e42] rounded-none h-15 flex items-center justify-center text-md text-base px-4"
              >
                _entrar-em-contato
              </Button>
            </div>

            {/* Conteúdo das abas */}
            {openTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="flex-1 m-0">
                <CodeEditor fileName={tab.id} fileType={tab.type} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
