import { siteMeta } from "@/data/site";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.name,
    url: siteMeta.url,
    logo: `${siteMeta.url}/favicon.ico`,
    sameAs: siteMeta.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMeta.telephone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["en"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
