/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Catering page: Rich content for SEO, service descriptions, contact
 * SEO: H1 with keyword, proper heading hierarchy, expanded content
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";

const cateringMenus = [
  {
    title: "Plated Entrees",
    desc: "Elegant plated service for formal events. Our kitchen prepares each dish to order, ensuring every guest receives a restaurant-quality experience at your venue.",
    img: STEAK_IMG,
  },
  {
    title: "Buffet & Family-Style",
    desc: "Abundant, communal dining that brings people together. Choose from our curated Italian buffet selections — perfect for corporate events, celebrations, and large gatherings.",
    img: SEAFOOD_IMG,
  },
  {
    title: "Hors d'Oeuvres",
    desc: "Passed appetizers and stationary displays featuring our signature Italian bites. From arancini rice balls to bacon-wrapped sea scallops, every piece is crafted with care.",
    img: FOOD_IMG,
  },
];

export default function Catering() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <Navigation />

      {/* Page Header */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "80px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${STEAK_IMG})`,
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
          <p className="section-label" style={{ marginBottom: "1rem" }}>Off-Site Catering</p>
          <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
          <h1
            className="display-headline"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginTop: "1.5rem", marginBottom: "1rem" }}
          >
            Italian Catering<br />in Syracuse
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
            Bring the Francesca's experience to your next event. We offer full-service
            off-site catering for corporate gatherings, weddings, holiday parties,
            and private celebrations throughout the Syracuse area.
          </p>
        </div>
      </section>

      {/* Why Francesca's */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Why Choose Us</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem", marginBottom: "1.25rem" }}
              >
                Restaurant Quality,<br />Delivered to You
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.9,
                  marginBottom: "1rem",
                }}
              >
                For over 30 years, Francesca's Cucina has been synonymous with exceptional
                Italian cuisine in Central New York. Our catering service brings that same
                standard of quality directly to your event — whether it's an intimate
                dinner for 20 or a corporate luncheon for 200.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                }}
              >
                Our catering team works closely with you to design a menu that fits your
                event, your guests, and your vision. From housemade pasta and fresh seafood
                to premium steaks and our signature Italian appetizers, every dish is
                prepared with the same care and attention that defines the Francesca's
                dining experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:catering@francescas-cucina.com"
                  className="btn-gold"
                >
                  Email Catering Team
                </a>
                <a
                  href="tel:+13154098848"
                  className="btn-gold"
                  style={{ background: "rgba(184,150,90,0.1)" }}
                >
                  (315) 409-8848
                </a>
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "30+", label: "Years of Experience" },
                { number: "200+", label: "Guests Served" },
                { number: "4", label: "Menu Styles" },
                { number: "CNY", label: "Delivery Area" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--charcoal-mid)",
                    border: "1px solid rgba(184,150,90,0.15)",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "2.5rem",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ivory-muted)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Styles */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--charcoal-mid)", borderTop: "1px solid rgba(184,150,90,0.1)" }}
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label" style={{ marginBottom: "1rem" }}>Service Styles</p>
            <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem" }}
            >
              Catering Menu Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cateringMenus.map((menu) => (
              <div
                key={menu.title}
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid rgba(184,150,90,0.12)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={menu.img}
                    alt={`${menu.title} catering by Francesca's Cucina`}
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "1.4rem",
                      color: "var(--ivory)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {menu.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.825rem",
                      color: "var(--ivory-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {menu.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "var(--ivory-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Contact us for our full catering menu and pricing information.
            </p>
            <a
              href="mailto:catering@francescas-cucina.com"
              className="btn-gold"
            >
              Request Catering Menu
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <p className="section-label" style={{ marginBottom: "1rem" }}>Ready to Plan?</p>
          <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
          <h2
            className="display-headline"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem", marginBottom: "1.25rem" }}
          >
            Let's Make Your Event<br />Unforgettable
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
            Reach out to our catering team to discuss your event, get a custom quote,
            and start planning your perfect Italian dining experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:catering@francescas-cucina.com" className="btn-gold">
              catering@francescas-cucina.com
            </a>
            <Link href="/events" className="btn-gold" style={{ background: "rgba(184,150,90,0.1)" }}>
              Private Event Spaces
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
