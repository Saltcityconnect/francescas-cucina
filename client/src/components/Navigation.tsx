/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Navigation: Fixed top bar, transparent → solid on scroll
 * Typography: DM Sans 300/400 for nav items, Cormorant Garamond italic for wordmark
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Gift Cards", href: "/gift-cards" },
];

export default function Navigation() {
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
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(12, 11, 9, 0.97)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,150,90,0.15)" : "none",
        }}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Wordmark */}
            <Link href="/" className="flex-shrink-0">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  color: "var(--ivory)",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                francesca's
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: location === link.href ? "var(--gold)" : "var(--ivory-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (location !== link.href) (e.target as HTMLElement).style.color = "var(--ivory)";
                  }}
                  onMouseLeave={(e) => {
                    if (location !== link.href) (e.target as HTMLElement).style.color = "var(--ivory-muted)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: "0.5rem 1.25rem", fontSize: "0.65rem" }}
              >
                Reservations
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "var(--ivory)",
                  transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "var(--ivory)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "var(--ivory)",
                  transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: "rgba(12, 11, 9, 0.98)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "2.5rem",
                color: location === link.href ? "var(--gold)" : "var(--ivory)",
                textDecoration: "none",
                transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://resy.com/cities/syr/francescas-cucina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.4s ease 0.25s",
            }}
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </>
  );
}
