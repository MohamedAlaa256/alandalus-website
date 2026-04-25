import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import './AboutPage.css';

const LEADERSHIP = [
  { name: 'Khalid Al Alandalus', title: 'Founder & Chairman', initials: 'KA' },
  { name: 'Layla Rashidi', title: 'Chief Executive Officer', initials: 'LR' },
  { name: 'Omar Hassan', title: 'Chief Development Officer', initials: 'OH' },
  { name: 'Sara Mostafa', title: 'Head of Design & Architecture', initials: 'SM' },
];

const VALUES = [
  { label: 'Heritage', desc: 'We draw inspiration from the golden era of Andalusian civilization — a time when art, science, and architecture flourished together.' },
  { label: 'Excellence', desc: 'Every brick, every garden, every amenity is chosen with intention. We do not build houses — we craft legacies.' },
  { label: 'Integrity', desc: 'Transparent pricing, honest timelines, and clear communication define every relationship with our clients and partners.' },
  { label: 'Community', desc: 'We believe great developments are not measured in square meters but in the strength of the communities they nurture.' },
];

const AboutPage = () => {
  const ref = useReveal();

  return (
    <div className="about-page" ref={ref}>
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <span className="section-label">Our Story</span>
            <h1 className="page-hero__title">
              The Art of <em>Building Dreams</em>
            </h1>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__text reveal">
              <p className="about-intro__lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="about-intro__aside reveal reveal-delay-2">
              <div className="about-intro__quote">
                <blockquote>
                  "We do not simply build buildings. We architect the stories that generations will tell."
                </blockquote>
                <cite>— Khalid Al Alandalus, Founder</cite>
              </div>
              <div className="about-intro__numbers">
                <div className="about-number">
                  <span className="about-number__val">2006</span>
                  <span className="about-number__lbl">Year Founded</span>
                </div>
                <div className="about-number">
                  <span className="about-number__val">18+</span>
                  <span className="about-number__lbl">Years Experience</span>
                </div>
                <div className="about-number">
                  <span className="about-number__val">12K+</span>
                  <span className="about-number__lbl">Happy Families</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card reveal">
              <div className="mission-card__icon">◈</div>
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="mission-card reveal reveal-delay-1">
              <div className="mission-card__icon">◇</div>
              <h3>Our Vision</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core <em>Values</em></h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className={`value-item reveal reveal-delay-${i}`}>
                <div className="value-item__num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="value-item__label">{v.label}</h3>
                <p className="value-item__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">The Team</span>
            <h2 className="section-title">Visionary <em>Leadership</em></h2>
            <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="leadership-grid">
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className={`leader-card reveal reveal-delay-${i}`}>
                <div className="leader-card__avatar">
                  <span>{leader.initials}</span>
                  <div className="leader-card__avatar-ring" />
                </div>
                <div className="leader-card__info">
                  <h4 className="leader-card__name">{leader.name}</h4>
                  <p className="leader-card__title">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal">
        <div className="container">
          <div className="about-cta__inner">
            <h2>Ready to Find Your <em>Perfect Space?</em></h2>
            <p>Our advisors are available 7 days a week to guide your journey.</p>
            <Link to="/contact" className="btn btn--gold">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
