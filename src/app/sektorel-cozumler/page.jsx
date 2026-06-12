import SectoralSolutions from "../../components/sections/Sectoral/SectoralSolutions";
import { sectoralData } from "@/data/sectoralData";

// 1. NİŞ PAZAR ODAKLI TEKNİK SEO (Metadata, OpenGraph ve Twitter Card)
export const metadata = {
  // Satın alma niyetini en üst düzeyde tutan, spesifik sektörleri hedefleyen başlık
  title: "Sektörel Dijital Çözümler | Hexa Dijital - Bursa Web Yazılım",

  // Hangi sektörlere çözüm ürettiğini Google'a net bir şekilde anlatan açıklama
  description:
    "Restoran, gayrimenkul, otel ve kliniklere özel atışa hazır dijital paketler. Sektörünüzün tüm yazılım, otomasyon ve tasarım ihtiyaçları tek pakette.",

  // Anahtar kelime cephaneliği: Uzun kuyruklu (Long-tail) ve dönüşüm oranı yüksek kelimeler
  keywords: [
    "sektörel yazılım çözümleri bursa",
    "restoran adisyon sistemi bursa",
    "gayrimenkul web sitesi yapan ajanslar",
    "otel rezervasyon yazılımı bursa",
    "güzellik merkezi randevu sistemi",
    "hexa dijital sektörel paketler",
    "bursa dijital dönüşüm",
  ],

  alternates: {
    canonical: "https://hexadijital.com/sektorel-cozumler",
  },

  openGraph: {
    title: "Sektörel Dijital Çözümler | Hexa Dijital - Bursa Web Yazılım",
    description:
      "Sektörünüze özel, atışa hazır dijital paketler. İhtiyacınız olan tüm silahları tek bir pakette birleştirdik.",
    url: "https://hexadijital.com/sektorel-cozumler",
    siteName: "Hexa Dijital",
    images: [
      {
        url: "https://hexadijital.com/assets/logos/hexa_logo.svg",
        width: 1200,
        height: 630,
        alt: "Hexa Dijital Sektörel Çözümler",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sektörel Dijital Çözümler | Hexa Dijital",
    description:
      "Restoran, gayrimenkul, otel ve kliniklere özel fütüristik dijital dönüşüm paketleri.",
    images: ["https://hexadijital.com/assets/logos/hexa_logo.svg"],
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
};

// 2. SAYFA BİLEŞENİ VE NİŞ SEKTÖR KATALOGU JSON-LD ENTEGRASYONU
export default function SectoralSolutionsPage() {
  // Google Botları için Sektörel Çözümler Listesi (ItemList) Şeması
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hexa Dijital Sektörel Yazılım ve Tasarım Çözümleri",
    description:
      "Farklı sektörlere özel olarak optimize edilmiş dijital dönüşüm, otomasyon ve web paketleri.",
    url: "https://hexadijital.com/sektorel-cozumler",
    numberOfItems: sectoralData.length,
    itemListElement: sectoralData.map((sector, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: sector.title,
      description: sector.description,
      // URL rotasını klasör yapına tam uyacak şekilde ayarladık
      url: `https://hexadijital.com/sektorel-cozumler/${sector.id}`,
    })),
  };

  return (
    <>
      {/* Sektörel Dizin Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectoralSolutions />
    </>
  );
}
