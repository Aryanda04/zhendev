import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhendev-nu.vercel.app";

export const metadata: Metadata = {
  title: "Portofolio & Hasil Karya Website | Zhen Dev Tanjungpandan Belitung",
  description:
    "Jelajahi hasil karya dan portofolio website terbaik buatan Zhen Dev di Tanjungpandan, Belitung: kelolamasjid.com, NinaShop, dan Rizky Organizer.",
  keywords: [
    "portofolio website belitung",
    "hasil karya website zhen dev",
    "contoh website tanjungpandan",
    "web developer portofolio belitung",
    "jasa website kelolamasjid ninashop rizky organizer",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Portofolio & Hasil Karya Website | Zhen Dev",
    description:
      "Showcase website dan platform digital buatan Zhen Dev di Tanjungpandan, Belitung.",
    url: `${siteUrl}/work`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Portofolio Zhen Dev Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio & Hasil Karya Website | Zhen Dev",
    description: "Showcase website dan platform digital buatan Zhen Dev di Tanjungpandan, Belitung.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
