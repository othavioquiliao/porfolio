import { Button } from "@/components/ui/button";
import XIcon from "@/components/img/icon/xIcon";
import GithubIcon from "@/components/img/icon/githubIcon";
import { Linkedin } from "lucide-react";

export function StatusBar() {
  return (
    <div className="bg-background z-50 fixed bottom-0 w-full border-t  border-b-2 border-[#3e3e42]  flex items-center justify-between text-md h-15">
      <div className="flex items-center  text-white">
        <span className="w-44 text-center border-r border-b border-l text-base  rounded-none font-semibold  border-[#3e3e42] h-15 flex items-center justify-center">
          _redes_sociais
        </span>

        <div className="flex items-center ">
          <a href="https://x.com/NoctuaCore" target="_blank">
            <Button
              variant="ghost"
              size="lg"
              className="h-15 w-15  text-white p-0 rounded-none border-r border-b border-[#3e3e42]"
            >
              <XIcon className="size-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/othavioquiliao/" target="_blank">
            <Button
              variant="ghost"
              size="lg"
              className="h-15 w-15  text-white p-0 rounded-none border-r border-b border-[#3e3e42]"
            >
              <Linkedin className="size-5" />
            </Button>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <a href="https://github.com/othavioquiliao" target="_blank">
          <Button
            variant="ghost"
            size="lg"
            className="h-15 w-56 text-white text-base p-0 rounded-none border-r border-l border-b-2 border-[#3e3e42]"
          >
            <span className="text-base"> @othavioquiliao</span>
            <GithubIcon className="size-5" />
          </Button>
        </a>
      </div>
    </div>
  );
}
