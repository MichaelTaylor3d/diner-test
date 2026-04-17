// Logical name → public path. Rename here, not across components.
export const images = {
  heroHome: "/images/home-00.jpg",
  heroAllDay: "/images/all-day-00.jpg",
  heroBrunch: "/images/brunch-00.jpg",
  heroLunch: "/images/lunch-00.jpg",
  heroDinner: "/images/dinner-00.jpg",
  heroDrinks: "/images/drinks-00.jpg",
  heroKids: "/images/kids-00.jpg",
  heroHappyHour: "/images/happy-hour-00.jpg",
  heroLocations: "/images/locations-00.jpg",
} as const;

export type ImageKey = keyof typeof images;
