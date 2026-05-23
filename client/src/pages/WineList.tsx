/**
 * WINE LIST PAGE — matches Menu page exactly
 * Card: cream #faf8f3, gold border, inner decorative border
 * Typography: Big Shoulders Display (section headers), Cormorant Garamond italic (wine names), DM Sans (regions/prices)
 * Layout: Centered single-column card, sticky tab nav, same as Menu
 */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

interface WineItem {
  name: string;
  region?: string;
  price?: string;
  note?: string;
}

interface WineSection {
  id: string;
  title: string;
  subtitle?: string;
  items: WineItem[];
}

const wineData: WineSection[] = [
  {
    id: "red-glass",
    title: "Rossi al Bicchiere",
    subtitle: "Red Wines by the Glass",
    items: [
      { name: "Cabernet Sauvignon, Fetzer", region: "California", price: "8.99" },
      { name: "Cabernet Sauvignon, Sterling", region: "California", price: "9.50" },
      { name: "Cabernet Sauvignon, Josh Cellars", region: "California", price: "9.99" },
      { name: "Pinot Noir, Prophecy", region: "California", price: "8.99" },
      { name: "Pinot Noir, Mark West Black", region: "California", price: "9.99" },
      { name: "Merlot, La Terre", region: "California", price: "8.99" },
      { name: "Red Blend, 14 Hands", region: "Washington", price: "8.99" },
      { name: "Chianti, Ruffino", region: "Italy", price: "9.50" },
      { name: "Montepulciano, Gio Barba", region: "Italy", price: "9.50" },
      { name: "Malbec, Terrazas de los Andes Reserva", region: "Argentina", price: "9.99" },
      { name: "Super Tuscan, Poggio Alla Guardia", region: "Italy", price: "9.99" },
    ],
  },
  {
    id: "red-bottle",
    title: "Rossi in Bottiglia",
    subtitle: "Red Wines by the Bottle",
    items: [
      // Italian Reds
      { name: "Montepulciano, Gio Barba", region: "Abruzzo, Italy", price: "37.99" },
      { name: "Montepulciano, Nevio", region: "Abruzzo, Italy", price: "42.99" },
      { name: 'Valpolicella Classico, Masi "Bonacosta"', region: "Veneto, Italy", price: "45.99" },
      { name: 'Ripasso Baby Amarone, Sartori "Regolo"', region: "Veneto, Italy", price: "49.99" },
      { name: 'Baby Amarone, Masi "Campofiorin"', region: "Veneto, Italy", price: "55.99" },
      { name: "Amarone della Valpolicella, Sartori Amarone", region: "Veneto, Italy", price: "75.99" },
      { name: 'Amarone Classico, Masi "Costasera"', region: "Veneto, Italy", price: "79.99" },
      { name: "Barolo, Michele Chiarlo", region: "Piedmont, Italy", price: "109.99" },
      { name: 'Barolo, Marchesi di Luigi Finaldi "Cannubi"', region: "Piedmont, Italy", price: "149.99" },
      { name: 'Chianti Classico, Antinori "Peppoli"', region: "Tuscany, Italy", price: "47.99" },
      { name: "Chianti Classico Riserva, Castello Banfi", region: "Tuscany, Italy", price: "49.99" },
      { name: 'Chianti Classico Riserva, Ruffino "Ducale" Tan', region: "Tuscany, Italy", price: "52.99" },
      { name: "Chianti Classico Riserva Gold Label, Ruffino", region: "Tuscany, Italy", price: "69.99" },
      { name: "Super Tuscan, Poggio Alla Guardia", region: "Tuscany, Italy", price: "39.99" },
      { name: "Super Tuscan, Villa Antinori", region: "Tuscany, Italy", price: "45.99" },
      { name: "Super Tuscan, Modus Ruffino", region: "Tuscany, Italy", price: "49.99" },
      { name: "Super Tuscan, Castello Banfi, Belnero Proprietor's Reserve", region: "Tuscany, Italy", price: "55.99" },
      { name: "Super Tuscan, Castello Banfi, Toscana Cum Laude", region: "Tuscany, Italy", price: "59.99" },
      { name: "Super Tuscan, GAJA, Ca'Marcanda Promis", region: "Tuscany, Italy", price: "65.99" },
      { name: 'Sangiovese, Antinori "Santa Cristina"', region: "Tuscany, Italy", price: "45.99" },
      { name: 'Sangiovese, Banfi, Rosso di Montalcino "Baby Brunello"', region: "Tuscany, Italy", price: "59.99" },
      { name: "Sangiovese, Castello Banfi, Brunello di Montalcino", region: "Tuscany, Italy", price: "99.99" },
      // Pinot Noir
      { name: "Prophecy", region: "California", price: "35.99" },
      { name: "Mark West Black", region: "California", price: "39.99" },
      { name: "Elouan", region: "Oregon", price: "42.99" },
      { name: "Cambria Julias Vineyard", region: "California", price: "45.99" },
      { name: "La Crema", region: "California", price: "47.99" },
      { name: "Meiomi", region: "California", price: "49.99" },
      { name: "The Prisoner", region: "Napa Valley", price: "59.99" },
      // Merlot
      { name: "Napa Cellars", region: "Napa Valley", price: "42.99" },
      { name: 'Francis Ford Coppola "Diamond"', region: "California", price: "45.99" },
      // Malbec
      { name: "Terrazas de los Andes Reserva", region: "Argentina", price: "39.99" },
      { name: "Trivento Golden Reserve", region: "Argentina", price: "49.99" },
      // Red Blend
      { name: "14 Hands", region: "Washington", price: "36.99" },
      { name: "Cooper & Thief, Bourbon Barrel Aged", region: "California", price: "55.99" },
      { name: "Orin Swift Abstract", region: "California", price: "59.99" },
      // Zinfandel
      { name: "Cigar Zin, Bourbon Aged Barrel", region: "California", price: "39.99" },
      { name: "St. Francis Old Vine", region: "Sonoma", price: "49.99" },
      // Cabernet Sauvignon
      { name: "Sterling", region: "California", price: "37.99" },
      { name: "Josh Cellars", region: "California", price: "39.99" },
      { name: 'Francis Ford Coppola "Diamond"', region: "California", price: "45.99" },
      { name: "Beringer, Region Estate Series", region: "Knights Valley", price: "55.99" },
      { name: "Honig", region: "Napa Valley", price: "79.99" },
      { name: "Groth", region: "Napa Valley", price: "85.99" },
      { name: "Orin Swift Papillon", region: "Napa Valley", price: "89.99" },
      { name: "Stag's Leap Artemis", region: "Napa Valley", price: "95.99" },
      { name: "Duckhorn", region: "Napa Valley", price: "99.99" },
      { name: "Cakebread", region: "Napa Valley", price: "109.99" },
      { name: "Caymus", region: "Napa Valley", price: "129.99" },
      { name: "Far Niente", region: "Napa Valley", price: "149.99" },
      { name: "Silver Oak", region: "Napa Valley", price: "249.99" },
      { name: "Stag's Leap Cask 23", region: "Napa Valley", price: "299.99", note: "Limited Availability" },
      { name: "Opus One", region: "Napa Valley", price: "399.99", note: "Limited Availability" },
    ],
  },
  {
    id: "white-glass",
    title: "Bianchi al Bicchiere",
    subtitle: "White Wines by the Glass",
    items: [
      { name: "Chardonnay, Coastal Ridge", region: "California", price: "8.50" },
      { name: "Chardonnay, Kendall-Jackson", region: "California", price: "9.50" },
      { name: "Chardonnay, Simi", region: "Sonoma", price: "9.99" },
      { name: "Pinot Grigio, Placido", region: "Italy", price: "8.50" },
      { name: "Pinot Grigio, Ecco Domani", region: "Italy", price: "9.50" },
      { name: "Sauvignon Blanc, Santa Rita 120", region: "Chile", price: "8.50" },
      { name: "Sauvignon Blanc, Kim Crawford", region: "New Zealand", price: "9.50" },
      { name: "Riesling, Pacific Rim", region: "Washington", price: "8.50" },
      { name: "Riesling, Dr. Konstantin Frank", region: "New York", price: "9.50" },
      { name: "Rose, Natura (Organic)", region: "Chile", price: "8.50" },
      { name: "Rose, Aime Roquesante", region: "France", price: "9.50" },
      { name: "Moscato, Roscato", region: "Italy", price: "8.99" },
      { name: "Prosecco, Martini & Rossi Asti", region: "Italy", price: "8.50" },
      { name: "Sparkling Rose, Ruffino", region: "Italy", price: "8.99" },
    ],
  },
  {
    id: "white-bottle",
    title: "Bianchi in Bottiglia",
    subtitle: "White Wines by the Bottle",
    items: [
      // Chardonnay
      { name: "Kendall Jackson", region: "California", price: "37.99" },
      { name: "Simi", region: "Sonoma", price: "39.99" },
      { name: "Angeline, Angeline Vineyards", region: "California", price: "39.99" },
      { name: "Cambria, Katherine's Vineyard", region: "Santa Barbara", price: "42.99" },
      { name: "Antinori Bramito", region: "Italy", price: "45.99" },
      { name: "Girard Carneros", region: "Sonoma", price: "47.99" },
      { name: "Robert Mondavi Private Selection", region: "California", price: "49.99" },
      { name: "Cakebread Cellars", region: "Napa Valley", price: "59.99" },
      // Pinot Grigio
      { name: "Ecco Domani della Venezie", region: "Veneto, Italy", price: "37.99" },
      { name: "DaVinci", region: "Veneto, Italy", price: "39.99" },
      { name: "Antinori, Santa Cristina", region: "Tuscany, Italy", price: "42.99" },
      { name: "Ruffino, Aqua di Venus", region: "Tuscany, Italy", price: "45.99" },
      { name: "Sartori, Love Story", region: "Veneto, Italy", price: "47.99" },
      { name: "Castello Banfi, San Angelo", region: "Tuscany, Italy", price: "49.99" },
      { name: "Santa Margherita", region: "Alto Adige, Italy", price: "54.99" },
      // Sauvignon Blanc
      { name: "Santa Rita 120", region: "Chile", price: "33.99" },
      { name: "Brancott Estate", region: "New Zealand", price: "35.99" },
      { name: "Kim Crawford", region: "New Zealand", price: "37.99" },
      { name: "Matua", region: "New Zealand", price: "39.99" },
      { name: "St. Francis", region: "Sonoma", price: "42.99" },
      { name: "Whitehaven", region: "New Zealand", price: "45.99" },
      { name: "Cloudy Bay", region: "New Zealand", price: "49.99" },
      // Riesling
      { name: "Pacific Rim", region: "Washington", price: "33.99" },
      { name: "Chateau Ste. Michelle", region: "Washington", price: "35.99" },
      { name: "Dr. Konstantin Frank, Finger Lakes", region: "New York", price: "37.99" },
      { name: "Blufeld Medium Sweet", region: "Germany", price: "39.99" },
      { name: "Thomas Schmitt, Kabinett Estate", region: "Germany", price: "49.99" },
      // Rose
      { name: "Natura (Organic)", region: "Chile", price: "33.99" },
      { name: "Aime Roquesante, Cotes de Provence", region: "France", price: "37.99" },
      { name: "Maison Nicolas Pinot Noir Rose", region: "France", price: "39.99" },
      // Sparkling
      { name: "Santa Margherita Prosecco", region: "Italy", price: "36.99" },
      { name: "Candoni Prosecco Brut", region: "Italy", price: "39.99" },
      { name: "Martini & Rossi Asti Spumante", region: "Italy", price: "42.99" },
      { name: "Korbel Brut", region: "California", price: "45.99" },
      { name: "Veuve Cliquot Yellow Label Brut", region: "France", price: "99.99" },
      { name: "Dom Perignon", region: "France", price: "299.99" },
    ],
  },
];

const tabLabels: Record<string, string> = {
  "red-glass": "Red by Glass",
  "red-bottle": "Red by Bottle",
  "white-glass": "White by Glass",
  "white-bottle": "White by Bottle",
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function WineList() {
  const [activeTab, setActiveTab] = useState("red-glass");
  const tabBarRef = useRef<HTMLDivElement>(null);

  const activeSection = wineData.find((s) => s.id === activeTab)!;

  // Scroll active tab button into view on mobile
  useEffect(() => {
    const bar = tabBarRef.current;
    if (!bar) return;
    const btn = bar.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeTab]);

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
          Wine List
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
          {/* Dinner Menu tab — links to menu page */}
          <Link
            href="/menu"
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
            Dinner Menu
          </Link>

          {/* Divider */}
          <span style={{ color: "rgba(200,169,110,0.4)", fontSize: "1rem", padding: "0 0.25rem", lineHeight: 1 }}>|</span>

          {/* Wine List tab — active */}
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
            Wine List
          </span>
        </div>
      </div>

      {/* ─── STICKY TAB NAV ─── */}
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
          padding: "0",
        }}
      >
        <div style={{ display: "flex", gap: 0, minWidth: "max-content", padding: "0 1rem" }}>
          {wineData.map((section) => (
            <button
              key={section.id}
              data-tab={section.id}
              onClick={() => setActiveTab(section.id)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: activeTab === section.id ? 600 : 400,
                color: activeTab === section.id ? "var(--gold)" : "rgba(255,255,255,0.45)",
                background: "none",
                border: "none",
                borderBottom: activeTab === section.id ? "2px solid var(--gold)" : "2px solid transparent",
                padding: "1rem 1.25rem",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {tabLabels[section.id]}
            </button>
          ))}
        </div>
      </div>

      {/* ─── WINE CARD ─── */}
      <div style={{
        maxWidth: "820px",
        margin: "0 auto 5rem",
        padding: "2rem 1.5rem",
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
              {activeSection.title}
            </h2>
            {activeSection.subtitle && (
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "#6b5a3e",
                margin: "0.3rem 0 0",
                letterSpacing: "0.03em",
              }}>
                {activeSection.subtitle}
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

          {/* Wine items */}
          <div>
            {activeSection.items.map((item, i) => (
              <div key={i} style={{
                textAlign: "center",
                marginBottom: "1.4rem",
              }}>
                {/* Name + price on same line */}
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "clamp(1.05rem, 2.5vw, 1.2rem)",
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
                {/* Region */}
                {item.region && (
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "#7a6a55",
                    margin: "0.25rem 0 0",
                    lineHeight: 1.5,
                  }}>
                    {item.region}
                  </p>
                )}
                {/* Note (e.g. Limited Availability) */}
                {item.note && (
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontStyle: "italic",
                    fontSize: "0.72rem",
                    color: "#9a8a75",
                    margin: "0.2rem 0 0",
                    lineHeight: 1.5,
                  }}>
                    {item.note}
                  </p>
                )}
              </div>
            ))}
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
              Selections and prices subject to change. Please ask your server about current availability.
            </p>
          </div>
        </div>

        {/* Back to menu */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>
            Explore Our Kitchen
          </p>
          <a href="/menu" className="btn-outline-ivory">← Back to Menu</a>
        </div>
      </div>

      <Footer />

      <style>{`
        div[style*="scrollbarWidth"] ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
