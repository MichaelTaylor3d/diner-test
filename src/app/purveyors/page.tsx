import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { DisplayText } from "@/components/atoms/DisplayText";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { PurveyorGrid } from "@/components/sections/PurveyorGrid";
import { Divider } from "@/components/atoms/Divider";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Purveyors",
  description:
    "The partners behind every plate at Welcome Diner — Hayden Flour Mills, Schreiner's Sausage, Noble Bread, McClendon's Select, Hickman's Farms, Crooked Sky, and more.",
  alternates: { canonical: "/purveyors" },
  openGraph: {
    title: "Purveyors — Welcome Diner",
    description: "The Arizona partners behind every plate at Welcome Diner.",
    url: "/purveyors",
    images: [{ url: "/images/lux/purveyor-grain.jpg", width: 1200, height: 800, alt: "Heritage grain from Hayden Flour Mills" }],
  },
};

export default function Purveyors() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Purveyors", path: "/purveyors" },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <RevealOnView>
          <Eyebrow className="text-terracotta">Purveyors</Eyebrow>
          <DisplayText as="h1" size="lg" className="mt-2">
            Sourced with integrity.
          </DisplayText>
          <p className="mt-6 max-w-xl mx-auto text-base leading-7 text-desert-shadow">
            Every plate starts with the partners we trust. Farmers, bakers,
            ranchers, and makers who make what we do possible.
          </p>
        </RevealOnView>
      </section>

      <PurveyorGrid />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <Divider label="And many more" />
        <RevealOnView className="mt-10">
          <div className="relative w-full aspect-[4/3] shadow-[0_30px_60px_-30px_rgba(31,26,23,0.35)]">
            <Image
              src={images.menuPurveyors}
              alt="Full purveyors board"
              fill
              sizes="(min-width:1024px) 768px, 100vw"
              className="object-contain bg-cream"
            />
          </div>
        </RevealOnView>
      </section>
    </>
  );
}
