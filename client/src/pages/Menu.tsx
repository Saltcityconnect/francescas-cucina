/*
 * MENU PAGE — Sunny's Miami style
 * Dark charcoal bg, Big Shoulders Display condensed category names stacked left,
 * large food photo right, then full menu items listed below
 */

import { useState } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const STEAK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/steak_324fcfb5.jpg";
const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/seafood_d149e28c.jpg";
const DESSERT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/dessert_81cfe8d6.jpg";

const categories = [
  {
    id: "appetizers",
    title: "Appetizers",
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
    title: "Salads",
    img: PASTA_IMG,
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
    title: "Pasta",
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
    title: "Entrees",
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
    title: "Steaks",
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
    title: "Desserts",
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

  const activeData = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh", color: "var(--ivory)" }}>
      <NavigationA />

      {/* ─── HERO SPLIT: Sunny's style — category list left, photo right ─── */}
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
            fontSize: "0.68rem", letterSpacing: "0.35em",
            textTransform: "uppercase", color: "var(--gold)",
            marginBottom: "2.5rem",
          }}>
            Menu
          </p>

          <h1 style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(245,240,228,0.4)",
            marginBottom: "1rem",
          }}>
            Dinner Menu
          </h1>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: activeCategory === cat.id ? "var(--ivory)" : "rgba(245,240,228,0.3)",
                background: "none",
                border: "none",
                textAlign: "left",
                lineHeight: 1.05,
                padding: "0.1rem 0",
                transition: "color 0.25s ease",
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) (e.currentTarget as HTMLElement).style.color = "rgba(245,240,228,0.65)";
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) (e.currentTarget as HTMLElement).style.color = "rgba(245,240,228,0.3)";
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Right: large food photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            key={activeData.img}
            src={activeData.img}
            alt={`${activeData.title} at Francesca's Cucina`}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.4s ease",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to left, transparent 60%, rgba(13,12,10,0.3) 100%)",
          }} />
        </div>
      </section>

      {/* ─── MENU ITEMS ─── */}
      <section style={{ padding: "6rem 0", background: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 3rem" }}>

          {/* Sticky category nav */}
          <div style={{
            position: "sticky",
            top: "72px",
            zIndex: 30,
            background: "rgba(18,16,14,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "4rem",
            marginLeft: "-3rem",
            marginRight: "-3rem",
            padding: "0 3rem",
          }}>
            <div style={{
              display: "flex",
              overflowX: "auto",
              gap: "0",
              scrollbarWidth: "none",
            }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: activeCategory === cat.id ? "var(--ivory)" : "rgba(245,240,228,0.45)",
                    padding: "1.25rem 1.25rem",
                    background: "transparent",
                    border: "none",
                    borderBottom: activeCategory === cat.id ? "2px solid var(--ivory)" : "2px solid transparent",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* All categories */}
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              style={{ marginBottom: "5rem", scrollMarginTop: "140px" }}
            >
              <h2
                className="display-condensed"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "var(--ivory)",
                  marginBottom: "0.5rem",
                }}
              >
                {cat.title}
              </h2>
              <div style={{ width: "50px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0",
              }}
              className="menu-items-grid"
              >
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "1.25rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      paddingRight: idx % 2 === 0 ? "3rem" : "0",
                    }}
                  >
                    <p style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--ivory)",
                      marginBottom: "0.35rem",
                    }}>
                      {item.name}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      color: "var(--ivory-muted)",
                      lineHeight: 1.65,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Reservation CTA */}
          <div style={{
            textAlign: "center",
            padding: "4rem 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "1.5rem",
              color: "var(--ivory-muted)",
              marginBottom: "2rem",
            }}>
              Ready to dine with us?
            </p>
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
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .menu-hero-grid { grid-template-columns: 1fr !important; }
          .menu-items-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
