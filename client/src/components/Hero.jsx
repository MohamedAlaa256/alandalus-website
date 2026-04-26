import { useEffect, useRef } from "react";

export default function Hero() {
  const eyebrowRef = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const arabicRef  = useRef(null);
  const subRef     = useRef(null);
  const actionsRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Particles
    const container = particlesRef.current;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.style.cssText = `
        position:absolute; border-radius:50%;
        background:#C9A84C;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * 25}%;
        width:${1 + Math.random() * 2}px;
        height:${1 + Math.random() * 2}px;
        opacity:0;
        animation:floatUp ${6 + Math.random() * 12}s linear ${Math.random() * 8}s infinite;
      `;
      container.appendChild(p);
    }

    const show = (el, delay) => {
      if (!el) return;
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      }, delay);
    };

    show(eyebrowRef.current, 300);
    show(line1Ref.current,   600);
    show(line2Ref.current,   820);
    show(arabicRef.current,  1060);
    show(subRef.current,     1260);
    show(actionsRef.current, 1460);
  }, []);

  return (
    <section id="hero" style={s.hero}>
      <div style={s.heroBg} />
      <div className="moorish-pattern" />
      <div ref={particlesRef} style={s.particles} />

      <div style={s.content}>
        <div ref={eyebrowRef} style={{ ...s.eyebrow, opacity: 0, transform: "translateY(20px)" }}>
          Est. 1994 — Cairo, Egypt
        </div>

        <h1 style={s.title}>
          <span ref={line1Ref} style={{ ...s.line, opacity: 0, transform: "translateY(60px)" }}>
            Inspired by Legacy.
          </span>
          <span ref={line2Ref} style={{ ...s.line, opacity: 0, transform: "translateY(60px)" }}>
            Built for <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Tomorrow.</em>
          </span>
        </h1>

        <div ref={arabicRef} style={{ ...s.arabic, opacity: 0, transform: "translateY(20px)" }}>
          الأندلس للتطوير العقاري
        </div>

        <p ref={subRef} style={{ ...s.sub, opacity: 0, transform: "translateY(20px)" }}>
          Egypt's most distinguished developer of Andalusian-inspired communities.
          Crafting iconic living across New Cairo, West Cairo, and the Mediterranean Coast.
        </p>

        <div ref={actionsRef} style={{ ...s.actions, opacity: 0, transform: "translateY(20px)" }}>
          <a href="#projects" className="btn-primary">Explore Projects</a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
            <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={s.scrollIndicator}>
        <span style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--muted)" }}>SCROLL</span>
        <div style={s.scrollLine} />
      </div>

      {/* Corner marks */}
      {[
        { top: 80, left: 40,  d: "M0 40V0H40" },
        { top: 80, right: 40, d: "M40 40V0H0" },
        { bottom: 80, left: 40,  d: "M0 0V40H40" },
        { bottom: 80, right: 40, d: "M40 0V40H0" },
      ].map((corner, i) => (
        <svg key={i} style={{ position: "absolute", opacity: 0.3, ...corner }} width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d={corner.d} stroke="var(--gold)" strokeWidth="0.8"/>
        </svg>
      ))}
    </section>
  );
}

const s = {
  hero: {
    height: "100vh", minHeight: 700,
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden",
  },
  heroBg: {
    position: "absolute", inset: 0,
    background: `
      radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 70%),
      radial-gradient(ellipse 40% 80% at 10% 20%, rgba(201,168,76,0.04) 0%, transparent 60%),
      linear-gradient(180deg, #080706 0%, #0f0d0a 100%)
    `,
  },
  particles: { position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" },
  content: { position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900, padding: "0 40px 140px" },
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 16,
    color: "var(--gold)", fontSize: 11, letterSpacing: "0.3em",
    textTransform: "uppercase", marginBottom: 40, fontFamily: "var(--sans)",
  },
  title: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(56px, 8vw, 100px)",
    fontWeight: 300, lineHeight: 1.05, marginBottom: 28, color: "var(--text)",
  },
  line: { display: "block" },
  arabic: {
    fontFamily: "var(--serif)", fontSize: "clamp(18px, 2.2vw, 26px)",
    color: "rgba(201,168,76,0.4)", letterSpacing: "0.1em",
    fontWeight: 300, marginBottom: 28,
  },
  sub: {
    fontSize: 16, color: "var(--muted)", lineHeight: 1.8,
    maxWidth: 520, margin: "0 auto 52px",
  },
  actions: { display: "flex", alignItems: "center", gap: 24, justifyContent: "center" },
  scrollIndicator: {
    position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
    opacity: 0, animation: "fadeInDown 1s 2.8s forwards",
  },
  scrollLine: {
    width: 1, height: 60,
    background: "linear-gradient(to bottom, var(--gold), transparent)",
    animation: "scrollPulse 2s ease-in-out infinite",
  },
};
