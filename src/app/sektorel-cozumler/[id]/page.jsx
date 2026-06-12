import SectoralDetail from "@/components/sections/Sectoral/SectoralDetail";
import { sectoralData } from "@/data/sectoralData";

// 1. DİNAMİK NİŞ SEO MOTORU (Metadata, OpenGraph ve Twitter Card)
export async function generateMetadata({ params }) {
  const { id } = params;

  // URL'den gelen ID ile sektörü buluyoruz (Örn: "restoran-kafe")
  const sector = sectoralData.find((s) => s.id === id);

  if (!sector) {
    return { title: "Sektörel Çözümler | Hexa Dijital" };
  }

  const title = `${sector.title} Dijital Çözümleri | Hexa Dijital Bursa`;
  const description = sector.description;

  // Veritabanındaki ağrı noktalarının başlıklarını SEO kelimesine dönüştürüyoruz
  const painPointKeywords = sector.painPoints
    ? sector.painPoints.map((p) => p.title.toLowerCase())
    : [];

  return {
    title,
    description,
    keywords: [
      `bursa ${sector.title.toLowerCase()} web tasarım`,
      `${sector.title.toLowerCase()} dijital pazarlama ajansı`,
      `${sector.title.toLowerCase()} yazılım çözümleri`,
      "hexa dijital bursa",
      ...painPointKeywords, // "kayıp komisyonlar", "sonsuz telefon trafiği" gibi nokta atışı kelimeler
    ].filter(Boolean),
    alternates: {
      canonical: `https://hexadijital.com/sektorel-cozumler/${id}`,
    },
    openGraph: {
      title: `${sector.title} - ${sector.subtitle}`,
      description: sector.introText,
      url: `https://hexadijital.com/sektorel-cozumler/${id}`,
      siteName: "Hexa Dijital",
      images: [
        {
          url: `https://hexadijital.com${sector.bgImage}`,
          width: 1200,
          height: 630,
          alt: `${sector.title} Çözümleri - Hexa Dijital`,
        },
      ],
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${sector.title} | Hexa Dijital`,
      description: sector.introText,
      images: [`https://hexadijital.com${sector.bgImage}`],
    },
  };
}

// 2. SAYFA BİLEŞENİ VE DİNAMİK FAQ + SERVICE JSON-LD ENTEGRASYONU
export default function SectoralDetailPage({ params }) {
  const { id } = params;
  const sector = sectoralData.find((s) => s.id === id);

  // 2.A: Google Botları için "Hizmet ve Hedef Kitle" Şeması
  const serviceJsonLd = sector
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${sector.title} Sektörü İçin Dijital Dönüşüm`,
        description: sector.introText,
        provider: {
          "@type": "ProfessionalService",
          name: "Hexa Dijital",
          url: "https://hexadijital.com",
        },
        audience: {
          "@type": "Audience",
          audienceType: sector.title, // "Bu hizmet kime yönelik?" sorusunu Google'a netleştiriyoruz
        },
        url: `https://hexadijital.com/sektorel-cozumler/${id}`,
        image: `https://hexadijital.com${sector.bgImage}`,
      }
    : null;

  // 2.B: SEO BOMBASI: Sektördeki Ağrı Noktalarını FAQ (Sıkça Sorulan Sorular) Şemasına Çevirme
  const faqJsonLd =
    sector && sector.painPoints && sector.painPoints.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sector.painPoints.map((point) => ({
            "@type": "Question",
            name: `${sector.title} Sektöründe "${point.title}" Sorununu Nasıl Çözüyoruz?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: point.desc,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Gizli Service Şeması */}
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}

      {/* Gizli FAQ Şeması (Arama Sonuçlarında Dev Görünüm İçin) */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <SectoralDetail />
    </>
  );
}
