/**
 * Midnight Pit Lane design reminder: locations are operating bays with contact and direction choices at hand.
 * Use the dark map control surface and cobalt location status instead of a generic directory layout.
 */
import { useState } from "react";
import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SectionHeading from "@/components/SectionHeading";
import BranchMap from "@/components/BranchMap";
import { branches, business, localServiceAreas } from "@/lib/site";

export default function Locations() {
  const [selectedId, setSelectedId] = useState("kuc");
  const branch = branches.find((item) => item.id === selectedId) ?? branches[0];
  return <SiteLayout pageTitle="Car Wash Locations in Hanamkonda | Naik" description="Visit Naik Car Wash & Decors at KUC X Road or Fatima Junction in Hanamkonda, Warangal.">
    <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow"><span /> Locations / 04</p><h1>Two bays. One route to better car care.</h1><p>Two Hanamkonda branches, so the right care bay is never far from your route.</p></div></section>
    <section className="route-section"><div className="content-width"><SectionHeading eyebrow="Choose a branch" title={<>Pick the location that<br /> works for today.</>} body="Use the selector to see the full address, call a branch, send a WhatsApp message or get driving directions." />
      <div className="branch-tabs">{branches.map((item) => <button key={item.id} className={`branch-tab ${selectedId === item.id ? "active" : ""}`} onClick={() => setSelectedId(item.id)}>{item.name}</button>)}</div>
      <article className="branch-detail"><div className="branch-detail-info"><p className="eyebrow"><span /> Branch {branch.id === "kuc" ? "01" : "02"}</p><h2>{branch.name}</h2><p>{branch.landmark}</p><div className="branch-meta"><div><MapPin size={17} /><span>{branch.address}</span></div><div><Phone size={17} /><a href={branch.tel}>{branch.phone}</a></div><div><Clock3 size={17} /><span>Mon–Sat: 8:00 AM–8:00 PM / 9:00 PM<br />Sun: 8:00 AM–5:00 PM</span></div></div><div className="branch-action-row"><a href={branch.directions} target="_blank" rel="noreferrer" className="btn btn--signal">Get directions <ArrowUpRight size={15} /></a><a href={branch.whatsapp} target="_blank" rel="noreferrer" className="btn btn--line"><MessageCircle size={15} /> WhatsApp</a></div></div><div className="branch-hour-box"><h3>Workshop hours</h3><div className="hours-list">{business.hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></div></article>
      <BranchMap />
    </div></section>
    <section className="route-section route-section--dark"><div className="content-width"><SectionHeading dark eyebrow="Service area" title="Helping drivers across Warangal." body="Both branches serve the nearby Hanamkonda and Warangal area. If you are unsure which location suits your journey, call or message the team." /><div className="service-area-row">{localServiceAreas.map((area) => <span key={area}>{area}</span>)}</div></div></section>
  </SiteLayout>;
}
