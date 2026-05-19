/*
 * HOME — Dark Charcoal (Motherwolf-inspired)
 * Shorter video hero, one-line title, Menu photo grid, Private Dining mosaic, bordered footer
 */

import { Link } from "wouter";
import { useState, useRef } from "react";
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
// Welcome section photos — order: Bar, Dining Room, Patio, Summer Nights
const W_BAR      = "/manus-storage/w_bar_29067af7.jpg";
const W_DINING   = "/manus-storage/w_candlelit_59776707.jpg";
const W_PATIO    = "/manus-storage/w_patio_5bd6a92e.jpg";
const W_SUMMER   = "/manus-storage/summer-nights-new_2f848c6f.png";

const WELCOME_PHOTOS = [
  { src: W_BAR,    label: "Bar & Cocktails" },
  { src: W_DINING, label: "Dining Room" },
  { src: W_PATIO,  label: "Patio Dining" },
  { src: W_SUMMER, label: "Summer Nights" },
];

function PhotoCell({ src, label }: { src: string; label: string }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
      <img
        src={src}
        alt={label}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.6rem", fontWeight: 500,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--ivory)", marginBottom: "0.4rem",
        }}>{label}</p>
        <div style={{ width: "28px", height: "1px", background: "var(--gold)" }} />
      </div>
    </div>
  );
}

function WelcomePhotos() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setActive(i => (i - 1 + WELCOME_PHOTOS.length) % WELCOME_PHOTOS.length);
  const next = () => setActive(i => (i + 1) % WELCOME_PHOTOS.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev(); else if (dx < -40) next();
    touchStartX.current = null;
  };

  return (
    <>
      {/* ── Desktop: 2×2 grid ── */}
      <div className="welcome-photos-desktop" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "4px",
        aspectRatio: "1.4 / 1",
        background: "#0d0c0a",
      }}>
        {WELCOME_PHOTOS.map(p => <PhotoCell key={p.label} {...p} />)}
      </div>

      {/* ── Mobile: full-width carousel ── */}
      {/* Image track */}
      <div
        className="welcome-photos-mobile"
        style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", background: "#0d0c0a" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div style={{
          display: "flex",
          width: `${WELCOME_PHOTOS.length * 100}%`,
          height: "100%",
          transform: `translateX(-${active * (100 / WELCOME_PHOTOS.length)}%)`,
          transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {WELCOME_PHOTOS.map(p => (
            <div key={p.label} style={{ width: `${100 / WELCOME_PHOTOS.length}%`, flexShrink: 0, height: "100%" }}>
              <PhotoCell {...p} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls bar below image: counter LEFT | diamond buttons RIGHT */}
      <div className="welcome-photos-controls" style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.7rem 1.25rem 0.5rem",
        background: "#0d0c0a",
      }}>
        {/* Counter — left */}
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          color: "var(--ivory-muted)",
        }}>
          {active + 1} / {WELCOME_PHOTOS.length}
        </span>

        {/* Diamond buttons — right */}
        <div style={{ display: "flex", gap: "1.4rem", alignItems: "center" }}>
          {[{label: "Previous", onClick: prev, symbol: "‹"}, {label: "Next", onClick: next, symbol: "›"}].map(({label, onClick, symbol}) => (
            <button key={label} onClick={onClick} aria-label={label} style={{
              background: "transparent",
              border: "1px solid rgba(185,148,83,0.55)",
              color: "var(--gold)",
              width: "32px", height: "32px",
              transform: "rotate(45deg)",
              fontSize: "1.2rem", lineHeight: 1,
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 0,
            }}>
              <span style={{ transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>{symbol}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .welcome-photos-mobile { display: none; }
        .welcome-photos-controls { display: none; }
        @media (max-width: 768px) {
          .welcome-photos-desktop { display: none !important; }
          .welcome-photos-mobile  { display: block !important; }
          .welcome-photos-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const MENU_FOOD_PHOTOS = [
  { src: "/manus-storage/menu-food-1_bdd48938.png", alt: "Chicken Parmigiana" },
  { src: "/manus-storage/menu-food-2_765ecf7c.jpg", alt: "Gnocchi with Shrimp" },
  { src: "/manus-storage/menu-food-3_fdf02553.png", alt: "Brownie with Caramel" },
  { src: "/manus-storage/menu-food-4_071cecc5.png", alt: "Surf & Turf Board" },
  { src: "/manus-storage/menu-food-5_03d696f7.png", alt: "Seared Scallops" },
];

function MenuFoodCarousel() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = MENU_FOOD_PHOTOS.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev(); else if (dx < -40) next();
    touchStartX.current = null;
  };

  return (
    <div className="menu-food-mobile">
      {/* Image track */}
      <div
        style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", background: "#0d0c0a" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div style={{
          display: "flex",
          width: `${total * 100}%`,
          height: "100%",
          transform: `translateX(-${active * (100 / total)}%)`,
          transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {MENU_FOOD_PHOTOS.map((p, idx) => (
            <div key={p.alt} style={{ width: `${100 / total}%`, flexShrink: 0, height: "100%" }}>
              <img
                src={p.src}
                alt={p.alt}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  objectPosition: idx === 2 ? "center 60%" : "center center",
                  filter: idx >= 2 ? "contrast(1.12) saturate(1.18) brightness(1.04)" : undefined,
                  imageRendering: idx >= 2 ? "crisp-edges" : undefined,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls bar: counter LEFT | diamond buttons RIGHT */}
      <div className="menu-food-controls" style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.7rem 1.25rem 0.5rem",
        background: "#0d0c0a",
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.78rem", fontWeight: 500,
          letterSpacing: "0.15em",
          color: "var(--ivory-muted)",
        }}>{active + 1} / {total}</span>
        <div style={{ display: "flex", gap: "1.4rem", alignItems: "center" }}>
          {[{label: "Previous", onClick: prev, symbol: "\u2039"}, {label: "Next", onClick: next, symbol: "\u203a"}].map(({label, onClick, symbol}) => (
            <button key={label} onClick={onClick} aria-label={label} style={{
              background: "transparent",
              border: "1px solid rgba(185,148,83,0.55)",
              color: "var(--gold)",
              width: "32px", height: "32px",
              transform: "rotate(45deg)",
              fontSize: "1.2rem", lineHeight: 1,
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 0,
            }}>
              <span style={{ transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>{symbol}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .menu-food-mobile { display: none; }
        .menu-food-controls { display: none; }
        @media (max-width: 768px) {
          .menu-food-desktop { display: none !important; }
          .menu-food-mobile  { display: block !important; }
          .menu-food-controls { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

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
            className="hero-title"
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
              fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(245,240,228,0.85)",
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
                color: "#000",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid var(--gold)",
                borderRadius: "6px",
              }}
            >
              Reserve a Table
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
              fontSize: "0.85rem",
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

          {/* Right: 2×2 photo grid (desktop) / carousel (mobile) */}
          <WelcomePhotos />
        </div>

        <style>{`
          @media (max-width: 768px) {
            .welcome-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            /* Center all text in welcome section on mobile */
            .welcome-grid > div:first-child {
              text-align: center;
            }
            .welcome-grid > div:first-child > div {
              margin-left: auto;
              margin-right: auto;
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
            fontSize: "0.85rem",
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

        {/* Desktop: composite food photo */}
        <div className="menu-food-desktop" style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
        }}>
          <img
            src="/manus-storage/food_composite_e7b235b5.png"
            alt="Francesca's Cucina signature dishes"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Mobile: food photo carousel */}
        <MenuFoodCarousel />

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
      <section style={{ background: "#0d0c0a", padding: "4rem 2rem" }}>
        {/* Constrained container — no background image */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "4px",
          background: "#0d0c0a",
          padding: "6rem 2rem",
          textAlign: "center",
        }}>
        <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
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
        </div>
        </div>
      </section>

      {/* ─── PRIVATE DINING SECTION ─── */}
      <section style={{ background: "var(--charcoal)", padding: "0" }}>
        <div className="pd-grid" style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0,auto) 1fr",
          minHeight: "560px",
          position: "relative",
          background: "#0d0c0a",
        }}>
          {/* Left: dark panel with text — width driven by content, no extra right space */}
          <div style={{
            background: "#0d0c0a",
            padding: "5rem 2.5rem 5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            width: "max-content",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
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
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "clamp(2.8rem, 4.5vw, 4.6rem)",
              lineHeight: 1.08,
              color: "var(--ivory)",
              marginBottom: "1.5rem",
            }}>
              Celebrate<br />
              the moments<br />
              that matter.
            </h2>
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
              className="pd-book-btn-panel"
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

          {/* Right: 2 photos — dining room (left) + fireplace/ivy (right) */}
          <div className="pd-photos" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", position: "relative", zIndex: 1 }}>
            <div style={{ overflow: "hidden", position: "relative" }}>
              <img
                src="/manus-storage/pd_indoor_59b8bd65.png"
                alt="Private dining room at Francesca's Cucina"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% center", display: "block" }}
              />
              {/* Gradient: strong fade on left so photo black matches panel black */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, #0d0c0a 0%, #0d0c0a 15%, rgba(13,12,10,0.7) 35%, transparent 65%)",
                pointerEvents: "none",
              }} />
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/manus-storage/PrivateDiningPhotoRighthomepage_537010e9.jpeg"
                alt="Enchanted patio dining at Francesca's Cucina"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile-only: Book Your Event button below photos, centered */}
        <div className="pd-book-btn-mobile" style={{
          justifyContent: "center",
          padding: "1.5rem 1.5rem 2.5rem",
          background: "#0d0c0a",
        }}>
          <Link
            href="/events"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2.5rem",
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
      </section>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .hero-title { white-space: nowrap !important; font-size: clamp(1.4rem, 8.5vw, 5rem) !important; }

          /* Private Dining: stack text above photos on mobile, center everything */
          .pd-grid {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .pd-grid > div:first-child {
            padding: 2.5rem 1.5rem 1.5rem !important;
            text-align: center;
            align-items: center !important;
          }
          .pd-grid > div:first-child > div[style] {
            margin-left: auto;
            margin-right: auto;
          }
          /* Hide the button inside the text panel on mobile */
          .pd-book-btn-panel {
            display: none !important;
          }
          .pd-photos {
            height: 220px;
          }
          .pd-photos img {
            height: 220px !important;
            object-fit: cover !important;
          }
          /* Show the mobile-only button below photos */
          .pd-book-btn-mobile {
            display: flex !important;
          }
        }
        /* Desktop: hide the mobile button */
        .pd-book-btn-mobile {
          display: none;
        }
      `}</style>
    </div>
  );
}
