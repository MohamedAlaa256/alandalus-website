const ITEMS = [
  "New Cairo", "North Coast", "6th October", "New Zayed",
  "New Administrative Capital", "Sheikh Zayed", "Sahel",
  "New Cairo", "North Coast", "6th October", "New Zayed",
  "New Administrative Capital", "Sheikh Zayed", "Sahel",
];

export default function Marquee() {
  return (
    <div style={s.wrapper}>
      <div style={s.track}>
        {ITEMS.map((item, i) => (
          <span key={i} style={s.item}>
            {item}
            <span style={s.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const s = {
  wrapper: {
    overflow: "hidden",
    borderBottom: "1px solid var(--border)",
    padding: "18px 0",
    background: "var(--bg3)",
  },
  track: {
    display: "flex",
    gap: 56,
    whiteSpace: "nowrap",
    animation: "marqueeAnim 38s linear infinite",
  },
  item: {
    fontFamily: "var(--serif)",
    fontSize: 17,
    fontWeight: 300,
    color: "var(--muted)",
    letterSpacing: "0.04em",
    flexShrink: 0,
  },
  dot: {
    color: "var(--gold)",
    margin: "0 10px",
    fontSize: 10,
    verticalAlign: "middle",
  },
};
