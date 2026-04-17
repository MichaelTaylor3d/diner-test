import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { IconArrow } from "@/components/atoms/IconArrow";

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  body?: string;
  image: string;
  alt: string;
  aspectClass?: string;
  external?: boolean;
};

export function EditorialCard({
  href,
  eyebrow,
  title,
  body,
  image,
  alt,
  aspectClass = "aspect-[3/4]",
  external,
}: Props) {
  const outer =
    "group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-bg-ivory";
  const content = (
    <>
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width:1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <Eyebrow className="mt-4 text-terracotta">{eyebrow}</Eyebrow>
      <h3 className="display text-2xl md:text-3xl mt-1 transition-colors duration-300 group-hover:text-terracotta">
        {title}
      </h3>
      {body && <p className="mt-2 text-sm leading-6 text-desert-shadow">{body}</p>}
      <span className="mt-3 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.35em] text-brass">
        Explore <IconArrow size={14} />
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={outer}>
      {content}
    </a>
  ) : (
    <Link href={href} className={outer}>
      {content}
    </Link>
  );
}
