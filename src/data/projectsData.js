// src/data/projectsData.js

export const projectsData = [
  {
    id: "paninoteca",
    title: "Paninoteca",
    category: "Dijital Büyüme & Görsel İletişim",
    client: "Paninoteca",
    isHexaProduct: false,
    clientLogoSvg: `/assets/logos/paninoteca_logo.svg`,
    isFeatured: true,

    // YENİ EKLENEN: Sektör Eşleştirme (Hangi sayfalarda görünsün?)
    relatedSectors: ["restoran-kafe"],

    description:
      "Web sitesinden ürün çekimlerine kadar tüm dijital varlıklarını baştan yarattık ve satışlarını katladık.",

    challenge:
      "Markanın harika ürünleri ve eşsiz bir lezzeti vardı ancak dijitalde tamamen görünmezdi. Zayıf fotoğraflar ve bulunamayan bir web sitesi yüzünden, potansiyel müşteriler her gün rakiplere gidiyordu. İnternetten gelen sipariş potansiyeli resmen çöpe atılıyordu.",

    solution:
      "Sadece güzel görünen bir web sitesi yapmakla kalmadık, markanın internetteki tüm varlığını ele aldık. Öncelikle insanların ağzını sulandıracak profesyonel ürün çekimleri yaptık. Ardından web sitelerini Google'da en üst sıralara taşıdık. En önemlisi, Yemeksepeti, Getir ve Trendyol platformlarındaki görünürlüklerini tamamen optimize ederek sipariş akışını zirveye çıkardık.",

    metrics: [
      { value: "%300", label: "Sipariş Artışı" },
      { value: "1. Sıra", label: "Google Konumu" },
      { value: "+10K", label: "Yeni Ziyaretçi" },
    ],

    gallery: [
      `/assets/projects/paninoteca/image_3.webp`,
      `/assets/projects/paninoteca/image_2.webp`,
      `/assets/projects/paninoteca/image_1.webp`,
    ],

    highlights: [
      "Sıfırdan modern ve hızlı bir web sitesi",
      "Google aramalarında ilk sayfa garantisi",
      "Yemek platformlarında satış artırma stratejisi",
      "İştah açıcı profesyonel ürün çekimleri",
      "Aktif ve ilgi çekici sosyal medya yönetimi",
    ],
    meta: [
      { label: "Hizmet", value: "Tam Kapsamlı Büyüme" },
      { label: "Odak", value: "Satış Artışı" },
    ],
    image: `/assets/projects/paninoteca/image_3.webp`,
    year: "2026",
    slug: "paninoteca",
  },
  {
    id: "omer-usta",
    title: "Ömer Usta",
    category: "Marka Bilinirliği & Satış",
    client: "Ömer Usta",
    isHexaProduct: false,
    clientLogoSvg: `/assets/logos/omer_usta_logo.svg`,
    isFeatured: true,

    // YENİ EKLENEN: Sektör Eşleştirme
    relatedSectors: ["restoran-kafe"],

    description:
      "Geleneksel lezzeti dijital dünyayla buluşturduk. Etkili görseller ve doğru hamlelerle sipariş rekorları kırdırdık.",

    challenge:
      "Yılların getirdiği ustalık ve mahalledeki güven internet ortamına yansımıyordu. Yeni nesil müşterilere ulaşamıyorlar, arama motorlarında ve haritalarda arka planda kalıyorlardı.",

    solution:
      "Ömer Usta'nın o samimi 'esnaf' ruhunu bozmadan tam bir dijital operasyon başlattık. Ürünleri en iştah açıcı halleriyle fotoğrafladık, Google Haritalar profilini bölgenin en çok tıklanan mekanı haline getirdik. Kurduğumuz web sitesi ve platform yönetim stratejisiyle geleneksel lezzeti rekor sipariş sayılarına ulaştırdık.",

    metrics: [
      { value: "5 Yıldız", label: "Google Yorum Ortalaması" },
      { value: "%250", label: "Paket Servis Büyümesi" },
      { value: "Sıfır", label: "Reklam Harcaması" },
    ],

    gallery: [
      `/assets/projects/omerUsta/image_1.webp`,
      `/assets/projects/omerUsta/image_3.webp`,
      `/assets/projects/omerUsta/image_2.webp`,
    ],

    highlights: [
      "Marka ruhuna uygun web sitesi tasarımı",
      "Google haritalar ve arama sıralaması yükseltme",
      "Yemek sipariş platformu yönetimi ve ciro artışı",
      "Profesyonel yemek fotoğrafçılığı",
      "Sosyal medya içerik üretimi",
    ],
    meta: [
      { label: "Hizmet", value: "Dijital Pazarlama" },
      { label: "Odak", value: "Müşteri Çekme" },
    ],
    image: `/assets/projects/omerUsta/image_1.webp`,
    year: "2026",
    slug: "omer-usta",
  },
  {
    id: "hira-koltuk-yikama",
    title: "Hira Koltuk Yıkama",
    category: "Google Optimizasyonu",
    client: "Hira Koltuk Yıkama",
    isHexaProduct: false,
    clientLogoSvg: `/assets/logos/hira_logo.svg`,
    isFeatured: true,

    // YENİ EKLENEN: Sektör Eşleştirme
    relatedSectors: ["hizmet-sektoru", "yerel-isletmeler"],

    description:
      "2016'dan kalma eski bir web sitesini değiştirmeden, sadece arka planda yaptığımız akıllı ayarlarla Google'da zirveye taşıdık.",

    challenge:
      "Müşterinin 2016 yılında yapılmış, mobil uyumu zayıf ve görsel olarak eskimiş bir web sitesi vardı. Yeni bir siteye bütçe ayırmak istemiyorlardı ancak Google aramalarında rakiplerinin çok gerisinde kaldıkları için iş kaybediyorlardı.",

    solution:
      "Eldekini en verimli şekilde kullanma yoluna gittik. Sitenin tasarımına hiç dokunmadan, tamamen arka plandaki arama motoru ayarlarını (SEO) ilmek ilmek işledik. Hedef kitle olan Bursa bölgesindeki tüm anahtar kelimelerde siteyi optimize ettik. Sonuç olarak eski altyapıya rağmen site Google'da ilk sıraya yerleşti ve müşteri telefonları kilitlendi.",

    metrics: [
      { value: "#1", label: "Bursa Aramaları Konumu" },
      { value: "%400", label: "Arama Kaynaklı Müşteri" },
      { value: "Organik", label: "Sıfır Bütçeli Büyüme" },
    ],

    gallery: [
      `/assets/projects/hira/image_2.webp`,
      `/assets/projects/hira/image_1.webp`,
      `/assets/projects/hira/image_3.webp`,
    ],

    highlights: [
      "Mevcut web sitesine dokunmadan arka plan iyileştirmesi",
      "Bölgesel aramalarda (Bursa) Google 1. sıra",
      "Arama motorları üzerinden ciddi müşteri artışı",
      "Sıfır reklam bütçesiyle organik büyüme",
    ],
    meta: [
      { label: "Hizmet", value: "Google Sıralaması" },
      { label: "Odak", value: "Telefon Trafiği" },
    ],
    image: `/assets/projects/hira/image_1.webp`,
    year: "2026",
    slug: "hira-koltuk-yikama",
  },
  {
    id: "hexa-finans",
    title: "Hexa Finans",
    category: "Restoran Yönetim Sistemi",
    client: "Hexa (Kendi Ürünümüz)",
    isHexaProduct: true,
    clientLogoSvg: `/assets/logos/hexa_finans.svg`,
    isFeatured: true,

    // YENİ EKLENEN: Sektör Eşleştirme
    relatedSectors: ["restoran-kafe", "yazilim-otomasyon"],

    description:
      "Restoranların hesap kitap derdini bitiren, komisyonları ve adisyonları tek ekranda toplayan kendi yazılımımız.",

    challenge:
      "Restoran sahipleri her gün Yemeksepeti, Getir ve Trendyol gibi farklı platformlardan gelen siparişlerin komisyonlarını hesaplarken büyük zaman ve para kaybediyordu. İçerideki masaların takibi ve kasadaki açıklar işletmelerin en büyük kabusuydu.",

    solution:
      "Bu karmaşayı kökünden çözmek için Hexa Finans'ı geliştirdik. Hiçbir bilgisayar bilgisi olmayan bir çalışanın bile 5 dakikada öğrenebileceği kadar basit bir arayüz tasarladık. Ancak arka planda tüm paket servis komisyonlarını otomatik hesaplayan, masalardaki siparişleri anlık takip eden ve gün sonu raporlarını hatasız sunan güçlü bir bulut sistemi kurduk.",

    metrics: [
      { value: "5 Dk", label: "Sistemi Öğrenme Süresi" },
      { value: "Sıfır", label: "Komisyon ve Kasa Hatası" },
      { value: "Bulut", label: "Her Yerden Kesintisiz Erişim" },
    ],

    gallery: [
      `/assets/projects/hexa_finans/image_2.webp`,
      `/assets/projects/hexa_finans/image_1.webp`,
      `/assets/projects/hexa_finans/image_3.webp`,
    ],

    highlights: [
      "Sıfır karmaşa: Herkesin kullanabileceği kolay ekranlar",
      "Paket servis platformlarının komisyonlarını otomatik hesaplama",
      "Masalardaki siparişleri (adisyon) anlık takip",
      "Gün sonu raporları ve kasa takibi",
      "Bulut tabanlı: İnternetin olduğu her yerden erişim",
    ],
    meta: [
      { label: "Hizmet", value: "Sistem Yazılımı" },
      { label: "Odak", value: "Restoran Yönetimi" },
    ],
    image: `/assets/projects/hexa_finans/image_3.webp`,
    year: "2026",
    slug: "hexa-finans",
  },
];
