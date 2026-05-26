/*
 * FOOTER — matches reference design
 * Desktop: background photo + dark overlay, compact 4-quadrant grid, spaced-caps header,
 *          proportional side-by-side buttons, full-width hours rows
 * Mobile: stays 2-col grid (2×2), small font, no wrapping
 */

import { Link } from "wouter";

const FOOTER_BG = "/manus-storage/outdoor_patio_d9367ed7.jpeg";

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
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CardIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="22" height="13" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const divider = "1px solid rgba(184,160,90,0.22)";

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#0d0c0a", padding: "0" }}>

      <div style={{ background: "#0d0c0a", maxWidth: "1200px", margin: "0 auto" }}>

      <div className="footer-outer-pad">

        {/* ── Header: spaced caps matching reference ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.35rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.45)" }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "0.9375rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "var(--gold)",
            whiteSpace: "nowrap",
          }}>
            Francesca's Cucina
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.45)" }} />
        </div>

        {/* Ornament */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <svg width="100" height="18" viewBox="0 0 100 18" fill="none" style={{ display: "inline-block" }}>
            <line x1="0" y1="9" x2="32" y2="9" stroke="rgba(184,160,90,0.4)" strokeWidth="0.75"/>
            <path d="M32 9 Q37 4 42 9" stroke="rgba(184,160,90,0.5)" strokeWidth="0.75" fill="none"/>
            <path d="M32 9 Q37 14 42 9" stroke="rgba(184,160,90,0.5)" strokeWidth="0.75" fill="none"/>
            <circle cx="44.5" cy="9" r="1" fill="rgba(184,160,90,0.55)"/>
            <polygon points="50,3 55,9 50,15 45,9" stroke="rgba(184,160,90,0.7)" strokeWidth="0.75" fill="none"/>
            <circle cx="50" cy="9" r="1.2" fill="rgba(184,160,90,0.6)"/>
            <circle cx="55.5" cy="9" r="1" fill="rgba(184,160,90,0.55)"/>
            <path d="M58 9 Q63 4 68 9" stroke="rgba(184,160,90,0.5)" strokeWidth="0.75" fill="none"/>
            <path d="M58 9 Q63 14 68 9" stroke="rgba(184,160,90,0.5)" strokeWidth="0.75" fill="none"/>
            <line x1="68" y1="9" x2="100" y2="9" stroke="rgba(184,160,90,0.4)" strokeWidth="0.75"/>
          </svg>
        </div>

        {/* ── 4-quadrant grid ── */}
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
            <div className="footer-indent">
              <a
                href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                target="_blank" rel="noopener noreferrer"
                className="footer-link"
              >
                545 North Salina Street<br />
                Syracuse, NY 13208
              </a>
              <a href="tel:+13154251556" className="footer-link" style={{ marginTop: "0.25rem" }}>
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
            <div className="footer-indent footer-hours">
              <div className="footer-hour-row"><span>Monday – Thursday</span><span>4 – 9 pm</span></div>
              <div className="footer-hour-row"><span>Friday – Saturday</span><span>4 – 10 pm</span></div>
              <div className="footer-hour-row"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>

          {/* BOTTOM-LEFT: Follow Us */}
          <div className="footer-cell" style={{ borderRight: divider }}>
            <div className="footer-label-row">
              <div className="footer-icon-circle"><FbIcon /></div>
              <span className="footer-label">Follow Us</span>
            </div>
            <div className="footer-indent footer-social">
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
          marginTop: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.6rem",
          color: "rgba(245,240,228,0.22)",
          textAlign: "center",
          letterSpacing: "0.05em",
        }}>
          © {new Date().getFullYear()} Francesca's Cucina · 545 North Salina Street, Syracuse, NY
        </p>
      </div>
      </div>

      <style>{`
        .footer-outer-pad { padding: 1.5rem 0.5rem 1rem; }

        /* ── Mobile base (default) – keep 2×2 grid ── */
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
        .footer-cell {
          padding: 1.1rem 0.9rem;
          box-sizing: border-box;
          overflow: hidden;
        }
        .footer-label-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.55rem;
        }
        .footer-icon-circle {
          width: 26px; height: 26px; min-width: 26px;
          border-radius: 50%;
          border: 1px solid rgba(184,160,90,0.45);
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .footer-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          white-space: nowrap;
        }
        .footer-indent { padding-left: 0; }
        .footer-link {
          color: rgba(245,240,228,0.85);
          text-decoration: none;
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.68rem;
          line-height: 1.55;
          white-space: normal;
        }
        .footer-link:hover { color: var(--gold); }
        .footer-hours { display: flex; flex-direction: column; }
        .footer-hour-row {
          display: flex;
          justify-content: space-between;
          gap: 0.25rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.65rem;
          color: rgba(245,240,228,0.85);
          line-height: 1.55;
          white-space: nowrap;
        }
        .footer-social { display: flex; flex-direction: column; gap: 0; }
        .footer-btns {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
        }
        .footer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border: 1px solid rgba(184,160,90,0.6);
          border-radius: 3px;
          padding: 0.5rem 0.4rem;
          background: transparent;
          transition: background 0.2s ease;
          width: 100%;
          box-sizing: border-box;
          white-space: nowrap;
        }
        .footer-btn:hover { background: rgba(184,160,90,0.08); }

        /* ── Desktop overrides ── */
        @media (min-width: 640px) {
          .footer-outer-pad { padding: 2.5rem 2.5rem 1.5rem; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-cell { overflow: hidden; padding: 1.8rem 2.2rem; }
          .footer-icon-circle { width: 36px; height: 36px; min-width: 36px; }
          .footer-label { font-size: 0.72rem; letter-spacing: 0.28em; }
          .footer-indent { padding-left: 50px; }
          .footer-link { font-size: 1rem; white-space: normal; font-weight: 400; }
          .footer-hour-row { font-size: 1rem; white-space: normal; font-weight: 400; }
          .footer-social { flex-direction: row; gap: 1.5rem; }
          .footer-btns { flex-direction: row; gap: 0.75rem; align-items: center; }
          .footer-btn {
            font-size: 0.72rem;
            letter-spacing: 0.22em;
            padding: 0.8rem 1.6rem;
            width: auto;
            flex: 1;
          }
        }
      `}</style>
    </footer>
  );
}
