export type MenuItemData = {
  name: string;
  description?: string;
  price?: string;
  note?: string;
};

export function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <li className="py-3 border-b border-brand-muted/20 last:border-0">
      <div className="flex justify-between gap-4">
        <span className="font-display text-lg uppercase tracking-wider">
          {item.name}
        </span>
        {item.price && (
          <span className="whitespace-nowrap">{item.price}</span>
        )}
      </div>
      {item.description && (
        <p className="mt-1 text-sm text-brand-muted">{item.description}</p>
      )}
      {item.note && (
        <p className="mt-1 text-xs italic text-brand-accent">{item.note}</p>
      )}
    </li>
  );
}
