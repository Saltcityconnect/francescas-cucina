/*
 * HOME — Option A (Motherwolf-inspired)
 * Dark charcoal, Big Shoulders Display condensed caps, asymmetric editorial layouts
 * Video hero → Welcome section → Menu split → Events → Footer info
 */

import { Link } from "wouter";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const HERO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_video_f84b0e80.mp4";
const HERO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/exterior_building_fcb6fd3d.webp";
const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events1_8d038c07.jpg";
const RED_BRICK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/red_brick_room_8261d100.jpg";
const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";

const menuCategories = [
  { label: "Dinner", href: "/menu" },
  { label: "Dessert", href: "/menu" },
  { label: "Cocktails", href: "/menu" },
  { label: "Wine", href: "/menu" },
];

export default function HomeA() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      {/* ─── HERO: Full-bleed video ─── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
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

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(13,12,10,0.9) 100%)",
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
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(245,240,228,0.7)",
            marginBottom: "1.5rem",
          }}>
            Syracuse, New York · Est. 2003
          </p>

          <h1
            className="display-condensed animate-fade-up"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 11rem)",
              color: "var(--ivory)",
              lineHeight: 0.88,
              marginBottom: "2rem",
            }}
          >
            Francesca's<br />Cucina
          </h1>

          <p
            className="animate-fade-up animate-delay-200"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "rgba(245,240,228,0.8)",
              marginBottom: "3rem",
              letterSpacing: "0.02em",
            }}
          >
            Celebrating Food &amp; Family
          </p>

          <div className="animate-fade-up animate-delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ivory"
            >
              Reserve a Table
            </a>
            <Link href="/menu" className="btn-outline-ivory">
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          zIndex: 2,
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(245,240,228,0.5)",
          }}>Scroll</span>
          <div style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom, rgba(245,240,228,0.5), transparent)",
          }} />
        </div>
      </section>

      {/* ─── WELCOME SECTION ─── */}
      <section style={{ padding: "8rem 0", background: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
          className="welcome-grid"
          >
            {/* Left: text */}
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem", letterSpacing: "0.35em",
                textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "1.5rem",
              }}>
                Welcome to Francesca's
              </p>
              <h2
                className="display-condensed"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  color: "var(--ivory)",
                  marginBottom: "2rem",
                  lineHeight: 0.9,
                }}
              >
                A Family<br />Tradition
              </h2>
              <div style={{ width: "50px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: "var(--ivory-muted)",
                lineHeight: 1.85,
                maxWidth: "480px",
              }}>
                We are a family-owned Italian restaurant proudly serving the community for over 20 years. Voted one of Syracuse's best Italian restaurants year after year, we're known for our handcrafted pastas, fresh seafood, premium steaks, and unique weekly specials inspired by the seasons.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: "var(--ivory-muted)",
                lineHeight: 1.85,
                maxWidth: "480px",
                marginTop: "1.25rem",
              }}>
                Our warm, welcoming atmosphere is perfect for date nights, family dinners, and special celebrations. During the warmer months, guests can enjoy one of Syracuse's favorite outdoor dining patios. At Francesca's, every meal is made with care — because when you dine with us, you're part of the family.
              </p>
              <div style={{ marginTop: "2.5rem" }}>
                <a
                  href="https://resy.com/cities/syr/francescas-cucina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-ivory"
                >
                  Make a Reservation
                </a>
              </div>
            </div>

            {/* Right: stacked photos */}
            <div style={{ position: "relative" }}>
              <img
                src={PASTA_IMG}
                alt="Handcrafted pasta at Francesca's Cucina"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <img
                src={SEAFOOD_IMG}
                alt="Fresh seafood at Francesca's Cucina"
                style={{
                  width: "55%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  position: "absolute",
                  bottom: "-3rem",
                  left: "-3rem",
                  border: "4px solid var(--charcoal)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MENU SECTION — Motherwolf split layout ─── */}
      <section style={{ background: "var(--charcoal-mid)", overflow: "hidden" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "70vh",
        }}
        className="menu-split-grid"
        >
          {/* Left: dark panel with category list */}
          <div style={{
            background: "var(--charcoal)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 4rem",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem", letterSpacing: "0.35em",
              textTransform: "uppercase", color: "var(--gold)",
              marginBottom: "2rem",
            }}>
              Menu
            </p>
            {menuCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--ivory)",
                  textDecoration: "none",
                  lineHeight: 1.05,
                  display: "block",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ivory)")}
              >
                {cat.label}
              </Link>
            ))}
            <div style={{ marginTop: "3rem" }}>
              <Link href="/menu" className="btn-outline-ivory">
                View Full Menu
              </Link>
            </div>
          </div>

          {/* Right: large food photo */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={STEAK_IMG}
              alt="Premium steak at Francesca's Cucina"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.8s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            />
          </div>
        </div>
      </section>

      {/* ─── PHOTO STRIP ─── */}
      <section style={{ display: "flex", height: "320px", overflow: "hidden" }}>
        {[PASTA_IMG, EVENT_IMG, SEAFOOD_IMG, DESSERT_IMG].map((img, i) => (
          <div key={i} style={{ flex: 1, overflow: "hidden" }}>
            <img
              src={img}
              alt="Francesca's Cucina food and ambiance"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            />
          </div>
        ))}
      </section>

      {/* ─── PRIVATE DINING / EVENTS ─── */}
      <section style={{ background: "var(--charcoal)", overflow: "hidden" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "60vh",
        }}
        className="events-split-grid"
        >
          {/* Left: photo */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={RED_BRICK_IMG}
              alt="Private dining at Francesca's Cucina"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(13,12,10,0.3), transparent)",
            }} />
          </div>

          {/* Right: text */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 4rem",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem", letterSpacing: "0.35em",
              textTransform: "uppercase", color: "var(--gold)",
              marginBottom: "1.5rem",
            }}>
              Private Dining
            </p>
            <h2
              className="display-condensed"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--ivory)",
                marginBottom: "2rem",
                lineHeight: 0.92,
              }}
            >
              Host Your<br />Next Event
            </h2>
            <div style={{ width: "50px", height: "1px", background: "var(--gold)", marginBottom: "2rem" }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "var(--ivory-muted)",
              lineHeight: 1.85,
              maxWidth: "420px",
              marginBottom: "2.5rem",
            }}>
              Francesca's Cucina events feature thoughtfully curated menus inspired by classic Italian cuisine and seasonal specialties. Our private dining room accommodates up to 50 guests, offering the perfect setting for intimate gatherings and special celebrations.
            </p>
            <Link href="/events" className="btn-outline-ivory" style={{ width: "fit-content" }}>
              Book Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOURS & INFO BAR ─── */}
      <section style={{
        background: "var(--charcoal-mid)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 0",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            textAlign: "center",
          }}
          className="info-grid"
          >
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem", letterSpacing: "0.3em",
                textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "1rem",
              }}>Hours</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--ivory-muted)", lineHeight: 2 }}>
                Mon – Thu: 4 – 9 pm<br />
                Fri – Sat: 4 – 10 pm<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem", letterSpacing: "0.3em",
                textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "1rem",
              }}>Location</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--ivory-muted)", lineHeight: 2 }}>
                545 North Salina Street<br />
                Syracuse, NY 13208<br />
                (315) 425-1556
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem", letterSpacing: "0.3em",
                textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "1rem",
              }}>Follow Us</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
                {[
                  { label: "Instagram", href: "https://www.instagram.com/francescascucina" },
                  { label: "Facebook", href: "https://www.facebook.com/share/17EEV4KgJh/?mibextid=wwXIfr" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.85rem",
                      color: "var(--ivory-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ivory-muted)")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPTION SWITCHER ─── */}
      <div style={{
        background: "var(--charcoal)",
        padding: "1.5rem 3rem",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(245,240,228,0.35)",
          marginBottom: "0.75rem",
        }}>
          You're viewing Option A (Dark / Motherwolf-inspired)
        </p>
        <Link
          href="/option-b"
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 600,
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textDecoration: "none",
          }}
        >
          Switch to Option B (Green / Sunny's-inspired) →
        </Link>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .welcome-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .menu-split-grid { grid-template-columns: 1fr !important; }
          .events-split-grid { grid-template-columns: 1fr !important; }
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
