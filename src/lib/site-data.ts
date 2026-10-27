/**
 * Central Site Configuration & Business Data
 * Edit the constants in SITE_CONFIG below to customize your agency details,
 * contact numbers, and lead capture settings across the entire site.
 */

export const SITE_CONFIG = {
  agencyName: "ApexWeb Studio", // Replace with your [AGENCY NAME]
  tagline: "We Build Websites That Bring Your Business Online",
  description:
    "We help business owners and first-time entrepreneurs get more customers, sales, and trust online with fast, mobile-friendly websites and online stores.",
  url: "https://apexwebstudio.example.com",
  email: "hello@apexwebstudio.com",
  phone: "+1 (555) 234-5678",
  whatsappNumber: "15552345678", // Digits only with country code for wa.me link
  whatsappMessage: "Hi! I'm interested in getting a website for my business.",
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
    title: "Online Stores (E-Commerce)",
    shortDesc:
      "Sell your products 24/7 with a secure, easy-to-manage online shop that customers love using.",
    fullDesc:
      "Start taking orders online without technical headaches. We set up your product catalog, secure credit card and mobile wallet checkout, shipping rules, and a simple dashboard so you can manage orders from your phone.",
    benefits: [
      "Fast, simple checkout that reduces abandoned carts",
      "Accept credit cards, Apple Pay, Google Pay, and local payment methods",
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
      "Fixed package prices with zero surprise fees. You know exactly what you're paying for before we write a single line of code.",
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
    description:
      "Built a fast, mouth-watering online store with subscription coffee boxes, 1-click Apple Pay checkout, and automated shipping labels.",
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
      "I postponed getting a website for two years because I thought it would be complicated and expensive. The team handled everything in plain English, and within our first month live we booked 19 new clients directly from Google.",
    name: "Sarah Jenkins",
    role: "Founder, Oakridge Family Dental",
    metric: "19 new clients in month one",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Our old website was embarrassing to send to customers. After the redesign, people actually compliment our site on sales calls—and our quote requests have more than doubled without spending extra on ads.",
    name: "Marcus Vance",
    role: "Owner, Summit Heating & Cooling",
    metric: "2.4x more quote requests",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Launching our online store felt effortless. They set up our products, payments, and shipping in three weeks, and showed me how to manage orders from my phone in 15 minutes. Best investment we've made.",
    name: "Elena Rostova",
    role: "Co-Founder, Lumina Coffee Roasters",
    metric: "Launched in 3 weeks",
    rating: 5,
  },
];

export const PRICING_PACKAGES = [
  {
    name: "Starter",
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
    badge: "For Online Stores & Scale",
    price: "$2,490",
    billing: "Starting price",
    description:
      "For online stores, custom booking platforms, or businesses that want a complete digital sales machine.",
    features: [
      "Full Online Store or 12+ Custom Pages",
      "Secure Payment Gateway Setup (Cards, Apple Pay, etc.)",
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
      "Never any hidden fees. Our packages start at $790 for a Starter site and $1,490 for a full Business website. Before we begin, we give you a clear, fixed-price proposal. The only ongoing costs to keep any website on the internet are your domain name (around $12–$15/year) and web hosting (often $0–$20/month depending on your needs).",
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
