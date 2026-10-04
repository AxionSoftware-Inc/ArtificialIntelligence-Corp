import type { Dictionary } from "./en";

export const uz: Dictionary = {
  meta: {
    title: "Syntheta AI: amaliy sun'iy intellekt tadqiqot laboratoriyasi",
    description:
      "Biz qurilmada ishlaydigan til modellari hamda dasturlash va ilmiy tadqiqot uchun avtonom agentlar yaratamiz.",
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
    items: [
      {
        id: "mobile-agent",
        category: "Qurilmadagi agent",
        name: "Syntheta Mobile",
        summary:
          "To'liq telefonning o'zida ishlaydigan ixcham model. O'zbek tilini tushunadi va foydalanuvchi nomidan ilovalarni boshqaradi.",
        capabilities: [
          "Internetsiz ishlaydi, ma'lumotlar qurilmadan chiqmaydi",
          "Og'zaki va yozma o'zbek tilini tushunadi",
          "Oddiy so'rov bo'yicha ilova va sozlamalarni boshqaradi",
        ],
        status: "Ishlab chiqilmoqda",
        cta: "Erta kirishga so'rov yuborish",
      },
      {
        id: "coder",
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
        cta: "Erta kirishga so'rov yuborish",
      },
      {
        id: "researcher",
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
        cta: "Erta kirishga so'rov yuborish",
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
};
