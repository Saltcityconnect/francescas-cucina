/*
 * FOOTER — Reference layout match
 * - Background: restaurant photo with dark overlay
 * - Header: gold lines + "FRANCESCA'S CUCINA" + gold ornament
 * - 4-quadrant grid: Address (top-left) | Hours (top-right) | Follow Us (bottom-left) | Buttons (bottom-right)
 * - Vertical + horizontal dividers between quadrants
 * - Max-width 1400px matching other sections
 */

import { Link } from "wouter";

export default function Footer() {
  const iconCircle: React.CSSProperties = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "1px solid rgba(184,160,90,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginBottom: "1rem",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.6rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "var(--gold)",
    marginBottom: "0.85rem",
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: "0.875rem",
    color: "rgba(245,240,228,0.75)",
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
    textTransform: "uppercase",
    color: "var(--gold)",
    textDecoration: "none",
    border: "1px solid rgba(184,160,90,0.55)",
    borderRadius: "4px",
    padding: "0.85rem 1.75rem",
    transition: "background 0.2s ease, color 0.2s ease",
    background: "transparent",
    flex: 1,
    justifyContent: "center",
    minWidth: "160px",
  };

  return (
    <footer style={{
      position: "relative",
      overflow: "hidden",
      background: "#0a0907",
    }}>
      {/* Background photo with dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/manus-storage/pd_indoor_59b8bd65.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.18,
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,9,7,0.7) 0%, rgba(10,9,7,0.85) 100%)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "3.5rem 2rem 2rem",
      }}>

        {/* ── Header: gold lines + name + ornament ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "0.75rem",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.45)" }} />
          <span style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            whiteSpace: "nowrap",
          }}>
            Francesca's Cucina
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.45)" }} />
        </div>

        {/* Gold ornament */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <svg width="60" height="16" viewBox="0 0 60 16" fill="none">
            <path d="M0 8 L20 8" stroke="rgba(184,160,90,0.5)" strokeWidth="1"/>
            <circle cx="30" cy="8" r="3" stroke="rgba(184,160,90,0.7)" strokeWidth="1" fill="none"/>
            <circle cx="23" cy="8" r="1.5" stroke="rgba(184,160,90,0.5)" strokeWidth="1" fill="none"/>
            <circle cx="37" cy="8" r="1.5" stroke="rgba(184,160,90,0.5)" strokeWidth="1" fill="none"/>
            <path d="M40 8 L60 8" stroke="rgba(184,160,90,0.5)" strokeWidth="1"/>
          </svg>
        </div>

        {/* ── 4-quadrant grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gridTemplateRows: "auto 1px auto",
          gap: "0",
        }}>

          {/* TOP-LEFT: Address */}
          <div style={{ padding: "0 3rem 2.5rem 0" }}>
            <div style={iconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <p style={labelStyle}>Address</p>
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
              style={{ ...textStyle, textDecoration: "none", display: "block", marginTop: "0.25rem" }}
            >
              (315) 425–1556
            </a>
          </div>

          {/* Vertical divider */}
          <div style={{ background: "rgba(184,160,90,0.2)", gridRow: "1 / 4" }} />

          {/* TOP-RIGHT: Hours */}
          <div style={{ padding: "0 0 2.5rem 3rem" }}>
            <div style={iconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <p style={labelStyle}>Hours</p>
            <div style={textStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
                <span>Monday – Thursday</span><span>4 – 9 pm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
                <span>Friday – Saturday</span><span>4 – 10 pm</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
                <span>Sunday</span><span>Closed</span>
              </div>
            </div>
          </div>

          {/* Horizontal divider */}
          <div style={{ background: "rgba(184,160,90,0.2)", gridColumn: "1 / 2" }} />
          <div style={{ background: "rgba(184,160,90,0.2)", gridColumn: "3 / 4" }} />

          {/* BOTTOM-LEFT: Follow Us */}
          <div style={{ padding: "2.5rem 3rem 0 0" }}>
            <div style={iconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </div>
            <p style={labelStyle}>Follow Us</p>
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

          {/* BOTTOM-RIGHT: Reservations + Gift Cards */}
          <div style={{
            padding: "2.5rem 0 0 3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}>
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(184,160,90,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(184,160,90,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="6" width="22" height="13" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Gift Cards
            </Link>
          </div>

        </div>

        {/* ── Copyright ── */}
        <div style={{
          marginTop: "2.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid rgba(184,160,90,0.15)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{ ...textStyle, fontSize: "0.7rem", color: "rgba(245,240,228,0.3)" }}>
            © {new Date().getFullYear()} Francesca's Cucina. All rights reserved.
          </p>
          <p style={{ ...textStyle, fontSize: "0.7rem", color: "rgba(245,240,228,0.2)" }}>
            545 North Salina Street · Syracuse, NY
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 700px) {
          footer .footer-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
        }
      `}</style>
    </footer>
  );
}
