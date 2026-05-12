/*
 * HOME — Dark Charcoal (Motherwolf-inspired)
 * Shorter video hero, one-line title, Menu photo grid, Private Dining mosaic, bordered footer
 */

import { Link } from "wouter";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const HERO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_video_f84b0e80.mp4";
const HERO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/exterior_building_fcb6fd3d.webp";

// Real food photos (uploaded by owner)
const FOOD1 = "/manus-storage/food_pic1_6ec29d96.png";
const FOOD2 = "/manus-storage/food_pic2_44b8fb88.jpg";
const FOOD3 = "/manus-storage/food_pic3_9ff5478f.png";
const FOOD4 = "/manus-storage/food_pic4_9e428792.png";
const FOOD5 = "/manus-storage/food_pic5_84fc586f.png";

// Private dining / catering photos (uploaded by owner)
const CATERING1 = "/manus-storage/catering1_728d87a9.jpg";
const CATERING2 = "/manus-storage/catering2_3bcb833a.jpg";
const CATERING3 = "/manus-storage/catering3_3cb16bdd.jpg";
const CATERING4 = "/manus-storage/catering4_03359069.jpg";

export default function HomeA() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      {/* ─── HERO: Shorter video banner ─── */}
      <section style={{ position: "relative", height: "60vh", minHeight: "420px", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Subtle dark overlay — keep video visible */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 70%, rgba(13,12,10,0.85) 100%)",
        }} />

        {/* Hero text — centered */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 1.5rem",
          zIndex: 2,
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(245,240,228,0.7)",
            marginBottom: "1rem",
          }}>
            Syracuse, New York · Est. 2003
          </p>

          <h1
            className="display-condensed"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "var(--ivory)",
              lineHeight: 0.9,
              marginBottom: "1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            Francesca's Cucina
          </h1>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            color: "rgba(245,240,228,0.8)",
            marginBottom: "2rem",
            letterSpacing: "0.02em",
          }}>
            Celebrating Food &amp; Family
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ivory"
            >
              Reservations
            </a>
            <Link href="/menu" className="btn-outline-ivory">
              Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WELCOME SECTION ─── */}
      <section style={{ padding: "6rem 0", background: "var(--charcoal)", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem", letterSpacing: "0.35em",
            textTransform: "uppercase", color: "var(--gold)",
            marginBottom: "1.25rem",
          }}>
            Welcome to Francesca's
          </p>
          <h2
            className="display-condensed"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--ivory)",
              marginBottom: "1.5rem",
              lineHeight: 0.95,
            }}
          >
            Welcome to Francesca's
          </h2>
          <div style={{ width: "50px", height: "1px", background: "var(--gold)", margin: "0 auto 2rem" }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            color: "var(--ivory-muted)",
            lineHeight: 1.9,
          }}>
            We are a family-owned Italian restaurant proudly serving the community for over 20 years.
            Voted one of Syracuse's best Italian restaurants year after year, we're known for our
            handcrafted pastas, fresh seafood, premium steaks, and unique weekly specials inspired by
            the seasons. Our warm, welcoming atmosphere is perfect for date nights, family dinners, and
            special celebrations. During the warmer months, guests can enjoy one of{" "}
            <strong style={{ color: "var(--ivory)", fontWeight: 500 }}>Syracuse's favorite outdoor dining patios</strong>
            {" "}— perfect for dining al fresco, cocktails with friends, and unforgettable summer nights.
            At Francesca's, every meal is made with care because when you dine with us, you're part of the family.
          </p>
        </div>
      </section>

      {/* ─── MENU SECTION — photo grid ─── */}
      <section style={{ background: "var(--charcoal)", padding: "0 0 6rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>

          {/* Heading with decorative lines */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1.5rem",
            marginBottom: "1rem",
          }}>
            <div style={{ flex: 1, height: "1px", background: "var(--gold)", opacity: 0.5 }} />
            <h2
              className="display-condensed"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--ivory)",
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              Menu
            </h2>
            <div style={{ flex: 1, height: "1px", background: "var(--gold)", opacity: 0.5 }} />
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/menu"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--ivory-muted)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(245,240,228,0.3)",
                paddingBottom: "2px",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ivory-muted)";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(245,240,228,0.3)";
              }}
            >
              View Full Menu →
            </Link>
          </div>

          {/* 5-photo grid: 2 top + 3 bottom */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {/* Top row: 2 photos */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              {[FOOD1, FOOD2].map((src, i) => (
                <div key={i} style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                  <img
                    src={src}
                    alt={`Francesca's Cucina signature dish ${i + 1}`}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
            {/* Bottom row: 3 photos */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
              {[FOOD3, FOOD4, FOOD5].map((src, i) => (
                <div key={i} style={{ overflow: "hidden", aspectRatio: "1/1" }}>
                  <img
                    src={src}
                    alt={`Francesca's Cucina signature dish ${i + 3}`}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIVATE DINING SECTION ─── */}
      <section style={{ background: "var(--charcoal)", padding: "0 0 6rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>

          {/* Heading with decorative lines */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1.5rem",
            marginBottom: "1.25rem",
          }}>
            <div style={{ flex: 1, height: "1px", background: "var(--gold)", opacity: 0.5 }} />
            <h2
              className="display-condensed"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--ivory)",
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              Private Dining
            </h2>
            <div style={{ flex: 1, height: "1px", background: "var(--gold)", opacity: 0.5 }} />
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "var(--ivory-muted)",
            lineHeight: 1.85,
            maxWidth: "580px",
            margin: "0 auto 1.75rem",
          }}>
            Francesca's Cucina events feature thoughtfully curated menus inspired by classic Italian cuisine
            and seasonal specialties. Our private dining room accommodates up to 50 guests, with our outdoor
            patio available for larger celebrations.
          </p>

          <Link
            href="/events"
            style={{
              display: "inline-block",
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ivory)",
              textDecoration: "none",
              border: "1px solid rgba(245,240,228,0.5)",
              padding: "0.75rem 2rem",
              marginBottom: "2.5rem",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(245,240,228,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Book Your Event
          </Link>

          {/* 4-photo mosaic: 1 large left + 3 right (1 wide top + 2 small bottom) */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "6px" }}>
            {/* Left: large tall photo */}
            <div style={{ overflow: "hidden", gridRow: "span 2" }}>
              <img
                src={CATERING1}
                alt="Private dining room at Francesca's Cucina"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              />
            </div>
            {/* Right top: wide photo */}
            <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
              <img
                src={CATERING2}
                alt="Event space at Francesca's Cucina"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              />
            </div>
            {/* Right bottom: 2 small photos side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              {[CATERING3, CATERING4].map((src, i) => (
                <div key={i} style={{ overflow: "hidden", aspectRatio: "1/1" }}>
                  <img
                    src={src}
                    alt={`Private dining detail ${i + 3}`}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .hero-title { white-space: normal !important; font-size: clamp(2.5rem, 12vw, 5rem) !important; }
        }
      `}</style>
    </div>
  );
}
