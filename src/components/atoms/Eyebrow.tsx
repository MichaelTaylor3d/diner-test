type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div" | "h2" | "h3";
  /** Leading brass tick — editorial marginalia. Default on, can disable per-instance. */
  tick?: boolean;
};

export function Eyebrow({ children, className = "", as = "p", tick = true }: Props) {
  const Tag = as;
  return (
    <Tag className={`eyebrow text-desert-shadow inline-flex items-center gap-3 ${className}`}>
      {tick && (
        <span
          aria-hidden="true"
          className="inline-block h-px w-6 bg-brass/70 align-middle"
        />
      )}
      <span>{children}</span>
      {tick && (
        <span
          aria-hidden="true"
          className="inline-block h-px w-6 bg-brass/70 align-middle"
        />
      )}
    </Tag>
  );
}
