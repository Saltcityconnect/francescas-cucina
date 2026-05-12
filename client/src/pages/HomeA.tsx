/*
 * HOME — Dark Charcoal (Motherwolf-inspired)
 * Shorter video hero, one-line title, Menu photo grid, Private Dining mosaic, bordered footer
 */

import { Link } from "wouter";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const HERO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_video_f84b0e80.mp4";
const HERO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/exterior_building_fcb6fd3d.webp";

// Real food photos — flat (white vignette removed)
const FOOD1 = "/manus-storage/food_pic1_037a763c.png"; // chicken parm — large left
const FOOD2 = "/manus-storage/food_pic2_08778a2a.jpg"; // gnocchi — top center
const FOOD3 = "/manus-storage/food_pic3_33c8d6fc.png"; // brownie/caramel — top right
const FOOD4 = "/manus-storage/food_pic4_ceaeec18.png"; // surf & turf board — bottom center
const FOOD5 = "/manus-storage/food_pic5_6e05c036.png"; // scallops — bottom right

// Private dining / catering photos — flat (white vignette removed)
const CATERING1 = "/manus-storage/flat_catering1_0cfade6e.jpg";
const CATERING2 = "/manus-storage/flat_catering2_72e0ae75.jpg";
const CATERING3 = "/manus-storage/flat_catering3_5178cb0b.jpg";
const CATERING4 = "/manus-storage/flat_catering4_81137e06.jpg";

export default function HomeA() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      {/* ─── HERO: Full-viewport video banner ─── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "560px", overflow: "hidden" }}>
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
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(3rem, 9vw, 8.5rem)",
              color: "var(--ivory)",
              lineHeight: 1.0,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            }}
          >
            Francesca's Cucina
          </h1>

          {/* Tagline + small decorative line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.65rem, 1.4vw, 0.8rem)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(245,240,228,0.75)",
              marginBottom: "0.75rem",
            }}>
              Celebrating Food and Family
            </p>
            <div style={{ width: "48px", height: "1px", background: "var(--gold)", opacity: 0.8 }} />
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.85rem 2rem",
                background: "var(--gold)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid var(--gold)",
                borderRadius: "6px",
              }}
            >
              Reservations
            </a>
            <Link
              href="/menu"
              style={{
                display: "inline-block",
                padding: "0.85rem 2rem",
                background: "rgba(10,10,10,0.75)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(245,240,228,0.5)",
                borderRadius: "6px",
              }}
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WELCOME SECTION ─── */}
      <section style={{ background: "#0d0c0a", padding: "5rem 0" }}>
        <div style={{
          maxWidth: "1400px", margin: "0 auto", padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.8fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="welcome-grid"
        >
          {/* Left: text */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.5rem",
            }}>Welcome</p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              color: "var(--ivory)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}>
              A Syracuse Italian tradition with a warm, modern soul.
            </h2>

            <div style={{ width: "48px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "var(--ivory-muted)",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}>
              Francesca's Cucina has been serving the community for over 20 years with handcrafted pastas, premium seafood, steaks, and seasonal specialties in a warm, inviting atmosphere.
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "var(--ivory-muted)",
              lineHeight: 1.85,
            }}>
              From intimate dinners to summer nights on the patio, every experience is centered around food, family, and hospitality.
            </p>
          </div>

          {/* Right: 2×2 photo grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "4px",
            aspectRatio: "1.4 / 1",
          }}>
            {[
              { src: CATERING2, label: "Patio Dining" },
              { src: CATERING1, label: "Bar & Cocktails" },
              { src: CATERING3, label: "Summer Nights" },
              { src: CATERING4, label: "Candlelit Rooms" },
            ].map(({ src, label }) => (
              <div key={label} style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={src}
                  alt={label}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                />
                {/* Dark gradient at bottom */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                  pointerEvents: "none",
                }} />
                {/* Label */}
                <div style={{
                  position: "absolute", bottom: "1rem", left: "1rem",
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--ivory)",
                    marginBottom: "0.4rem",
                  }}>{label}</p>
                  <div style={{ width: "28px", height: "1px", background: "var(--gold)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .welcome-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* ─── MENU SECTION ─── */}
      <section style={{ background: "#0d0c0a", padding: "5rem 0 4rem" }}>
        {/* Centered header text */}
        <div style={{ textAlign: "center", marginBottom: "3rem", padding: "0 2rem" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.2rem",
          }}>Menu</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            color: "var(--ivory)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}>
            Classic Italian, beautifully done.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "var(--ivory-muted)",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto",
          }}>
            Housemade pastas, fresh seafood, premium steaks, and seasonal chef-inspired features served with Francesca's signature warmth.
          </p>
        </div>

        {/* 5-photo grid: 1 tall left + 2×2 right rectangle — all cells use object-cover to fill edge-to-edge */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridTemplateRows: "320px 320px",
          gap: "4px",
        }}
        className="menu-photo-grid"
        >
          {/* Large left photo — spans 2 rows, fills full height */}
          <div style={{
            gridColumn: "1",
            gridRow: "1 / 3",
            overflow: "hidden",
          }}>
            <img
              src={FOOD1}
              alt="Francesca's signature dish"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          {/* Right 2×2 grid — all 4 cells equal size */}
          <div style={{
            gridColumn: "2",
            gridRow: "1 / 3",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "320px 320px",
            gap: "4px",
          }}>
            {/* Top-left of right grid */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={FOOD2}
                alt="Francesca's signature dish"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            </div>
            {/* Top-right of right grid */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={FOOD3}
                alt="Francesca's signature dish"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            </div>
            {/* Bottom-left of right grid */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={FOOD4}
                alt="Francesca's signature dish"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </div>
            {/* Bottom-right of right grid */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={FOOD5}
                alt="Francesca's signature dish"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* VIEW FULL MENU button */}
        <div style={{ textAlign: "center", marginTop: "3rem", padding: "0 2rem" }}>
          <Link
            href="/menu"
            style={{
              display: "inline-block",
              padding: "1rem 3rem",
              border: "1px solid var(--ivory)",
              borderRadius: "4px",
              color: "var(--ivory)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--ivory)";
              (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--ivory)";
            }}
          >
            View Full Menu
          </Link>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .menu-photo-grid {
              grid-template-columns: 1fr !important;
              grid-template-rows: auto !important;
            }
            .menu-photo-grid > div {
              grid-column: 1 !important;
              grid-row: auto !important;
              min-height: 240px !important;
            }
          }
        `}</style>
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
