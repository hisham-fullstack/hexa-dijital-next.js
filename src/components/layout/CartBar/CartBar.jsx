// src/components/CartBar/CartBar.jsx
"use client";

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../../context/CartContext";
import { servicesData } from "../../../data/servicesData";
import { ChevronUp, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import "./CartBar.css";

const AnimatedNumber = ({ value }) => {
  return (
    <div className="animated-number-wrapper" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0, filter: "blur(6px)", scale: 0.9 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ y: -20, opacity: 0, filter: "blur(6px)", scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            display: "inline-block",
            willChange: "transform, opacity, filter",
          }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// URL'leri güvenli hale getiren slugify fonksiyonu
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

const CartBar = () => {
  const { cartItems, removeFromCart, finalTotal, discountPercentage } =
    useCart();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);

  const router = useTransitionRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  // Şu an ana sayfada olup olmadığımızı kontrol eden değişken
  const isHomePage = pathname === "/";

  useEffect(() => {
    // EĞER ANA SAYFADA DEĞİLSEK: Scroll dinleyicisine gerek yok, direkt görünür yap
    if (!isHomePage) {
      setHasPassedHero(true);
      return;
    }

    // EĞER ANA SAYFADAYSAK: Orijinal scroll mantığını çalıştır
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setHasPassedHero(true);
      } else {
        setHasPassedHero(false);
        if (isExpanded) setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Sayfa yüklendiği anki ilk kontrol

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isExpanded]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("tr-TR").format(price) + " ₺";

  return (
    <AnimatePresence>
      {hasPassedHero && (
        <motion.div
          className="hexa-cart-wrapper"
          initial={{
            y: 150,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.95,
            x: "-50%",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            x: "-50%",
          }}
          exit={{
            y: 150,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.95,
            x: "-50%",
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className={`hexa-cart-island ${isExpanded ? "expanded" : ""}`}>
            <AnimatePresence>
              {cartItems.length > 0 && isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden", willChange: "height" }}
                >
                  <div className="hexa-cart-body">
                    <div
                      className="global-text-dimmed"
                      style={{ fontSize: "0.9rem", marginBottom: "16px" }}
                    >
                      Sepetinizdeki Hizmetler ({cartItems.length})
                    </div>

                    <div className="cart-bento-grid" data-lenis-prevent="true">
                      <AnimatePresence>
                        {cartItems.map((item) => (
                          <motion.div
                            key={item.slug}
                            initial={{
                              opacity: 0,
                              scale: 0.85,
                              filter: "blur(10px)",
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              filter: "blur(0px)",
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.85,
                              filter: "blur(10px)",
                              transition: { duration: 0.2, ease: "easeIn" },
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 450,
                              damping: 30,
                            }}
                            className="cart-bento-item"
                            onClick={() => {
                              // YENİ: Akıllı URL Bulucu
                              let foundSubSlug = "kategori";

                              for (const cat of servicesData) {
                                for (const sub of cat.subCategories) {
                                  if (
                                    sub.items.some((i) => i.slug === item.slug)
                                  ) {
                                    foundSubSlug = slugify(sub.title);
                                    break;
                                  }
                                }
                              }

                              router.push(
                                `/hizmetler/${foundSubSlug}/${item.slug}`,
                              );
                            }}
                          >
                            <div
                              className="cart-bento-bg"
                              style={{ backgroundImage: `url(${item.image})` }}
                            />

                            <div className="cart-bento-content">
                              <div className="cart-name-group">
                                <div
                                  className="cart-item-name"
                                  title={item.name}
                                >
                                  {item.name}
                                </div>
                                <ArrowUpRight
                                  className="cart-link-icon"
                                  size={16}
                                  strokeWidth={2}
                                />
                              </div>

                              <div className="cart-item-right">
                                <span className="cart-item-price">
                                  {item.price === "Fiyat Alın"
                                    ? "Fiyat Alın"
                                    : formatPrice(
                                        item.price.replace(/\./g, ""),
                                      )}
                                </span>
                                <button
                                  className="remove-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFromCart(item.slug);
                                  }}
                                >
                                  Sil
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sabit Bar Kısmı */}
            <div
              className="hexa-cart-header"
              onClick={() => {
                if (cartItems.length === 0) {
                  router.push("/hizmetler");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  setIsExpanded(!isExpanded);
                }
              }}
              style={{
                justifyContent:
                  cartItems.length === 0 ? "center" : "space-between",
              }}
            >
              <AnimatePresence mode="wait">
                {cartItems.length === 0 ? (
                  <motion.div
                    key="empty-cart"
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="empty-cart-cta"
                  >
                    <Sparkles size={18} color="var(--hexa-accent)" />
                    <span className="empty-cart-text-main">
                      Kendi paketinizi oluşturmaya başlayın
                    </span>
                    <div className="action-icon-box">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="filled-cart"
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <div className="cart-price-info">
                      <div className="cart-badge">
                        <AnimatedNumber value={cartItems.length} />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          className="global-text-dimmed"
                          style={{ fontSize: "0.9rem" }}
                        >
                          Toplam:
                        </span>
                        <span className="new-price">
                          <AnimatedNumber value={formatPrice(finalTotal)} />
                        </span>
                      </div>

                      <AnimatePresence>
                        {discountPercentage > 0 && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              x: -10,
                              filter: "blur(4px)",
                            }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                            style={{
                              color: "var(--hexa-accent)",
                              fontSize: "0.85rem",
                              marginLeft: "4px",
                            }}
                          >
                            (%{discountPercentage} İndirim 🎉)
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <button
                        className="hexa-cart-action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push("/iletisim");
                        }}
                      >
                        Teklif İste
                      </button>

                      <motion.div
                        className="chevron-icon"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <ChevronUp size={20} />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartBar;
