import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhendev-nu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jasa Pembuatan Website Tanjungpandan Belitung | Zhen Dev",
    template: "%s | Zhen Dev Software House",
  },
  description:
    "Jasa pembuatan website profesional di Tanjungpandan, Belitung. Melayani pembuatan website UMKM, company profile bisnis, toko online, sistem manajemen, dan aplikasi web modern yang cepat, responsif, dan SEO-friendly.",
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan website tanjungpandan",
    "jasa pembuatan website belitung",
    "jasa pembuatan website tanjungpandan belitung",
    "jasa bikin website belitung",
    "jasa website tanjungpandan",
    "web developer tanjungpandan",
    "web developer belitung",
    "software house belitung",
    "software house tanjungpandan",
    "jasa website toko online belitung",
    "jasa web umkm belitung",
    "jasa website murah tanjungpandan",
    "jasa pembuatan website profesional",
    "bikin web belitung",
    "zhen dev",
    "zhen dev software house",
  ],
  authors: [{ name: "Zhen Dev", url: siteUrl }],
  creator: "Zhen Dev",
  publisher: "Zhen Dev Software House",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Zhen Dev Software House",
    title: "Jasa Pembuatan Website Tanjungpandan Belitung | Zhen Dev",
    description:
      "Jasa pembuatan website profesional di Tanjungpandan, Belitung. Website modern, responsif, cepat, dan siap mendongkrak bisnis Anda ke tingkat berikutnya.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Zhen Dev Software House - Jasa Pembuatan Website Tanjungpandan Belitung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Tanjungpandan Belitung | Zhen Dev",
    description:
      "Jasa pembuatan website modern & software house di Tanjungpandan, Belitung. Konsultasi langsung via WhatsApp!",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ID-BB",
    "geo.placename": "Tanjungpandan, Belitung",
    "geo.position": "-2.7383;107.6366",
    "ICBM": "-2.7383, 107.6366",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zhen Dev Software House",
  alternateName: ["Zhen Dev", "Jasa Pembuatan Website Belitung"],
  image: `${siteUrl}/kelolamasjid.png`,
  url: siteUrl,
  telephone: "+6281272374141",
  priceRange: "Rp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tanjungpandan",
    addressRegion: "Kepulauan Bangka Belitung",
    postalCode: "33411",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.7383,
    longitude: 107.6366,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },
  description:
    "Jasa pembuatan website profesional, toko online, company profile, dan aplikasi web modern di Tanjungpandan, Belitung.",
  areaServed: [
    { "@type": "City", name: "Tanjungpandan" },
    { "@type": "AdministrativeArea", name: "Belitung" },
    { "@type": "AdministrativeArea", name: "Belitung Timur" },
    { "@type": "AdministrativeArea", name: "Kepulauan Bangka Belitung" },
    { "@type": "Country", name: "Indonesia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Pembuatan Website",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Website Company Profile",
          description: "Pembuatan website profil perusahaan modern dan profesional untuk meningkatkan kredibilitas bisnis.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Toko Online & E-Commerce",
          description: "Website e-commerce katalog produk lengkap dengan sistem pemesanan langsung terintegrasi WhatsApp.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Pembuatan Web App & Sistem Kustom",
          description: "Pengembangan sistem manajemen, portal informasi, dan aplikasi web berbasis Next.js dan React.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
