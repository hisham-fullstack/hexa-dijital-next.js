import React, { createContext, useState, useEffect } from "react";

// Context'i oluşturuyoruz
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Varsayılan karanlık tema (boş string, index.css :root'u kullanır)
  const [theme, setTheme] = useState("");

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "" ? "theme-inverted" : ""));
  };

  // Tema değiştiğinde HTML body etiketinin class'ını güncelliyoruz
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
