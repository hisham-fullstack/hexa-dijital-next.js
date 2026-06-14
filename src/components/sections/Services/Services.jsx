"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Sparkles,
  Layers,
  Share2,
  Search,
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "../../../data/servicesData";
import { useCart } from "../../../context/CartContext";
import "./Services.css";
import CtaSection from "../../ui/CtaSection/CtaSection";
import SectoralPanel from "../Home/SectoralPanel/SectoralPanel";

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

const iconMap = {
  "Marka & Tasarım": <Sparkles size={20} />,
  "Endüstriyel & Basılı Tasarım": <Layers size={20} />,
  "Sosyal Medya Yönetimi": <Share2 size={20} />,
  "Google & Arama Motoru (SEO)": <Search size={20} />,
  "Web Siteleri": <Globe size={20} />,
  "Mobil Çözümler": <Smartphone size={20} />,
  "İşletme Yönetim & Yapay Zeka": <Cpu size={20} />,
  "Dijital Satış & Pazaryeri": <ShoppingBag size={20} />,
};

const Services = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div className="global-section services-page">
      <div className="container">
        <div className="approach-content services-hero-margin">
          <div className="approach-label">
            <p>HİZMETLERİMİZ</p>
          </div>
          <div className="approach-text">
            <h2>
              <span className="text-dark">
                Hexa Dijital bir tasarım, teknoloji ve reklam ajansıdır.
              </span>
              <span className="text-light">
                Kavramsal tasarımdan canlıya alınmaya kadar işletmenizin gücüne
                güç katacak profesyonel ürünler inşa ediyoruz.
              </span>
            </h2>
          </div>
        </div>

        {servicesData.map((category) => {
          const bgTitle = category.title.split(" ")[0];

          return (
            <div key={category.id} className="services-category-wrapper">
              <div className="category-grid">
                <div className="category-image-sticky-wrapper">
                  <div className="category-bg-title">
                    {bgTitle}{" "}
                    <span className="category-index">{category.index}</span>
                  </div>
                  <div className="category-image-box">
                    <img src={category.bgImage} alt={category.title} />
                  </div>
                </div>

                <div className="category-list-box">
                  <div className="list-main-header">
                    <h3>{category.title}</h3>
                    <p className="category-desc-text">{category.description}</p>
                  </div>

                  {category.subCategories.map((sub, subIdx) => (
                    <div key={subIdx} className="sub-category-group">
                      <Link
                        href={`/hizmetler/${slugify(sub.title)}`}
                        className="sub-category-title-link"
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span className="sub-category-icon">
                            {iconMap[sub.title] || <ChevronRight size={20} />}
                          </span>
                          <h4 className="sub-category-title">{sub.title}</h4>
                        </div>
                        <span
                          className="group-explore-text"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          Tümünü İncele ({sub.items.length}){" "}
                          <ArrowRight size={14} />
                        </span>
                      </Link>

                      <div className="service-links">
                        {sub.items.map((item) => {
                          const isInCart = cartItems.some(
                            (cartItem) => cartItem.slug === item.slug,
                          );

                          return (
                            <Link
                              key={item.slug}
                              href={`/hizmetler/${slugify(sub.title)}/${item.slug}`}
                              className="service-list-item"
                            >
                              <span className="item-text">{item.name}</span>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "16px",
                                  zIndex: 10,
                                }}
                              >
                                <button
                                  className={`service-add-btn ${isInCart ? "in-cart" : ""}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    isInCart
                                      ? removeFromCart(item.slug)
                                      : addToCart(item);
                                  }}
                                >
                                  {isInCart ? (
                                    <>
                                      <Minus size={14} strokeWidth={2.5} />
                                      <span>Çıkar</span>
                                    </>
                                  ) : (
                                    <>
                                      <Plus size={14} strokeWidth={2.5} />
                                      <span>Ekle</span>
                                    </>
                                  )}
                                </button>

                                <ChevronRight
                                  className="item-arrow"
                                  strokeWidth={1.5}
                                  size={18}
                                />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CtaSection />
      <SectoralPanel />
    </div>
  );
};

export default Services;
