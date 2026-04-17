import { HomeHero } from "@/components/sections/HomeHero";
import { HoursStrip } from "@/components/sections/HoursStrip";
import { EditorialTriptych } from "@/components/sections/EditorialTriptych";
import { SignatureDish } from "@/components/sections/SignatureDish";
import { JoinBand } from "@/components/sections/JoinBand";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HoursStrip />
      <EditorialTriptych />
      <SignatureDish />
      <JoinBand />
    </>
  );
}
