// Curated editorial stock. URLs use the Unsplash Source CDN (publisher-hotlink friendly).
// We download to public/images/lux/ at build-time via scripts/download-lux-images.mjs.

export type LuxImage = {
  key: string; // logical key used in images.ts
  filename: string; // file under public/images/lux/
  url: string; // Unsplash raw URL
  photographer: string;
  photographerUrl: string;
};

export const luxImages: LuxImage[] = [
  {
    key: "editorialKitchen",
    filename: "kitchen.jpg",
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    photographer: "Brooke Lark",
    photographerUrl: "https://unsplash.com/@brookelark",
  },
  {
    key: "editorialRoom",
    filename: "room.jpg",
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    photographer: "Patrick Tomasso",
    photographerUrl: "https://unsplash.com/@impatrickt",
  },
  {
    key: "editorialNeighborhood",
    filename: "neighborhood.jpg",
    url: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=1200&q=80",
    photographer: "Michael Kilcoyne",
    photographerUrl: "https://unsplash.com/@mkilcoyne",
  },
  {
    key: "signatureDish",
    filename: "signature.jpg",
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80",
    photographer: "Jennifer Pallian",
    photographerUrl: "https://unsplash.com/@foodess",
  },
  {
    key: "haiNoon",
    filename: "hai-noon.jpg",
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    photographer: "Johann Trasch",
    photographerUrl: "https://unsplash.com/@johann_trasch",
  },
  {
    key: "hiddenGem",
    filename: "hidden-gem.jpg",
    url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    photographer: "Alex Haney",
    photographerUrl: "https://unsplash.com/@alexhaney",
  },
  {
    key: "storySpace",
    filename: "story-space.jpg",
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    photographer: "Becca Tapert",
    photographerUrl: "https://unsplash.com/@beccatapert",
  },
  {
    key: "storyPlates",
    filename: "story-plates.jpg",
    url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1400&q=80",
    photographer: "Joseph Gonzalez",
    photographerUrl: "https://unsplash.com/@miracletwentyone",
  },
];

export const unsplashAttributions = Array.from(
  new Map(
    luxImages.map((img) => [
      img.photographerUrl,
      { name: img.photographer, url: img.photographerUrl },
    ])
  ).values()
);
