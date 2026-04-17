// Logical name → public path. Rename here, not across components.
export const images = {
  // existing
  heroHome: "/images/home.jpg",
  menuAllDay: "/images/all-day.jpg",
  menuBrunch: "/images/brunch.jpg",
  menuLunch: "/images/lunch.jpg",
  menuDinner: "/images/dinner.jpg",
  menuDrinks: "/images/drinks.jpg",
  menuKids: "/images/kids.jpg",
  menuHappyHour: "/images/happy-hour.jpg",
  menuPurveyors: "/images/purveyors.jpg",
  locationsMap: "/images/locations.jpg",

  // lux editorial
  editorialKitchen: "/images/lux/kitchen.jpg",
  editorialRoom: "/images/lux/room.jpg",
  editorialNeighborhood: "/images/lux/neighborhood.jpg",
  signatureDish: "/images/lux/signature.jpg",
  haiNoon: "/images/lux/hai-noon.jpg",
  hiddenGem: "/images/lux/hidden-gem.jpg",
  storySpace: "/images/lux/story-space.jpg",
  storyPlates: "/images/lux/story-plates.jpg",
} as const;

export type ImageKey = keyof typeof images;
