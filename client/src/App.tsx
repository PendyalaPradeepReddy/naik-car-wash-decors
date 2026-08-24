/**
 * Midnight Pit Lane design reminder: routes should feel like one continuous workshop journey.
 * Keep local SEO and direct contact affordances available across every customer-facing page.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrandedLoader } from "./components/MotionEffects";
import { assetUrl } from "./lib/site";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Packages = lazy(() => import("./pages/Packages"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Locations = lazy(() => import("./pages/Locations"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const siteUrl = "https://naikcarwashdecors.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Naik Car Wash & Decors",
      inLanguage: "en-IN",
      description: "Car wash, detailing, paint protection, wheel alignment and accessories in Hanamkonda, Warangal, Telangana.",
    },
    {
      "@type": ["AutoRepair", "AutomotiveBusiness", "LocalBusiness"],
      "@id": `${siteUrl}/#business`,
      name: "Naik Car Wash & Decors",
      url: `${siteUrl}/`,
      image: `${siteUrl}${assetUrl.hero}`,
      logo: `${siteUrl}${assetUrl.mark}`,
      description: "One-stop car care and styling destination in Hanamkonda, Warangal for car wash, interior detailing, ceramic coating, paint protection, wheel alignment and accessories.",
      telephone: "+91 93476 76143",
      priceRange: "₹₹",
      areaServed: ["Hanamkonda", "Warangal", "Kazipet", "Wadepally"],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "280" },
      sameAs: ["https://www.google.com/search?q=Naik+Car+Wash+%26+Decors+Warangal"],
      contactPoint: { "@type": "ContactPoint", telephone: "+91 93476 76143", contactType: "customer service", areaServed: "IN", availableLanguage: ["en", "te"] },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Naik car care services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior car wash and foam wash", serviceType: "Car wash", areaServed: "Warangal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior car detailing", serviceType: "Car interior cleaning", areaServed: "Warangal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic coating and paint protection", serviceType: "Paint protection", areaServed: "Warangal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheel alignment and car accessories", serviceType: "Automotive accessories", areaServed: "Warangal" } },
        ],
      },
    },
    {
      "@type": "AutoRepair",
      "@id": `${siteUrl}/#kuc-x-road`,
      name: "Naik Car Wash & Decors — KUC X Road",
      parentOrganization: { "@id": `${siteUrl}/#business` },
      telephone: "+91 93476 76143",
      address: { "@type": "PostalAddress", streetAddress: "Opp. Reliance Digital, KUC X Road, Hanamkonda", addressLocality: "Warangal", addressRegion: "Telangana", postalCode: "506009", addressCountry: "IN" },
      hasMap: "https://www.google.com/maps/dir/?api=1&destination=Opp.+Reliance+Digital,+KUC+X+Road,+Hanamkonda,+Warangal,+Telangana+506009",
    },
    {
      "@type": "AutoRepair",
      "@id": `${siteUrl}/#fatima-junction`,
      name: "Naik Car Wash & Decors — Fatima Junction",
      parentOrganization: { "@id": `${siteUrl}/#business` },
      telephone: "+91 73374 51268",
      address: { "@type": "PostalAddress", streetAddress: "Fatima Junction, 100 Feet Rd, opp. Wadepally Lake, Hanamkonda", addressLocality: "Warangal", addressRegion: "Telangana", postalCode: "506004", addressCountry: "IN" },
      hasMap: "https://www.google.com/maps/dir/?api=1&destination=Fatima+Junction,+100+Feet+Road,+Hanamkonda,+Telangana+506004",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/packages#faq`,
      mainEntity: [
        { "@type": "Question", name: "How long does each service take?", acceptedAnswer: { "@type": "Answer", text: "Express wash is guided at about 45 minutes. Complete interior detailing is generally a 2–3 hour visit, while paint-protection work can span 1–2 days depending on the chosen treatment and vehicle condition." } },
        { "@type": "Question", name: "Do I need to book in advance?", acceptedAnswer: { "@type": "Answer", text: "Booking ahead helps the team reserve a working bay and understand your service request. Contact either branch directly or use the appointment form to begin." } },
        { "@type": "Question", name: "What payment methods are accepted?", acceptedAnswer: { "@type": "Answer", text: "Please confirm available payment methods with the selected branch while booking, as options may vary by service and visit." } },
        { "@type": "Question", name: "Is there a warranty on coatings?", acceptedAnswer: { "@type": "Answer", text: "Coating suitability, preparation requirements and applicable care guidance should be confirmed with the team before work begins." } },
      ],
    },
  ],
};

function RouteFallback() {
  return <div className="route-loading" aria-live="polite" aria-label="Loading page"><img src={assetUrl.mark} alt="" /> <span>Loading service details</span></div>;
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}><Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/packages" component={Packages} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/locations" component={Locations} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch></Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
          <BrandedLoader />
          <Toaster richColors position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
