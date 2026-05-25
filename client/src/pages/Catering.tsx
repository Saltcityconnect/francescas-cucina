/*
 * CATERING PAGE — Dark luxury theme
 * Design: Pure black background throughout
 * Hero: Left 40% text column (eyebrow, headline, subtext, contact box, CTA),
 *       Right 60% food photo with ~30% left-edge gradient fade from black
 * Appetizers: 2-column card grid with gold pricing (card style per reference image)
 * Entrees: Full-width list rows with item name left, Half Tray | Full Tray pricing right
 * Other sections: 2-column card grid (same as appetizers)
 * Typography: Big Shoulders Display for section headers, Cormorant Garamond for item names, DM Sans for body
 */

import { useState, useEffect, useRef } from "react";
import NavigationA from "@/components/NavigationA";
import Footer from "@/components/Footer";

const CATERING_HERO_IMG = "/manus-storage/catering_hero_new_7c825a31.png";

const BG = "#0a0a08";
const GOLD = "#c8a96e";
const IVORY = "#f0ece4";
const MUTED = "#9a9080";
const BORDER = "rgba(200,169,110,0.3)";
const DARK_CARD = "rgba(255,255,255,0.02)";

// ─── ORNAMENT SVG ─────────────────────────────────────────────────────────────
const GoldOrnament = () => (
  <svg width="60" height="14" viewBox="0 0 60 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", margin: "0.6rem auto" }}>
    <line x1="0" y1="7" x2="22" y2="7" stroke={GOLD} strokeWidth="0.75" />
    <circle cx="30" cy="7" r="3" stroke={GOLD} strokeWidth="0.75" />
    <circle cx="30" cy="7" r="1.2" fill={GOLD} />
    <line x1="38" y1="7" x2="60" y2="7" stroke={GOLD} strokeWidth="0.75" />
  </svg>
);

const SmallOrnament = () => (
  <svg width="40" height="10" viewBox="0 0 40 10" fill="none" style={{ display: "block", margin: "0 auto 0.8rem" }}>
    <line x1="0" y1="5" x2="15" y2="5" stroke={GOLD} strokeWidth="0.6" />
    <circle cx="20" cy="5" r="2" stroke={GOLD} strokeWidth="0.6" fill="none" />
    <circle cx="20" cy="5" r="0.8" fill={GOLD} />
    <line x1="25" y1="5" x2="40" y2="5" stroke={GOLD} strokeWidth="0.6" />
  </svg>
);

// ─── PHONE ICON ───────────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ─── MENU DATA ────────────────────────────────────────────────────────────────

interface AppItem {
  name: string;
  desc: string;
  price: string;
}

interface EntreeItem {
  name: string;
  desc: string;
  halfTray?: string;
  fullTray: string;
  note?: string;
}

interface CardItem {
  name: string;
  desc: string;
  price: string;
}

// Appetizers — 2-column card grid
const appetizers: AppItem[] = [
  { name: "Arancini", desc: "Crispy parmigiano risotto balls, marinara", price: "HF-$73(25PC) / FL-$135(50PC)" },
  { name: "Mini Crabcakes", desc: "Jumbo lump Maryland crab, bang bang sauce", price: "HF-$88(25PC) / FL-$165(50PC)" },
  { name: "Bacon Wrapped Scallops", desc: "Sea scallops, horseradish-dijon aioli", price: "HF-$88(25PC) / FL-$165(50PC)" },
  { name: "Mozzarella Sticks", desc: "Whole milk mozzarella, breaded & fried, marinara sauce", price: "HF-$48(25PC) / FL-$85(50PC)" },
  { name: "Cheese & Fruit Platter", desc: "Assorted artisan cheeses, fresh fruits", price: "$130(25-30PPL)" },
  { name: "Shrimp Cocktail", desc: "Jumbo shrimp, spicy cocktail sauce", price: "HF-$73(25PC) / FL-$135(50PC)" },
  { name: "Chicken Tenders", desc: "Ranch & BBQ dipping sauce", price: "HF-$53 / FL-$95" },
  { name: "Tomato & Mozzarella Skewers", desc: "Whole mozzarella ball, heirloom tomatoes, fresh basil, balsamic glaze", price: "HF-$58(25PC) / FL-$105(50PC)" },
  { name: "Lollipop Lamb Chops", desc: "Balsamic glaze", price: "HF-$88(25PC) / FL-$165(50PC)" },
  { name: "Utica Greens", desc: "Escarole, prosciutto, hot peppers, toasted breadcrumbs, romano cheese", price: "HF-$58 / FL-$105" },
];

// Entrees — list rows with Half Tray | Full Tray pricing
const entrees: EntreeItem[] = [
  { name: "Chicken Bracco", desc: "Chicken breasts, broccoli florets, sundried tomato, garlic cream sauce", halfTray: "$78", fullTray: "$145" },
  { name: "Chicken Piccata", desc: "Chicken breasts, capers, butter, lemon and white wine sauce", halfTray: "$78", fullTray: "$145" },
  { name: "Chicken Marsala", desc: "Sautéed mushrooms, marsala wine sauce", halfTray: "$78", fullTray: "$145" },
  { name: "Chicken Francaise", desc: "Egg battered chicken breast, lemon & white wine sauce", halfTray: "$78", fullTray: "$145" },
  { name: "Chicken Parmesan", desc: "Breaded chicken, baked with marinara sauce, fresh mozzarella", halfTray: "$78", fullTray: "$145" },
  { name: "Italian Seasoned Grilled Chicken", desc: "Chicken breast, olive oil, oregano, garlic, rosemary", halfTray: "$63", fullTray: "$115" },
  { name: "Italian Seasoned Roasted Chicken", desc: "Bone in chicken breast, legs, thighs, olive oil, oregano, garlic, rosemary", halfTray: "$68", fullTray: "$125" },
  { name: "Eggplant Rollatini", desc: "Ricotta filled eggplant rolls baked with marinara sauce and mozzarella", halfTray: "$58", fullTray: "$105", note: "HF 14 Pieces, FL 28 Pieces" },
  { name: "Francesca's Favorite Meatballs", desc: "Marinara sauce", halfTray: "$58", fullTray: "$105" },
  { name: "Italian Sausage", desc: "With peppers and onions", halfTray: "$58", fullTray: "$105" },
  { name: "½ Meatball & ½ Sausage", desc: "Marinara sauce", halfTray: "$58", fullTray: "$105" },
  { name: "Sliced Strip Loin", desc: "Seasoned & char broiled, red wine demi-glaze", fullTray: "$205" },
  { name: "Sliced Roasted Beef Tenderloin", desc: "Red wine demi-glaze", fullTray: "$309" },
  { name: "Slow Roasted Prime Rib", desc: "Served with au jus", fullTray: "$335" },
  { name: "Sliced Pork Loin", desc: "Chunky apple bourbon glaze", fullTray: "$165" },
];

// Pasta — 2-column card grid
const pasta: CardItem[] = [
  { name: "Baked Meat Lasagna", desc: "Layers of pasta, meat, seasoned ricotta, parmesan cheese, and housemade marinara", price: "$73 / $135" },
  { name: "Baked Veggie Lasagna", desc: "Layers of pasta, fresh vegetables, seasoned ricotta, parmesan cheese, and housemade marinara", price: "$73 / $135" },
  { name: "Baked Cheese Manicotti", desc: "Fresh pasta filled with ricotta, mozzarella and romano cheese", price: "$68 / $125" },
  { name: "Baked Ziti", desc: "Baked ricotta, housemade marinara, mozzarella", price: "$48 / $85" },
  { name: "Rigatoni Marinara", desc: "Housemade marinara sauce", price: "$48 / $85" },
  { name: "Rigatoni Vodka", desc: "Housemade spicy pink vodka sauce", price: "$53 / $95" },
  { name: "Rigatoni Alfredo & Broccoli", desc: "Housemade creamy alfredo sauce, broccoli", price: "$63 / $115" },
  { name: "Chicken Riggies", desc: "Francesca's famous rigatoni with chicken, peppers, onions, pink sauce (choice of medium or hot)", price: "$63 / $115" },
  { name: "Seafood Riggies", desc: "Francesca's famous rigatoni with bay scallops, shrimp, peppers, onions, pink sauce (choice of medium or hot)", price: "$93 / $175" },
  { name: "Shrimp Scampi", desc: "White wine, lemon, butter, olive oil, linguine", price: "$78 / $145" },
  { name: "Cheese Tortellini Florentine", desc: "Tricolor cheese tortellini, cherry tomatoes, spinach, parmesan cheese", price: "$63 / $115" },
  { name: "Al Fresco", desc: "Fresh tomato, zucchini, pesto, garlic & oil", price: "$63 / $115" },
  { name: "Gemelli Angeloro", desc: "Grilled chicken, Francesca's utica greens, prosciutto, toasted breadcrumbs, romano cheese, splash of ragu", price: "$68 / $125" },
  { name: "Caprese", desc: "Plum tomatoes, fresh mozzarella, pesto, garlic & oil", price: "$63 / $115" },
];

// Salads — 2-column card grid
const salads: CardItem[] = [
  { name: "Apple & Gorgonzola", desc: "Mixed greens, raspberry vinaigrette", price: "$58 / $105" },
  { name: "Cold Antipasto", desc: "Prosciutto, salami, sharp provolone, fresh mozzarella, olive medley, roasted red peppers, artichoke hearts, balsamic", price: "$58 / $105" },
  { name: "Caesar", desc: "Romaine, roasted red peppers, olives, croutons, shaved parmesan, creamy housemade caesar", price: "$48 / $85" },
  { name: "Garden", desc: "Mixed greens, tomatoes, cucumber, red onion", price: "$48 / $85" },
  { name: "Pasta Salad", desc: "Gemelli, squash, zucchini, grape tomatoes, sweet peppers, cucumbers, red onion, pesto", price: "$63 / $115" },
  { name: "Contadina Bean", desc: "String beans, red potatoes, cherry tomatoes, red onion, kalamata olives, white balsamic", price: "$53 / $95" },
  { name: "Caprese Salad", desc: "Fresh ciligine, heirloom cherry tomatoes, fresh basil, olive oil, italian seasoning", price: "$65 (10-15 PPL)" },
  { name: "Add Grilled Chicken", desc: "HF 6 Pieces Sliced $28 · FL 12 Pieces Sliced $55", price: "Add Grilled Shrimp — 24 Pieces $75" },
];

// Sandwiches / Wraps — 2-column card grid
const sandwiches: CardItem[] = [
  { name: "Italian", desc: "Salami, prosciutto, hot capicola, roasted red peppers, provolone, mixed greens, tomato, onion, italian vinaigrette", price: "$65 — Cut into 10 pieces" },
  { name: "Caprese", desc: "Fresh buffalo mozzarella, pesto, fresh tomatoes, marinated roasted red peppers", price: "$55 — Cut into 10 pieces" },
  { name: "Caprese with Chicken & Prosciutto", desc: "Grilled chicken, prosciutto, fresh buffalo mozzarella, pesto, fresh tomatoes, marinated roasted red peppers", price: "$70 — Cut into 10 pieces" },
];

// Sides — 2-column card grid
const sides: CardItem[] = [
  { name: "Italian Roasted Potatoes", desc: "Half pan / Full pan", price: "$43 / $75" },
  { name: "Mashed Potatoes", desc: "Half pan / Full pan", price: "$43 / $75" },
  { name: "Green Beans", desc: "Half pan / Full pan", price: "$43 / $75" },
  { name: "Homemade Focaccia Bread", desc: "Serves 3–5", price: "$4" },
  { name: "Ciabatta Bread", desc: "Serves 8–10", price: "$10" },
];

// Dessert — 2-column card grid
const desserts: CardItem[] = [
  { name: "Fresh Mini Cannolis", desc: "12 pieces", price: "$22" },
];

// ─── TAB CONFIG ───────────────────────────────────────────────────────────────
const tabs = [
  { id: "appetizers", label: "Appetizers" },
  { id: "entrees", label: "Entrees" },
  { id: "pasta", label: "Pasta" },
  { id: "salads", label: "Salads" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
];

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: IVORY,
      margin: "0 0 0.2rem",
    }}>
      {title}
    </h2>
    <GoldOrnament />
    {subtitle && (
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: GOLD,
        margin: "0.5rem 0 0",
      }}>
        {subtitle}
      </p>
    )}
  </div>
);

// ─── APPETIZER CARD ───────────────────────────────────────────────────────────
const AppCard = ({ item }: { item: AppItem }) => (
  <div style={{
    border: `1px solid ${BORDER}`,
    padding: "1.6rem 1.8rem",
    background: DARK_CARD,
    textAlign: "center",
  }}>
    <h3 style={{
      fontFamily: "'Big Shoulders Display', sans-serif",
      fontWeight: 700,
      fontSize: "1.05rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: IVORY,
      margin: "0 0 0.5rem",
    }}>
      {item.name}
    </h3>
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 300,
      fontSize: "0.9rem",
      color: MUTED,
      margin: "0 0 1rem",
      lineHeight: 1.6,
    }}>
      {item.desc}
    </p>
    <SmallOrnament />
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
      fontSize: "0.85rem",
      color: GOLD,
      margin: 0,
      letterSpacing: "0.02em",
    }}>
      {item.price}
    </p>
  </div>
);

// ─── GENERIC CARD ─────────────────────────────────────────────────────────────
const GenericCard = ({ item }: { item: CardItem }) => (
  <div style={{
    border: `1px solid ${BORDER}`,
    padding: "1.6rem 1.8rem",
    background: DARK_CARD,
    textAlign: "center",
  }}>
    <h3 style={{
      fontFamily: "'Big Shoulders Display', sans-serif",
      fontWeight: 700,
      fontSize: "1.05rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: IVORY,
      margin: "0 0 0.5rem",
    }}>
      {item.name}
    </h3>
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 300,
      fontSize: "0.9rem",
      color: MUTED,
      margin: "0 0 1rem",
      lineHeight: 1.6,
    }}>
      {item.desc}
    </p>
    <SmallOrnament />
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
      fontSize: "0.85rem",
      color: GOLD,
      margin: 0,
      letterSpacing: "0.02em",
    }}>
      {item.price}
    </p>
  </div>
);

// ─── ENTREE ROW ───────────────────────────────────────────────────────────────
const EntreeRow = ({ item, last }: { item: EntreeItem; last: boolean }) => (
  <div style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "2rem",
    padding: "1.1rem 0",
    borderBottom: last ? "none" : `1px solid rgba(200,169,110,0.15)`,
  }}>
    {/* Left: name + desc */}
    <div style={{ flex: 1 }}>
      <h3 style={{
        fontFamily: "'Big Shoulders Display', sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: IVORY,
        margin: "0 0 0.2rem",
        display: "inline",
      }}>
        {item.name}
      </h3>
      {item.desc && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.85rem",
          color: MUTED,
          margin: "0.2rem 0 0",
          lineHeight: 1.5,
        }}>
          {item.desc}
        </p>
      )}
    </div>
    {/* Right: pricing */}
    <div style={{
      textAlign: "right",
      flexShrink: 0,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.8rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: GOLD,
      lineHeight: 1.8,
    }}>
      {item.halfTray && (
        <span>
          HALF TRAY&nbsp;&nbsp;{item.halfTray}&nbsp;&nbsp;<span style={{ color: BORDER, fontWeight: 300 }}>|</span>&nbsp;&nbsp;FULL TRAY&nbsp;&nbsp;{item.fullTray}
        </span>
      )}
      {!item.halfTray && (
        <span>FULL TRAY&nbsp;&nbsp;{item.fullTray}</span>
      )}
      {item.note && (
        <div style={{ fontSize: "0.72rem", color: MUTED, marginTop: "0.15rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {item.note}
        </div>
      )}
    </div>
  </div>
);

export default function Catering() {
  const [activeTab, setActiveTab] = useState("appetizers");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const tab of tabs) {
        const el = sectionRefs.current[tab.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 160) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: IVORY }}>
      <NavigationA />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — split layout: text left 40%, photo right 60%
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "relative",
        minHeight: "clamp(520px, 55vw, 680px)",
        background: BG,
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }} className="catering-hero">
        {/* Photo — right 60% */}
        <div className="catering-hero-photo" style={{
          position: "absolute",
          top: 0, right: 0,
          width: "62%",
          height: "100%",
          zIndex: 1,
        }}>
          <img
            src={CATERING_HERO_IMG}
            alt="Francesca's Cucina catering spread"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", transform: "scaleX(-1)" }}
          />
          {/* Left-edge gradient: black → transparent over ~30% of image width */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0a0a08 0%, #0a0a08 8%, rgba(10,10,8,0.85) 22%, rgba(10,10,8,0.3) 45%, transparent 70%)",
            zIndex: 2,
          }} />
        </div>

        {/* Text column — left side */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "clamp(5rem, 10vw, 8rem) 0 4rem clamp(2rem, 5vw, 6rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "clamp(320px, 45%, 560px)",
        }}>
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: GOLD,
            margin: "0 0 1rem",
            fontWeight: 600,
          }}>
            Francesca's Cucina · Syracuse, NY
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: IVORY,
            lineHeight: 0.95,
            margin: "0 0 1.5rem",
          }}>
            Catering &<br />Private Events
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: MUTED,
            margin: "0 0 2.5rem",
            lineHeight: 1.6,
          }}>
            From intimate gatherings to grand celebrations — authentic Italian cuisine delivered with care.
          </p>

          {/* Contact box */}
          <div style={{
            border: `1px solid rgba(200,169,110,0.3)`,
            padding: "1.4rem 1.6rem",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            <a href="tel:3154098848" style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none" }}>
              <div style={{ width: 40, height: 40, border: `1px solid rgba(200,169,110,0.35)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <PhoneIcon />
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, margin: "0 0 0.15rem", fontWeight: 700 }}>Phone</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: GOLD, margin: 0 }}>(315) 409-8848</p>
              </div>
            </a>
            <a href="mailto:catering@francescas-cucina.com" style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none" }}>
              <div style={{ width: 40, height: 40, border: `1px solid rgba(200,169,110,0.35)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <EmailIcon />
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, margin: "0 0 0.15rem", fontWeight: 700 }}>Email</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: GOLD, margin: 0 }}>catering@francescas-cucina.com</p>
              </div>
            </a>
          </div>

          {/* CTA button */}
          <a
            href="/manus-storage/francescas_catering_menu_036ba512.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1a1a18",
              background: GOLD,
              padding: "0.9rem 2.2rem",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#b8996e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
          >
            View Catering Menu
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STICKY CATEGORY TABS
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        position: "sticky",
        top: "72px",
        zIndex: 40,
        background: "#111109",
        borderBottom: "1px solid rgba(200,169,110,0.2)",
        overflowX: "auto",
      }}>
        <div style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          justifyContent: "center",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: activeTab === tab.id ? GOLD : "#6b6050",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GOLD}` : "2px solid transparent",
                padding: "1.1rem 1.3rem",
                cursor: "pointer",
                transition: "color 0.2s ease, border-color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MENU SECTIONS
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 8rem" }}>

        {/* ── APPETIZERS ── */}
        <section
          id="appetizers"
          ref={(el) => { sectionRefs.current["appetizers"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Appetizers" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "1.2rem",
          }}>
            {appetizers.map((item) => <AppCard key={item.name} item={item} />)}
          </div>

        </section>

        {/* ── ENTREES ── */}
        <section
          id="entrees"
          ref={(el) => { sectionRefs.current["entrees"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Entrees" subtitle="Half Tray (10-12)  |  Full Tray (20-22)" />
          <div style={{
            padding: "0 2rem",
          }}>
            {entrees.map((item, i) => (
              <EntreeRow key={item.name} item={item} last={i === entrees.length - 1} />
            ))}
          </div>
        </section>

        {/* ── PASTA ── */}
        <section
          id="pasta"
          ref={(el) => { sectionRefs.current["pasta"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Pasta" subtitle="Half Tray (10-12)  |  Full Tray (20-22)" />
          <p style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: MUTED, marginBottom: "1.5rem", letterSpacing: "0.08em" }}>
            Choice of pasta: Gemelli, Rigatoni, Gluten Free Penne
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "1.2rem",
          }}>
            {pasta.map((item) => <GenericCard key={item.name} item={item} />)}
          </div>
        </section>

        {/* ── SALADS ── */}
        <section
          id="salads"
          ref={(el) => { sectionRefs.current["salads"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Salads" subtitle="Half Tray (10-12)  |  Full Tray (20-22)" />
          <p style={{ textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: MUTED, marginBottom: "1.5rem", letterSpacing: "0.08em" }}>
            Dressings available: Balsamic, Blue Cheese, Italian, Ranch, Raspberry Vinaigrette
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "1.2rem",
          }}>
            {salads.map((item) => <GenericCard key={item.name} item={item} />)}
          </div>
        </section>

        {/* ── SANDWICHES ── */}
        <section
          id="sandwiches"
          ref={(el) => { sectionRefs.current["sandwiches"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Sandwiches" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "1.2rem",
          }}>
            {sandwiches.map((item) => <GenericCard key={item.name} item={item} />)}
          </div>
        </section>

        {/* ── SIDES ── */}
        <section
          id="sides"
          ref={(el) => { sectionRefs.current["sides"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Sides" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "1.2rem",
          }}>
            {sides.map((item) => <GenericCard key={item.name} item={item} />)}
          </div>
        </section>

        {/* ── DESSERTS ── */}
        <section
          id="desserts"
          ref={(el) => { sectionRefs.current["desserts"] = el; }}
          style={{ paddingTop: "5rem" }}
        >
          <SectionHeader title="Desserts" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "1.2rem",
          }}>
            {desserts.map((item) => <GenericCard key={item.name} item={item} />)}
          </div>
        </section>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        background: "#111109",
        borderTop: "1px solid rgba(200,169,110,0.2)",
        padding: "4rem 2rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: GOLD,
          margin: "0 0 0.75rem",
        }}>
          Ready to Book?
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          color: IVORY,
          margin: "0 0 0.5rem",
        }}>
          Let's plan your event together.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: MUTED,
          margin: "0 0 0.5rem",
        }}>
          Call <a href="tel:3154098848" style={{ color: GOLD, textDecoration: "none" }}>315-409-8848</a> or email <a href="mailto:catering@francescas-cucina.com" style={{ color: GOLD, textDecoration: "none" }}>catering@francescas-cucina.com</a>
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.8rem",
          color: "#6b6050",
          margin: "1.5rem 0 0",
          letterSpacing: "0.05em",
        }}>
          Minimum 2 business days advance notice by 2pm · Order minimum applies · Prices subject to change · Delivery and gratuity additional
        </p>
      </div>

      <Footer />
    </div>
  );
}
