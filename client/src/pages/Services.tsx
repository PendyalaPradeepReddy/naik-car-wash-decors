/**
 * Midnight Pit Lane design reminder: services read like workshop stations, not generic cards.
 * Keep the technical label, controlled cobalt line, and direct booking affordance intact.
 */
import { ArrowUpRight, Phone } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SectionHeading from "@/components/SectionHeading";
import { assetUrl, business, services, serviceVisuals } from "@/lib/site";

export default function Services() {
  return <SiteLayout pageTitle="Car Wash & Detailing Services in Warangal | Naik" description="Explore exterior care, interior detailing, paint protection, wheel alignment and car accessories at Naik Car Wash & Decors.">
    <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow"><span /> Services / 01</p><h1>From foam to finish — care that earns its shine.</h1><p>Wash, restore, protect and style your vehicle with service paths designed around its present condition and the road ahead.</p></div></section>
    <section className="route-section"><div className="content-width"><SectionHeading eyebrow="Choose your station" title={<>From routine wash to a<br /> complete finish reset.</>} body="Tell us how you want your car to feel when you leave. We’ll help identify the work and the most suitable package before a final quote is confirmed." />
      <div className="detail-service-grid">{services.map((service) => { const Icon = service.icon; return <article className="detail-service" key={service.index}><div className="detail-service-image" style={{ backgroundImage: `url(${serviceVisuals[service.title]})` }} aria-hidden="true" /><div className="detail-service-top"><div><p className="eyebrow"><span /> {service.index}</p><h2>{service.title}</h2></div><div className="service-icon"><Icon size={22} /></div></div><p>{service.short}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div>
    </div></section>
    <section className="paint-callout"><div className="paint-callout-photo" style={{ backgroundImage: `url(${assetUrl.paint})` }} /><div className="paint-callout-copy"><p className="eyebrow"><span /> Surface protection</p><h2>A finish worth preserving.</h2><p>Paint protection packages can include Teflon or ceramic coating, compounding, polish and targeted scratch attention. Talk to the team about what suits your vehicle’s paint and usage.</p><Link href="/contact" className="btn btn--signal" style={{ alignSelf: "flex-start" }}>Discuss paint protection <ArrowUpRight size={16} /></Link></div></section>
    <section className="route-section route-section--dark"><div className="content-width"><SectionHeading dark eyebrow="Need a recommendation?" title={<>Bring the car. We’ll map the care.</>} body="A quick conversation about your car, the finish, and the timeline gives you a better starting point than guessing from a menu." /><div className="hero-actions"><a href={business.primaryTel} className="btn btn--line"><Phone size={15} /> Call KUC X Road</a><Link href="/contact" className="btn btn--signal">Book a service <ArrowUpRight size={16} /></Link></div></div></section>
  </SiteLayout>;
}
