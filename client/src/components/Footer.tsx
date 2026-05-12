/*
 * FOOTER — 4-quadrant reference layout
 * - Background photo with dark overlay
 * - Header: gold lines + "FRANCESCA'S CUCINA" + gold ornament
 * - 4 quadrants: top-left Address | top-right Hours | bottom-left Follow Us | bottom-right Buttons
 * - Vertical divider between left/right, horizontal divider between top/bottom rows
 * - Icons inline next to section labels
 * - Max-width 1400px
 */

import { Link } from "wouter";

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="22" height="13" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

export default function Footer() {
  const iconCircle: React.CSSProperties = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "1px solid rgba(184,160,90,0.45)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const sectionLabel: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.6rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "var(--gold)",
  };

  const bodyText: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: "0.875rem",
    color: "rgba(245,240,228,0.78)",
    lineHeight: 1.9,
  };

  const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.6rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "var(--gold)",
    textDecoration: "none",
    border: "1px solid rgba(184,160,90,0.5)",
    borderRadius: "4px",
    padding: "1rem 1.75rem",
    transition: "background 0.2s ease",
    background: "transparent",
    flex: 1,
    justifyContent: "center",
    minWidth: "160px",
    whiteSpace: "nowrap" as const,
  };

  const divider = "1px solid rgba(184,160,90,0.2)";
  // Icon circle 42px + gap 0.85rem ≈ 56px — aligns body text under the label word
  const LABEL_INDENT = "56px";

  return (
    <footer style={{ position: "relative", overflow: "hidden", background: "#0a0907" }}>
      {/* Subtle warm glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 65% 40%, rgba(70,50,15,0.18) 0%, transparent 65%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto", padding: "3.5rem 3rem 2rem" }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.5rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)",
            letterSpacing: "0.18em",
            color: "var(--gold)",
            whiteSpace: "nowrap",
          }}>
            Francesca's Cucina
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
        </div>

        {/* Ornament */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          {/* Decorative flourish: lines + diamond + leaf-like curves, centered */}
          <svg width="180" height="28" viewBox="0 0 180 28" fill="none" style={{ display: "inline-block" }}>
            {/* Left line */}
            <line x1="0" y1="14" x2="62" y2="14" stroke="rgba(184,160,90,0.45)" strokeWidth="0.75"/>
            {/* Left small curl */}
            <path d="M62 14 Q68 8 74 14" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            <path d="M62 14 Q68 20 74 14" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            {/* Left dot */}
            <circle cx="77" cy="14" r="1.2" fill="rgba(184,160,90,0.6)"/>
            {/* Center diamond */}
            <polygon points="90,7 96,14 90,21 84,14" stroke="rgba(184,160,90,0.75)" strokeWidth="0.75" fill="none"/>
            <circle cx="90" cy="14" r="1.5" fill="rgba(184,160,90,0.65)"/>
            {/* Right dot */}
            <circle cx="103" cy="14" r="1.2" fill="rgba(184,160,90,0.6)"/>
            {/* Right small curl */}
            <path d="M106 14 Q112 8 118 14" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            <path d="M106 14 Q112 20 118 14" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            {/* Right line */}
            <line x1="118" y1="14" x2="180" y2="14" stroke="rgba(184,160,90,0.45)" strokeWidth="0.75"/>
          </svg>
        </div>

        {/* ── 4-quadrant grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
        }}>

          {/* TOP-LEFT: Address */}
          <div style={{
            padding: "2.25rem 2.5rem",
            borderRight: divider,
            borderBottom: divider,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
              <div style={iconCircle}><PinIcon /></div>
              <span style={sectionLabel}>Address</span>
            </div>
            <div style={{ paddingLeft: LABEL_INDENT }}>
              <a
                href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                target="_blank" rel="noopener noreferrer"
                style={{ ...bodyText, textDecoration: "none", display: "block" }}
              >
                545 North Salina Street<br />
                Syracuse, NY 13208
              </a>
              <a href="tel:+13154251556" style={{ ...bodyText, textDecoration: "none", display: "block", marginTop: "0.1rem" }}>
                (315) 425–1556
              </a>
            </div>
          </div>

          {/* TOP-RIGHT: Hours */}
          <div style={{
            padding: "2.25rem 2.5rem",
            borderBottom: divider,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
              <div style={iconCircle}><ClockIcon /></div>
              <span style={sectionLabel}>Hours</span>
            </div>
            <div style={{ paddingLeft: LABEL_INDENT, ...bodyText }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", maxWidth: "360px" }}>
                <span>Monday – Thursday</span><span>4 – 9 pm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", maxWidth: "360px" }}>
                <span>Friday – Saturday</span><span>4 – 10 pm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", maxWidth: "360px" }}>
                <span>Sunday</span><span>Closed</span>
              </div>
            </div>
          </div>

          {/* BOTTOM-LEFT: Follow Us */}
          <div style={{
            padding: "2.25rem 2.5rem",
            borderRight: divider,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
              <div style={iconCircle}><FbIcon /></div>
              <span style={sectionLabel}>Follow Us</span>
            </div>
            <div style={{ paddingLeft: LABEL_INDENT, display: "flex", gap: "1.5rem" }}>
              {[
                { label: "Facebook", href: "https://www.facebook.com/share/17EEV4KgJh/?mibextid=wwXIfr" },
                { label: "Instagram", href: "https://www.instagram.com/francescascucina" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  style={{ ...bodyText, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,240,228,0.78)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* BOTTOM-RIGHT: Buttons */}
          <div style={{
            padding: "2.25rem 2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}>
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank" rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(184,160,90,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              <CalIcon /> Reservations
            </a>
            <Link
              href="/gift-cards"
              style={btnStyle}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(184,160,90,0.1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              <CardIcon /> Gift Cards
            </Link>
          </div>

        </div>

        {/* Copyright */}
        <div style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{ ...bodyText, fontSize: "0.68rem", color: "rgba(245,240,228,0.28)" }}>
            © {new Date().getFullYear()} Francesca's Cucina. All rights reserved.
          </p>
          <p style={{ ...bodyText, fontSize: "0.68rem", color: "rgba(245,240,228,0.2)" }}>
            545 North Salina Street · Syracuse, NY
          </p>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 680px) {
          footer > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:nth-child(3) > div {
            border-right: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
