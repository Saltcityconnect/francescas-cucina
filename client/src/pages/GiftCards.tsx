/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Gift Cards page: Catering-style split hero (text left, photo right 60%)
 * Theme: Charcoal (matches Menu, Catering, Events, Wine List)
 */

import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const GIFTCARD_HERO_IMG = "/manus-storage/giftcard_hero_cc83cbd9.png";

export default function GiftCards() {
  return (
    <div style={{ background: "#0a0a08", minHeight: "100vh", color: "#f0ece4" }}>
      <NavigationA />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — catering-style split: text left 40%, photo right 60%
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "relative",
        minHeight: "clamp(520px, 55vw, 680px)",
        background: "#0a0a08",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }} className="catering-hero">

        {/* Photo — right 60%, shifted up so gift card + awning are visible */}
        <div className="catering-hero-photo" style={{
          position: "absolute",
          top: 0, right: 0,
          width: "62%",
          height: "100%",
          zIndex: 1,
        }}>
          <img
            src={GIFTCARD_HERO_IMG}
            alt="Francesca's Cucina Gift Card"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 60%",
            }}
          />
          {/* Left-edge gradient: black → transparent */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0a0a08 0%, #0a0a08 8%, rgba(10,10,8,0.85) 22%, rgba(10,10,8,0.3) 45%, transparent 70%)",
            zIndex: 2,
          }} />
        </div>

        {/* Text column — left side */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "clamp(5rem, 10vw, 8rem) 0 4rem clamp(2rem, 5vw, 6rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <div style={{ maxWidth: "none" }}>
            {/* Eyebrow */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c8a96e",
              margin: "0 0 0.5rem",
            }}>
              Gift Cards
            </p>
            {/* Gold rule + ornament */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
              <div style={{ width: "28px", height: "1px", background: "#c8a96e" }} />
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" stroke="#c8a96e" strokeWidth="0.8" fill="none" /><circle cx="4" cy="4" r="1.2" fill="#c8a96e" /></svg>
              <div style={{ width: "28px", height: "1px", background: "#c8a96e" }} />
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(2.8rem, 8vw, 100px)",
              lineHeight: 1.05,
              color: "#f0ece4",
              margin: "0 0 1.2rem",
              letterSpacing: "-0.01em",
            }}>
              The Perfect Gift.
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
              color: "#b8b0a0",
              margin: "0 0 2.5rem",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}>
              Give the gift of an unforgettable Italian dining experience.<br />
              Available in any denomination — shipping always on us.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a
                href="https://francescas.securetree.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#1a1a18",
                  background: "#c8a96e",
                  padding: "0.9rem 2.2rem",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#b8996e")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a96e")}
              >
                Order Traditional Card
              </a>
              <a
                href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/giftcards"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c8a96e",
                  background: "transparent",
                  border: "1px solid rgba(200,169,110,0.6)",
                  padding: "0.9rem 2.2rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.color = "#e0c98e"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.6)"; e.currentTarget.style.color = "#c8a96e"; }}
              >
                Order Electronic Card
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Card Options */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Traditional Physical Gift Card */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(184,150,90,0.2)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  border: "1px solid rgba(184,150,90,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                  <path d="M6 15h4" />
                </svg>
              </div>

              <div>
                <p className="section-label" style={{ marginBottom: "0.5rem" }}>Physical Card</p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "1.75rem",
                    color: "var(--ivory)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Traditional Gift Card
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  A beautifully presented physical gift card, available in any denomination.
                  We'll mail it directly to you or your recipient — shipping is always free.
                  Perfect for birthdays, anniversaries, holidays, and special occasions.
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(184,150,90,0.12)",
                  paddingTop: "1.25rem",
                }}
              >
                {[
                  "Any denomination",
                  "Free shipping included",
                  "Redeemable for dining, catering & events",
                  "Never expires",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                    style={{ marginBottom: "0.6rem" }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>—</span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.825rem",
                        color: "var(--ivory-muted)",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://francescas.securetree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ivory"
                style={{ marginTop: "auto", textAlign: "center" }}
              >
                Order Traditional Gift Card
              </a>
            </div>

            {/* Electronic / Digital Gift Card */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(184,150,90,0.2)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  border: "1px solid rgba(184,150,90,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>

              <div>
                <p className="section-label" style={{ marginBottom: "0.5rem" }}>Digital Card</p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "1.75rem",
                    color: "var(--ivory)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Electronic Gift Card
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  Send a gift instantly via email. Our electronic gift cards are delivered
                  directly to your recipient's inbox — ideal for last-minute gifts or
                  sending love from a distance. Powered by Toast.
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(184,150,90,0.12)",
                  paddingTop: "1.25rem",
                }}
              >
                {[
                  "Any denomination",
                  "Instant email delivery",
                  "Redeemable for dining & takeout",
                  "Check balance online anytime",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                    style={{ marginBottom: "0.6rem" }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>—</span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.825rem",
                        color: "var(--ivory-muted)",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/giftcards"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ivory"
                style={{ marginTop: "auto", textAlign: "center" }}
              >
                Order Electronic Gift Card
              </a>
            </div>
          </div>

          {/* Check Balance */}
          <div
            className="max-w-4xl mx-auto mt-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(184,150,90,0.12)",
              padding: "2rem 2.5rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "0.4rem" }}>Electronic Cards Only</p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "var(--ivory)",
                }}
              >
                Check Your Gift Card Balance
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.825rem",
                  color: "var(--ivory-muted)",
                  marginTop: "0.4rem",
                }}
              >
                Already have an electronic gift card? Check your remaining balance online anytime.
              </p>
            </div>
            <a
              href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/findcard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ivory"
              style={{ whiteSpace: "nowrap" }}
            >
              Check Balance
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
