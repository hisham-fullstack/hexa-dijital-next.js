import ProjectDetail from "@/components/sections/Projects/ProjectDetail";
import { projectsData } from "@/data/projectsData";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// 1. DİNAMİK SEO MOTORU (Metadata, OpenGraph ve Twitter Card)
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Veritabanımızdan URL'deki slug ile eşleşen projeyi buluyoruz
  const project = projectsData.find((p) => p.slug === slug);

  // Eğer proje yoksa varsayılan bir SEO döndür
  if (!project) {
    return { title: "Proje Bulunamadı | Hexa Dijital" };
  }

  // Google için nokta atışı vaka analizi başlığı
  const title = `${project.title} - Vaka Analizi | Hexa Dijital Bursa`;

  return {
    title,
    description: project.description,
    keywords: [
      project.title.toLowerCase(),
      project.client.toLowerCase(),
      `${project.category.toLowerCase()} bursa`,
      "vaka analizi",
      "hexa dijital projeler",
      "bursa yazılım ajansı portfolyo",
    ].filter(Boolean),
    alternates: {
      canonical: `https://hexadijital.com/projeler/${slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      url: `https://hexadijital.com/projeler/${slug}`,
      siteName: "Hexa Dijital",
      images: [
        {
          // LinkedIn/WhatsApp paylaşımlarında projenin o göz alıcı kapağı çıkacak
          url: `https://hexadijital.com${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - Hexa Dijital Projesi`,
        },
      ],
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [`https://hexadijital.com${project.image}`],
    },
  };
}

// 2. SAYFA BİLEŞENİ VE DİNAMİK VAKA ANALİZİ (ARTICLE) ŞEMASI
export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  // Google Botları için "Vaka Analizi" Makale Şeması
  const jsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${project.title} - Dijital Dönüşüm Vaka Analizi`,
        description: project.description,
        image: `https://hexadijital.com${project.image}`,
        author: {
          "@type": "Organization",
          name: "Hexa Dijital",
          url: "https://hexadijital.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Hexa Dijital",
          logo: {
            "@type": "ImageObject",
            url: "https://hexadijital.com/assets/logos/hexa_logo.svg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://hexadijital.com/projeler/${slug}`,
        },
        // SEO BOMBASI: Projenin problemi ve çözümünü direkt Google'a okutuyoruz
        articleBody: `${project.challenge} ${project.solution}`,
      }
    : null;

  return (
    <>
      {/* Gizli Makale Şeması */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <ProjectDetail />
    </>
  );
}
