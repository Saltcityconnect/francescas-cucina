/*
 * FOOTER — Dark Charcoal
 * Bordered box: FRANCESCA'S CUCINA header, Address + Hours columns,
 * Follow Us social icons, Reservations + Gift Cards buttons bottom-right
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", padding: "3rem 2rem 2rem" }}>
      {/* ── Branded header with decorative lines ── */}
      <div style={{
        display: "flex", alignItems: "center", gap: "1.25rem",
        maxWidth: "860px", margin: "0 auto 1.5rem",
      }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
        <span style={{
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--gold)",
          whiteSpace: "nowrap",
        }}>
          Francesca's Cucina
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(184,160,90,0.4)" }} />
      </div>

      {/* ── Bordered content box ── */}
      <div style={{
        maxWidth: "860px",
        margin: "0 auto",
        border: "1px solid rgba(184,160,90,0.3)",
        padding: "2rem 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem 3rem",
      }}>
        {/* ── ADDRESS (top-left) ── */}
        <div>
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.6rem",
          }}>
            Address
          </p>
          <a
            href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.875rem",
              color: "var(--ivory-muted)",
              textDecoration: "none",
              lineHeight: 1.8,
              display: "block",
            }}
          >
            545 North Salina Street<br />
            Syracuse, NY 13208
          </a>
          <a
            href="tel:+13154251556"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.875rem",
              color: "var(--ivory-muted)",
              textDecoration: "none",
              display: "block",
              marginTop: "0.4rem",
            }}
          >
            (315) 425-1556
          </a>
        </div>

        {/* ── HOURS (top-right) ── */}
        <div>
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.6rem",
          }}>
            Hours
          </p>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.875rem",
            color: "var(--ivory-muted)",
            lineHeight: 2,
          }}>
            <div>Monday – Thursday &nbsp; 4 – 9 pm</div>
            <div>Friday – Saturday &nbsp;&nbsp;&nbsp; 4 – 10 pm</div>
            <div>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed</div>
          </div>
        </div>

        {/* ── FOLLOW US (bottom-left) ── */}
        <div>
          <p style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.6rem",
          }}>
            Follow Us
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {[
              { label: "Facebook", href: "https://www.facebook.com/share/17EEV4KgJh/?mibextid=wwXIfr" },
              { label: "Instagram", href: "https://www.instagram.com/francescascucina" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.8rem",
                  color: "var(--ivory-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ivory-muted)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── RESERVATIONS + GIFT CARDS buttons (bottom-right) ── */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end", justifyContent: "flex-end" }}>
          <a
            href="https://resy.com/cities/syr/francescas-cucina"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ivory)",
              textDecoration: "none",
              border: "1px solid rgba(245,240,228,0.5)",
              padding: "0.55rem 1.25rem",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(245,240,228,0.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
          >
            Reservations
          </a>
          <Link
            href="/gift-cards"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ivory)",
              textDecoration: "none",
              border: "1px solid rgba(245,240,228,0.5)",
              padding: "0.55rem 1.25rem",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(245,240,228,0.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
          >
            Gift Cards
          </Link>
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div style={{
        maxWidth: "860px", margin: "1.25rem auto 0",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "0.5rem",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          color: "rgba(245,240,228,0.35)",
        }}>
          © {new Date().getFullYear()} Francesca's Cucina. All rights reserved.
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          color: "rgba(245,240,228,0.25)",
        }}>
          545 North Salina Street · Syracuse, NY
        </p>
      </div>

      {/* Responsive: stack grid on mobile */}
      <style>{`
        @media (max-width: 600px) {
          footer > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
