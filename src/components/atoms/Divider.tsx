type Props = {
  label?: string;
  className?: string;
};

export function Divider({ label, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="flex-1 h-px bg-brass/50" />
      {label && <span className="eyebrow text-brass">{label}</span>}
      <span className="flex-1 h-px bg-brass/50" />
    </div>
  );
}
