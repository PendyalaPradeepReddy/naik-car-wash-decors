/**
 * Midnight Pit Lane design reminder: gallery images act as editorial proof panels.
 * Keep visuals dark, selective, and interactive without fabricated project claims or testimonials.
 */
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SectionHeading from "@/components/SectionHeading";
import { assetUrl, galleryImages } from "@/lib/site";

const filters = ["All", "Exterior", "Interior", "Full Detailing", "Paint Correction"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);
  const [split, setSplit] = useState(50);
  const visibleImages = useMemo(() => filter === "All" ? galleryImages : galleryImages.filter((image) => image.category === filter), [filter]);
  return <SiteLayout pageTitle="Car Detailing Gallery | Naik Car Wash Warangal" description="Browse automotive care inspiration for exterior wash, interiors, paint correction and full detailing from Naik Car Wash & Decors.">
    <section className="page-hero page-hero--photo" style={{ backgroundImage: `url(${assetUrl.hero})` }}><div className="page-hero-inner"><p className="eyebrow"><span /> Gallery / 03</p><h1>Real care. Visible difference.</h1><p>Explore the types of finish, interior work and paint-focused care our team can help you achieve. Use these visuals as inspiration when you contact a branch.</p></div></section>
    <section className="route-section"><div className="content-width"><SectionHeading eyebrow="The finish library" title={<>A closer look at the<br /> work that changes a drive.</>} body="Filter by the kind of care you are considering, then open any image for a closer view." /><div className="gallery-filter-row">{filters.map((item) => <button className={`filter-button ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="gallery-grid">{visibleImages.map((image) => <button className="gallery-card" key={`${image.title}-${image.category}`} onClick={() => setActiveImage(image)}><img src={image.url} alt={`${image.title} — ${image.category} automotive care inspiration`} loading="lazy" /><span><small>{image.category}</small>{image.title}</span></button>)}</div></div></section>
    <section className="route-section route-section--dark"><div className="content-width comparison-wrap"><div className="comparison-copy"><p className="eyebrow"><span /> Move the marker</p><h2>See how a protected finish catches the light.</h2><p>This comparison control demonstrates the kind of surface contrast a detail can make; your vehicle’s starting condition and final result will always be assessed in person.</p></div><div className="comparison-frame"><img src={assetUrl.hero} alt="Vehicle finish before care" /><div className="comparison-after" style={{ width: `${split}%` }}><img src={assetUrl.paint} alt="Vehicle finish after paint-protection care" /></div><span className="comparison-label after">Protected finish</span><span className="comparison-label before">Starting point</span><input className="comparison-range" type="range" min="0" max="100" value={split} onChange={(event) => setSplit(Number(event.target.value))} aria-label="Move comparison slider" /></div></div></section>
    {activeImage && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}><div className="gallery-lightbox-inner" onClick={(event) => event.stopPropagation()}><button onClick={() => setActiveImage(null)} aria-label="Close image viewer"><X /></button><img src={activeImage.url} alt={`${activeImage.title} — ${activeImage.category} automotive care inspiration`} /></div></div>}
  </SiteLayout>;
}
