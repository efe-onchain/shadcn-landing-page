"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;