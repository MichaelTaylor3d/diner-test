import { siteMeta } from "@/data/site";

const dayMap: Record<string, string> = {
  Sunday: "Su",
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
};

function formatHours(h: typeof siteMeta.hours[number]): string {
  return `${dayMap[h.day]} ${h.open}-${h.close}`;
}

export function RestaurantSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteMeta.name,
    url: siteMeta.url,
    description: siteMeta.description,
    image: `${siteMeta.url}/images/home.jpg`,
    logo: `${siteMeta.url}/images/home.jpg`,
    telephone: siteMeta.telephone,
    priceRange: siteMeta.priceRange,
    servesCuisine: siteMeta.cuisines,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMeta.address.street,
      addressLocality: siteMeta.address.locality,
      addressRegion: siteMeta.address.region,
      postalCode: siteMeta.address.postalCode,
      addressCountry: siteMeta.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteMeta.geo.latitude,
      longitude: siteMeta.geo.longitude,
    },
    openingHours: siteMeta.hours.map(formatHours),
    sameAs: siteMeta.sameAs,
    hasMenu: `${siteMeta.url}/menu`,
    acceptsReservations: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
