/*
 * MENU PAGE — Sunny's Miami Style
 * Design: White/cream menu card on dark hunter green background with polka-dot texture
 * Typography: Big Shoulders Display for section headers (all-caps condensed),
 *             Cormorant Garamond italic for item names (elegant script feel),
 *             DM Sans for descriptions
 * Layout: Centered single-column, no photos, purely typographic
 * Colors: White card, dark charcoal text, hunter green outer bg
 */

import NavigationB from "@/components/NavigationB";
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
      { name: "Utica-Style Greens", description: "escarole, prosciutto, hot peppers, toasted breadcrumbs and romano" },
      { name: "Stuffed Hot Cherry Peppers", description: "signature meatball mix baked with marinara and romano cheese" },
      { name: "Hey Meatball!", description: "three stuffed meatballs, three-cheese blend, roasted red peppers, marinara, caramelized onions, grated cheese" },
      { name: "Goat Cheese Fritter", description: "fritti, battered fresh goat cheese, garlic crostini, fra diavolo sauce" },
      { name: "Calabrian Ribs", description: "baby back ribs, calabrian chili rub, buttermilk polenta, fennel, gorgonzola slaw" },
      { name: "Seafood Utica Greens", description: "roquette, grated carrots, cucumbers, sunflower seeds and balsamic dressing" },
      { name: "Fried Calamari", description: "lightly breaded, perfectly fried with marinara dipping sauce" },
      { name: "Arancini Rice Balls", description: "arborio rice, mozzarella, provolone, spicy italian sausage, roasted peppers, basil, shaved parmesan" },
      { name: "Bacon-Wrapped Sea Scallops", description: "five jumbo sea scallops, dijon-horseradish aioli" },
      { name: "Bang Bang Calamari", description: "lightly breaded, perfectly fried, sweet & spicy bang bang sauce" },
    ],
  },
  {
    id: "salads",
    title: "Zuppi & Insalata",
    subtitle: "Soup & Salad",
    items: [
      { name: "Italian Wedding Soup" },
      { name: "Tuscan Greens & Beans" },
      { name: "Caesar Side Salad" },
      { name: "House Salad" },
      { name: "Iceberg Salad Wedge", description: "steakhouse favorite: baby iceberg, tomatoes, red onions, bacon, creamy and crumbly bleu cheese" },
      { name: "Heirloom Tomato & Burrata", description: "marinated heirloom cherry tomato, imported burrata cheese, fresh basil, extra-virgin olive oil, balsamic drizzle" },
      { name: "Pecan Salmon Salad", description: "pecan-crusted Canadian salmon, mixed greens, whole milk goat cheese, roasted beets, granny smith apple, candied pecans, white balsamic vinaigrette" },
    ],
  },
  {
    id: "pasta",
    title: "Francesca's Favorites",
    subtitle: "Delectable Pastas — served with a bowl of soup or house salad",
    items: [
      { name: "Eggplant Rollatini", description: "lightly breaded eggplant, seasoned ricotta, melted mozzarella, side of linguini marinara" },
      { name: "Gemelli Angeloro", description: "twin pasta, grilled chicken, utica greens, prosciutto, extra-virgin garlic olive oil, toasted breadcrumbs, romano cheese, splash of tomato ragu" },
      { name: "Gluten-Free Penne", description: "grilled chicken, prosciutto, artichokes, spinach, sun-dried tomato, goat cheese cream sauce" },
      { name: "Fettuccine Alfredo", description: "creamy sauce, ribbon pasta — also available with grilled chicken or sautéed shrimp" },
      { name: "Baked Cavatelli", description: "housemade cavatelli, hot Italian sausage, rapini, grated locatelli, roasted garlic sauce" },
      { name: "Uncle Paulie's Bolognese", description: "gemelli pasta, braised veal, beef, pork, carrots, rustic tomato Barolo wine sauce" },
      { name: "Linguine White Clam Sauce", description: "fresh littlenecks, garlic, white wine" },
      { name: "Chicken Riggies", description: "peppers, onions, spicy pink sauce (mild, medium, hot)" },
      { name: "Seafood Riggies", description: "bay scallops, baby shrimp, spicy pink sauce (mild, medium, hot)" },
      { name: "Gnocchi Gorgonzola", description: "aged Italian gorgonzola cream sauce, toasted walnuts, fresh basil" },
      { name: "Lobster-Stuffed Cheese Ravioli", description: "fresh Maine lobster, pink vodka sauce" },
      { name: "Homemade Gnocchi Marinara *" },
      { name: "Cheese Ravioli Marinara *" },
      { name: "Pink Vodka Cheese Ravioli *" },
      { name: "Pink Vodka Gnocchi *", note: "* grilled chicken or sautéed shrimp also available for any of our homemade gnocchi or ravioli dishes" },
    ],
  },
  {
    id: "seafood",
    title: "Pesci",
    subtitle: "Seafood",
    items: [
      { name: "Salmon Fillet", description: "broiled Canadian salmon with savory Italian herb crust, finished with a lemon-chive butter sauce, served over saffron-flavored risotto and grilled asparagus" },
      { name: "Crab-Stuffed Salmon", description: "oven-roasted Canadian salmon stuffed with jumbo lump crabmeat, finished with a shrimp and lobster chive velouté, served over saffron-flavored risotto and grilled asparagus" },
      { name: "Shrimp with Polenta", description: "colossal shrimp, crispy pancetta, spinach, cherry tomatoes and pearl onions sautéed in a garlic pomodoro with an alfredo drizzle; served over a creamy polenta" },
      { name: "Cioppino", description: "'The San-Fran Favorite' — an Italian stew of clams, mussels, calamari, shrimp, scallops, and fresh fish simmered with garlic, fennel, and shallots in a white wine, fumet and tomato broth, served with garlic crostini over linguine" },
      { name: "Salmon and Broccolini", description: "oven-roasted Canadian salmon, broccolini and blistered heirloom cherry tomatoes tossed in a light parmesan and tarragon lemon cream sauce, served over housemade pappardelle" },
      { name: "Scallops", description: "experience our chef's personality and flavor with his daily adventure" },
    ],
  },
  {
    id: "chicken",
    title: "Pollame",
    subtitle: "Chicken",
    items: [
      { name: "Chicken Parmesan", description: "a classic chicken dish prepared au gratin with fresh whole milk mozzarella" },
      { name: "Grilled Chicken Parmesan", description: "grilled chicken prepared au gratin with fresh whole milk mozzarella and house marinara over rigatoni" },
      { name: "Chicken MVP", description: "\"Matty D's Vodka Parm\" — breaded chicken prepared au gratin with fresh whole milk mozzarella, house vodka sauce and finished with a pesto drizzle; served over rigatoni" },
      { name: "Chicken Française", description: "egg-battered chicken cutlets sautéed with white wine, lemon and butter, served over linguine" },
      { name: "Chicken Marsala", description: "tender chicken breast sautéed with shallots, garlic, and wild mushrooms in a sweet Marsala wine reduction, served over linguine" },
      { name: "Chicken Capricciosa", description: "breaded chicken cutlet topped with shaved parmesan, a lemon dressed tomato and ciliegine arugula salad; served with a red pepper aioli" },
    ],
  },
  {
    id: "veal",
    title: "Vitello",
    subtitle: "Veal",
    items: [
      { name: "Veal Parmesan", description: "14oz bone-in veal chop pounded au gratin with fresh whole milk mozzarella and house made marinara over chef's choice pasta" },
      { name: "Veal Capricciosa", description: "breaded veal cutlet topped with shaved parmesan, a lemon dressed tomato and ciliegine arugula salad; served with a red pepper aioli" },
    ],
  },
  {
    id: "steaks",
    title: "Carne",
    subtitle: "Steaks",
    items: [
      { name: "Filet Gorgonzola", description: "two Angus Reserve medallions layered with Utica greens over gemelli pasta tossed in aged Italian gorgonzola cream sauce" },
      { name: "Filet Mignon", description: "'King of Steaks' — 8oz center-cut Angus Reserve filet, seasoned and grilled to perfection, served with smoked gouda au gratin mash and seasonal vegetables" },
      { name: "New York Strip", description: "16oz bone-in strip steak, aged for a minimum of 30 days for peak flavor, topped with choice of herb-roasted garlic or cajun compound butter, served with smoked gouda au gratin mashed potatoes and seasonal vegetables" },
      { name: "The Delmonico", description: "our 16oz bone-in cowboy Angus Reserve ribeye, well-marbled, seasoned and chargrilled, topped with your choice of herb-roasted or cajun compound butter, served with smoked gouda au gratin mash and seasonal vegetables" },
      { name: "Surf and Turf", description: "experience our chef's personality and flavor profiles through his daily adventure with fresh proteins and seasonally inspired seafood — refer to our specials menu" },
    ],
  },
];

export default function Menu() {
  return (
    <div style={{ background: "var(--hunter-green)", minHeight: "100vh" }}>
      <NavigationB />

      {/* ─── PAGE HEADER ─── */}
      <div style={{
        paddingTop: "7rem",
        paddingBottom: "2rem",
        textAlign: "center",
        background: "var(--hunter-green)",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "var(--sage)",
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
          color: "var(--cream)",
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
            color: "var(--sage)",
            marginBottom: "1rem",
          }}>
            Explore Our Cellar
          </p>
          <a
            href="https://francescas.securetree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green-pill"
          >
            🍷 Wine List
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
