"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../../../data/servicesData";
import {
  ChevronLeft,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../../context/CartContext";
import "./ServiceDetail.css";
import CtaSection from "../../ui/CtaSection/CtaSection";
import SectoralPanel from "../Home/SectoralPanel/SectoralPanel";

// URL'den gelen Türkçe ve boşluklu kelimeleri eşleştirebilmek için slugify eklendi
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

const ServiceDetail = () => {
  // ARTIK URL'DEN KISA ALT KATEGORİ ADINI (subCategorySlug) ALIYORUZ
  const params = useParams();
  const subCategorySlug = params?.subCategorySlug;
  const slug = params?.slug;

  const { cartItems, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  let category = null;
  let currentService = null;
  let relatedServices = [];

  // VERİYİ YENİ YAPIYA GÖRE BULMA MANTIĞI
  for (const cat of servicesData) {
    const sub = cat.subCategories.find(
      (s) => slugify(s.title) === subCategorySlug,
    );
    if (sub) {
      const foundItem = sub.items.find((item) => item.slug === slug);
      if (foundItem) {
        category = cat;
        currentService = foundItem;
        relatedServices = sub.items.filter((item) => item.slug !== slug);
        break;
      }
    }
  }

  const isInCart = currentService
    ? cartItems.some((item) => item.slug === currentService.slug)
    : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!currentService)
    return <div className="error-screen">Hizmet bulunamadı.</div>;

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
          <img
            src={currentService.image || category.bgImage}
            alt={currentService.name}
          />
        </div>

        <h1 className="hexa-sd-hero-title">
          <span className="title-line">
            {currentService.heroTitle1 || currentService.name.split(" ")[0]}
          </span>
          <span className="title-line">
            {currentService.heroTitle2 ||
              currentService.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
      </div>

      <div className="container">
        <div className="hexa-sd-article-layout">
          <aside className="hexa-sd-article-sidebar">
            <div className="sidebar-sticky-box">
              <h2>
                {currentService.sloganMain} <br />
                <span className="global-text-dimmed">
                  {currentService.sloganHighlight}
                </span>
              </h2>
              <div className="article-meta-tags">
                <span className="meta-tag">Premium Kalite</span>
                <span className="meta-tag">SEO Uyumlu Hizmet</span>
                <span className="meta-tag">Garantili Sonuç</span>
              </div>
            </div>
          </aside>

          <article className="hexa-sd-article-body">
            <p className="article-lead">{currentService.introText}</p>

            {currentService.description && (
              <>
                <h3>
                  Neden <strong>{currentService.name}</strong> Önemli?
                </h3>
                <p>{currentService.description}</p>

                <blockquote>
                  "Profesyonel bir {currentService.name.toLowerCase()} süreci,
                  işletmenizin sektördeki otoritesini saniyeler içinde
                  kanıtlayan en güçlü dijital imzanızdır."
                </blockquote>
              </>
            )}

            {currentService.process && (
              <>
                <h3>Süreci Nasıl Yönetiyoruz?</h3>
                <p>{currentService.process}</p>
              </>
            )}
          </article>
        </div>

        <div className="hexa-sd-checkout-section">
          <div className="checkout-price-info">
            <span className="checkout-label">Hizmet Bedeli</span>
            <div className="checkout-amount-group">
              <strong className="checkout-price">
                {formatPrice(currentService.price)}
              </strong>
              {currentService.note && (
                <span className="checkout-note">/{currentService.note}</span>
              )}
            </div>
          </div>

          <button
            className={`sleek-checkout-btn ${isInCart ? "in-cart" : ""}`}
            onClick={() =>
              isInCart
                ? removeFromCart(currentService.slug)
                : addToCart(currentService)
            }
          >
            {isInCart ? (
              <>
                <Minus size={18} strokeWidth={2.5} />
                <span>Teklif Sepetinden Çıkar</span>
              </>
            ) : (
              <>
                <Plus size={18} strokeWidth={2.5} />
                <span>Teklif Sepetine Ekle</span>
              </>
            )}
          </button>
        </div>

        {/* DİĞER ÇÖZÜMLER KISMI YENİ LİNK YAPISINA GÖRE GÜNCELLENDİ */}
        {relatedServices.length > 0 && (
          <div className="hexa-sd-related-section">
            <h4 className="related-section-title">
              <Tag size={18} color="var(--hexa-accent)" />
              Bu Kategorideki Diğer Çözümler
            </h4>
            <div className="sleek-related-list">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${subCategorySlug}/${s.slug}`}
                  className="sleek-related-item"
                >
                  <span className="related-item-name">{s.name}</span>
                  <span className="related-item-arrow">
                    İncele <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <CtaSection />
      <SectoralPanel />
    </div>
  );
};

export default ServiceDetail;
