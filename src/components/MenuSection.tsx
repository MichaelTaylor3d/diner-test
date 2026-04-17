import { MenuItem, type MenuItemData } from "./MenuItem";

export type MenuSectionData = {
  heading: string;
  blurb?: string;
  items: MenuItemData[];
};

export function MenuSection({ section }: { section: MenuSectionData }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl md:text-3xl uppercase tracking-widest mb-2">
        {section.heading}
      </h2>
      {section.blurb && (
        <p className="text-sm text-brand-muted mb-4">{section.blurb}</p>
      )}
      <ul>
        {section.items.map((it) => (
          <MenuItem key={it.name} item={it} />
        ))}
      </ul>
    </section>
  );
}
