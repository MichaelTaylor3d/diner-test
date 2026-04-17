import { Hero } from "@/components/Hero";
import { ExternalButton } from "@/components/ExternalButton";
import { externalLinks } from "@/data/externalLinks";
import { images } from "@/data/images";

export default function Home() {
  return (
    <>
      <Hero
        image={images.heroHome}
        alt="Welcome Diner"
        title="Welcome Diner"
        subtitle="All-day diner. Chef-driven. Community-focused."
      >
        <ExternalButton href="/menu">See Menus</ExternalButton>
        <ExternalButton href={externalLinks.order} external>
          Order
        </ExternalButton>
      </Hero>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest">
          Comfort classics, reimagined
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-muted">
          A neighborhood diner serving breakfast, brunch, lunch, and dinner.
          Fresh ingredients, generous portions, warm hospitality — morning to
          night.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ExternalButton href="/locations">Visit</ExternalButton>
          <ExternalButton href={externalLinks.catering} external>
            Catering
          </ExternalButton>
        </div>
      </section>
    </>
  );
}
