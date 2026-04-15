/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * About page: Brand story, history, values
 * SEO: H1 with keyword, proper heading hierarchy, rich content
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const DINING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_dining_93c39fd8.jpg";
const WINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/wine_glass_ac274dbb.jpg";
const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_food_4a73d61c.jpg";

export default function About() {
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
            backgroundImage: `url(${DINING_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(12,11,9,0.5), rgba(12,11,9,0.92))" }}
        />
        <div className="container relative text-center" style={{ zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Our Story</p>
          <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
          <h1
            className="display-headline"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginTop: "1.5rem", marginBottom: "1rem" }}
          >
            About Francesca's<br />Cucina
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
            A family-owned Italian restaurant in the heart of downtown Syracuse,
            celebrating food and community for over 30 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative"
              style={{ aspectRatio: "4/5", overflow: "hidden" }}
            >
              <img
                src={WINE_IMG}
                alt="Guests celebrating at Francesca's Cucina Italian restaurant in Syracuse"
                className="w-full h-full"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <div
                className="absolute"
                style={{
                  bottom: "-12px",
                  left: "-12px",
                  width: "60%",
                  height: "60%",
                  border: "1px solid rgba(184,150,90,0.3)",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>The Beginning</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem", marginBottom: "1.25rem" }}
              >
                Thirty Years of<br />Food & Family
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
                Francesca's Cucina opened its doors in downtown Syracuse with a simple
                but deeply held belief: that great food, made with care and shared with
                the people you love, is one of life's greatest pleasures. That belief
                has guided every decision we've made over the past three decades.
              </p>
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
                What began as a neighborhood Italian restaurant has grown into one of
                Central New York's most beloved dining destinations — a place where
                first dates become anniversaries, where families gather for Sunday
                dinners, and where the city comes together to celebrate.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.9,
                }}
              >
                Located at 545 North Salina Street in the heart of downtown Syracuse,
                Francesca's Cucina remains a family-owned and operated restaurant,
                committed to the same warmth, quality, and hospitality that has
                defined us from the very beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--charcoal-mid)", borderTop: "1px solid rgba(184,150,90,0.1)" }}
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label" style={{ marginBottom: "1rem" }}>What We Stand For</p>
            <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem" }}
            >
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Quality Without Compromise",
                desc: "Every ingredient is chosen with care. Our pasta is made in-house. Our seafood is fresh. Our steaks are Angus Reserve, aged to perfection. We don't cut corners because we believe you can taste the difference.",
              },
              {
                number: "02",
                title: "Hospitality as Heritage",
                desc: "In Italian culture, feeding someone is an act of love. We carry that tradition into every interaction — from the moment you walk through our door to the moment you leave. You are always a guest, never just a customer.",
              },
              {
                number: "03",
                title: "Community First",
                desc: "Syracuse is our home. We've watched families grow, celebrated milestones, and been part of this community's story for over 30 years. Supporting local, giving back, and being a gathering place for the city we love is central to who we are.",
              },
            ].map((value) => (
              <div
                key={value.number}
                style={{
                  padding: "2rem",
                  border: "1px solid rgba(184,150,90,0.12)",
                  background: "var(--charcoal)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "3rem",
                    color: "rgba(184,150,90,0.2)",
                    display: "block",
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}
                >
                  {value.number}
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.3rem",
                    color: "var(--ivory)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards / Recognition */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Recognition</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginTop: "1.5rem", marginBottom: "1.25rem" }}
              >
                Honored by the<br />Community We Serve
              </h2>
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
                Over the years, Francesca's Cucina has been recognized by the Syracuse
                community and beyond for our commitment to exceptional dining. We are
                proud recipients of the TripAdvisor Certificate of Excellence and have
                been named a Reader's Choice Award winner — honors that reflect the
                loyalty and love of our guests.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/menu" className="btn-gold">
                  Explore Our Menu
                </Link>
                <a
                  href="https://resy.com/cities/syr/francescas-cucina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ background: "rgba(184,150,90,0.1)" }}
                >
                  Make a Reservation
                </a>
              </div>
            </div>
            <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img
                src={FOOD_IMG}
                alt="Housemade pasta at Francesca's Cucina Italian restaurant Syracuse"
                className="w-full h-full"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
