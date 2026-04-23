import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/atoms/IconArrow";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { ChefNote } from "@/components/atoms/ChefNote";
import { MenuPagination } from "@/components/molecules/MenuPagination";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { menuMeta, type MenuSlug } from "@/data/menuMeta";

type Props = {
  slug: MenuSlug;
  image: string;
};

export function MenuImagePage({ slug, image }: Props) {
  const meta = menuMeta[slug];
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Menus", path: "/menu" },
          { name: meta.title, path: `/menu/${slug}` },
        ]}
      />
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

      <MenuPagination current={slug} />
    </section>
  );
}
