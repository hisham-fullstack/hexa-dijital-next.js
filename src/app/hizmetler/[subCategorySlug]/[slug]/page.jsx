// src/app/hizmetler/[subCategorySlug]/[slug]/page.jsx (Dosya yolun)

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

  // YENİ: servicesData'daki 'seoTitle' ve 'seoKeywords' alanlarını doğrudan Google'a veriyoruz
  const pageTitle =
    serviceItem.seoTitle || `Bursa ${serviceItem.name} | Hexa Dijital`;

  // Eğer özel seoKeywords yazılmışsa onu al, yoksa otomatik oluştur
  const pageKeywords = serviceItem.seoKeywords || [
    `bursa ${serviceItem.name.toLowerCase()}`,
    `${parentCategory.title.toLowerCase()} bursa`,
    "hexa dijital bursa",
    "bursa dijital dönüşüm",
  ];

  return {
    title: pageTitle,
    description: serviceItem.description,
    keywords: pageKeywords,
    alternates: {
      canonical: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: serviceItem.introText,
      url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
      siteName: "Hexa Dijital",
      images: [
        {
          url: `https://hexadijital.com${serviceItem.image}`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: serviceItem.introText,
      images: [`https://hexadijital.com${serviceItem.image}`],
    },
  };
}

// 2. SAYFA BİLEŞENİ VE DİNAMİK JSON-LD ENTEGRASYONU
export default function ServiceDetailPage({ params }) {
  const { subCategorySlug, slug } = params;

  let serviceItem = null;

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

  // JSON-LD (Yapay Zeka Şeması) için de Bursa odaklı SEO ismini kullanıyoruz
  const schemaName = serviceItem?.seoTitle
    ? serviceItem.seoTitle.split(" |")[0]
    : `Bursa ${serviceItem?.name}`;

  const jsonLd = serviceItem
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: schemaName,
        description: serviceItem.description,
        provider: {
          "@type": "ProfessionalService",
          name: "Hexa Dijital",
          url: "https://hexadijital.com",
        },
        url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
        image: `https://hexadijital.com${serviceItem.image}`,
        ...(serviceItem.price &&
        serviceItem.price !== "Fiyat Alın" &&
        serviceItem.price !== ""
          ? {
              offers: {
                "@type": "Offer",
                price: serviceItem.price.replace(".", ""),
                priceCurrency: "TRY",
                url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${slug}`,
              },
            }
          : {}),
      }
    : null;

  return (
    <>
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
