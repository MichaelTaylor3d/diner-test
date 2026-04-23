// Single source of truth for site-level metadata (SEO, schema, OG).
export const siteMeta = {
  name: "Welcome Diner",
  tagline: "A farm-to-table diner in Garfield, Downtown Phoenix",
  description:
    "Welcome Diner has been serving Southern and Sonoran comfort food in the Garfield Historic District of Downtown Phoenix since 2004 — scratch-made, sourced with integrity, open late.",
  url: "https://do7edupb3refa.cloudfront.net",
  locale: "en_US",
  address: {
    street: "929 E Pierce St",
    locality: "Phoenix",
    region: "AZ",
    postalCode: "85006",
    country: "US",
  },
  geo: {
    latitude: 33.4567,
    longitude: -112.0632,
  },
  telephone: "+1-602-495-1111",
  hours: [
    { day: "Sunday", open: "09:00", close: "21:00" },
    { day: "Monday", open: "11:00", close: "22:00" },
    { day: "Tuesday", open: "11:00", close: "22:00" },
    { day: "Wednesday", open: "11:00", close: "22:00" },
    { day: "Thursday", open: "11:00", close: "22:00" },
    { day: "Friday", open: "11:00", close: "24:00" },
    { day: "Saturday", open: "09:00", close: "24:00" },
  ],
  priceRange: "$$",
  cuisines: ["American", "Southern", "Sonoran", "Comfort Food"],
  servesCuisine: "American, Southern, Sonoran",
  sameAs: [
    "https://www.facebook.com/WelcomeDiner/",
    "https://www.instagram.com/welcomediner/",
  ],
} as const;
