import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Romy Tielens | Psycholoog Hasselt",
    template: "%s | Romy Tielens",
  },
  description:
    "Klinisch psycholoog en integratief psychotherapeut in Hasselt. Begeleiding bij angst, depressie, burn-out, trauma, perfectionisme en meer. Zorgpraktijk Kadans.",
  keywords: [
    "psycholoog Hasselt",
    "psychotherapeut Hasselt",
    "klinisch psycholoog",
    "integratieve psychotherapie",
    "angst",
    "depressie",
    "burn-out",
    "trauma",
    "schematherapie",
    "psycholoog Limburg",
    "eerstelijnspsychologie",
    "kPNI",
    "orthomoleculair",
  ],
  openGraph: {
    title: "Romy Tielens | Psycholoog Hasselt",
    description:
      "Klinisch psycholoog en integratief psychotherapeut in Hasselt. Begeleiding bij angst, depressie, burn-out, trauma en meer.",
    images: ["/romy.jpg"],
    locale: "nl_BE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for SEO + GEO (AI search)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PsychologicalTreatment",
  name: "Romy Tielens — Psycholoog & Psychotherapeut",
  description:
    "Klinisch psycholoog en integratief psychotherapeut. Begeleiding bij angst, depressie, burn-out, trauma, perfectionisme, hoogsensitiviteit en meer.",
  provider: {
    "@type": "Person",
    name: "Romy Tielens",
    jobTitle: "Klinisch psycholoog & integratief psychotherapeut",
    telephone: "+32497605892",
    email: "romy@praktijkkadans.be",
    image: "/romy.jpg",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "KU Leuven" },
      { "@type": "CollegeOrUniversity", name: "Universiteit Antwerpen" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Visumnummer",
        recognizedBy: { "@type": "Organization", name: "FOD Volksgezondheid" },
        identifier: "261431",
      },
    ],
    knowsLanguage: ["nl", "en"],
  },
  location: [
    {
      "@type": "Place",
      name: "Zorgpraktijk Kadans",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kempische Steenweg 565",
        addressLocality: "Hasselt",
        postalCode: "3500",
        addressCountry: "BE",
      },
    },
    {
      "@type": "Place",
      name: "Jessa Ziekenhuis",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Guffenslaan",
        addressLocality: "Hasselt",
        postalCode: "3500",
        addressCountry: "BE",
      },
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.93, longitude: 5.34 },
    geoRadius: "30000",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online sessie via videogesprek",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Individueel gesprek",
      price: "75",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Eerstelijnspsychologie (ELP)",
      price: "85",
      priceCurrency: "EUR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
