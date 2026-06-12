import SubCategoryDetail from "@/components/sections/Services/SubCategoryDetail";
import { servicesData } from "@/data/servicesData";

// URL'leri güvenli hale getiren yerel slugify fonksiyonu
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

// 1. DİNAMİK SEO MOTORU (Metadata, OpenGraph ve Twitter Card)
export async function generateMetadata({ params }) {
  const { subCategorySlug } = params;

  let foundSubCategory = null;

  // URL'deki slug ile servicesData içindeki subCategories başlıklarını eşleştiriyoruz
  for (const cat of servicesData) {
    const sub = cat.subCategories.find(
      (s) => slugify(s.title) === subCategorySlug,
    );
    if (sub) {
      foundSubCategory = sub;
      break;
    }
  }

  if (!foundSubCategory) {
    return { title: "Kategori Bulunamadı | Hexa Dijital" };
  }

  const title = `${foundSubCategory.title} Çözümleri | Hexa Dijital Bursa`;
  const description =
    foundSubCategory.description || foundSubCategory.introText;
  const cleanHighlight = foundSubCategory.sloganHighlight
    ? foundSubCategory.sloganHighlight.replace(".", "")
    : "";

  return {
    title,
    description,
    keywords: [
      `${foundSubCategory.title.toLowerCase()} bursa`,
      "bursa dijital ajans",
      "bursa tasarım ve yazılım",
      "hexa dijital bursa",
      cleanHighlight,
      ...(foundSubCategory.metaTags || []),
    ].filter(Boolean),
    alternates: {
      canonical: `https://hexadijital.com/hizmetler/${subCategorySlug}`,
    },
    openGraph: {
      title,
      description: foundSubCategory.introText,
      url: `https://hexadijital.com/hizmetler/${subCategorySlug}`,
      siteName: "Hexa Dijital",
      images: [
        {
          url: `https://hexadijital.com${foundSubCategory.image}`,
          width: 1200,
          height: 630,
          alt: `${foundSubCategory.title} - Hexa Dijital`,
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: foundSubCategory.introText,
      images: [`https://hexadijital.com${foundSubCategory.image}`],
    },
  };
}

// 2. SAYFA BİLEŞENİ VE DİNAMİK DIZIN JSON-LD ENTEGRASYONU
export default function SubCategoryPage({ params }) {
  const { subCategorySlug } = params;

  let foundSubCategory = null;

  for (const cat of servicesData) {
    const sub = cat.subCategories.find(
      (s) => slugify(s.title) === subCategorySlug,
    );
    if (sub) {
      foundSubCategory = sub;
      break;
    }
  }

  // Google Botları için Yapılandırılmış Dizin Haritası (ItemList)
  const jsonLd = foundSubCategory
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${foundSubCategory.title} Hizmet Paketi ve Çözümleri`,
        description: foundSubCategory.description,
        url: `https://hexadijital.com/hizmetler/${subCategorySlug}`,
        numberOfItems: foundSubCategory.items?.length || 0,
        itemListElement: foundSubCategory.items?.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${item.slug}`,
        })),
      }
    : null;

  return (
    <>
      {/* Google Yapılandırılmış Veri Etiketi */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <SubCategoryDetail />
    </>
  );
}
