import { EditorialCard } from "@/components/molecules/EditorialCard";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { images } from "@/data/images";

const sisters = [
  {
    eyebrow: "Sister spot",
    title: "Hai Noon",
    body: "Mod Asian diner — all-day comfort, sunlit room.",
    href: "http://hainoonaz.com/",
    image: images.haiNoon,
    alt: "Hai Noon interior",
  },
  {
    eyebrow: "Sister spot",
    title: "Hidden Gem",
    body: "Intimate cocktail bar — low light, deep bench.",
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
            <EditorialCard {...s} external aspectClass="aspect-[4/5]" />
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
