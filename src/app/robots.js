export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Eğer ileride bir admin paneli yaparsan, Google'ın girmesini istemediğin yerleri buraya yazarsın
      // disallow: "/admin/",
    },
    sitemap: "https://hexadijital.com/sitemap.xml",
  };
}
