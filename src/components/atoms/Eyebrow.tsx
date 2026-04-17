type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div" | "h2" | "h3";
};

export function Eyebrow({ children, className = "", as = "p" }: Props) {
  const Tag = as;
  return <Tag className={`eyebrow text-desert-shadow ${className}`}>{children}</Tag>;
}
