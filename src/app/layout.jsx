import { ViewTransitions } from "next-view-transitions";
import Script from "next/script"; // Google Analytics için Script bileşeni
import { Space_Grotesk } from "next/font/google"; // EKSİK GİDERİLDİ: Font import edildi
import "./globals.css";
import Providers from "../components/Providers";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import CartBar from "../components/layout/CartBar/CartBar";
import Preloader from "../components/layout/Preloader/Preloader";

// Next.js Font Optimizasyonu
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space",
});

export const metadata = {
  title: "Hexa Dijital | Bursa Tasarım, Yazılım ve Reklam Ajansı",
  description:
    "Bursa'nın fütüristik tasarım, yazılım ve reklam ajansı Hexa Dijital. Web tasarım, mobil uygulama ve premium marka çözümleriyle dijitalde zirveye oynayın.",
  verification: {
    other: {
      "p:domain_verify": "ffb3a15647d59f50d37e03043eb6217a",
      "impact-site-verification": "9ed688cf-51c0-44f4-9761-d9d9cbd3e6c0",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hexa Dijital",
  url: "https://hexadijital.com",
  logo: "https://hexadijital.com/assets/logos/hexa_logo.svg",
  image: "https://hexadijital.com/assets/logos/hexa_logo.svg",
  description:
    "Bursa merkezli fütüristik web, mobil ve marka çözümleri üreten yeni nesil dijital ajans.",
  telephone: "+905537161958",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bursa",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "City", name: "Bursa" },
  ],
  sameAs: [
    "https://www.instagram.com/hexadijital",
    "https://www.linkedin.com/company/hexadijital",
  ],
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      {/* EKSİK GİDERİLDİ: next-themes için html etiketine suppressHydrationWarning eklendi */}
      <html lang="tr" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        {/* EKSİK GİDERİLDİ: spaceGrotesk fontu className olarak body'ye eklendi */}
        <body
          className={`${spaceGrotesk.className} ${spaceGrotesk.variable}`}
          suppressHydrationWarning
        >
          {/* Google Analytics Entegrasyonu */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-2C1CWMLDYY"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2C1CWMLDYY');
            `}
          </Script>

          <Providers>
            <Preloader />
            <div className="app-container">
              <Header />
              <CartBar />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
