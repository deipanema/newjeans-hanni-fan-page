import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose lg:prose-xl max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        img: (image) => (
          <Image
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
            className="w-full max-h-96 object-cover"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
