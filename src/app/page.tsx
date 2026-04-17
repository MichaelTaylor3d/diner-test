import { HomeHero } from "@/components/sections/HomeHero";
import { HoursStrip } from "@/components/sections/HoursStrip";
import { EditorialTriptych } from "@/components/sections/EditorialTriptych";
import { SignatureDish } from "@/components/sections/SignatureDish";
import { JoinBand } from "@/components/sections/JoinBand";
import { Marquee } from "@/components/sections/Marquee";
import { SectionRule } from "@/components/atoms/SectionRule";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <HoursStrip />
      <SectionRule />
      <EditorialTriptych />
      <div className="bg-bg-deep text-cream">
        <SignatureDish />
      </div>
      <SectionRule />
      <JoinBand />
    </>
  );
}
