import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://romytielens.be"),
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

// JSON-LD: LocalBusiness + PsychologicalTreatment for Google local pack + AI search
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: "Romy Tielens — Psycholoog & Psychotherapeut",
    url: "https://romytielens.be",
    description:
      "Klinisch psycholoog en integratief psychotherapeut in Hasselt. Begeleiding bij angst, depressie, burn-out, trauma, perfectionisme, hoogsensitiviteit en meer.",
    image: "https://romytielens.be/romy.jpg",
    telephone: "+32497605892",
    email: "romy@praktijkkadans.be",
    priceRange: "€75-€85",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kempische Steenweg 565",
      addressLocality: "Hasselt",
      postalCode: "3500",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9703,
      longitude: 5.3608,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "13:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.93, longitude: 5.34 },
      geoRadius: "30000",
    },
    founder: {
      "@type": "Person",
      name: "Romy Tielens",
      jobTitle: "Klinisch psycholoog & integratief psychotherapeut",
      knowsLanguage: ["nl", "en"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "KU Leuven" },
        { "@type": "CollegeOrUniversity", name: "Universiteit Antwerpen" },
        { "@type": "CollegeOrUniversity", name: "Hogeschool PXL" },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Visumnummer",
          recognizedBy: { "@type": "Organization", name: "FOD Volksgezondheid" },
          identifier: "261431",
        },
      ],
    },
    makesOffer: [
      { "@type": "Offer", name: "Individueel gesprek", price: "75", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Eerstelijnspsychologie (ELP)", price: "85", priceCurrency: "EUR" },
    ],
    sameAs: [
      "https://www.vind-een-psycholoog.be/psycholoog/romy-tielens-hasselt.html",
      "https://www.zorgpraktijkkadans.be",
    ],
  },
];

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
        {/* #12: Skip to content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-sage-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Ga naar inhoud
        </a>
        <Navigation />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
