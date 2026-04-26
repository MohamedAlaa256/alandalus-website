import { useEffect, useRef } from "react";

const STATS = [
  { target: 30, suffix: "+", label: "Years of Excellence" },
  { target: 52, suffix: "K", label: "Residents & Families" },
  { target: 74, suffix: "",  label: "Signature Developments" },
  { target: 5,  suffix: "",  label: "Regional Cities" },
];

function animateCounter(el, target, duration = 2000) {
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Stats() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.idx);
            animateCounter(entry.target, STATS[i].target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={s.section}>
      <div style={s.grid}>
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              ...s.item,
              borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div style={s.num}>
              <span ref={(el) => (refs.current[i] = el)} data-idx={i}>0</span>
              <span style={s.suffix}>{stat.suffix}</span>
            </div>
            <div style={s.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const s = {
  section: {
    background: "var(--bg2)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    padding: "0 60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    maxWidth: 1200,
    margin: "0 auto",
  },
  item: { textAlign: "center", padding: "60px 40px" },
  num: {
    fontFamily: "var(--serif)",
    fontSize: 72, fontWeight: 300,
    color: "var(--gold)", lineHeight: 1, marginBottom: 8,
  },
  suffix: { fontSize: 36 },
  label: {
    fontSize: 12, letterSpacing: "0.2em",
    textTransform: "uppercase", color: "var(--muted)",
  },
};
