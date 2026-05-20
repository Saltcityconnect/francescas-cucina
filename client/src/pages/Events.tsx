/**
 * PRIVATE DINING PAGE — Dark luxury theme matching mockup
 * Sections:
 *   1. Hero intro — "PRIVATE DINING / EXPERIENCES" with 3 CTA buttons
 *   2. Venue cards — Red Brick Room (left photo) + Tuscany Terrace (left photo)
 *   3. Menu Options — left food photo, right numbered list
 *   4. Event Inquiry Form — left contact info + private spaces summary, right full form
 *   5. Sticky bottom bar — "READY TO PLAN YOUR EVENT?" + INQUIRE NOW button
 */

import { useState, useRef } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const RED_BRICK_IMG = "/manus-storage/red_brick_room_photo_d5969599.png";
const TUSCANY_IMG = "/manus-storage/tuscanyterracephoto_9a1ef6b7.png";
const FOOD_IMG = "/manus-storage/curated_menu_food_photoprivatediningpage_2ecc8e44.png";

// ── Icon helpers ──────────────────────────────────────────────────────────────
const Gold = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#c8a96e" }}>{children}</span>
);

function FeatureIcon({ type }: { type: string }) {
  const s = { width: 20, height: 20, flexShrink: 0 };
  const icons: Record<string, React.ReactNode> = {
    brick: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><rect x="2" y="7" width="20" height="4" rx="0.5"/><rect x="2" y="13" width="20" height="4" rx="0.5"/><line x1="7" y1="7" x2="7" y2="3"/><line x1="17" y1="7" x2="17" y2="3"/><line x1="12" y1="13" x2="12" y2="11"/><line x1="4" y1="13" x2="4" y2="11"/><line x1="20" y1="13" x2="20" y2="11"/></svg>,
    intimate: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><path d="M12 21C12 21 4 15 4 9a8 8 0 0 1 16 0c0 6-8 12-8 12z"/></svg>,
    bar: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><path d="M8 3l4 8h4l4-8"/><rect x="4" y="11" width="16" height="2" rx="1"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>,
    menu: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="13" y2="15"/></svg>,
    av: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><rect x="2" y="4" width="20" height="14" rx="1"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="18" x2="12" y2="21"/></svg>,
    staff: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a6 6 0 0 1 6-6h0"/><circle cx="17" cy="10" r="3"/><path d="M21 21v-2a6 6 0 0 0-6-6h0"/></svg>,
    outdoor: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>,
    seasonal: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="1"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    cocktail: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><path d="M8 3l4 8h4l4-8"/><rect x="4" y="11" width="16" height="2" rx="1"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>,
    dinner: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><line x1="7" y1="11" x2="7" y2="22"/><path d="M21 15V2a5 5 0 0 0-5 5v6h5z"/><line x1="18" y1="11" x2="18" y2="22"/></svg>,
    guests: <svg style={s} viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2"/><circle cx="17" cy="9" r="2.5"/><path d="M21 21v-1.5a5 5 0 0 0-3-4.5"/></svg>,
  };
  return <>{icons[type] || icons.menu}</>;
}

const venues = [
  {
    name: "The Red Brick Room",
    img: RED_BRICK_IMG,
    capacity: "Up to 50 Guests",
    desc: "Our signature private dining room features exposed brick walls, warm lighting, and an intimate atmosphere perfect for rehearsal dinners, corporate events, birthday celebrations, and holiday parties.",
    features: [
      { icon: "brick", label: "Exposed Brick Walls & Warm Lighting" },
      { icon: "intimate", label: "Intimate Atmosphere" },
      { icon: "bar", label: "Private Bar Service" },
      { icon: "menu", label: "Custom Menu Options" },
      { icon: "av", label: "AV Capabilities" },
      { icon: "staff", label: "Dedicated Event Staff" },
    ],
  },
  {
    name: "The Tuscany Terrace",
    img: TUSCANY_IMG,
    capacity: "Up to 100 Guests",
    desc: "Our intimate, enclosed inner patio features an elegant fireplace, vintage greenery, and rustic architecture with contemporary décor. Perfect for intimate ceremonies, wedding receptions, and seasonal celebrations.",
    features: [
      { icon: "outdoor", label: "Outdoor Setting" },
      { icon: "seasonal", label: "Seasonal Availability" },
      { icon: "cocktail", label: "Cocktail Receptions" },
      { icon: "dinner", label: "Full Dinner Service" },
      { icon: "guests", label: "Up to 100 Guests" },
    ],
  },
];

const menuOptions = [
  { num: "01", title: "Hors D'Oeuvres", desc: "Elegant passed bites and displays perfect for cocktail receptions and mingling." },
  { num: "02", title: "Buffet & Family Style", desc: "Abundant spreads and shareable platters that bring people together." },
  { num: "03", title: "Plated Dinners", desc: "Refined, multi-course meals served with timeless Italian hospitality." },
  { num: "04", title: "Lighter Fare", desc: "Fresh, seasonal options that are perfect for daytime events and casual gatherings." },
];

const BG = "#0a0a08";
const GOLD = "#c8a96e";
const IVORY = "#f0ece4";
const MUTED = "#9a9080";
const BORDER = "rgba(200,169,110,0.25)";

export default function Events() {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    eventDate: "", eventTime: "", guestCount: "", eventType: "",
    locationRedBrick: false, locationTuscany: false, locationEither: false,
    details: "", howHeard: "", optIn: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`,
    borderRadius: 2, padding: "0.65rem 0.85rem", color: IVORY,
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", outline: "none",
    boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
    letterSpacing: "0.12em", textTransform: "uppercase" as const,
    color: MUTED, display: "block", marginBottom: "0.35rem",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: IVORY }}>
      <NavigationA />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO INTRO
      ══════════════════════════════════════════════════════ */}
      <section style={{ textAlign: "center", padding: "5rem 2rem 3.5rem", background: BG }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, margin: "0 0 1rem" }}>
          Private Dining
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem, 6vw, 4.5rem)", letterSpacing: "0.12em", textTransform: "uppercase", color: IVORY, margin: "0 0 1rem" }}>
          Experiences
        </h1>
        {/* ornament */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
          <div style={{ width: 40, height: 1, background: GOLD, opacity: 0.5 }} />
          <svg width="18" height="10" viewBox="0 0 18 10"><path d="M9 1 L17 9 L9 5 L1 9 Z" stroke={GOLD} strokeWidth="0.8" fill="none" opacity="0.7"/></svg>
          <div style={{ width: 40, height: 1, background: GOLD, opacity: 0.5 }} />
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", color: MUTED, maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
          From intimate dinners to grand celebrations, our private dining spaces provide the perfect setting for unforgettable moments with exceptional food and hospitality.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Explore Venues", action: () => window.scrollTo({ top: 500, behavior: "smooth" }) },
            { label: "Check Availability", action: scrollToForm },
            { label: "Browse Menus", action: () => {} },
          ].map(({ label, action }) => (
            <button key={label} onClick={action} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "0.75rem 1.8rem",
              background: "transparent", border: `1px solid ${GOLD}`, color: GOLD,
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = GOLD; (e.target as HTMLButtonElement).style.color = BG; }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "transparent"; (e.target as HTMLButtonElement).style.color = GOLD; }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — VENUE CARDS
      ══════════════════════════════════════════════════════ */}
      {venues.map((venue) => (
        <section key={venue.name} className="pd-venue-card">
          {/* Photo — left 50% */}
          <div className="pd-venue-photo">
            <img src={venue.img} alt={venue.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>
          {/* Text — right 50% */}
          <div className="pd-venue-text">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, margin: "0 0 0.6rem" }}>
              {venue.capacity}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: IVORY, margin: "0 0 0.6rem", lineHeight: 1.1 }}>
              {venue.name}
            </h2>
            <div style={{ width: 40, height: 2, background: GOLD, marginBottom: "1.2rem" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", color: MUTED, lineHeight: 1.75, margin: "0 0 1.8rem", maxWidth: 420 }}>
              {venue.desc}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {venue.features.map(f => (
                <div key={f.label} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <FeatureIcon type={f.icon} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — MENU OPTIONS
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        {/* Header */}
        <div style={{ textAlign: "center", padding: "3.5rem 2rem 2.5rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, margin: "0 0 0.8rem" }}>
            Curated Menus
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.12em", textTransform: "uppercase", color: IVORY, margin: "0 0 0.8rem" }}>
            Menu Options
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
            <div style={{ width: 40, height: 1, background: GOLD, opacity: 0.5 }} />
            <svg width="18" height="10" viewBox="0 0 18 10"><path d="M9 1 L17 9 L9 5 L1 9 Z" stroke={GOLD} strokeWidth="0.8" fill="none" opacity="0.7"/></svg>
            <div style={{ width: 40, height: 1, background: GOLD, opacity: 0.5 }} />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)", color: MUTED, maxWidth: 420, margin: "0 auto", lineHeight: 1.75 }}>
            Our curated menus are designed with the freshest ingredients and authentic Italian flavors to create an unforgettable dining experience for you and your guests.
          </p>
        </div>

        {/* Split: photo left, menu list right */}
        <div className="pd-menu-split">
          {/* Food photo */}
          <div className="pd-menu-photo">
            <img src={FOOD_IMG} alt="Curated catering spread" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #0a0a08 100%)" }} />
          </div>
          {/* Menu list */}
          <div className="pd-menu-list">
            {menuOptions.map((opt, i) => (
              <div key={opt.num} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", padding: "1.2rem 0", borderBottom: i < menuOptions.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 300, color: GOLD, minWidth: 32, lineHeight: 1 }}>{opt.num}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IVORY, margin: "0 0 0.35rem" }}>{opt.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: MUTED, margin: 0, lineHeight: 1.6 }}>{opt.desc}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2 }}><path d="M6 3l5 5-5 5" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — EVENT INQUIRY FORM
      ══════════════════════════════════════════════════════ */}
      <section ref={formRef} style={{ background: BG, borderTop: `1px solid ${BORDER}`, padding: "4rem 0 6rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", gap: "3rem", flexWrap: "wrap" }}>

          {/* Left: contact info + private spaces summary */}
          <div style={{ flex: "0 0 260px", minWidth: 220 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, margin: "0 0 0.8rem" }}>
              Plan Your Event
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: IVORY, margin: "0 0 2rem", lineHeight: 1.15 }}>
              Let's Make It<br />Unforgettable
            </h2>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: IVORY, margin: "0 0 0.15rem" }}>(315) 409-8868</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.78rem", color: MUTED, margin: 0, lineHeight: 1.5 }}>Available Monday–Sunday<br />9:00am – 9:00pm</p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: IVORY, margin: "0 0 0.15rem" }}>catering@francescas-cucina.com</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.78rem", color: MUTED, margin: 0, lineHeight: 1.5 }}>We typically respond within<br />24 business hours.</p>
              </div>
            </div>

            {/* Our Private Spaces */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, margin: "0 0 1.2rem" }}>
              Our Private Spaces
            </p>
            {venues.map(v => (
              <div key={v.name} style={{ display: "flex", gap: "0.85rem", marginBottom: "1.2rem" }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: IVORY, margin: "0 0 0.1rem" }}>{v.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.75rem", color: GOLD, margin: "0 0 0.2rem" }}>{v.capacity}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.75rem", color: MUTED, margin: 0, lineHeight: 1.5 }}>{v.desc.slice(0, 90)}…</p>
                </div>
              </div>
            ))}

            {/* Plan with confidence */}
            <div style={{ display: "flex", gap: "0.85rem", marginTop: "0.5rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: IVORY, margin: "0 0 0.2rem" }}>Plan Your Event with Confidence</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.75rem", color: MUTED, margin: 0, lineHeight: 1.5 }}>Our experienced team will guide you through every detail to ensure a seamless experience.</p>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div style={{ flex: 1, minWidth: 300 }}>
            {submitted ? (
              <div style={{ border: `1px solid ${BORDER}`, padding: "3rem 2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: GOLD, margin: "0 0 1rem" }}>Thank You</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: MUTED }}>We've received your inquiry and will be in touch within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ border: `1px solid ${BORDER}`, padding: "2rem 2rem 2.5rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, textAlign: "center", margin: "0 0 1.8rem" }}>
                  Event Inquiry Form
                </p>
                <div className="pd-form-grid">
                  {/* First / Last */}
                  <div>
                    <label style={labelStyle}>First Name <Gold>*</Gold></label>
                    <input style={inputStyle} placeholder="First name" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name <Gold>*</Gold></label>
                    <input style={inputStyle} placeholder="Last name" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} required />
                  </div>
                  {/* Email / Phone */}
                  <div>
                    <label style={labelStyle}>Email Address <Gold>*</Gold></label>
                    <input style={inputStyle} type="email" placeholder="name@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number <Gold>*</Gold></label>
                    <input style={inputStyle} placeholder="(315)-123-4567" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
                  </div>
                  {/* Date / Time */}
                  <div>
                    <label style={labelStyle}>Event Date <Gold>*</Gold></label>
                    <input style={inputStyle} type="date" value={form.eventDate} onChange={e => setForm(f => ({ ...f, eventDate: e.target.value }))} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Event Time <Gold>*</Gold></label>
                    <select style={{ ...inputStyle, appearance: "none" as const }} value={form.eventTime} onChange={e => setForm(f => ({ ...f, eventTime: e.target.value }))} required>
                      <option value="" disabled>Select time</option>
                      {["11:00 AM","12:00 PM","1:00 PM","2:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  {/* Guests / Type */}
                  <div>
                    <label style={labelStyle}>Number of Guests <Gold>*</Gold></label>
                    <input style={inputStyle} placeholder="Approximate number of guests" value={form.guestCount} onChange={e => setForm(f => ({ ...f, guestCount: e.target.value }))} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Event Type <Gold>*</Gold></label>
                    <select style={{ ...inputStyle, appearance: "none" as const }} value={form.eventType} onChange={e => setForm(f => ({ ...f, eventType: e.target.value }))} required>
                      <option value="" disabled>Select event type</option>
                      {["Birthday","Anniversary","Corporate","Wedding Reception","Rehearsal Dinner","Holiday Party","Other"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Preferred Location */}
                <div style={{ marginTop: "1rem" }}>
                  <label style={labelStyle}>Preferred Location</label>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                    {[
                      { key: "locationRedBrick", label: "The Red Brick Room (Up to 50 guests)" },
                      { key: "locationTuscany", label: "The Tuscany Terrace (Up to 100 guests)" },
                      { key: "locationEither", label: "Either Space" },
                    ].map(({ key, label }) => (
                      <label key={key} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: MUTED }}>
                        <input type="checkbox" checked={(form as any)[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.checked }))}
                          style={{ accentColor: GOLD, width: 14, height: 14 }} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div style={{ marginTop: "1rem" }}>
                  <label style={labelStyle}>Tell Us About Your Event <Gold>*</Gold></label>
                  <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" as const }} placeholder="Please share any details about your event, including setup, special requests, menu preferences, and any other information that will help us create the perfect experience." value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} required />
                </div>

                {/* How did you hear */}
                <div style={{ marginTop: "1rem" }}>
                  <label style={labelStyle}>How Did You Hear About Us?</label>
                  <input style={inputStyle} placeholder="e.g. Google, Social Media, Friend, Wedding Vendor, etc." value={form.howHeard} onChange={e => setForm(f => ({ ...f, howHeard: e.target.value }))} />
                </div>

                {/* Opt-in */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginTop: "1rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: MUTED, lineHeight: 1.5 }}>
                  <input type="checkbox" checked={form.optIn} onChange={e => setForm(f => ({ ...f, optIn: e.target.checked }))} style={{ accentColor: GOLD, marginTop: 2, flexShrink: 0 }} />
                  I agree to receive event updates and special offers from Francesca's Cucina.
                </label>

                {/* Submit */}
                <button type="submit" style={{
                  marginTop: "1.5rem", width: "100%",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
                  padding: "1rem", background: "transparent", border: `1px solid ${GOLD}`, color: GOLD, cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = GOLD; (e.target as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "transparent"; (e.target as HTMLButtonElement).style.color = GOLD; }}
                >
                  Submit Inquiry
                </button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.75rem", color: MUTED, textAlign: "center", margin: "1rem 0 0" }}>
                  We look forward to making your event truly unforgettable.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* ══════════════════════════════════════════════════════
          STICKY BOTTOM BAR
      ══════════════════════════════════════════════════════ */}
      <div className="pd-sticky-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: IVORY, margin: 0 }}>
            Ready to Plan Your Event?
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: MUTED, margin: 0 }}>
            Our team is here to help you create an unforgettable experience.
          </p>
        </div>
        <button onClick={scrollToForm} style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase",
          padding: "0.65rem 1.8rem", background: "transparent", border: `1px solid ${GOLD}`, color: GOLD, cursor: "pointer", whiteSpace: "nowrap",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = GOLD; (e.target as HTMLButtonElement).style.color = BG; }}
        onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "transparent"; (e.target as HTMLButtonElement).style.color = GOLD; }}
        >
          Inquire Now
        </button>
      </div>
    </div>
  );
}
