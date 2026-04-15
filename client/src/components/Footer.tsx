/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Footer: Dark charcoal, gold accents, elegant typography
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid rgba(184,150,90,0.2)",
      }}
    >
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "2rem",
                color: "var(--ivory)",
              }}
            >
              francesca's
            </span>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Cucina
            </span>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.85rem",
                color: "var(--ivory-muted)",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Celebrating food &amp; family in the heart of Syracuse for over 30 years.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-2">
              {[
                { label: "Facebook", href: "https://www.facebook.com/FrancescasCucina" },
                { label: "Instagram", href: "https://www.instagram.com/francescascucina" },
                { label: "TripAdvisor", href: "https://www.tripadvisor.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--ivory-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ivory-muted)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hours column */}
          <div className="flex flex-col gap-4">
            <span className="section-label">Hours</span>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "var(--ivory-muted)",
                lineHeight: 2,
              }}
            >
              <div className="flex justify-between gap-8">
                <span>Monday – Thursday</span>
                <span style={{ color: "var(--ivory)" }}>4 – 9 pm</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Friday – Saturday</span>
                <span style={{ color: "var(--ivory)" }}>4 – 10 pm</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sunday</span>
                <span style={{ color: "var(--ivory)" }}>Closed</span>
              </div>
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <span className="section-label">Find Us</span>
            <address
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "var(--ivory-muted)",
                lineHeight: 1.8,
                fontStyle: "normal",
              }}
            >
              <a
                href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--ivory-muted)", textDecoration: "none" }}
              >
                545 North Salina Street<br />
                Syracuse, NY 13208
              </a>
            </address>
            <a
              href="tel:+13154251556"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "var(--ivory-muted)",
                textDecoration: "none",
              }}
            >
              (315) 425-1556
            </a>
            <a
              href="mailto:info@francescas-cucina.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "var(--ivory-muted)",
                textDecoration: "none",
              }}
            >
              info@francescas-cucina.com
            </a>
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/menu" className="btn-gold" style={{ width: "fit-content", padding: "0.5rem 1.25rem", fontSize: "0.65rem" }}>
                View Menu
              </Link>
              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ width: "fit-content", padding: "0.5rem 1.25rem", fontSize: "0.65rem" }}
              >
                Reservations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(184,150,90,0.1)",
          padding: "1.25rem 0",
        }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-2">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--ivory-muted)",
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} Francesca's Cucina. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--ivory-muted)",
              opacity: 0.4,
            }}
          >
            545 North Salina Street · Syracuse, NY
          </p>
        </div>
      </div>
    </footer>
  );
}
