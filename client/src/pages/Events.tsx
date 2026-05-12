/*
 * EVENTS PAGE — Motherwolf Private Dining style
 * Full-bleed hero, venue cards with photo + capacity + inquire button, contact form
 */

import { useState } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events1_8d038c07.jpg";
const RED_BRICK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/red_brick_room_8261d100.jpg";
const EVENTS2_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events2_c0b40758.jpg";
const EVENTS3_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events3_5bf028ae.jpg";

const venues = [
  {
    name: "The Red Brick Room",
    img: RED_BRICK_IMG,
    capacity: "Up to 60 guests",
    desc: "Our signature private dining room features exposed brick walls, warm lighting, and an intimate atmosphere perfect for rehearsal dinners, corporate events, birthday celebrations, and holiday parties.",
    features: ["Private bar service", "Custom menu options", "AV capabilities", "Dedicated event staff"],
  },
  {
    name: "The Tuscany Terrace",
    img: EVENTS3_IMG,
    capacity: "Up to 100 guests",
    desc: "Our intimate, enclosed inner patio features an elegant fireplace, vintage greenery, and rustic architecture with contemporary décor. Perfect for intimate ceremonies, wedding receptions, and seasonal celebrations.",
    features: ["Outdoor setting", "Seasonal availability", "Cocktail receptions", "Full dinner service"],
  },
  {
    name: "Full Restaurant Buyout",
    img: EVENTS2_IMG,
    capacity: "Up to 130 guests",
    desc: "Reserve the entire Francesca's Cucina experience for your most special occasions. Ideal for wedding rehearsals, milestone anniversaries, corporate galas, and large family celebrations.",
    features: ["Exclusive use", "Custom menu design", "Full bar service", "Event coordination"],
  },
];

export default function Events() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", guestCount: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      {/* HERO */}
      <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        <img src={EVENT_IMG} alt="Private dining at Francesca's Cucina"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(13,12,10,0.75) 100%)" }} />
        <div style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "flex-end", padding: "0 1.5rem 6rem", textAlign: "center", zIndex: 2,
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(245,240,228,0.65)", marginBottom: "1.25rem" }}>
            Private Dining &amp; Events
          </p>
          <h1 className="display-condensed" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: "var(--ivory)", lineHeight: 0.9, marginBottom: "1.5rem" }}>
            Host Your<br />Event
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.35rem)", color: "rgba(245,240,228,0.75)", maxWidth: "600px" }}>
            Intimate gatherings to grand celebrations — we create unforgettable experiences
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "6rem 0 4rem", background: "var(--charcoal)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "var(--ivory-muted)", lineHeight: 1.9 }}>
            Francesca's Cucina events feature thoughtfully curated menus inspired by classic Italian cuisine and seasonal specialties. Whether you're planning an intimate dinner for 20 or a grand celebration for 130, our dedicated events team will work with you to create an experience that exceeds every expectation.
          </p>
        </div>
      </section>

      {/* VENUE CARDS */}
      <section style={{ padding: "2rem 0 6rem", background: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          {venues.map((venue, i) => (
            <div key={venue.name} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "4px", minHeight: "480px",
            }} className="venue-card-grid">
              {i % 2 === 0 ? (
                <>
                  <div style={{ overflow: "hidden" }}>
                    <img src={venue.img} alt={venue.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")} />
                  </div>
                  <div style={{ background: "var(--charcoal-mid)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 3.5rem" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>{venue.capacity}</p>
                    <h2 className="display-condensed" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--ivory)", marginBottom: "1.5rem", lineHeight: 0.95 }}>{venue.name}</h2>
                    <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "1.5rem" }} />
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--ivory-muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>{venue.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                      {venue.features.map((f) => (
                        <span key={f} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ivory-muted)", border: "1px solid rgba(245,240,228,0.2)", padding: "0.3rem 0.75rem" }}>{f}</span>
                      ))}
                    </div>
                    <a href="#inquire" className="btn-outline-ivory" style={{ width: "fit-content" }}>Inquire Now</a>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ background: "var(--charcoal-mid)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 3.5rem" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>{venue.capacity}</p>
                    <h2 className="display-condensed" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--ivory)", marginBottom: "1.5rem", lineHeight: 0.95 }}>{venue.name}</h2>
                    <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "1.5rem" }} />
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--ivory-muted)", lineHeight: 1.85, marginBottom: "1.5rem" }}>{venue.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                      {venue.features.map((f) => (
                        <span key={f} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ivory-muted)", border: "1px solid rgba(245,240,228,0.2)", padding: "0.3rem 0.75rem" }}>{f}</span>
                      ))}
                    </div>
                    <a href="#inquire" className="btn-outline-ivory" style={{ width: "fit-content" }}>Inquire Now</a>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <img src={venue.img} alt={venue.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquire" style={{ padding: "7rem 0", background: "var(--charcoal-mid)", scrollMarginTop: "72px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Get in Touch</p>
            <h2 className="display-condensed" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ivory)", lineHeight: 0.92, marginBottom: "1.5rem" }}>Plan Your Event</h2>
            <div style={{ width: "50px", height: "1px", background: "var(--gold)", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--ivory-muted)", lineHeight: 1.8 }}>
              Contact our events team at{" "}
              <a href="mailto:catering@francescas-cucina.com" style={{ color: "var(--gold)", textDecoration: "none" }}>catering@francescas-cucina.com</a>{" "}
              or <a href="tel:+13154098848" style={{ color: "var(--gold)", textDecoration: "none" }}>(315) 409-8848</a>, or fill out the form below.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="display-condensed" style={{ fontSize: "2rem", color: "var(--ivory)", marginBottom: "1rem" }}>Thank You!</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "var(--ivory-muted)", lineHeight: 1.8 }}>
                We've received your inquiry and will be in touch within 24 hours to discuss your event.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-grid">
                {[
                  { label: "Full Name", key: "name", type: "text", placeholder: "Your name", required: true },
                  { label: "Email", key: "email", type: "email", placeholder: "your@email.com", required: true },
                  { label: "Phone", key: "phone", type: "tel", placeholder: "(315) 000-0000", required: false },
                  { label: "Number of Guests", key: "guestCount", type: "number", placeholder: "e.g. 40", required: true },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ivory-muted)", marginBottom: "0.5rem" }}>{field.label}</label>
                    <input type={field.type} required={field.required} placeholder={field.placeholder}
                      value={(formData as Record<string, string>)[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.85rem 1rem", color: "var(--ivory)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
              </div>
              {[
                { label: "Event Type", key: "eventType", placeholder: "e.g. Birthday, Wedding Rehearsal, Corporate Dinner" },
                { label: "Preferred Date", key: "date", placeholder: "e.g. Saturday, June 14, 2025" },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ivory-muted)", marginBottom: "0.5rem" }}>{field.label}</label>
                  <input type="text" placeholder={field.placeholder}
                    value={(formData as Record<string, string>)[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.85rem 1rem", color: "var(--ivory)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ivory-muted)", marginBottom: "0.5rem" }}>Additional Details</label>
                <textarea rows={5} placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.85rem 1rem", color: "var(--ivory)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="submit" className="btn-outline-ivory" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>Submit Inquiry</button>
            </form>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .venue-card-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
