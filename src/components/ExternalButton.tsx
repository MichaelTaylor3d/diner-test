import Link from "next/link";

type Props = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function ExternalButton({
  href,
  external,
  children,
  className = "",
}: Props) {
  const base =
    "inline-block rounded border border-brand-accent px-5 py-2 text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-brand-bg transition-colors";
  const cls = `${base} ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
