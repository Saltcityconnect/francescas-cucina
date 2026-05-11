/*
 * HOME — Option B (Sunny's-inspired)
 * Deep hunter green, Big Shoulders Display, centered layout, pill buttons
 * Video/slideshow hero → Welcome → Menu grid → Events → Info footer
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import NavigationB from "@/components/NavigationB";
import Footer from "@/components/Footer";

const HERO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_video_f84b0e80.mp4";
const HERO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/exterior_building_fcb6fd3d.webp";
const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events1_8d038c07.jpg";
const RED_BRICK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/red_brick_room_8261d100.jpg";
const CHEF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/chef_special_8863e660.jpg";
const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";

const slideImages = [PASTA_IMG, STEAK_IMG, SEAFOOD_IMG, CHEF_IMG];

export default function HomeB() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: "var(--hunter-green)", minHeight: "100vh", color: "var(--cream)" }}>
      <NavigationB />

      {/* ─── HERO: Video + Slideshow ─── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* Background video */}
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

        {/* Green-tinted overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(20,45,25,0.5) 0%, rgba(20,45,25,0.65) 60%, rgba(20,45,25,0.92) 100%)",
        }} />

        {/* Hero text */}
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
            fontSize: "0.68rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(245,240,228,0.65)",
            marginBottom: "1.5rem",
          }}>
            Syracuse, New York · Est. 2003
          </p>

          <h1
            className="display-condensed animate-fade-up"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              color: "var(--cream)",
              lineHeight: 0.88,
              marginBottom: "1.5rem",
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
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              color: "rgba(245,240,228,0.75)",
              marginBottom: "3rem",
              letterSpacing: "0.02em",
            }}
          >
            Celebrating Food &amp; Family
          </p>

          <div
            className="animate-fade-up animate-delay-300"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            <a
              href="https://resy.com/cities/syr/francescas-cucina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green-pill"
              style={{ padding: "0.75rem 2rem", fontSize: "0.85rem" }}
            >
              Reservations
            </a>
            <Link href="/menu" className="btn-green-pill" style={{ padding: "0.75rem 2rem", fontSize: "0.85rem" }}>
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll arrow */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          zIndex: 2,
        }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(245,240,228,0.4))" }} />
          <span style={{ fontSize: "1rem", color: "rgba(245,240,228,0.4)" }}>↓</span>
        </div>
      </section>

      {/* ─── WELCOME SECTION ─── */}
      <section style={{
        background: "var(--hunter-green)",
        padding: "7rem 0",
        textAlign: "center",
        borderBottom: "1px solid rgba(245,240,228,0.08)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.35em",
            textTransform: "uppercase", color: "var(--sage)",
            marginBottom: "1.5rem",
          }}>
            Welcome to Francesca's
          </p>
          <h2
            className="display-condensed"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--cream)",
              marginBottom: "2rem",
              lineHeight: 0.92,
            }}
          >
            Welcome to Francesca's!
          </h2>
          <div style={{ width: "50px", height: "1px", background: "var(--sage)", margin: "0 auto 2rem" }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "rgba(245,240,228,0.8)",
            lineHeight: 1.9,
          }}>
            We are a family-owned Italian restaurant proudly serving the community for over 20 years. Voted one of Syracuse's best Italian restaurants year after year, we're known for our handcrafted pastas, fresh seafood, premium steaks, and unique weekly specials inspired by the seasons. Our warm, welcoming atmosphere is perfect for date nights, family dinners, and special celebrations. During the warmer months, guests can enjoy one of Syracuse's favorite outdoor dining patios — perfect for dining al fresco, cocktails with friends, and unforgettable summer nights. At Francesca's, every meal is made with care because when you dine with us, you're part of the family.
          </p>
        </div>
      </section>

      {/* ─── PHOTO GRID ─── */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: "380px" }} className="photo-grid">
        {[PASTA_IMG, STEAK_IMG, SEAFOOD_IMG].map((img, i) => (
          <div key={i} style={{ overflow: "hidden", position: "relative" }}>
            <img
              src={img}
              alt="Francesca's Cucina cuisine"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.7s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            />
          </div>
        ))}
      </section>

      {/* ─── MENU SECTION ─── */}
      <section style={{
        background: "var(--hunter-green-dark)",
        padding: "7rem 0",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem", letterSpacing: "0.35em",
            textTransform: "uppercase", color: "var(--sage)",
            marginBottom: "1rem",
          }}>
            Our Menu
          </p>
          <h2
            className="display-condensed"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "var(--cream)",
              marginBottom: "3rem",
              lineHeight: 0.9,
            }}
          >
            Dinner · Dessert<br />Cocktails · Wine
          </h2>
          <Link href="/menu" className="btn-green-pill" style={{ padding: "0.8rem 2.5rem", fontSize: "0.9rem", marginBottom: "4rem", display: "inline-flex" }}>
            View Full Menu
          </Link>

          {/* Menu category cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
          className="menu-cards-grid"
          >
            {[
              { label: "Appetizers & Salads", img: SEAFOOD_IMG },
              { label: "Pasta & Entrees", img: PASTA_IMG },
              { label: "Steaks & Seafood", img: STEAK_IMG },
              { label: "Desserts", img: DESSERT_IMG },
            ].map((item) => (
              <Link
                key={item.label}
                href="/menu"
                style={{
                  position: "relative",
                  display: "block",
                  overflow: "hidden",
                  aspectRatio: "16/9",
                  textDecoration: "none",
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(20,45,25,0.85) 0%, rgba(20,45,25,0.1) 60%)",
                  display: "flex", alignItems: "flex-end",
                  padding: "1.5rem",
                }}>
                  <span
                    className="display-condensed"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      color: "var(--cream)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS SECTION ─── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "60vh" }}>
        <img
          src={EVENT_IMG}
          alt="Private dining at Francesca's Cucina"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(20,45,25,0.9) 0%, rgba(20,45,25,0.5) 100%)",
        }} />
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: "1320px", margin: "0 auto", padding: "6rem 3rem",
          display: "flex", alignItems: "center",
        }}>
          <div style={{ maxWidth: "560px" }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem", letterSpacing: "0.35em",
              textTransform: "uppercase", color: "var(--sage)",
              marginBottom: "1.5rem",
            }}>
              Private Dining
            </p>
            <h2
              className="display-condensed"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--cream)",
                marginBottom: "2rem",
                lineHeight: 0.9,
              }}
            >
              Host Your<br />Next Event
            </h2>
            <div style={{ width: "50px", height: "1px", background: "var(--sage)", marginBottom: "2rem" }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(245,240,228,0.8)",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}>
              Francesca's Cucina events feature thoughtfully curated menus inspired by classic Italian cuisine and seasonal specialties. Our private dining room accommodates up to 50 guests, with our outdoor patio available for larger celebrations.
            </p>
            <Link href="/events" className="btn-green-pill" style={{ padding: "0.8rem 2rem", fontSize: "0.85rem" }}>
              Book Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INFO / FOOTER BAR ─── */}
      <section style={{
        background: "var(--hunter-green-dark)",
        padding: "5rem 0",
        borderTop: "1px solid rgba(245,240,228,0.08)",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            textAlign: "center",
          }}
          className="info-grid-b"
          >
            <div>
              <p style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sage)",
                marginBottom: "1rem",
              }}>Hours</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(245,240,228,0.7)", lineHeight: 2 }}>
                Mon – Thu: 4 – 9 pm<br />
                Fri – Sat: 4 – 10 pm<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sage)",
                marginBottom: "1rem",
              }}>Location</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(245,240,228,0.7)", lineHeight: 2 }}>
                545 North Salina Street<br />
                Syracuse, NY 13208<br />
                (315) 425-1556
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sage)",
                marginBottom: "1rem",
              }}>Follow Us</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
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
                      fontSize: "0.9rem",
                      color: "rgba(245,240,228,0.7)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,240,228,0.7)")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      <style>{`
        @media (max-width: 768px) {
          .photo-grid { grid-template-columns: 1fr !important; height: auto !important; }
          .menu-cards-grid { grid-template-columns: 1fr !important; }
          .info-grid-b { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
