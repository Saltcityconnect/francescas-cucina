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
const CATERING1 = "/manus-storage/w_patio_5bd6a92e.jpg";
const CATERING2 = "/manus-storage/w_bar_29067af7.jpg";
const CATERING3 = "/manus-storage/w_summer_6a3d268e.jpg";
const CATERING4 = "/manus-storage/w_candlelit_59776707.jpg";

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
            background: "#0d0c0a",
          }}>
            {[
              { src: CATERING1, label: "Patio Dining" },
              { src: CATERING2, label: "Bar & Cocktails" },
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
                    objectPosition: "center",
                    display: "block",
                  }}
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
      <section style={{ background: "#13110f", padding: "5rem 0 4rem" }}>
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

        {/* Composite food photo — full-width, natural proportions */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
        }}>
          <img
            src="/manus-storage/food_composite_e7b235b5.png"
            alt="Francesca's Cucina signature dishes"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
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

      {/* ─── CATERING BANNER SECTION ─── */}
      <section style={{
        background: "#1a1714",
        backgroundImage: "url('/manus-storage/catering_hero_panoramic_8e6a4a0a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(15,12,10,0.78)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}>Catering</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            lineHeight: 1.15,
            color: "var(--ivory)",
            marginBottom: "1.5rem",
          }}>Bring Francesca&rsquo;s to the table.</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "rgba(245,240,228,0.75)",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}>Curated Italian catering for gatherings, celebrations, and special occasions of all sizes.</p>
          <Link
            href="/catering"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              border: "1px solid var(--ivory)",
              borderRadius: "6px",
              color: "var(--ivory)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
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
            Book Your Order
          </Link>
        </div>
      </section>

      {/* ─── PRIVATE DINING SECTION ─── */}
      <section style={{ background: "var(--charcoal)", padding: "0" }}>
        <div className="pd-grid" style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          minHeight: "520px",
        }}>
          {/* Left: dark panel with text */}
          <div style={{
            background: "#0d0c0a",
            padding: "5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1rem",
            }}>Private Dining</p>
            {/* Gold decorative line */}
            <div style={{ width: "48px", height: "1px", background: "var(--gold)", marginBottom: "1.75rem" }} />
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              lineHeight: 1.15,
              color: "var(--ivory)",
              marginBottom: "1.5rem",
            }}>Celebrate the moments that matter.</h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(245,240,228,0.72)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "340px",
            }}>Host unforgettable gatherings with warm hospitality and authentic Italian cuisine.</p>
            <Link
              href="/events"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                background: "var(--gold)",
                border: "1px solid var(--gold)",
                borderRadius: "6px",
                color: "#1a1410",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                alignSelf: "flex-start",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "#1a1410";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Your Event
            </Link>
          </div>

          {/* Right: 2 photos side by side */}
          <div className="pd-photos" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/manus-storage/pd_indoor_59b8bd65.png"
                alt="Private dining room at Francesca's Cucina"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/manus-storage/pd_patio_b33b592b.png"
                alt="Outdoor patio at Francesca's Cucina"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .hero-title { white-space: normal !important; font-size: clamp(2.5rem, 12vw, 5rem) !important; }

          /* Private Dining: stack text above photos on mobile */
          .pd-grid {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .pd-grid > div:first-child {
            padding: 2.5rem 1.5rem !important;
          }
          .pd-grid > div:first-child h2 {
            font-size: clamp(1.75rem, 7vw, 2.5rem) !important;
          }
          .pd-photos {
            height: 220px;
          }
          .pd-photos img {
            height: 220px !important;
            object-fit: cover !important;
          }
        }
      `}</style>
    </div>
  );
}
