/*
 * MENU PAGE — Motherwolf editorial style
 * Dark charcoal bg, large condensed section headers, two-column item grid
 * Category nav sticky at top, items listed with name + description
 */

import { useState, useEffect, useRef } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";
const CHEF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/chef_special_8863e660.jpg";

const categories = [
  {
    id: "appetizers",
    label: "Appetizers",
    italianLabel: "Antipasti",
    img: SEAFOOD_IMG,
    items: [
      { name: "Utica-Style Greens", desc: "Escarole, prosciutto, hot peppers, toasted breadcrumbs and romano" },
      { name: "Stuffed Hot Cherry Peppers", desc: "Signature meatball mix baked with marinara and romano cheese" },
      { name: "Hey Meatball!", desc: "Three stuffed meatballs, three-cheese blend, roasted red peppers, marinara, caramelized onions, grated cheese" },
      { name: "Goat Cheese Fritter", desc: "Battered fresh goat cheese, garlic crostini, fra diavolo sauce" },
      { name: "Calabrian Ribs", desc: "Baby back ribs, calabrian chili rub, buttermilk polenta, fennel, gorgonzola slaw" },
      { name: "Fried Calamari", desc: "Lightly breaded, perfectly fried with marinara dipping sauce" },
      { name: "Arancini Rice Balls", desc: "Arborio rice, mozzarella, provolone, spicy Italian sausage, roasted peppers, basil, shaved parmesan" },
      { name: "Bacon-Wrapped Sea Scallops", desc: "Five jumbo sea scallops, dijon-horseradish aioli" },
      { name: "Bang Bang Calamari", desc: "Lightly breaded, perfectly fried, sweet & spicy bang bang sauce" },
    ],
  },
  {
    id: "salads",
    label: "Soups & Salads",
    italianLabel: "Zuppe e Insalate",
    img: CHEF_IMG,
    items: [
      { name: "Italian Wedding Soup", desc: "Classic Italian wedding soup with housemade meatballs" },
      { name: "Tuscan Greens & Beans", desc: "A hearty Tuscan-style soup" },
      { name: "Caesar Side Salad", desc: "Romaine, housemade Caesar dressing, shaved parmesan, croutons" },
      { name: "House Salad", desc: "Mixed greens with house dressing" },
      { name: "Iceberg Salad Wedge", desc: "Baby iceberg, tomatoes, red onions, bacon, creamy bleu cheese" },
      { name: "Heirloom Tomato & Burrata", desc: "Marinated heirloom cherry tomato, imported burrata, fresh basil, extra-virgin olive oil, balsamic drizzle" },
      { name: "Pecan Salmon Salad", desc: "Pecan-crusted Canadian salmon, mixed greens, whole milk goat cheese, roasted beets, granny smith apple, candied pecans, white balsamic vinaigrette" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    italianLabel: "La Pasta",
    img: PASTA_IMG,
    items: [
      { name: "Eggplant Rollatini", desc: "Lightly breaded eggplant, seasoned ricotta, melted mozzarella, side of linguini marinara" },
      { name: "Gemelli Angeloro", desc: "Twin pasta, grilled chicken, utica greens, prosciutto, extra-virgin garlic olive oil, toasted breadcrumbs, romano cheese, splash of tomato ragu" },
      { name: "Gluten-Free Penne", desc: "Grilled chicken, prosciutto, artichokes, spinach, sun-dried tomato, goat cheese cream sauce" },
      { name: "Fettuccine Alfredo", desc: "Creamy sauce, ribbon pasta — also available with grilled chicken or sautéed shrimp" },
      { name: "Baked Cavatelli", desc: "Housemade cavatelli, hot Italian sausage, rapini, grated locatelli, roasted garlic sauce" },
      { name: "Uncle Paulie's Bolognese", desc: "Gemelli pasta, braised veal, beef, pork, carrots, rustic tomato Barolo wine sauce" },
      { name: "Linguine White Clam Sauce", desc: "Fresh littlenecks, garlic, white wine" },
      { name: "Chicken Riggies", desc: "Peppers, onions, spicy pink sauce (mild, medium, or hot)" },
      { name: "Seafood Riggies", desc: "Bay scallops, baby shrimp, spicy pink sauce (mild, medium, or hot)" },
      { name: "Gnocchi Gorgonzola", desc: "Aged Italian gorgonzola cream sauce, toasted walnuts, fresh basil" },
      { name: "Lobster-Stuffed Cheese Ravioli", desc: "Fresh Maine lobster, pink vodka sauce" },
      { name: "Homemade Gnocchi Marinara", desc: "Housemade gnocchi in classic marinara sauce" },
      { name: "Cheese Ravioli Marinara", desc: "Housemade cheese ravioli in classic marinara" },
    ],
  },
  {
    id: "entrees",
    label: "Entrees",
    italianLabel: "Secondi",
    img: SEAFOOD_IMG,
    items: [
      { name: "Salmon Fillet", desc: "Broiled Canadian salmon with savory Italian herb crust, lemon-chive butter sauce, saffron risotto and grilled asparagus" },
      { name: "Crab-Stuffed Salmon", desc: "Oven-roasted Canadian salmon stuffed with jumbo lump crabmeat, shrimp and lobster chive velouté, saffron risotto and grilled asparagus" },
      { name: "Shrimp with Polenta", desc: "Colossal shrimp, crispy pancetta, spinach, cherry tomatoes and pearl onions in a garlic pomodoro with alfredo drizzle over creamy polenta" },
      { name: "Cioppino", desc: "Clams, mussels, calamari, shrimp, scallops and fresh fish in white wine, fumet and tomato broth, served with garlic crostini over linguine" },
      { name: "Chicken Parmesan", desc: "A classic chicken dish prepared au gratin with fresh whole milk mozzarella" },
      { name: "Chicken Marsala", desc: "Tender chicken breast sautéed with shallots, garlic and wild mushrooms in a sweet Marsala wine reduction, served over linguine" },
      { name: "Chicken Francaise", desc: "Egg-battered chicken cutlets sautéed with white wine, lemon and butter, served over linguine" },
      { name: "Chicken MVP", desc: "\"Matty D's Vodka Parm\" — breaded chicken au gratin with fresh mozzarella, house vodka sauce and pesto drizzle over rigatoni" },
      { name: "Veal Parmesan", desc: "14oz bone-in veal chop pounded au gratin with fresh whole milk mozzarella and housemade marinara over chef's choice pasta" },
    ],
  },
  {
    id: "steaks",
    label: "Steaks",
    italianLabel: "Bistecca",
    img: STEAK_IMG,
    items: [
      { name: "Filet Gorgonzola", desc: "Two Angus Reserve medallions layered with Utica greens over gemelli pasta tossed in aged Italian gorgonzola cream sauce" },
      { name: "Filet Mignon", desc: "8oz center-cut Angus Reserve filet, seasoned and grilled to perfection, served with smoked gouda au gratin mash and seasonal vegetables" },
      { name: "New York Strip", desc: "16oz bone-in strip steak, aged a minimum of 30 days, topped with herb-roasted garlic or cajun compound butter, served with smoked gouda au gratin mashed potatoes and seasonal vegetables" },
      { name: "The Delmonico", desc: "16oz bone-in cowboy Angus Reserve ribeye, well-marbled and chargrilled, topped with herb-roasted or cajun compound butter, served with smoked gouda au gratin mash and seasonal vegetables" },
      { name: "Surf and Turf", desc: "Chef's daily adventure with fresh proteins and seasonally inspired seafood — ask your server for tonight's feature" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    italianLabel: "Dolci",
    img: DESSERT_IMG,
    items: [
      { name: "Tiramisu", desc: "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream" },
      { name: "Cannoli", desc: "Traditional Sicilian cannoli with sweet ricotta filling and chocolate chips" },
      { name: "Panna Cotta", desc: "Silky vanilla panna cotta with seasonal berry compote" },
      { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with a molten center, served with vanilla gelato" },
      { name: "Gelato", desc: "Ask your server for today's housemade selections" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll to section when category tab clicked
  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const cat of categories) {
        const el = sectionRefs.current[cat.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 160) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      {/* ─── HERO: split — category list left, photo right (Motherwolf style) ─── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        paddingTop: "72px",
      }}
      className="menu-hero-grid"
      >
        {/* Left: dark panel with category names */}
        <div style={{
          background: "var(--charcoal)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 4rem 4rem 3rem",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem", letterSpacing: "0.4em",
            textTransform: "uppercase", color: "var(--gold)",
            marginBottom: "2.5rem",
          }}>
            Menu
          </p>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4vw, 4.2rem)",
                letterSpacing: "0.02em",
                color: activeCategory === cat.id ? "var(--ivory)" : "rgba(245,240,228,0.25)",
                background: "none",
                border: "none",
                textAlign: "left",
                lineHeight: 1.08,
                padding: "0.05rem 0",
                transition: "color 0.25s ease",
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) (e.currentTarget as HTMLElement).style.color = "rgba(245,240,228,0.6)";
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) (e.currentTarget as HTMLElement).style.color = "rgba(245,240,228,0.25)";
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Right: large food photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            key={activeCategory}
            src={categories.find(c => c.id === activeCategory)?.img || STEAK_IMG}
            alt={`${categories.find(c => c.id === activeCategory)?.label} at Francesca's Cucina`}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.5s ease",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to left, transparent 55%, rgba(13,12,10,0.25) 100%)",
          }} />
        </div>
      </section>

      {/* ─── STICKY CATEGORY NAV ─── */}
      <div style={{
        position: "sticky",
        top: "72px",
        zIndex: 40,
        background: "rgba(18,16,14,0.97)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        overflowX: "auto",
      }}>
        <div style={{
          display: "flex",
          gap: "0",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: activeCategory === cat.id ? "var(--ivory)" : "var(--ivory-muted)",
                background: "none",
                border: "none",
                borderBottom: activeCategory === cat.id ? "2px solid var(--gold)" : "2px solid transparent",
                padding: "1.1rem 1.4rem",
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
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem 8rem" }}>
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            style={{ paddingTop: "6rem" }}
          >
            {/* Section header — Motherwolf style */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "flex-end",
              marginBottom: "3rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
            className="menu-section-header"
            >
              <div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.05em",
                }}>
                  {cat.italianLabel}
                </p>
                <h2 style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3.5rem, 7vw, 7rem)",
                  letterSpacing: "0.02em",
                  color: "var(--ivory)",
                  lineHeight: 0.88,
                }}>
                  {cat.label}
                </h2>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{
                    width: "180px",
                    height: "120px",
                    objectFit: "cover",
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>

            {/* Items — two column grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
            className="menu-items-grid"
            >
              {cat.items.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    padding: "1.75rem 2rem 1.75rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    paddingRight: i % 2 === 0 ? "3rem" : "0",
                    paddingLeft: i % 2 === 1 ? "3rem" : "0",
                    borderLeft: i % 2 === 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <h3 style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    letterSpacing: "0.04em",
                    color: "var(--ivory)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.2,
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Consuming notice */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.72rem",
          color: "rgba(245,240,228,0.3)",
          marginTop: "5rem",
          lineHeight: 1.6,
          maxWidth: "600px",
        }}>
          *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Menu items and prices subject to change based on seasonal availability.
        </p>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .menu-hero-grid { grid-template-columns: 1fr !important; }
          .menu-hero-grid > div:last-child { height: 45vw !important; }
        }
        @media (max-width: 640px) {
          .menu-section-header { grid-template-columns: 1fr !important; }
          .menu-section-header > div:last-child { display: none !important; }
          .menu-items-grid { grid-template-columns: 1fr !important; }
          .menu-items-grid > div { padding-left: 0 !important; padding-right: 0 !important; border-left: none !important; }
        }
      `}</style>
    </div>
  );
}
