// src/data/servicesData.js

export const servicesData = [
  {
    id: "kurumsal-kimlik-reklam",
    title: "Kurumsal Kimlik & Reklam",
    index: "01",
    description:
      "Markanızın hem dijitalde hem de fiziksel dünyada profesyonel görünmesini sağlar, bilinirliğinizi ve müşteri kitlenizi artırırız.",
    bgImage: `/assets/servicess/brand_identity.webp`,
    subCategories: [
      {
        title: "Marka & Tasarım",
        image: `/assets/servicess/brand_identity.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "Markanızın sektördeki",
        sloganHighlight: "yükselişini başlatın.",
        metaTags: ["Premium Hizmet", "SEO Uyumlu Tasarım", "Ödüllü Ajans"],
        introText:
          "Dijital ve fiziksel dünyada markanızı var eden en önemli unsurların başında Marka ve Tasarım süreçleri gelir. Doğru kurgulanmış bir strateji, işletmenizi rakiplerinden keskin bir şekilde ayırır.",
        descriptionTitle: "Neden Marka & Tasarım Ekstra Önem Taşır?",
        description:
          "Günümüz rekabet koşullarında standart çözümler markanızı görünmez kılar. Profesyonel bir marka mimarisi, potansiyel müşterilerinizde ilk saniyeden itibaren güven uyandırır, satış ve dönüşüm oranlarınızı doğrudan artırır.",
        blockquote:
          "İyi bir tasarım ve doğru kimlik maliyet değil, işletmenizin geleceğine yapılan en karlı yatırımdır.",
        processTitle: "Uygulama Sürecimiz Nasıl İşliyor?",
        process:
          "Sürece, markanızın mevcut durumunu ve hedeflerini dinleyerek başlıyoruz. Şablonlardan uzak, tamamen markanızın vizyonuna ve sektörünüzün dinamiklerine uygun terzi işi çözümler üretiyoruz.",
        processSteps: [
          {
            title: "Derinlemesine Analiz",
            text: "Sektör, rakip ve hedef kitle dinamiklerinin araştırılması.",
          },
          {
            title: "Stratejik Planlama",
            text: "İhtiyacınıza yönelik özel mimarinin ve konseptin çizilmesi.",
          },
          {
            title: "Kusursuz Uygulama",
            text: "Yüksek kalite standartlarıyla tasarımın hayata geçirilmesi.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "Logo Tasarımı",
            slug: "logo-tasarimi",
            price: "5.000",
            image: `/assets/servicess/logo.webp`,
            heroTitle1: "Logo",
            heroTitle2: "Tasarımı",
            sloganMain: "Markanızın sektördeki",
            sloganHighlight: "ilk izlenimini kusursuzlaştırın.",
            introText:
              "İyi bir logo sadece güzel görünmez; güven verir, akılda kalır ve şirketin vizyonunu tek bakışta anlatır.",
            description:
              "Logo, dijital dünyadaki ve fiziksel pazardaki imzanızdır. Yanlış renk ve tipografi seçimi markanızı ucuz gösterebilirken; profesyonel bir logo müşterilerinize doğrudan güven aşılar.",
            process:
              "Markanızın vizyonunu ve hedef kitlesini dinliyoruz. Sektörel rakiplerinizi analiz ettikten sonra, minimalist ve modern tasarım prensipleriyle eskizler oluşturuyor, onayınıza sunarak kusursuz sonuca ulaşıyoruz.",
          },
          {
            name: "Kurumsal Kimlik (Kartvizit, vb.)",
            slug: "kurumsal-kimlik",
            price: "5.000",
            image: `/assets/servicess/kartvizit.webp`,
            heroTitle1: "Kurumsal",
            heroTitle2: "Kimlik",
            sloganMain: "İşletmenizin her noktasında",
            sloganHighlight: "sarsılmaz bir bütünlük yaratın.",
            introText:
              "Müşterinizin eline geçen bir kartvizitten, kestiğiniz e-faturaya kadar her detay markanızın kalitesini yansıtmalıdır.",
            description:
              "Kurumsal kimlik, işletmenizin anayasasıdır. Tutarlı ve uyumlu bir kurumsal kimlik, markanızı merdiven altı firmalardan ayırarak doğrudan premium segmente taşır.",
            process:
              "Logonuzun dinamiklerine uygun bir renk ve font hiyerarşisi belirliyoruz. Ardından kartvizit, antetli kağıt, zarf ve dijital şablonlarınızı marka dili altında birleştirip matbaaya hazır formatta teslim ediyoruz.",
          },
          {
            name: "Mekan & Otel Çekimi",
            slug: "mekan-ve-otel-cekimi",
            price: "10.000",
            note: "Günlük",
            image: `/assets/servicess/hotel.webp`,
            heroTitle1: "Mekan",
            heroTitle2: "Çekimi",
            sloganMain: "Potansiyel misafirlerinize",
            sloganHighlight: "kusursuz bir konaklama deneyimi yaşatın.",
            introText:
              "Booking, TripAdvisor veya web sitenizde gezinen bir misafir, otelinize adım atmadan önce odalarınızın konforunu hissetmek ister.",
            description:
              "Mekan ve otel çekimleri; standart, deluxe ve kral dairelerinizin tüm detaylarını dijital dünyaya aktarır. Doğru ışık yönetimi otelinizin doluluk oranlarını doğrudan etkiler.",
            process:
              "Çekim öncesi gün ışığı açılarını ve mekanların hazırlık düzenini planlıyoruz. Profesyonel geniş açı lensler ile çekimleri gerçekleştirip teslim ediyoruz.",
          },
          {
            name: "Ürün Çekimi",
            slug: "urun-cekimi",
            price: "200",
            note: "Adet",
            image: `/assets/servicess/product_photo.webp`,
            heroTitle1: "Ürün",
            heroTitle2: "Çekimi",
            sloganMain: "E-ticarette ve kataloglarınızda",
            sloganHighlight: "satışları artıran kusursuz görseller.",
            introText:
              "Dijital dünyada müşterinizin ürününüze dokunma şansı yoktur; bu yüzden güveni sadece fotoğrafın kalitesiyle sağlayabilirsiniz.",
            description:
              "Profesyonel ürün çekimi, ürünlerinizin tüm detaylarını en doğru ışık altında ortaya çıkarır. Kusursuz görseller, doğrudan dönüşüm oranlarınızı artırarak markanızı rakiplerinizin önüne taşır.",
            process:
              "Beyaz fon veya kreatif arka planlar eşliğinde çekimleri tamamlayıp, yüksek çözünürlüklü rötuş (retouch) işlemlerinin ardından dijital platformlara hazır teslim ediyoruz.",
          },
        ],
      },
      {
        title: "Sosyal Medya Yönetimi",
        image: `/assets/servicess/subServicess/social_medya.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "Markanızın dijital sesini",
        sloganHighlight: "milyonlara duyurun.",
        metaTags: ["Organik Büyüme", "Etkileşim Odaklı", "Kriz Yönetimi"],
        introText:
          "Sosyal medya sadece fotoğraf paylaşılan bir yer değil; markanızın yaşayan, nefes alan ve müşterilerle birebir iletişim kuran en büyük dijital şubesidir.",
        descriptionTitle: "Sosyal Medya Yönetimi Neden Vazgeçilmezdir?",
        description:
          "Sürekli ve kaliteli içerik üretimi, markanızı unutturmaz. Hedef kitleyle kurulan doğru etkileşim, markanızı sektörünüzde bir otorite haline getirir ve güven algısını artırarak doğrudan satışlara yansır.",
        blockquote:
          "Sosyal medyada var olmak bir seçenek değil, günümüz ticaretinde hayatta kalmanın temel kuralıdır.",
        processTitle: "Stratejik Yönetim Sürecimiz",
        process:
          "Markanızın karakterine (Tone of Voice) uygun bir dil belirliyor, içerikleri tesadüflere değil veri ve analitiklere dayandırarak aylık planlıyoruz.",
        processSteps: [
          {
            title: "İçerik Planlama",
            text: "Rakiplerin analizi ve aylık paylaşım takviminin oluşturulması.",
          },
          {
            title: "Görsel ve Video Üretimi",
            text: "Trendlere uygun Reel, post ve hikaye konseptlerinin tasarlanması.",
          },
          {
            title: "Topluluk Yönetimi",
            text: "Müşterilerden gelen yorum, mesaj ve şikayetlerin hızlıca yönetilmesi.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "Düzenli Paylaşım",
            slug: "duzenli-paylasim",
            price: "9.000",
            note: "Aylık",
            image: `/assets/servicess/content_scheduling.webp`,
            heroTitle1: "Sosyal",
            heroTitle2: "Medya",
            sloganMain: "Algoritmaları lehinize çevirip",
            sloganHighlight: "sadık bir kitle inşa edin.",
            introText:
              "Sürekli ve kaliteli içerik üretimi, markanızı unutturmaz. Müşterilerinizin güvenini organik olarak kazanmanızı sağlar.",
            description:
              "Sosyal medya platformları tutarlılığı ödüllendirir. Düzenli içerik akışı, markanızın büyümesini ve potansiyel müşterilerin sizinle bağ kurmasını doğrudan destekler.",
            process:
              "Aylık içerik takviminizi önceden planlıyoruz. Marka kimliğinize uygun reel videolar, statik postlar üretiyor, en yüksek etkileşim saatlerinde yayına alıyoruz.",
          },
          {
            name: "Mesaj ve Yorum Yönetimi",
            slug: "mesaj-ve-yorum-yonetimi",
            price: "2.500",
            note: "Aylık",
            image: `/assets/servicess/community_management.webp`,
            heroTitle1: "Topluluk",
            heroTitle2: "Yönetimi",
            sloganMain: "Müşterilerinizle aranızdaki",
            sloganHighlight: "iletişim köprüsünü güçlendirin.",
            introText:
              "Hızlı yanıtlar ve doğru kriz yönetimi, şikayetleri doğrudan satışa, takipçileri ise sadık marka elçilerine dönüştürür.",
            description:
              "Müşterileriniz sosyal medyada muhatap bulmak ve hızlı yanıt bekler. Profesyonel bir topluluk yönetimi, marka değerinizi korur ve satış oranlarınızı anında artırır.",
            process:
              "Belirlediğimiz kurumsal iletişim dili ile gelen tüm mesaj ve yorumları günlük olarak yanıtlıyoruz. Önemli müşteri taleplerini raporluyoruz.",
          },
          {
            name: "Topluluk Etkileşimi (Yarışma, anket vb.)",
            slug: "topluluk-etkilesimi",
            price: "2.000",
            image: `/assets/servicess/product_showcase.webp`,
            heroTitle1: "İnteraktif",
            heroTitle2: "Kurgular",
            sloganMain: "Sadece izleyen değil,",
            sloganHighlight: "harekete geçen bir kitle yaratın.",
            introText:
              "Kullanıcıları içeriğinize dahil eden oyunlaştırmalar, markanızın etkileşim oranlarını ve viral potansiyelini katlar.",
            description:
              "Sadece tek yönlü içerik üretmek yetmez, kitleyi tetiklemek gerekir. İnteraktif kurgular markanızın binlerce yeni hesaba ulaşmasını sağlar.",
            process:
              "Hedeflerinize uygun çekiliş, anket veya kullanıcı türevli kampanyalar kurguluyoruz. Süreci baştan sona yönetip sonuçları analiz ediyoruz.",
          },
        ],
      },
      {
        title: "Google & Arama Motoru (SEO)",
        image: `/assets/servicess/subServicess/local_seo.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "Aramalarda kaybolmayın,",
        sloganHighlight: "zirvede yerinizi alın.",
        metaTags: ["Organik Trafik", "Yerel SEO", "Sürdürülebilir Büyüme"],
        introText:
          "Müşterileriniz ihtiyaç duydukları anda sizi bulamıyorsa, pazar payınızı doğrudan rakiplerinize hediye ediyorsunuz demektir. Sizi arayanların karşısına ilk siz çıkmalısınız.",
        descriptionTitle: "SEO ve Harita Çalışmaları Bize Ne Kazandırır?",
        description:
          "Arama motoru optimizasyonu (SEO), web sitenize reklam bütçelerine bağımlı kalmadan kalıcı ve ücretsiz trafik sağlar. Harita (Local) SEO'su ise fiziksel mağazanıza kapıdan giren müşteri sayısını ve telefon aramalarını anında artırır.",
        blockquote:
          "Google'da ikinci sayfada olmak, dijital dünyada hiç var olmamakla aynı anlama gelir.",
        processTitle: "Optimizasyon Sürecimiz",
        process:
          "Sitenizin teknik check-up'ını yaparak Google botlarının sevmediği tüm pürüzleri gideriyor, sektörünüzde dönüşüm oranı en yüksek olan anahtar kelimeler üzerine stratejiler kuruyoruz.",
        processSteps: [
          {
            title: "Teknik SEO Analizi",
            text: "Site hızı, mobil uyumluluk ve index hatalarının giderilmesi.",
          },
          {
            title: "Kelime Haritalandırma",
            text: "Sektörünüzde satın almaya en yakın kitleyi çekecek kelimelerin seçimi.",
          },
          {
            title: "İçerik ve Otorite",
            text: "Site içi semantik içerik üretimi ve dış referans (backlink) çalışmaları.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "Google Konum İşlemleri",
            slug: "google-konum-islemleri",
            price: "3.000",
            image: `/assets/servicess/google.webp`,
            heroTitle1: "Google",
            heroTitle2: "Haritalar",
            sloganMain: "Fiziksel mağazanızın kapılarını",
            sloganHighlight: "dijital dünyaya sonuna kadar açın.",
            introText:
              "Müşterileriniz size ulaşmak istediğinde karşılarına çıkan ilk ekran olan Google vitrininizi, tam dönüşüm odaklı hale getiriyoruz.",
            description:
              "Fiziksel bir işletmeniz varsa, Google Haritalar'da görünür olmak en büyük organik müşteri kaynağınızdır. Doğru bir profil, kapıdan giren müşteri sayısını doğrudan etkiler.",
            process:
              "Google Benim İşletmem hesabınızı doğruluyor, çalışma saatleri, ürün/mekan fotoğrafları ve SEO uyumlu hizmet açıklamalarınızla profilinizi eksiksiz yapılandırıyoruz.",
          },
          {
            name: "Haritada Üst Sıra Çalışması",
            slug: "harita-ust-sira-calismasi",
            price: "5.000",
            image: `/assets/servicess/google_maps.webp`,
            heroTitle1: "Yerel",
            heroTitle2: "SEO",
            sloganMain: "Yakınınızdaki müşterilerin",
            sloganHighlight: "ilk tercihi her zaman siz olun.",
            introText:
              "Bölgesel aramalarda rakiplerinizi geride bırakarak, haritalarda en çok tıklanan ilk 3 işletme arasına yerleşmenizi sağlıyoruz.",
            description:
              "İnsanlar acil ihtiyaçlarında genellikle haritalardaki ilk 3 işletmeyi tercih eder. Local SEO çalışması ile doğrudan o an satın almaya hazır kitleye ulaşırsınız.",
            process:
              "Bölgesel anahtar kelime analizleri yapıyor, profilinize düzenli içerik güncellemeleri giriyor ve Yerel Rehber etkileşimleriyle konumunuzun otoritesini artırıyoruz.",
          },
          {
            name: "Müşteri Yorumları Yönetimi",
            slug: "musteri-yorumlari-yonetimi",
            price: "2.000",
            image: `/assets/servicess/customer_review.webp`,
            heroTitle1: "İtibar",
            heroTitle2: "Yönetimi",
            sloganMain: "Dijitaldeki en büyük gücünüz olan",
            sloganHighlight: "sosyal kanıtınızı yönetin.",
            introText:
              "Potansiyel bir müşterinin işletmenizi ziyaret etmeden önce baktığı ilk yer olan yorumları, markanızın en büyük referans kaynağına çeviriyoruz.",
            description:
              "5 yıldızlı ve yüksek hacimli bir Google profili, binlerce liralık reklamdan daha fazla güven verir. İyi yönetilen yorumlar, satın alma kararını hızlandırır.",
            process:
              "Olumsuz yorumları profesyonelce yanıtlayıp kriz yönetimi sağlarken, olumlu yorumlara etkileşimli teşekkür mesajları bırakıyoruz.",
          },
        ],
      },
    ],
  },
  {
    id: "web-sitesi-mobil",
    title: "Web Sitesi & Mobil Uygulama",
    index: "02",
    description:
      "İşletmenize özel, modern, jet hızında ve tüm akıllı telefonlarla uyumlu dijital vitrinler ve mobil çözümler üretiyoruz.",
    bgImage: `/assets/servicess/web.webp`,
    subCategories: [
      {
        title: "Web Siteleri",
        image: `/assets/servicess/web.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "İşletmenizin dijital dünyadaki",
        sloganHighlight: "prestijli merkezini inşa edin.",
        metaTags: ["Yüksek Performans", "Modern UI/UX", "Mobil Öncelikli"],
        introText:
          "Web siteniz, markanızın 7/24 açık olan en büyük ve en maliyetsiz mağazasıdır. Tasarımından açılış hızına kadar her detayıyla müşterinize güven vermelidir.",
        descriptionTitle: "Neden Profesyonel Bir Web Sitesi Şart?",
        description:
          "Karmaşık, modası geçmiş ve yavaş web siteleri ziyaretçileri saniyeler içinde rakiplerinize kaçırır. Ziyaretçiyi yormayan, güvenli ve modern bir kullanıcı deneyimi (UI/UX) ziyaretçileri sadık müşterilere dönüştüren en güçlü faktördür.",
        blockquote:
          "Ziyaretçilerin markanıza güvenip güvenmemek için karar verme süresi sadece 3 saniyedir.",
        processTitle: "Web Geliştirme Sürecimiz Nasıl İşliyor?",
        process:
          "İşletmenizin vizyonuna ve ayırdığı bütçeye göre en uygun teknoloji yığınını (Tech Stack) seçiyor, tüm ekranlarda (Responsive) kusursuz çalışan mimariler kodluyoruz.",
        processSteps: [
          {
            title: "UI/UX Tasarımı",
            text: "Kullanıcı deneyimine odaklı, modern ve sektöre özel arayüz çizimi.",
          },
          {
            title: "Kodlama ve Entegrasyon",
            text: "Global standartlarda, yüksek performanslı temiz kod mimarisinin kurulması.",
          },
          {
            title: "Test ve Canlıya Alım",
            text: "Hız (Lighthouse), güvenlik ve tüm mobil cihazlarda uyumluluk testlerinin yapılması.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "Özel Tasarım Tek Sayfalık Tanıtım Sitesi",
            slug: "ozel-tasarim-tek-sayfa-tanitim",
            price: "10.000",
            note: "Hosting ücreti yoktur",
            image: `/assets/servicess/custom_one_page.webp`,
            heroTitle1: "Landing",
            heroTitle2: "Page",
            sloganMain: "Ziyaretçilerinizi saniyeler içinde",
            sloganHighlight: "müşteriye dönüştüren sayfalar.",
            introText:
              "Sadece dikkat çekmekle kalmayan, kullanıcıyı yormadan doğrudan hedefe (satın alma/form) yönlendiren stratejik vitrinler inşa ediyoruz.",
            description:
              "Yeni bir lansman veya dijital reklam kampanyalarınız için tasarlanmış tek sayfalık siteler, odak dağıtmadığı için en yüksek dönüşüm oranına sahiptir.",
            process:
              "Markanızın kurumsal kimliğine uygun özel bir UI/UX arayüzü çiziyoruz. Sayfayı modern teknolojilerle kodlayıp yayına alıyoruz.",
          },
          {
            name: "Hazır Tema Tek Sayfalık Tanıtım Sitesi",
            slug: "hazir-tema-tek-sayfa-tanitim",
            price: "5.000",
            note: "Hosting ücreti yoktur",
            image: `/assets/servicess/ready_to_use_theme_one_page.webp`,
            heroTitle1: "Hızlı",
            heroTitle2: "Tanıtım",
            sloganMain: "Zamana karşı yarışan projelerinizi",
            sloganHighlight: "hızla ve güvenle yayına alın.",
            introText:
              "Kısa sürede dijital bir varlık oluşturmak isteyen işletmeler için kanıtlanmış temalarla bütçe dostu bir çıkış noktası sunuyoruz.",
            description:
              "Test edilmiş ve stabil çalışan altyapılar, teknik sürprizlere yer bırakmaz. Marka prestijinizden ödün vermeden kısa sürede yerinizi alırsınız.",
            process:
              "Mobil uyumlu ve global standartlarda bir tema belirliyoruz. Görselleri, kurumsal metinleri entegre ederek hızlıca teslim ediyoruz.",
          },
          {
            name: "Özel Tasarım Kurumsal Sitesi",
            slug: "ozel-tasarim-kurumsal-site",
            price: "25.000",
            note: "Hosting ücreti yoktur",
            image: `/assets/servicess/custom_corporate_website.webp`,
            heroTitle1: "Kurumsal",
            heroTitle2: "Web",
            sloganMain: "Markanızın dijital dünyadaki",
            sloganHighlight: "prestijli genel merkezini inşa edin.",
            introText:
              "Rakiplerinizden keskin bir şekilde ayrılmanızı sağlayacak, tamamen size özel kodlanmış, dinamik içerikli devasa kurumsal web projeleri hayata geçiriyoruz.",
            description:
              "Hazır şablonlara sıkışmayan bir marka vizyonunuz varsa, web siteniz de tamamen terzi işi olmalıdır. Özel yazılımlar şirketinizin büyüklüğünü internete yansıtır.",
            process:
              "Sıfırdan UI/UX trendlerine uygun özgün tasarımlar çiziyoruz. SEO dostu mimari ve modern web araçlarıyla yüksek performanslı bir sistem kuruyoruz.",
          },
          {
            name: "Hazır Tema Kurumsal Sitesi",
            slug: "hazir-tema-kurumsal-site",
            price: "15.000",
            note: "Hosting ücreti yoktur",
            image: `/assets/servicess/ready_to_use_theme_corporate.webp`,
            heroTitle1: "Tema",
            heroTitle2: "Kurumsal",
            sloganMain: "Güçlü bir dijital duruşa",
            sloganHighlight: "hızlı ve ekonomik şekilde sahip olun.",
            introText:
              "İşletmesinin hizmetlerini ve vizyonunu profesyonel bir vitrinde sergilemek isteyen kurumlar için en ideal çözüm paketidir.",
            description:
              "Kurumsal bir duruş sergilemek, ihalelerde veya B2B görüşmelerde firmanıza büyük avantaj sağlar. Güçlü bir tema altyapısı bu duruşu en risksiz yoldan sunar.",
            process:
              "İhtiyaçlarınıza karşılık verecek güncel temalar arasından seçim yapıyoruz. Sayfalarınızı sizin içeriğinize göre şekillendiriyoruz.",
          },
          {
            name: "3D Web Sitesi (Etkileşimli)",
            slug: "3d-etkilesimli-web-sitesi",
            price: "35.000",
            image: `/assets/servicess/3d_website.webp`,
            heroTitle1: "Etkileşimli",
            heroTitle2: "3D Web",
            sloganMain: "Standartların ötesine geçip",
            sloganHighlight: "kullanıcılarınızı sitenizde büyüleyin.",
            introText:
              "Kullanıcının fare hareketlerine tepki veren ve ürünlerinizi 360 derece yaşatan yeni nesil dijital evrenler tasarlıyoruz.",
            description:
              "Ziyaretçileriniz sitenizden ayrılmak istemez. Yaratıcı kaydırma (scroll) animasyonları, markanızı sektörün teknolojik vizyoneri olarak konumlandırır.",
            process:
              "Three.js ve GSAP gibi ileri düzey render kütüphanelerini kullanarak akıcı, oyun hissiyatı veren interaktif web deneyimleri kodluyoruz.",
          },
        ],
      },
      {
        title: "Mobil Çözümler",
        image: `/assets/servicess/subServicess/mobile_development.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "Markanızı tüm sadakatiyle",
        sloganHighlight: "müşterilerinizin cebine taşıyın.",
        metaTags: ["iOS & Android", "Native Deneyim", "Ölçeklenebilir"],
        introText:
          "Mobil uygulama sahibi olmak, markanızı günde onlarca kez müşterinizin gözünün önüne getirmek, yani dijital sadakatin zirvesine oturmak demektir.",
        descriptionTitle: "Mobil Çözümler Neden Önemli?",
        description:
          "Anlık bildirimler (Push Notifications), kapalı devre kampanya sistemleri ve yüksek kullanım kolaylığı ile mobil uygulamalar; marka bağlılığı yaratmanın ve tekrarlı satışların en etkili yoludur.",
        blockquote:
          "İnternet trafiğinin %80'inden fazlası mobil cihazlardan gelmektedir. Gelecek, mobilde değil, mobilin kendisidir.",
        processTitle: "Mobil Uygulama Geliştirme Sürecimiz",
        process:
          "React Native gibi çapraz platform teknolojilerini kullanarak tek bir kod tabanından hem iOS hem Android için native hızında çalışan güvenli sistemler üretiyoruz.",
        processSteps: [
          {
            title: "Sistem Mimarisi",
            text: "Mobil uygulamanın arkasındaki sunucu (Backend) ve veritabanı altyapısının kurgulanması.",
          },
          {
            title: "Arayüz (UI) Çizimi",
            text: "Farklı akıllı telefon ekran boyutlarına özel, pürüzsüz tasarımlar.",
          },
          {
            title: "Market Süreçleri",
            text: "App Store ve Google Play yayınlanma kural onaylarının alınıp canlıya çıkılması.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "Özel Mobil Uygulama",
            slug: "ozel-mobil-uygulama",
            price: "",
            image: `/assets/servicess/custom_mobile_application_development.webp`,
            heroTitle1: "Mobil",
            heroTitle2: "Uygulama",
            sloganMain: "Markanızı tüm sadakatiyle",
            sloganHighlight: "müşterilerinizin cebine taşıyın.",
            introText:
              "İşletmenizin vizyonunu Apple App Store ve Google Play platformlarında premium arayüzlerle temsil ediyoruz.",
            description:
              "Bir mobil uygulama, müşterilerinizle aranızdaki en doğrudan bağdır. Anlık bildirimler sayesinde markanız daima el altında kalır.",
            process:
              "React Native teknolojisiyle, tek bir kod tabanından her iki platforma yüksek performanslı ve güvenli uygulama mimarileri inşa ediyoruz.",
          },
          {
            name: "Ölçeklenebilir Web Uygulamaları",
            slug: "olceklenebilir-web-uygulamalari",
            price: "",
            image: `/assets/servicess/scalable_web_application.webp`,
            heroTitle1: "Web",
            heroTitle2: "Uygulaması",
            sloganMain: "İndirme gerektirmeyen,",
            sloganHighlight: "bulut tabanlı devasa sistemler kurun.",
            introText:
              "Kullanıcıların hiçbir şey yüklemeden tarayıcı üzerinden mobil uygulama hızında kullanabildiği gelişmiş yazılım mimarileridir.",
            description:
              "Büyük veri setleri ve on binlerce anlık kullanıcı barındıran projelerin çökmeden, eşzamanlı (real-time) çalışmasını sağlar.",
            process:
              "Node.js, Supabase ve modern frontend kütüphaneleri kullanarak, ölçeklenebilir veritabanı yapıları kurguluyoruz.",
          },
          {
            name: "Randevu Uygulamaları",
            slug: "randevu-uygulamalari",
            price: "20.000",
            image: `/assets/servicess/appointment_management.webp`,
            heroTitle1: "Akıllı",
            heroTitle2: "Rezervasyon",
            sloganMain: "Telefon trafiğini bitirip",
            sloganHighlight: "takviminizi 7/24 otomatik doldurun.",
            introText:
              "Klinikler veya güzellik salonları için müşterilerin kendi başına randevu alabildiği akıllı dijital sekreter sistemleri.",
            description:
              "İşletmenizin mesai saatleri dışında bile para kazanmasını sağlar. Personel hatalarını ve randevu iptali karmaşasını tamamen bitirir.",
            process:
              "Müsaitlik durumunu gerçek zamanlı okuyan, SMS hatırlatma altyapısı bulunan kullanıcı dostu bir takvim modülü yazıyoruz.",
          },
        ],
      },
    ],
  },
  {
    id: "yazilim-otomasyon-ai",
    title: "Yazılım Otomasyonu & Yapay Zeka",
    index: "03",
    description:
      "İşletmenizin iş yükünü sıfıra indiren akıllı takip sistemleri, mağaza yönetim çözümleri ve e-ticaret altyapıları kuruyoruz.",
    bgImage: `/assets/servicess/subServicess/business_management_software.webp`,
    subCategories: [
      {
        title: "İşletme Yönetim & Yapay Zeka",
        image: `/assets/servicess/subServicess/business_management_software.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "İşletmenizin karmaşasını bitirip",
        sloganHighlight: "otomasyonun gücüne geçin.",
        metaTags: ["Yapay Zeka (AI)", "Bulut Tabanlı ERP", "Veri Güvenliği"],
        introText:
          "Tekrarlayan sıkıcı süreçleri, personel kaynaklı insan hatalarını ve finansal kayıt karmaşasını akıllı yazılımlara ve yapay zeka botlarına bırakın.",
        descriptionTitle: "İşletme Otomasyonu Bize Ne Sağlar?",
        description:
          "Operasyonel maliyetlerinizi ciddi ölçüde düşürür, kârlılığınızı net olarak görmenizi sağlar. Yapay zeka destekli yerel (local) sistemlerle gizli şirket verilerinizi dışarı aktarmadan güvende tutarak teknolojik dönüşümünüzü tamamlarsınız.",
        blockquote:
          "Rutini robotlara ve yazılıma, yaratıcılığı insanlara bırakın. Modern işletmelerin büyüme sırrı budur.",
        processTitle: "Yazılım ve Yapay Zeka Entegrasyon Sürecimiz",
        process:
          "İşletmenizin mevcut akışını fiziki ve dijital olarak inceliyor, darboğaz yaşanan noktaları tespit edip size özel kontrol panelleri (Dashboard) veya yerel AI modelleri eğitiyoruz.",
        processSteps: [
          {
            title: "İhtiyaç Analizi",
            text: "Operasyonel hataların ve şirket içi zaman kayıplarının tespiti.",
          },
          {
            title: "Yazılım Geliştirme",
            text: "Bulut tabanlı (SaaS) ERP veya Yerel AI modellerinin kodlanması.",
          },
          {
            title: "Eğitim ve Adaptasyon",
            text: "Yeni nesil yönetim sisteminin personelinize eksiksiz şekilde entegre edilmesi.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "Stok, Kasa, Adisyon ve Finans",
            slug: "stok-kasa-adisyon-ve-finans",
            price: "",
            image: `/assets/servicess/subServicess/business_management_software.webp`,
            heroTitle1: "Adisyon &",
            heroTitle2: "Finans",
            sloganMain: "İşletmenizin tüm matematiğini",
            sloganHighlight: "tek bir güvenli ekranda toplayın.",
            introText:
              "Restoranınızın masalarından kasanızdaki nakde kadar her şeyi bulut tabanlı bir ERP sistemiyle kontrol altına alın.",
            description:
              "Hesap kaçaklarını sıfırlar, satılan ürünlerden anlık stok düşer ve size detaylı kar-zarar analizleri sunar.",
            process:
              "Tablet veya masaüstünde donmadan çalışan, pos cihazlarıyla entegre edilebilen, yetki sınırlandırmalı güvenli mimariler kodluyoruz.",
          },
          {
            name: "İşletme Otomasyonu",
            slug: "isletme-otomasyonu",
            price: "",
            image: `/assets/servicess/automated_business_operations.webp`,
            heroTitle1: "İşletme",
            heroTitle2: "Otomasyonu",
            sloganMain: "Tekrarlayan işleri yazılıma bırakın,",
            sloganHighlight: "siz işletmenizi büyütmeye odaklanın.",
            introText:
              "İnsan müdahalesi gerektiren sıkıcı görevleri robotik yazılımlara devrederek operasyon hızınızı katlıyoruz.",
            description:
              "Personel maliyetlerinizi düşürür ve saatler süren raporlama gibi süreçlerin arka planda saliseler içinde otomatik yapılmasını sağlar.",
            process:
              "Mevcut sistemleri birbirine bağlıyor, belirli tetikleyicilerle çalışan özel yazılım senaryoları kurguluyoruz.",
          },
          {
            name: "Yerelde Çalışan Yapay Zeka (AI)",
            slug: "yerelde-calisan-yapay-zeka",
            price: "",
            image: `/assets/servicess/local_ai.webp`,
            heroTitle1: "Local",
            heroTitle2: "AI",
            sloganMain: "Veri gizliliğinizi koruyan,",
            sloganHighlight: "sadece size özel yapay zeka gücü.",
            introText:
              "Dış API'lere bağımlı olmayan, şirketinizin mahrem verilerini dışarı sızdırmadan çalışan akıllı AI asistanları.",
            description:
              "Yıllardır biriken verilerini okuyabilen, size raporlar sunan bu sistem; sunucu maliyeti yaratmaz ve %100 gizlilik sağlar.",
            process:
              "Açık kaynaklı dil modellerini (LLM) işletme sistemlerinize gömüyor ve yerel ağınızda stabil çalışmasını sağlıyoruz.",
          },
        ],
      },
      {
        title: "Dijital Satış & Pazaryeri",
        image: `/assets/servicess/subServicess/e-commerce.webp`,

        // --- YENİ EKLENEN DİNAMİK ALANLAR ---
        sloganMain: "Ürünlerinizi sınır tanımadan",
        sloganHighlight: "dünyanın her yerine ulaştırın.",
        metaTags: ["E-Ticaret", "Sanal POS", "Sınırsız Ölçek"],
        introText:
          "Fiziksel bir mağaza mahallenize hitap ederken, doğru kurgulanmış bir e-ticaret altyapısı size tüm dünyanın kapılarını açar. Sınırları ortadan kaldırıyoruz.",
        descriptionTitle: "Kusursuz Bir E-Ticaret Deneyimi",
        description:
          "Müşterilerinize pürüzsüz ve hızlı bir alışveriş deneyimi sunmak, iptalleri azaltır ve sepet (AOV) ortalamasını artırır. Hazır altyapılar veya devasa custom projelerle ticareti tamamen dijitale taşıyoruz.",
        blockquote:
          "Yarınları yakalamanın yolu, bugünden ticaretinizi dijital bulutlara taşımaktır.",
        processTitle: "Kurulum ve Yayına Alma Sürecimiz",
        process:
          "Sektörünüzün dinamiklerine, satış yapacağınız ürün adedine ve bütçenize göre hazır sistemler (Shopify/WooCommerce) veya tamamen size özel yazılmış mimariler kurguluyoruz.",
        processSteps: [
          {
            title: "Altyapı Seçimi",
            text: "Projenizin boyutuna ve vizyonuna göre en doğru sistemin belirlenmesi.",
          },
          {
            title: "Ödeme Entegrasyonu",
            text: "Iyzico, PayTR veya Stripe gibi Sanal POS'ların sisteme entegre edilmesi.",
          },
          {
            title: "Test ve Canlıya Alım",
            text: "Sepet adımlarının, kargo takiplerinin ve güvenlik protokollerinin testi.",
          },
        ],
        // ------------------------------------

        items: [
          {
            name: "E-Ticaret (Hazır altyapı)",
            slug: "hazir-altyapi-eticaret",
            price: "25.000",
            image: `/assets/servicess/e-commerce_website.webp`,
            heroTitle1: "E-Ticaret",
            heroTitle2: "Sistemleri",
            sloganMain: "Ürünlerinizi sınır tanımadan",
            sloganHighlight: "dünyanın her yerine ulaştırın.",
            introText:
              "Güvenli online ödeme sistemleri ve anlaşmalı kargo entegrasyonlarıyla donatılmış, yönetim paneli güçlü satış platformları.",
            description:
              "Mağazanızın kapıları 7/24 açık kalır. Hazır ve test edilmiş altyapılar sayesinde güvenlik açıkları yaşamadan pazarlamaya odaklanırsınız.",
            process:
              "WooCommerce gibi global e-ticaret altyapılarını sitenize kuruyor; Sanal POS, stok varyasyonları modüllerini entegre ediyoruz.",
          },
          {
            name: "Özel E-Ticaret (Custom)",
            slug: "ozel-eticaret-custom",
            price: "",
            image: `/assets/servicess/custom_e-commerce.webp`,
            heroTitle1: "Custom",
            heroTitle2: "Pazaryeri",
            sloganMain: "Sınırları olmayan, devasa",
            sloganHighlight: "kullanıcı trafiğine hazır mimariler.",
            introText:
              "Bayilik sistemleri, çoklu satıcı barındıran pazaryeri kurguları veya kuralları sizin koyduğunuz özel projeler.",
            description:
              "Hazır sistemlerin yetersiz kaldığı senaryolarda; yüz binlerce ürünü ve eşzamanlı trafiği kaldıran tamamen özel yazılımlardır.",
            process:
              "Frontend'i React mimarisiyle kodlarken, Backend'i esnek veritabanı yönetim sistemleriyle operasyonunuza göre inşa ediyoruz.",
          },
        ],
      },
    ],
  },
];
