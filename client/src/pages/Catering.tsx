/*
 * CATERING PAGE — Mandolin Restaurant style
 * Category tabs, menu items list with descriptions, contact CTA
 */

import { useState } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";
const CHEF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/chef_special_8863e660.jpg";
const EVENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/events1_8d038c07.jpg";

const cateringMenu = [
  {
    id: "appetizers", label: "Appetizers", img: SEAFOOD_IMG,
    items: [
      { name: "Antipasto Platter", desc: "Assorted cured meats, imported cheeses, olives, roasted peppers, and artisan crackers. Serves 10–15.", price: "Market Price" },
      { name: "Stuffed Hot Cherry Peppers", desc: "Signature meatball mix baked with marinara and romano cheese. Sold by the dozen.", price: "Market Price" },
      { name: "Arancini Rice Balls", desc: "Arborio rice, mozzarella, provolone, spicy Italian sausage, roasted peppers, basil, shaved parmesan. Sold by the dozen.", price: "Market Price" },
      { name: "Fried Calamari", desc: "Lightly breaded, perfectly fried with marinara dipping sauce. Serves 8–10.", price: "Market Price" },
      { name: "Utica Greens", desc: "Escarole, prosciutto, hot peppers, toasted breadcrumbs and romano. Full pan serves 15–20.", price: "Market Price" },
      { name: "Bruschetta", desc: "Grilled crostini topped with fresh tomato, basil, garlic, and extra-virgin olive oil. Sold by the dozen.", price: "Market Price" },
    ],
  },
  {
    id: "salads", label: "Salads & Soups", img: CHEF_IMG,
    items: [
      { name: "Caesar Salad", desc: "Romaine, housemade Caesar dressing, shaved parmesan, croutons. Full pan serves 15–20.", price: "Market Price" },
      { name: "House Salad", desc: "Mixed greens with house Italian dressing. Full pan serves 15–20.", price: "Market Price" },
      { name: "Heirloom Tomato & Burrata", desc: "Marinated heirloom cherry tomatoes, imported burrata, fresh basil, extra-virgin olive oil, balsamic drizzle. Serves 10–12.", price: "Market Price" },
      { name: "Italian Wedding Soup", desc: "Classic Italian wedding soup with housemade meatballs. Full pan serves 15–20.", price: "Market Price" },
    ],
  },
  {
    id: "pasta", label: "Pasta", img: PASTA_IMG,
    items: [
      { name: "Baked Ziti", desc: "Classic baked ziti with housemade marinara, ricotta, and mozzarella. Full pan serves 15–20.", price: "Market Price" },
      { name: "Chicken Riggies", desc: "Peppers, onions, spicy pink sauce. Available mild, medium, or hot. Full pan serves 15–20.", price: "Market Price" },
      { name: "Fettuccine Alfredo", desc: "Creamy housemade Alfredo sauce over ribbon pasta. Available with grilled chicken. Full pan serves 15–20.", price: "Market Price" },
      { name: "Uncle Paulie's Bolognese", desc: "Gemelli pasta, braised veal, beef, pork, carrots, rustic tomato Barolo wine sauce. Full pan serves 15–20.", price: "Market Price" },
      { name: "Eggplant Rollatini", desc: "Lightly breaded eggplant, seasoned ricotta, melted mozzarella, marinara. Full pan serves 12–15.", price: "Market Price" },
      { name: "Cheese Ravioli Marinara", desc: "Housemade cheese ravioli in classic marinara sauce. Full pan serves 12–15.", price: "Market Price" },
    ],
  },
  {
    id: "entrees", label: "Entrees", img: SEAFOOD_IMG,
    items: [
      { name: "Chicken Parmesan", desc: "Classic chicken dish prepared au gratin with fresh whole milk mozzarella. Full pan serves 15–20.", price: "Market Price" },
      { name: "Chicken Marsala", desc: "Tender chicken breast sautéed with shallots, garlic and wild mushrooms in a sweet Marsala wine reduction. Full pan serves 15–20.", price: "Market Price" },
      { name: "Salmon Fillet", desc: "Broiled Canadian salmon with savory Italian herb crust, lemon-chive butter sauce. Full pan serves 10–12.", price: "Market Price" },
      { name: "Shrimp with Polenta", desc: "Colossal shrimp, crispy pancetta, spinach, cherry tomatoes in garlic pomodoro over creamy polenta. Full pan serves 10–12.", price: "Market Price" },
      { name: "Veal Parmesan", desc: "Breaded veal au gratin with fresh whole milk mozzarella and housemade marinara. Full pan serves 10–12.", price: "Market Price" },
    ],
  },
  {
    id: "steaks", label: "Steaks", img: STEAK_IMG,
    items: [
      { name: "Filet Mignon", desc: "Center-cut Angus Reserve filet, seasoned and grilled to perfection. Priced per person.", price: "Market Price" },
      { name: "New York Strip", desc: "Bone-in strip steak, aged a minimum of 30 days. Priced per person.", price: "Market Price" },
      { name: "Surf and Turf", desc: "Chef's selection of premium steak paired with fresh seafood. Priced per person.", price: "Market Price" },
    ],
  },
  {
    id: "sides", label: "Sides", img: CHEF_IMG,
    items: [
      { name: "Smoked Gouda Au Gratin Mashed Potatoes", desc: "Creamy mashed potatoes with smoked gouda cheese. Full pan serves 15–20.", price: "Market Price" },
      { name: "Grilled Asparagus", desc: "Seasonal asparagus, olive oil, sea salt. Full pan serves 15–20.", price: "Market Price" },
      { name: "Saffron Risotto", desc: "Creamy Arborio rice with saffron. Full pan serves 15–20.", price: "Market Price" },
      { name: "Seasonal Vegetables", desc: "Chef's selection of roasted seasonal vegetables. Full pan serves 15–20.", price: "Market Price" },
      { name: "Garlic Bread", desc: "Housemade garlic bread with herb butter. Sold by the dozen.", price: "Market Price" },
    ],
  },
  {
    id: "desserts", label: "Desserts", img: DESSERT_IMG,
    items: [
      { name: "Tiramisu", desc: "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream. Full pan serves 15–20.", price: "Market Price" },
      { name: "Cannoli", desc: "Traditional Sicilian cannoli with sweet ricotta filling and chocolate chips. Sold by the dozen.", price: "Market Price" },
      { name: "Panna Cotta", desc: "Silky vanilla panna cotta with seasonal berry compote. Sold individually.", price: "Market Price" },
      { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with a molten center. Sold individually.", price: "Market Price" },
    ],
  },
];

export default function Catering() {
  const [activeTab, setActiveTab] = useState("appetizers");
  const activeData = cateringMenu.find((c) => c.id === activeTab) || cateringMenu[0];

  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      <section style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <img src={EVENT_IMG} alt="Catering by Francesca's Cucina"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(13,12,10,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "0 1.5rem 5rem", textAlign: "center", zIndex: 2 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(245,240,228,0.65)", marginBottom: "1rem" }}>Catering</p>
          <h1 className="display-condensed" style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: "var(--ivory)", lineHeight: 0.9, marginBottom: "1.25rem" }}>
            Francesca's<br />Catering
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "rgba(245,240,228,0.75)", maxWidth: "560px" }}>
            Authentic Italian cuisine brought to your event
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0 3rem", background: "var(--charcoal)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="catering-intro-grid">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>About Our Catering</p>
              <h2 className="display-condensed" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ivory)", lineHeight: 0.92, marginBottom: "1.5rem" }}>
                Bringing the<br />Francesca's Experience<br />to You
              </h2>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "1.5rem" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "var(--ivory-muted)", lineHeight: 1.85 }}>
                Whether you're hosting a corporate luncheon, a family reunion, a wedding reception, or a holiday party, Francesca's Cucina brings the same quality and care that has made us one of Syracuse's most beloved restaurants for over 20 years. Our catering team works with you to create a customized menu that fits your event perfectly.
              </p>
            </div>
            <div style={{ background: "var(--charcoal-mid)", padding: "2.5rem", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ivory)", marginBottom: "2rem" }}>
                Get a Catering Quote
              </p>
              {[
                { label: "Email", value: "catering@francescas-cucina.com", href: "mailto:catering@francescas-cucina.com" },
                { label: "Phone", value: "(315) 409-8848", href: "tel:+13154098848" },
              ].map((contact) => (
                <div key={contact.label} style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.35rem" }}>{contact.label}</p>
                  <a href={contact.href} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "var(--ivory)", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ivory)")}>
                    {contact.value}
                  </a>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginTop: "0.5rem" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "var(--ivory-muted)", lineHeight: 1.7 }}>
                  Minimum order of 20 guests required. Delivery and setup available within the greater Syracuse area. Custom menus available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 0 7rem", background: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Catering Menu</p>
            <h2 className="display-condensed" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ivory)", lineHeight: 0.9 }}>Choose Your Menu</h2>
          </div>

          <div style={{ position: "sticky", top: "72px", zIndex: 30, background: "rgba(18,16,14,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)", marginLeft: "-3rem", marginRight: "-3rem", padding: "0 3rem", marginBottom: "3rem" }}>
            <div style={{ display: "flex", overflowX: "auto", gap: "0", scrollbarWidth: "none" }}>
              {cateringMenu.map((cat) => (
                <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                  style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: activeTab === cat.id ? "var(--ivory)" : "rgba(245,240,228,0.4)", padding: "1.25rem 1.25rem", background: "transparent", border: "none", borderBottom: activeTab === cat.id ? "2px solid var(--ivory)" : "2px solid transparent", whiteSpace: "nowrap", transition: "all 0.25s ease", cursor: "pointer" }}>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }} className="cat-header-grid">
            <div style={{ position: "sticky", top: "140px" }}>
              <img src={activeData.img} alt={activeData.label} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
            </div>
            <div>
              <h3 className="display-condensed" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--ivory)", marginBottom: "0.5rem" }}>{activeData.label}</h3>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />
              {activeData.items.map((item, idx) => (
                <div key={idx} style={{ padding: "1.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.4rem" }}>
                    <p style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ivory)" }}>{item.name}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "var(--gold)", whiteSpace: "nowrap" }}>{item.price}</p>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--ivory-muted)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
              <div style={{ marginTop: "3rem" }}>
                <a href="mailto:catering@francescas-cucina.com" className="btn-outline-ivory">Request a Custom Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--charcoal-mid)", padding: "5rem 0", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "var(--ivory-muted)", marginBottom: "2rem", lineHeight: 1.5 }}>
            "All pricing is based on menu selections and event size. Contact us for a personalized quote."
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:catering@francescas-cucina.com" className="btn-outline-ivory">Email Us</a>
            <a href="tel:+13154098848" className="btn-gold">Call (315) 409-8848</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .catering-intro-grid { grid-template-columns: 1fr !important; }
          .cat-header-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
