import type { Metadata } from "next";
import { JetBrains_Mono, Geist, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { DotGrid } from "@/components/decorative/dot-grid";
import { siteMeta } from "@/lib/meta";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s — ${siteMeta.name}`,
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Nour Badr",
    "full-stack developer",
    "Next.js developer",
    "Shopify developer",
    "Zid developer",
    "AI agents",
    "healthcare platforms",
    "Cairo developer",
    "Egypt developer",
    "MENA developer",
    "freelance developer Cairo",
    "Shopify developer Saudi Arabia",
    "Zid developer KSA",
    "remote full-stack developer",
  ],
  authors: [{ name: siteMeta.name, url: siteMeta.url }],
  creator: siteMeta.name,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: "en_US",
    alternateLocale: ["ar_EG", "ar_SA", "ar_AE"],
  },
  other: {
    "geo.region": siteMeta.geo.regionCode,
    "geo.placename": siteMeta.geo.city,
    "geo.position": `${siteMeta.geo.latitude};${siteMeta.geo.longitude}`,
    ICBM: `${siteMeta.geo.latitude}, ${siteMeta.geo.longitude}`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: siteMeta.googleSiteVerification
    ? { google: siteMeta.googleSiteVerification }
    : undefined,
};

const areaServedNodes = siteMeta.areaServed.map((a) => ({
  "@type": "Country",
  name: a.name,
}));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteMeta.url}/#person`,
      name: siteMeta.name,
      url: siteMeta.url,
      email: `mailto:${siteMeta.email}`,
      jobTitle: siteMeta.jobTitle,
      description: siteMeta.description,
      image: `${siteMeta.url}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteMeta.geo.city,
        addressRegion: siteMeta.geo.region,
        addressCountry: siteMeta.geo.countryCode,
      },
      homeLocation: {
        "@type": "Place",
        name: `${siteMeta.geo.city}, ${siteMeta.geo.country}`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteMeta.geo.latitude,
          longitude: siteMeta.geo.longitude,
        },
      },
      knowsLanguage: ["en", "ar"],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Shopify",
        "Zid",
        "Hydrogen",
        "AI Agents",
        "RAG",
        "Healthcare Software",
        "Full-Stack Development",
      ],
      sameAs: [siteMeta.social.linkedin, siteMeta.social.github],
      workLocation: areaServedNodes,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteMeta.url}/#service`,
      name: `${siteMeta.name} — Independent Web Development`,
      url: siteMeta.url,
      image: `${siteMeta.url}/opengraph-image`,
      description: siteMeta.description,
      provider: { "@id": `${siteMeta.url}/#person` },
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteMeta.geo.city,
        addressRegion: siteMeta.geo.region,
        addressCountry: siteMeta.geo.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteMeta.geo.latitude,
        longitude: siteMeta.geo.longitude,
      },
      areaServed: areaServedNodes,
      serviceType: [
        "Full-Stack Web Development",
        "Next.js Development",
        "Shopify Theme Development",
        "Zid Storefront Development",
        "AI Agent Development",
        "Healthcare Platform Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteMeta.url}/#website`,
      url: siteMeta.url,
      name: siteMeta.name,
      description: siteMeta.description,
      inLanguage: "en",
      publisher: { "@id": `${siteMeta.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${geist.variable} ${instrumentSerif.variable}`}
    >
      <body
        className="relative min-h-screen bg-ink text-paper antialiased"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <DotGrid />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}