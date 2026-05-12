/*
 * CATERING PAGE — Mandolin Aegean Bistro style
 * Light/cream background, sticky category tabs, two-column item cards
 * Each card: item name + description left, photo right, price below name
 */

import { useState, useEffect, useRef } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";
const CHEF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/chef_special_8863e660.jpg";
const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events1_8d038c07.jpg";
const CATERING_HERO_IMG = "/manus-storage/combined_food_table_f4c054cb.png";

const cateringMenu = [
  {
    id: "appetizers", label: "Appetizers",
    items: [
      { name: "Antipasto Platter", desc: "Assorted cured meats, imported cheeses, olives, roasted peppers, and artisan crackers.", serving: "Serves 10–15", img: CHEF_IMG },
      { name: "Stuffed Hot Cherry Peppers", desc: "Signature meatball mix baked with marinara and romano cheese.", serving: "Sold by the dozen", img: SEAFOOD_IMG },
      { name: "Arancini Rice Balls", desc: "Arborio rice, mozzarella, provolone, spicy Italian sausage, roasted peppers, basil, shaved parmesan.", serving: "Sold by the dozen", img: PASTA_IMG },
      { name: "Fried Calamari", desc: "Lightly breaded, perfectly fried with marinara dipping sauce.", serving: "Serves 8–10", img: SEAFOOD_IMG },
      { name: "Utica Greens", desc: "Escarole, prosciutto, hot peppers, toasted breadcrumbs and romano.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Bruschetta", desc: "Grilled crostini topped with fresh tomato, basil, garlic, and extra-virgin olive oil.", serving: "Sold by the dozen", img: PASTA_IMG },
    ],
  },
  {
    id: "salads", label: "Salads & Soups",
    items: [
      { name: "Caesar Salad", desc: "Romaine, housemade Caesar dressing, shaved parmesan, croutons.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "House Salad", desc: "Mixed greens with house Italian dressing.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Heirloom Tomato & Burrata", desc: "Marinated heirloom cherry tomatoes, imported burrata, fresh basil, extra-virgin olive oil, balsamic drizzle.", serving: "Serves 10–12", img: PASTA_IMG },
      { name: "Italian Wedding Soup", desc: "Classic Italian wedding soup with housemade meatballs.", serving: "Full pan serves 15–20", img: CHEF_IMG },
    ],
  },
  {
    id: "pasta", label: "Pasta",
    items: [
      { name: "Baked Ziti", desc: "Classic baked ziti with housemade marinara, ricotta, and mozzarella.", serving: "Full pan serves 15–20", img: PASTA_IMG },
      { name: "Chicken Riggies", desc: "Peppers, onions, spicy pink sauce. Available mild, medium, or hot.", serving: "Full pan serves 15–20", img: PASTA_IMG },
      { name: "Fettuccine Alfredo", desc: "Creamy housemade Alfredo sauce over ribbon pasta. Available with grilled chicken.", serving: "Full pan serves 15–20", img: PASTA_IMG },
      { name: "Uncle Paulie's Bolognese", desc: "Gemelli pasta, braised veal, beef, pork, carrots, rustic tomato Barolo wine sauce.", serving: "Full pan serves 15–20", img: PASTA_IMG },
      { name: "Eggplant Rollatini", desc: "Lightly breaded eggplant, seasoned ricotta, melted mozzarella, marinara.", serving: "Full pan serves 12–15", img: CHEF_IMG },
      { name: "Cheese Ravioli Marinara", desc: "Housemade cheese ravioli in classic marinara sauce.", serving: "Full pan serves 12–15", img: PASTA_IMG },
    ],
  },
  {
    id: "entrees", label: "Entrees",
    items: [
      { name: "Chicken Parmesan", desc: "Classic chicken dish prepared au gratin with fresh whole milk mozzarella.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Chicken Marsala", desc: "Tender chicken breast sautéed with shallots, garlic and wild mushrooms in a sweet Marsala wine reduction.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Salmon Fillet", desc: "Broiled Canadian salmon with savory Italian herb crust, lemon-chive butter sauce.", serving: "Full pan serves 10–12", img: SEAFOOD_IMG },
      { name: "Shrimp with Polenta", desc: "Colossal shrimp, crispy pancetta, spinach, cherry tomatoes in garlic pomodoro over creamy polenta.", serving: "Full pan serves 10–12", img: SEAFOOD_IMG },
      { name: "Veal Parmesan", desc: "Breaded veal au gratin with fresh whole milk mozzarella and housemade marinara.", serving: "Full pan serves 10–12", img: CHEF_IMG },
    ],
  },
  {
    id: "steaks", label: "Steaks",
    items: [
      { name: "Filet Mignon", desc: "Center-cut Angus Reserve filet, seasoned and grilled to perfection.", serving: "Priced per person", img: STEAK_IMG },
      { name: "New York Strip", desc: "Bone-in strip steak, aged a minimum of 30 days.", serving: "Priced per person", img: STEAK_IMG },
      { name: "Surf and Turf", desc: "Chef's selection of premium steak paired with fresh seafood.", serving: "Priced per person", img: STEAK_IMG },
    ],
  },
  {
    id: "sides", label: "Sides",
    items: [
      { name: "Smoked Gouda Au Gratin Mashed Potatoes", desc: "Creamy mashed potatoes with smoked gouda cheese.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Grilled Asparagus", desc: "Seasonal asparagus, olive oil, sea salt.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Saffron Risotto", desc: "Creamy Arborio rice with saffron.", serving: "Full pan serves 15–20", img: PASTA_IMG },
      { name: "Seasonal Vegetables", desc: "Chef's selection of roasted seasonal vegetables.", serving: "Full pan serves 15–20", img: CHEF_IMG },
      { name: "Garlic Bread", desc: "Housemade garlic bread with herb butter.", serving: "Sold by the dozen", img: PASTA_IMG },
    ],
  },
  {
    id: "desserts", label: "Desserts",
    items: [
      { name: "Tiramisu", desc: "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream.", serving: "Full pan serves 15–20", img: DESSERT_IMG },
      { name: "Cannoli", desc: "Traditional Sicilian cannoli with sweet ricotta filling and chocolate chips.", serving: "Sold by the dozen", img: DESSERT_IMG },
      { name: "Panna Cotta", desc: "Silky vanilla panna cotta with seasonal berry compote.", serving: "Serves 12–15", img: DESSERT_IMG },
    ],
  },
];

export default function Catering() {
  const [activeTab, setActiveTab] = useState("appetizers");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 140;
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
          if (rect.top <= 170 && rect.bottom > 170) {
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
    <div style={{ background: "#f9f6f0", minHeight: "100vh", color: "#1a1a18" }}>
      <NavigationA />

      {/* ─── HERO ─── */}
      <div style={{ position: "relative", height: "clamp(280px, 40vw, 480px)", overflow: "hidden", marginTop: "72px" }}>
        <img
          src={CATERING_HERO_IMG}
          alt="Francesca's Cucina catering spread"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        {/* Dark overlay for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.52)",
        }} />
        {/* Centered heading + contact info */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          zIndex: 2,
        }}>
          <h1 style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            letterSpacing: "0.04em",
            color: "#fff",
            lineHeight: 0.9,
            margin: "0 0 0.75rem",
          }}>
            Catering
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
            color: "rgba(255,255,255,0.88)",
            margin: 0,
            lineHeight: 1.7,
          }}>
            To place a catering order, please call{" "}
            <a href="tel:3154098848" style={{ color: "#fff", textDecoration: "underline" }}>315-409-8848</a>
            {" "}or email{" "}
            <a href="mailto:catering@francescas-cucina.com" style={{ color: "#fff", textDecoration: "underline" }}>
              catering@francescas-cucina.com
            </a>
          </p>
        </div>
      </div>

      {/* ─── STICKY CATEGORY TABS ─── */}
      <div style={{
        position: "sticky",
        top: "72px",
        zIndex: 40,
        background: "#fff",
        borderBottom: "1px solid #e8e2d8",
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
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: activeTab === cat.id ? "#1a1a18" : "#888",
                background: "none",
                border: "none",
                borderBottom: activeTab === cat.id ? "2px solid #1a1a18" : "2px solid transparent",
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

      {/* ─── MENU SECTIONS ─── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 8rem" }}>
        {cateringMenu.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            style={{ paddingTop: "5rem" }}
          >
            {/* Section title */}
            <h2 style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "0.02em",
              color: "#1a1a18",
              marginBottom: "0.4rem",
            }}>
              {cat.label}
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.8rem",
              color: "#888",
              marginBottom: "2.5rem",
              letterSpacing: "0.03em",
            }}>
              Serving sizes may vary per item
            </p>

            {/* Two-column card grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              background: "#f9f6f0",
            }}
            className="catering-grid"
            >
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: "#fff",
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    margin: "0 0 1px 0",
                  }}
                >
                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      letterSpacing: "0.03em",
                      color: "#1a1a18",
                      marginBottom: "0.35rem",
                      lineHeight: 1.2,
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      color: "#555",
                      lineHeight: 1.65,
                      marginBottom: "0.75rem",
                    }}>
                      {item.desc}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      color: "#888",
                      letterSpacing: "0.04em",
                    }}>
                      {item.serving}
                    </p>
                  </div>
                  {/* Photo */}
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "110px",
                      height: "110px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div style={{
          marginTop: "5rem",
          padding: "3rem",
          background: "#1a1a18",
          textAlign: "center",
        }}
        className="catering-cta"
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "rgba(245,240,228,0.6)",
            marginBottom: "0.75rem",
            letterSpacing: "0.05em",
          }}>
            Ready to place an order?
          </p>
          <h3 style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#f5f0e4",
            marginBottom: "1.5rem",
            letterSpacing: "0.02em",
          }}>
            Let's Make It Happen
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.9rem",
            color: "rgba(245,240,228,0.7)",
            marginBottom: "2rem",
            lineHeight: 1.7,
          }}>
            All catering orders are priced at market rate. Please contact us at least 48 hours in advance.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }} className="catering-cta-btns">
            <a
              href="tel:3154098848"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1a1a18",
                background: "#f5f0e4",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
            >
              Call 315-409-8848
            </a>
            <a
              href="mailto:catering@francescas-cucina.com"
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#f5f0e4",
                background: "transparent",
                padding: "0.85rem 2rem",
                border: "1px solid rgba(245,240,228,0.4)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .catering-grid { grid-template-columns: 1fr !important; }
          .catering-cta {
            padding: 2.5rem 1.5rem !important;
          }
          .catering-cta-btns {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .catering-cta-btns a {
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}
