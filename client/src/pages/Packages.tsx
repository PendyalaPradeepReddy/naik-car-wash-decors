/**
 * Midnight Pit Lane design reminder: package cards give a clear route; pricing is transparent about quote dependence.
 * Avoid invented rupee figures—invite a direct estimate through the booking flow.
 */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SiteLayout from "@/components/SiteLayout";
import SectionHeading from "@/components/SectionHeading";
import { packages } from "@/lib/site";

const faqs = [
  ["How long does each service take?", "Express wash is guided at about 45 minutes. Complete interior detailing is generally a 2–3 hour visit, while paint-protection work can span 1–2 days depending on the chosen treatment and vehicle condition."],
  ["Do I need to book in advance?", "Booking ahead helps the team reserve a working bay and understand your service request. Contact either branch directly or use the appointment form to begin."],
  ["What payment methods are accepted?", "Please confirm available payment methods with the selected branch while booking, as options may vary by service and visit."],
  ["Is there a warranty on coatings?", "Coating suitability, preparation requirements and applicable care guidance should be confirmed with the team before work begins. They can explain the selected product’s coverage and maintenance needs."],
];

export default function Packages() {
  return <SiteLayout pageTitle="Car Detailing Packages | Naik Car Wash Warangal" description="Explore Naik Car Wash & Decors packages for express wash, complete interior detailing and ceramic paint care in Hanamkonda, Warangal.">
    <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow"><span /> Packages / 02</p><h1>A clearer route to a better finish.</h1><p>Choose a starting point, then let us confirm the right service scope and quote for your vehicle. No placeholder prices; just an informed recommendation before work starts.</p></div></section>
    <section className="route-section"><div className="content-width"><SectionHeading eyebrow="Select your route" title={<>Care packages for the way<br /> you want to drive out.</>} body="The inclusions below are a clear guide to each level of care. Final recommendations and estimates vary with vehicle size, condition and selected protection." />
      <div className="package-layout">{packages.map((pkg, index) => <article className={`package-card ${pkg.popular ? "package-card--featured" : ""}`} key={pkg.name}>{pkg.popular && <span className="popular-flag">Most requested</span>}<span className="package-index">0{index + 1} / QUOTE ON REQUEST</span><h3>{pkg.name}</h3><span className="package-duration">Expected {pkg.duration}</span><p className="package-note">{pkg.note}</p><ul>{pkg.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link href="/contact" className={`btn ${pkg.popular ? "btn--blue" : "btn--dark"}`}>Book a discussion <ArrowUpRight size={15} /></Link></article>)}</div>
      <p className="quote-note">Your chosen branch will confirm availability and give a service estimate after learning about your car and required finish.</p></div></section>
    <section className="route-section route-section--dark"><div className="content-width"><SectionHeading dark eyebrow="Add-ons" title="Finish the details." body="Add-ons can be combined with the right care package after a brief discussion with the team." /><div className="add-on-row"><div><span>01</span><strong>Underbody wash</strong></div><div><span>02</span><strong>Odor removal</strong></div><div><span>03</span><strong>Leather conditioning</strong></div><div><span>04</span><strong>Headlight restoration</strong></div></div></div></section>
    <section className="route-section"><div className="content-width"><SectionHeading eyebrow="Before you book" title="Questions, answered clearly." /><div className="faq-wrap"><Accordion type="single" collapsible>{faqs.map(([question, answer]) => <AccordionItem value={question} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>
  </SiteLayout>;
}
