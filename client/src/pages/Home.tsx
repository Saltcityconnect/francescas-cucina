/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Home page: Full-bleed hero, editorial sections, food photography
 * SEO: H1 with keyword, proper heading hierarchy, descriptive content
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PATIO_VIDEO = "/manus-storage/patio-video_9b3b041c.mp4";
const PATIO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/awards-strip-mockup-eukfwHdW3QcRUvtJqeUbxU.webp";
const HERO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_video_f84b0e80.mp4";
const HERO_POSTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/exterior_building_fcb6fd3d.webp";
const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const SEAFOOD_IMG = "/manus-storage/food-pasta-shrimp_6f12d443.webp";
const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events1_8d038c07.jpg";
const WINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/wine_37d24b89.jpg";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "100svh", minHeight: "600px" }}
        aria-label="Hero section"
      >
        {/* Hero video background */}
        <video
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,11,9,0.3) 0%, rgba(12,11,9,0.15) 40%, rgba(12,11,9,0.75) 80%, rgba(12,11,9,1) 100%)",
          }}
        />

        {/* Hero content — bottom left anchored */}
        <div
          className="absolute container"
          style={{ bottom: "10%", left: 0, right: 0 }}
        >
          <div className="max-w-2xl">
            <p className="section-label animate-fade-up animate-delay-100" style={{ marginBottom: "1rem" }}>
              Syracuse, New York
            </p>
            <h1
              className="display-headline animate-fade-up animate-delay-200"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", marginBottom: "1.25rem" }}
            >
              Authentic Italian<br />Dining, Downtown
            </h1>
            <p
              className="animate-fade-up animate-delay-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: "var(--ivory-muted)",
                lineHeight: 1.7,
                maxWidth: "440px",
                marginBottom: "2rem",
              }}
            >
              Celebrating food &amp; family for over 30 years. Classic Italian cuisine
              crafted with care, served in the warmth of our exposed-brick dining rooms.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
              <Link href="/menu" className="btn-gold">
                Browse Menu
              </Link>
              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  background: "rgba(184,150,90,0.15)",
                }}
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 animate-fade-up animate-delay-500"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
        >
          <span className="section-label" style={{ fontSize: "0.6rem" }}>Scroll</span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, var(--gold), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section
        style={{
          background: "var(--charcoal-mid)",
          borderTop: "1px solid rgba(184,150,90,0.15)",
          borderBottom: "1px solid rgba(184,150,90,0.15)",
          padding: "2rem 0",
        }}
      >
        <div className="container">
          <div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
            style={{ textAlign: "center" }}
          >
            {[
              { number: "30+", label: "Years of Excellence" },
              { number: "545", label: "North Salina Street" },
              { number: "2", label: "Private Event Spaces" },
              { number: "Mon–Sat", label: "Open for Dinner" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: "var(--gold)",
                  }}
                >
                  {item.number}
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
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal" style={{ opacity: 0 }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Our Story</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "1.5rem", marginTop: "1.5rem" }}
              >
                Where Syracuse<br />Comes to the Table
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
                For more than three decades, Francesca's Cucina has been a cornerstone of
                downtown Syracuse dining. What began as a family dream has grown into one of
                Central New York's most beloved Italian restaurants — a place where every
                guest is treated like family and every dish is made with intention.
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
                From our housemade pasta and fresh-caught seafood to our premium Angus
                Reserve steaks, every plate reflects a deep respect for the Italian tradition
                of celebrating life through food.
              </p>
              <Link href="/about" className="btn-gold">
                Our Story
              </Link>
            </div>
            <div
              className="reveal relative"
              style={{ opacity: 0, aspectRatio: "4/5", overflow: "hidden" }}
            >
              <img
                src={WINE_IMG}
                alt="Guests celebrating with wine at Francesca's Cucina"
                className="w-full h-full"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              {/* Gold frame accent */}
              <div
                className="absolute"
                style={{
                  bottom: "-12px",
                  right: "-12px",
                  width: "60%",
                  height: "60%",
                  border: "1px solid rgba(184,150,90,0.3)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DISHES ── */}
      <section
        className="py-24 md:py-32 relative grain-overlay"
        style={{ background: "var(--charcoal-mid)" }}
      >
        <div className="container relative" style={{ zIndex: 2 }}>
          <div className="text-center reveal" style={{ opacity: 0, marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>The Kitchen</p>
            <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginTop: "1.5rem" }}
            >
              Crafted with Passion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: FOOD_IMG,
                label: "Pasta",
                title: "Housemade Pasta",
                desc: "From Uncle Paulie's Bolognese to Lobster-Stuffed Cheese Ravioli, our pasta is made in-house with time-honored Italian technique.",
              },
              {
                img: SEAFOOD_IMG,
                label: "Seafood",
                title: "Fresh Seafood",
                desc: "Canadian salmon, jumbo sea scallops, and a rotating selection of the freshest catch — all prepared with Italian flair.",
              },
              {
                img: STEAK_IMG,
                label: "Steaks",
                title: "Premium Steaks",
                desc: "Angus Reserve filet mignon, bone-in NY strip, and our signature Delmonico ribeye — aged for peak flavor and chargrilled to perfection.",
              },
            ].map((dish, i) => (
              <div
                key={dish.title}
                className="reveal"
                style={{ opacity: 0, animationDelay: `${i * 0.1}s` }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    marginBottom: "1.5rem",
                    position: "relative",
                  }}
                >
                  <img
                    src={dish.img}
                    alt={`${dish.title} at Francesca's Cucina`}
                    className="w-full h-full transition-transform duration-700"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      background: "rgba(12,11,9,0.7)",
                      padding: "0.25rem 0.75rem",
                    }}
                  >
                    <span className="section-label" style={{ fontSize: "0.6rem" }}>{dish.label}</span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.4rem",
                    color: "var(--ivory)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {dish.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {dish.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal" style={{ opacity: 0 }}>
            <Link href="/menu" className="btn-gold">
              Explore the Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS CTA ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${EVENT_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(12,11,9,0.92) 0%, rgba(12,11,9,0.6) 50%, rgba(12,11,9,0.3) 100%)",
          }}
        />
        <div className="container relative py-24 md:py-32" style={{ zIndex: 2 }}>
          <div className="max-w-xl reveal" style={{ opacity: 0 }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Private Events</p>
            <span className="gold-rule" style={{ marginBottom: "2rem" }} />
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginTop: "1.5rem", marginBottom: "1.25rem" }}
            >
              Host Your Most<br />Memorable Moments
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
              From intimate rehearsal dinners in The Red Brick Room to elegant wedding
              receptions on The Tuscany Terrace, Francesca's offers two stunning private
              event spaces for up to 100 guests.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/events" className="btn-gold">
                Explore Venues
              </Link>
              <Link href="/catering" className="btn-gold" style={{ background: "rgba(184,150,90,0.1)" }}>
                Catering Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="reveal" style={{ opacity: 0 }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Visit Us</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", marginTop: "1.5rem", marginBottom: "1.5rem" }}
              >
                Minutes from<br />Destiny USA
              </h2>
              <address
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.9,
                  fontStyle: "normal",
                  marginBottom: "1.5rem",
                }}
              >
                <a
                  href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--ivory-muted)", textDecoration: "none" }}
                >
                  545 North Salina Street<br />
                  Syracuse, NY 13208
                </a>
              </address>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                Take Hiawatha Blvd to North Salina and turn right. We're located at 545,
                just before Butternut Street. Parking available in the lot next door and
                around the corner on Ash Street.
              </p>
              <a
                href="https://maps.google.com/?q=545+North+Salina+Street+Syracuse+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Get Directions
              </a>
            </div>

            <div className="reveal" style={{ opacity: 0 }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>Hours</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
              <div
                style={{
                  marginTop: "1.5rem",
                  borderTop: "1px solid rgba(184,150,90,0.15)",
                }}
              >
                {[
                  { day: "Monday – Thursday", hours: "4:00 pm – 9:00 pm" },
                  { day: "Friday – Saturday", hours: "4:00 pm – 10:00 pm" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-center"
                    style={{
                      padding: "1rem 0",
                      borderBottom: "1px solid rgba(184,150,90,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "var(--ivory-muted)",
                      }}
                    >
                      {row.day}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: row.hours === "Closed" ? "var(--ivory-muted)" : "var(--ivory)",
                      }}
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://resy.com/cities/syr/francescas-cucina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Reserve a Table
                </a>
                <a
                  href="https://www.order.online/store/francescas-cucina-syracuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ background: "rgba(184,150,90,0.1)" }}
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTDOOR DINING ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: "var(--charcoal)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — portrait video panel */}
            <div
              className="reveal relative"
              style={{
                opacity: 0,
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(184,150,90,0.25)",
                aspectRatio: "9/16",
                maxHeight: "680px",
                width: "100%",
              }}
            >
              <video
                className="w-full h-full"
                style={{ objectFit: "cover", objectPosition: "center", display: "block" }}
                autoPlay
                muted
                loop
                playsInline
                poster={PATIO_POSTER}
              >
                <source src={PATIO_VIDEO} type="video/mp4" />
              </video>
              {/* Gold corner accent */}
              <div
                className="absolute"
                style={{
                  bottom: "-10px",
                  right: "-10px",
                  width: "40%",
                  height: "40%",
                  border: "1px solid rgba(184,150,90,0.3)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Right — editorial copy */}
            <div className="reveal flex flex-col" style={{ opacity: 0 }}>
              {/* Gold leaf ornament */}
              <svg
                width="48" height="24" viewBox="0 0 48 24" fill="none"
                style={{ marginBottom: "1.5rem", color: "var(--gold)" }}
                aria-hidden="true"
              >
                <path d="M24 12 C18 4, 6 2, 2 12 C6 10, 14 10, 24 12Z" fill="currentColor" opacity="0.8" />
                <path d="M24 12 C30 4, 42 2, 46 12 C42 10, 34 10, 24 12Z" fill="currentColor" opacity="0.8" />
                <line x1="24" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              </svg>

              <p
                className="section-label"
                style={{ marginBottom: "0.75rem", letterSpacing: "0.25em" }}
              >
                Outdoor
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                  color: "var(--ivory)",
                  lineHeight: 0.95,
                  marginBottom: "1.5rem",
                }}
              >
                Dining
              </h2>

              {/* Gold divider with ornament */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ flex: 1, height: "1px", background: "rgba(184,150,90,0.4)" }} />
                <span style={{ color: "var(--gold)", fontSize: "1rem" }}>✦</span>
                <div style={{ flex: 1, height: "1px", background: "rgba(184,150,90,0.4)" }} />
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.9,
                  marginBottom: "2.5rem",
                  maxWidth: "420px",
                }}
              >
                Savor authentic Italian cuisine surrounded by lush greenery, warm ambiance,
                and unforgettable flavors — Syracuse's award-winning outdoor dining experience.
              </p>

              <a
                href="https://resy.com/cities/syr/francescas-cucina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ alignSelf: "flex-start", letterSpacing: "0.2em", fontSize: "0.75rem" }}
              >
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GIFT CARDS ── */}
      <section
        className="py-20 md:py-24"
        style={{
          background: "var(--charcoal-mid)",
          borderTop: "1px solid rgba(184,150,90,0.15)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal" style={{ opacity: 0 }}>
              <p className="section-label" style={{ marginBottom: "1rem" }}>The Perfect Gift</p>
              <span className="gold-rule" style={{ marginBottom: "2rem" }} />
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
                  marginBottom: "2rem",
                }}
              >
                Francesca's gift cards are available in any denomination and make the perfect
                present for anyone who loves exceptional Italian cuisine. We offer both
                traditional physical cards (with free shipping) and instant electronic cards
                delivered by email.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://francescas.securetree.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Order Traditional Card
                </a>
                <a
                  href="https://www.toasttab.com/francesca-s-cucina-545-n-salina-st/giftcards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ background: "rgba(184,150,90,0.1)" }}
                >
                  Order Electronic Card
                </a>
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-4" style={{ opacity: 0 }}>
              {[
                { icon: "💳", title: "Any Denomination", desc: "Choose any amount — perfect for any budget or occasion." },
                { icon: "📦", title: "Free Shipping", desc: "Traditional cards ship to you or your recipient at no charge." },
                { icon: "⚡", title: "Instant Delivery", desc: "Electronic cards arrive in your recipient's inbox immediately." },
                { icon: "✓", title: "Never Expires", desc: "Your gift card holds its value until the last bite." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "var(--charcoal)",
                    border: "1px solid rgba(184,150,90,0.12)",
                    padding: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.75rem" }}>{item.icon}</span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "var(--ivory)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.8rem",
                      color: "var(--ivory-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
