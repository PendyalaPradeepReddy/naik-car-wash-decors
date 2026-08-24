/**
 * Midnight Pit Lane design reminder: the layout is a guided pit-lane procession.
 * Use a precise route line, clear contact paths, and controlled cobalt/orange emphasis.
 */
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, Phone, X, MessageCircle, MapPin } from "lucide-react";
import { assetUrl, branches, business, navItems } from "@/lib/site";

type SiteLayoutProps = {
  children: ReactNode;
  pageTitle: string;
  description: string;
};

export default function SiteLayout({ children, pageTitle, description }: SiteLayoutProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pageTitle, description]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="Naik Car Wash & Decors home">
            <img src={assetUrl.mark} alt="Naik Car Wash & Decors brand mark" />
            <span><strong>NAIK</strong><em>CAR WASH & DECORS</em></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-call" href={business.primaryTel}><Phone size={15} /> <span>{business.primaryPhone}</span></a>
            <Link href="/contact" className="btn btn--signal btn--compact">Book service <ArrowUpRight size={15} /></Link>
            <button className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-panel">
            {navItems.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>)}
            <Link href="/contact" className="btn btn--signal">Book your appointment <ArrowUpRight size={16} /></Link>
          </div>
        )}
      </header>
      <main><div className="route-stage" key={location}>{children}</div></main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-mark"><img src={assetUrl.mark} alt="" /></div>
            <p className="footer-title">The finish your car deserves.</p>
            <p>Premium wash, detailing, paint protection and decors for drivers across Warangal.</p>
          </div>
          <div className="footer-links"><p className="footer-label">Explore</p>{navItems.slice(1, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div className="footer-links"><p className="footer-label">Visit or contact</p>{branches.map((branch) => <a key={branch.id} href={branch.directions} target="_blank" rel="noreferrer"><MapPin size={14} /> {branch.name}</a>)}<Link href="/contact">Book an appointment</Link></div>
          <div className="footer-contact"><p className="footer-label">Call a branch</p>{branches.map((branch) => <a key={branch.id} href={branch.tel}>{branch.name}<strong>{branch.phone}</strong></a>)}</div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Naik Car Wash & Decors.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href={business.googleReviewSearch} target="_blank" rel="noreferrer">Google reviews</a></span></div>
      </footer>
      <a className="whatsapp-float" href={business.primaryWhatsApp} target="_blank" rel="noreferrer" aria-label="Message Naik Car Wash & Decors on WhatsApp"><MessageCircle size={22} /></a>
      <div className="mobile-booking-bar"><a href={business.primaryTel}><Phone size={17} /> Call now</a><Link href="/contact"><ArrowUpRight size={17} /> Book service</Link></div>
    </div>
  );
}
