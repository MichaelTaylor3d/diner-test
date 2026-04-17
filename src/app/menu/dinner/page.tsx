import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function DinnerMenu() {
  return <MenuImagePage title="Dinner" image={images.menuDinner} />;
}
