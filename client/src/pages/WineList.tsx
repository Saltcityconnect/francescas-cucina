/**
 * WINE LIST PAGE — Dark Charcoal theme, matching Menu/Catering style
 */

import React from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

// ─── DATA ───────────────────────────────────────────────────────────────────

const redByGlass = [
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
];

type ItalianItem = { section: string } | { name: string; price: string };

const italianRed: ItalianItem[] = [
  { section: "Abruzzo" },
  { name: "Montepulciano, Gio Barba", price: "37.99" },
  { name: "Montepulciano, Nevio", price: "42.99" },
  { section: "Veneto" },
  { name: 'Valpolicella Classico, Masi "Bonacosta"', price: "45.99" },
  { name: 'Ripasso Baby Amarone, Sartori "Regolo"', price: "49.99" },
  { name: 'Baby Amarone, Masi "Campofiorin"', price: "55.99" },
  { name: "Amarone della Valpolicella, Sartori Amarone", price: "75.99" },
  { name: 'Amarone Classico, Masi "Costasera"', price: "79.99" },
  { section: "Piedmont" },
  { name: "Barolo, Michele Chiarlo", price: "109.99" },
  { name: 'Barolo, Marchesi di Luigi Finaldi "Cannubi"', price: "149.99" },
  { section: "Tuscany" },
  { name: 'Chianti Classico, Antinori "Peppoli"', price: "47.99" },
  { name: "Chianti Classico Riserva, Castello Banfi", price: "49.99" },
  { name: 'Chianti Classico Riserva, Ruffino "Ducale" Tan', price: "52.99" },
  { name: "Chianti Classico Riserva Gold Label, Ruffino", price: "69.99" },
  { name: "Super Tuscan, Poggio Alla Guardia", price: "39.99" },
  { name: "Super Tuscan, Villa Antinori", price: "45.99" },
  { name: "Super Tuscan, Modus Ruffino", price: "49.99" },
  { name: "Super Tuscan, Castello Banfi, Belnero Proprietor's Reserve", price: "55.99" },
  { name: "Super Tuscan, Castello Banfi, Toscana Cum Laude", price: "59.99" },
  { name: "Super Tuscan, GAJA, Ca'Marcanda Promis", price: "65.99" },
  { name: 'Sangiovese, Antinori "Santa Cristina"', price: "45.99" },
  { name: 'Sangiovese, Banfi, Rosso di Montalcino "Baby Brunello"', price: "59.99" },
  { name: "Sangiovese, Castello Banfi, Brunello di Montalcino", price: "99.99" },
];

const redByBottleVarietal = [
  {
    varietal: "Pinot Noir",
    wines: [
      { name: "Prophecy", region: "California", price: "35.99" },
      { name: "Mark West Black", region: "California", price: "39.99" },
      { name: "Elouan", region: "Oregon", price: "42.99" },
      { name: "Cambria Julias Vineyard", region: "California", price: "45.99" },
      { name: "La Crema", region: "California", price: "47.99" },
      { name: "Meiomi", region: "California", price: "49.99" },
      { name: "The Prisoner", region: "Napa Valley", price: "59.99" },
    ],
  },
  {
    varietal: "Merlot",
    wines: [
      { name: "Napa Cellars", region: "Napa Valley", price: "42.99" },
      { name: 'Francis Ford Coppola "Diamond"', region: "California", price: "45.99" },
    ],
  },
  {
    varietal: "Malbec",
    wines: [
      { name: "Terrazas de los Andes Reserva", region: "Argentina", price: "39.99" },
      { name: "Trivento Golden Reserve", region: "Argentina", price: "49.99" },
    ],
  },
  {
    varietal: "Red Blend",
    wines: [
      { name: "14 Hands", region: "Washington", price: "36.99" },
      { name: "Cooper & Thief, Bourbon Barrel Aged", region: "California", price: "55.99" },
      { name: "Orin Swift Abstract", region: "California", price: "59.99" },
    ],
  },
  {
    varietal: "Zinfandel",
    wines: [
      { name: "Cigar Zin, Bourbon Aged Barrel", region: "California", price: "39.99" },
      { name: "St. Francis Old Vine", region: "Sonoma", price: "49.99" },
    ],
  },
  {
    varietal: "Cabernet Sauvignon",
    wines: [
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
      { name: "Stag's Leap Cask 23 — Limited Availability", region: "Napa Valley", price: "299.99" },
      { name: "Opus One — Limited Availability", region: "Napa Valley", price: "399.99" },
    ],
  },
];

const whiteByGlass = [
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
];

const whiteByBottleVarietal = [
  {
    varietal: "Chardonnay",
    wines: [
      { name: "Kendall Jackson", region: "California", price: "37.99" },
      { name: "Simi", region: "Sonoma", price: "39.99" },
      { name: "Angeline, Angeline Vineyards", region: "California", price: "39.99" },
      { name: "Cambria, Katherine's Vineyard", region: "Santa Barbara", price: "42.99" },
      { name: "Antinori Bramito", region: "Italy", price: "45.99" },
      { name: "Girard Carneros", region: "Sonoma", price: "47.99" },
      { name: "Robert Mondavi Private Selection", region: "California", price: "49.99" },
      { name: "Cakebread Cellars", region: "Napa Valley", price: "59.99" },
    ],
  },
  {
    varietal: "Pinot Grigio",
    wines: [
      { name: "Ecco Domani della Venezie", region: "Veneto, Italy", price: "37.99" },
      { name: "DaVinci", region: "Veneto, Italy", price: "39.99" },
      { name: "Antinori, Santa Cristina", region: "Tuscany, Italy", price: "42.99" },
      { name: "Ruffino, Aqua di Venus", region: "Tuscany, Italy", price: "45.99" },
      { name: "Sartori, Love Story", region: "Veneto, Italy", price: "47.99" },
      { name: "Castello Banfi, San Angelo", region: "Tuscany, Italy", price: "49.99" },
      { name: "Santa Margherita", region: "Alto Adige, Italy", price: "54.99" },
    ],
  },
  {
    varietal: "Sauvignon Blanc",
    wines: [
      { name: "Santa Rita 120", region: "Chile", price: "33.99" },
      { name: "Brancott Estate", region: "New Zealand", price: "35.99" },
      { name: "Kim Crawford", region: "New Zealand", price: "37.99" },
      { name: "Matua", region: "New Zealand", price: "39.99" },
      { name: "St. Francis", region: "Sonoma", price: "42.99" },
      { name: "Whitehaven", region: "New Zealand", price: "45.99" },
      { name: "Cloudy Bay", region: "New Zealand", price: "49.99" },
    ],
  },
  {
    varietal: "Riesling",
    wines: [
      { name: "Pacific Rim", region: "Washington", price: "33.99" },
      { name: "Chateau Ste. Michelle", region: "Washington", price: "35.99" },
      { name: "Dr. Konstantin Frank, Finger Lakes", region: "New York", price: "37.99" },
      { name: "Blufeld Medium Sweet", region: "Germany", price: "39.99" },
      { name: "Thomas Schmitt, Kabinett Estate", region: "Germany", price: "49.99" },
    ],
  },
  {
    varietal: "Rose",
    wines: [
      { name: "Natura (Organic)", region: "Chile", price: "33.99" },
      { name: "Aime Roquesante, Cotes de Provence", region: "France", price: "37.99" },
      { name: "Maison Nicolas Pinot Noir Rose", region: "France", price: "39.99" },
    ],
  },
  {
    varietal: "Sparkling",
    wines: [
      { name: "Santa Margherita Prosecco", region: "Italy", price: "36.99" },
      { name: "Candoni Prosecco Brut", region: "Italy", price: "39.99" },
      { name: "Martini & Rossi Asti Spumante", region: "Italy", price: "42.99" },
      { name: "Korbel Brut", region: "California", price: "45.99" },
      { name: "Veuve Cliquot Yellow Label Brut", region: "France", price: "99.99" },
      { name: "Dom Perignon", region: "France", price: "299.99" },
    ],
  },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const pageStyle: React.CSSProperties = {
  background: "var(--charcoal)",
  minHeight: "100vh",
  color: "var(--ivory)",
  paddingTop: "72px",
};

const innerStyle: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "3rem 1.5rem 5rem",
};

const pageTitleStyle: React.CSSProperties = {
  fontFamily: "'Big Shoulders Display', sans-serif",
  fontWeight: 900,
  fontSize: "clamp(2.8rem, 7vw, 5rem)",
  letterSpacing: "0.04em",
  color: "var(--ivory)",
  margin: "0 0 0.3rem",
  lineHeight: 1,
};

const dividerGoldStyle: React.CSSProperties = {
  width: "60px",
  height: "2px",
  background: "var(--gold)",
  margin: "1rem 0 2.5rem",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "'Big Shoulders Display', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--gold)",
  margin: "2.5rem 0 1.25rem",
  borderBottom: "1px solid rgba(200,170,110,0.25)",
  paddingBottom: "0.5rem",
};

const subSectionStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 600,
  fontSize: "0.7rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "rgba(200,170,110,0.7)",
  margin: "1.5rem 0 0.5rem",
};

const wineRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "1rem",
  padding: "0.45rem 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const wineNameStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "0.95rem",
  color: "var(--ivory)",
  flex: 1,
};

const wineRegionStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: "0.8rem",
  color: "rgba(255,255,255,0.45)",
  whiteSpace: "nowrap",
};

const winePriceStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 500,
  fontSize: "0.92rem",
  color: "var(--gold)",
  whiteSpace: "nowrap",
  minWidth: "52px",
  textAlign: "right",
};

const varietalHeadStyle: React.CSSProperties = {
  fontFamily: "'Big Shoulders Display', sans-serif",
  fontWeight: 700,
  fontSize: "1.05rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.7)",
  margin: "1.5rem 0 0.4rem",
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function WineRow({ name, region, price }: { name: string; region?: string; price: string }) {
  return (
    <div style={wineRowStyle}>
      <span style={wineNameStyle}>{name}</span>
      {region && <span style={wineRegionStyle}>{region}</span>}
      <span style={winePriceStyle}>${price}</span>
    </div>
  );
}

export default function WineList() {
  return (
    <div style={pageStyle}>
      <NavigationA />
      <div style={innerStyle}>

        {/* Page header */}
        <h1 style={pageTitleStyle}>Wine List</h1>
        <div style={dividerGoldStyle} />

        {/* ── RED WINES ── */}
        <h2 style={sectionTitleStyle}>Red Wines</h2>

        <p style={subSectionStyle}>By the Glass</p>
        {redByGlass.map((w) => (
          <WineRow key={w.name} name={w.name} region={w.region} price={w.price} />
        ))}

        <p style={{ ...subSectionStyle, marginTop: "2rem" }}>Italian Reds — By the Bottle</p>
        {italianRed.map((item, i) =>
          "section" in item ? (
            <p key={i} style={varietalHeadStyle}>{item.section}</p>
          ) : (
            <WineRow key={(item as { name: string; price: string }).name} name={(item as { name: string; price: string }).name} price={(item as { name: string; price: string }).price} />
          )
        )}

        <p style={{ ...subSectionStyle, marginTop: "2rem" }}>By the Bottle</p>
        {redByBottleVarietal.map((group) => (
          <div key={group.varietal}>
            <p style={varietalHeadStyle}>{group.varietal}</p>
            {group.wines.map((w) => (
              <WineRow key={w.name} name={w.name} region={w.region} price={w.price} />
            ))}
          </div>
        ))}

        {/* ── WHITE WINES ── */}
        <h2 style={{ ...sectionTitleStyle, marginTop: "3.5rem" }}>White Wines</h2>

        <p style={subSectionStyle}>By the Glass</p>
        {whiteByGlass.map((w) => (
          <WineRow key={w.name} name={w.name} region={w.region} price={w.price} />
        ))}

        <p style={{ ...subSectionStyle, marginTop: "2rem" }}>By the Bottle</p>
        {whiteByBottleVarietal.map((group) => (
          <div key={group.varietal}>
            <p style={varietalHeadStyle}>{group.varietal}</p>
            {group.wines.map((w) => (
              <WineRow key={w.name} name={w.name} region={w.region} price={w.price} />
            ))}
          </div>
        ))}

        {/* Back to menu */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href="/menu" className="btn-outline-ivory">← Back to Menu</a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
