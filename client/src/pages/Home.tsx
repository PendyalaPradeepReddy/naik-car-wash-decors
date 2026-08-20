/**
 * Midnight Pit Lane design reminder: hero copy stays on dark text-safe space; page follows a route-line journey.
 * Use Cobalt Track Blue for technical momentum and Signal Orange only for booking decisions.
 */
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SectionHeading from "@/components/SectionHeading";
import { assetUrl, business, packages, services, whyChoose } from "@/lib/site";

export default function Home() {
  return (
    <SiteLayout pageTitle="Naik Car Wash & Decors | Premium Car Care in Warangal" description="Professional car wash, detailing, paint protection, accessories and wheel alignment in Hanamkonda, Warangal.">
      <section className="hero">
        <div className="hero-media" style={{ backgroundImage: `url(${assetUrl.hero})` }} />
        <div className="hero-content">
          <p className="hero-kicker">Warangal’s car care atelier</p>
          <h1>Give your car the <span>showroom shine</span> it deserves.</h1>
          <p className="hero-copy">{business.tagline}. From a sharp exterior reset to paint protection and thoughtful decors, our team brings precision to every detail.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn--signal">Get instant quote <ArrowUpRight size={16} /></Link>
            <a href={business.primaryTel} className="btn btn--line"><Phone size={15} /> Call now</a>
          </div>
          <div className="trust-row" aria-label="Business trust indicators">
            <div><strong>{business.rating}★</strong><span>Google rating</span></div>
            <div><strong>{business.reviewCount}</strong><span>Google reviews</span></div>
            <div><strong>02</strong><span>Hanamkonda locations</span></div>
          </div>
        </div>
        <div className="hero-scroll">Scroll to explore</div>
      </section>

      <section className="route-section">
        <div className="content-width">
          <SectionHeading eyebrow="01 / The service bay" title={<>Care that goes <em>deeper</em> than clean.</>} body="Choose the work your vehicle needs today. Every package begins with a closer look at the finish, the cabin, and the way you drive." />
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return <Link href="/services" className="service-tile" key={service.index}>
                <span className="service-number">{service.index}</span>
                <span className="service-icon"><Icon size={22} strokeWidth={1.6} /></span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ArrowRight className="service-arrow" size={19} />
              </Link>;
            })}
          </div>
        </div>
      </section>

      <section className="route-section route-section--dark">
        <div className="content-width proof-layout">
          <div className="proof-panel">
            <p className="eyebrow"><span /> Local proof, clearly shown</p>
            <div className="rating-display"><strong>{business.rating}</strong><span>Google<br />rating</span></div>
            <p>The supplied rating and review count sit alongside the part that matters most: a straightforward route to ask, book, and visit a nearby branch.</p>
            <a className="btn btn--line" href={business.googleReviewSearch} target="_blank" rel="noreferrer">See Google reviews <ArrowUpRight size={15} /></a>
          </div>
          <div className="proof-list">
            {whyChoose.map(([stat, copy]) => <div key={stat}><strong>{stat}</strong><span>{copy}</span></div>)}
          </div>
        </div>
      </section>

      <section className="route-section">
        <div className="content-width">
          <SectionHeading eyebrow="02 / Build your finish" title={<>Three clear ways to<br /> care for your car.</>} body="The final scope and price depend on your car’s size, condition and selected protection. Start with the package closest to your need; we’ll confirm the right plan before work begins." />
          <div className="package-layout">
            {packages.map((pkg, index) => <article className={`package-card ${pkg.popular ? "package-card--featured" : ""}`} key={pkg.name}>
              {pkg.popular && <span className="popular-flag">Most requested</span>}
              <span className="package-index">0{index + 1} / ESTIMATE ON REQUEST</span>
              <h3>{pkg.name}</h3>
              <span className="package-duration">Approx. {pkg.duration}</span>
              <p className="package-note">{pkg.note}</p>
              <ul>{pkg.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link href="/contact" className={`btn ${pkg.popular ? "btn--blue" : "btn--dark"}`}>Ask for an estimate <ArrowUpRight size={15} /></Link>
            </article>)}
          </div>
          <p className="quote-note">Package inclusions are a guide. Your vehicle and requested finish determine the final recommendation and quote.</p>
        </div>
      </section>

      <section className="process-split">
        <div className="process-photo" style={{ backgroundImage: `url(${assetUrl.interior})` }} />
        <div className="process-copy">
          <p className="eyebrow"><span /> 03 / Inside matters</p>
          <h2>Reset the cabin you live in.</h2>
          <p>Interior detailing is more than a surface wipe. We work through the seats, carpets, hard surfaces and air-touch points to help bring the cabin back to its best working condition.</p>
          <ul className="process-points"><li><span>01</span>Deep vacuuming and carpet attention</li><li><span>02</span>Seat steam cleaning and upholstery care</li><li><span>03</span>Dashboard conditioning and AC duct sanitization</li></ul>
          <Link href="/services" className="btn btn--line" style={{ marginTop: 34, alignSelf: "flex-start" }}>Explore interior detailing <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="location-strip">
        <div className="location-strip-inner">
          <div><p className="eyebrow"><span /> 04 / Easy to reach</p><h2>Two branches. One consistent standard of care.</h2><p>Choose KUC X Road or Fatima Junction in Hanamkonda.</p></div>
          <Link href="/locations" className="btn">Find your nearest branch <MapPin size={16} /></Link>
        </div>
      </section>

      <section className="footer-cta">
        <div className="footer-cta-inner">
          <div><p className="eyebrow"><span /> Ready when you are</p><h2>Bring back the <span>depth</span> in every panel.</h2><div className="hero-actions"><Link href="/contact" className="btn btn--signal">Book your appointment <ArrowUpRight size={16} /></Link><a href={business.primaryWhatsApp} className="btn btn--line" target="_blank" rel="noreferrer">WhatsApp us <CheckCircle2 size={15} /></a></div></div>
          <div style={{ color: "#9fa8b2", fontSize: 11, maxWidth: 205, lineHeight: 1.7 }}><Star size={16} fill="#137be8" color="#137be8" style={{ marginBottom: 8 }} /><br />Rate, review and contact paths are always shown transparently.</div>
        </div>
      </section>
    </SiteLayout>
  );
}
