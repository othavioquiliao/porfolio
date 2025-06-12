// components/CodeBlock.tsx
"use client"; // Obrigatório para react-syntax-highlighter

import type { FC, PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
}

export const CodeBlock: FC<PropsWithChildren<CodeBlockProps>> = ({
  language,
  children,
}) => {
  if (typeof children !== "string") {
    // Retorna nulo ou um erro se o filho não for uma string de código
    return null;
  }

  return (
    <SyntaxHighlighter
      style={oneDark}
      language={language}
      showLineNumbers // Opcional: para mostrar números de linha
      wrapLongLines // Opcional: para quebrar linhas longas
      customStyle={{
        margin: 0,
        padding: "12px",
        background: "transparent",
        fontSize: "16px",
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
      }}
      lineNumberStyle={{
        paddingRight: "12px",
        marginRight: "12px",
        minWidth: "32px",
        fontSize: "16px",
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
      }}
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
};
