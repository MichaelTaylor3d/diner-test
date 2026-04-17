import Image from "next/image";
import { PullQuote } from "@/components/molecules/PullQuote";
import { RevealOnView } from "@/components/motion/RevealOnView";

type Props = {
  image: string;
  alt: string;
  quote: string;
  attribution: string;
};

export function StaffQuote({ image, alt, quote, attribution }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 grid gap-12 md:grid-cols-2 items-center">
      <RevealOnView className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </RevealOnView>
      <RevealOnView>
        <PullQuote attribution={attribution}>{quote}</PullQuote>
      </RevealOnView>
    </section>
  );
}
