"use client"; 

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; 

interface MarkdownViewerProps {
  markdownContent: string;
}

export default function MarkdownViewer({ markdownContent }: MarkdownViewerProps) {
  return (
    <article className="prose dark:prose-invert max-w-none p-4 sm:p-6 lg:p-8 max-h-screen mx-10">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
}