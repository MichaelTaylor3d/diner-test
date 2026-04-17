import Link from "next/link";

type Size = "sm" | "lg";
type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  size?: Size;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[11px]",
  lg: "px-8 py-4 text-xs",
};

export function BrassButton({ href, external, size = "sm", className = "", children }: Props) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden border border-brass uppercase tracking-[0.4em] text-brass transition-colors";
  const fill =
    "before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-brass before:transition-transform before:duration-500 before:ease-[cubic-bezier(.22,1,.36,1)] hover:before:scale-x-100 hover:text-bg-ivory";
  const text = "relative z-10";
  const cls = `${base} ${fill} ${sizes[size]} ${className}`;
  const body = <span className={text}>{children}</span>;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}
