/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Events page: Private event spaces, inquiry form
 * SEO: H1 with keyword, proper heading hierarchy, descriptive content
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/event_space_0040a7bc.jpg";
const DINING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/hero_dining_93c39fd8.jpg";

const inputStyle = {
  width: "100%",
  background: "var(--charcoal-light)",
  border: "1px solid rgba(184,150,90,0.2)",
  color: "var(--ivory)",
  padding: "0.75rem 1rem",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.3s ease",
};

export default function Events() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    date: "", time: "", guests: "", message: "", space: "banquet",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            backgroundImage: `url(${EVENT_IMG})`,
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
          <p className="section-label" style={{ marginBottom: "1rem" }}>Private Dining</p>
          <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
          <h1
            className="display-headline"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginTop: "1.5rem", marginBottom: "1rem" }}
          >
            Private Events at<br />Francesca's
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
            Host your next special occasion in one of our two stunning private event spaces.
            Weddings, rehearsal dinners, corporate gatherings, and intimate celebrations —
            we coordinate every detail.
          </p>
        </div>
      </section>

      {/* Venue Cards */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Red Brick Room */}
            <div
              style={{
                background: "var(--charcoal-mid)",
                border: "1px solid rgba(184,150,90,0.15)",
                overflow: "hidden",
              }}
            >
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <img
                  src={DINING_IMG}
                  alt="The Red Brick Room — private dining room at Francesca's Cucina Syracuse"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "2rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Venue One</p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: "var(--ivory)",
                    marginBottom: "1rem",
                  }}
                >
                  The Red Brick Room
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  A warm, rustic dining room featuring exposed brick walls, striking windows
                  that let in natural light, and warm neutral décor. Ideal for showers,
                  receptions, rehearsal dinners, small holiday parties, and intimate gatherings.
                </p>
                <div
                  style={{
                    borderTop: "1px solid rgba(184,150,90,0.15)",
                    paddingTop: "1.25rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {[
                    { label: "Capacity", value: "Up to 60 guests" },
                    { label: "Availability", value: "Every day, all year" },
                    { label: "Style", value: "Rustic, intimate" },
                    { label: "Ideal for", value: "Rehearsals, showers" },
                  ].map((d) => (
                    <div key={d.label}>
                      <p className="section-label" style={{ fontSize: "0.55rem", marginBottom: "0.25rem" }}>{d.label}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.825rem", color: "var(--ivory)" }}>{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tuscany Terrace */}
            <div
              style={{
                background: "var(--charcoal-mid)",
                border: "1px solid rgba(184,150,90,0.15)",
                overflow: "hidden",
              }}
            >
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <img
                  src={EVENT_IMG}
                  alt="The Tuscany Terrace — enclosed outdoor patio for weddings and events at Francesca's Cucina"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "2rem" }}>
                <p className="section-label" style={{ marginBottom: "0.75rem" }}>Venue Two</p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: "var(--ivory)",
                    marginBottom: "1rem",
                  }}
                >
                  The Tuscany Terrace
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  Our intimate, enclosed inner patio features an elegant fireplace, vintage
                  greenery, and rustic architecture with contemporary décor. Perfect for
                  intimate ceremonies, wedding receptions, and seasonal celebrations.
                </p>
                <div
                  style={{
                    borderTop: "1px solid rgba(184,150,90,0.15)",
                    paddingTop: "1.25rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {[
                    { label: "Capacity", value: "Up to 100 guests" },
                    { label: "Availability", value: "Sat afternoons & Sundays" },
                    { label: "Style", value: "Elegant, romantic" },
                    { label: "Ideal for", value: "Weddings, ceremonies" },
                  ].map((d) => (
                    <div key={d.label}>
                      <p className="section-label" style={{ fontSize: "0.55rem", marginBottom: "0.25rem" }}>{d.label}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.825rem", color: "var(--ivory)" }}>{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--charcoal-mid)", borderTop: "1px solid rgba(184,150,90,0.1)" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label" style={{ marginBottom: "1rem" }}>Get in Touch</p>
              <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
              <h2
                className="display-headline"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: "1.5rem", marginBottom: "1rem" }}
              >
                Inquire About Your Event
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.7,
                }}
              >
                Fill out the form below or call us directly at{" "}
                <a href="tel:+13154098848" style={{ color: "var(--gold)" }}>(315) 409-8848</a>
              </p>
            </div>

            {submitted ? (
              <div
                className="text-center py-16"
                style={{ border: "1px solid rgba(184,150,90,0.3)", padding: "3rem" }}
              >
                <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
                <h3
                  className="display-headline"
                  style={{ fontSize: "1.75rem", marginTop: "1.5rem", marginBottom: "1rem" }}
                >
                  Thank You
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--ivory-muted)",
                  }}
                >
                  We've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>First Name</label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Last Name</label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Date of Event</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Time</label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Number of Guests</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                    />
                  </div>
                </div>
                <div>
                  <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Preferred Space</label>
                  <div className="flex gap-6">
                    {[
                      { value: "banquet", label: "The Red Brick Room" },
                      { value: "patio", label: "The Tuscany Terrace" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          color: form.space === opt.value ? "var(--gold)" : "var(--ivory-muted)",
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                        }}
                      >
                        <input
                          type="radio"
                          name="space"
                          value={opt.value}
                          checked={form.space === opt.value}
                          onChange={(e) => setForm({ ...form, space: e.target.value })}
                          style={{ accentColor: "var(--gold)" }}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="section-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}>Your Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Tell us about your event..."
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(184,150,90,0.2)")}
                  />
                </div>
                <button type="submit" className="btn-gold" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
