/**
 * Midnight Pit Lane design reminder: show supplied review context honestly, not invented quotes or user photos.
 * The conversion path directs visitors to the live Google review source.
 */
import { ArrowUpRight, Star } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/site";

export default function Reviews() {
  return <SiteLayout pageTitle="Customer Reviews | Naik Car Wash & Decors" description="View the supplied Google rating context and follow through to authentic reviews for Naik Car Wash & Decors in Hanamkonda.">
    <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow"><span /> Reviews / 07</p><h1>What drivers say, from the authentic source.</h1><p>We show the business-provided rating context here and direct visitors to Google for the live review source. No copied, fabricated or unverified review quotes.</p></div></section>
    <section className="route-section"><div className="content-width"><div className="reviews-layout"><div className="reviews-score"><p>Google rating context</p><strong>{business.rating}</strong><div className="stars" aria-label="4.7 out of 5 stars">★★★★★</div><small>{business.reviewCount} Google reviews, as supplied in the business brief.</small></div><div className="reviews-note"><h2>Review confidence should come from the original place.</h2><p>Use the button below to open a Google search for Naik Car Wash & Decors, where you can read the current customer feedback and see the latest business listing information.</p><a className="btn btn--signal" href={business.googleReviewSearch} target="_blank" rel="noreferrer">Open Google reviews <ArrowUpRight size={16} /></a></div></div></div></section>
    <section className="route-section route-section--dark"><div className="content-width"><SectionHeading dark eyebrow="Review standards" title="We keep customer feedback real." /><div className="review-principle"><div><strong>Authentic source</strong><p>Visitor review reading is routed to Google instead of reproduced without verification.</p></div><div><strong>No invented voices</strong><p>This site does not display made-up names, quotations, customer photos or ratings.</p></div><div><strong>Easy response path</strong><p>Existing and new customers can call or message a branch directly with any feedback.</p></div></div></div></section>
  </SiteLayout>;
}
