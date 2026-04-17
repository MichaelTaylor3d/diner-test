import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function DinnerMenu() {
  return <MenuImagePage slug="dinner" image={images.menuDinner} />;
}
