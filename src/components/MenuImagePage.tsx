import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/atoms/IconArrow";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { ChefNote } from "@/components/atoms/ChefNote";
import { MenuPagination } from "@/components/molecules/MenuPagination";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { MenuSchema } from "@/components/seo/MenuSchema";
import { menuMeta, type MenuSlug } from "@/data/menuMeta";
import { menuContent } from "@/data/menuContent";

type Props = {
  slug: MenuSlug;
  image: string;
};

function dietaryTags(item: { veg?: boolean; vegan?: boolean; gf?: boolean }) {
  const tags: string[] = [];
  if (item.vegan) tags.push("vegan");
  else if (item.veg) tags.push("vegetarian");
  if (item.gf) tags.push("gluten-free");
  return tags;
}

export function MenuImagePage({ slug, image }: Props) {
  const meta = menuMeta[slug];
  const sections = menuContent[slug];
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Menus", path: "/menu" },
          { name: meta.title, path: `/menu/${slug}` },
        ]}
      />
      <MenuSchema slug={slug} />
      <Link
        href="/menu"
        className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-desert-shadow hover:text-terracotta transition-colors"
      >
        <IconArrow size={14} className="rotate-180 group-hover:-translate-x-1 group-hover:translate-y-0" />
        Back to Menus
      </Link>

      <div className="mt-6 text-center">
        <Eyebrow className="text-terracotta">Menu</Eyebrow>
        <h1 className="display text-4xl md:text-6xl mt-1">{meta.title}</h1>
        <RevealOnView className="mt-6 max-w-xl mx-auto text-left">
          <ChefNote>{meta.note}</ChefNote>
        </RevealOnView>
      </div>

      <RevealOnView className="mt-10">
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] shadow-[0_30px_60px_-30px_rgba(31,26,23,0.35)]">
          <Image
            src={image}
            alt={`Welcome Diner ${meta.title.toLowerCase()} menu — ${meta.note}`}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-contain bg-cream"
          />
        </div>
      </RevealOnView>

      {/* Screen-reader + crawler accessible menu transcript. Visually hidden. */}
      <div className="sr-only" aria-label={`${meta.title} menu text version`}>
        <h2>{meta.title} menu — Welcome Diner</h2>
        <p>{meta.note}</p>
        {sections.map((section) => (
          <section key={section.label}>
            <h3>{section.label}</h3>
            {section.note && <p>{section.note}</p>}
            <ul>
              {section.items.map((item) => {
                const tags = dietaryTags(item);
                return (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    {item.description ? ` — ${item.description}` : ""}
                    {item.price ? ` — $${item.price}` : ""}
                    {tags.length > 0 ? ` (${tags.join(", ")})` : ""}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <MenuPagination current={slug} />
    </section>
  );
}
