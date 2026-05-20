/*
 * MENU PAGE — Sunny's Miami Style
 * Design: White/cream menu card on dark hunter green background with polka-dot texture
 * Typography: Big Shoulders Display for section headers (all-caps condensed),
 *             Cormorant Garamond italic for item names (elegant script feel),
 *             DM Sans for descriptions
 * Layout: Centered single-column, no photos, purely typographic
 * Colors: White card, dark charcoal text, hunter green outer bg
 */

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
      { name: "Utica-Style Greens", description: "escarole, prosciutto, hot peppers, toasted breadcrumbs, romano cheese" },
      { name: "Bang Bang Calamari", description: "lightly breaded, perfectly fried, sweet & sour bang bang sauce" },
      { name: "Stuffed Hot Cherry Peppers", description: "signature meatball mix, marinara sauce, romano cheese" },
      { name: "Mozz alla Vodka", description: "lightly breaded, perfectly fried fresh mozzarella, vodka sauce" },
      { name: "Bacon-Wrapped Sea Scallops", description: "five jumbo sea scallops, horseradish-dijon aioli" },
      { name: "We've Got Moxie Goat Cheese Fritter", description: "fritti, breaded fresh goat cheese, garlic crostini, fra diavolo sauce" },
      { name: "Hey Meatball!", description: "three stuffed meatballs, three-cheese blend, roasted red peppers, caramelized onions, marinara sauce, romano cheese" },
      { name: "Arancini Rice Balls", description: "arborio rice, mozzarella, provolone, hot italian sausage, roasted peppers, basil, shaved parmesan" },
      { name: "Calamari", description: "lightly breaded, perfectly fried, marinara dipping sauce" },
    ],
  },
  {
    id: "salads",
    title: "Zuppi & Insalata",
    subtitle: "Soup & Salad",
    items: [
      { name: "Italian Wedding Soup" },
      { name: "Tuscan Greens & Beans" },
      { name: "Side Caesar Salad" },
      { name: "House Salad" },
      { name: "Iceberg Salad Wedge", description: "steakhouse favorite — baby iceberg, tomatoes, red onions, bacon, creamy and crumbly blue cheese" },
      { name: "Heirloom Tomato & Burrata", description: "marinated heirloom cherry tomato, imported burrata, fresh basil, extra-virgin olive oil, balsamic drizzle" },
      { name: "Pecan Salmon Salad", description: "pecan-crusted Canadian salmon, mixed greens, goat cheese, roasted beets, granny smith apples, candied pecans, white balsamic vinaigrette" },
    ],
  },
  {
    id: "pasta",
    title: "Francesca's Favorites",
    subtitle: "Served with a bowl of soup or house salad",
    items: [
      { name: "Cheese Ravioli", description: "seasoned ricotta, fresh pasta rotolo — available marinara, pink vodka" },
      { name: "Lobster Ravioli", description: "fresh pasta, Maine lobster, pink vodka sauce" },
      { name: "Wagyu Beef Ravioli", description: "cognac-braised wagyu beef short rib, black truffle porcini mushrooms, fresh egg pasta" },
      { name: "Lasagna", description: "fresh egg pasta, sausage bolognese, seasoned ricotta, mozzarella, marinara" },
      { name: "Eggplant Parmesan", description: "crispy fried & breaded eggplant layers, marinara, mozzarella, seasoned ricotta, side of fettuccine" },
      { name: "Gemelli Angeloro", description: "twin pasta, grilled chicken, Francesca's utica greens, prosciutto, extra-virgin garlic olive oil, toasted breadcrumbs, romano cheese, splash of tomato ragu" },
      { name: "Gluten-Free Penne", description: "grilled chicken, prosciutto, artichokes, spinach, sun-dried tomato, goat cheese cream sauce" },
      { name: "Fettuccine Alfredo", description: "creamy alfredo sauce, ribboned fettuccine pasta — add grilled chicken or sautéed shrimp" },
      { name: "Linguine White Clam Sauce", description: "fresh littleneck clams, garlic, white wine, fresh herbs" },
      { name: "Chicken Riggies", description: "peppers, onions, spicy pink sauce — mild, medium, or hot" },
      { name: "Seafood Riggies", description: "bay scallops, baby shrimp, spicy pink sauce — mild, medium, or hot" },
      { name: "Bolognese", description: "Uncle Paulie's famous buccatini pasta, braised veal, beef, pork, carrots, rustic tomato barolo wine sauce" },
      { name: "Homemade Gnocchi Gorgonzola", description: "aged Italian gorgonzola cream sauce, toasted walnuts, fresh basil" },
      { name: "Homemade Gnocchi", description: "available marinara or pink vodka — add grilled chicken or sautéed shrimp" },
    ],
  },
  {
    id: "seafood",
    title: "Pesci",
    subtitle: "Seafood",
    items: [
      { name: "Salmon Fillet", description: "Faroe Island salmon pan-roasted in a garlic, white wine, and rosemary butter sauce; served with crispy Italian herb potatoes and garlic sautéed broccolini" },
      { name: "Cioppino", description: "The San Francisco Favorite — an Italian stew of clams, mussels, calamari, shrimp, scallops, and fresh fish simmered with garlic, fennel and shallots in a white wine, fumet and tomato broth; served with garlic crostini over linguine" },
      { name: "Lobster Carbonara", description: "succulent lobster served over housemade buccatini in an egg yolk emulsion, with blistered tomatoes sautéed in white wine and garlic; finished with Italian basil pesto and served tableside" },
      { name: "Shrimp Scampi", description: "housemade cavatelli tossed with sweet Argentine red shrimp in a roasted garlic, white wine and lemon butter scampi sauce" },
      { name: "Scallops", description: "experience our chef's personality and flavors through his daily adventure — refer to special menu" },
    ],
  },
  {
    id: "chicken",
    title: "Pollame",
    subtitle: "Chicken",
    items: [
      { name: "Chicken MVP", description: "\"Matty D's Vodka Parm\" — chicken prepared au gratin with fresh whole milk mozzarella and house vodka sauce, finished with a pesto drizzle; served over rigatoni" },
      { name: "Chicken Parmesan", description: "a classic chicken dish prepared au gratin with fresh whole milk mozzarella and house marinara; served over rigatoni" },
      { name: "Grilled Chicken Parmesan", description: "grilled chicken prepared au gratin with fresh whole milk mozzarella and house marinara; served over rigatoni" },
      { name: "Chicken Française", description: "egg-battered chicken cutlets sautéed with white wine, lemon and butter; served over linguine" },
      { name: "Chicken Marsala", description: "tender chicken breast sautéed with shallots, garlic, and wild mushrooms in a sweet marsala wine reduction; served over linguine" },
    ],
  },
  {
    id: "veal",
    title: "Vitello",
    subtitle: "Veal",
    items: [
      { name: "Veal Parmesan", description: "14oz bone-in veal chop prepared au gratin with fresh whole milk mozzarella and house marinara; served over chef's choice of housemade pasta" },
      { name: "Veal Antonio", description: "14oz bone-in veal chop smothered in vodka sauce, topped with fresh mozzarella, parmesan reggiano and layered crispy prosciutto; served with a side of fettuccine alla vodka" },
    ],
  },
  {
    id: "steaks",
    title: "Carne",
    subtitle: "Steaks — add broiled lobster tail at market price",
    items: [
      { name: "Filet Gorgonzola", description: "two USDA Prime filet medallions layered with Francesca's utica greens; served over gemelli pasta tossed in an aged Italian gorgonzola cream sauce" },
      { name: "Filet Mignon", description: "\"King of Steaks\" — 8oz center-cut USDA Prime filet, seasoned and grilled to perfection; served with roasted garlic olive oil mashed potatoes and asparagus" },
      { name: "NY Strip", description: "\"Kansas City\" — 16oz bone-in USDA Prime strip aged a minimum of 30 days for peak flavor; topped with choice of herb roasted garlic or cajun compound butter; served with roasted garlic olive oil mashed potatoes and asparagus" },
      { name: "Delmonico", description: "\"Cowboy Ribeye\" — 16oz bone-in USDA Prime seasoned and chargrilled; topped with choice of herb roasted garlic or cajun compound butter; served with roasted garlic olive oil mashed potatoes and asparagus" },
      { name: "Surf and Turf", description: "experience our chef's personality and flavors through his daily adventure with fresh proteins and seasonally inspired seafood — refer to special menu" },
    ],
  },
];

export default function Menu() {
  return (
    <div style={{ background: "var(--charcoal)", minHeight: "100vh" }}>
      <NavigationA />

      {/* ─── PAGE HEADER ─── */}
      <div style={{
        paddingTop: "7rem",
        paddingBottom: "2rem",
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
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ivory)",
          margin: 0,
          lineHeight: 1,
        }}>
          Dinner Menu
        </h1>
      </div>

      {/* ─── MENU CARD ─── */}
      <div style={{
        maxWidth: "820px",
        margin: "0 auto 5rem",
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

          {/* Menu sections */}
          {menuData.map((section, sIdx) => (
            <div key={section.id} id={section.id} style={{ marginBottom: sIdx < menuData.length - 1 ? "3.5rem" : 0 }}>

              {/* Section header */}
              <div style={{ textAlign: "center", marginBottom: "0.4rem" }}>
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
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "#6b5a3e",
                    margin: "0.3rem 0 0",
                    letterSpacing: "0.03em",
                  }}>
                    {section.subtitle}
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
                {section.items.map((item, iIdx) => (
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
          ))}

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
          <a
            href="/wine-list"
            className="btn-outline-ivory"
          >
            Wine List
          </a>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          #root .menu-card-inner { padding: 2rem 1.25rem !important; }
        }
      `}</style>
    </div>
  );
}
