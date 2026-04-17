import Image from "next/image";
import { PullQuote } from "@/components/molecules/PullQuote";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { images } from "@/data/images";

export function SignatureDish() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 grid gap-12 md:grid-cols-2 items-center">
      <RevealOnView className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={images.signatureDish}
          alt="Signature plate"
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </RevealOnView>

      <RevealOnView>
        <Eyebrow className="text-terracotta">Signature</Eyebrow>
        <DisplayText as="h2" size="lg" className="mt-2">
          Fried Green Tomato Sandwich.
        </DisplayText>
        <p className="mt-6 text-base leading-7 text-desert-shadow">
          A regional favorite with cornmeal-crusted tomatoes, pimento cheese, and
          a little heat — built on sourdough that&rsquo;s been on our menu almost
          as long as our sign.
        </p>
        <div className="mt-8">
          <PullQuote attribution="Phoenix New Times, 100 Favorite Dishes">
            A small miracle between two slices of sourdough.
          </PullQuote>
        </div>
      </RevealOnView>
    </section>
  );
}
