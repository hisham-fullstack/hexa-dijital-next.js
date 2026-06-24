"use client";
import React from "react";
import Link from "next/link";
import { servicesData } from "../../../data/servicesData";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
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

      {/* ALT BÖLÜM: DEVASA YAZI VE SOSYAL MEDYA LİNKLERİ */}
      <div className="footer-bottom-container">
        {/* YENİ: ŞIK SOSYAL MEDYA VE COPYRIGHT SATIRI */}
        <div className="footer-social-row">
          <div className="copyright-text">
            © {new Date().getFullYear()} Hexa Dijital. Tüm hakları saklıdır.
          </div>
          <div className="social-links">
            <a
              href="https://instagram.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaInstagram size={18} />
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaFacebook size={18} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@HEXADijital"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaYoutube size={18} />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.tiktok.com/@hexadijital"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaTiktok size={18} />
              <span>TikTok</span>
            </a>
            <a
              href="https://tr.pinterest.com/hexadijital/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaPinterest size={18} />
              <span>Pinterest</span>
            </a>

            <a
              href="https://x.com/hexadijital"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaXTwitter size={18} />
              <span>X</span>
            </a>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
