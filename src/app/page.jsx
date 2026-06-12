import Home from "../components/Sections/Home/Home";

export const metadata = {
  // 1. Arama Sonuçlarında Doğrudan Bursa Piyasasını Bloke Eden Öldürücü Başlık
  title: "Hexa Dijital | Bursa Tasarım, Yazılım ve Reklam Ajansı",

  // 2. Tıklama Oranını (CTR) Uçuracak, Bol Aksiyon Kelimeli Meta Açıklaması
  description:
    "Bursa'nın fütüristik tasarım, yazılım ve reklam ajansı Hexa Dijital. Web tasarım, mobil uygulama, SEO ve premium dijital marka çözümleriyle zirveye oynayın.",

  // 3. Google Botlarına Sayfanın Odak Noktasını Gösteren Kelime Dizini
  keywords: [
    "bursa web tasarım",
    "bursa yazılım şirketi",
    "bursa reklam ajansı",
    "bursa dijital ajans",
    "bursa mobil uygulama",
    "bursa seo ajansı",
    "web tasarım bursa",
    "hexa dijital",
  ],

  // 4. Yinelenen İçerik (Duplicate Content) Hatalarını Önleyen Yapı
  alternates: {
    canonical: "https://hexadijital.com",
  },

  // 5. Sosyal Medyada (LinkedIn, Instagram, WhatsApp) Paylaşıldığında Premium Görünüm Sağlayan Grafik Kartı
  openGraph: {
    title: "Hexa Dijital | Bursa Tasarım, Yazılım ve Reklam Ajansı",
    description:
      "Web tasarım, mobil uygulama ve premium marka çözümleriyle dijitalde zirveye oynayın.",
    url: "https://hexadijital.com",
    siteName: "Hexa Dijital",
    images: [
      {
        url: "https://hexadijital.com/assets/logos/hexa_logo.svg", // Paylaşımlarda görünecek logo/görsel yolu
        width: 1200,
        height: 630,
        alt: "Hexa Dijital",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  // 6. Google ve Diğer Arama Motoru Botlarına Agresif Tarama İzinleri
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

export default function HomePage() {
  return <Home />;
}
