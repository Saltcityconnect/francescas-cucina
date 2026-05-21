import { useEffect, useRef, useState } from "react";

// ── Francesca's Cucina — Analytics Dashboard Mockup ──────────────────────────
// Design: Dark luxury theme. Three data source tabs: Website, Resy, Toast.
// All data is static/illustrative — this is a design mockup only.
// Mobile: sidebar collapses to bottom nav; grids stack to 1-col; tables scroll.

const GOLD = "#b8a05a";
const GOLD_DIM = "rgba(184,160,90,0.18)";
const DARK = "#0a0a08";
const CARD = "#111110";
const BORDER = "rgba(184,160,90,0.18)";
const TEXT = "#f0ede6";
const MUTED = "rgba(240,237,230,0.5)";
const GREEN = "#4ade80";
const RED = "#f87171";
const BLUE = "#60a5fa";
const PURPLE = "#a78bfa";

// ── Mobile hook ───────────────────────────────────────────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

// ── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline({ data, color = GOLD, height = 48 }: { data: number[]; color?: string; height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.width, h = canvas.height;
    const min = Math.min(...data), max = Math.max(...data);
    const range = max - min || 1;
    const pad = 4;
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, color + "55");
    grad.addColorStop(1, color + "00");
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = pad + (i / (data.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.lineTo(pad + (w - pad * 2), h);
    ctx.lineTo(pad, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = pad + (i / (data.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [data, color, height]);
  return <canvas ref={canvasRef} width={220} height={height} style={{ width: "100%", height }} />;
}

// ── Donut Chart ──────────────────────────────────────────────────────────────
function DonutChart({ slices, centerLabel, centerSub }: {
  slices: { label: string; value: number; color: string }[];
  centerLabel?: string;
  centerSub?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cx = canvas.width / 2, cy = canvas.height / 2, r = 70, inner = 42;
    const total = slices.reduce((s, x) => s + x.value, 0);
    let angle = -Math.PI / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    slices.forEach(s => {
      const sweep = (s.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, angle, angle + sweep);
      ctx.closePath();
      ctx.fillStyle = s.color;
      ctx.fill();
      angle += sweep;
    });
    ctx.beginPath();
    ctx.arc(cx, cy, inner, 0, Math.PI * 2);
    ctx.fillStyle = CARD;
    ctx.fill();
    ctx.fillStyle = TEXT;
    ctx.font = "bold 16px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(centerLabel || total.toLocaleString(), cx, cy - 8);
    ctx.fillStyle = MUTED;
    ctx.font = "11px 'DM Sans', sans-serif";
    ctx.fillText(centerSub || "total", cx, cy + 10);
  }, [slices, centerLabel, centerSub]);
  return <canvas ref={canvasRef} width={160} height={160} style={{ width: 160, height: 160, flexShrink: 0 }} />;
}

// ── Bar Chart ────────────────────────────────────────────────────────────────
function BarChart({ data, color = GOLD }: { data: { label: string; value: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80, padding: "0 4px" }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{
            width: "100%",
            height: Math.max(4, (d.value / max) * 64),
            background: `linear-gradient(to top, ${color}, ${color}99)`,
            borderRadius: 3,
            transition: "height 0.4s ease",
          }} />
          <span style={{ fontSize: 9, color: MUTED, letterSpacing: "0.05em" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({ label, value, change, up, sub, data, color }: {
  label: string; value: string; change: string; up: boolean; sub: string; data: number[]; color?: string;
}) {
  return (
    <div style={{
      background: CARD,
      border: `1px solid ${BORDER}`,
      borderRadius: 10,
      padding: "1.2rem 1.4rem 0.8rem",
      overflow: "hidden",
    }}>
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2, flexWrap: "wrap" }}>
        <span style={{ fontSize: "1.6rem", fontWeight: 700, color: TEXT, lineHeight: 1 }}>{value}</span>
        <span style={{
          fontSize: "0.75rem", fontWeight: 600,
          color: up ? GREEN : RED,
          background: up ? "rgba(74,222,128,0.12)" : "rgba(248,113,113,0.12)",
          padding: "2px 6px", borderRadius: 4,
        }}>{change}</span>
      </div>
      <div style={{ fontSize: "0.7rem", color: MUTED, marginBottom: 10 }}>{sub}</div>
      <Sparkline data={data} height={36} color={color || GOLD} />
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: TEXT, margin: 0 }}>{title}</h2>
      <p style={{ color: MUTED, fontSize: "0.82rem", margin: "4px 0 0" }}>{sub}</p>
    </div>
  );
}

// ── Scrollable Table Wrapper ──────────────────────────────────────────────────
function ScrollTable({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as any }}>
      {children}
    </div>
  );
}

// ── Insight Callout ───────────────────────────────────────────────────────────
function Insight({ text, color, bg, border }: { text: string; color: string; bg: string; border: string }) {
  return (
    <div style={{ marginTop: 10, padding: "8px 10px", background: bg, border: `1px solid ${border}`, borderRadius: 6, fontSize: "0.72rem", color, lineHeight: 1.5 }}>
      ✦ {text}
    </div>
  );
}

// ── WEBSITE DATA ──────────────────────────────────────────────────────────────
const trafficData = [310,290,340,380,420,395,450,470,510,490,530,560,520,580,610,590,640,670,650,700,720,690,750,780,760,810,840,820];
const reservationData = [18,15,22,25,28,24,30,32,35,31,37,40,36,42,44,40,46,49,47,52,54,50,56,58,55,60,63,61];
const pageViewData = [820,780,890,950,1050,990,1120,1180,1260,1220,1310,1380,1290,1440,1510,1470,1580,1640,1610,1710,1750,1690,1820,1880,1850,1940,1990,1960];
const bounceData = [52,54,50,48,46,49,44,43,41,43,40,38,41,37,35,38,34,32,35,31,30,33,29,28,30,27,26,28];

const webKpis = [
  { label: "Unique Visitors", value: "18,240", change: "+12.4%", up: true, sub: "Last 30 days", data: trafficData },
  { label: "Page Views", value: "47,810", change: "+8.7%", up: true, sub: "Last 30 days", data: pageViewData },
  { label: "Online Reservations", value: "1,643", change: "+21.3%", up: true, sub: "Last 30 days", data: reservationData },
  { label: "Bounce Rate", value: "28.4%", change: "−6.2%", up: true, sub: "Lower is better", data: bounceData },
];

const sources = [
  { label: "Google Search", value: 7840, pct: 43, color: "#4285F4" },
  { label: "Direct", value: 4920, pct: 27, color: GOLD },
  { label: "Social Media", value: 2740, pct: 15, color: "#E1306C" },
  { label: "Referral Sites", value: 1460, pct: 8, color: "#34A853" },
  { label: "Email Campaigns", value: 820, pct: 4.5, color: "#EA4335" },
  { label: "Other", value: 460, pct: 2.5, color: "#888" },
];

const referrers = [
  { site: "google.com", sessions: 7840, conversions: 312, rate: "3.98%" },
  { site: "yelp.com", sessions: 1240, conversions: 98, rate: "7.90%" },
  { site: "resy.com", sessions: 980, conversions: 187, rate: "19.1%" },
  { site: "instagram.com", sessions: 870, conversions: 42, rate: "4.83%" },
  { site: "facebook.com", sessions: 640, conversions: 28, rate: "4.38%" },
  { site: "tripadvisor.com", sessions: 520, conversions: 61, rate: "11.7%" },
  { site: "syracuse.com", sessions: 310, conversions: 19, rate: "6.13%" },
  { site: "timeout.com", sessions: 180, conversions: 14, rate: "7.78%" },
];

const geoData = [
  { city: "Syracuse, NY", sessions: 9820, pct: 53.9 },
  { city: "Rochester, NY", sessions: 1640, pct: 9.0 },
  { city: "Buffalo, NY", sessions: 1120, pct: 6.1 },
  { city: "Albany, NY", sessions: 890, pct: 4.9 },
  { city: "New York City, NY", sessions: 780, pct: 4.3 },
  { city: "Utica, NY", sessions: 620, pct: 3.4 },
  { city: "Binghamton, NY", sessions: 480, pct: 2.6 },
  { city: "Other", sessions: 2890, pct: 15.8 },
];

const topPages = [
  { page: "/menu", views: 14820, avgTime: "2:34" },
  { page: "/", views: 12410, avgTime: "1:48" },
  { page: "/catering", views: 6240, avgTime: "3:12" },
  { page: "/events", views: 4180, avgTime: "2:55" },
  { page: "/giftcards", views: 2940, avgTime: "1:22" },
  { page: "/about", views: 1870, avgTime: "1:05" },
];

const weeklyBar = [
  { label: "Mon", value: 2140 },
  { label: "Tue", value: 2380 },
  { label: "Wed", value: 2890 },
  { label: "Thu", value: 3120 },
  { label: "Fri", value: 4210 },
  { label: "Sat", value: 4680 },
  { label: "Sun", value: 3580 },
];

const deviceData = [
  { label: "Mobile", value: 58, color: GOLD },
  { label: "Desktop", value: 34, color: "#b8a05a88" },
  { label: "Tablet", value: 8, color: "#b8a05a44" },
];

// ── RESY DATA ─────────────────────────────────────────────────────────────────
const resyCoversData = [42,38,55,61,68,58,72,78,84,76,88,94,82,96,102,94,108,114,110,118,122,116,128,134,130,140,146,142];
const resyNoShowData = [4,5,3,4,3,5,2,3,4,3,2,4,3,2,3,4,2,3,2,3,2,3,2,2,3,2,2,2];
const resyTurnData = [88,92,85,90,87,94,82,86,89,84,88,91,85,87,90,83,86,88,84,87,85,88,83,86,84,87,85,83];
const resyRatingData = [42,43,44,43,44,45,44,45,46,45,46,47,46,47,47,48,47,48,48,49,48,49,49,49,49,50,50,50];

const resyKpis = [
  { label: "Covers This Month", value: "3,842", change: "+14.2%", up: true, sub: "Guests who dined", data: resyCoversData, color: "#60a5fa" },
  { label: "No-Show Rate", value: "3.1%", change: "−1.8%", up: true, sub: "Industry avg: 5–20%", data: resyNoShowData, color: RED },
  { label: "Avg. Turn Time", value: "87 min", change: "−4 min", up: true, sub: "Time per table", data: resyTurnData, color: GOLD },
  { label: "Guest Rating", value: "4.9 / 5", change: "+0.2", up: true, sub: "Private to restaurant", data: resyRatingData, color: GREEN },
];

const resyBookingSources = [
  { label: "Resy App / Website", value: 1840, pct: 47.9, color: "#60a5fa" },
  { label: "Your Website Widget", value: 1120, pct: 29.1, color: GOLD },
  { label: "Walk-In", value: 480, pct: 12.5, color: "#a78bfa" },
  { label: "Phone / In-House", value: 402, pct: 10.5, color: "#888" },
];

const resyCoversByDay = [
  { label: "Mon", value: 88 },
  { label: "Tue", value: 112 },
  { label: "Wed", value: 148 },
  { label: "Thu", value: 186 },
  { label: "Fri", value: 312 },
  { label: "Sat", value: 398 },
  { label: "Sun", value: 224 },
];

const resyTopGuests = [
  { name: "M. Romano", visits: 18, lastVisit: "May 18", rating: "5.0" },
  { name: "D. Sullivan", visits: 14, lastVisit: "May 20", rating: "4.8" },
  { name: "A. Caruso", visits: 12, lastVisit: "May 15", rating: "5.0" },
  { name: "P. Marchetti", visits: 11, lastVisit: "May 19", rating: "4.9" },
  { name: "L. Ferraro", visits: 9, lastVisit: "May 17", rating: "5.0" },
  { name: "G. Bianchi", visits: 8, lastVisit: "May 14", rating: "4.7" },
];

const resyServerRatings = [
  { name: "Sophia M.", covers: 412, rating: "4.96", trend: "+0.08" },
  { name: "Marco R.", covers: 388, rating: "4.91", trend: "+0.05" },
  { name: "Isabella C.", covers: 356, rating: "4.88", trend: "+0.12" },
  { name: "Luca B.", covers: 298, rating: "4.84", trend: "−0.02" },
  { name: "Aria D.", covers: 276, rating: "4.79", trend: "+0.04" },
];

// ── TOAST DATA ────────────────────────────────────────────────────────────────
const toastRevenueData = [4200,3800,5100,5600,6200,5800,6800,7200,7600,7100,7900,8400,7800,8600,9100,8700,9400,9800,9500,10200,10600,10100,11000,11400,11100,11800,12200,11900];
const toastCheckData = [142,138,156,162,168,158,174,178,184,176,188,194,182,196,202,194,208,214,210,218,222,216,228,234,230,240,246,242];
const toastLaborData = [28,30,27,26,25,27,24,23,22,24,21,20,23,19,18,21,17,16,19,15,14,17,13,12,15,11,10,12];
const toastCoversPOS = [38,35,48,54,62,52,66,72,78,70,82,88,76,90,96,88,102,108,104,112,116,110,122,128,124,134,140,136];

const toastKpis = [
  { label: "Revenue This Month", value: "$94,280", change: "+18.4%", up: true, sub: "vs. last month", data: toastRevenueData, color: GREEN },
  { label: "Avg. Check Per Person", value: "$187", change: "+$14", up: true, sub: "vs. last month", data: toastCheckData, color: GOLD },
  { label: "Labor Cost %", value: "24.1%", change: "−3.2%", up: true, sub: "Lower is better", data: toastLaborData, color: BLUE },
  { label: "Covers (POS)", value: "3,798", change: "+12.8%", up: true, sub: "Matches Resy closely", data: toastCoversPOS, color: PURPLE },
];

const toastMenuCategories = [
  { label: "Entrees", value: 38420, pct: 40.7, color: GOLD },
  { label: "Wine & Spirits", value: 24180, pct: 25.6, color: "#a78bfa" },
  { label: "Appetizers", value: 12640, pct: 13.4, color: "#60a5fa" },
  { label: "Desserts", value: 8920, pct: 9.5, color: "#f472b6" },
  { label: "Cocktails", value: 6840, pct: 7.3, color: "#34d399" },
  { label: "Non-Alcoholic", value: 3280, pct: 3.5, color: "#888" },
];

const toastTopDishes = [
  { dish: "Filet Mignon (8oz)", orders: 312, revenue: "$15,288", avgCheck: "$49" },
  { dish: "Lobster Carbonara", orders: 284, revenue: "$10,796", avgCheck: "$38" },
  { dish: "Veal Antonio", orders: 261, revenue: "$11,219", avgCheck: "$43" },
  { dish: "Chicken Francese", orders: 248, revenue: "$8,928", avgCheck: "$36" },
  { dish: "Wagyu Beef Ravioli", orders: 224, revenue: "$8,736", avgCheck: "$39" },
  { dish: "Cheese Ravioli", orders: 198, revenue: "$6,534", avgCheck: "$33" },
  { dish: "Shrimp Scampi", orders: 186, revenue: "$7,068", avgCheck: "$38" },
];

const toastHourlyBar = [
  { label: "11a", value: 420 },
  { label: "12p", value: 1840 },
  { label: "1p", value: 2210 },
  { label: "2p", value: 980 },
  { label: "3p", value: 340 },
  { label: "4p", value: 680 },
  { label: "5p", value: 3120 },
  { label: "6p", value: 8640 },
  { label: "7p", value: 12480 },
  { label: "8p", value: 11200 },
  { label: "9p", value: 7840 },
  { label: "10p", value: 3280 },
];

const toastLaborByRole = [
  { role: "Servers", hours: 486, cost: "$8,262", pct: 8.8 },
  { role: "Kitchen", hours: 612, cost: "$9,180", pct: 9.7 },
  { role: "Bar", hours: 248, cost: "$3,968", pct: 4.2 },
  { role: "Host", hours: 124, cost: "$1,860", pct: 2.0 },
  { role: "Management", hours: 160, cost: "$4,480", pct: 4.8 },
];

// ── Responsive grid helper ────────────────────────────────────────────────────
function Grid2({ children, isMobile }: { children: React.ReactNode; isMobile: boolean }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "1rem",
      marginBottom: "1.5rem",
    }}>
      {children}
    </div>
  );
}

// ── WEBSITE TAB ───────────────────────────────────────────────────────────────
function WebsiteTab({ isMobile }: { isMobile: boolean }) {
  return (
    <div>
      <SectionHeader title="Website Performance" sub="Last 30 Days · francescas-cucina.com" />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: "0.75rem",
        marginBottom: "1.5rem",
      }}>
        {webKpis.map((kpi, i) => <KpiCard key={i} {...kpi} />)}
      </div>

      <Grid2 isMobile={isMobile}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Traffic by Day of Week</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 16 }}>Average sessions per day</div>
          <BarChart data={weeklyBar} />
          <div style={{ marginTop: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>Peak: <span style={{ color: GOLD }}>Saturday (4,680)</span></div>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>Slowest: <span style={{ color: TEXT }}>Monday (2,140)</span></div>
          </div>
        </div>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Traffic Sources</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 12 }}>Where your visitors come from</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: isMobile ? "wrap" : "nowrap" }}>
            <DonutChart slices={sources.map(s => ({ label: s.label, value: s.value, color: s.color }))} />
            <div style={{ flex: 1, minWidth: 0 }}>
              {sources.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", color: TEXT, flex: 1, minWidth: 0 }}>{s.label}</span>
                  <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600 }}>{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Grid2>

      <Grid2 isMobile={isMobile}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Top Referral Sites</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Sites driving traffic — and which convert</div>
          <ScrollTable>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", minWidth: 320 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Source</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Sessions</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Reserv.</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Conv.</th>
                </tr>
              </thead>
              <tbody>
                {referrers.map((r, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: TEXT, whiteSpace: "nowrap" }}>{r.site}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{r.sessions.toLocaleString()}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: TEXT }}>{r.conversions}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: parseFloat(r.rate) > 10 ? GREEN : GOLD, fontWeight: 600 }}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollTable>
          <Insight text="Resy.com drives the highest reservation conversion rate at 19.1%" color={GREEN} bg="rgba(74,222,128,0.06)" border="rgba(74,222,128,0.15)" />
        </div>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Visitor Geography</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Where your audience is located</div>
          {geoData.map((g, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, gap: 8 }}>
                <span style={{ fontSize: "0.78rem", color: TEXT, flex: 1, minWidth: 0 }}>{g.city}</span>
                <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600, flexShrink: 0 }}>{g.pct}%</span>
              </div>
              <div style={{ height: 4, background: "rgba(184,160,90,0.12)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${g.pct}%`, background: `linear-gradient(to right, ${GOLD}, ${GOLD}99)`, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </Grid2>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap: "1rem" }}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Top Pages</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Most visited pages and average time on page</div>
          <ScrollTable>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", minWidth: 280 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Page</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Views</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((p, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: GOLD, fontFamily: "monospace", whiteSpace: "nowrap" }}>{p.page}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: TEXT }}>{p.views.toLocaleString()}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{p.avgTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollTable>
        </div>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Device Type</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 16 }}>How visitors access the site</div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <DonutChart slices={deviceData} centerLabel="100%" centerSub="visitors" />
          </div>
          {deviceData.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: d.color }} />
              <span style={{ fontSize: "0.82rem", color: TEXT, flex: 1 }}>{d.label}</span>
              <span style={{ fontSize: "0.82rem", color: GOLD, fontWeight: 600 }}>{d.value}%</span>
            </div>
          ))}
          <Insight text="58% mobile — ensure all promotions are mobile-first" color={GOLD} bg={GOLD_DIM} border={BORDER} />
        </div>
      </div>
    </div>
  );
}

// ── RESY TAB ──────────────────────────────────────────────────────────────────
function ResyTab({ isMobile }: { isMobile: boolean }) {
  return (
    <div>
      <SectionHeader title="Resy — Reservations & Guest Intelligence" sub="Last 30 Days · Francesca's Cucina" />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: "0.75rem",
        marginBottom: "1.5rem",
      }}>
        {resyKpis.map((kpi, i) => <KpiCard key={i} {...kpi} />)}
      </div>

      <Grid2 isMobile={isMobile}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Covers by Day of Week</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 16 }}>Total guests seated per day</div>
          <BarChart data={resyCoversByDay} color={BLUE} />
          <div style={{ marginTop: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>Peak: <span style={{ color: BLUE }}>Saturday (398)</span></div>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>Slowest: <span style={{ color: TEXT }}>Monday (88)</span></div>
          </div>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Booking Source Breakdown</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 12 }}>How guests are making reservations</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: isMobile ? "wrap" : "nowrap" }}>
            <DonutChart
              slices={resyBookingSources.map(s => ({ label: s.label, value: s.value, color: s.color }))}
              centerLabel="3,842"
              centerSub="covers"
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              {resyBookingSources.map((s, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.78rem", color: TEXT, flex: 1, minWidth: 0 }}>{s.label}</span>
                    <span style={{ fontSize: "0.78rem", color: s.color, fontWeight: 600 }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginLeft: 16 }}>
                    <div style={{ height: "100%", width: `${s.pct}%`, background: s.color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Insight text="29.1% of reservations come through your own website widget — strong direct channel" color={BLUE} bg="rgba(96,165,250,0.08)" border="rgba(96,165,250,0.2)" />
        </div>
      </Grid2>

      <Grid2 isMobile={isMobile}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Top Returning Guests</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Your most loyal guests this year</div>
          <ScrollTable>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", minWidth: 280 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Guest</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Visits</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Last Visit</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Rating</th>
                </tr>
              </thead>
              <tbody>
                {resyTopGuests.map((g, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: TEXT, whiteSpace: "nowrap" }}>{g.name}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: GOLD, fontWeight: 600 }}>{g.visits}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED, whiteSpace: "nowrap" }}>{g.lastVisit}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: GREEN }}>{g.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollTable>
          <Insight text="Your top 6 guests have visited a combined 72 times — consider a VIP recognition program" color={GOLD} bg={GOLD_DIM} border={BORDER} />
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Server Guest Ratings</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Average guest rating by server — private to management</div>
          <ScrollTable>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", minWidth: 260 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Server</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Covers</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Rating</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Trend</th>
                </tr>
              </thead>
              <tbody>
                {resyServerRatings.map((s, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: TEXT, whiteSpace: "nowrap" }}>{s.name}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{s.covers}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: GREEN, fontWeight: 600 }}>{s.rating}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: s.trend.startsWith("+") ? GREEN : RED, fontSize: "0.75rem" }}>{s.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollTable>
          <Insight text="All servers rated above 4.7 — exceptional team performance across the board" color={GREEN} bg="rgba(74,222,128,0.06)" border="rgba(74,222,128,0.15)" />
        </div>
      </Grid2>
    </div>
  );
}

// ── TOAST TAB ─────────────────────────────────────────────────────────────────
function ToastTab({ isMobile }: { isMobile: boolean }) {
  return (
    <div>
      <SectionHeader title="Toast POS — Sales, Menu & Labor" sub="Last 30 Days · Francesca's Cucina" />

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: "0.75rem",
        marginBottom: "1.5rem",
      }}>
        {toastKpis.map((kpi, i) => <KpiCard key={i} {...kpi} />)}
      </div>

      <Grid2 isMobile={isMobile}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Revenue by Hour</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 16 }}>When guests are spending — helps with staffing</div>
          <BarChart data={toastHourlyBar} color={GREEN} />
          <div style={{ marginTop: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>Peak: <span style={{ color: GREEN }}>7pm ($12,480)</span></div>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>Slowest: <span style={{ color: TEXT }}>11am ($420)</span></div>
          </div>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Revenue by Menu Category</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 12 }}>Where your revenue is coming from</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: isMobile ? "wrap" : "nowrap" }}>
            <DonutChart
              slices={toastMenuCategories.map(s => ({ label: s.label, value: s.value, color: s.color }))}
              centerLabel="$94.3k"
              centerSub="revenue"
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              {toastMenuCategories.map((s, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.78rem", color: TEXT, flex: 1, minWidth: 0 }}>{s.label}</span>
                    <span style={{ fontSize: "0.78rem", color: s.color, fontWeight: 600 }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginLeft: 16 }}>
                    <div style={{ height: "100%", width: `${s.pct}%`, background: s.color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Insight text="Wine & spirits at 25.6% — strong beverage program driving margin" color={PURPLE} bg="rgba(167,139,250,0.08)" border="rgba(167,139,250,0.2)" />
        </div>
      </Grid2>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr", gap: "1rem" }}>
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Top Selling Dishes</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Most ordered items by revenue — this month</div>
          <ScrollTable>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", minWidth: 300 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Dish</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Orders</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Revenue</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Avg Price</th>
                </tr>
              </thead>
              <tbody>
                {toastTopDishes.map((d, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: TEXT, whiteSpace: "nowrap" }}>{d.dish}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{d.orders}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: GREEN, fontWeight: 600 }}>{d.revenue}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: GOLD }}>{d.avgCheck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollTable>
          <Insight text="Filet Mignon is your top revenue driver — consider featuring it prominently on the menu page" color={GREEN} bg="rgba(74,222,128,0.06)" border="rgba(74,222,128,0.15)" />
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Labor Cost Breakdown</div>
          <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Hours and cost by role — this month</div>
          <ScrollTable>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", minWidth: 240 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Role</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Hours</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>Cost</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500, whiteSpace: "nowrap" }}>% Rev</th>
                </tr>
              </thead>
              <tbody>
                {toastLaborByRole.map((r, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: TEXT, whiteSpace: "nowrap" }}>{r.role}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{r.hours}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: BLUE, fontWeight: 600 }}>{r.cost}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: r.pct > 8 ? GOLD : GREEN }}>{r.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollTable>
          <div style={{ marginTop: 8, borderTop: `1px solid ${BORDER}`, paddingTop: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.8rem", color: TEXT, fontWeight: 600 }}>Total Labor</span>
              <span style={{ fontSize: "0.8rem", color: BLUE, fontWeight: 700 }}>$27,750 (29.4%)</span>
            </div>
          </div>
          <Insight text="Total labor at 29.4% of revenue — within the healthy 28–35% restaurant benchmark" color={BLUE} bg="rgba(96,165,250,0.08)" border="rgba(96,165,250,0.2)" />
        </div>
      </div>
    </div>
  );
}

// ── MAIN DASHBOARD ────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"website" | "resy" | "toast">("website");
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const tabs = [
    { id: "website" as const, label: "Website", fullLabel: "Website Analytics", icon: "◎" },
    { id: "resy" as const, label: "Resy", fullLabel: "Resy Reservations", icon: "⬡" },
    { id: "toast" as const, label: "Toast", fullLabel: "Toast POS", icon: "▣" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: DARK,
      color: TEXT,
      fontFamily: "'DM Sans', sans-serif",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
    }}>

      {/* ── Desktop Sidebar ── */}
      {!isMobile && (
        <aside style={{
          width: 220,
          minHeight: "100vh",
          background: "#0d0d0b",
          borderRight: `1px solid ${BORDER}`,
          display: "flex",
          flexDirection: "column",
          padding: "2rem 0",
          flexShrink: 0,
        }}>
          <div style={{ padding: "0 1.5rem 2rem", borderBottom: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: GOLD, textTransform: "uppercase", marginBottom: 4 }}>
              Francesca's Cucina
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: TEXT }}>Analytics</div>
            <div style={{ fontSize: "0.7rem", color: MUTED, marginTop: 2 }}>Owner Dashboard</div>
          </div>

          <nav style={{ padding: "1.5rem 0 0", flex: 1 }}>
            <div style={{ padding: "0 1.5rem", fontSize: "0.62rem", letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase", marginBottom: 8 }}>Data Sources</div>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                textAlign: "left",
                padding: "0.7rem 1.5rem",
                background: activeTab === tab.id ? GOLD_DIM : "transparent",
                borderLeft: activeTab === tab.id ? `2px solid ${GOLD}` : "2px solid transparent",
                color: activeTab === tab.id ? GOLD : MUTED,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s",
              }}>
                <span style={{ fontSize: "0.9rem" }}>{tab.icon}</span>
                {tab.fullLabel}
              </button>
            ))}

            <div style={{ padding: "1.5rem 1.5rem 0" }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase", marginBottom: 10 }}>Connection Status</div>
              {[
                { label: "Google Analytics", status: "Connected", color: GREEN },
                { label: "Resy", status: "Pending", color: GOLD },
                { label: "Toast POS", status: "Pending", color: GOLD },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: TEXT, flex: 1 }}>{s.label}</span>
                  <span style={{ fontSize: "0.68rem", color: s.color }}>{s.status}</span>
                </div>
              ))}
            </div>
          </nav>

          <div style={{ padding: "1rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: MUTED, marginBottom: 6 }}>DATE RANGE</div>
            {["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"].map(r => (
              <button key={r} onClick={() => setDateRange(r)} style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "0.35rem 0", background: "transparent", border: "none",
                color: dateRange === r ? GOLD : MUTED,
                fontSize: "0.78rem", cursor: "pointer",
                fontWeight: dateRange === r ? 600 : 400,
              }}>
                {dateRange === r ? "▸ " : "  "}{r}
              </button>
            ))}
          </div>

          <div style={{
            margin: "1rem",
            padding: "0.6rem 0.8rem",
            background: "rgba(184,160,90,0.08)",
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            fontSize: "0.68rem",
            color: MUTED,
            lineHeight: 1.4,
          }}>
            ✦ Design mockup — illustrative data only
          </div>
        </aside>
      )}

      {/* ── Mobile Top Bar ── */}
      {isMobile && (
        <div style={{
          background: "#0d0d0b",
          borderBottom: `1px solid ${BORDER}`,
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}>
          <div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase" }}>Francesca's Cucina</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: TEXT, lineHeight: 1.2 }}>Analytics</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[
              { label: "Connected", color: GREEN },
              { label: "Resy Pending", color: GOLD },
              { label: "Toast Pending", color: GOLD },
            ].slice(0, 1).map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color }} />
                <span style={{ fontSize: "0.65rem", color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Mobile Tab Bar ── */}
      {isMobile && (
        <div style={{
          display: "flex",
          background: "#0d0d0b",
          borderBottom: `1px solid ${BORDER}`,
          padding: "0 0.5rem",
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              flex: 1,
              padding: "0.75rem 0.5rem",
              background: "transparent",
              border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${GOLD}` : "2px solid transparent",
              color: activeTab === tab.id ? GOLD : MUTED,
              fontSize: "0.78rem",
              fontWeight: activeTab === tab.id ? 600 : 400,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              transition: "all 0.2s",
            }}>
              <span style={{ fontSize: "1rem" }}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Main Content ── */}
      <main style={{
        flex: 1,
        padding: isMobile ? "1rem" : "2rem 2.5rem",
        overflowY: "auto",
        overflowX: "hidden",
        paddingBottom: isMobile ? "2rem" : "2rem",
      }}>

        {/* Desktop top bar */}
        {!isMobile && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                  padding: "0.45rem 1.2rem",
                  borderRadius: 6,
                  border: `1px solid ${activeTab === tab.id ? GOLD : BORDER}`,
                  background: activeTab === tab.id ? GOLD_DIM : "transparent",
                  color: activeTab === tab.id ? GOLD : MUTED,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  transition: "all 0.2s",
                }}>
                  {tab.icon} {tab.fullLabel}
                </button>
              ))}
            </div>
            <div style={{
              padding: "0.5rem 1.2rem",
              border: `1px solid ${BORDER}`,
              borderRadius: 6,
              fontSize: "0.78rem",
              color: GOLD,
              letterSpacing: "0.08em",
              cursor: "pointer",
            }}>
              EXPORT REPORT
            </div>
          </div>
        )}

        {/* Mobile date range selector */}
        {isMobile && (
          <div style={{ display: "flex", gap: 6, marginBottom: "1rem", overflowX: "auto", paddingBottom: 4 }}>
            {["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"].map(r => (
              <button key={r} onClick={() => setDateRange(r)} style={{
                padding: "0.3rem 0.8rem",
                borderRadius: 20,
                border: `1px solid ${dateRange === r ? GOLD : BORDER}`,
                background: dateRange === r ? GOLD_DIM : "transparent",
                color: dateRange === r ? GOLD : MUTED,
                fontSize: "0.72rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                {r}
              </button>
            ))}
          </div>
        )}

        {/* Tab Content */}
        {activeTab === "website" && <WebsiteTab isMobile={isMobile} />}
        {activeTab === "resy" && <ResyTab isMobile={isMobile} />}
        {activeTab === "toast" && <ToastTab isMobile={isMobile} />}

        {/* Mobile mockup notice */}
        {isMobile && (
          <div style={{
            marginTop: "1.5rem",
            padding: "0.6rem 0.8rem",
            background: "rgba(184,160,90,0.08)",
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            fontSize: "0.68rem",
            color: MUTED,
            lineHeight: 1.4,
            textAlign: "center",
          }}>
            ✦ Design mockup — illustrative data only
          </div>
        )}
      </main>
    </div>
  );
}
