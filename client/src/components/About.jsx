import { useState } from "react";

const PILLARS = [
  {
    icon: "◈",
    title: "Master Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: "◈",
    title: "Sustainability",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    icon: "◈",
    title: "Innovation",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: "◈",
    title: "Commitment",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
  },
];

function AboutVisual() {
  return (
    <div style={s.visualWrap}>
      <div style={s.frame}>
        <svg viewBox="0 0 400 530" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <rect width="400" height="530" fill="#181512" />
          {/* Grid lines */}
          <line x1="0" y1="265" x2="400" y2="265" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="530" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
          {/* Circles */}
          <circle cx="200" cy="265" r="145" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1" />
          <circle cx="200" cy="265" r="95" fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
          <circle cx="200" cy="265" r="185" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          {/* Moorish arch */}
          <path d="M140 420 L140 280 Q140 220 200 220 Q260 220 260 280 L260 420 Z" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1" />
          {/* Star ornament */}
          <polygon points="200,185 207,208 231,208 213,222 220,245 200,232 180,245 187,222 169,208 193,208" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" />
          {/* Logo letterform */}
          <text x="200" y="296" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="80" fill="rgba(201,168,76,0.1)" fontWeight="300">الأ</text>
          {/* Corner brackets */}
          <path d="M20 20 L20 52 M20 20 L52 20" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
          <path d="M380 20 L380 52 M380 20 L348 20" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
          <path d="M20 510 L20 478 M20 510 L52 510" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
          <path d="M380 510 L380 478 M380 510 L348 510" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
          {/* Horizontal rules */}
          <line x1="55" y1="120" x2="345" y2="120" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
          <line x1="55" y1="410" x2="345" y2="410" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
        </svg>
      </div>
      {/* Accent quote box */}
      <div style={s.accentBox}>
        <p style={s.quote}>"نبني المستقبل<br/>بإلهام من الماضي"</p>
        <p style={s.quoteEn}>Building tomorrow,<br/>inspired by the past.</p>
      </div>
    </div>
  );
}

export default function About() {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  return (
    <section id="about" style={s.section}>
      <div style={s.inner}>
        {/* Visual */}
        <div className="reveal">
          <AboutVisual />
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="section-label">Our Story</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            Built on <em>Vision</em>,<br />Defined by Legacy
          </h2>

          <p style={s.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={s.body}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <strong style={{ color: "var(--text)", fontWeight: 400 }}>Excepteur sint occaecat cupidatat non proident</strong>, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis unde omnis.
          </p>
          <p style={s.body}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>

          {/* Pillars grid */}
          <div style={s.pillarsGrid}>
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="pillar"
                style={{
                  ...s.pillar,
                  borderColor: hoveredPillar === i ? "var(--gold)" : "var(--border)",
                  background: hoveredPillar === i ? "var(--gold-dim)" : "transparent",
                }}
                onMouseEnter={() => setHoveredPillar(i)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div style={s.pillarIcon}>{p.icon}</div>
                <h4 style={s.pillarTitle}>{p.title}</h4>
                <p style={s.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "140px 60px" },
  inner: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" },
  visualWrap: { position: "relative" },
  frame: { border: "1px solid var(--border)", aspectRatio: "3/4", background: "var(--bg3)", overflow: "hidden" },
  accentBox: {
    position: "absolute", bottom: -24, right: -24,
    width: "55%", background: "var(--bg2)",
    border: "1px solid var(--border)",
    padding: "28px 32px",
  },
  quote: {
    fontFamily: "var(--serif)", fontSize: 20, fontStyle: "italic",
    color: "var(--gold)", lineHeight: 1.6, marginBottom: 8,
    textAlign: "center",
  },
  quoteEn: {
    fontFamily: "var(--serif)", fontSize: 13, color: "var(--muted)",
    lineHeight: 1.6, textAlign: "center", fontStyle: "italic",
  },
  body: { fontSize: 15, color: "var(--muted)", lineHeight: 1.92, marginBottom: 22 },
  pillarsGrid: { marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  pillar: {
    border: "1px solid var(--border)", padding: "22px 24px", borderRadius: 1,
    transition: "border-color 0.3s, background 0.3s", cursor: "none",
  },
  pillarIcon: { color: "var(--gold)", marginBottom: 10, fontSize: 18 },
  pillarTitle: { fontSize: 13, fontWeight: 400, letterSpacing: "0.08em", marginBottom: 6, color: "var(--text)" },
  pillarDesc: { fontSize: 12, color: "var(--muted)", lineHeight: 1.75 },
};
