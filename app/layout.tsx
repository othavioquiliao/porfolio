import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { StatusBar } from "@/components/status-bar";

// Fonte monospace para o tema VSCode
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Othavio Quilião | Portfólio",
  description: "Portfólio de desenvolvimento web com tema VSCode",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} font-mono antialiased dark`}
        suppressHydrationWarning
      >
        <SidebarProvider defaultOpen={true}>
          <div className="flex h-screen w-full bg-background">
            <AppSidebar />
            <main className="flex-1 flex flex-col">{children}</main>
          </div>
          <StatusBar />
        </SidebarProvider>
      </body>
    </html>
  );
}
