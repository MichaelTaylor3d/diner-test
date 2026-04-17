import { BrassButton } from "@/components/atoms/BrassButton";
import { DisplayText } from "@/components/atoms/DisplayText";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { externalLinks } from "@/data/externalLinks";

export function JoinBand() {
  return (
    <section className="bg-cream py-24">
      <RevealOnView className="mx-auto max-w-3xl px-4 text-center">
        <DisplayText as="h2" size="lg">
          Come eat with us.
        </DisplayText>
        <p className="mt-4 text-base leading-7 text-desert-shadow">
          Walk in for a biscuit. Order in for a lazy Sunday. Cater your next
          gathering. We&rsquo;ve got a seat for you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BrassButton href={externalLinks.order} external size="lg">
            Order Online
          </BrassButton>
          <BrassButton href={externalLinks.catering} external size="lg">
            Catering
          </BrassButton>
        </div>
      </RevealOnView>
    </section>
  );
}
