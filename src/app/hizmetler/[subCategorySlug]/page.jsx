import SubCategoryDetail from "@/components/sections/Services/SubCategoryDetail";
import { servicesData } from "@/data/servicesData";

export function generateStaticParams() {
  const params = [];
  servicesData.forEach((cat) => {
    cat.subCategories.forEach((sub) => {
      params.push({ subCategorySlug: slugify(sub.title) });
    });
  });
  return params;
}

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
  let parentCategory = null;

  // URL'deki slug ile servicesData içindeki subCategories başlıklarını eşleştiriyoruz
  for (const cat of servicesData) {
    const sub = cat.subCategories.find(
      (s) => slugify(s.title) === subCategorySlug,
    );
    if (sub) {
      foundSubCategory = sub;
      parentCategory = cat;
      break;
    }
  }

  if (!foundSubCategory) {
    return { title: "Kategori Bulunamadı | Hexa Dijital" };
  }

  // BUZDAĞI TAKTİĞİ: Arayüzde "Web Siteleri" yazar, Google'da "Bursa Web Siteleri Ajansı" çıkar
  const title =
    foundSubCategory.seoTitle ||
    `Bursa ${foundSubCategory.title} Ajansı | Hexa Dijital`;

  const description =
    foundSubCategory.description || foundSubCategory.introText;
  const cleanHighlight = foundSubCategory.sloganHighlight
    ? foundSubCategory.sloganHighlight.replace(".", "")
    : "";

  // Arama motorları için nokta atışı mahalle/şehir odaklı anahtar kelimeler
  const keywords =
    foundSubCategory.seoKeywords ||
    [
      `bursa ${foundSubCategory.title.toLowerCase()}`,
      `bursa ${foundSubCategory.title.toLowerCase()} ajansı`,
      `${parentCategory?.title.toLowerCase()} bursa`,
      "bursa dijital ajans",
      "bursa tasarım ve yazılım",
      "hexa dijital bursa",
      cleanHighlight,
      ...(foundSubCategory.metaTags || []),
    ].filter(Boolean);

  return {
    title,
    description,
    keywords,
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
          alt: title, // Görsel isimleri bile SEO ile eşleştirildi
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
  const schemaName = foundSubCategory?.seoTitle
    ? foundSubCategory.seoTitle.split(" |")[0]
    : `Bursa ${foundSubCategory?.title} Hizmetleri`;

  const jsonLd = foundSubCategory
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: schemaName,
        description: foundSubCategory.description || foundSubCategory.introText,
        url: `https://hexadijital.com/hizmetler/${subCategorySlug}`,
        numberOfItems: foundSubCategory.items?.length || 0,
        // Dizin içindeki her bir alt hizmeti de Google'a "Bursa" başlığıyla bildiriyoruz
        itemListElement: foundSubCategory.items?.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.seoTitle
            ? item.seoTitle.split(" |")[0]
            : `Bursa ${item.name}`,
          url: `https://hexadijital.com/hizmetler/${subCategorySlug}/${item.slug}`,
        })),
      }
    : null;

  return (
    <>
      {/* Google Yapılandırılmış Veri Etiketi (Rich Snippets) */}
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
