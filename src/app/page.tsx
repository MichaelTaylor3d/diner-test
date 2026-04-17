import Link from "next/link";
import { Hero } from "@/components/Hero";
import { externalLinks } from "@/data/externalLinks";
import { images } from "@/data/images";

const heroHours = [
  "Sunday — 9a–9p",
  "Monday–Thursday — 11a–10p",
  "Friday — 11a–midnight",
  "Saturday — 9a–midnight",
];

const linkButtons: { label: string; href: string; external?: boolean }[] = [
  { label: "Menus", href: "/menu" },
  { label: "Order", href: externalLinks.order, external: true },
  { label: "Locations", href: "/locations" },
  { label: "Catering", href: externalLinks.catering, external: true },
  { label: "Purveyors", href: "/purveyors" },
  { label: "Our Story", href: "/our-story" },
  { label: "Mentions", href: "/mentions" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "Hai Noon + Hidden Gem", href: "/sister-spots" },
];

export default function Home() {
  return (
    <>
      <Hero image={images.heroHome} alt="Welcome Diner">
        <h1 className="font-display text-5xl md:text-7xl tracking-[0.3em] uppercase leading-tight">
          Welcome
          <br />
          Diner
        </h1>
        <p className="mt-10 text-sm md:text-base tracking-[0.3em] uppercase">
          929 E Pierce St · PHX AZ
        </p>
        <ul className="mt-3 space-y-1 text-xs md:text-sm tracking-[0.25em] uppercase">
          {heroHours.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </Hero>

      <section className="mx-auto max-w-lg px-4 py-16">
        <ul className="flex flex-col gap-3">
          {linkButtons.map((b) =>
            b.external ? (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-brand-muted/30 px-6 py-3 text-center text-xs uppercase tracking-[0.35em] hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                {b.label}
              </a>
            ) : (
              <Link
                key={b.label}
                href={b.href}
                className="block border border-brand-muted/30 px-6 py-3 text-center text-xs uppercase tracking-[0.35em] hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                {b.label}
              </Link>
            )
          )}
        </ul>
      </section>
    </>
  );
}
