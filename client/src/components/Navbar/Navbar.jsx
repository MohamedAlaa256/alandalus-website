import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'News', path: '/news' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-mark">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L30 28H2L16 2Z" stroke="var(--color-gold)" strokeWidth="1" fill="none"/>
              <path d="M16 8L26 28H6L16 8Z" fill="var(--color-gold)" fillOpacity="0.15"/>
              <circle cx="16" cy="16" r="3" fill="var(--color-gold)"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Al Alandalus</span>
            <span className="navbar__logo-sub">Developments</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="navbar__cta">
          <span>Inquire Now</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <Link key={link.path} to={link.path} className="navbar__mobile-link" style={{ animationDelay: `${i * 0.08}s` }}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="navbar__mobile-cta">Inquire Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
