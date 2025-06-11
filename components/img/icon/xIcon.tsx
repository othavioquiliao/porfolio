import React from "react";
import { cn } from "@/lib/utils";

interface XIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

const XIcon = React.forwardRef<SVGSVGElement, XIconProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("", className)}
        {...props}
      >
        <path
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          stroke="none"
          fill="currentColor"
        />
      </svg>
    );
  }
);

XIcon.displayName = "XIcon";

export default XIcon;
