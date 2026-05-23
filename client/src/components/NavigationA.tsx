/*
 * NAVIGATION — Option A (Motherwolf-inspired)
 * Desktop: hamburger left | Reservations + Gift Cards right
 * Mobile:  hamburger left | Reservations + Gift Cards right
 * Home icon removed. Contact Us added to hamburger overlay.
 * Dark charcoal background on scroll, transparent over hero video
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const menuLinks = [
  { label: "Reservations", href: "https://resy.com/cities/syr/francescas-cucina", external: true },
  { label: "Gift Cards", href: "/gift-cards", external: false },
  { label: "Order Online", href: "https://www.toasttab.com/francescas-cucina", external: true },
  { label: "Menu", href: "/menu", external: false },
  { label: "Catering", href: "/catering", external: false },
  { label: "Private Events", href: "/events", external: false },
  { label: "Contact Us", href: "/contact", external: false },
];

export default function NavigationA() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const navBtnStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--ivory)",
    textDecoration: "none",
    padding: "0.5rem 1.1rem",
    border: "1px solid rgba(245,240,228,0.5)",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap" as const,
    display: "inline-block",
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(18, 16, 14, 0.97)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

            {/* Left side: hamburger only */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
              >
                <span style={{
                  display: "block", width: "24px", height: "1.5px", background: "var(--ivory)",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }} />
                <span style={{
                  display: "block", width: "24px", height: "1.5px", background: "var(--ivory)",
                  transition: "all 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }} />
                <span style={{
                  display: "block", width: "24px", height: "1.5px", background: "var(--ivory)",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }} />
              </button>
            </div>

            {/* Right CTAs — Reservations + Gift Cards, same size */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                style={navBtnStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--ivory)";
                  (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--ivory)";
                }}
              >
                Reservations
              </a>
              <Link
                href="/gift-cards"
                style={navBtnStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--ivory)";
                  (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--ivory)";
                }}
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
          background: "rgba(13, 12, 10, 0.98)",
          backdropFilter: "blur(16px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(0.6rem, 2.5vh, 2rem)",
          overflowY: "auto",
          padding: "5rem 2rem 3rem",
          boxSizing: "border-box",
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
            color: "var(--ivory-muted)", textTransform: "uppercase", cursor: "pointer",
          }}
        >
          Close ✕
        </button>

        {/* Home link in overlay */}
        <Link
          href="/"
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 4vh, 3rem)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ivory)",
            textDecoration: "none",
            transition: `opacity 0.4s ease 0s, transform 0.4s ease 0s, color 0.2s ease`,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ivory)")}
        >
          Home
        </Link>

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
                fontSize: "clamp(1.4rem, 4vh, 3rem)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--ivory)",
                textDecoration: "none",
                transition: `opacity 0.4s ease ${(i + 1) * 0.06}s, transform 0.4s ease ${(i + 1) * 0.06}s, color 0.2s ease`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ivory)")}
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
                fontSize: "clamp(1.4rem, 4vh, 3rem)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--ivory)",
                textDecoration: "none",
                transition: `opacity 0.4s ease ${(i + 1) * 0.06}s, transform 0.4s ease ${(i + 1) * 0.06}s, color 0.2s ease`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ivory)")}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
