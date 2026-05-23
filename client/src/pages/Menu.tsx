/*
 * MENU PAGE — Dark luxury, Cormorant Garamond headings
 * Top tabs: Wine List | Dinner Menu (matching the reference design)
 * Section tabs: sticky category bar (Appetizers, Soup & Salad, Pasta, Seafood, Chicken, Veal, Steaks)
 * Typography: Cormorant Garamond for headings, DM Sans for body
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  note?: string;
}

interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    id: "appetizers",
    title: "Apertivi",
    subtitle: "Appetizers",
    items: [
      { name: "Utica-Style Greens", description: "escarole, prosciutto, hot peppers, toasted breadcrumbs and romano cheese" },
      { name: "Stuffed Hot Cherry Peppers", description: "signature meatball mix baked with marinara and romano cheese" },
      { name: "Hey Meatball!", description: "three stuffed meatballs, three-cheese blend, roasted red peppers, marinara, caramelized onions, romano cheese" },
      { name: "Goat Cheese Fritter", description: "fritti, breaded fresh goat cheese, garlic crostini, fra diavolo sauce" },
      { name: "Fried Calamari", description: "lightly breaded, perfectly fried with marinara dipping sauce" },
      { name: "Arancini Rice Balls", description: "arborio rice, mozzarella, provolone, hot italian sausage, roasted peppers, basil, shaved parmesan" },
      { name: "Bacon-Wrapped Sea Scallops", description: "five jumbo sea scallops, horseradish-dijon aioli" },
      { name: "Bang Bang Calamari", description: "lightly breaded, perfectly fried, sweet & sour bang bang sauce" },
      { name: "Mozz alla Vodka", description: "lightly breaded, perfectly fried fresh mozzarella, vodka sauce" },
    ],
  },
  {
    id: "salads",
    title: "Zuppi & Insalata",
    subtitle: "Soup & Salad",
    items: [
      { name: "Italian Wedding Soup" },
      { name: "Tuscan Greens & Beans" },
      { name: "Iceberg Salad Wedge", description: "steakhouse favorite: baby iceberg, tomatoes, red onions, bacon, creamy and crumbly bleu cheese" },
      { name: "Heirloom Tomato & Burrata", description: "marinated heirloom cherry tomato, imported burrata cheese, fresh basil, extra-virgin olive oil, balsamic drizzle" },
      { name: "Pecan Salmon Salad", description: "pecan-crusted Canadian salmon, mixed greens, whole milk goat cheese, roasted beets, granny smith apple, candied pecans, white balsamic vinaigrette" },
      { name: "Caesar Salad" },
      { name: "House Salad" },
    ],
  },
  {
    id: "pasta",
    title: "Francesca's Favorites",
    subtitle: "Delectable Pastas — served with a bowl of soup or house salad",
    items: [
      { name: "Cheese Ravioli", description: "seasoned ricotta, fresh pasta rotolo — available marinara or pink vodka" },
      { name: "Lobster Ravioli", description: "fresh pasta, maine lobster, pink vodka sauce" },
      { name: "Wagyu Beef Ravioli", description: "cognac-braised wagyu beef short rib, black truffle porcini mushrooms, fresh egg pasta, marsala cream sauce" },
      { name: "Lasagna", description: "fresh egg pasta, sausage bolognese, seasoned ricotta, mozzarella, marinara" },
      { name: "Eggplant Parmesan", description: "crispy fried & breaded eggplant layers, marinara, mozzarella, seasoned ricotta, side of fettuccine" },
      { name: "Gemelli Angeloro", description: "twin pasta, grilled chicken, utica greens, prosciutto, extra-virgin garlic olive oil, toasted breadcrumbs, romano cheese, splash of tomato ragu" },
      { name: "Gluten-Free Penne", description: "grilled chicken, prosciutto, artichokes, spinach, sun-dried tomato, goat cheese cream sauce" },
      { name: "Fettuccine Alfredo", description: "creamy alfredo sauce, ribboned fettuccine pasta — available with grilled chicken or sautéed shrimp" },
      { name: "Bolognese", description: "buccatini pasta, braised veal, beef, pork, carrots, rustic tomato barolo wine sauce" },
      { name: "Linguine White Clam Sauce", description: "fresh littleneck clams, garlic, white wine, fresh herbs" },
      { name: "Chicken Riggies", description: "peppers, onions, spicy pink sauce (mild, medium, hot)" },
      { name: "Seafood Riggies", description: "bay scallops, baby shrimp, spicy pink sauce (mild, medium, hot)" },
      { name: "Gnocchi Gorgonzola", description: "aged Italian gorgonzola cream sauce, toasted walnuts, fresh basil" },
      { name: "Homemade Gnocchi Marinara", note: "available with grilled chicken or sautéed shrimp" },
      { name: "Homemade Gnocchi Vodka", note: "available with grilled chicken or sautéed shrimp" },
    ],
  },
  {
    id: "seafood",
    title: "Pesci",
    subtitle: "Seafood",
    items: [
      { name: "Salmon Fillet", description: "Faroe Island salmon pan-roasted in a garlic, white wine, and rosemary butter sauce; served with crispy italian herb potatoes and garlic sautéed broccolini" },
      { name: "Cioppino", description: "The San Francisco Favorite — an italian stew of clams, mussels, calamari, shrimp, scallops, and fresh fish simmered with garlic, fennel and shallots in a white wine, fumet and tomato broth; served with garlic crostini over linguine" },
      { name: "Lobster Carbonara", description: "succulent lobster served over housemade buccatini in an egg yolk emulsion, with blistered tomatoes sautéed in white wine and garlic; finished with italian basil pesto and served tableside" },
      { name: "Shrimp Scampi", description: "housemade cavatelli tossed with sweet argentine red shrimp in a roasted garlic, white wine and lemon butter scampi sauce" },
      { name: "Scallops", description: "experience our chef's personality and flavors through his daily adventure — refer to special menu" },
    ],
  },
  {
    id: "chicken",
    title: "Pollame",
    subtitle: "Chicken",
    items: [
      { name: "Chicken Parmesan", description: "a classic chicken dish prepared au gratin with fresh whole milk mozzarella and house marinara; served over rigatoni" },
      { name: "Grilled Chicken Parmesan", description: "grilled chicken prepared au gratin with fresh whole milk mozzarella and house marinara over rigatoni" },
      { name: "Chicken MVP", description: "\"Matty D's Vodka Parm\" — breaded chicken prepared au gratin with fresh whole milk mozzarella, house vodka sauce and finished with a pesto drizzle; served over rigatoni" },
      { name: "Chicken Française", description: "egg-battered chicken cutlets sautéed with white wine, lemon and butter, served over linguine" },
      { name: "Chicken Marsala", description: "tender chicken breast sautéed with shallots, garlic, and wild mushrooms in a sweet Marsala wine reduction, served over linguine" },
    ],
  },
  {
    id: "veal",
    title: "Vitello",
    subtitle: "Veal",
    items: [
      { name: "Veal Parmesan", description: "14oz bone-in veal chop pounded au gratin with fresh whole milk mozzarella and house made marinara over chef's choice pasta" },
      { name: "Veal Antonio", description: "14oz bone-in veal chop smothered in vodka sauce, topped with fresh mozzarella, parmesan reggiano and layered crispy prosciutto; served with a side of fettuccine alla vodka" },
    ],
  },
  {
    id: "steaks",
    title: "Carne",
    subtitle: "Steaks",
    items: [
      { name: "Filet Gorgonzola", description: "two USDA Prime filet medallions layered with Francesca's utica greens; served over gemelli pasta tossed in an aged italian gorgonzola cream sauce" },
      { name: "Filet Mignon", description: "'King of Steaks' — 8oz center-cut USDA Prime filet, seasoned and grilled to perfection; served with roasted garlic olive oil mashed potatoes and asparagus" },
      { name: "NY Strip", description: "'Kansas City' 16oz bone-in USDA Prime strip aged for a minimum of 30 days for peak flavor; topped with a choice of herb roasted garlic or cajun compound butter; served with roasted garlic olive oil mashed potatoes and asparagus" },
      { name: "Delmonico", description: "'Cowboy Ribeye' 16oz bone-in USDA Prime seasoned and chargrilled; topped with a choice of herb roasted garlic or cajun compound butter; served with roasted garlic olive oil mashed potatoes and asparagus" },
      { name: "Surf and Turf", description: "experience our chef's personality and flavor profiles through his daily adventure with fresh proteins and seasonally inspired seafood — refer to our specials menu" },
    ],
  },
];

const sectionTabLabels: Record<string, string> = {
  appetizers: "Appetizers",
  salads: "Soup & Salad",
  pasta: "Pasta",
  seafood: "Seafood",
  chicken: "Chicken",
  veal: "Veal",
  steaks: "Steaks",
};

export default function Menu() {
  const [activeSection, setActiveSection] = useState("appetizers");
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Scroll active section tab into view on mobile
  useEffect(() => {
    const bar = tabBarRef.current;
    if (!bar) return;
    const btn = bar.querySelector(`[data-tab="${activeSection}"]`) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeSection]);

  const currentSection = menuData.find((s) => s.id === activeSection)!;

  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <NavigationA />

      {/* ─── PAGE HEADER ─── */}
      <div style={{
        paddingTop: "7rem",
        paddingBottom: "0",
        textAlign: "center",
        background: "var(--charcoal)",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "0.5rem",
        }}>
          Francesca's Cucina · Syracuse, New York
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ivory)",
          margin: 0,
          lineHeight: 1,
        }}>
          Dinner Menu
        </h1>

        {/* ─── WINE LIST / DINNER MENU TOP TABS ─── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          marginTop: "2rem",
          borderBottom: "1px solid rgba(200,169,110,0.2)",
        }}>
          {/* Wine List tab — links to wine list page */}
          <Link
            href="/wine-list"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              padding: "1rem 1.5rem",
              borderBottom: "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
          >
            Wine List
          </Link>

          {/* Divider */}
          <span style={{ color: "rgba(200,169,110,0.4)", fontSize: "1rem", padding: "0 0.25rem", lineHeight: 1 }}>|</span>

          {/* Dinner Menu tab — active */}
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--gold)",
            padding: "1rem 1.5rem",
            borderBottom: "2px solid var(--gold)",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}>
            Dinner Menu
          </span>
        </div>

        {/* Download button */}
        <div style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          <a
            href="/manus-storage/francescas_dinner_menu_b87ebbe7.pdf"
            download="Francescas_Dinner_Menu.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              background: "var(--gold)",
              border: "none",
              padding: "0.75rem 1.75rem",
              cursor: "pointer",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Menu
          </a>
        </div>
      </div>

      {/* ─── STICKY SECTION TAB BAR ─── */}
      <div
        ref={tabBarRef}
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 40,
          background: "var(--charcoal)",
          borderBottom: "1px solid rgba(200,169,110,0.2)",
          overflowX: "auto",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          display: "flex",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        <div style={{ display: "flex", gap: 0, minWidth: "max-content" }}>
          {menuData.map((section) => (
            <button
              key={section.id}
              data-tab={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: activeSection === section.id ? 600 : 400,
                color: activeSection === section.id ? "var(--gold)" : "rgba(255,255,255,0.45)",
                background: "none",
                border: "none",
                borderBottom: activeSection === section.id ? "2px solid var(--gold)" : "2px solid transparent",
                padding: "1rem 1.25rem",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {sectionTabLabels[section.id]}
            </button>
          ))}
        </div>
      </div>

      {/* ─── MENU CARD ─── */}
      <div style={{
        maxWidth: "820px",
        margin: "2rem auto 5rem",
        padding: "0 1.5rem",
      }}>
        <div style={{
          background: "#faf8f3",
          border: "2px solid #c8a96e",
          padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 5rem)",
          position: "relative",
        }}>
          {/* Inner decorative border */}
          <div style={{
            position: "absolute",
            inset: "10px",
            border: "1px solid rgba(139,100,45,0.25)",
            pointerEvents: "none",
          }} />

          {/* Active section */}
          <div id={currentSection.id}>
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <h2 style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                margin: 0,
                lineHeight: 1,
              }}>
                {currentSection.title}
              </h2>
              {currentSection.subtitle && (
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "#6b5a3e",
                  margin: "0.3rem 0 0",
                  letterSpacing: "0.03em",
                }}>
                  {currentSection.subtitle}
                </p>
              )}
            </div>

            {/* Divider */}
            <div style={{
              width: "60px",
              height: "1px",
              background: "#c8a96e",
              margin: "1rem auto 1.75rem",
            }} />

            {/* Items */}
            <div>
              {currentSection.items.map((item, iIdx) => (
                <div key={iIdx} style={{
                  textAlign: "center",
                  marginBottom: item.description || item.note ? "1.75rem" : "1.1rem",
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                    color: "#1a1a1a",
                    margin: 0,
                    lineHeight: 1.3,
                    letterSpacing: "0.01em",
                  }}>
                    {item.name}
                    {item.price && (
                      <span style={{ fontWeight: 400, color: "#5a4a30" }}>
                        {" "}•{" "}${item.price}
                      </span>
                    )}
                  </p>
                  {item.description && (
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#7a6a55",
                      margin: "0.3rem 0 0",
                      lineHeight: 1.5,
                      maxWidth: "480px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}>
                      {item.description}
                    </p>
                  )}
                  {item.note && (
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontStyle: "italic",
                      fontSize: "0.75rem",
                      color: "#9a8a75",
                      margin: "0.5rem 0 0",
                      lineHeight: 1.5,
                      maxWidth: "480px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}>
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div style={{
            borderTop: "1px solid rgba(139,100,45,0.25)",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "#9a8a75",
              lineHeight: 1.7,
              margin: 0,
            }}>
              Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.<br />
              Please inform your server of any food allergies. Menu items and prices subject to change.
            </p>
          </div>
        </div>

        {/* Wine list CTA */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>
            Explore Our Cellar
          </p>
          <Link
            href="/wine-list"
            className="btn-outline-ivory"
          >
            View Wine List
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
