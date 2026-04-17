import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { BrassButton } from "@/components/atoms/BrassButton";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-32 text-center">
      <Eyebrow className="text-terracotta">Off the menu</Eyebrow>
      <DisplayText as="h1" size="xl" className="mt-2">
        That page didn&rsquo;t make it to the pass.
      </DisplayText>
      <p className="mt-6 text-base leading-7 text-desert-shadow">
        Must have wandered off. Let&rsquo;s get you back to something good.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <BrassButton href="/" size="lg">
          Back to Home
        </BrassButton>
        <BrassButton href="/menu" size="lg">
          See Menus
        </BrassButton>
      </div>
    </section>
  );
}
