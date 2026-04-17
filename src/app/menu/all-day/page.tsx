import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function AllDayMenu() {
  return <MenuImagePage slug="all-day" image={images.menuAllDay} />;
}
