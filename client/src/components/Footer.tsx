/*
 * FOOTER — Reference layout match
 * - Background: dark with subtle texture
 * - Header: gold lines + "FRANCESCA'S CUCINA" + gold ornament
 * - 2-column grid: left (Address + Follow Us) | right (Hours + Buttons)
 * - Vertical divider between columns
 * - Max-width 1400px matching other sections
 */

import { Link } from "wouter";

export default function Footer() {
  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.6rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "var(--gold)",
    marginBottom: "0.85rem",
    display: "block",
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: "0.875rem",
    color: "rgba(245,240,228,0.75)",
    lineHeight: 1.9,
  };

  const iconCircle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid rgba(184,160,90,0.45)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.85rem",
    flexShrink: 0,
  };

  const btnStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.55rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.6rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "var(--gold)",
    textDecoration: "none",
    border: "1px solid rgba(184,160,90,0.5)",
    borderRadius: "4px",
    padding: "0.85rem 1.5rem",
    transition: "background 0.2s ease",
    background: "transparent",
    whiteSpace: "nowrap" as const,
  };

  return (
    <footer style={{
      position: "relative",
      overflow: "hidden",
      background: "#0a0907",
    }}>
      {/* Subtle dark background overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 70% 50%, rgba(60,45,20,0.15) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Content wrapper */}
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "3.5rem 3rem 2rem",
      }}>

        {/* ── Header: gold lines + name ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "0.6rem",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
          <span style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            whiteSpace: "nowrap",
          }}>
            Francesca's Cucina
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
        </div>

        {/* Gold ornament */}
        <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <svg width="64" height="16" viewBox="0 0 64 16" fill="none">
            <line x1="0" y1="8" x2="22" y2="8" stroke="rgba(184,160,90,0.45)" strokeWidth="1"/>
            <circle cx="25" cy="8" r="2" stroke="rgba(184,160,90,0.6)" strokeWidth="1" fill="none"/>
            <circle cx="32" cy="8" r="3.5" stroke="rgba(184,160,90,0.7)" strokeWidth="1" fill="none"/>
            <circle cx="39" cy="8" r="2" stroke="rgba(184,160,90,0.6)" strokeWidth="1" fill="none"/>
            <line x1="42" y1="8" x2="64" y2="8" stroke="rgba(184,160,90,0.45)" strokeWidth="1"/>
          </svg>
        </div>

        {/* ── Main 2-column grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          borderTop: "1px solid rgba(184,160,90,0.18)",
          borderBottom: "1px solid rgba(184,160,90,0.18)",
        }}>

          {/* LEFT COLUMN */}
          <div style={{
            borderRight: "1px solid rgba(184,160,90,0.18)",
            padding: "2.5rem 3rem 2.5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}>

            {/* Address */}
            <div>
              <div style={iconCircle}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span style={labelStyle}>Address</span>
              <a
                href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...textStyle, textDecoration: "none", display: "block" }}
              >
                545 North Salina Street<br />
                Syracuse, NY 13208
              </a>
              <a
                href="tel:+13154251556"
                style={{ ...textStyle, textDecoration: "none", display: "block", marginTop: "0.2rem" }}
              >
                (315) 425–1556
              </a>
            </div>

            {/* Follow Us */}
            <div>
              <div style={iconCircle}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <span style={labelStyle}>Follow Us</span>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[
                  { label: "Facebook", href: "https://www.facebook.com/share/17EEV4KgJh/?mibextid=wwXIfr" },
                  { label: "Instagram", href: "https://www.instagram.com/francescascucina" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...textStyle, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,240,228,0.75)")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{
            padding: "2.5rem 0 2.5rem 3rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}>

            {/* Hours */}
            <div>
              <div style={iconCircle}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span style={labelStyle}>Hours</span>
              <div style={{ ...textStyle, display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "340px" }}>
                  <span>Monday – Thursday</span><span>4 – 9 pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "340px" }}>
                  <span>Friday – Saturday</span><span>4 – 10 pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "340px" }}>
                  <span>Sunday</span><span>Closed</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                style={btnStyle}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(184,160,90,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Reservations
              </a>
              <Link
                href="/gift-cards"
                style={btnStyle}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(184,160,90,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="6" width="22" height="13" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                Gift Cards
              </Link>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{ ...textStyle, fontSize: "0.68rem", color: "rgba(245,240,228,0.28)" }}>
            © {new Date().getFullYear()} Francesca's Cucina. All rights reserved.
          </p>
          <p style={{ ...textStyle, fontSize: "0.68rem", color: "rgba(245,240,228,0.2)" }}>
            545 North Salina Street · Syracuse, NY
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 680px) {
          footer .fc-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 680px) {
          footer > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:nth-child(3) > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(184,160,90,0.18) !important;
            padding: 2rem 0 2rem 0 !important;
          }
          footer > div > div:nth-child(3) > div:last-child {
            padding: 2rem 0 2rem 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
