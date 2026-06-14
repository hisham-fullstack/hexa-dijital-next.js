// Bu satır Next.js'e bu dosyanın statik olarak derlenmesi gerektiğini söyler
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hexadijital.com/sitemap.xml",
  };
}
