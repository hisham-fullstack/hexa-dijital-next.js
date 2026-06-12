// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fiyat metinlerini ("5.000") sayıya (5000) çeviren yardımcı fonksiyon
  const parsePrice = (priceStr) => {
    if (!priceStr || priceStr === "Fiyat Alın") return 0;
    return parseInt(priceStr.replace(/\./g, ""), 10);
  };

  // Sepete ekleme fonksiyonu (Eğer zaten ekliyse uyarı dönebilir veya bişey yapmayabiliriz)
  const addToCart = (service) => {
    if (!cartItems.find((item) => item.slug === service.slug)) {
      setCartItems((prev) => [...prev, service]);
    }
  };

  const removeFromCart = (slug) => {
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const clearCart = () => setCartItems([]);

  // Fiyat ve İndirim Hesaplamaları
  const rawTotal = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price),
    0,
  );

  let discountPercentage = 0;
  if (cartItems.length === 2) discountPercentage = 10; // 2 ürüne %10 indirim
  if (cartItems.length >= 3) discountPercentage = 15; // 3+ ürüne %15 indirim

  const discountAmount = (rawTotal * discountPercentage) / 100;
  const finalTotal = rawTotal - discountAmount;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        rawTotal,
        discountPercentage,
        finalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
