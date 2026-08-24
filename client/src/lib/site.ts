/**
 * Midnight Pit Lane design reminder: keep all business data accurate, local, and direct.
 * Dark graphite surfaces, Cobalt Track Blue for momentum, Signal Orange for booking actions.
 */
import {
  CarFront,
  Droplets,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const assetUrl = {
  hero: "/images/naik-hero.jpg",
  interior: "/images/naik-interior.jpg",
  paint: "/images/naik-paint-protection.jpg",
  exterior: "/images/naik-exterior-foam.jpg",
  alignment: "/images/naik-wheel-alignment.jpg",
  mark: "/images/naik-brand-mark.png",
};

export const serviceVisuals: Record<string, string> = {
  "Exterior Care": assetUrl.exterior,
  "Interior Detailing": assetUrl.interior,
  "Paint Protection": assetUrl.paint,
  "Decors & Accessories": assetUrl.alignment,
};

export const business = {
  name: "Naik Car Wash & Decors",
  tagline: "One-Stop Destination for Complete Car Care & Styling",
  rating: "4.7",
  reviewCount: "280+",
  city: "Warangal, Telangana",
  primaryPhone: "+91 93476 76143",
  primaryTel: "tel:+919347676143",
  primaryWhatsApp: "https://wa.me/919347676143",
  googleReviewSearch:
    "https://www.google.com/search?q=Naik+Car+Wash+%26+Decors+Warangal",
  hours: [
    ["Monday – Saturday", "8:00 AM – 8:00 PM / 9:00 PM"],
    ["Sunday", "8:00 AM – 5:00 PM"],
  ],
};

export const branches = [
  {
    id: "kuc",
    name: "KUC X Road",
    phone: "+91 93476 76143",
    tel: "tel:+919347676143",
    whatsapp: "https://wa.me/919347676143",
    landmark: "Opp. Reliance Digital",
    address: "Opp. Reliance Digital, KUC X Road, Hanamkonda, Warangal, Telangana 506009",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Opp.+Reliance+Digital,+KUC+X+Road,+Hanamkonda,+Warangal,+Telangana+506009",
  },
  {
    id: "fatima",
    name: "Fatima Junction",
    phone: "+91 73374 51268",
    tel: "tel:+917337451268",
    whatsapp: "https://wa.me/917337451268",
    landmark: "Opp. Wadepally Lake, 100 Feet Rd",
    address: "Fatima Junction, 100 Feet Rd, opp. Wadepally Lake, Hanamkonda, Telangana 506004",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Fatima+Junction,+100+Feet+Road,+Hanamkonda,+Telangana+506004",
  },
] as const;

export const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Packages", "/packages"],
  ["Gallery", "/gallery"],
  ["Locations", "/locations"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
] as const;

export const services = [
  {
    index: "01",
    title: "Exterior Care",
    short: "High-pressure wash, foam bath, underbody attention, and a sharp finishing detail.",
    icon: Droplets,
    items: [
      "High-Pressure Foam Wash",
      "Underbody Degreasing",
      "Multi-Stage Exterior Wash",
      "Tyre Dressing",
      "Foam Bath Treatment",
    ],
  },
  {
    index: "02",
    title: "Interior Detailing",
    short: "A deeper cabin reset, from seat steam cleaning to freshened hard-to-reach surfaces.",
    icon: Sparkles,
    items: [
      "Deep Vacuuming",
      "Seat Steam Cleaning",
      "Dashboard Polish & Conditioning",
      "AC Duct Sanitization",
      "Carpet & Upholstery Cleaning",
    ],
  },
  {
    index: "03",
    title: "Paint Protection",
    short: "Correct, refine, and protect the surface with treatments chosen for your vehicle’s finish.",
    icon: ShieldCheck,
    items: [
      "Teflon Coating",
      "Ceramic Coating Packages",
      "Body Compounding & Polish",
      "Scratch Removal",
      "Paint Protection Treatment",
    ],
  },
  {
    index: "04",
    title: "Decors & Accessories",
    short: "Practical upgrades and styling details, fitted with attention to the finish.",
    icon: Wrench,
    items: [
      "3D Wheel Alignment",
      "Alloy Wheels",
      "Custom Seat Covers",
      "Audio Systems Installation",
      "Styling Accessories",
    ],
  },
];

export const packages = [
  {
    name: "Express Wash",
    duration: "45 mins",
    note: "A quick, polished reset for the daily drive.",
    features: [
      "High-pressure foam wash",
      "Exterior cleaning",
      "Tyre dressing",
      "Interior vacuum",
      "Basic dashboard wipe",
    ],
    popular: false,
  },
  {
    name: "Complete Interior",
    duration: "2–3 hours",
    note: "For a cleaner, fresher cabin and a more considered finish.",
    features: [
      "Everything in Express",
      "Deep seat steam cleaning",
      "Dashboard polish",
      "AC duct sanitization",
      "Carpet shampoo & door panels",
    ],
    popular: true,
  },
  {
    name: "Full Ceramic Package",
    duration: "1–2 days",
    note: "A paint-focused process for drivers seeking long-term finish protection.",
    features: [
      "Ceramic or Teflon coating",
      "Body compounding",
      "Paint protection",
      "Alloy wheel detailing",
      "Engine bay cleaning",
    ],
    popular: false,
  },
];

export const whyChoose = [
  ["4.7★", "Google rating context supplied by the business"],
  ["280+", "Google reviews supplied by the business"],
  ["02", "Convenient Hanamkonda locations"],
  ["CARE", "Quality-focused products and process"],
];

export const galleryImages = [
  { category: "Exterior", title: "Paint depth & gloss", url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" },
  { category: "Interior", title: "Cabin refresh", url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80" },
  { category: "Paint Correction", title: "Reflective finish", url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80" },
  { category: "Full Detailing", title: "Workshop delivery", url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80" },
  { category: "Exterior", title: "Wheel finish", url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80" },
  { category: "Interior", title: "Comfort restored", url: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80" },
  { category: "Paint Correction", title: "Surface refinement", url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80" },
  { category: "Full Detailing", title: "All-around detail", url: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80" },
  { category: "Exterior", title: "Showroom presence", url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80" },
  { category: "Interior", title: "Interior precision", url: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80" },
  { category: "Paint Correction", title: "Deep black gloss", url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80" },
  { category: "Full Detailing", title: "Ready to drive", url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80" },
];

export const localServiceAreas = [
  "Hanamkonda",
  "Kazipet",
  "Warangal",
  "Wadepally",
  "KUC X Road",
  "Fatima Junction",
];

export const serviceIcon = CarFront;
