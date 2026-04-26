import { useState } from "react";

const COMPETITORS = [
  {
    rank: "01",
    name: "Al Andalus Developments",
    type: "Premium · Andalusian-Inspired",
    tags: ["New Cairo", "North Coast", "6th October", "AI-Powered"],
    featured: true,
  },
  {
    rank: "02",
    name: "SODIC",
    type: "Owned by Aldar Properties — Abu Dhabi",
    tags: ["Beverly Hills", "Karmell", "Eastvale"],
    featured: false,
  },
  {
    rank: "03",
    name: "Palm Hills",
    type: "Luxury Residential & Coastal",
    tags: ["Katameya Heights", "Alexandria", "North Coast"],
    featured: false,
  },
  {
    rank: "04",
    name: "Emaar Misr",
    type: "Dubai-Backed Mega Developer",
    tags: ["Uptown Cairo", "Marassi", "North Coast"],
    featured: false,
  },
  {
    rank: "05",
    name: "Hassan Allam Properties",
    type: "Swan Lake · Celia",
    tags: ["New Cairo", "6th October", "Sahel"],
    featured: false,
  },
  {
    rank: "06",
    name: "Mountain View",
    type: "Gated Residential Communities",
    tags: ["iCity", "Ras El Hekma", "Sohna"],
    featured: false,
  },
];

export default function Market() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="market" style={s.section}>
      <div style={s.inner}>
        {/* Intro */}
        <div className="reveal" style={s.intro}>
          <div className="section-label">Market Position</div>
          <h2 className="section-title">
            Standing Above<br />Egypt's <em>Elite</em>
          </h2>
          <p style={s.introText}>
            In a market defined by Egypt's most established developers, Al Andalus has carved
            a distinctive identity through Andalusian heritage, uncompromising quality, and
            visionary design that no competitor can replicate.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal" style={s.grid}>
          {COMPETITORS.map((c, i) => (
            <div
              key={i}
              className="comp-card"
              style={{
                ...s.card,
                background: c.featured
                  ? "var(--gold-dim)"
                  : hovered === i
                  ? "var(--bg2)"
                  : "var(--bg)",
                borderColor: c.featured ? "rgba(201,168,76,0.3)" : "var(--border)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {c.featured && (
                <div style={s.badge}>AL ANDALUS</div>
              )}
              <div style={{ ...s.rank, color: c.featured ? "rgba(201,168,76,0.2)" : "var(--border)" }}>
                {c.rank}
              </div>
              <div style={s.name}>{c.name}</div>
              <div style={s.type}>{c.type}</div>
              <div style={s.tags}>
                {c.tags.map((t, j) => (
                  <span key={j} style={{ ...s.tag, borderColor: c.featured ? "rgba(201,168,76,0.3)" : "var(--border)", color: c.featured ? "var(--gold)" : "var(--muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { padding: "140px 60px" },
  inner: { maxWidth: 1200, margin: "0 auto" },
  intro: { maxWidth: 600, marginBottom: 72 },
  introText: { color: "var(--muted)", marginTop: 20, lineHeight: 1.85, fontSize: 15 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 1,
    background: "var(--border)",
    border: "1px solid var(--border)",
  },
  card: {
    padding: "38px 34px",
    position: "relative",
    transition: "background 0.3s",
    cursor: "none",
  },
  badge: {
    position: "absolute", top: 18, right: 18,
    fontSize: 9, letterSpacing: "0.3em", color: "var(--gold)",
    border: "1px solid var(--gold)", padding: "3px 10px",
  },
  rank: {
    fontFamily: "var(--serif)", fontSize: 52, fontWeight: 300,
    lineHeight: 1, marginBottom: 14,
  },
  name: { fontSize: 15, fontWeight: 400, marginBottom: 6, color: "var(--text)" },
  type: { fontSize: 12, color: "var(--muted)", letterSpacing: "0.06em", marginBottom: 18 },
  tags: { display: "flex", flexWrap: "wrap", gap: 7 },
  tag: {
    fontSize: 10, letterSpacing: "0.1em", padding: "4px 11px",
    border: "1px solid", transition: "border-color 0.3s",
  },
};
