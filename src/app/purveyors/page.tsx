import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { DisplayText } from "@/components/atoms/DisplayText";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { images } from "@/data/images";

export default function Purveyors() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <RevealOnView className="text-center">
        <Eyebrow className="text-terracotta">Purveyors</Eyebrow>
        <DisplayText as="h1" size="lg" className="mt-2">
          Sourced with integrity.
        </DisplayText>
        <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-desert-shadow">
          Every plate starts with the partners we trust. These are the farmers,
          bakers, ranchers, and makers who make what we do possible.
        </p>
      </RevealOnView>

      <RevealOnView className="mt-12">
        <div className="relative w-full aspect-[4/3] shadow-[0_30px_60px_-30px_rgba(31,26,23,0.35)]">
          <Image
            src={images.menuPurveyors}
            alt="Purveyors board"
            fill
            sizes="(min-width:1024px) 1024px, 100vw"
            className="object-contain bg-cream"
          />
        </div>
      </RevealOnView>
    </section>
  );
}
