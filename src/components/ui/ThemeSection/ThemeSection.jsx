import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSection = ({ children, setGlobalTheme, className = "" }) => {
  const sectionRef = useRef(null);
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Eğer bu bölüm ekranın %50'sini (threshold: 0.5) kaplıyorsa
        if (entry.isIntersecting) {
          setTheme(setGlobalTheme); // Temayı bu bölümün istediği temaya çevir
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Bölümün yarısı ekrana girince tetiklenir
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setGlobalTheme, setTheme]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ThemeSection;
