/**
 * Midnight Pit Lane design reminder: treat labels like technical workshop markings.
 * Preserve the editorial asymmetry; do not center generic heading blocks by default.
 */
import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  dark?: boolean;
  align?: "left" | "right";
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${dark ? "section-heading--dark" : ""} section-heading--${align}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-copy">{body}</p>}
    </div>
  );
}
