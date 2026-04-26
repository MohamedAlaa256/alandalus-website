const COL1 = [
  { label: "Al Qasr — North Coast", href: "#projects" },
  { label: "Al Boustane — New Cairo", href: "#projects" },
  { label: "Al Manar — 6th October", href: "#projects" },
  { label: "All Developments", href: "#projects" },
];
const COL2 = [
  { label: "About Al Andalus", href: "#about" },
  { label: "Leadership", href: "#about" },
  { label: "Sustainability", href: "#about" },
  { label: "Careers", href: "#contact" },
  { label: "Investor Relations", href: "#contact" },
];
const COL3 = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitter / X", href: "#" },
];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.top}>
        {/* Brand */}
        <div style={s.brand}>
          <a href="#" style={s.logo}>
            <span style={s.logoMain}>AL ANDALUS</span>
            <span style={s.logoSub}>الأندلس للتطوير العقاري</span>
          </a>
          <p style={s.tagline}>
            Egypt's most distinguished developer of Andalusian-inspired communities.
            Crafting iconic living since 1994.
          </p>
          {/* Ornament */}
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style={{ marginTop: 20, opacity: 0.4 }}>
            <path d="M0 6H24M36 6H60M30 0L27 6L30 12L33 6Z" stroke="var(--gold)" strokeWidth="0.8"/>
          </svg>
        </div>

        {/* Columns */}
        <FooterCol title="Projects" links={COL1} />
        <FooterCol title="Company" links={COL2} />
        <FooterCol title="Connect" links={COL3} />
      </div>

      <div style={s.bottom}>
        <p style={s.copy}>© 2026 Al Andalus Developments S.A.E. All rights reserved.</p>
        <p style={s.copy}>Privacy Policy · Terms of Use · Cookie Settings</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 style={s.colTitle}>{title}</h5>
      <ul style={{ listStyle: "none" }}>
        {links.map((l, i) => (
          <li key={i} style={{ marginBottom: 11 }}>
            <a href={l.href} style={s.colLink}
              onMouseEnter={e => (e.target.style.color = "var(--text)")}
              onMouseLeave={e => (e.target.style.color = "var(--muted)")}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const s = {
  footer: { background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "60px 60px 40px" },
  top: { display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 },
  brand: {},
  logo: { textDecoration: "none", display: "flex", flexDirection: "column", gap: 3, marginBottom: 16 },
  logoMain: { fontFamily: "var(--serif)", fontSize: 15, fontWeight: 400, letterSpacing: "0.28em", color: "var(--text)" },
  logoSub: { fontSize: 9, letterSpacing: "0.2em", color: "var(--gold)", fontFamily: "var(--sans)" },
  tagline: { fontSize: 13, color: "var(--muted)", lineHeight: 1.85, maxWidth: 270 },
  colTitle: { fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 },
  colLink: { fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" },
  bottom: {
    borderTop: "1px solid var(--border)", paddingTop: 28,
    display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  copy: { fontSize: 12, color: "var(--muted)" },
};
