"use client";

import React from "react";
import { useRouter } from "next/navigation"; // next/navigation kullanıyoruz
import { servicesData } from "../../../../data/servicesData";
import "./Servicess.css";

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

const Servicess = () => {
  const router = useRouter(); // Yönlendirme motorunu başlatıyoruz

  return (
    <section className="global-section services-section">
      <div className="container">
        <div className="text-gradient-flow">Hizmetlerimiz</div>

        <div className="bento-grid">
          {servicesData.map((category) =>
            category.subCategories.map((sub, subIdx) => {
              const cardId = `${category.id}-${subIdx}`;
              const subSlug = slugify(sub.title);

              return (
                <div
                  key={cardId}
                  className="bento-card"
                  style={{ backgroundImage: `url(${sub.image})` }}
                  // 1. KARTIN TAMAMINA TIKLAMA ÖZELLİĞİ:
                  onClick={() => router.push(`/hizmetler/${subSlug}`)}
                >
                  <div className="card-overlay"></div>
                  <div className="card-top-blur"></div>

                  <div className="card-content">
                    <div className="card-top">
                      <h3>{sub.title}</h3>
                      <span className="service-count">
                        / {sub.items.length} hizmet
                      </span>
                    </div>

                    <div className="card-tags-container">
                      <div className="tags-list">
                        {sub.items.map((item, index) => (
                          <span
                            key={index}
                            className="glass-tag"
                            style={{ "--i": index + 1 }}
                            // 2. SADECE ETİKETE TIKLAMA ÖZELLİĞİ:
                            onClick={(e) => {
                              e.stopPropagation(); // Kartın kendi tıklanma olayını engeller
                              router.push(`/hizmetler/${subSlug}/${item.slug}`);
                            }}
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>

                      <span className="see-more">Detayları İncele</span>
                    </div>
                  </div>
                </div>
              );
            }),
          )}
        </div>
      </div>
    </section>
  );
};

export default Servicess;
