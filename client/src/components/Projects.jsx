import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    tag: "Coastal · North Coast",
    name: "Al Qasr",
    nameAr: "القصر",
    location: "Mediterranean Beachfront · 580 Acres",
    large: true,
    art: "coastal",
  },
  {
    id: 2,
    tag: "Residential · New Cairo",
    name: "Al Boustane",
    nameAr: "البستان",
    location: "New Cairo · Gated Community · 430 Acres",
    large: false,
    art: "garden",
  },
  {
    id: 3,
    tag: "Mixed-Use · 6th October",
    name: "Al Manar",
    nameAr: "المنار",
    location: "6th October City · Mixed-Use Towers",
    large: false,
    art: "towers",
  },
];

function CoastalArt() {
  return (
    <svg viewBox="0 0 600 760" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#040c18" />
          <stop offset="100%" stopColor="#091828" />
        </linearGradient>
        <linearGradient id="sea1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2438" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#051525" />
        </linearGradient>
      </defs>
      <rect width="600" height="760" fill="url(#sky1)" />
      <ellipse cx="300" cy="0" rx="260" ry="200" fill="rgba(29,107,90,0.06)" />
      {/* Stars */}
      {[[80,55],[200,28],[450,76],[530,38],[150,95],[390,48],[60,140],[480,120]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={i%2===0?1:1.5} fill={i%3===0?"#C9A84C":"white"} opacity={0.3+Math.random()*0.4}/>
      ))}
      {/* Moon */}
      <circle cx="480" cy="85" r="26" fill="#1a2438" />
      <circle cx="496" cy="77" r="26" fill="#091828" />
      {/* Dunes/hills */}
      <polygon points="0,530 130,310 250,490 360,270 470,410 600,325 600,760 0,760" fill="#0d1a28" opacity="0.8" />
      <polygon points="0,590 90,410 190,530 290,370 390,470 510,365 600,410 600,760 0,760" fill="#091522" />
      {/* Sea */}
      <rect x="0" y="570" width="600" height="190" fill="url(#sea1)" />
      {/* Waves */}
      <path d="M0 590 Q75 575 150 590 Q225 605 300 590 Q375 575 450 590 Q525 605 600 590" fill="none" stroke="rgba(201,168,76,0.14)" strokeWidth="1.5" />
      <path d="M0 618 Q100 603 200 618 Q300 633 400 618 Q500 603 600 618" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
      {/* Arch building (Moorish inspired) */}
      <rect x="195" y="370" width="48" height="160" fill="#0a1828" opacity="0.95" />
      {/* Arch top */}
      <ellipse cx="219" cy="370" rx="24" ry="28" fill="#0a1828" opacity="0.95" />
      <rect x="248" y="340" width="68" height="190" fill="#0c1c30" />
      <ellipse cx="282" cy="340" rx="34" ry="32" fill="#0c1c30" />
      <rect x="328" y="360" width="50" height="170" fill="#091424" opacity="0.95" />
      <ellipse cx="353" cy="360" rx="25" ry="26" fill="#091424" opacity="0.95" />
      {/* Windows */}
      {[[200,385],[214,385],[200,408],[260,355],[278,355],[298,355],[260,375],[298,375],[336,374],[336,394]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width={i<6?10:10} height={7} fill={`rgba(201,168,76,${0.3+Math.random()*0.3})`} rx="1" />
      ))}
      {/* Reflection */}
      <path d="M240 580 L285 760" stroke="rgba(201,168,76,0.1)" strokeWidth="22" />
      <path d="M310 576 L320 760" stroke="rgba(201,168,76,0.06)" strokeWidth="14" />
    </svg>
  );
}

function GardenArt() {
  return (
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <rect width="600" height="400" fill="#0c0904" />
      <ellipse cx="300" cy="400" rx="360" ry="210" fill="#160f05" opacity="0.8" />
      {/* Cypress trees */}
      <ellipse cx="70" cy="255" rx="38" ry="90" fill="#162510" opacity="0.95" />
      <rect x="65" y="335" width="10" height="65" fill="#0e1a08" />
      <ellipse cx="520" cy="235" rx="42" ry="100" fill="#162510" opacity="0.95" />
      <rect x="515" y="325" width="10" height="75" fill="#0e1a08" />
      <ellipse cx="155" cy="285" rx="28" ry="62" fill="#122010" opacity="0.75" />
      <rect x="150" y="338" width="8" height="62" fill="#0e1a08" />
      <ellipse cx="445" cy="268" rx="32" ry="72" fill="#122010" opacity="0.75" />
      <rect x="440" y="330" width="8" height="70" fill="#0e1a08" />
      {/* Fountain / Courtyard */}
      <ellipse cx="300" cy="340" rx="55" ry="14" fill="rgba(29,107,90,0.15)" />
      <ellipse cx="300" cy="335" rx="30" ry="8" fill="rgba(29,107,90,0.1)" />
      <rect x="293" y="295" width="14" height="42" fill="#1a140a" />
      {/* Villa */}
      <rect x="218" y="215" width="164" height="120" fill="#1c1408" />
      {/* Arched facade */}
      <ellipse cx="300" cy="215" rx="82" ry="28" fill="#231a0c" />
      <polygon points="205,215 395,215 380,175 220,175" fill="#2a200e" />
      {/* Ornamental arch door */}
      <rect x="282" y="290" width="36" height="44" fill="#0c0904" />
      <ellipse cx="300" cy="290" rx="18" ry="20" fill="#0c0904" />
      {/* Windows */}
      {[[232,228],[260,228],[332,228],[360,228],[232,258],[360,258]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width={20} height={16} fill={`rgba(201,168,76,${0.3+0.2*(i%3)})`} rx="1" />
      ))}
      {/* Garden path */}
      <path d="M240 400 Q270 340 300 300 Q330 340 360 400" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
      <ellipse cx="300" cy="360" rx="60" ry="14" fill="rgba(201,168,76,0.05)" />
    </svg>
  );
}

function TowersArt() {
  return (
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <rect width="600" height="400" fill="#05070D" />
      <ellipse cx="300" cy="100" rx="220" ry="120" fill="rgba(29,107,90,0.05)" />
      {/* Left tower */}
      <rect x="110" y="90" width="85" height="310" fill="#0d1020" />
      <rect x="120" y="100" width="65" height="300" fill="#0F1630" />
      {/* Left windows */}
      {[100,125,150,175,200,225,250].map((y,i)=>[138,156,174].map((x,j)=>(
        <rect key={`l${i}${j}`} x={x} y={y} width={11} height={8} fill={`rgba(201,168,76,${0.2+0.15*((i+j)%3)})`} rx="1"/>
      )))}
      {/* Center tower (tallest) */}
      <rect x="238" y="30" width="124" height="370" fill="#09101E" />
      <rect x="248" y="40" width="104" height="360" fill="#0D1428" />
      {/* Moorish crown */}
      <path d="M238 30 Q260 0 300 10 Q340 0 362 30" fill="#0D1428" />
      {/* Center windows */}
      {[55,82,109,136,163,190,217,244].map((y,i)=>[262,284,308,330].map((x,j)=>(
        <rect key={`c${i}${j}`} x={x} y={y} width={14} height={10} fill={`rgba(201,168,76,${0.25+0.15*((i+j)%3)})`} rx="1"/>
      )))}
      {/* Right tower */}
      <rect x="405" y="120" width="85" height="280" fill="#0d1020" />
      <rect x="415" y="130" width="65" height="270" fill="#0F1630" />
      {/* Right windows */}
      {[140,165,190,215,240,265].map((y,i)=>[423,441,459].map((x,j)=>(
        <rect key={`r${i}${j}`} x={x} y={y} width={11} height={8} fill={`rgba(201,168,76,${0.2+0.15*((i+j)%3)})`} rx="1"/>
      )))}
      {/* Ground */}
      <rect x="0" y="375" width="600" height="25" fill="rgba(5,7,13,0.95)" />
      <ellipse cx="300" cy="390" rx="180" ry="18" fill="rgba(201,168,76,0.06)" />
      {/* Reflection streaks */}
      <path d="M295 380 L290 400" stroke="rgba(201,168,76,0.1)" strokeWidth="18" />
      <path d="M310 378 L315 400" stroke="rgba(201,168,76,0.06)" strokeWidth="10" />
    </svg>
  );
}

const ART_MAP = { coastal: CoastalArt, garden: GardenArt, towers: TowersArt };

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const Art = ART_MAP[project.art];

  return (
    <div
      className="project-card"
      style={{
        ...s.card,
        gridRow: project.large ? "span 2" : "span 1",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Art layer */}
      <div style={{ ...s.imgWrap, minHeight: project.large ? 760 : 400, transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
        <Art />
        {/* Overlay */}
        <div style={{ ...s.overlay, background: hovered ? "linear-gradient(to top, rgba(6,8,10,0.96) 0%, rgba(6,8,10,0.45) 55%, rgba(6,8,10,0.1) 100%)" : "linear-gradient(to top, rgba(6,8,10,0.9) 0%, rgba(6,8,10,0.2) 60%, transparent 100%)", transition: "background 0.4s" }} />
      </div>

      {/* Info */}
      <div style={{ ...s.info, transform: hovered ? "translateY(0)" : "translateY(8px)", transition: "transform 0.4s" }}>
        <div style={s.tag}>{project.tag}</div>
        <h3 style={s.name}>
          {project.name} <span style={{ color: "var(--gold)", opacity: 0.6, fontSize: project.large ? 28 : 20, fontStyle: "italic" }}>{project.nameAr}</span>
        </h3>
        <p style={s.loc}>{project.location}</p>
        <a href="#contact" style={{ ...s.link, opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.3s 0.08s, transform 0.3s 0.08s" }}>
          Discover Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={s.section}>
      <div style={s.header} className="reveal">
        <div>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Iconic <em>Communities</em><br/>Across Egypt</h2>
        </div>
        <a href="#contact" className="btn-ghost" style={{ marginBottom: 12 }}>
          View All Projects
          <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>

      <div style={s.grid}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

const s = {
  section: { padding: "140px 60px", maxWidth: 1300, margin: "0 auto" },
  header: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72 },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 },
  card: { position: "relative", overflow: "hidden", cursor: "none" },
  imgWrap: { width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "var(--bg3)" },
  overlay: { position: "absolute", inset: 0 },
  info: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 40 },
  tag: { fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 },
  name: { fontFamily: "var(--serif)", fontSize: 36, fontWeight: 400, color: "var(--text)", marginBottom: 8, lineHeight: 1.2 },
  loc: { fontSize: 13, color: "var(--muted)", marginBottom: 20 },
  link: {
    display: "inline-flex", alignItems: "center", gap: 8,
    color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em",
    textTransform: "uppercase", textDecoration: "none",
  },
};
