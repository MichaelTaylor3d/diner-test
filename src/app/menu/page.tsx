import { MenuCardGrid } from "@/components/sections/MenuCardGrid";
import { DisplayText } from "@/components/atoms/DisplayText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { RevealOnView } from "@/components/motion/RevealOnView";
import { Divider } from "@/components/atoms/Divider";

export default function MenuIndex() {
  return (
    <>
      <RevealOnView className="mx-auto max-w-3xl px-4 pt-16 text-center">
        <Eyebrow className="text-terracotta">The Menus</Eyebrow>
        <DisplayText as="h1" size="xl" className="mt-2">
          A kitchen for every hour.
        </DisplayText>
        <p className="mt-6 text-base leading-7 text-desert-shadow">
          From the first pour at 9am to the last late-night biscuit — the full
          table, laid out.
        </p>
        <Divider className="mt-10 max-w-sm mx-auto" />
      </RevealOnView>
      <MenuCardGrid />
    </>
  );
}
