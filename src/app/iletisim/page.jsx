import Contact from "../../components/sections/Contact/Contact";

// 1. DÖNÜŞÜM ODAKLI TEKNİK SEO (Metadata, OpenGraph ve Twitter Card)
export const metadata = {
  // Satın alma niyetini (Teklif Al) ve lokasyonu (Bursa) doğrudan birleştiren başlık
  title: "İletişim & Teklif Al | Hexa Dijital - Bursa Tasarım ve Yazılım",

  // Harekete geçirici mesaj (CTA) içeren güçlü bir açıklama
  description:
    "Fütüristik web projeleriniz, mobil uygulamalarınız veya marka kimliğiniz için Hexa Dijital ile iletişime geçin. Hemen teklif alın ve dijital dönüşümünüzü başlatın.",

  keywords: [
    "bursa yazılım ajansı iletişim",
    "bursa web tasarım fiyat al",
    "dijital ajans teklif",
    "hexa dijital iletişim",
    "bursa reklam ajansı iletişim",
    "yazılım projesi fiyatlandırma",
  ],

  alternates: {
    canonical: "https://hexadijital.com/iletisim",
  },

  // Link paylaşıldığında güven verecek sosyal medya kartviziti
  openGraph: {
    title: "İletişim & Teklif Al | Hexa Dijital",
    description:
      "Projeniz için bir toplantı planlayın veya anında teklif alın.",
    url: "https://hexadijital.com/iletisim",
    siteName: "Hexa Dijital",
    images: [
      {
        url: "https://hexadijital.com/assets/logos/hexa_logo.svg",
        width: 1200,
        height: 630,
        alt: "Hexa Dijital İletişim",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "İletişim & Teklif Al | Hexa Dijital",
    description:
      "Projeniz için bir toplantı planlayın veya anında teklif alın.",
    images: ["https://hexadijital.com/assets/logos/hexa_logo.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  // 2. GOOGLE BOTLARI İÇİN "CONTACT PAGE" ŞEMASI
  // Bu şema, Google'a "Burası bizim resmi iletişim merkezimizdir" der ve
  // arama sonuçlarında (sitelinks) doğrudan "İletişim" butonu çıkma ihtimalini artırır.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Hexa Dijital İletişim ve Teklif Sayfası",
    description:
      "Hexa Dijital ile iletişime geçin, fütüristik dijital çözümler için teklif alın.",
    url: "https://hexadijital.com/iletisim",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "Hexa Dijital",
      telephone: "+905537161958",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bursa",
        addressCountry: "TR",
      },
    },
  };

  return (
    <>
      {/* Gizli İletişim Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Contact />
    </>
  );
}
