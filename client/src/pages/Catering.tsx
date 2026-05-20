/*
 * CATERING PAGE — Dark luxury theme
 * Design: Pure black background throughout
 * Hero: Left 40% text column (eyebrow, headline, subtext, contact box, CTA),
 *       Right 60% food photo with ~30% left-edge gradient fade from black
 * Menu: Sticky dark tab bar, 2-column item cards on black bg, gold pricing
 * Typography: Big Shoulders Display for headers, Cormorant Garamond for item names, DM Sans for body
 */

import { useState, useEffect, useRef } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const CATERING_HERO_IMG = "/manus-storage/catering-hero_fcb2e452.png";

// ─── CATERING MENU DATA ───────────────────────────────────────────────────────
interface CateringItem {
  name: string;
  desc: string;
  price: string;
}
interface CateringSection {
  id: string;
  label: string;
  items: CateringItem[];
}

const cateringMenu: CateringSection[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Arancini", desc: "Crispy parmigiano risotto balls, marinara", price: "HF-$73(25PC) / FL-$135(50PC)" },
      { name: "Mini Crabcakes", desc: "Jumbo lump Maryland crab, bang bang sauce", price: "HF-$88(25PC) / FL-$165(50PC)" },
      { name: "Bacon Wrapped Scallops", desc: "Sea scallops, horseradish-dijon aioli", price: "HF-$88(25PC) / FL-$165(50PC)" },
      { name: "Mozzarella Sticks", desc: "Whole milk mozzarella, breaded & fried, marinara sauce", price: "HF-$48(25PC) / FL-$85(50PC)" },
      { name: "Cheese & Fruit Platter", desc: "Assorted artisan cheeses, fresh fruits", price: "$130(25-30PPL)" },
      { name: "Shrimp Cocktail", desc: "Jumbo shrimp, spicy cocktail sauce", price: "HF-$73(25PC) / FL-$135(50PC)" },
      { name: "Chicken Tenders", desc: "Ranch & BBQ dipping sauce", price: "HF-$53/FL-$95" },
      { name: "Tomato & Mozzarella Skewers", desc: "Whole mozzarella ball, heirloom tomatoes, fresh basil, balsamic glaze", price: "HF-$58(25PC) / FL-$105(50PC)" },
      { name: "Lollipop Lamb Chops", desc: "Balsamic glaze", price: "HF-$88(25PC) / FL-$165(50PC)" },
      { name: "Utica Greens", desc: "Escarole, prosciutto, hot peppers, toasted breadcrumbs, romano cheese", price: "HF-$58/FL-$105" },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      { name: "Caesar Salad", desc: "Romaine, housemade Caesar dressing, shaved parmesan, croutons", price: "HF-$45/FL-$85" },
      { name: "House Salad", desc: "Mixed greens, house Italian dressing", price: "HF-$40/FL-$75" },
      { name: "Heirloom Tomato & Burrata", desc: "Marinated heirloom cherry tomatoes, imported burrata, fresh basil, extra-virgin olive oil, balsamic drizzle", price: "HF-$65/FL-$120" },
      { name: "Italian Wedding Soup", desc: "Classic Italian wedding soup with housemade meatballs", price: "HF-$55/FL-$100" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      { name: "Chicken Parmesan Sandwich", desc: "Breaded chicken, fresh mozzarella, marinara, ciabatta roll", price: "HF-$68(12PC) / FL-$125(25PC)" },
      { name: "Italian Sub", desc: "Prosciutto, capicola, salami, provolone, roasted peppers, oil & vinegar", price: "HF-$65(12PC) / FL-$120(25PC)" },
      { name: "Meatball Sub", desc: "Housemade meatballs, marinara, fresh mozzarella, hoagie roll", price: "HF-$65(12PC) / FL-$120(25PC)" },
      { name: "Eggplant Parmesan Sandwich", desc: "Crispy fried eggplant, fresh mozzarella, marinara, ciabatta roll", price: "HF-$60(12PC) / FL-$110(25PC)" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Baked Ziti", desc: "Classic baked ziti, housemade marinara, ricotta, mozzarella", price: "HF-$75/FL-$140" },
      { name: "Chicken Riggies", desc: "Peppers, onions, spicy pink sauce — mild, medium, or hot", price: "HF-$85/FL-$160" },
      { name: "Fettuccine Alfredo", desc: "Creamy housemade Alfredo sauce over ribbon pasta", price: "HF-$75/FL-$140" },
      { name: "Bolognese", desc: "Buccatini pasta, braised veal, beef, pork, carrots, rustic tomato barolo wine sauce", price: "HF-$90/FL-$170" },
      { name: "Eggplant Parmesan", desc: "Crispy fried eggplant layers, marinara, mozzarella, seasoned ricotta", price: "HF-$80/FL-$150" },
      { name: "Cheese Ravioli Marinara", desc: "Housemade cheese ravioli in classic marinara sauce", price: "HF-$80/FL-$150" },
    ],
  },
  {
    id: "entrees",
    label: "Entrees",
    items: [
      { name: "Chicken Parmesan", desc: "Classic chicken dish prepared au gratin with fresh whole milk mozzarella and house marinara", price: "HF-$95/FL-$180" },
      { name: "Chicken Marsala", desc: "Tender chicken breast sautéed with shallots, garlic and wild mushrooms in a sweet Marsala wine reduction", price: "HF-$95/FL-$180" },
      { name: "Salmon Fillet", desc: "Faroe Island salmon pan-roasted in garlic, white wine and rosemary butter sauce", price: "HF-$120/FL-$225" },
      { name: "Shrimp Scampi", desc: "Housemade cavatelli tossed with sweet Argentine red shrimp in roasted garlic, white wine and lemon butter scampi sauce", price: "HF-$110/FL-$205" },
      { name: "Veal Parmesan", desc: "Breaded veal au gratin with fresh whole milk mozzarella and housemade marinara", price: "HF-$130/FL-$245" },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      { name: "Tiramisu", desc: "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream", price: "HF-$55/FL-$100" },
      { name: "Cannoli", desc: "Traditional Sicilian cannoli with sweet ricotta filling and chocolate chips", price: "HF-$48(12PC) / FL-$85(25PC)" },
      { name: "Panna Cotta", desc: "Silky vanilla panna cotta with seasonal berry compote", price: "HF-$55/FL-$100" },
      { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with a molten center, vanilla gelato", price: "HF-$60/FL-$110" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Roasted Garlic Mashed Potatoes", desc: "Creamy mashed potatoes with roasted garlic olive oil", price: "HF-$45/FL-$85" },
      { name: "Grilled Asparagus", desc: "Seasonal asparagus, olive oil, sea salt", price: "HF-$50/FL-$90" },
      { name: "Saffron Risotto", desc: "Creamy Arborio rice with saffron", price: "HF-$55/FL-$100" },
      { name: "Seasonal Vegetables", desc: "Chef's selection of roasted seasonal vegetables", price: "HF-$45/FL-$85" },
      { name: "Garlic Bread", desc: "Housemade garlic bread with herb butter", price: "HF-$30/FL-$55" },
      { name: "Crispy Italian Herb Potatoes", desc: "Roasted potatoes with Italian herbs and garlic", price: "HF-$45/FL-$85" },
    ],
  },
];

// ─── ORNAMENT SVG ─────────────────────────────────────────────────────────────
const GoldOrnament = () => (
  <svg width="60" height="14" viewBox="0 0 60 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", margin: "0.6rem auto" }}>
    <line x1="0" y1="7" x2="22" y2="7" stroke="#c8a96e" strokeWidth="0.75" />
    <circle cx="30" cy="7" r="3" stroke="#c8a96e" strokeWidth="0.75" />
    <circle cx="30" cy="7" r="1.2" fill="#c8a96e" />
    <line x1="38" y1="7" x2="60" y2="7" stroke="#c8a96e" strokeWidth="0.75" />
  </svg>
);

// ─── PHONE ICON ───────────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// ─── EMAIL ICON ───────────────────────────────────────────────────────────────
const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Catering() {
  const [activeTab, setActiveTab] = useState("appetizers");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const cat of cateringMenu) {
        const el = sectionRefs.current[cat.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 160) {
            setActiveTab(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#0a0a08", minHeight: "100vh", color: "#f0ece4" }}>
      <NavigationA />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — split layout: text left 40%, photo right 60%
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "relative",
        minHeight: "clamp(520px, 55vw, 680px)",
        background: "#0a0a08",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}>
        {/* Photo — right 60% */}
        <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "62%",
          height: "100%",
          zIndex: 1,
        }}>
          <img
            src={CATERING_HERO_IMG}
            alt="Francesca's Cucina catering spread"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", transform: "scaleX(-1)" }}
          />
          {/* Left-edge gradient: black → transparent over ~30% of image width */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0a0a08 0%, #0a0a08 8%, rgba(10,10,8,0.85) 22%, rgba(10,10,8,0.3) 45%, transparent 70%)",
            zIndex: 2,
          }} />
        </div>

        {/* Text column — left side */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "clamp(5rem, 10vw, 8rem) 0 4rem clamp(2rem, 5vw, 6rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <div style={{ maxWidth: "none" }}>
            {/* Eyebrow */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c8a96e",
              margin: "0 0 0.5rem",
            }}>
              Catering
            </p>
            {/* Gold rule + ornament */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
              <div style={{ width: "28px", height: "1px", background: "#c8a96e" }} />
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" stroke="#c8a96e" strokeWidth="0.8" fill="none" /><circle cx="4" cy="4" r="1.2" fill="#c8a96e" /></svg>
              <div style={{ width: "28px", height: "1px", background: "#c8a96e" }} />
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "100px",
              lineHeight: 1.05,
              color: "#f0ece4",
              margin: "0 0 1.2rem",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}>
              Bring Francesca's to{" "}<em style={{ fontStyle: "italic", fontWeight: 400 }}>your</em> table.
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
              color: "#b8b0a0",
              margin: "0 0 2rem",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}>
              Curated Italian catering for gatherings,<br />
              celebrations, and special occasions of all sizes.
            </p>

            {/* Contact box — 1×2 with phone and email */}
            <div style={{
              border: "1px solid rgba(200,169,110,0.45)",
              padding: "1.4rem 1.6rem",
              marginBottom: "1.8rem",
              maxWidth: "380px",
            }}>
              {/* Phone row */}
              <a href="tel:3154098848" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", marginBottom: "1rem" }}>
                <div style={{
                  width: "40px", height: "40px",
                  border: "1px solid rgba(200,169,110,0.5)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <PhoneIcon />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", margin: "0 0 0.15rem", fontWeight: 700 }}>Call</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#c8a96e", margin: 0, letterSpacing: "0.04em" }}>315-409-8848</p>
                </div>
              </a>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.25)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b5a3e" }}>or</span>
                <div style={{ flex: 1, height: "1px", background: "rgba(200,169,110,0.25)" }} />
              </div>

              {/* Email row */}
              <a href="mailto:catering@francescas-cucina.com" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                <div style={{
                  width: "40px", height: "40px",
                  border: "1px solid rgba(200,169,110,0.5)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <EmailIcon />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", margin: "0 0 0.15rem", fontWeight: 700 }}>Email</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#c8a96e", margin: 0 }}>catering@francescas-cucina.com</p>
                </div>
              </a>
            </div>

            {/* CTA button */}
            <a
              href="#appetizers"
              onClick={(e) => { e.preventDefault(); scrollToSection("appetizers"); }}
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1a1a18",
                background: "#c8a96e",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#b8996e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c8a96e")}
            >
              View Catering Menu
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STICKY CATEGORY TABS — dark bar
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "sticky",
        top: "72px",
        zIndex: 40,
        background: "#111109",
        borderBottom: "1px solid rgba(200,169,110,0.2)",
        overflowX: "auto",
      }}>
        <div style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}>
          {cateringMenu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: activeTab === cat.id ? "#c8a96e" : "#6b6050",
                background: "none",
                border: "none",
                borderBottom: activeTab === cat.id ? "2px solid #c8a96e" : "2px solid transparent",
                padding: "1.1rem 1.3rem",
                cursor: "pointer",
                transition: "color 0.2s ease, border-color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MENU SECTIONS — dark background, 2-column cards
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 8rem" }}>
        {cateringMenu.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            style={{ paddingTop: "5rem" }}
          >
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#f0ece4",
                margin: "0 0 0.2rem",
              }}>
                {cat.label}
              </h2>
              <GoldOrnament />
            </div>

            {/* 2-column grid of item cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: "1.2rem",
            }}>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    border: "1px solid rgba(200,169,110,0.3)",
                    padding: "1.6rem 1.8rem",
                    background: "rgba(255,255,255,0.02)",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#f0ece4",
                    margin: "0 0 0.5rem",
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    color: "#9a9080",
                    margin: "0 0 1rem",
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                  {/* Gold ornament divider */}
                  <svg width="40" height="10" viewBox="0 0 40 10" fill="none" style={{ display: "block", margin: "0 auto 0.8rem" }}>
                    <line x1="0" y1="5" x2="15" y2="5" stroke="#c8a96e" strokeWidth="0.6" />
                    <circle cx="20" cy="5" r="2" stroke="#c8a96e" strokeWidth="0.6" fill="none" />
                    <circle cx="20" cy="5" r="0.8" fill="#c8a96e" />
                    <line x1="25" y1="5" x2="40" y2="5" stroke="#c8a96e" strokeWidth="0.6" />
                  </svg>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    color: "#c8a96e",
                    margin: 0,
                    letterSpacing: "0.02em",
                  }}>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* View all button at bottom of each section */}
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button
                onClick={() => scrollToSection(cat.id)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c8a96e",
                  background: "none",
                  border: "1px solid rgba(200,169,110,0.4)",
                  padding: "0.75rem 2rem",
                  cursor: "pointer",
                }}
              >
                View All {cat.label}
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        background: "#111109",
        borderTop: "1px solid rgba(200,169,110,0.2)",
        padding: "4rem 2rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#c8a96e",
          margin: "0 0 0.75rem",
        }}>
          Ready to Book?
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          color: "#f0ece4",
          margin: "0 0 0.5rem",
        }}>
          Let's plan your event together.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: "#9a9080",
          margin: "0 0 2rem",
        }}>
          Call <a href="tel:3154098848" style={{ color: "#c8a96e", textDecoration: "none" }}>315-409-8848</a> or email <a href="mailto:catering@francescas-cucina.com" style={{ color: "#c8a96e", textDecoration: "none" }}>catering@francescas-cucina.com</a>
        </p>
      </div>

      <Footer />
    </div>
  );
}
