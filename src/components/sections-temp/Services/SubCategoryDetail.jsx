"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { servicesData } from "../../../data/servicesData";
import { useCart } from "../../../context/CartContext";
import CtaSection from "../../ui/CtaSection/CtaSection";
import "./SubCategoryDetail.css";
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

const SubCategoryDetail = () => {
  // ARTIK SADECE KISA URL'Yİ (subCategorySlug) ALIYORUZ
  const params = useParams();
  const subCategorySlug = params?.subCategorySlug;

  const { cartItems, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  // KATEGORİYİ VE ALT KATEGORİYİ BULMA MANTIĞI GÜNCELLENDİ
  let category = null;
  let subCategory = null;

  for (const cat of servicesData) {
    const foundSub = cat.subCategories.find(
      (sub) => slugify(sub.title) === subCategorySlug,
    );
    if (foundSub) {
      category = cat;
      subCategory = foundSub;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subCategorySlug]);

  if (!subCategory || !category) {
    return (
      <div className="error-screen">
        <h3>Grup bulunamadı.</h3>
        <Link href="/hizmetler">Hizmetlere Dön</Link>
      </div>
    );
  }

  const titleParts = subCategory.title.split(" ");
  const heroTitle1 = titleParts[0];
  const heroTitle2 = titleParts.slice(1).join(" ") || "Çözümleri";

  // Fiyat formatlama fonksiyonu eklendi
  const formatPrice = (price) => {
    if (!price || price === "Fiyat Alın") return "Fiyat Alın";
    return (
      new Intl.NumberFormat("tr-TR").format(price.replace(/\./g, "")) + " ₺"
    );
  };

  return (
    <div className="hexa-sd-page">
      <div className="hexa-sd-hero-block">
        <div className="hexa-sd-image-wrapper">
          <img src={subCategory.image} alt={subCategory.title} />
        </div>

        <h1 className="hexa-sd-hero-title">
          <span className="title-line">{heroTitle1}</span>
          <span className="title-line">{heroTitle2}</span>
        </h1>
      </div>

      <div className="container">
        <div className="subcat-article-layout">
          <aside className="subcat-article-sidebar">
            <div className="sidebar-sticky-box">
              <h2>
                {subCategory.sloganMain || heroTitle1}{" "}
                <span className="global-text-dimmed">
                  {subCategory.sloganHighlight || heroTitle2}
                </span>
              </h2>
              {subCategory.metaTags && subCategory.metaTags.length > 0 && (
                <div className="article-meta-tags">
                  {subCategory.metaTags.map((tag, idx) => (
                    <span key={idx} className="meta-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </aside>

          <article className="subcat-article-body">
            {subCategory.introText && (
              <p className="article-lead">{subCategory.introText}</p>
            )}

            {subCategory.description && (
              <>
                <h3>
                  {subCategory.descriptionTitle ||
                    `Neden ${subCategory.title} Önemli?`}
                </h3>
                <p>{subCategory.description}</p>
              </>
            )}

            {subCategory.blockquote && (
              <blockquote>"{subCategory.blockquote}"</blockquote>
            )}

            {subCategory.process && (
              <>
                <h3>
                  {subCategory.processTitle || "Sürecimiz Nasıl İşliyor?"}
                </h3>
                <p>{subCategory.process}</p>
              </>
            )}

            {subCategory.processSteps &&
              subCategory.processSteps.length > 0 && (
                <ul className="article-list">
                  {subCategory.processSteps.map((step, idx) => (
                    <li key={idx}>
                      <CheckCircle size={18} className="list-icon" />
                      <span>
                        <strong>{step.title}:</strong> {step.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
          </article>
        </div>

        {/* 3. MİNİMALİST SATIR LİSTESİ VE FİYAT GÖSTERİMİ */}
        <div className="subcat-services-section">
          <div className="subcat-list-header">
            <Sparkles size={18} color="var(--hexa-accent)" />
            <span>
              {subCategory.listTitle ||
                "Paket İçeriği ve Profesyonel Çözümlerimiz"}
            </span>
          </div>

          <div className="subcat-sleek-list">
            {subCategory.items.map((item, index) => {
              const isInCart = cartItems.some((c) => c.slug === item.slug);

              return (
                <div
                  key={item.slug}
                  className="sleek-list-row"
                  onClick={() =>
                    router.push(`/hizmetler/${subCategorySlug}/${item.slug}`)
                  }
                >
                  {" "}
                  <div className="sleek-row-left">
                    <span className="sleek-row-index">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="sleek-row-texts">
                      <h3>{item.name}</h3>
                      <p>{item.introText || item.description}</p>
                    </div>
                  </div>
                  <div className="sleek-row-right">
                    {/* YENİ EKLENEN FİYAT ALANI */}
                    <div className="sleek-row-price">
                      <span className="sleek-price-val">
                        {formatPrice(item.price)}
                      </span>
                      {item.note && (
                        <span className="sleek-price-note">/{item.note}</span>
                      )}
                    </div>

                    <span className="sleek-view-link">
                      İncele <ArrowRight size={14} />
                    </span>

                    <button
                      className={`sleek-action-btn ${isInCart ? "in-cart" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        isInCart ? removeFromCart(item.slug) : addToCart(item);
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CtaSection />
      <SectoralPanel />
    </div>
  );
};

export default SubCategoryDetail;
