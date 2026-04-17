import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/atoms/IconArrow";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";

type Props = {
  title: string;
  image: string;
};

export function MenuImagePage({ title, image }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <Link
        href="/menu"
        className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-desert-shadow hover:text-terracotta transition-colors"
      >
        <IconArrow size={14} className="rotate-180 group-hover:-translate-x-1 group-hover:translate-y-0" />
        Back to Menus
      </Link>

      <div className="mt-6 text-center">
        <Eyebrow className="text-terracotta">Menu</Eyebrow>
        <h1 className="display text-3xl md:text-5xl mt-1">{title}</h1>
      </div>

      <RevealOnView className="mt-8">
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] shadow-[0_30px_60px_-30px_rgba(31,26,23,0.35)]">
          <Image
            src={image}
            alt={`${title} menu`}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-contain bg-cream"
          />
        </div>
      </RevealOnView>
    </section>
  );
}
