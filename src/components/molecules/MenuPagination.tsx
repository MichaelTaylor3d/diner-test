import Link from "next/link";
import { IconArrow } from "@/components/atoms/IconArrow";
import { prevNext, type MenuSlug } from "@/data/menuMeta";

type Props = {
  current: MenuSlug;
};

export function MenuPagination({ current }: Props) {
  const { prev, next } = prevNext(current);
  return (
    <nav className="mt-16 flex items-center justify-between border-t border-brass/40 pt-6 text-[11px] uppercase tracking-[0.35em]">
      <div>
        {prev && (
          <Link
            href={`/menu/${prev.slug}`}
            className="group inline-flex items-center gap-2 text-desert-shadow hover:text-terracotta transition-colors"
          >
            <IconArrow size={14} className="rotate-180 group-hover:-translate-x-1" />
            {prev.title}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`/menu/${next.slug}`}
            className="group inline-flex items-center gap-2 text-desert-shadow hover:text-terracotta transition-colors"
          >
            {next.title}
            <IconArrow size={14} className="group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </nav>
  );
}
