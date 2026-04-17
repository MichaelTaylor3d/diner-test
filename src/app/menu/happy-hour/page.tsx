import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function HappyHourMenu() {
  return <MenuImagePage slug="happy-hour" image={images.menuHappyHour} />;
}
