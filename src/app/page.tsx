import { HomeHero } from "@/components/sections/HomeHero";
import { HoursStrip } from "@/components/sections/HoursStrip";
import { EditorialTriptych } from "@/components/sections/EditorialTriptych";
import { PressStrip } from "@/components/molecules/PressStrip";
import { SignatureDish } from "@/components/sections/SignatureDish";
import { NeighborhoodTeaser } from "@/components/sections/NeighborhoodTeaser";
import { JoinBand } from "@/components/sections/JoinBand";
import { Marquee } from "@/components/sections/Marquee";
import { SectionRule } from "@/components/atoms/SectionRule";

export default function Home() {
  return (
    <>
      <div className="flex h-[100svh] flex-col">
        <HomeHero />
        <Marquee />
      </div>
      <HoursStrip />
      <SectionRule />
      <EditorialTriptych />
      <PressStrip />
      <div className="bg-bg-deep text-cream">
        <SignatureDish />
        <NeighborhoodTeaser />
      </div>
      <SectionRule />
      <JoinBand />
    </>
  );
}
