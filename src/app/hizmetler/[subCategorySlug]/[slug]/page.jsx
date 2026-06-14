import ServiceDetail from "@/components/sections/Services/ServiceDetail";
import { servicesData } from "@/data/servicesData";

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u")
    .replace(/[şŞ]/g, "s")
    .replace(/[ıİ]/g, "i")
    .replace(/[öÖ]/g, "o")
    .replace(/[çÇ]/g, "c")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-");
};

export function generateStaticParams() {
  const params = [];
  servicesData.forEach((cat) => {
    cat.subCategories.forEach((sub) => {
      const subCategorySlug = slugify(sub.title);
      sub.items.forEach((item) => {
        params.push({ subCategorySlug, slug: item.slug });
      });
    });
  });
  return params;
}

// 1. DİNAMİK SEO MOTORU (Metadata, OpenGraph ve Twitter Card)
export async function generateMetadata({ params }) {
  const { subCategorySlug, slug } = params;

  let serviceItem = null;
  let parentCategory = null;

  for (const cat of servicesData) {
    for (const sub of cat.subCategories) {
      const found = sub.items.find((item) => item.slug === slug);
      if (found) {
        serviceItem = found;
        parentCategory = sub;
        break;
      }
    }
    if (serviceItem) break;
  }

  if (!serviceItem) {
    return { title: "Hizmet Bulunamadı | Hexa Dijital" };
  }

  const cleanSlogan = serviceItem.sloganHighlight
    ? serviceItem.sloganHighlight.replace(".", "")
    : "";

  return {
    title: `${serviceItem.name} | Hexa Dijital Bursa`,
    description: serviceItem.description,
    keywords: [
      `${serviceItem.name.toLowerCase()} bursa`,
      `${parentCategory.title.toLowerCase()} ajansı`,
      "hexa dijital bursa",
      "bursa dijital dönüşüm",
      cleanSlogan,
    ].filter(Boolean),
    alternates: {
      canonical: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
    },
    openGraph: {
      title: `${serviceItem.heroTitle1} ${serviceItem.heroTitle2} | Hexa Dijital`,
      description: serviceItem.introText,
      url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
      siteName: "Hexa Dijital",
      images: [
        {
          url: `https://hexadijital.com${serviceItem.image}`,
          width: 1200,
          height: 630,
          alt: `${serviceItem.name} - Hexa Dijital`,
        },
      ],
      locale: "tr_TR",
      type: "article",
    },
    // EKSİK 1 GİDERİLDİ: Twitter (X) Özel Paylaşım Kartı (Büyük Görsel Destekli)
    twitter: {
      card: "summary_large_image",
      title: `${serviceItem.name} | Hexa Dijital`,
      description: serviceItem.introText,
      images: [`https://hexadijital.com${serviceItem.image}`],
    },
  };
}

// 2. SAYFA BİLEŞENİ VE DİNAMİK JSON-LD ENTEGRASYONU
export default function ServiceDetailPage({ params }) {
  const { subCategorySlug, slug } = params;

  let serviceItem = null;

  // JSON-LD için veriyi bileşen içinde tekrar buluyoruz (Next.js bunu cache'lediği için performans kaybı sıfırdır)
  for (const cat of servicesData) {
    for (const sub of cat.subCategories) {
      const found = sub.items.find((item) => item.slug === slug);
      if (found) {
        serviceItem = found;
        break;
      }
    }
    if (serviceItem) break;
  }

  // EKSİK 2 GİDERİLDİ: Sadece bu hizmete özel Google Zengin Sonuç (Rich Snippet) Şeması
  const jsonLd = serviceItem
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceItem.name,
        description: serviceItem.description,
        provider: {
          "@type": "ProfessionalService",
          name: "Hexa Dijital",
          url: "https://hexadijital.com",
        },
        url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
        image: `https://hexadijital.com${serviceItem.image}`,
        // Eğer veritabanında net bir fiyat yazıyorsa (Örn: 5.000) bunu Google'a fiyat olarak ("Offer") bildiririz.
        // Fiyat "Fiyat Alın" veya boş ise bu kısmı eklemez, hata verdirtmez.
        ...(serviceItem.price &&
        serviceItem.price !== "Fiyat Alın" &&
        serviceItem.price !== ""
          ? {
              offers: {
                "@type": "Offer",
                price: serviceItem.price.replace(".", ""), // Google sayıları düz ister: 5.000 -> 5000
                priceCurrency: "TRY",
                url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
              },
            }
          : {}),
      }
    : null;

  return (
    <>
      {/* JSON-LD Script'ini HTML kodlarının arkasına gizlice basıyoruz */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <ServiceDetail />
    </>
  );
}
