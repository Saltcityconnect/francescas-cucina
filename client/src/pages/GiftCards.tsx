/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Gift Cards page: Traditional physical cards, electronic/digital cards, check balance
 * SEO: H1 with keyword, proper heading hierarchy, descriptive content
 */

import NavigationB from "@/components/NavigationB";
import Footer from "@/components/Footer";

const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";

export default function GiftCards() {
  return (
    <div style={{ background: "var(--hunter-green)", minHeight: "100vh" }}>
      <NavigationB />

      {/* Page Header */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "80px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${DESSERT_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(12,11,9,0.5), rgba(12,11,9,0.92))" }}
        />
        <div className="container relative text-center" style={{ zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>The Perfect Gift</p>
          <span className="sage-rule" style={{ margin: "0 auto 2rem" }} />
          <h1
            className="display-headline"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginTop: "1.5rem", marginBottom: "1rem" }}
          >
            Francesca's Gift Cards
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--ivory-muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Give the gift of an unforgettable Italian dining experience. Available in any
            denomination — and shipping is on us.
          </p>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Traditional Physical Gift Card */}
            <div
              style={{
                background: "var(--hunter-green-dark)",
                border: "1px solid rgba(184,150,90,0.2)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Card icon */}
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
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
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
                    <span style={{ color: "var(--sage)", fontSize: "0.75rem" }}>—</span>
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
                className="btn-green-pill"
                style={{ marginTop: "auto", textAlign: "center" }}
              >
                Order Traditional Gift Card
              </a>
            </div>

            {/* Electronic / Digital Gift Card */}
            <div
              style={{
                background: "var(--hunter-green-dark)",
                border: "1px solid rgba(184,150,90,0.2)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Card icon */}
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
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.5">
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
                    <span style={{ color: "var(--sage)", fontSize: "0.75rem" }}>—</span>
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
                className="btn-green-pill"
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
              background: "var(--hunter-green-dark)",
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
                Already have an electronic gift card? Check your remaining balance online.
              </p>
            </div>
            <a
              href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/findcard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green-pill"
              style={{ background: "rgba(184,150,90,0.1)", whiteSpace: "nowrap" }}
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
          background: "var(--hunter-green-dark)",
          borderTop: "1px solid rgba(184,150,90,0.1)",
          borderBottom: "1px solid rgba(184,150,90,0.1)",
        }}
      >
        <div className="container text-center">
          <p className="section-label" style={{ marginBottom: "1rem" }}>Share the Experience</p>
          <span className="sage-rule" style={{ margin: "0 auto 2rem" }} />
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
              className="btn-green-pill"
            >
              Order Traditional Card
            </a>
            <a
              href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green-pill"
              style={{ background: "rgba(184,150,90,0.1)" }}
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
