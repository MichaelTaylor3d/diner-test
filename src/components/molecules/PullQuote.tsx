type Props = {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
};

export function PullQuote({ children, attribution, className = "" }: Props) {
  return (
    <blockquote
      className={`border-l-2 border-terracotta pl-6 italic display text-2xl md:text-3xl leading-snug ${className}`}
    >
      <p>&ldquo;{children}&rdquo;</p>
      {attribution && (
        <footer className="mt-3 text-xs not-italic tracking-[0.3em] uppercase text-desert-shadow">
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}
