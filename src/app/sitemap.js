import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";
import { sectoralData } from "@/data/sectoralData";

// URL'leri güvenli hale getiren slugify fonksiyonu (CartBar'daki ile aynı)
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

export default async function sitemap() {
  const baseUrl = "https://hexadijital.com";

  // 1. STATİK SAYFALAR
  const staticRoutes = [
    "",
    "/hizmetler",
    "/projeler",
    "/iletisim",
    "/sektorel-cozumler",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. DİNAMİK HİZMET SAYFALARI (servicesData.js içinden)
  const serviceRoutes = [];
  servicesData.forEach((cat) => {
    cat.subCategories.forEach((sub) => {
      const subCategorySlug = slugify(sub.title);

      // YENİ EKLENEN: Alt Kategori Dizin Sayfası (Örn: /hizmetler/marka-tasarim)
      serviceRoutes.push({
        url: `${baseUrl}/hizmetler/${subCategorySlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9, // Dizin sayfaları çok önemli
      });

      // Uç Hizmet Sayfaları (Örn: /hizmetler/marka-tasarim/logo-tasarimi)
      sub.items.forEach((item) => {
        serviceRoutes.push({
          url: `${baseUrl}/hizmetler/${subCategorySlug}/${item.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      });
    });
  });

  // 3. DİNAMİK PROJE SAYFALARI (projectsData.js içinden)
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. DİNAMİK SEKTÖR SAYFALARI (sectoralData.js içinden)
  const sectoralRoutes = sectoralData.map((sector) => ({
    url: `${baseUrl}/sektorel-cozumler/${sector.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Tüm rotaları birleştirip Google'a sunuyoruz
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...sectoralRoutes,
  ];
}
