"use client";
import React from "react";
import Link from "next/link";
import { servicesData } from "../../../data/servicesData";
import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

// URL'ler için Türkçe karakterleri temizleyen fonksiyon
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

const Footer = () => {
  // 1. Satır: Kurumsal Kimlik & Reklam (4 Alt Kategori)
  const designCategory = servicesData[0];

  // 2. Satır: Teknoloji & Yazılım (Web/Mobil 2 + AI/Yazılım 2 = Toplam 4 Alt Kategori)
  const techCategory1 = servicesData[1];
  const techCategory2 = servicesData[2];
  const techSubCategories = [
    ...techCategory1.subCategories,
    ...techCategory2.subCategories,
  ];

  return (
    <footer className="hexa-premium-footer">
      {/* ÜST BÖLÜM: LİNKLER VE GRID YAPISI (image_ebd87d.png referansı) */}
      <div className="footer-grid-container">
        {/* 1. SATIR: TASARIM & PAZARLAMA */}
        <div className="footer-row">
          <div className="footer-row-title">
            <h3>{designCategory.title.toUpperCase()}</h3>
          </div>
          <div className="footer-row-links">
            {designCategory.subCategories.map((sub, index) => {
              const subSlug = slugify(sub.title); // Dinamik alt kategori slug'ı

              return (
                <div key={index} className="footer-col">
                  <h4>
                    {/* Grup başlıkları artık kendi sayfasına gidiyor */}
                    <Link
                      href={`/hizmetler/${subSlug}`}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {sub.title}{" "}
                      <ArrowUpRight size={14} className="col-arrow" />
                    </Link>
                  </h4>
                  <ul>
                    {sub.items.map((item) => (
                      <li key={item.slug}>
                        {/* Eski category.id yerine yeni subSlug kullanıldı */}
                        <Link href={`/hizmetler/${subSlug}/${item.slug}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. SATIR: TEKNOLOJİ & YAZILIM */}
        <div className="footer-row">
          <div className="footer-row-title">
            <h3>TEKNOLOJİ & YAZILIM</h3>
          </div>
          <div className="footer-row-links">
            {techSubCategories.map((sub, index) => {
              const subSlug = slugify(sub.title); // Dinamik alt kategori slug'ı

              return (
                <div key={index} className="footer-col">
                  <h4>
                    {/* Grup başlıkları artık kendi sayfasına gidiyor */}
                    <Link
                      href={`/hizmetler/${subSlug}`}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {sub.title}{" "}
                      <ArrowUpRight size={14} className="col-arrow" />
                    </Link>
                  </h4>
                  <ul>
                    {sub.items.map((item) => (
                      <li key={item.slug}>
                        {/* Eski parentId yerine yeni subSlug kullanıldı */}
                        <Link href={`/hizmetler/${subSlug}/${item.slug}`}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ALT BÖLÜM: DEVASA YAZI VE SOSYAL MEDYA LİNKLERİ (image_ebdb47.png referansı) */}
      <div className="footer-bottom-container">
        {/* Arkaplana gömülen devasa marka ismi */}
        <div className="footer-massive-text">
          <span>HEXA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
