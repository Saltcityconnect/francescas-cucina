/*
 * FOOTER — 4-quadrant layout
 * Desktop: 2-col grid, generous padding
 * Mobile: stays 2-col grid (2×2), tighter padding + smaller text so all 4 fit on screen
 * - No outer border, only internal dividers
 * - Icons inline next to labels
 * - Body text indented under label word
 */

import { Link } from "wouter";

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const FbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const CalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CardIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="22" height="13" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const divider = "1px solid rgba(184,160,90,0.2)";

export default function Footer() {
  return (
    <footer style={{ position: "relative", overflow: "hidden", background: "#0a0907" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 65% 40%, rgba(70,50,15,0.18) 0%, transparent 65%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto", padding: "2rem 1.5rem 1.25rem" }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.3rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.4vw, 1.6rem)",
            letterSpacing: "0.15em",
            color: "var(--gold)",
            whiteSpace: "nowrap",
          }}>
            Francesca's Cucina
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
        </div>

        {/* Ornament */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <svg width="140" height="22" viewBox="0 0 140 22" fill="none" style={{ display: "inline-block" }}>
            <line x1="0" y1="11" x2="46" y2="11" stroke="rgba(184,160,90,0.45)" strokeWidth="0.75"/>
            <path d="M46 11 Q52 5 58 11" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            <path d="M46 11 Q52 17 58 11" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            <circle cx="61" cy="11" r="1.2" fill="rgba(184,160,90,0.6)"/>
            <polygon points="70,4 76,11 70,18 64,11" stroke="rgba(184,160,90,0.75)" strokeWidth="0.75" fill="none"/>
            <circle cx="70" cy="11" r="1.5" fill="rgba(184,160,90,0.65)"/>
            <circle cx="79" cy="11" r="1.2" fill="rgba(184,160,90,0.6)"/>
            <path d="M82 11 Q88 5 94 11" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            <path d="M82 11 Q88 17 94 11" stroke="rgba(184,160,90,0.55)" strokeWidth="0.75" fill="none"/>
            <line x1="94" y1="11" x2="140" y2="11" stroke="rgba(184,160,90,0.45)" strokeWidth="0.75"/>
          </svg>
        </div>

        {/* ── 4-quadrant grid — stays 2-col on mobile too ── */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
        }}>

          {/* TOP-LEFT: Address */}
          <div className="footer-cell" style={{ borderRight: divider, borderBottom: divider }}>
            <div className="footer-label-row">
              <div className="footer-icon-circle"><PinIcon /></div>
              <span className="footer-label">Address</span>
            </div>
            <div className="footer-body footer-indent">
              <a
                href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                target="_blank" rel="noopener noreferrer"
                className="footer-link"
              >
                545 North Salina Street<br />
                Syracuse, NY 13208
              </a>
              <a href="tel:+13154251556" className="footer-link" style={{ display: "block", marginTop: "0.1rem" }}>
                (315) 425–1556
              </a>
            </div>
          </div>

          {/* TOP-RIGHT: Hours */}
          <div className="footer-cell" style={{ borderBottom: divider }}>
            <div className="footer-label-row">
              <div className="footer-icon-circle"><ClockIcon /></div>
              <span className="footer-label">Hours</span>
            </div>
            <div className="footer-body footer-indent footer-hours">
              <div className="footer-hour-row"><span>Mon – Thu</span><span>4–9 pm</span></div>
              <div className="footer-hour-row"><span>Fri – Sat</span><span>4–10 pm</span></div>
              <div className="footer-hour-row"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>

          {/* BOTTOM-LEFT: Follow Us */}
          <div className="footer-cell" style={{ borderRight: divider }}>
            <div className="footer-label-row">
              <div className="footer-icon-circle"><FbIcon /></div>
              <span className="footer-label">Follow Us</span>
            </div>
            <div className="footer-body footer-indent" style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {[
                { label: "Facebook", href: "https://www.facebook.com/share/17EEV4KgJh/?mibextid=wwXIfr" },
                { label: "Instagram", href: "https://www.instagram.com/francescascucina" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* BOTTOM-RIGHT: Buttons */}
          <div className="footer-cell footer-btns">
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank" rel="noopener noreferrer"
              className="footer-btn"
            >
              <CalIcon /> <span>Reservations</span>
            </a>
            <Link href="/gift-cards" className="footer-btn">
              <CardIcon /> <span>Gift Cards</span>
            </Link>
          </div>

        </div>

        {/* Copyright */}
        <p style={{
          marginTop: "1.25rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.62rem",
          color: "rgba(245,240,228,0.25)",
          textAlign: "center",
          letterSpacing: "0.05em",
        }}>
          © {new Date().getFullYear()} Francesca's Cucina · 545 North Salina Street, Syracuse, NY
        </p>
      </div>

      <style>{`
        /* ── Shared cell padding ── */
        .footer-cell {
          padding: 1.6rem 1.5rem;
          box-sizing: border-box;
        }

        /* ── Icon + label row ── */
        .footer-label-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.75rem;
        }
        .footer-icon-circle {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 50%;
          border: 1px solid rgba(184,160,90,0.45);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .footer-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.52rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* ── Body text ── */
        .footer-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          color: rgba(245,240,228,0.78);
          line-height: 1.75;
        }
        /* 34px icon + 0.65rem gap ≈ 44px indent */
        .footer-indent {
          padding-left: 44px;
        }
        .footer-link {
          color: rgba(245,240,228,0.78);
          text-decoration: none;
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          line-height: 1.75;
        }
        .footer-link:hover { color: var(--gold); }

        /* ── Hours ── */
        .footer-hours { display: flex; flex-direction: column; gap: 0; }
        .footer-hour-row {
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          color: rgba(245,240,228,0.78);
          line-height: 1.75;
        }

        /* ── Buttons quadrant ── */
        .footer-btns {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.65rem;
        }
        .footer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.52rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border: 1px solid rgba(184,160,90,0.5);
          border-radius: 4px;
          padding: 0.75rem 0.5rem;
          background: transparent;
          transition: background 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .footer-btn:hover { background: rgba(184,160,90,0.1); }

        /* ── Desktop: restore larger padding + text ── */
        @media (min-width: 640px) {
          .footer-cell { padding: 1.5rem 2rem; }
          .footer-icon-circle { width: 38px; height: 38px; min-width: 38px; }
          .footer-label { font-size: 0.58rem; }
          .footer-body, .footer-link, .footer-hour-row { font-size: 0.82rem; }
          .footer-indent { padding-left: 52px; }
          .footer-btn { font-size: 0.58rem; padding: 0.75rem 1.25rem; }
          .footer-btns { flex-direction: row; gap: 0.75rem; }
          .footer-hours { gap: 0; }
        }
      `}</style>
    </footer>
  );
}
