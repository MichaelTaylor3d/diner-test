// Logical name → public path. Rename here, not across components.
export const images = {
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
} as const;

export type ImageKey = keyof typeof images;
