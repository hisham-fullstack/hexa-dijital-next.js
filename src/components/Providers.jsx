"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes"; // YENİ: Next.js uyumlu tema yöneticisi
import { CartProvider } from "../context/CartContext";
import Lenis from "@studio-freight/lenis";

export default function Providers({ children }) {
  // Lenis Smooth Scroll Motoru (Dokunulmadı, kusursuz çalışmaya devam edecek)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    // Eski manuel ThemeContext yerine Next.js uyumlu ThemeProvider kullanıyoruz
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      // globals.css dosyanızdaki sınıf ismine (theme-inverted) göre paketi ayarlıyoruz
      value={{
        light: "theme-inverted",
        dark: "dark",
      }}
    >
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
