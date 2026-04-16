/*
 * DESIGN: Contemporary Italian — Cinematic Dark with Gold Accents
 * Menu page: Clean editorial list format with category anchors
 * SEO: H1 with keyword, proper heading hierarchy, descriptive content
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452664420/JqcX8cF4MVgtYSSZ27eh99/pasta_7dbb7994.jpg";

const categories = [
  {
    id: "appetizers",
    label: "Apertivi",
    title: "Appetizers",
    items: [
      { name: "Utica-Style Greens", desc: "Escarole, prosciutto, hot peppers, toasted breadcrumbs and romano" },
      { name: "Stuffed Hot Cherry Peppers", desc: "Signature meatball mix baked with marinara and romano cheese" },
      { name: "Hey Meatball!", desc: "Three stuffed meatballs, three-cheese blend, roasted red peppers, marinara, caramelized onions, grated cheese" },
      { name: "Goat Cheese Fritter", desc: "Fritti, battered fresh goat cheese, garlic crostini, fra diavolo sauce" },
      { name: "Calabrian Ribs", desc: "Baby back ribs, calabrian chili rub, buttermilk polenta, fennel, gorgonzola slaw" },
      { name: "Fried Calamari", desc: "Lightly breaded, perfectly fried with marinara dipping sauce" },
      { name: "Arancini Rice Balls", desc: "Arborio rice, mozzarella, provolone, spicy Italian sausage, roasted peppers, basil, shaved parmesan" },
      { name: "Bacon-Wrapped Sea Scallops", desc: "Five jumbo sea scallops, dijon-horseradish aioli" },
      { name: "Bang Bang Calamari", desc: "Lightly breaded, perfectly fried, sweet & spicy bang bang sauce" },
    ],
  },
  {
    id: "salads",
    label: "Zuppi & Insalata",
    title: "Soups & Salads",
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
    label: "Francesca's Favorites",
    title: "Pasta",
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
    id: "seafood",
    label: "Pesci",
    title: "Seafood",
    items: [
      { name: "Salmon Fillet", desc: "Broiled Canadian salmon with savory Italian herb crust, lemon-chive butter sauce, saffron risotto and grilled asparagus" },
      { name: "Crab-Stuffed Salmon", desc: "Oven-roasted Canadian salmon stuffed with jumbo lump crabmeat, shrimp and lobster chive velouté, saffron risotto and grilled asparagus" },
      { name: "Shrimp with Polenta", desc: "Colossal shrimp, crispy pancetta, spinach, cherry tomatoes and pearl onions in a garlic pomodoro with alfredo drizzle over creamy polenta" },
      { name: "Cioppino", desc: "The San Francisco favorite — clams, mussels, calamari, shrimp, scallops and fresh fish in white wine, fumet and tomato broth, served with garlic crostini over linguine" },
      { name: "Salmon and Broccolini", desc: "Oven-roasted Canadian salmon, broccolini and blistered heirloom cherry tomatoes in a light parmesan and tarragon lemon cream sauce over housemade pappardelle" },
      { name: "Scallops", desc: "Chef's daily preparation — ask your server for tonight's feature" },
    ],
  },
  {
    id: "chicken",
    label: "Pollame",
    title: "Chicken",
    items: [
      { name: "Chicken Parmesan", desc: "A classic chicken dish prepared au gratin with fresh whole milk mozzarella" },
      { name: "Grilled Chicken Parmesan", desc: "Grilled chicken au gratin with fresh whole milk mozzarella and house marinara over rigatoni" },
      { name: "Chicken MVP", desc: "\"Matty D's Vodka Parm\" — breaded chicken au gratin with fresh mozzarella, house vodka sauce and pesto drizzle over rigatoni" },
      { name: "Chicken Francaise", desc: "Egg-battered chicken cutlets sautéed with white wine, lemon and butter, served over linguine" },
      { name: "Chicken Marsala", desc: "Tender chicken breast sautéed with shallots, garlic and wild mushrooms in a sweet Marsala wine reduction, served over linguine" },
      { name: "Chicken Capricciosa", desc: "Breaded chicken cutlet topped with shaved parmesan, a lemon-dressed tomato and ciliegine arugula salad, served with red pepper aioli" },
    ],
  },
  {
    id: "veal",
    label: "Vitello",
    title: "Veal",
    items: [
      { name: "Veal Parmesan", desc: "14oz bone-in veal chop pounded au gratin with fresh whole milk mozzarella and housemade marinara over chef's choice pasta" },
      { name: "Veal Capricciosa", desc: "Breaded veal cutlet topped with shaved parmesan, a lemon-dressed tomato and ciliegine arugula salad, served with red pepper aioli" },
    ],
  },
  {
    id: "steaks",
    label: "Carne",
    title: "Steaks",
    items: [
      { name: "Filet Gorgonzola", desc: "Two Angus Reserve medallions layered with Utica greens over gemelli pasta tossed in aged Italian gorgonzola cream sauce" },
      { name: "Filet Mignon", desc: "8oz center-cut Angus Reserve filet, seasoned and grilled to perfection, served with smoked gouda au gratin mash and seasonal vegetables" },
      { name: "New York Strip", desc: "16oz bone-in strip steak, aged a minimum of 30 days, topped with herb-roasted garlic or cajun compound butter, served with smoked gouda au gratin mashed potatoes and seasonal vegetables" },
      { name: "The Delmonico", desc: "16oz bone-in cowboy Angus Reserve ribeye, well-marbled and chargrilled, topped with herb-roasted or cajun compound butter, served with smoked gouda au gratin mash and seasonal vegetables" },
      { name: "Surf and Turf", desc: "Chef's daily adventure with fresh proteins and seasonally inspired seafood — ask your server for tonight's feature" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("appetizers");

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
            backgroundImage: `url(${FOOD_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(12,11,9,0.6), rgba(12,11,9,0.9))",
          }}
        />
        <div className="container relative text-center" style={{ zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            Italian Restaurant Menu
          </p>
          <span className="gold-rule" style={{ margin: "0 auto 2rem" }} />
          <h1
            className="display-headline"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginTop: "1.5rem", marginBottom: "1rem" }}
          >
            Our Menu
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--ivory-muted)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Classic Italian cuisine crafted with care. All pasta is made in-house.
            Served with soup or house salad where noted.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <div
        className="sticky top-16 md:top-20 z-30"
        style={{
          background: "rgba(12,11,9,0.97)",
          borderBottom: "1px solid rgba(184,150,90,0.15)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container">
          <div className="flex overflow-x-auto gap-0 py-0" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: activeCategory === cat.id ? "var(--gold)" : "var(--ivory-muted)",
                  padding: "1.25rem 1rem",
                  background: "transparent",
                  border: "none",
                  borderBottom: activeCategory === cat.id ? "1px solid var(--gold)" : "1px solid transparent",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container py-16">
        {categories.map((cat, ci) => (
          <section
            key={cat.id}
            id={cat.id}
            className="mb-20"
            style={{ scrollMarginTop: "120px" }}
          >
            <div className="mb-10">
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>{cat.label}</p>
              <span className="gold-rule" style={{ marginBottom: "1.5rem" }} />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "2.25rem",
                  color: "var(--ivory)",
                  marginTop: "1.25rem",
                }}
              >
                {cat.title}
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
              style={{ borderTop: "1px solid rgba(184,150,90,0.1)" }}
            >
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group"
                  style={{
                    padding: "1.25rem 0",
                    borderBottom: "1px solid rgba(184,150,90,0.1)",
                    paddingRight: "2rem",
                    transition: "background 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--ivory)",
                      marginBottom: "0.35rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.825rem",
                      color: "var(--ivory-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Wine List CTA */}
        <div
          className="text-center py-12"
          style={{
            borderTop: "1px solid rgba(184,150,90,0.2)",
            borderBottom: "1px solid rgba(184,150,90,0.2)",
            marginBottom: "2rem",
          }}
        >
          <p className="section-label" style={{ marginBottom: "1rem" }}>Beverages</p>
          <h2
            className="display-headline"
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            Wine List
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.875rem",
              color: "var(--ivory-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Ask your server for our curated selection of Italian and domestic wines.
          </p>
          <a
            href="https://resy.com/cities/syr/francescas-cucina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Reserve Your Table
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
