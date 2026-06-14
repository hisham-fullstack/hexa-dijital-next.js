"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { projectsData } from "../../../../data/projectsData"; // Merkezi veriyi import ettik
import "./LatestWork.css";

const LatestWork = () => {
  const [hoveredWork, setHoveredWork] = useState(null);

  // Sadece anasayfada gösterilmesini istediğimiz (isFeatured: true) projeleri çekiyoruz
  const featuredWorks = projectsData.filter((project) => project.isFeatured);

  useEffect(() => {
    if (featuredWorks.length > 0) {
      setHoveredWork(featuredWorks[0]);
    }
  }, []);

  return (
    <section className="global-section latest-work-section">
      <div className="container">
        {/* ÜST BAŞLIK ALANI */}
        <div className="lw-header-compact">
          <div
            className="text-gradient-flow"
            style={{ marginBottom: "16px", display: "inline-block" }}
          >
            Son Çalışmalarımız
          </div>
          <div className="lw-header-content-flex">
            <h2>
              Vizyonu gerçeğe dönüştürdüğümüz <br />{" "}
              <span className="text-glow">premium</span> projeler.
            </h2>
            <Link href="/projeler" className="hx-btn-outline">
              Tüm Portfolyoyu İncele
            </Link>
          </div>
        </div>

        {/* INTERACTIVE TYPOGRAPHIC LIST (Yeni Tasarım) */}
        <div className="lw-interactive-layout">
          {/* SOL TARAF: LİSTE */}
          <div className="lw-list-column">
            {featuredWorks.map((work) => (
              <Link
                key={work.id}
                href={`/projeler/${work.slug}`} /* ÇIKIŞMA ÇÖZÜLDÜ: to yerine href kullanıldı */
                className="lw-row-item"
                onMouseEnter={() => setHoveredWork(work)}
              >
                <div className="lw-row-left">
                  <div className="lw-meta">
                    <span className="lw-tag">
                      {work.isHexaProduct && (
                        <Cpu size={12} style={{ marginRight: "6px" }} />
                      )}
                      {work.meta[0].value}
                    </span>
                    <span className="lw-tech-text">{work.meta[1].value}</span>
                  </div>

                  <h3 className="lw-title">{work.title}</h3>
                  <p className="lw-description">{work.description}</p>
                </div>

                <div className="lw-row-right">
                  <div className="lw-arrow-circle">
                    <ArrowRight size={24} />
                  </div>
                </div>

                {/* MOBİL GÖRSEL */}
                <div className="lw-mobile-image">
                  <img src={work.image} alt={work.title} />
                </div>
              </Link>
            ))}
          </div>

          {/* SAĞ TARAF: STICKY GÖRSEL (Masaüstü için) */}
          <div className="lw-image-column">
            <div className="lw-sticky-container global-glass-card">
              <AnimatePresence mode="wait">
                {hoveredWork && (
                  <motion.div
                    key={hoveredWork.id}
                    className="lw-sticky-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img src={hoveredWork.image} alt={hoveredWork.title} />
                    <div className="lw-overlay-info">
                      <span className="lw-client-text">
                        {hoveredWork.meta[0].label}: {hoveredWork.meta[0].value}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBİL İÇİN ALT BUTON */}
        <div className="lw-mobile-action">
          <Link href="/projeler" className="hx-btn-outline w-100 text-center">
            Tüm Portfolyoyu İncele
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
