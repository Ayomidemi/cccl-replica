import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "LICF",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-192.png`,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [
      SOCIAL.x,
      SOCIAL.instagram,
      SOCIAL.tiktok,
      SOCIAL.youtube,
      SOCIAL.facebook,
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Chess in Slums Africa",
    },
  };

  const event = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Lagos, Nigeria",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Chess in Slums Africa",
      url: "https://chessinslums.org",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
      />
    </>
  );
}
