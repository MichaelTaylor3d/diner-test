import { MenuCardGrid } from "@/components/sections/MenuCardGrid";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";

export default function MenuIndex() {
  return (
    <>
      <RevealOnView className="mx-auto max-w-3xl px-4 pt-16 text-center">
        <Eyebrow className="text-terracotta">The Menus</Eyebrow>
        <DisplayText as="h1" size="lg" className="mt-2">
          A kitchen for every hour.
        </DisplayText>
      </RevealOnView>
      <MenuCardGrid />
    </>
  );
}
