/**
 * Midnight Pit Lane design reminder: booking is friction-reducing and mobile friendly.
 * Validation routes a qualified message to WhatsApp instead of simulating a backend appointment system.
 */
import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import SiteLayout from "@/components/SiteLayout";
import { branches, business, services } from "@/lib/site";

type FormValues = { name: string; phone: string; email: string; service: string; branch: string; date: string; vehicle: string; message: string };
const initialValues: FormValues = { name: "", phone: "", email: "", service: "", branch: "", date: "", vehicle: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const update = (key: keyof FormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Please add your name.";
    if (!values.phone.trim()) nextErrors.phone = "A phone number is required.";
    if (!values.service) nextErrors.service = "Choose a service type.";
    if (!values.branch) nextErrors.branch = "Choose a branch.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { toast.error("Check the highlighted booking details."); return; }
    const selectedBranch = branches.find((branch) => branch.id === values.branch) ?? branches[0];
    const text = `Hello Naik Car Wash & Decors,%0A%0AI would like to request a booking.%0AName: ${encodeURIComponent(values.name)}%0APhone: ${encodeURIComponent(values.phone)}%0AService: ${encodeURIComponent(values.service)}%0ABranch: ${encodeURIComponent(selectedBranch.name)}%0APreferred date/time: ${encodeURIComponent(values.date || "To be discussed")}%0AVehicle: ${encodeURIComponent(values.vehicle || "Not specified")}%0ARequirements: ${encodeURIComponent(values.message || "None")}`;
    toast.success("Your booking message is ready to send on WhatsApp.");
    window.open(`${selectedBranch.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };
  return <SiteLayout pageTitle="Book a Car Service in Warangal | Naik" description="Book your car wash, detailing, ceramic coating or accessory service at Naik Car Wash & Decors in Hanamkonda.">
    <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow"><span /> Booking / 06</p><h1>Book your appointment today.</h1><p>Tell us what your car needs and which branch works for you. We’ll prepare a WhatsApp booking message with the details, ready to send directly to the chosen location.</p></div></section>
    <section className="route-section"><div className="content-width"><div className="contact-grid"><form className="booking-form" onSubmit={submit} noValidate><h2>Start your booking.</h2><p>Required fields help the right branch understand your request. Exact availability, service scope and quote are confirmed directly with the team.</p><div className="form-grid"><div className="field"><label htmlFor="name">Name *</label><input id="name" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />{errors.name && <span className="field-error">{errors.name}</span>}</div><div className="field"><label htmlFor="phone">Phone *</label><input id="phone" value={values.phone} onChange={(e) => update("phone", e.target.value)} inputMode="tel" placeholder="Your phone number" />{errors.phone && <span className="field-error">{errors.phone}</span>}</div><div className="field"><label htmlFor="email">Email</label><input id="email" value={values.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="Optional" /></div><div className="field"><label htmlFor="service">Service type *</label><select id="service" value={values.service} onChange={(e) => update("service", e.target.value)}><option value="" disabled>Select service</option>{services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}<option value="Package consultation">Package consultation</option></select>{errors.service && <span className="field-error">{errors.service}</span>}</div><div className="field"><label htmlFor="branch">Preferred branch *</label><select id="branch" value={values.branch} onChange={(e) => update("branch", e.target.value)}><option value="" disabled>Select a branch</option>{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</select>{errors.branch && <span className="field-error">{errors.branch}</span>}</div><div className="field"><label htmlFor="date">Preferred date / time</label><input id="date" value={values.date} onChange={(e) => update("date", e.target.value)} placeholder="e.g. Saturday morning" /></div><div className="field"><label htmlFor="vehicle">Vehicle model</label><input id="vehicle" value={values.vehicle} onChange={(e) => update("vehicle", e.target.value)} placeholder="e.g. Hyundai Creta" /></div><div className="field field--full"><label htmlFor="message">Message / special requirements</label><textarea id="message" value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your car or the finish you are looking for." /></div></div><div className="form-submit-row"><p><CheckCircle2 size={13} style={{ verticalAlign: "-2px", marginRight: 4 }} />Submits a pre-filled WhatsApp message; no information is stored by this website.</p><button className="btn btn--signal" type="submit">Continue to WhatsApp <MessageCircle size={16} /></button></div></form><aside className="contact-rail"><h2>Quick contact.</h2><p>Prefer a conversation? Call or WhatsApp the branch that suits your route.</p>{branches.map((branch) => <div className="rail-location" key={branch.id}><strong>{branch.name}</strong><span>{branch.landmark}</span><a href={branch.tel}>{branch.phone}</a><a href={branch.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={14} style={{ verticalAlign: "-2px", marginRight: 5 }} />WhatsApp this branch</a></div>)}<div className="hours-list">{business.hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></aside></div></div></section>
  </SiteLayout>;
}
