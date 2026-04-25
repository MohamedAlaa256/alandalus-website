import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__ornament">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0 60 L720 0 L1440 60" fill="var(--color-elevated)" stroke="var(--color-border)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L30 28H2L16 2Z" stroke="var(--color-gold)" strokeWidth="1" fill="none"/>
                <circle cx="16" cy="16" r="3" fill="var(--color-gold)"/>
              </svg>
              <div>
                <div className="footer__logo-name">Al Alandalus</div>
                <div className="footer__logo-sub">Developments</div>
              </div>
            </div>
            <p className="footer__tagline">
              Crafting timeless communities where heritage meets the future.
            </p>
            <div className="footer__socials">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map(s => (
                <a key={s} href="#!" className="footer__social">{s[0]}</a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="footer__col">
            <h4 className="footer__col-title">Projects</h4>
            <ul className="footer__list">
              <li><Link to="/projects">Alandalus Gardens</Link></li>
              <li><Link to="/projects">Qurtuba Heights</Link></li>
              <li><Link to="/projects">Sevilla Coast</Link></li>
              <li><Link to="/projects">Granada Business Park</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/news">News & Media</Link></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__list footer__list--contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                90 Tahrir Square, Cairo, Egypt
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.49 12 19.79 19.79 0 01.44 3.36 2 2 0 012.42 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                +20 2 2345 6789
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@alandalusdevelopments.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Al Alandalus Developments. All Rights Reserved.</p>
          <div className="footer__bottom-links">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
