export function DropCap({ children }: { children: string }) {
  if (!children.length) return null;
  const first = children[0];
  const rest = children.slice(1);
  return (
    <p className="text-base leading-7">
      <span className="float-left font-display text-[3.5rem] leading-[0.9] mr-2 mt-1 text-terracotta">
        {first}
      </span>
      {rest}
    </p>
  );
}
