"use client";

import { useState, useEffect, useCallback } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { CodeEditor } from "@/components/code-editor";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeTab, setActiveTab] = useState("_sobre");
  const [openTabs, setOpenTabs] = useState([
    { id: "_sobre", name: "_sobre", type: "javascript" },
  ]);

  const openFile = useCallback(
    (fileName: string, fileType: string) => {
      const existingTab = openTabs.find((tab) => tab.name === fileName);
      if (!existingTab) {
        const newTab = { id: fileName, name: fileName, type: fileType };
        setOpenTabs([...openTabs, newTab]);
      }
      setActiveTab(fileName);
    },
    [openTabs]
  );

  const closeTab = (tabId: string) => {
    const newTabs = openTabs.filter((tab) => tab.id !== tabId);
    setOpenTabs(newTabs);

    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    } else if (newTabs.length === 0) {
      // Abrir tab padrão se não houver tabs
      const defaultTab = {
        id: "_sobre",
        name: "_sobre",
        type: "javascript",
      };
      setOpenTabs([defaultTab]);
      setActiveTab("_sobre");
    }
  };

  // Escutar eventos de abertura de arquivo do sidebar
  useEffect(() => {
    const handleOpenFile = (event: CustomEvent) => {
      const { fileName, fileType, label } = event.detail;
      // Usar o label se disponível, senão usar fileName
      const tabName = label || fileName;
      openFile(tabName, fileType);
    };

    window.addEventListener("openFile", handleOpenFile as EventListener);

    return () => {
      window.removeEventListener("openFile", handleOpenFile as EventListener);
    };
  }, [openFile]); // Corrigir dependência para openFile

  return (
    <div className="h-screen bg-background text-[#cccccc] font-mono text-sm flex flex-col">
      <div className="flex-1 flex flex-col overflow-hidden">
        {openTabs.length > 0 && (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex-1 flex flex-col "
          >
            {/* Tab Bar Customizada */}
            <div className="bg-background h-15  justify-between border-[#3e3e42] flex border-b border-t ">
              <div className="flex border-r border-[#3e3e42] text-lg ">
                {openTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`group min-w-44 h-15 flex items-center justify-between px-4 border-r border-[#3e3e42] text-base  cursor-pointer ${
                      activeTab === tab.id
                        ? "border-b-3 border-b-[#007acc]"
                        : "border-b hover:bg-[#2a2d2e]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="truncate">{tab.name}</span>
                    {openTabs.length > 1 && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          closeTab(tab.id);
                        }}
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
                className="bg-background border border-[#3e3e42] rounded-none h-15 flex items-center justify-center text-md text-base px-10"
              >
                _entrar-em-contato
              </Button>
            </div>

            {openTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="flex-1 m-0">
                <CodeEditor fileName={tab.name} fileType={tab.type} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
