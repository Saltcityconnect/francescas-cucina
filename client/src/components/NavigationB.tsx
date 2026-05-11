/*
 * NAVIGATION — Option B (Sunny's-inspired)
 * Hamburger left, centered logo, Reservations + Gift Cards pill buttons right
 * Deep hunter green background, cream text
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const menuLinks = [
  { label: "Reservations", href: "https://resy.com/cities/syr/francescas-cucina", external: true },
  { label: "Gift Cards", href: "/gift-cards", external: false },
  { label: "Order Online", href: "https://www.toasttab.com/francescas-cucina", external: true },
  { label: "Menu", href: "/menu", external: false },
  { label: "Catering", href: "/catering", external: false },
  { label: "Events", href: "/events", external: false },
];

export default function NavigationB() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: "var(--hunter-green)",
          borderBottom: "1px solid rgba(245,240,228,0.12)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

            {/* Hamburger — Left */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none" }}
            >
              <span style={{
                display: "block", width: "22px", height: "1.5px", background: "var(--cream)",
                transition: "all 0.3s ease",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", width: "22px", height: "1.5px", background: "var(--cream)",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "22px", height: "1.5px", background: "var(--cream)",
                transition: "all 0.3s ease",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }} />
            </button>

            {/* Wordmark — Center */}
            <Link href="/option-b" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textDecoration: "none" }}>
              <div style={{ textAlign: "center", lineHeight: 1 }}>
                <div style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                }}>
                  Francesca's Cucina
                </div>
              </div>
            </Link>

            {/* Right CTAs — pill buttons */}
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green-pill"
                style={{ padding: "0.45rem 1rem", fontSize: "0.72rem" }}
              >
                Reservations
              </a>
              <Link
                href="/gift-cards"
                className="btn-green-pill"
                style={{ padding: "0.45rem 1rem", fontSize: "0.72rem" }}
              >
                Gift Cards
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "var(--hunter-green-dark)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          style={{
            position: "absolute", top: "1.5rem", right: "2rem",
            background: "none", border: "none",
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.2em",
            color: "rgba(245,240,228,0.6)", textTransform: "uppercase",
          }}
        >
          Close ✕
        </button>

        {menuLinks.map((link, i) =>
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--cream)",
                textDecoration: "none",
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s, color 0.2s ease`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sage)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--cream)",
                textDecoration: "none",
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s, color 0.2s ease`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sage)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
