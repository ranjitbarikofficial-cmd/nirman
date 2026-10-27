/**
 * Central Site Configuration, Country-Wise Currencies, and Multilingual Translations
 * Agency Name: Nirman
 */

export type CountryCode = "IN" | "US" | "GB" | "EU" | "AE" | "AU" | "CA";
export type LanguageCode = "en" | "hi" | "es" | "fr" | "ar";

export interface CountryCurrencyConfig {
  code: CountryCode;
  countryName: string;
  flag: string;
  currencyCode: string;
  symbol: string;
  /** Exchange multiplier relative to base USD price, rounded to clean marketing numbers */
  rates: {
    // Services starting prices
    serviceBusiness: string;
    serviceEcommerce: string;
    serviceLanding: string;
    serviceRedesign: string;
    serviceSeoMonthly: string;
    // Package prices
    pkgStarter: string;
    pkgBusiness: string;
    pkgPremium: string;
    // Budget ranges for the lead form
    budgets: [string, string, string, string];
    // Portfolio result metric for e-commerce
    portfolioSalesResult: string;
  };
}

export const COUNTRIES: Record<CountryCode, CountryCurrencyConfig> = {
  IN: {
    code: "IN",
    countryName: "India",
    flag: "🇮🇳",
    currencyCode: "INR",
    symbol: "₹",
    rates: {
      serviceBusiness: "₹24,999",
      serviceEcommerce: "₹44,999",
      serviceLanding: "₹14,999",
      serviceRedesign: "₹29,999",
      serviceSeoMonthly: "₹7,999/mo",
      pkgStarter: "₹19,999",
      pkgBusiness: "₹34,999",
      pkgPremium: "₹59,999",
      budgets: [
        "₹15,000 – ₹30,000",
        "₹30,000 – ₹60,000",
        "₹60,000 – ₹1,20,000",
        "₹1,20,000+",
      ],
      portfolioSalesResult: "₹18L+ in online sales within first 3 months",
    },
  },
  US: {
    code: "US",
    countryName: "United States",
    flag: "🇺🇸",
    currencyCode: "USD",
    symbol: "$",
    rates: {
      serviceBusiness: "$990",
      serviceEcommerce: "$1,890",
      serviceLanding: "$590",
      serviceRedesign: "$1,190",
      serviceSeoMonthly: "$190/mo",
      pkgStarter: "$790",
      pkgBusiness: "$1,490",
      pkgPremium: "$2,490",
      budgets: [
        "$700 – $1,000",
        "$1,000 – $2,000",
        "$2,000 – $4,000",
        "$4,000+",
      ],
      portfolioSalesResult: "$28k in online sales within first 3 months",
    },
  },
  GB: {
    code: "GB",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    currencyCode: "GBP",
    symbol: "£",
    rates: {
      serviceBusiness: "£790",
      serviceEcommerce: "£1,490",
      serviceLanding: "£490",
      serviceRedesign: "£950",
      serviceSeoMonthly: "£150/mo",
      pkgStarter: "£650",
      pkgBusiness: "£1,190",
      pkgPremium: "£1,990",
      budgets: [
        "£500 – £900",
        "£900 – £1,600",
        "£1,600 – £3,200",
        "£3,200+",
      ],
      portfolioSalesResult: "£22k in online sales within first 3 months",
    },
  },
  EU: {
    code: "EU",
    countryName: "Europe",
    flag: "🇪🇺",
    currencyCode: "EUR",
    symbol: "€",
    rates: {
      serviceBusiness: "€890",
      serviceEcommerce: "€1,690",
      serviceLanding: "€550",
      serviceRedesign: "€1,090",
      serviceSeoMonthly: "€175/mo",
      pkgStarter: "€750",
      pkgBusiness: "€1,390",
      pkgPremium: "€2,290",
      budgets: [
        "€600 – €1,000",
        "€1,000 – €1,900",
        "€1,900 – €3,800",
        "€3,800+",
      ],
      portfolioSalesResult: "€26k in online sales within first 3 months",
    },
  },
  AE: {
    code: "AE",
    countryName: "UAE",
    flag: "🇦🇪",
    currencyCode: "AED",
    symbol: "AED ",
    rates: {
      serviceBusiness: "AED 3,490",
      serviceEcommerce: "AED 6,490",
      serviceLanding: "AED 1,990",
      serviceRedesign: "AED 3,990",
      serviceSeoMonthly: "AED 690/mo",
      pkgStarter: "AED 2,790",
      pkgBusiness: "AED 4,990",
      pkgPremium: "AED 8,990",
      budgets: [
        "AED 2,500 – 4,000",
        "AED 4,000 – 7,500",
        "AED 7,500 – 15,000",
        "AED 15,000+",
      ],
      portfolioSalesResult: "AED 95k in online sales within first 3 months",
    },
  },
  AU: {
    code: "AU",
    countryName: "Australia",
    flag: "🇦🇺",
    currencyCode: "AUD",
    symbol: "A$",
    rates: {
      serviceBusiness: "A$1,490",
      serviceEcommerce: "A$2,790",
      serviceLanding: "A$890",
      serviceRedesign: "A$1,790",
      serviceSeoMonthly: "A$290/mo",
      pkgStarter: "A$1,190",
      pkgBusiness: "A$2,190",
      pkgPremium: "A$3,690",
      budgets: [
        "A$1,000 – A$1,600",
        "A$1,600 – A$3,000",
        "A$3,000 – A$6,000",
        "A$6,000+",
      ],
      portfolioSalesResult: "A$42k in online sales within first 3 months",
    },
  },
  CA: {
    code: "CA",
    countryName: "Canada",
    flag: "🇨🇦",
    currencyCode: "CAD",
    symbol: "C$",
    rates: {
      serviceBusiness: "C$1,350",
      serviceEcommerce: "C$2,490",
      serviceLanding: "C$790",
      serviceRedesign: "C$1,590",
      serviceSeoMonthly: "C$250/mo",
      pkgStarter: "C$1,090",
      pkgBusiness: "C$1,990",
      pkgPremium: "C$3,390",
      budgets: [
        "C$900 – C$1,500",
        "C$1,500 – C$2,800",
        "C$2,800 – C$5,500",
        "C$5,500+",
      ],
      portfolioSalesResult: "C$38k in online sales within first 3 months",
    },
  },
};

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: Record<LanguageCode, LanguageOption> = {
  en: { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  hi: { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", dir: "ltr" },
  es: { code: "es", label: "Spanish", nativeLabel: "Español", dir: "ltr" },
  fr: { code: "fr", label: "French", nativeLabel: "Français", dir: "ltr" },
  ar: { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
};

export interface UITranslations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    pricing: string;
    about: string;
    blog: string;
    contact: string;
    bookCall: string;
    whatsappChat: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    monthlyInquiries: string;
    growthLabel: string;
    newBookingTitle: string;
    newBookingSub: string;
  };
  sections: {
    servicesTag: string;
    servicesTitle: string;
    servicesSub: string;
    fromLabel: string;
    exploreLabel: string;
    notSureBadge: string;
    notSureTitle: string;
    notSureDesc: string;
    notSureCta: string;
    whyTag: string;
    whyTitle: string;
    whySub: string;
    processTag: string;
    processTitle: string;
    processSub: string;
    processCta: string;
    portfolioTag: string;
    portfolioTitle: string;
    portfolioSub: string;
    portfolioViewAll: string;
    testimonialsTag: string;
    testimonialsTitle: string;
    pricingTag: string;
    pricingTitle: string;
    pricingSub: string;
    getQuoteBtn: string;
    faqTag: string;
    faqTitle: string;
    faqSub: string;
    blogTag: string;
    blogTitle: string;
    blogViewAll: string;
    finalCtaTag: string;
    finalCtaTitle: string;
    finalCtaSub: string;
  };
  form: {
    nameLabel: string;
    nameHint: string;
    emailLabel: string;
    emailHint: string;
    phoneLabel: string;
    phoneHint: string;
    typeLabel: string;
    typeHint: string;
    budgetLabel: string;
    budgetHint: string;
    detailsLabel: string;
    detailsHint: string;
    submitBtn: string;
    submittingBtn: string;
    privacyNote: string;
    thankYouTitle: string;
    thankYouSub: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, UITranslations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Our Work",
      pricing: "Pricing",
      about: "About Us",
      blog: "Tips & Blog",
      contact: "Contact",
      bookCall: "Book a Free Call",
      whatsappChat: "Chat on WhatsApp",
    },
    hero: {
      badge: "Websites Built for Business Owners, Not Techies",
      headline: "We Build Websites That Bring Your Business Online",
      subheading:
        "Turn casual visitors into paying customers with a fast, trustworthy website, online store, or booking system—delivered in weeks with zero technical headaches.",
      primaryCta: "Get a Free Consultation",
      secondaryCta: "View Our Work",
      bullet1: "Ready in 2–4 weeks",
      bullet2: "Fixed, transparent pricing",
      bullet3: "100% owned by you",
      monthlyInquiries: "Monthly Website Inquiries",
      growthLabel: "+184% Growth",
      newBookingTitle: "New Consultation Booked!",
      newBookingSub: "Customer found you on Google Search • 2 mins ago",
    },
    sections: {
      servicesTag: "What We Can Build For You",
      servicesTitle: "Everything You Need to Win Customers Online",
      servicesSub:
        "Whether you are launching your very first business or upgrading an outdated site, Nirman builds websites designed around one thing: growing your revenue.",
      fromLabel: "From",
      exploreLabel: "Explore",
      notSureBadge: "Free Expert Guidance",
      notSureTitle: "Not Sure Which Option Fits Your Business?",
      notSureDesc:
        "Tell us what you sell and who your customers are. We'll recommend the exact setup that brings the highest return on your budget.",
      notSureCta: "Book a Free 15-Min Call",
      whyTag: "Why Business Owners Choose Nirman",
      whyTitle: "Zero Confusing Tech Jargon. Just Real Business Results.",
      whySub:
        "You have a business to run. We handle the design, copywriting, mobile optimization, and setup so you can focus on serving your customers.",
      processTag: "Simple 4-Step Process",
      processTitle: "From First Idea to Live Website in 4 Easy Steps",
      processSub:
        "We keep you in the loop at every stage without overwhelming you with technical decisions.",
      processCta: "Start Step 1: Book Your Free Discovery Call",
      portfolioTag: "Recent Client Results",
      portfolioTitle: "Websites That Pay For Themselves",
      portfolioSub:
        "Take a look at how we've helped local businesses, clinics, and online brands attract more customers and grow sales.",
      portfolioViewAll: "View Full Portfolio",
      testimonialsTag: "What Business Owners Say",
      testimonialsTitle:
        "Trusted by Entrepreneurs Who Value Simplicity & Results",
      pricingTag: "Simple, Honest Investment",
      pricingTitle: "Clear Packages With Zero Surprise Fees",
      pricingSub:
        "Prices automatically shown in your selected country's currency. Need something custom? We'll tailor a fixed quote on our free call.",
      getQuoteBtn: "Get Quote",
      faqTag: "Common Questions Answered",
      faqTitle: "Everything You Need to Know Before Starting",
      faqSub:
        "Straightforward answers about cost, timelines, domains, hosting, and ongoing support.",
      blogTag: "Free Business Guides",
      blogTitle: "Practical Tips to Grow Your Business Online",
      blogViewAll: "Read All Articles",
      finalCtaTag: "Let's Bring Your Business Online",
      finalCtaTitle: "Get Your Free Website Action Plan & Fixed Quote",
      finalCtaSub:
        "Fill out this quick form and we'll get back to you within 4 business hours with honest advice, timeline estimates, and exact pricing—no pushy sales pitch.",
    },
    form: {
      nameLabel: "Your Full Name",
      nameHint: "How should we address you?",
      emailLabel: "Email Address",
      emailHint: "Where we'll send your free custom quote",
      phoneLabel: "Phone or WhatsApp Number",
      phoneHint: "For a quick 10-minute discovery call or text",
      typeLabel: "What Type of Website Do You Need?",
      typeHint: "Pick the closest match—we'll help you decide",
      budgetLabel: "Estimated Budget Range",
      budgetHint:
        "Helps us recommend the best features without wasting your time",
      detailsLabel: "Tell Us Briefly About Your Business",
      detailsHint:
        "What do you sell or offer, and what is your main goal with a new website?",
      submitBtn: "Get My Free Consultation & Quote",
      submittingBtn: "Sending Your Request...",
      privacyNote:
        "100% free, no-obligation advice. We never share your information.",
      thankYouTitle: "Thank You! We've Received Your Request",
      thankYouSub:
        "One of our friendly project specialists at Nirman will review your goals and get back to you within 4 business hours.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      services: "सेवाएं",
      portfolio: "हमारा काम",
      pricing: "प्राइसिंग",
      about: "हमारे बारे में",
      blog: "ब्लॉग और टिप्स",
      contact: "संपर्क करें",
      bookCall: "फ्री कॉल बुक करें",
      whatsappChat: "WhatsApp पर बात करें",
    },
    hero: {
      badge: "बिज़नेस मालिकों के लिए वेबसाइट — बिना किसी तकनीकी झंझट के",
      headline: "हम बनाते हैं ऐसी वेबसाइट जो आपके बिज़नेस को ऑनलाइन आगे बढ़ाए",
      subheading:
        "तेज़, भरोसेमंद वेबसाइट, ऑनलाइन स्टोर या बुकिंग सिस्टम के साथ विज़िटर्स को ग्राहकों में बदलें—कुछ ही हफ्तों में तैयार।",
      primaryCta: "फ्री कंसल्टेशन पाएं",
      secondaryCta: "हमारा काम देखें",
      bullet1: "2–4 हफ्तों में तैयार",
      bullet2: "पारदर्शी और फिक्स्ड कीमत",
      bullet3: "100% मालिकाना हक आपका",
      monthlyInquiries: "मासिक वेबसाइट पूछताछ",
      growthLabel: "+184% वृद्धि",
      newBookingTitle: "नई कंसल्टेशन बुक हुई!",
      newBookingSub: "ग्राहक ने Google सर्च से आपको ढूंढा • 2 मिनट पहले",
    },
    sections: {
      servicesTag: "हम आपके लिए क्या बना सकते हैं",
      servicesTitle: "ऑनलाइन ग्राहक जीतने के लिए ज़रूरी हर सुविधा",
      servicesSub:
        "चाहे आप नया बिज़नेस शुरू कर रहे हों या पुरानी वेबसाइट बदल रहे हों, Nirman आपके मुनाफे को बढ़ाने वाली वेबसाइट बनाता है।",
      fromLabel: "शुरुआती कीमत",
      exploreLabel: "विस्तार से देखें",
      notSureBadge: "मुफ़्त विशेषज्ञ सलाह",
      notSureTitle: "समझ नहीं आ रहा कि आपके बिज़नेस के लिए कौन सा विकल्प सही है?",
      notSureDesc:
        "हमें बताएं कि आप क्या बेचते हैं। हम आपके बजट में सबसे बेहतरीन रिटर्न देने वाला प्लान सुझाएंगे।",
      notSureCta: "15-मिनट की फ्री कॉल बुक करें",
      whyTag: "बिज़नेस मालिक Nirman को क्यों चुनते हैं",
      whyTitle: "कोई उलझाने वाली तकनीकी भाषा नहीं। सिर्फ असली बिज़नेस रिज़ल्ट।",
      whySub:
        "डिज़ाइन, कंटेंट, मोबाइल स्पीड और सेटअप हम संभालते हैं ताकि आप अपने बिज़नेस पर ध्यान दे सकें।",
      processTag: "आसान 4-स्टेप प्रोसेस",
      processTitle: "पहले विचार से लेकर लाइव वेबसाइट तक — 4 आसान चरणों में",
      processSub:
        "हम हर कदम पर आपको सरल भाषा में अपडेट रखते हैं।",
      processCta: "स्टेप 1 शुरू करें: अपनी फ्री कॉल बुक करें",
      portfolioTag: "हमारे क्लाइंट्स के नतीजे",
      portfolioTitle: "ऐसी वेबसाइट्स जो खुद अपनी लागत वसूल करें",
      portfolioSub:
        "देखें कि कैसे हमने लोकल बिज़नेस, क्लिनिक और ऑनलाइन ब्रांड्स की बिक्री बढ़ाने में मदद की है।",
      portfolioViewAll: "पूरा पोर्टफोलियो देखें",
      testimonialsTag: "बिज़नेस मालिकों की राय",
      testimonialsTitle: "उन उद्यमियों का भरोसा जो परिणाम चाहते हैं",
      pricingTag: "सरल और ईमानदार कीमत",
      pricingTitle: "बिना किसी छुपे चार्ज के स्पष्ट पैकेज",
      pricingSub:
        "आपके चुने गए देश की करेंसी में कीमतें। कस्टम कोटेशन के लिए हमसे फ्री कॉल पर बात करें।",
      getQuoteBtn: "कोटेशन पाएं",
      faqTag: "अक्सर पूछे जाने वाले सवाल",
      faqTitle: "शुरू करने से पहले आपके हर सवाल का जवाब",
      faqSub: "कीमत, समय, डोमेन, होस्टिंग और सपोर्ट से जुड़े सरल जवाब।",
      blogTag: "मुफ़्त बिज़नेस गाइड",
      blogTitle: "ऑनलाइन बिज़नेस बढ़ाने के व्यावहारिक टिप्स",
      blogViewAll: "सभी लेख पढ़ें",
      finalCtaTag: "आइए आपके बिज़नेस को ऑनलाइन लाएं",
      finalCtaTitle: "अपना फ्री वेबसाइट एक्शन प्लान और फिक्स्ड कोटेशन पाएं",
      finalCtaSub:
        "यह छोटा सा फॉर्म भरें—हम 4 कामकाजी घंटों के भीतर सही सलाह और स्पष्ट कीमत के साथ आपसे संपर्क करेंगे।",
    },
    form: {
      nameLabel: "आपका पूरा नाम",
      nameHint: "हम आपको किस नाम से संबोधित करें?",
      emailLabel: "ईमेल पता",
      emailHint: "जहां हम आपका फ्री कोटेशन भेजेंगे",
      phoneLabel: "फ़ोन या WhatsApp नंबर",
      phoneHint: "त्वरित कॉल या WhatsApp अपडेट के लिए",
      typeLabel: "आपको किस प्रकार की वेबसाइट चाहिए?",
      typeHint: "सबसे नज़दीकी विकल्प चुनें",
      budgetLabel: "अनुमानित बजट रेंज",
      budgetHint: "आपके बजट के अनुसार सर्वोत्तम फीचर्स सुझाने के लिए",
      detailsLabel: "अपने बिज़नेस के बारे में संक्षेप में बताएं",
      detailsHint: "आप क्या सेवा या उत्पाद देते हैं और आपका मुख्य लक्ष्य क्या है?",
      submitBtn: "मेरा फ्री कंसल्टेशन और कोटेशन भेजें",
      submittingBtn: "आपका अनुरोध भेजा जा रहा है...",
      privacyNote: "100% मुफ़्त सलाह। आपकी जानकारी पूरी तरह सुरक्षित रहती है।",
      thankYouTitle: "धन्यवाद! हमें आपका अनुरोध मिल गया है",
      thankYouSub:
        "Nirman की टीम आपके लक्ष्यों की समीक्षा करेगी और 4 कामकाजी घंटों में आपसे संपर्क करेगी।",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      pricing: "Precios",
      about: "Nosotros",
      blog: "Blog",
      contact: "Contacto",
      bookCall: "Llamada Gratis",
      whatsappChat: "Chat en WhatsApp",
    },
    hero: {
      badge: "Sitios Web para Dueños de Negocios, Sin Complicaciones Técnicas",
      headline: "Creamos Sitios Web Que Llevan Tu Negocio a Internet",
      subheading:
        "Convierte visitantes en clientes con un sitio web rápido, tienda en línea o sistema de reservas—entregado en semanas y sin dolores de cabeza técnicos.",
      primaryCta: "Obtener Consulta Gratis",
      secondaryCta: "Ver Nuestro Trabajo",
      bullet1: "Listo en 2–4 semanas",
      bullet2: "Precios fijos y transparentes",
      bullet3: "100% de tu propiedad",
      monthlyInquiries: "Consultas Mensuales",
      growthLabel: "+184% Crecimiento",
      newBookingTitle: "¡Nueva Consulta Reservada!",
      newBookingSub: "El cliente te encontró en Google • hace 2 min",
    },
    sections: {
      servicesTag: "Lo Que Construimos Para Ti",
      servicesTitle: "Todo Lo Que Necesitas Para Ganar Clientes Online",
      servicesSub:
        "Ya sea que lances tu primer negocio o renueves tu web actual, en Nirman diseñamos sitios enfocados en hacer crecer tus ventas.",
      fromLabel: "Desde",
      exploreLabel: "Explorar",
      notSureBadge: "Asesoría Experta Gratis",
      notSureTitle: "¿No Estás Seguro de Qué Opción Necesitas?",
      notSureDesc:
        "Cuéntanos qué vendes y quiénes son tus clientes. Te recomendaremos el plan con mejor retorno para tu presupuesto.",
      notSureCta: "Reservar Llamada de 15 Min",
      whyTag: "Por Qué Elegir Nirman",
      whyTitle: "Cero Jerga Técnica. Solo Resultados Reales Para Tu Negocio.",
      whySub:
        "Tú diriges tu negocio; nosotros nos encargamos del diseño, textos, versión móvil y configuración en Google.",
      processTag: "Proceso Simple en 4 Pasos",
      processTitle: "De la Idea al Sitio Web en Vivo en 4 Pasos",
      processSub:
        "Te mantenemos informado en cada etapa sin abrumarte con tecnicismos.",
      processCta: "Paso 1: Reserva Tu Llamada Gratis",
      portfolioTag: "Resultados de Clientes",
      portfolioTitle: "Sitios Web Que Se Pagan Solos",
      portfolioSub:
        "Mira cómo hemos ayudado a negocios locales, clínicas y tiendas online a multiplicar sus clientes.",
      portfolioViewAll: "Ver Portafolio Completo",
      testimonialsTag: "Lo Que Dicen Nuestros Clientes",
      testimonialsTitle: "Emprendedores Que Valoran la Simplicidad y Ventas",
      pricingTag: "Inversión Clara y Honesta",
      pricingTitle: "Paquetes Transparentes Sin Cargos Ocultos",
      pricingSub:
        "Precios mostrados en la moneda de tu país seleccionado. ¿Necesitas algo a medida? Pide tu cotización gratis.",
      getQuoteBtn: "Pedir Cotización",
      faqTag: "Preguntas Frecuentes",
      faqTitle: "Todo Lo Que Necesitas Saber Antes de Empezar",
      faqSub:
        "Respuestas claras sobre costos, tiempos de entrega, dominio, hosting y soporte.",
      blogTag: "Guías de Negocio Gratis",
      blogTitle: "Consejos Prácticos Para Crecer en Internet",
      blogViewAll: "Leer Todos los Artículos",
      finalCtaTag: "Llevemos Tu Negocio a Internet",
      finalCtaTitle: "Obtén Tu Plan de Acción y Cotización Fija Gratis",
      finalCtaSub:
        "Completa este formulario rápido y te responderemos en menos de 4 horas hábiles con precios claros.",
    },
    form: {
      nameLabel: "Tu Nombre Completo",
      nameHint: "¿Cómo debemos dirigirnos a ti?",
      emailLabel: "Correo Electrónico",
      emailHint: "Donde enviaremos tu cotización gratuita",
      phoneLabel: "Teléfono o WhatsApp",
      phoneHint: "Para una breve llamada o mensaje",
      typeLabel: "¿Qué Tipo de Sitio Web Necesitas?",
      typeHint: "Elige la opción más cercana",
      budgetLabel: "Rango de Presupuesto Estimado",
      budgetHint: "Nos ayuda a recomendarte la mejor solución",
      detailsLabel: "Cuéntanos Brevemente Sobre Tu Negocio",
      detailsHint: "¿Qué vendes u ofreces y cuál es tu objetivo principal?",
      submitBtn: "Obtener Mi Consulta y Cotización Gratis",
      submittingBtn: "Enviando Solicitud...",
      privacyNote: "100% gratis y sin compromiso. Nunca compartimos tus datos.",
      thankYouTitle: "¡Gracias! Hemos Recibido Tu Solicitud",
      thankYouSub:
        "Un especialista de Nirman revisará tus objetivos y te responderá en menos de 4 horas hábiles.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      portfolio: "Réalisations",
      pricing: "Tarifs",
      about: "À Propos",
      blog: "Conseils & Blog",
      contact: "Contact",
      bookCall: "Appel Gratuit",
      whatsappChat: "Discuter sur WhatsApp",
    },
    hero: {
      badge: "Des Sites Web Pensés Pour les Entrepreneurs, Sans Jargon Technique",
      headline: "Nous Créons des Sites Web Qui Font Décoller Votre Entreprise",
      subheading:
        "Transformez vos visiteurs en clients fidèles avec un site vitrine, une boutique en ligne ou un système de réservation rapide—livré en quelques semaines.",
      primaryCta: "Consultation Gratuite",
      secondaryCta: "Voir Nos Projets",
      bullet1: "Livré en 2 à 4 semaines",
      bullet2: "Tarifs fixes et transparents",
      bullet3: "Vous êtes 100% propriétaire",
      monthlyInquiries: "Demandes Mensuelles",
      growthLabel: "+184% de Croissance",
      newBookingTitle: "Nouveau Rendez-vous Réservé !",
      newBookingSub: "Client trouvé via Google • il y a 2 min",
    },
    sections: {
      servicesTag: "Ce Que Nous Construisons Pour Vous",
      servicesTitle: "Tout Pour Attirer des Clients en Ligne",
      servicesSub:
        "Que vous lanciez votre activité ou modernisiez un site existant, Nirman conçoit des sites focalisés sur votre chiffre d'affaires.",
      fromLabel: "À partir de",
      exploreLabel: "Découvrir",
      notSureBadge: "Conseil Gratuit",
      notSureTitle: "Vous Hésitez sur la Formule Adaptée ?",
      notSureDesc:
        "Expliquez-nous votre activité et nous vous recommanderons la solution la plus rentable pour votre budget.",
      notSureCta: "Réserver un Appel de 15 Min",
      whyTag: "Pourquoi Choisir Nirman",
      whyTitle: "Zéro Jargon Technique. Uniquement des Résultats Concrets.",
      whySub:
        "Concentrez-vous sur vos clients : nous gérons le design, les textes, le mobile et le référencement Google.",
      processTag: "Notre Méthode en 4 Étapes",
      processTitle: "De Votre Idée à la Mise en Ligne en 4 Étapes Simples",
      processSub:
        "Un accompagnement clair et humain à chaque étape du projet.",
      processCta: "Étape 1 : Réserver Votre Appel Découverte",
      portfolioTag: "Résultats Clients",
      portfolioTitle: "Des Sites Web Qui Se Rentabilisent Vite",
      portfolioSub:
        "Découvrez comment nous aidons commerces, cliniques et marques en ligne à générer plus de ventes.",
      portfolioViewAll: "Voir Tout le Portfolio",
      testimonialsTag: "Témoignages Clients",
      testimonialsTitle: "La Confiance des Dirigeants de PME",
      pricingTag: "Investissement Clair & Honnête",
      pricingTitle: "Des Forfaits Clairs Sans Frais Cachés",
      pricingSub:
        "Tarifs affichés dans la devise de votre pays. Besoin d'un devis sur mesure ? Parlons-en gratuitement.",
      getQuoteBtn: "Demander un Devis",
      faqTag: "Questions Fréquentes",
      faqTitle: "Tout Savoir Avant de Démarrer",
      faqSub:
        "Réponses simples sur les coûts, délais, noms de domaine, hébergement et suivi.",
      blogTag: "Guides Pratiques Gratuits",
      blogTitle: "Conseils Pour Développer Votre Entreprise en Ligne",
      blogViewAll: "Lire Tous les Articles",
      finalCtaTag: "Lançons Votre Projet Web",
      finalCtaTitle: "Recevez Votre Plan d'Action & Devis Fixe Gratuit",
      finalCtaSub:
        "Remplissez ce formulaire rapide et recevez une réponse sous 4 heures ouvrées.",
    },
    form: {
      nameLabel: "Votre Nom Complet",
      nameHint: "Comment devons-nous vous appeler ?",
      emailLabel: "Adresse E-mail",
      emailHint: "Pour l'envoi de votre devis gratuit",
      phoneLabel: "Téléphone ou WhatsApp",
      phoneHint: "Pour un court échange de 10 minutes",
      typeLabel: "Quel Type de Site Souhaitez-Vous ?",
      typeHint: "Choisissez l'option la plus proche",
      budgetLabel: "Budget Estimé",
      budgetHint: "Nous aide à adapter nos recommandations",
      detailsLabel: "Parlez-nous Brièvement de Votre Activité",
      detailsHint: "Que vendez-vous et quel est votre objectif principal ?",
      submitBtn: "Obtenir Ma Consultation & Mon Devis Gratuit",
      submittingBtn: "Envoi en cours...",
      privacyNote: "100% gratuit et sans engagement.",
      thankYouTitle: "Merci ! Votre Demande a Bien Été Reçue",
      thankYouSub:
        "Un conseiller Nirman vous recontactera sous 4 heures ouvrées.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      pricing: "الأسعار",
      about: "من نحن",
      blog: "المدونة",
      contact: "اتصل بنا",
      bookCall: "احجز مكالمة مجانية",
      whatsappChat: "تحدث عبر واتساب",
    },
    hero: {
      badge: "مواقع مصممة لأصحاب الأعمال بدون تعقيدات تقنية",
      headline: "نبني مواقع إلكترونية تنقل نشاطك التجاري إلى الإنترنت",
      subheading:
        "حوّل الزوار إلى عملاء دائمين من خلال موقع سريع وموثوق أو متجر إلكتروني أو نظام حجز—جاهز خلال أسابيع قليلة.",
      primaryCta: "احصل على استشارة مجانية",
      secondaryCta: "شاهد أعمالنا",
      bullet1: "جاهز خلال 2–4 أسابيع",
      bullet2: "أسعار ثابتة وشفافة",
      bullet3: "ملكية كاملة لك 100%",
      monthlyInquiries: "استفسارات الموقع الشهرية",
      growthLabel: "+184% نمو",
      newBookingTitle: "تم حجز استشارة جديدة!",
      newBookingSub: "عثر عليك العميل عبر بحث Google • منذ دقيقتين",
    },
    sections: {
      servicesTag: "ماذا يمكننا أن نبني لك",
      servicesTitle: "كل ما تحتاجه لكسب العملاء عبر الإنترنت",
      servicesSub:
        "سواء كنت تطلق مشروعك الأول أو تطور موقعك الحالي، تبني Nirman مواقع تركز على زيادة مبيعاتك.",
      fromLabel: "يبدأ من",
      exploreLabel: "استكشف",
      notSureBadge: "إرشاد مجاني",
      notSureTitle: "لست متأكداً أي خيار يناسب عملك؟",
      notSureDesc:
        "أخبرنا بما تقدمه وسنقترح عليك الحل الأنسب لميزانيتك لتحقيق أعلى عائد.",
      notSureCta: "احجز مكالمة مجانية لمدة 15 دقيقة",
      whyTag: "لماذا يختار أصحاب الأعمال Nirman",
      whyTitle: "بدون مصطلحات تقنية معقدة. نتائج أعمال حقيقية فقط.",
      whySub:
        "تفرغ لإدارة عملك بينما نتولى نحن التصميم والكتابة وتجربة الجوال والظهور في محركات البحث.",
      processTag: "خطوات عمل بسيطة",
      processTitle: "من الفكرة الأولى إلى إطلاق الموقع في 4 خطوات سهلة",
      processSub: "نبقيك على اطلاع في كل مرحلة بلغة واضحة وبسيطة.",
      processCta: "ابدأ الخطوة 1: احجز مكالمتك المجانية",
      portfolioTag: "نتائج عملائنا",
      portfolioTitle: "مواقع إلكترونية تحقق عائداً حقيقياً",
      portfolioSub:
        "شاهد كيف ساعدنا الشركات المحلية والعيادات والمتاجر الإلكترونية على مضاعفة عملائها.",
      portfolioViewAll: "عرض جميع الأعمال",
      testimonialsTag: "آراء أصحاب الأعمال",
      testimonialsTitle: "ثقة رواد الأعمال الباحثين عن البساطة والنتائج",
      pricingTag: "استثمار واضح وشفاف",
      pricingTitle: "باقات واضحة بدون أي رسوم خفية",
      pricingSub:
        "الأسعار معروضة بعملة دولتك المختارة. هل تحتاج إلى عرض مخصص؟ تواصل معنا مجاناً.",
      getQuoteBtn: "اطلب عرض سعر",
      faqTag: "الأسئلة الشائعة",
      faqTitle: "كل ما تحتاج معرفته قبل البدء",
      faqSub: "إجابات مباشرة حول التكلفة والمدة والنطاق والاستضافة والدعم الفني.",
      blogTag: "أدلة أعمال مجانية",
      blogTitle: "نصائح عملية لتنمية تجارتك عبر الإنترنت",
      blogViewAll: "قراءة جميع المقالات",
      finalCtaTag: "لننقل عملك إلى الإنترنت",
      finalCtaTitle: "احصل على خطة عمل مجانية وعرض سعر ثابت",
      finalCtaSub:
        "املأ هذا النموذج السريع وسنتواصل معك خلال 4 ساعات عمل بتوصيات واضحة.",
    },
    form: {
      nameLabel: "الاسم الكامل",
      nameHint: "كيف تفضل أن نخاطبك؟",
      emailLabel: "البريد الإلكتروني",
      emailHint: "سنرسل عرض السعر المجاني إلى هذا البريد",
      phoneLabel: "رقم الهاتف أو واتساب",
      phoneHint: "لمكالمة سريعة أو رسالة واتساب",
      typeLabel: "ما نوع الموقع الذي تحتاجه؟",
      typeHint: "اختر الخيار الأقرب لاحتياجك",
      budgetLabel: "الميزانية التقديرية",
      budgetHint: "تساعدنا على اقتراح أفضل المزايا لمشروعك",
      detailsLabel: "حدثنا باختصار عن نشاطك التجاري",
      detailsHint: "ماذا تبيع أو تقدم وما هو هدفك الرئيسي؟",
      submitBtn: "احصل على استشارة وعرض سعر مجاني",
      submittingBtn: "جاري الإرسال...",
      privacyNote: "استشارة مجانية 100% بدون أي التزام.",
      thankYouTitle: "شكراً لك! تم استلام طلبك بنجاح",
      thankYouSub:
        "سيتواصل معك فريق Nirman خلال 4 ساعات عمل لمناقشة مشروعك.",
    },
  },
};

export const SITE_CONFIG = {
  agencyName: "Nirman",
  tagline: "We Build Websites That Bring Your Business Online",
  description:
    "Nirman helps business owners and first-time entrepreneurs get more customers, sales, and trust online with fast, mobile-friendly websites and online stores.",
  url: "https://nirman.agency",
  email: "hello@nirman.agency",
  phone: "+1 (555) 234-5678",
  whatsappNumber: "15552345678", // Digits only with country code for wa.me link
  whatsappMessage: "Hi Nirman! I'm interested in getting a website for my business.",
  address: "120 Broadway, Suite 400, New York, NY 10271",
  calendlyUrl: "/contact#book-call",
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    facebook: "https://facebook.com",
  },
  // Optional: Add your Formspree endpoint or Google Apps Script Web App URL here
  formspreeEndpoint: "",
};

export const TRUST_STATS = [
  {
    value: "180+",
    label: "Websites Launched",
    subtext: "For local & online businesses",
  },
  {
    value: "8+ Years",
    label: "Industry Experience",
    subtext: "Helping businesses grow",
  },
  {
    value: "99%",
    label: "Happy Clients",
    subtext: "5-star rated service & support",
  },
  {
    value: "2–4 Wks",
    label: "Average Turnaround",
    subtext: "From first call to launch day",
  },
];

export const SERVICES = [
  {
    id: "business-websites",
    rateKey: "serviceBusiness" as const,
    title: "Business Websites",
    shortDesc:
      "Look professional and build instant trust with customers searching for your services online.",
    fullDesc:
      "A clear, trustworthy website that explains who you are, what you offer, and makes it effortless for visitors to call you or request a quote. Perfect for service providers, consultants, clinics, contractors, and local businesses.",
    benefits: [
      "Clear messaging that turns visitors into phone calls and inquiries",
      "Works smoothly on every phone, tablet, and computer",
      "Easy-to-use contact forms and click-to-call buttons",
      "Google Maps and customer reviews integration",
    ],
    idealFor: "Local service businesses, consultants, clinics, agencies, and trades",
    timeline: "2–3 Weeks",
    startingPrice: "$990",
    icon: "Building2",
  },
  {
    id: "ecommerce-stores",
    rateKey: "serviceEcommerce" as const,
    title: "Online Stores (E-Commerce)",
    shortDesc:
      "Sell your products 24/7 with a secure, easy-to-manage online shop that customers love using.",
    fullDesc:
      "Start taking orders online without technical headaches. We set up your product catalog, secure credit card, UPI, and mobile wallet checkout, shipping rules, and a simple dashboard so you can manage orders from your phone.",
    benefits: [
      "Fast, simple checkout that reduces abandoned carts",
      "Accept credit cards, Apple Pay, Google Pay, UPI, and local payment methods",
      "Simple inventory and order tracking dashboard",
      "Automated order confirmation emails for your customers",
    ],
    idealFor: "Retailers, clothing brands, food businesses, and product creators",
    timeline: "3–4 Weeks",
    startingPrice: "$1,890",
    icon: "ShoppingBag",
  },
  {
    id: "landing-pages",
    rateKey: "serviceLanding" as const,
    title: "High-Converting Landing Pages",
    shortDesc:
      "Turn your social media ads and Google clicks into real leads, bookings, and sales.",
    fullDesc:
      "Running ads or launching a new service? Sending paid traffic to a cluttered page wastes money. We design focused, persuasive single-page websites built around one goal: getting your visitor to take action right away.",
    benefits: [
      "Persuasive layout focused on a single call-to-action",
      "Ultra-fast loading speed so ad clicks never bounce",
      "Direct lead alerts sent to your email, WhatsApp, or CRM",
      "Built-in appointment booking or instant quote forms",
    ],
    idealFor: "Ad campaigns, new product launches, coaches, and event bookings",
    timeline: "5–7 Days",
    startingPrice: "$590",
    icon: "Rocket",
  },
  {
    id: "website-redesign",
    rateKey: "serviceRedesign" as const,
    title: "Website Redesign",
    shortDesc:
      "Transform your outdated, slow website into a modern sales tool you are proud to share.",
    fullDesc:
      "If your current website looks like it was built ten years ago or is hard to use on a phone, it is quietly costing you customers. We give your online presence a complete modern makeover while protecting your existing Google rankings.",
    benefits: [
      "Fresh, modern look that matches the quality of your business",
      "Dramatically faster loading times and mobile usability",
      "Clearer navigation so customers find what they need in seconds",
      "Safe migration that preserves your existing search rankings",
    ],
    idealFor: "Established businesses with an outdated or underperforming site",
    timeline: "2–3 Weeks",
    startingPrice: "$1,190",
    icon: "Sparkles",
  },
  {
    id: "seo-and-maintenance",
    rateKey: "serviceSeoMonthly" as const,
    title: "Google SEO & Ongoing Care",
    shortDesc:
      "Get found by local customers on Google and keep your website secure, backed up, and updated.",
    fullDesc:
      "You shouldn't have to worry about software updates, security, or why competitors show up higher on Google. We optimize your site so local customers find you first, and we handle all the monthly upkeep behind the scenes.",
    benefits: [
      "Local SEO setup so customers in your city find you on Google",
      "Daily cloud backups, security monitoring, and uptime checks",
      "Monthly content, photo, or pricing edits whenever you need them",
      "Plain-English monthly report showing your visitor and lead growth",
    ],
    idealFor: "Business owners who want peace of mind and steady organic traffic",
    timeline: "Ongoing Monthly",
    startingPrice: "$190/mo",
    icon: "TrendingUp",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Fast, On-Time Delivery",
    description:
      "No dragging projects out for months. Most business websites launch in just 2 to 3 weeks so you can start getting customers sooner.",
    icon: "Clock",
  },
  {
    title: "Transparent, Fair Pricing",
    description:
      "Fixed package prices in your local currency with zero surprise fees. You know exactly what you're paying for before we start.",
    icon: "BadgeDollarSign",
  },
  {
    title: "100% Mobile-Friendly",
    description:
      "Over 70% of your customers browse on their phones. Every site we build looks and works flawlessly on smartphones, tablets, and desktops.",
    icon: "Smartphone",
  },
  {
    title: "Built to Rank on Google",
    description:
      "We set up clean site structure, fast loading speeds, and local SEO fundamentals from day one so customers can actually find you.",
    icon: "Search",
  },
  {
    title: "Friendly Ongoing Support",
    description:
      "We don't disappear after launch. You get full training to make simple edits yourself, plus a dedicated team ready to help whenever you need us.",
    icon: "HeartHandshake",
  },
  {
    title: "Focused on Sales & Leads",
    description:
      "A pretty website means nothing if it doesn't bring in business. We structure every page to guide visitors toward calling, booking, or buying.",
    icon: "Target",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discuss",
    subtitle: "Free 20-Minute Discovery Call",
    description:
      "We listen to your business goals, learn about your ideal customers, and recommend the simplest, most effective website plan for your budget.",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Visual Preview & Messaging",
    description:
      "We craft a clean, modern layout and write clear, persuasive copy. You review the design and request any tweaks before we finalize.",
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Build, Mobile & Speed Setup",
    description:
      "We turn the approved design into a fast, mobile-ready website—connecting your contact forms, WhatsApp chat, booking calendar, or payment gateway.",
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Go Live & Grow with Support",
    description:
      "We connect your domain, test everything thoroughly, launch your site live, and walk you through how everything works—with ongoing support included.",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "oakridge-dental",
    title: "Oakridge Family Dental Clinic",
    category: "Business Website",
    result: "+140% online patient bookings in 60 days",
    description:
      "Redesigned an outdated clinic website with an easy online appointment request system, mobile-first service pages, and verified patient reviews.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    tags: ["Online Booking", "Local SEO", "Mobile-First"],
  },
  {
    id: "lumina-roasters",
    title: "Lumina Artisan Coffee Roasters",
    category: "E-Commerce",
    result: "$28k in online sales within first 3 months",
    dynamicSalesResult: true,
    description:
      "Built a fast, mouth-watering online store with subscription coffee boxes, 1-click checkout, and automated shipping labels.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    tags: ["Online Store", "Subscriptions", "Fast Checkout"],
  },
  {
    id: "summit-hvac",
    title: "Summit Heating & Cooling",
    category: "Lead Gen Landing Page",
    result: "3.4x more quote requests from Google Ads",
    description:
      "Created a high-converting emergency repair and installation landing page with instant click-to-call and a 30-second quote calculator.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    tags: ["Landing Page", "Instant Quote", "Call Tracking"],
  },
  {
    id: "verde-interiors",
    title: "Verde Home & Interior Studio",
    category: "Website Redesign",
    result: "2x increase in high-budget consultation calls",
    description:
      "Transformed a slow portfolio into an elegant, fast-loading showcase with interactive before-and-after galleries and consultation scheduling.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    tags: ["Redesign", "Portfolio Gallery", "Consultation Booking"],
  },
  {
    id: "fitpulse-studio",
    title: "FitPulse Boutique Fitness",
    category: "Business Website",
    result: "85 new trial memberships in launch month",
    description:
      "Designed an energetic website with class schedules, trainer profiles, and a seamless 7-day trial pass signup form.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    tags: ["Class Booking", "Membership Leads", "Mobile Ready"],
  },
  {
    id: "pureglow-skincare",
    title: "PureGlow Botanical Skincare",
    category: "E-Commerce",
    result: "+65% checkout completion rate",
    description:
      "Crafted a clean direct-to-consumer store featuring skincare quizzes, customer video reviews, and bundle discounts.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
    tags: ["E-Commerce", "Product Bundles", "Brand Design"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "I postponed getting a website for two years because I thought it would be complicated and expensive. Nirman handled everything in plain English, and within our first month live we booked 19 new clients directly from Google.",
    name: "Sarah Jenkins",
    role: "Founder, Oakridge Family Dental",
    metric: "19 new clients in month one",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Our old website was embarrassing to send to customers. After Nirman's redesign, people actually compliment our site on sales calls—and our quote requests have more than doubled without spending extra on ads.",
    name: "Marcus Vance",
    role: "Owner, Summit Heating & Cooling",
    metric: "2.4x more quote requests",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Launching our online store with Nirman felt effortless. They set up our products, payments, and shipping in three weeks, and showed me how to manage orders from my phone in 15 minutes. Best investment we've made.",
    name: "Elena Rostova",
    role: "Co-Founder, Lumina Coffee Roasters",
    metric: "Launched in 3 weeks",
    rating: 5,
  },
];

export const PRICING_PACKAGES = [
  {
    name: "Starter",
    rateKey: "pkgStarter" as const,
    badge: "Great for New Businesses",
    price: "$790",
    billing: "One-time payment",
    description:
      "Everything you need to launch a professional online presence fast and start capturing leads.",
    features: [
      "Custom High-Converting Landing Page (up to 3 sections/pages)",
      "Mobile-First & Fast-Loading Design",
      "Contact Form & Click-to-WhatsApp Button",
      "Basic Google Search (SEO) Setup",
      "Domain & Hosting Connection Assistance",
      "14 Days of Post-Launch Support",
    ],
    highlighted: false,
    ctaText: "Get Starter Quote",
  },
  {
    name: "Business",
    rateKey: "pkgBusiness" as const,
    badge: "Most Popular",
    price: "$1,490",
    billing: "One-time payment",
    description:
      "Ideal for growing service businesses that want to build strong trust, rank on Google, and generate consistent inquiries.",
    features: [
      "Up to 7 Custom Pages (Home, Services, About, Portfolio, Contact)",
      "Conversion-Focused Copywriting Guidance",
      "Online Appointment / Call Booking Integration",
      "Complete Local SEO & Google Business Profile Setup",
      "Blog / Resources Section Ready for Growth",
      "Speed Optimization (90+ Performance Target)",
      "30 Days of Priority Support + Video Training",
    ],
    highlighted: true,
    ctaText: "Get Business Quote",
  },
  {
    name: "Premium & E-Commerce",
    rateKey: "pkgPremium" as const,
    badge: "For Online Stores & Scale",
    price: "$2,490",
    billing: "Starting price",
    description:
      "For online stores, custom booking platforms, or businesses that want a complete digital sales machine.",
    features: [
      "Full Online Store or 12+ Custom Pages",
      "Secure Payment Gateway Setup (Cards, UPI, Apple Pay, etc.)",
      "Product Catalog, Shipping & Tax Configuration",
      "Custom Interactive Calculators or Booking Workflows",
      "Advanced SEO & Conversion Tracking Setup",
      "60 Days of VIP Support & Maintenance",
    ],
    highlighted: false,
    ctaText: "Get Premium Quote",
  },
];

export const FAQS = [
  {
    question: "How much does a website really cost? Are there hidden fees?",
    answer:
      "Never any hidden fees. You can switch your country currency at the top of the page (INR, USD, GBP, EUR, AED, AUD, CAD) to see our exact fixed package prices. Before we begin, we give you a clear, fixed-price proposal. The only ongoing costs to keep any website on the internet are your domain name and web hosting.",
  },
  {
    question: "How long will it take to launch my website?",
    answer:
      "A focused landing page takes about 5 to 7 business days. A full business website typically takes 2 to 3 weeks, and an online store takes 3 to 4 weeks. We follow a clear 4-step schedule so you always know what's happening next.",
  },
  {
    question: "What if I don't have a domain name, hosting, or website text yet?",
    answer:
      "No problem at all! Most of our clients are busy running their business. We'll help you register your domain name in your own name (so you own it 100%), set up fast hosting, and help you write clear, customer-focused text and select professional photos.",
  },
  {
    question: "Will I be able to update text or photos myself after launch?",
    answer:
      "Yes! When we launch your website, we record a short, personal video walkthrough showing you how to update text, swap photos, or check leads without touching any code. And if you'd rather have us handle updates for you, we offer affordable monthly care plans.",
  },
  {
    question: "What happens if I need help after my website goes live?",
    answer:
      "Every website package includes 14 to 60 days of free post-launch support so we can fix any hiccups and answer all your questions. After that, you can reach out anytime for one-off updates or join our optional monthly support and SEO care plan.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "5-signs-your-small-business-website-is-costing-you-customers",
    title: "5 Signs Your Small Business Website Is Quietly Costing You Customers",
    excerpt:
      "Most visitors decide in under 5 seconds whether to trust your business or hit the back button. Here is how to spot and fix the biggest trust-killers.",
    category: "Website Strategy",
    readTime: "4 min read",
    date: "Oct 15, 2026",
  },
  {
    slug: "website-vs-social-media-why-your-business-needs-both",
    title: "Instagram Page vs. Real Website: Why Relying Only on Social Media Limits Sales",
    excerpt:
      "Social media is great for attention, but a website is where high-intent customers go when they are ready to buy or book. Learn how they work together.",
    category: "Business Growth",
    readTime: "5 min read",
    date: "Oct 02, 2026",
  },
  {
    slug: "how-to-get-your-local-business-on-the-first-page-of-google",
    title: "A Plain-English Guide to Getting Your Local Business Found on Google",
    excerpt:
      "You don't need to be a tech wizard to outrank local competitors. Discover the 4 simple steps that bring steady phone calls from Google Search.",
    category: "Local SEO",
    readTime: "6 min read",
    date: "Sep 20, 2026",
  },
];
