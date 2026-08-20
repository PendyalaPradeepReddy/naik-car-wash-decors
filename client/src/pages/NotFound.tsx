/** Midnight Pit Lane design reminder: even the fallback is a crisp workshop wayfinding panel. */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <div className="not-found"><div className="not-found-inner"><strong>ROUTE NOT FOUND / 404</strong><h1>This page has left the service bay.</h1><p>Take the clear route back to Naik Car Wash & Decors and find the car-care information you need.</p><Link href="/" className="btn btn--signal"><ArrowLeft size={16} /> Back to home</Link></div></div>;
}

