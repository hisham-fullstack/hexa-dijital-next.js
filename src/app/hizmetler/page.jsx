import Services from "../../components/sections/Services/Services";
import { servicesData } from "@/data/servicesData";

// 1. TEKNİK SEO MOTORU (Metadata, OpenGraph ve Twitter Card)
export const metadata = {
  title: "Dijital Hizmetlerimiz | Hexa Dijital - Bursa Web Tasarım & Yazılım",
  description:
    "Hexa Dijital'in premium hizmetleriyle tanışın: Özel web yazılımları (Next.js & Laravel), mobil uygulama geliştirme, UI/UX tasarımı ve SEO çözümleri.",
  keywords: [
    "bursa web yazılım",
    "kurumsal web tasarım bursa",
    "mobil uygulama geliştirme bursa",
    "premium ui ux tasarımı",
    "bursa seo hizmeti",
    "e-ticaret sitesi bursa",
    "özel yazılım çözümleri",
    "hexa dijital hizmetler",
  ],
  alternates: {
    canonical: "https://hexadijital.com/hizmetler",
  },
  openGraph: {
    title: "Dijital Hizmetlerimiz | Hexa Dijital - Bursa Web Tasarım & Yazılım",
    description:
      "Özel web yazılımları, premium UI/UX tasarımı, otonom SaaS ürünleri ve mobil çözümlerimizle markanızı geleceğe taşıyın.",
    url: "https://hexadijital.com/hizmetler",
    siteName: "Hexa Dijital",
    images: [
      {
        url: "https://hexadijital.com/assets/logos/hexa_logo.svg",
        width: 1200,
        height: 630,
        alt: "Hexa Dijital Hizmetler",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  // EKSİK 1 GİDERİLDİ: Twitter / X Sosyal Paylaşım Kartı Optimizasyonu
  twitter: {
    card: "summary_large_image",
    title: "Dijital Hizmetlerimiz | Hexa Dijital",
    description:
      "Özel web yazılımları, premium UI/UX tasarımı, otonom SaaS ürünleri ve fütüristik mobil çözümlerimizle tanışın.",
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

// 2. SAYFA BİLEŞENİ VE MASTER KATALOG JSON-LD ENTEGRASYONU
export default function ServicesPage() {
  // EKSİK 2 GİDERİLDİ: Google'ın tüm ana kulvarları şema mimarisiyle okuması için ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hexa Dijital Kurumsal Çözümler ve Hizmet Kataloğu",
    description:
      "Kurumsal Kimlik, Reklam, Web Geliştirme, Mobil Çözümler, İşletme Otomasyonu ve Yapay Zeka Sistemleri.",
    url: "https://hexadijital.com/hizmetler",
    numberOfItems: servicesData.length,
    itemListElement: servicesData.map((cat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: cat.title,
      description: cat.description,
    })),
  };

  return (
    <>
      {/* Master Hizmet Şeması Yapısı */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Services />
    </>
  );
}
