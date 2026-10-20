import type { Metadata } from "next";

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
    url: "/work",
    type: "website",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
