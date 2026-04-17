import { MenuImagePage } from "@/components/MenuImagePage";
import { images } from "@/data/images";

export default function DrinksMenu() {
  return <MenuImagePage slug="drinks" image={images.menuDrinks} />;
}
