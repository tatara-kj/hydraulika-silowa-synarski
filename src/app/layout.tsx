import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from "next/font/google";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-plex-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hydraulika siłowa Świebodzin | Seweryn Synarski",
    template: "%s | Seweryn Synarski",
  },
  description:
    "Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników hydraulicznych w Lubinicku koło Świebodzina. Zadzwoń: 695 751 002.",
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: siteConfig.name,
    title: "Hydraulika siłowa Świebodzin | Seweryn Synarski",
    description:
      "Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników hydraulicznych w Lubinicku koło Świebodzina.",
    url: "/",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1731,
        height: 909,
        alt: "Hydraulika Siłowa Seweryn Synarski — naprawa hydrauliki i siłowników",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulika siłowa Świebodzin | Seweryn Synarski",
    description:
      "Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników hydraulicznych.",
    images: [`${siteUrl}/og.png`],
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  url: siteUrl,
  telephone: "+48695751002",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    postalCode: "66-200",
    addressLocality: "Lubinicko",
    addressRegion: "lubuskie",
    addressCountry: "PL",
  },
  sameAs: [siteConfig.mapsUrl],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Potwierdzone usługi hydrauliki siłowej",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${siteUrl}${service.href.split("#")[0]}`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-offwhite-50 text-graphite-950 antialiased">
        <ScrollProgress />
        <a className="skip-link" href="#main-content">
          Przejdź do treści
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileContactBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
