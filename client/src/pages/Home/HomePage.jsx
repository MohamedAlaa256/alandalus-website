import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import './HomePage.css';

// Project card data
const FEATURED_PROJECTS = [
  {
    id: '1',
    name: 'Alandalus Gardens',
    location: 'New Cairo, 5th Settlement',
    type: 'Residential',
    status: 'Available',
    units: 800,
    area: '120 acres',
    price: 'From EGP 3.2M',
    gradient: 'linear-gradient(135deg, #1a1508 0%, #2d2410 50%, #1a1508 100%)',
    accent: '#8B9B5A',
  },
  {
    id: '2',
    name: 'Qurtuba Heights',
    location: 'Sheikh Zayed, 6th of October',
    type: 'Mixed-Use',
    status: 'Under Construction',
    units: 450,
    area: '45 acres',
    price: 'From EGP 5.1M',
    gradient: 'linear-gradient(135deg, #0d1520 0%, #152035 50%, #0d1520 100%)',
    accent: '#5A7B9B',
  },
  {
    id: '3',
    name: 'Sevilla Coast',
    location: 'North Coast, Ras El Hikma',
    type: 'Resort',
    status: 'Available',
    units: 600,
    area: '200 acres',
    price: 'From EGP 4.5M',
    gradient: 'linear-gradient(135deg, #0a1a15 0%, #112b22 50%, #0a1a15 100%)',
    accent: '#5A9B8B',
  },
];

const STATS = [
  { value: '18+', label: 'Years of Excellence' },
  { value: '12K+', label: 'Units Delivered' },
  { value: '4', label: 'Active Compounds' },
  { value: '98%', label: 'Client Satisfaction' },
];

const ACHIEVEMENTS = [
  { year: '2006', text: 'Company founded with a vision of Andalusian-inspired living' },
  { year: '2011', text: 'First landmark project delivered — Alandalus Phase I' },
  { year: '2016', text: 'Expanded to North Coast with Sevilla Coast resort community' },
  { year: '2021', text: 'Entered the Administrative Capital with Granada Business Park' },
  { year: '2024', text: 'Won "Best Developer of the Year" at Egypt Real Estate Awards' },
];

// Animated arch shape SVG
const ArchDecoration = () => (
  <svg className="arch-deco" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 280 L20 120 Q20 20 100 20 Q180 20 180 120 L180 280" stroke="var(--color-gold)" strokeWidth="0.5" fill="none" opacity="0.4"/>
    <path d="M40 280 L40 130 Q40 50 100 50 Q160 50 160 130 L160 280" stroke="var(--color-gold)" strokeWidth="0.5" fill="none" opacity="0.25"/>
    <circle cx="100" cy="20" r="4" fill="var(--color-gold)" opacity="0.6"/>
    <circle cx="20" cy="120" r="2" fill="var(--color-gold)" opacity="0.4"/>
    <circle cx="180" cy="120" r="2" fill="var(--color-gold)" opacity="0.4"/>
  </svg>
);

// Geometric pattern
const GeometricPattern = ({ size = 80, opacity = 0.08 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={{ opacity }}>
    <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" stroke="var(--color-gold)" strokeWidth="1" fill="none"/>
    <polygon points="40,14 66,26 66,54 40,66 14,54 14,26" stroke="var(--color-gold)" strokeWidth="0.5" fill="none"/>
    <circle cx="40" cy="40" r="8" stroke="var(--color-gold)" strokeWidth="0.5" fill="none"/>
  </svg>
);

const HomePage = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [count, setCount] = useState({ years: 0, units: 0, projects: 0, satisfaction: 0 });
  const statsRef = useRef(null);
  const sectionRef = useReveal();

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
  }, []);

  // Counter animation on stats
  useEffect(() => {
    const targets = { years: 18, units: 12000, projects: 4, satisfaction: 98 };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount({
              years: Math.round(targets.years * eased),
              units: Math.round(targets.units * eased),
              projects: Math.round(targets.projects * eased),
              satisfaction: Math.round(targets.satisfaction * eased),
            });
            if (step >= steps) clearInterval(interval);
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage" ref={sectionRef}>
      {/* ===== HERO ===== */}
      <section className={`hero ${heroLoaded ? 'hero--loaded' : ''}`}>
        <div className="hero__bg">
          <div className="hero__bg-gradient" />
          <div className="hero__bg-pattern">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="hero__bg-diamond" style={{
                left: `${10 + i * 16}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + i * 2}s`
              }} />
            ))}
          </div>
        </div>

        <div className="hero__arch-left"><ArchDecoration /></div>
        <div className="hero__arch-right"><ArchDecoration /></div>

        <div className="hero__content container">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span>Est. 2006 — Cairo, Egypt</span>
          </div>
          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--1">Where Heritage</span>
            <span className="hero__title-line hero__title-line--2">
              <em>Meets</em> The Future
            </span>
          </h1>
          <p className="hero__subtitle">
            Al Alandalus Developments crafts extraordinary communities across Egypt,
            inspired by the timeless elegance of Andalusian architecture.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              Explore Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn--ghost">Request a Viewing</Link>
          </div>

          <div className="hero__scroll-indicator">
            <div className="hero__scroll-line" />
            <span>Scroll</span>
          </div>
        </div>

        {/* Project ticker */}
        <div className="hero__ticker">
          {[...FEATURED_PROJECTS, ...FEATURED_PROJECTS].map((p, i) => (
            <span key={i} className="hero__ticker-item">
              <span className="hero__ticker-dot" />
              {p.name} — {p.location}
            </span>
          ))}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stats-item reveal">
              <div className="stats-value">{count.years}+</div>
              <div className="stats-label">Years of Excellence</div>
            </div>
            <div className="stats-item reveal reveal-delay-1">
              <div className="stats-value">{count.units >= 1000 ? `${(count.units/1000).toFixed(0)}K+` : count.units}</div>
              <div className="stats-label">Units Delivered</div>
            </div>
            <div className="stats-item reveal reveal-delay-2">
              <div className="stats-value">{count.projects}</div>
              <div className="stats-label">Active Compounds</div>
            </div>
            <div className="stats-item reveal reveal-delay-3">
              <div className="stats-value">{count.satisfaction}%</div>
              <div className="stats-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Signature <em>Communities</em></h2>
            <p className="section-desc">
              Each project is a carefully curated world, designed to elevate how people live, work, and connect.
            </p>
          </div>

          <div className="projects-showcase">
            <div className="projects-tabs reveal">
              {FEATURED_PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  className={`project-tab ${activeProject === i ? 'active' : ''}`}
                  onClick={() => setActiveProject(i)}
                  style={{ '--accent': p.accent }}
                >
                  <span className="project-tab__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="project-tab__name">{p.name}</span>
                  <span className="project-tab__type">{p.type}</span>
                </button>
              ))}
              <Link to="/projects" className="project-tab project-tab--all">
                <span>View All Projects</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>

            <div className="project-showcase reveal reveal-delay-2">
              {FEATURED_PROJECTS.map((project, i) => (
                <div
                  key={project.id}
                  className={`project-card ${activeProject === i ? 'active' : ''}`}
                  style={{ background: project.gradient }}
                >
                  <div className="project-card__geo">
                    <GeometricPattern size={120} opacity={0.12} />
                  </div>
                  <div className="project-card__arch">
                    <svg viewBox="0 0 300 400" fill="none">
                      <path d="M50 380 L50 160 Q50 20 150 20 Q250 20 250 160 L250 380" stroke="white" strokeWidth="0.5" fill="none" opacity="0.1"/>
                    </svg>
                  </div>
                  <div className="project-card__content">
                    <div className="project-card__meta">
                      <span className="project-card__type">{project.type}</span>
                      <span className={`project-card__status project-card__status--${project.status === 'Available' ? 'green' : 'orange'}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-card__name">{project.name}</h3>
                    <div className="project-card__location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {project.location}
                    </div>
                    <div className="project-card__stats">
                      <div className="project-card__stat">
                        <span className="project-card__stat-value">{project.units.toLocaleString()}</span>
                        <span className="project-card__stat-label">Units</span>
                      </div>
                      <div className="project-card__stat">
                        <span className="project-card__stat-value">{project.area}</span>
                        <span className="project-card__stat-label">Area</span>
                      </div>
                      <div className="project-card__stat">
                        <span className="project-card__stat-value">{project.price}</span>
                        <span className="project-card__stat-label">Starting Price</span>
                      </div>
                    </div>
                    <Link to={`/projects/${project.id}`} className="project-card__cta">
                      Explore Project
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </Link>
                  </div>
                  <div className="project-card__price-badge">
                    {project.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT STRIP ===== */}
      <section className="about-strip">
        <div className="about-strip__pattern">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="about-strip__geo" style={{ left: `${i * 14}%`, animationDelay: `${i * 0.5}s` }}>
              <GeometricPattern size={60} opacity={0.06} />
            </div>
          ))}
        </div>
        <div className="container">
          <div className="about-strip__inner">
            <div className="about-strip__text reveal">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Building Egypt's <em>Most Coveted</em> Addresses</h2>
              <p>
                For over 18 years, Al Alandalus Developments has been redefining the Egyptian real estate landscape.
                Inspired by the legendary Andalusian civilization — a golden era of art, architecture, and culture — we build
                communities that transcend mere housing. We create living experiences that resonate with the soul.
              </p>
              <p>
                From the heart of New Cairo to the shores of the Mediterranean, our projects stand as testaments
                to master craftsmanship, sustainable design, and an unwavering commitment to our clients.
              </p>
              <Link to="/about" className="btn btn--outline">
                Our Full Story
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
            <div className="about-strip__timeline reveal reveal-delay-2">
              {ACHIEVEMENTS.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-item__year">{item.year}</div>
                  <div className="timeline-item__dot" />
                  <div className="timeline-item__text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE PILLARS ===== */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">The Alandalus <em>Promise</em></h2>
          </div>
          <div className="pillars-grid">
            {[
              { icon: '⬡', title: 'Masterful Design', desc: 'Every project is a collaboration with internationally acclaimed architects, fusing Andalusian heritage with contemporary vision.' },
              { icon: '◈', title: 'On-Time Delivery', desc: 'We have a 98% on-time delivery record across all our projects, ensuring your investment is protected and your home is ready when promised.' },
              { icon: '◇', title: 'Premium Amenities', desc: 'From private beach clubs and championship golf courses to curated retail boulevards and world-class schools — we build complete worlds.' },
              { icon: '○', title: 'Sustainable Living', desc: 'LEED-certified developments, green corridors, and smart building technologies are embedded in every project we create.' },
            ].map((p, i) => (
              <div key={i} className={`pillar reveal reveal-delay-${i}`}>
                <div className="pillar__icon">{p.icon}</div>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container">
          <div className="cta-banner__inner reveal">
            <div className="cta-banner__deco">
              <ArchDecoration />
            </div>
            <span className="section-label">Start Your Journey</span>
            <h2 className="cta-banner__title">Find Your Place <em>in the Sun</em></h2>
            <p>Our expert advisors are ready to guide you to your perfect home, investment, or commercial space.</p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn--gold">Book a Consultation</Link>
              <a href="tel:+20223456789" className="btn btn--ghost-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.49 12 19.79 19.79 0 01.44 3.36 2 2 0 012.42 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                +20 2 2345 6789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
