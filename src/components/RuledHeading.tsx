export function RuledHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-6 my-6 text-brand-accent">
      <span className="flex-1 h-px bg-brand-muted/40" />
      <span className="text-xs uppercase tracking-[0.4em] whitespace-nowrap">
        {children}
      </span>
      <span className="flex-1 h-px bg-brand-muted/40" />
    </div>
  );
}
