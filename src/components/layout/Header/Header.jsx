"use client";

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import gsap from "gsap";
// DOĞRU YOL (Providers.jsx'in içinden çekiyoruz)
import { useTheme } from "next-themes";
import {
  Sparkles,
  Layers,
  Share2,
  Search,
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Zap,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import "./Header.css";

const techMenuItems = [
  {
    title: "Marka & Tasarım",
    count: "/ 4 hizmet",
    icon: <Sparkles size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/brand_identity.webp",
    href: "/hizmetler/marka-tasarim",
  },
  {
    title: "Sosyal Medya Yönetimi",
    count: "/ 3 hizmet",
    icon: <Share2 size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/subServicess/social_medya.webp",
    href: "/hizmetler/sosyal-medya-yonetimi",
  },
  {
    title: "Google & Arama Motoru (SEO)",
    count: "/ 4 hizmet",
    icon: <Search size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/subServicess/local_seo.webp",
    href: "/hizmetler/google-arama-motoru-seo",
  },
  {
    title: "Web Siteleri",
    count: "/ 5 hizmet",
    icon: <Globe size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/web.webp",
    href: "/hizmetler/web-siteleri",
  },
  {
    title: "Mobil Çözümler",
    count: "/ 3 hizmet",
    icon: <Smartphone size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/subServicess/mobile_development.webp",
    href: "/hizmetler/mobil-cozumler",
  },
  {
    title: "İşletme Yönetim & Yapay Zeka",
    count: "/ 4 hizmet",
    icon: <Cpu size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/subServicess/business_management_software.webp",
    href: "/hizmetler/isletme-yonetim-yapay-zeka",
  },
  {
    title: "Dijital Satış & Pazaryeri",
    count: "/ 2 hizmet",
    icon: <ShoppingBag size={18} strokeWidth={1.5} />,
    bgImage: "/assets/servicess/subServicess/e-commerce.webp",
    href: "/hizmetler/dijital-satis-pazaryeri",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Next.js usePathname kullanımı
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const islandRef = useRef(null);
  const menuContainerRef = useRef(null);
  const closeTimeout = useRef(null);

  // --- MOBİL MENÜ STATE'LERİ ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- MOBİL MENÜ AÇIKKEN SCROLL KİLİDİ ---
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useLayoutEffect(() => {
    if (activeMenu) {
      gsap.to(islandRef.current, {
        borderRadius: "24px",
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(menuContainerRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.fromTo(
        ".menu-fade-item",
        { y: -15, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }
  }, [activeMenu]);

  const openMenuContainer = (menuType) => {
    clearTimeout(closeTimeout.current);

    if (activeMenu !== menuType) {
      setActiveMenu(menuType);
    } else {
      gsap.to(islandRef.current, {
        borderRadius: "24px",
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(menuContainerRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(".menu-fade-item", {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const closeMenu = () => {
    if (document.querySelectorAll(".menu-fade-item").length > 0) {
      gsap.to(".menu-fade-item", {
        y: -10,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.in",
        overwrite: "auto",
      });
    }

    gsap.to(menuContainerRef.current, {
      height: 0,
      duration: 0.4,
      ease: "power3.inOut",
      overwrite: "auto",
      delay: 0.1,
    });

    gsap.to(islandRef.current, {
      borderRadius: "100px",
      duration: 0.4,
      ease: "power3.inOut",
      overwrite: "auto",
      delay: 0.1,
    });

    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 450);
  };

  // --- MOBİL MENÜYÜ KAPATMA FONKSİYONU ---
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setMobileServicesOpen(false), 400); // Kapanırken alt menüyü de topla
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      closeMenu();
    }, 200);
  };

  const handleLinkClick = () => {
    clearTimeout(closeTimeout.current);
    setActiveMenu(null);

    gsap.killTweensOf([
      menuContainerRef.current,
      islandRef.current,
      ".menu-fade-item",
    ]);

    gsap.to(".menu-fade-item", {
      autoAlpha: 0,
      y: -10,
      duration: 0.15,
    });

    gsap.to(menuContainerRef.current, {
      height: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(islandRef.current, {
      borderRadius: "100px",
      duration: 0.2,
      ease: "power2.inOut",
    });

    closeMobileMenu();
  };

  return (
    <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
      {/* SİNEMATİK KARARTMA (Masaüstü Mega Menü için) */}
      <div className={`nav-cinematic-overlay ${activeMenu ? "active" : ""}`} />

      {/* MOBİL MENÜ OVERLAY */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li style={{ "--delay": "0.1s" }}>
              <Link href="/" onClick={handleLinkClick}>
                Ana Sayfa
              </Link>
            </li>

            {/* Mobilde Hizmetler Akordiyonu */}
            <li style={{ "--delay": "0.2s" }} className="mobile-dropdown-item">
              <div
                className="mobile-dropdown-header"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Hizmetler</span>
                <ChevronDown
                  size={24}
                  className={`dropdown-icon ${mobileServicesOpen ? "open" : ""}`}
                />
              </div>
              <div
                className={`mobile-dropdown-body ${mobileServicesOpen ? "open" : ""}`}
              >
                {techMenuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="mobile-sub-link"
                  >
                    <span className="mobile-sub-icon">{item.icon}</span>
                    {item.title}
                  </Link>
                ))}
              </div>
            </li>

            <li style={{ "--delay": "0.3s" }}>
              <Link href="/sektorel-cozumler" onClick={handleLinkClick}>
                Sektörel Çözümler
              </Link>
            </li>
            <li style={{ "--delay": "0.4s" }}>
              <Link href="/projeler" onClick={handleLinkClick}>
                Projeler
              </Link>
            </li>
            <li style={{ "--delay": "0.5s" }}>
              <Link href="/iletisim" onClick={handleLinkClick}>
                Tanışalım
              </Link>
            </li>
          </ul>

          <div className="mobile-menu-footer" style={{ "--delay": "0.6s" }}>
            <Link
              href="/iletisim"
              onClick={handleLinkClick}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <button
                className="hexa-premium-cta-btn"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Zap size={18} strokeWidth={2} className="cta-bolt-icon" />
                <span>Toplantı Yapalım</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-container" style={{ zIndex: 1005 }}>
        <div className="logo-box">
          <Link href="/" onClick={handleLinkClick}>
            <img
              src="/assets/logos/hexa_logo.svg"
              alt="Hexa Logo"
              className="hexa-svg-logo"
            />
          </Link>
        </div>

        <div className="center-nav-wrapper">
          <nav
            className="nav-island"
            ref={islandRef}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="nav-links">
              <li onMouseEnter={closeMenu}>
                <Link
                  href="/"
                  className={pathname === "/" ? "active-link" : ""}
                  onClick={handleLinkClick}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li
                onMouseEnter={() => openMenuContainer("hizmetler")}
                className="has-mega"
              >
                <Link
                  href="/hizmetler"
                  className={
                    pathname?.startsWith("/hizmetler") ||
                    activeMenu === "hizmetler"
                      ? "active-link"
                      : ""
                  }
                  onClick={handleLinkClick}
                >
                  Hizmetler
                </Link>
              </li>

              <li onMouseEnter={closeMenu}>
                <Link
                  href="/sektorel-cozumler"
                  className={
                    pathname?.startsWith("/sektorel") ? "active-link" : ""
                  }
                  onClick={handleLinkClick}
                >
                  Sektörel Çözümler
                </Link>
              </li>

              <li onMouseEnter={closeMenu}>
                <Link
                  href="/projeler"
                  className={pathname === "/projeler" ? "active-link" : ""}
                  onClick={handleLinkClick}
                >
                  Projeler
                </Link>
              </li>
              <li onMouseEnter={closeMenu}>
                <Link
                  href="/iletisim"
                  className={pathname === "/iletisim" ? "active-link" : ""}
                  onClick={handleLinkClick}
                >
                  Tanışalım
                </Link>
              </li>
            </ul>

            <div className="mega-menu-container" ref={menuContainerRef}>
              <div className="mega-menu-inner">
                {activeMenu === "hizmetler" && (
                  <div className="mega-menu-section w-full">
                    <div className="mega-menu-grid menu-grid-4-cols">
                      {techMenuItems.map((service, index) => (
                        <Link
                          className="bento-item menu-fade-item"
                          key={index}
                          href={service.href}
                          onClick={handleLinkClick}
                        >
                          <div
                            className="bento-bg"
                            style={{
                              backgroundImage: `url(${service.bgImage})`,
                            }}
                          ></div>
                          <div className="bento-content">
                            <div className="bento-title flex items-center gap-2">
                              <span className="icon text-primary">
                                {service.icon}
                              </span>
                              {service.title}
                            </div>
                            <span className="bento-count">{service.count}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* Sağ Alan: Tema Değiştirici, CTA ve Mobil Hamburger */}
        <div
          className="header-action"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <button
            className={`hexa-theme-toggle ${theme === "theme-inverted" ? "is-light" : ""}`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Temayı Değiştir"
          >
            <div className="icon-wrapper sun-icon">
              <Sun size={20} strokeWidth={1.5} />
            </div>
            <div className="icon-wrapper moon-icon">
              <Moon size={20} strokeWidth={1.5} />
            </div>
          </button>

          {/* SADECE MASAÜSTÜNDE GÖZÜKEN BUTON */}
          <Link
            href="/iletisim"
            onClick={handleLinkClick}
            style={{ textDecoration: "none" }}
            className="desktop-cta"
          >
            <button className="hexa-premium-cta-btn">
              <Zap size={18} strokeWidth={2} className="cta-bolt-icon" />
              <span>Toplantı Yapalım</span>
            </button>
          </Link>

          {/* SADECE MOBİLDE GÖZÜKEN HAMBURGER MENÜ */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
