import { Button } from "@/components/ui/button";
import XIcon from "@/components/img/icon/xIcon";
import GithubIcon from "@/components/img/icon/githubIcon";
import { Linkedin } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export function StatusBar() {
  const socialLinks: SocialLink[] = [
    {
      name: "Twitter/X",
      url: "https://x.com/NoctuaCore",
      icon: <XIcon className="size-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/othavioquiliao/",
      icon: <Linkedin className="size-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/othavioquiliao",
      icon: <GithubIcon className="size-5" />,
    },
  ];

  return (
    <div className="bg-background z-50 fixed bottom-0 w-full border-t border-b-2 border-[#3e3e42] flex items-center justify-between text-md h-15">
      <div className="flex items-center text-white">
        <span className="w-44 text-center border-r border-b border-l text-base rounded-none font-semibold border-[#3e3e42] h-15 flex items-center justify-center">
          _redes_sociais
        </span>

        <div className="flex items-center">
          {socialLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="h-15 w-15 text-white p-0 rounded-none border-r border-b border-[#3e3e42]"
                aria-label={link.name}
              >
                {link.icon}
              </Button>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4 text-white">
        <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            size="lg"
            className="h-15 w-56 text-white text-base p-0 rounded-none border-r border-l border-b-2 border-[#3e3e42]"
            aria-label={socialLinks[2].name}
          >
            <span className="text-base">@othavioquiliao</span>
            {socialLinks[2].icon}
          </Button>
        </a>
      </div>
    </div>
  );
}
