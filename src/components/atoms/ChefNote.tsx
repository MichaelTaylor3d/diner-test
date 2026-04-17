type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ChefNote({ children, className = "" }: Props) {
  return (
    <p
      className={`border-l-2 border-terracotta pl-5 italic display text-lg md:text-xl text-desert-shadow leading-snug ${className}`}
    >
      {children}
    </p>
  );
}
