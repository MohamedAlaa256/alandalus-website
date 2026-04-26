import { useEffect, useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Market", href: "#market" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={s.nav(scrolled)}>
      <a href="#" style={s.logo}>
        <span style={s.logoMain}>AL ANDALUS</span>
        <span style={s.logoSub}>الأندلس للتطوير العقاري</span>
      </a>

      <ul style={s.links}>
        {links.map((l, i) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{ ...s.link, color: hovered === i ? "var(--gold)" : "var(--muted)" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            style={s.cta}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-dim)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Inquire
          </a>
        </li>
      </ul>
    </nav>
  );
}

const s = {
  nav: (scrolled) => ({
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: scrolled ? "18px 60px" : "28px 60px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: scrolled ? "rgba(8,7,6,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "none",
    transition: "padding 0.4s, background 0.4s, border 0.4s",
  }),
  logo: { display: "flex", flexDirection: "column", textDecoration: "none", gap: 3 },
  logoMain: {
    fontFamily: "var(--serif)", fontSize: 16, fontWeight: 400,
    letterSpacing: "0.28em", color: "var(--text)",
  },
  logoSub: { fontSize: 9, letterSpacing: "0.2em", color: "var(--gold)", fontFamily: "var(--sans)" },
  links: { display: "flex", gap: 40, listStyle: "none", alignItems: "center" },
  link: { fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s" },
  cta: {
    border: "1px solid var(--gold)", color: "var(--gold)",
    padding: "10px 24px", fontSize: 13, letterSpacing: "0.12em",
    textTransform: "uppercase", textDecoration: "none",
    borderRadius: 2, transition: "background 0.3s", background: "transparent",
  },
};
