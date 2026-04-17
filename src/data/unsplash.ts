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
  {
    key: "neighborhoodStreet",
    filename: "neighborhood-street.jpg",
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
    photographer: "Dino Reichmuth",
    photographerUrl: "https://unsplash.com/@dinoreichmuth",
  },
  {
    key: "ambientCoffee",
    filename: "ambient-coffee.jpg",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    photographer: "Nathan Dumlao",
    photographerUrl: "https://unsplash.com/@nate_dumlao",
  },
  {
    key: "ambientBanquette",
    filename: "ambient-banquette.jpg",
    url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80",
    photographer: "Patrick Tomasso",
    photographerUrl: "https://unsplash.com/@impatrickt",
  },
  {
    key: "ambientSign",
    filename: "ambient-sign.jpg",
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1000&q=80",
    photographer: "Tim Mossholder",
    photographerUrl: "https://unsplash.com/@timmossholder",
  },
  {
    key: "staffPortrait",
    filename: "staff-portrait.jpg",
    url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1400&q=80",
    photographer: "Petr Sevcovic",
    photographerUrl: "https://unsplash.com/@sevcovic23",
  },
  {
    key: "purveyorGrain",
    filename: "purveyor-grain.jpg",
    url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
    photographer: "Melissa Askew",
    photographerUrl: "https://unsplash.com/@melissaaskew",
  },
  {
    key: "purveyorSausage",
    filename: "purveyor-sausage.jpg",
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    photographer: "José Ignacio Pompé",
    photographerUrl: "https://unsplash.com/@jipope",
  },
  {
    key: "purveyorBread",
    filename: "purveyor-bread.jpg",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    photographer: "Monika Grabkowska",
    photographerUrl: "https://unsplash.com/@moniqa",
  },
  {
    key: "purveyorProduce",
    filename: "purveyor-produce.jpg",
    url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    photographer: "Shelley Pauls",
    photographerUrl: "https://unsplash.com/@shelleypauls",
  },
  {
    key: "purveyorEggs",
    filename: "purveyor-eggs.jpg",
    url: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=1200&q=80",
    photographer: "Ergita Sela",
    photographerUrl: "https://unsplash.com/@ergitas14",
  },
  {
    key: "purveyorFarm",
    filename: "purveyor-farm.jpg",
    url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    photographer: "Jan Kopřiva",
    photographerUrl: "https://unsplash.com/@jxk",
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
