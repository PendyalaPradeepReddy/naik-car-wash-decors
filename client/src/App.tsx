/**
 * Midnight Pit Lane design reminder: routes should feel like one continuous workshop journey.
 * Keep local SEO and direct contact affordances available across every customer-facing page.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
import Locations from "./pages/Locations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { BrandedLoader } from "./components/MotionEffects";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: "Naik Car Wash & Decors",
  description: "Premium car wash, detailing, paint protection, wheel alignment and car decors in Hanamkonda, Warangal.",
  telephone: "+91 93476 76143",
  address: [
    { "@type": "PostalAddress", streetAddress: "Opp. Reliance Digital, KUC X Road, Hanamkonda", addressLocality: "Warangal", addressRegion: "Telangana", postalCode: "506009", addressCountry: "IN" },
    { "@type": "PostalAddress", streetAddress: "Fatima Junction, 100 Feet Rd, opp. Wadepally Lake, Hanamkonda", addressLocality: "Warangal", addressRegion: "Telangana", postalCode: "506004", addressCountry: "IN" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "280" },
};

function Router() {
  return (
    <Switch>
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
    </Switch>
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
