type Size = "xl" | "lg" | "md" | "sm";
type Props = {
  children: React.ReactNode;
  size?: Size;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
};

const sizes: Record<Size, string> = {
  xl: "text-6xl md:text-8xl",
  lg: "text-4xl md:text-6xl",
  md: "text-3xl md:text-4xl",
  sm: "text-2xl md:text-3xl",
};

export function DisplayText({ children, size = "md", className = "", as = "h2" }: Props) {
  const Tag = as;
  return <Tag className={`display leading-[1.05] ${sizes[size]} ${className}`}>{children}</Tag>;
}
