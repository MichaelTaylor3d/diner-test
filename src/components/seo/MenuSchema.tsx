import { siteMeta } from "@/data/site";
import { menuMeta, type MenuSlug } from "@/data/menuMeta";
import { menuContent } from "@/data/menuContent";

function dietaryRestriction(item: { veg?: boolean; vegan?: boolean; gf?: boolean }) {
  const tags: string[] = [];
  if (item.vegan) tags.push("https://schema.org/VeganDiet");
  else if (item.veg) tags.push("https://schema.org/VegetarianDiet");
  if (item.gf) tags.push("https://schema.org/GlutenFreeDiet");
  return tags.length === 0 ? undefined : tags.length === 1 ? tags[0] : tags;
}

export function MenuSchema({ slug }: { slug: MenuSlug }) {
  const sections = menuContent[slug];
  const meta = menuMeta[slug];
  const data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${meta.title} Menu`,
    description: meta.note,
    inLanguage: "en-US",
    url: `${siteMeta.url}/menu/${slug}`,
    provider: {
      "@type": "Restaurant",
      name: siteMeta.name,
      url: siteMeta.url,
    },
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.label,
      ...(section.note ? { description: section.note } : {}),
      hasMenuItem: section.items.map((item) => {
        const restriction = dietaryRestriction(item);
        return {
          "@type": "MenuItem",
          name: item.name,
          ...(item.description ? { description: item.description } : {}),
          ...(item.price
            ? {
                offers: {
                  "@type": "Offer",
                  price: item.price,
                  priceCurrency: "USD",
                },
              }
            : {}),
          ...(restriction
            ? {
                suitableForDiet: restriction,
              }
            : {}),
        };
      }),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
