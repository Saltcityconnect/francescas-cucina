/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Gift Cards page: Traditional physical cards, electronic/digital cards, check balance
 * Theme: Charcoal (matches Menu, Catering, Events, Wine List)
 */

import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const GIFTCARD_HERO_IMG = "/manus-storage/giftcard_hero_8e2ea87e.png";

export default function GiftCards() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <NavigationA />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — full-bleed photo, dark overlay, centered text (Private Dining style)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "clamp(480px, 55vw, 640px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0a0a08",
      }}>
        {/* Full-bleed photo */}
        <img
          src={GIFTCARD_HERO_IMG}
          alt="Francesca's Cucina gift card"
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
        {/* Dark overlay — bottom-heavy so text is readable */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,8,0.55) 0%, rgba(10,10,8,0.72) 50%, rgba(10,10,8,0.92) 100%)",
          zIndex: 2,
        }} />

        {/* Text content — centered */}
        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "clamp(6rem, 12vw, 10rem) 2rem 4rem",
          maxWidth: 720,
        }}>
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
          <svg width="120" height="14" viewBox="0 0 120 14" fill="none" style={{ display: "block", margin: "0 auto 1.4rem" }}>
            <line x1="0" y1="7" x2="50" y2="7" stroke="#c8a96e" strokeWidth="0.75" />
            <circle cx="60" cy="7" r="3" stroke="#c8a96e" strokeWidth="0.75" />
            <circle cx="60" cy="7" r="1.2" fill="#c8a96e" />
            <line x1="70" y1="7" x2="120" y2="7" stroke="#c8a96e" strokeWidth="0.75" />
          </svg>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
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
            maxWidth: 480,
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}>
            Give the gift of an unforgettable Italian dining experience.
            Available in any denomination — and shipping is always on us.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://francescas.securetree.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#f0ece4",
                border: "1px solid rgba(240,236,228,0.5)",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.color = "#c8a96e"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.5)"; e.currentTarget.style.color = "#f0ece4"; }}
            >
              Order Traditional Card
            </a>
            <a
              href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#f0ece4",
                border: "1px solid rgba(240,236,228,0.5)",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.color = "#c8a96e"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.5)"; e.currentTarget.style.color = "#f0ece4"; }}
            >
              Order Electronic Card
            </a>
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

      {/* Gift Card CTA Banner */}
      <section
        className="py-20 md:py-24"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(184,150,90,0.1)",
          borderBottom: "1px solid rgba(184,150,90,0.1)",
        }}
      >
        <div className="container text-center">
          <p className="section-label" style={{ marginBottom: "1rem" }}>Share the Experience</p>
          <div style={{ width: "48px", height: "1px", background: "var(--gold)", margin: "0 auto 2rem" }} />
          <h2
            className="display-headline"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem", marginBottom: "1.25rem" }}
          >
            Give the Gift of<br />Great Italian Food
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "var(--ivory-muted)",
              lineHeight: 1.9,
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            Francesca's gift cards are available in any denomination and make the perfect
            present for anyone who loves exceptional Italian cuisine. Shipping is always free
            on traditional cards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://francescas.securetree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ivory"
            >
              Order Traditional Card
            </a>
            <a
              href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ivory"
            >
              Order Electronic Card
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
