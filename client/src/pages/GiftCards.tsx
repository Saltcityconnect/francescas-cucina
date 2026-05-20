/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Gift Cards page: Split hero (blurred bg + crisp card image), gift card options, check balance
 * Theme: Charcoal (matches Menu, Catering, Events, Wine List)
 */

import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const GIFTCARD_HERO_IMG = "/manus-storage/giftcard_hero_cc83cbd9.png";

export default function GiftCards() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <NavigationA />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — full-bleed photo with vignette, left-aligned text
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "clamp(480px, 55vw, 640px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0a0a08",
      }}>
        {/* Full-bleed photo */}
        <img
          src={GIFTCARD_HERO_IMG}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            zIndex: 1,
          }}
        />
        {/* Vignette: dark edges all around, heavier on left for text legibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: [
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)",
            "linear-gradient(to right, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.55) 45%, rgba(10,10,8,0.15) 100%)",
          ].join(", "),
          zIndex: 2,
        }} />

        {/* Text container */}
        <div style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 5rem) 4rem",
        }}>

          {/* LEFT — text column */}
          <div style={{ flex: "0 0 auto", maxWidth: 520 }}>
            {/* Gold eyebrow */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c8a96e",
              margin: "0 0 0.6rem",
            }}>Gift Cards</p>

            {/* Gold ornament divider */}
            <svg width="100" height="14" viewBox="0 0 100 14" fill="none" style={{ display: "block", margin: "0 0 1.4rem" }}>
              <line x1="0" y1="7" x2="38" y2="7" stroke="#c8a96e" strokeWidth="0.75" />
              <circle cx="50" cy="7" r="3" stroke="#c8a96e" strokeWidth="0.75" />
              <circle cx="50" cy="7" r="1.2" fill="#c8a96e" />
              <line x1="62" y1="7" x2="100" y2="7" stroke="#c8a96e" strokeWidth="0.75" />
            </svg>

            {/* Main heading */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              color: "#f0ece4",
              margin: "0 0 1.2rem",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
            }}>
              The Perfect Gift
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "rgba(240,236,228,0.72)",
              maxWidth: 420,
              margin: "0",
              lineHeight: 1.75,
            }}>
              Give the gift of an unforgettable Italian dining experience.
              Available in any denomination — and shipping is always on us.
            </p>
          </div>


        </div>
      </section>

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
