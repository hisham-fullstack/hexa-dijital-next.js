"use client";

import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "../context/CartContext";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation"; // 1. Yönlendirmeyi dinlemek için ekledik

export default function Providers({ children }) {
  const lenisRef = useRef(null); // 2. Lenis motorunu hafızada tutmak için Referans oluşturduk
  const pathname = usePathname(); // 3. Mevcut sayfa yolunu alıyoruz

  // Lenis Başlatma Motoru
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis; // Lenis'i referansa kaydet

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 4. ASIL ÇÖZÜM: URL (pathname) her değiştiğinde Lenis'e "hemen en üste çık" diyoruz
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      value={{
        light: "theme-inverted",
        dark: "dark",
      }}
    >
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
