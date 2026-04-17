import Image from "next/image";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { BrassButton } from "@/components/atoms/BrassButton";
import { images } from "@/data/images";

const sisters = [
  {
    eyebrow: "Sister spot",
    title: "Hai Noon",
    body: "A modern Asian diner with all-day comfort in a sunlit room. Pho, banh mi, family-style rice bowls — built from the same welcoming playbook.",
    href: "http://hainoonaz.com/",
    image: images.haiNoon,
    alt: "Hai Noon interior",
  },
  {
    eyebrow: "Sister spot",
    title: "Hidden Gem",
    body: "An intimate cocktail bar with low light and a deep bench of spirits. Walk in after dinner and let the bartender choose.",
    href: "http://hiddengemaz.com/",
    image: images.hiddenGem,
    alt: "Hidden Gem bar",
  },
];

export default function SisterSpots() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <RevealOnView className="text-center">
        <Eyebrow className="text-terracotta">Sister Spots</Eyebrow>
        <DisplayText as="h1" size="lg" className="mt-2">
          More places we love.
        </DisplayText>
      </RevealOnView>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {sisters.map((s) => (
          <RevealOnView key={s.title} amount={0.25}>
            <article className="group">
              <div className="relative w-full overflow-hidden aspect-[4/5]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <Eyebrow className="mt-4 text-terracotta">{s.eyebrow}</Eyebrow>
              <h3 className="display text-3xl md:text-4xl mt-1">{s.title}</h3>
              <p className="mt-3 text-base leading-7 text-desert-shadow">
                {s.body}
              </p>
              <div className="mt-6">
                <BrassButton href={s.href} external size="sm">
                  Visit →
                </BrassButton>
              </div>
            </article>
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
