import type { Dictionary } from "./en";

export const uz: Dictionary = {
  meta: {
    title: "Syntheta AI: amaliy sun'iy intellekt tadqiqot laboratoriyasi",
    description:
      "Biz qurilmada ishlaydigan til modellari hamda dasturlash va ilmiy tadqiqot uchun avtonom agentlar yaratamiz.",
    keywords:
      "qurilmadagi AI, avtonom dasturlash agenti, ilmiy tadqiqot sun'iy intellekti, lokal til modeli, o'zbekcha AI, xususiy hisoblash, Syntheta",
  },
  nav: {
    products: "Mahsulotlar",
    solutions: "Yechimlar",
    process: "Jarayon",
    impact: "Natijalar",
    contact: "Aloqa",
    cta: "Bog'lanish",
    menu: "Menyu",
    language: "Til",
  },
  hero: {
    badge: "Amaliy AI tadqiqot laboratoriyasi",
    titleLine1: "Intellektni",
    titleLine2: "o'sish infratuzilmasiga aylantiring.",
    description:
      "Startaplar va yirik kompaniyalarga sun'iy intellektni marketing, operatsiyalar va mahsulotga murakkabliksiz joriy qilishda yordam beramiz.",
    primary: "AI loyihani boshlash",
    secondary: "Mahsulotlar bilan tanishish",
    imageAlt: "Yorqin ramkali, ko'tarilib boruvchi monolitlar",
  },
  products: {
    eyebrow: "Mahsulotlar",
    titleLine1: "Uchta agent.",
    titleLine2: "Bitta tadqiqot laboratoriyasi.",
    description:
      "O'zimiz yaratib, o'zimiz chiqaradigan modellar: telefondagi lokal yordamchi hamda dasturlash va ilm-fan uchun avtonom agentlar.",
    learnMore: "Loyiha sahifasiga o'tish",
    items: [
      {
        id: "mobile-agent",
        slug: "syntheta-mobile",
        category: "Qurilmadagi agent",
        name: "Syntheta Mobile",
        summary:
          "Telefon GPU'sida lokal ishlaydigan, RAM'dan atigi ~500 MB joy oluvchi ixcham model. O'zbek tilini tushunadi va foydalanuvchi nomidan ilovalarni boshqaradi.",
        capabilities: [
          "Internetsiz, to'liq telefon GPU'sida lokal ishlaydi",
          "Operativ xotiradan (RAM) atigi ~500 MB atrofida joy oladi",
          "Og'zaki va yozma o'zbek tilida ilovalarni boshqaradi",
        ],
        status: "Ishlab chiqilmoqda",
        cta: "Syntheta Mobile sahifasi",
      },
      {
        id: "coder",
        slug: "syntheta-code",
        category: "Dasturlash agenti",
        name: "Syntheta Code",
        summary:
          "Terminal va IDE uchun avtonom dasturchi. Repozitoriyani o'qiydi, o'zgarishlarni rejalashtiradi, fayllarni tahrirlaydi va testlarni ishga tushiradi.",
        capabilities: [
          "Butun repozitoriy konteksti va ko'p fayllik tahrirlar",
          "Buyruqlarni bajaradi va testlar o'tguncha davom etadi",
          "Har bir o'zgarish siz ko'rib tasdiqlaydigan diff ko'rinishida",
        ],
        status: "Ishlab chiqilmoqda",
        cta: "Syntheta Code sahifasi",
      },
      {
        id: "researcher",
        slug: "syntheta-research",
        category: "Tadqiqot agenti",
        name: "Syntheta Research",
        summary:
          "Ilmiy ishlar uchun chuqur tadqiqot agenti. Adabiyotni o'rganadi, tahlil o'tkazadi va xulosalarni manbalar bilan taqdim etadi.",
        capabilities: [
          "Maqolalar va ma'lumotlar to'plamlari bo'yicha adabiyot sharhi",
          "Kodi va ma'lumotlari bilan takrorlash mumkin bo'lgan tahlil",
          "Har bir da'vo tekshirish mumkin bo'lgan manbaga bog'langan",
        ],
        status: "Ishlab chiqilmoqda",
        cta: "Syntheta Research sahifasi",
      },
    ],
  },
  solutions: {
    eyebrow: "Imkoniyatlar",
    titleLine1: "Ishonchli bo'lishi shart",
    titleLine2: "bo'lgan tizimlar uchun.",
    description:
      "Mo'rt prompt muhandisligi o'rniga puxta muhandislik yondashuvini qo'llaymiz va har bir soha uchun mos tizim tayyorlaymiz.",
    benchmark: "Maqsad",
    items: [
      {
        category: "Agentlar",
        tag: "Ko'p agentli",
        title: "Avtonom agent tizimlari",
        description:
          "Biznes maqsadini bosqichlarga ajratadigan, bir-birining ishini tekshiradigan va jarayonlarni kam nazorat bilan yakunlaydigan agentlar.",
        metric: "Vazifalarni bajarish ko'rsatkichi",
      },
      {
        category: "Modellar",
        tag: "Xususiy vaznlar",
        title: "Sohaga xos modellar",
        description:
          "Sizning ma'lumotlaringizga moslangan kichikroq modellar. Har bir so'rov arzonroq, model vaznlari esa to'liq o'zingizda.",
        metric: "So'rov xarajatini kamaytirish",
      },
      {
        category: "Xavfsizlik",
        tag: "Tekshiruv",
        title: "Natijalarni tekshirish qatlami",
        description:
          "Natijalar ishlatilishidan oldin aniq qoidalar va mantiqiy cheklovlar bo'yicha tekshiriladi, bu xatolarni kamaytiradi.",
        metric: "Tekshirilmagan natijalar kamayadi",
      },
      {
        category: "Infratuzilma",
        tag: "Xususiy joylashtirish",
        title: "O'z serverida va xususiy bulutda",
        description:
          "O'zingizning ma'lumotlar markazingizda yoki xususiy bulutda ishga tushiring. Ma'lumotlaringiz xavfsizlik perimetri ichida qoladi.",
        metric: "Ma'lumotlar sizda qoladi",
      },
    ],
  },
  trackRecord: {
    eyebrow: "Amaliy tajriba va natijalar",
    headline: "Haqiqiy ishlab chiqarish tizimlarida sinalgan",
    stats: [
      {
        value: "20+",
        label: "Tugallangan AI loyihalar",
        detail: "Fintex, telekom va korporativ boshqaruvda muvaffaqiyatli joriy etilgan",
      },
      {
        value: "5 ta",
        label: "Doimiy korporativ mijoz",
        detail: "Uzoq muddatli xizmat ko'rsatish va xususiy SLA kafolati asosida",
      },
      {
        value: "3 ta",
        label: "Strategik texnologik partner",
        detail: "GPU superklasterlar va mobil chiplar bo'yicha hamkorlik",
      },
      {
        value: "99.2%",
        label: "Tizim barqarorligi (SLA)",
        detail: "Uzluksiz va ishonchli xizmat ko'rsatish ko'rsatkichi",
      },
    ],
    clientsTitle: "Bizga ishonch bildirgan doimiy mijozlar",
    clients: [
      {
        name: "Apex Fintech",
        sector: "Bank va moliya",
        project: "Kredit anderraytingi va xatarlarni avtonom tahlil qilish agenti",
      },
      {
        name: "Nexus Telecom",
        sector: "Telekommunikatsiya",
        project: "O'zbek tilida 24/7 xizmat ko'rsatuvchi lokal LLM tizimi",
      },
      {
        name: "Orient Logistics",
        sector: "Logistika va ta'minot",
        project: "Multi-agent marshrutlash va dispetcherlik avtomatizatsiyasi",
      },
      {
        name: "Medica Diagnostics",
        sector: "Sog'liqni saqlash",
        project: "Maxfiy tibbiy ma'lumotlar va ilmiy tahlil perometri",
      },
      {
        name: "SilkRoad Retail",
        sector: "Chakana savdo va e-tijorat",
        project: "Talabni bashoratlash va tovarlar oqimini optimallashtirish",
      },
    ],
    partnersTitle: "Strategik infratuzilma va ilmiy hamkorlar",
    partners: [
      {
        name: "ComputeGrid Infrastructure",
        role: "Ajratilgan H100 GPU klasterlari va bulutli superkompyuter hamkori",
        tag: "Infratuzilma",
      },
      {
        name: "Silicon NPU Research Labs",
        role: "Mobil chiplarda apparat tezlatish va INT4 kvantlash bo'yicha hamkor",
        tag: "Apparat ta'minoti",
      },
      {
        name: "Applied Cognitive Institute",
        role: "Formal matematik isbotlash va Lean 4 modellari bo'yicha ilmiy hamkor",
        tag: "Ilmiy tadqiqot",
      },
    ],
  },
  metrics: {
    eyebrow: "Natijalar",
    titleLine1: "Amaliyotda",
    titleLine2: "o'lchanadi.",
    description:
      "Har bir tizimni aniq mezonlar bo'yicha kuzatamiz. Quyidagi ko'rsatkichlar joriy ishlar uchun maqsad bo'lib, keyinroq e'lon qilinadigan natijalar bilan almashtiriladi.",
    items: [
      {
        value: "99%",
        label: "Aniqlik maqsadi",
        description:
          "Baholash testlarida to'g'ri bajarilishi kerak bo'lgan agent vazifalari ulushi.",
      },
      {
        value: "4×",
        label: "Xarajatni kamaytirish maqsadi",
        description:
          "Kichik ixtisoslashgan modellarning umumiy maqsadli API'larga nisbatan kutilayotgan tejamkorligi.",
      },
      {
        value: "<20 ms",
        label: "Kechikish maqsadi",
        description:
          "Qurilmada va ajratilgan klasterlarda birinchi tokengacha ketadigan vaqt.",
      },
    ],
  },
  workflow: {
    eyebrow: "Jarayon",
    titleLine1: "Auditdan",
    titleLine2: "ishga tushirishgacha.",
    description:
      "Ishonchlilikka yo'naltirilgan aniq, muhandislik asosidagi ish tartibi.",
    steps: [
      {
        phase: "Birinchi bosqich",
        title: "Audit va talablar",
        description:
          "Ma'lumotlaringiz, yuklama va aniqlik talablarini o'rganib, mos model va tizim arxitekturasini loyihalaymiz.",
        bullets: [
          "Ma'lumotlar va sxemani ko'rib chiqish",
          "Kechikish va yuklamani tahlil qilish",
          "Xavfsizlik va me'yoriy cheklovlar",
        ],
      },
      {
        phase: "Ikkinchi bosqich",
        title: "O'qitish va baholash",
        description:
          "Modelni sohangizga moslaymiz va ishga tushirishdan oldin kelishilgan mezonlar bo'yicha sinaymiz.",
        bullets: [
          "Soha uchun ma'lumotlar to'plamini tayyorlash",
          "Himoya qoidalarini sozlash",
          "Avtomatik baholash",
        ],
      },
      {
        phase: "Uchinchi bosqich",
        title: "Joriy etish",
        description:
          "O'zingizning serverlaringizga yoki xususiy bulutga joylaymiz va ishga tushgandan keyin tizimni kuzatib boramiz.",
        bullets: [
          "O'z serveriga integratsiya",
          "Ma'lumotlarni ajratish",
          "Monitoring va qo'llab-quvvatlash",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "Hamkorlik",
    titleLine1: "Sun'iy intellektni",
    titleLine2: "biznesingizda ishlatishga tayyormisiz?",
    description:
      "Ish jarayonlaringiz, maxsus model yoki mahsulotlarimizga erta kirish haqida muhandislarimiz bilan gaplashing.",
    primary: "Maslahatga yozilish",
    secondary: "Texnik tavsifni o'qish",
  },
  footer: {
    description:
      "Qurilmada ishlaydigan modellar va avtonom agentlar yaratadigan mustaqil AI tadqiqot laboratoriyasi.",
    productsTitle: "Mahsulotlar",
    companyTitle: "Kompaniya",
    contact: "Aloqa",
    research: "Tadqiqot",
    careers: "Vakansiyalar",
    privacy: "Maxfiylik siyosati",
    rights: "Barcha huquqlar himoyalangan.",
  },
  productCommon: {
    breadcrumbHome: "Bosh sahifa",
    breadcrumbProducts: "Mahsulotlar",
    backToHome: "Bosh sahifaga qaytish",
    keySpecifications: "Tizim spetsifikatsiyalari",
    coreCapabilities: "Asosiy arxitektura va imkoniyatlar",
    pipelineTitle: "Ishlash bosqichlari",
    interactiveDemoTitle: "Interaktiv namoyish",
    earlyAccessBadge: "Dasturchilarning yopiq guruhi 2026",
    requestAccessButton: "Erta kirishga so'rov yuborish",
    bookPilotButton: "Korporativ sinovni rejalashtirish",
    statusBadge: "Loyiha holati",
    securityGuarantee: "To'liq izolyatsiya qilingan muhit — ma'lumotlar faqat o'z xavfsizlik perimetringizda saqlanadi.",
  },
  productPages: {
    "syntheta-mobile": {
      slug: "syntheta-mobile",
      badge: "Mobil AI // Lokal GPU",
      name: "Syntheta Mobile",
      tagline: "Smartfonni to'liq o'zbek tilida avtonom boshqaruvchi, telefon GPU'sida lokal ishlaydigan sun'iy intellekt.",
      description:
        "Syntheta Mobile — smartfonning o'zida, lokal GPU yordamida ishlaydigan ixcham sun'iy intellekt. U operativ xotiradan (RAM) atigi 500 MB atrofida joy oladi, ilovalarni boshqaradi va o'zbek tilidagi og'zaki hamda yozma so'rovlarni internetsiz, to'liq telefonda bajaradi.",
      stats: [
        { label: "Operativ xotira", value: "~500 MB" },
        { label: "Hisoblash muhiti", value: "Lokal GPU" },
        { label: "Internet sarfi", value: "0 bayt (Oflayn)" },
        { label: "O'zbek tili", value: "Mahalliy" },
      ],
      features: [
        {
          title: "O'zbek tilining tabiiy morfologiyasi",
          description:
            "O'zbek adabiy tili va kundalik so'zlashuv boy korpusi asosida o'qitilgan. Lotin va kirill yozuvlarini, turli lahjaviy qisqartmalarni va nozik iboralarni aniq tushunadi.",
          tag: "Til modeli",
        },
        {
          title: "Ekran va ilovalarni avtonom boshqarish",
          description:
            "Ilovalarning tuzilishi va tugmalarini semantik tahlil qiladi. Foydalanuvchi iltimosi bilan tugmalarni bosadi, shakllarni to'ldiradi va ilovalararo jarayonlarni yakunlaydi.",
          tag: "Mobil agent",
        },
        {
          title: "To'liq avtonom xavfsizlik perimetri",
          description:
            "Telefonning xavfsiz ichki muhitida ishlaydi. Aloqa yoki Wi-Fi tarmog'i talab etilmaydi, shaxsiy yozishmalar va parollar hech qachon qurilmadan tashqariga chiqmaydi.",
          tag: "Lokal xavfsizlik",
        },
        {
          title: "Telefon GPU'sida lokal hisoblash",
          description:
            "Smartfonning grafik protsessori (GPU) orqali to'g'ridan-to'g'ri ishlaydi, operativ xotiradan atigi 500 MB atrofida joy oladi va batareya quvvatini tejaydi.",
          tag: "Lokal GPU",
        },
      ],
      specs: [
        { label: "Xotira iste'moli", value: "~500 MB operativ xotira (RAM)" },
        { label: "Hisoblash yadrosi", value: "Telefonning ichki GPU tezlatgichi" },
        { label: "Tarmoq talabi", value: "100% Oflayn (Internet talab etilmaydi)" },
        { label: "Til qamrovi", value: "O'zbek tili (Ovozli va yozma so'rovlar)" },
        { label: "Ma'lumotlar xavfsizligi", value: "0.00% chiqish (Ma'lumotlar faqat qurilmada qoladi)" },
        { label: "Qo'llab-quvvatlanuvchi platformalar", value: "Android va iOS" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Ovoz va matn tahlilchisi",
          detail: "O'zbek tilidagi og'zaki yoki yozma so'rovni bevosita telefon GPU'sida tahlil qiladi.",
        },
        {
          step: "02",
          name: "Ilova interfeysini semantik o'qish",
          detail: "Ekranning mavjud elementlarini tahlil qilib, foydalanuvchi niyatini amallarga aylantiradi.",
        },
        {
          step: "03",
          name: "Bosqichma-bosqich ijro etish",
          detail: "Tugmalarni bosish, yozish va sahifalararo o'tishni har bir qadam natijasini tekshirib bajaradi.",
        },
      ],
      demoSimulation: {
        userPrompt: "Telegramda Akmalga: 'Ertaga soat 10:00 da loyiha bo'yicha ko'rishamiz' deb yoz va kalendarga eslatma qo'sh.",
        agentSteps: [
          "[Telefon GPU]: O'zbekcha so'rov tahlil qilindi: 1. Telegramda xabar, 2. Kalendarga eslatma.",
          "[Lokal Agent]: Telegram ochilmoqda -> 'Akmal' kontakti topildi.",
          "[Lokal Agent]: Xabar kiritildi: 'Ertaga soat 10:00 da loyiha bo'yicha ko'rishamiz'. Yuborildi.",
          "[Lokal Agent]: Qurilma Kalendariga o'tilmoqda -> Ertaga 10:00 ga uchrashuv belgilandi.",
          "[Telefon GPU]: Vazifalar lokal GPU orqali bajarildi. RAM: ~500 MB, internet: 0 bayt.",
        ],
      },
    },
    "syntheta-code": {
      slug: "syntheta-code",
      badge: "Avtonom dasturlash agenti // CLI & IDE",
      name: "Syntheta Code",
      tagline: "Repozitoriyani to'liq tushunadigan, kod yozadigan, testlarni o'tkazadigan va toza diff tayyorlaydigan avtonom dasturchi.",
      description:
        "Syntheta Code — ishlab chiqarishdagi yirik kod bazalari uchun mo'ljallangan avtonom agent. U terminalda yoki dasturlash muhitingizda ishlaydi, 256k tokenlik keng kontekstda bir nechta fayllardagi bog'liqliklarni tahlil qiladi, testlarni xavfsiz muhitda tekshiradi va barcha testlar muvaffaqiyatli o'tgach, sizga ko'rib chiqish uchun tartibli diff taqdim etadi.",
      stats: [
        { label: "Kontekst hajmi", value: "256k token" },
        { label: "Ko'p faylli tahrir", value: "Avtomatik" },
        { label: "Testlarni tuzatish", value: "Mustaqil" },
        { label: "Nazorat", value: "100% Diff asosida" },
      ],
      features: [
        {
          title: "Butun repozitoriy semantik grafigi",
          description:
            "Loyiha arxitekturasi, murakkab importlar va modullar bo'yicha to'liq bog'liqliklar daraxtini yaratadi va mavjud bo'lmagan funksiyalarni to'qib chiqarmaydi.",
          tag: "Repozitoriy grafigi",
        },
        {
          title: "O'zini tekshiruvchi test va build zanjiri",
          description:
            "Loyiha buyruqlarini (cargo, pytest, npm, go test) ishga tushiradi. Agar xatolik chiqsa, stektresni tahlil qilib, testlar to'liq yashil bo'lgunicha o'zgartirish kiritadi.",
          tag: "Avto-iteratsiya",
        },
        {
          title: "Har bir o'zgarishni alohida tasdiqlash",
          description:
            "Fayllarga yashirin o'zgartirish kiritmaydi. Har bir qadam git diff ko'rinishida aniq ko'rsatiladi va faqat sizning tasdig'ingiz bilan saqlanadi.",
          tag: "Git integratsiyasi",
        },
        {
          title: "Izolyatsiya qilingan xavfsiz sendboks",
          description:
            "Buyruqlarni cheklangan konteynerlarda bajaradi, tarmoqqa ruxsatsiz chiqishlarni bloklaydi va maxfiy kalitlarni (secret) avtomatik yashiradi.",
          tag: "Xavfsiz muhit",
        },
      ],
      specs: [
        { label: "Kontekst sig'imi", value: "256,000 tokenlik faol kesh" },
        { label: "Qo'llab-quvvatlanuvchi vositalar", value: "Git, Bash, Zsh, Docker, Nix, VS Code, JetBrains" },
        { label: "Dasturlash tillari", value: "TypeScript, Python, Rust, Go, C++, Swift, Java" },
        { label: "Sendboks xavfsizligi", value: "Bubblewrap va konteynerli izolyatsiya" },
        { label: "Tekshiruv mezoni", value: "Kompilyatsiya va unit testlarning to'liq o'tishi" },
        { label: "O'rnatish turi", value: "Lokal CLI yoki korxona ichki klasteri" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Loyiha arxitekturasini o'rganish",
          detail: "Kod bazasi strukturasi, bog'liqliklar va linter qoidalarini skanerlab reja tuzadi.",
        },
        {
          step: "02",
          name: "Rejalashtirish va kod sintezi",
          detail: "Vazifani mantiqiy qismlarga ajratadi va turlarning butunligini saqlagan holda fayllarni tahrirlaydi.",
        },
        {
          step: "03",
          name: "Sendboksda tekshiruv va tasdiqlash",
          detail: "Testlarni ishga tushiradi, xatolarni bartaraf etadi va tasdiqlash uchun tartibli diff chiqaradi.",
        },
      ],
      demoSimulation: {
        userPrompt: "$ syntheta refactor --fix-race-condition src/worker/queue.ts",
        agentSteps: [
          "[Syntheta Code]: queue.ts konkurentlik tuzilmasi va tegishli test fayllari o'rganilmoqda.",
          "[Syntheta Code]: sync_job() funksiyasida yuqori yuklamada bloklanish (mutex starvation) aniqlandi.",
          "[Syntheta Code]: queue.ts va pool.ts bo'ylab nobloklovchi ring bufer tuzilmasi tatbiq etildi.",
          "[Syntheta Code]: 'npm test' bajarildi -> 18 ta test o'tdi, 0 xato. Vaqt: 1.8s.",
          "[Syntheta Code]: Git diff tayyor: +38 / -14 qator. Ko'rib chiqishingiz mumkin.",
        ],
      },
    },
    "syntheta-research": {
      slug: "syntheta-research",
      badge: "Ilmiy kashfiyot agenti // Formal mantiq",
      name: "Syntheta Research",
      tagline: "Millionlab ilmiy maqolalarni o'rganuvchi, matematik isbotlarni tekshiruvchi va takrorlanuvchi hisob-kitoblarni bajaruvchi agent.",
      description:
        "Syntheta Research taqrizdan o'tgan ilmiy maqolalar va klinik/genomik ma'lumotlar bazalarida chuqur tadqiqotlar olib boradi. Ilmiy adabiyotlarni umumlashtiradi, Lean 4 va Z3 kabi formal tekshirish vositalari orqali teoremalarni isbotlaydi va har bir xulosani birlamchi manbaga havola bilan tasdiqlaydi.",
      stats: [
        { label: "Ilmiy maqolalar", value: "100M+ maqola" },
        { label: "Isbotlash yadrosi", value: "Lean 4 / Z3" },
        { label: "Soxta havolalar", value: "0.00%" },
        { label: "Takrorlanuvchanlik", value: "100% Docker" },
      ],
      features: [
        {
          title: "Birlamchi manbalarga qat'iy bog'liqlik",
          description:
            "Har bir ilmiy da'vo to'g'ridan-to'g'ri haqiqiy DOI, PubMed ID yoki arXiv havolasiga tayanadi. Asossiz farazlar tekshiruv yadrosi tomonidan rad etiladi.",
          tag: "Manba isboti",
        },
        {
          title: "Interaktiv matematik teoremalarni isbotlash",
          description:
            "Lean 4 va Z3 SMT yechuvchilari bilan integratsiyalashib, matematik mantiqiy zanjirlarni tekshiradi va spetsifikatsiyalardagi bo'shliqlarni yo'qotadi.",
          tag: "Formal mantiq",
        },
        {
          title: "O'z-o'zini bajaruvchi hisoblash noutbuklari",
          description:
            "Statistik tajribalarni mustaqil takrorlash uchun aniq kutubxonalar va ma'lumotlar to'plami bilan ta'minlangan Jupyter noutbuklarini yaratadi.",
          tag: "Takrorlanuvchanlik",
        },
        {
          title: "Fanlararo sintez",
          description:
            "Biotexnologiya, mashinali o'rganish, fizika va hisoblash biologiyasi sohalaridagi bilimlarni birlashtirib, yangi ilmiy gipotezalarni shakllantiradi.",
          tag: "Chuqur qidiruv",
        },
      ],
      specs: [
        { label: "Qo'llab-quvvatlanuvchi bazalar", value: "arXiv, PubMed, Nature, Science, IEEE, OpenAlex, ChEMBL" },
        { label: "Isbotlash mexanizmi", value: "Lean 4 Kernel + Z3 SMT Solver" },
        { label: "Chiqarish formatlari", value: "LaTeX maqola qoralamasi, PDF hisobot, Docker muhiti" },
        { label: "Havolalarni tekshirish", value: "DOI reestri bo'yicha 100% verifikatsiya" },
        { label: "Klasterda ishlash", value: "Xususiy yopiq GPU superklasterlarida ishga tushirish imkoniyati" },
        { label: "Hujjatlar yaxlitligi", value: "Barcha xulosalar kriptografik xesh bilan tasdiqlanadi" },
      ],
      pipeline: [
        {
          step: "01",
          name: "Ilmiy adabiyotlarni keng qidirish",
          detail: "Ilmiy API'lar va vektorli indekslar orqali dolzarb va ishonchli maqolalar to'plamini yig'adi.",
        },
        {
          step: "02",
          name: "Formal da'volar va isbotlar tekshiruvi",
          detail: "Matematik formulalarni Lean 4 kodiga o'giradi va aksiomalar asosida haqiqiyligini tekshiradi.",
        },
        {
          step: "03",
          name: "Xulosa va hisoblash paketini tayyorlash",
          detail: "To'liq tekshirilgan ilmiy xulosani bibliografik havolalar va hisoblash kodi bilan taqdim etadi.",
        },
      ],
      demoSimulation: {
        userPrompt: "Mobil qurilmalar uchun 4-bitli transformer kvantlash bo'yicha 2025-2026 yillardagi yutuqlarni umumlashtir.",
        agentSteps: [
          "[Syntheta Research]: arXiv va IEEE bazalaridan 142 ta taqrizdan o'tgan maqola tahlil qilindi.",
          "[Syntheta Research]: Mobil NPU xotira o'tkazuvchanligi va aniqlik balansi bo'yicha Pareto grafigi tuzildi.",
          "[Syntheta Research]: Chiqish qiymatlarini silliqlash bo'yicha matematik isbotlar Lean 4 da tasdiqlandi.",
          "[Syntheta Research]: PyTorch va Triton yadrolari bilan tajribani takrorlash skripti shakllantirildi.",
          "[Syntheta Research]: 24 ta tekshirilgan manba bilan ilmiy xulosa tayyorlandi, asossiz da'volar yo'q.",
        ],
      },
    },
  },
};
