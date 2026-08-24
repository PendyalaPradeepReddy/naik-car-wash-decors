/**
 * Midnight Pit Lane motion reminder: movement is controlled, machine-like, and brief.
 * Loading uses the Naik symbol; reveal and route motion rely only on opacity, transforms, and clip-path.
 */
import { CSSProperties, useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/site";

type RevealImageProps = {
  className: string;
  style: CSSProperties;
};

export function RevealImage({ className, style }: RevealImageProps) {
  const imageRef = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <span ref={imageRef} className={`${className} ${revealed ? "reveal-image is-revealed" : ""}`} style={style} aria-hidden="true" />;
}

export function BrandedLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let started = false;
    let beginTimer: number | undefined;
    let finishTimer: number | undefined;
    const finish = () => {
      if (started) return;
      started = true;
      beginTimer = window.setTimeout(() => setLeaving(true), 240);
      finishTimer = window.setTimeout(() => setVisible(false), 620);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallbackTimer = window.setTimeout(finish, 1800);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallbackTimer);
      if (beginTimer) window.clearTimeout(beginTimer);
      if (finishTimer) window.clearTimeout(finishTimer);
    };
  }, []);

  if (!visible) return null;
  return (
    <div className={`brand-loader ${leaving ? "brand-loader--leaving" : ""}`} role="status" aria-live="polite" aria-label="Loading Naik Car Wash & Decors">
      <div className="brand-loader__inner">
        <div className="brand-loader__mark-wrap"><img src={assetUrl.mark} alt="" /></div>
        <p>Preparing your service bay</p>
        <span className="brand-loader__rail"><i /></span>
      </div>
    </div>
  );
}
