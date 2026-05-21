import { useEffect, useRef, useState } from "react";

// ── Francesca's Cucina — Analytics Dashboard Mockup ──────────────────────────
// Design: Dark luxury theme matching the site. Sidebar navigation, KPI cards,
// traffic sparklines, source breakdown donut, geo heatmap table, and referral table.
// All data is static/illustrative — this is a design mockup only.

const GOLD = "#b8a05a";
const GOLD_DIM = "rgba(184,160,90,0.18)";
const DARK = "#0a0a08";
const CARD = "#111110";
const BORDER = "rgba(184,160,90,0.18)";
const TEXT = "#f0ede6";
const MUTED = "rgba(240,237,230,0.5)";

// ── Sparkline data (28 days) ─────────────────────────────────────────────────
const trafficData = [310,290,340,380,420,395,450,470,510,490,530,560,520,580,610,590,640,670,650,700,720,690,750,780,760,810,840,820];
const reservationData = [18,15,22,25,28,24,30,32,35,31,37,40,36,42,44,40,46,49,47,52,54,50,56,58,55,60,63,61];
const pageViewData = [820,780,890,950,1050,990,1120,1180,1260,1220,1310,1380,1290,1440,1510,1470,1580,1640,1610,1710,1750,1690,1820,1880,1850,1940,1990,1960];
const bounceData = [52,54,50,48,46,49,44,43,41,43,40,38,41,37,35,38,34,32,35,31,30,33,29,28,30,27,26,28];

function Sparkline({ data, color = GOLD, height = 48 }: { data: number[]; color?: string; height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 4;
    ctx.clearRect(0, 0, w, h);
    // Fill gradient
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
    // Line
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

function DonutChart({ slices }: { slices: { label: string; value: number; color: string }[] }) {
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
    // Inner circle cutout
    ctx.beginPath();
    ctx.arc(cx, cy, inner, 0, Math.PI * 2);
    ctx.fillStyle = CARD;
    ctx.fill();
    // Center label
    ctx.fillStyle = TEXT;
    ctx.font = "bold 18px 'DM Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(total.toLocaleString(), cx, cy - 8);
    ctx.fillStyle = MUTED;
    ctx.font = "11px 'DM Sans', sans-serif";
    ctx.fillText("sessions", cx, cy + 10);
  }, [slices]);
  return <canvas ref={canvasRef} width={160} height={160} style={{ width: 160, height: 160 }} />;
}

function BarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80, padding: "0 4px" }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{
            width: "100%",
            height: Math.max(4, (d.value / max) * 64),
            background: `linear-gradient(to top, ${GOLD}, ${GOLD}99)`,
            borderRadius: 3,
            transition: "height 0.4s ease",
          }} />
          <span style={{ fontSize: 9, color: MUTED, letterSpacing: "0.05em" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

const kpis = [
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
  { site: "opentable.com", sessions: 980, conversions: 187, rate: "19.1%" },
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

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("overview");
  const [dateRange, setDateRange] = useState("Last 30 Days");

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "traffic", label: "Traffic" },
    { id: "sources", label: "Sources" },
    { id: "geo", label: "Geography" },
    { id: "pages", label: "Top Pages" },
    { id: "conversions", label: "Conversions" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: DARK,
      color: TEXT,
      fontFamily: "'DM Sans', sans-serif",
      display: "flex",
    }}>
      {/* ── Sidebar ── */}
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
        {/* Logo */}
        <div style={{ padding: "0 1.5rem 2rem", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: GOLD, textTransform: "uppercase", marginBottom: 4 }}>
            Francesca's Cucina
          </div>
          <div style={{ fontSize: "1rem", fontWeight: 600, color: TEXT }}>Analytics</div>
          <div style={{ fontSize: "0.7rem", color: MUTED, marginTop: 2 }}>Owner Dashboard</div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "1.5rem 0", flex: 1 }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setActiveNav(item.id)} style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "0.65rem 1.5rem",
              background: activeNav === item.id ? GOLD_DIM : "transparent",
              borderLeft: activeNav === item.id ? `2px solid ${GOLD}` : "2px solid transparent",
              color: activeNav === item.id ? GOLD : MUTED,
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
              cursor: "pointer",
              border: "none",
              transition: "all 0.2s",
            }}>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Date range selector */}
        <div style={{ padding: "1rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: MUTED, marginBottom: 6 }}>DATE RANGE</div>
          {["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"].map(r => (
            <button key={r} onClick={() => setDateRange(r)} style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "0.35rem 0",
              background: "transparent",
              border: "none",
              color: dateRange === r ? GOLD : MUTED,
              fontSize: "0.78rem",
              cursor: "pointer",
              fontWeight: dateRange === r ? 600 : 400,
            }}>
              {dateRange === r ? "▸ " : "  "}{r}
            </button>
          ))}
        </div>

        {/* Mockup badge */}
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

      {/* ── Main Content ── */}
      <main style={{ flex: 1, padding: "2rem 2.5rem", overflowY: "auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: TEXT, margin: 0 }}>Site Performance Overview</h1>
            <p style={{ color: MUTED, fontSize: "0.85rem", margin: "4px 0 0" }}>{dateRange} · francescas-cucina.com</p>
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

        {/* ── KPI Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
          {kpis.map((kpi, i) => (
            <div key={i} style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: "1.2rem 1.4rem 0.8rem",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 6 }}>{kpi.label}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
                <span style={{ fontSize: "1.8rem", fontWeight: 700, color: TEXT, lineHeight: 1 }}>{kpi.value}</span>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: kpi.up ? "#4ade80" : "#f87171",
                  background: kpi.up ? "rgba(74,222,128,0.12)" : "rgba(248,113,113,0.12)",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}>{kpi.change}</span>
              </div>
              <div style={{ fontSize: "0.7rem", color: MUTED, marginBottom: 10 }}>{kpi.sub}</div>
              <Sparkline data={kpi.data} height={40} />
            </div>
          ))}
        </div>

        {/* ── Row 2: Traffic by Day + Traffic Sources ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>

          {/* Weekly Traffic Bar */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Traffic by Day of Week</div>
            <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 16 }}>Average sessions per day — Friday & Saturday peak</div>
            <BarChart data={weeklyBar} />
            <div style={{ marginTop: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ fontSize: "0.75rem", color: MUTED }}>Peak day: <span style={{ color: GOLD }}>Saturday (4,680)</span></div>
              <div style={{ fontSize: "0.75rem", color: MUTED }}>Slowest: <span style={{ color: TEXT }}>Monday (2,140)</span></div>
            </div>
          </div>

          {/* Traffic Sources Donut */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Traffic Sources</div>
            <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 12 }}>Where your visitors are coming from</div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <DonutChart slices={sources.map(s => ({ label: s.label, value: s.value, color: s.color }))} />
              <div style={{ flex: 1 }}>
                {sources.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.78rem", color: TEXT, flex: 1 }}>{s.label}</span>
                    <span style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600 }}>{s.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 3: Referrers + Geo ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>

          {/* Referral Sites */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Top Referral Sites</div>
            <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Sites driving traffic — and which convert to reservations</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Source</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Sessions</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Reservations</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                {referrers.map((r, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                    <td style={{ padding: "7px 0", color: TEXT }}>{r.site}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{r.sessions.toLocaleString()}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: TEXT }}>{r.conversions}</td>
                    <td style={{ padding: "7px 0", textAlign: "right", color: parseFloat(r.rate) > 10 ? "#4ade80" : GOLD, fontWeight: 600 }}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 10, padding: "8px 10px", background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 6, fontSize: "0.72rem", color: "#4ade80" }}>
              ✦ OpenTable drives the highest reservation conversion rate at 19.1%
            </div>
          </div>

          {/* Geographic breakdown */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Visitor Geography</div>
            <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Where your audience is located</div>
            {geoData.map((g, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: "0.8rem", color: TEXT }}>{g.city}</span>
                  <span style={{ fontSize: "0.8rem", color: GOLD, fontWeight: 600 }}>{g.sessions.toLocaleString()} <span style={{ color: MUTED, fontWeight: 400 }}>({g.pct}%)</span></span>
                </div>
                <div style={{ height: 4, background: "rgba(184,160,90,0.12)", borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${g.pct}%`, background: `linear-gradient(to right, ${GOLD}, ${GOLD}99)`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10, padding: "8px 10px", background: GOLD_DIM, border: `1px solid ${BORDER}`, borderRadius: 6, fontSize: "0.72rem", color: GOLD }}>
              ✦ 53.9% of visitors are local Syracuse — strong community engagement
            </div>
          </div>
        </div>

        {/* ── Row 4: Top Pages + Device Split ── */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>

          {/* Top Pages */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Top Pages</div>
            <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 14 }}>Most visited pages and average time on page</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <th style={{ textAlign: "left", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Page</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Views</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Avg. Time</th>
                  <th style={{ textAlign: "right", padding: "0 0 8px", color: MUTED, fontWeight: 500 }}>Share</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((p, i) => {
                  const total = topPages.reduce((s, x) => s + x.views, 0);
                  const pct = ((p.views / total) * 100).toFixed(1);
                  return (
                    <tr key={i} style={{ borderBottom: `1px solid rgba(184,160,90,0.08)` }}>
                      <td style={{ padding: "7px 0", color: GOLD, fontFamily: "monospace" }}>{p.page}</td>
                      <td style={{ padding: "7px 0", textAlign: "right", color: TEXT }}>{p.views.toLocaleString()}</td>
                      <td style={{ padding: "7px 0", textAlign: "right", color: MUTED }}>{p.avgTime}</td>
                      <td style={{ padding: "7px 0", textAlign: "right" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                          <div style={{ width: 50, height: 4, background: "rgba(184,160,90,0.12)", borderRadius: 2 }}>
                            <div style={{ height: "100%", width: `${pct}%`, background: GOLD, borderRadius: 2 }} />
                          </div>
                          <span style={{ fontSize: "0.72rem", color: MUTED, width: 32, textAlign: "right" }}>{pct}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Device Split */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: MUTED, textTransform: "uppercase", marginBottom: 4 }}>Device Type</div>
            <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: 16 }}>How visitors access the site</div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <DonutChart slices={deviceData} />
            </div>
            {deviceData.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: d.color }} />
                <span style={{ fontSize: "0.82rem", color: TEXT, flex: 1 }}>{d.label}</span>
                <span style={{ fontSize: "0.82rem", color: GOLD, fontWeight: 600 }}>{d.value}%</span>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: "8px 10px", background: GOLD_DIM, border: `1px solid ${BORDER}`, borderRadius: 6, fontSize: "0.72rem", color: GOLD }}>
              ✦ 58% mobile — ensure mobile UX is a priority
            </div>
          </div>
        </div>

        {/* ── Marketing Insights Banner ── */}
        <div style={{
          background: "linear-gradient(135deg, rgba(184,160,90,0.12) 0%, rgba(184,160,90,0.04) 100%)",
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
          padding: "1.4rem 1.8rem",
        }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: 8 }}>
            ✦ Marketing Insights
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { title: "Invest in Google Ads", body: "43% of traffic comes from Google Search. A modest paid search budget targeting 'Italian restaurant Syracuse' could significantly increase reservations." },
              { title: "Leverage OpenTable", body: "OpenTable visitors convert at 19.1% — the highest of any source. Keeping your listing optimized and up-to-date is one of the highest-ROI marketing activities." },
              { title: "Mobile-First Content", body: "58% of visitors are on mobile devices. Ensure menu photos, reservation buttons, and phone numbers are easy to tap — especially on the Catering and Events pages." },
            ].map((tip, i) => (
              <div key={i}>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: TEXT, marginBottom: 4 }}>{tip.title}</div>
                <div style={{ fontSize: "0.75rem", color: MUTED, lineHeight: 1.6 }}>{tip.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.7rem", color: "rgba(240,237,230,0.25)" }}>
          This is a design mockup with illustrative data. A live version would connect to Google Analytics, OpenTable, and your reservation system.
        </div>

      </main>
    </div>
  );
}
