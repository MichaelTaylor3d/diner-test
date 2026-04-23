import { siteMeta } from "@/data/site";

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMeta.name,
    url: siteMeta.url,
    description: siteMeta.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteMeta.name,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
