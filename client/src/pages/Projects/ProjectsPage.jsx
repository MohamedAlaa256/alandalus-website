import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import api from '../../services/api';
import './ProjectsPage.css';

// Fallback data
const FALLBACK = [
  { id: '1', name: 'Alandalus Gardens', location: 'New Cairo, 5th Settlement', type: 'Residential', status: 'Available', units: 800, area: '120 acres', priceFrom: 3200000, deliveryYear: 2026, amenities: ['Swimming Pools', 'Club House', 'School', 'Mosque'] },
  { id: '2', name: 'Qurtuba Heights', location: 'Sheikh Zayed', type: 'Mixed-Use', status: 'Under Construction', units: 450, area: '45 acres', priceFrom: 5100000, deliveryYear: 2027, amenities: ['Rooftop Pool', 'Co-working', 'Retail', 'Spa'] },
  { id: '3', name: 'Sevilla Coast', location: 'North Coast', type: 'Resort', status: 'Available', units: 600, area: '200 acres', priceFrom: 4500000, deliveryYear: 2025, amenities: ['Private Beach', 'Marina', 'Club', 'Hotel Services'] },
  { id: '4', name: 'Granada Business Park', location: 'New Capital', type: 'Commercial', status: 'Available', units: 200, area: '30 acres', priceFrom: 8000000, deliveryYear: 2026, amenities: ['Smart Systems', 'Conference', 'Food Court', 'EV Charging'] },
];

const FILTERS = ['All', 'Residential', 'Mixed-Use', 'Resort', 'Commercial'];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(FALLBACK);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const ref = useReveal();

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data))
      .catch(() => setProjects(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="projects-page" ref={ref}>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <span className="section-label">Portfolio</span>
            <h1 className="page-hero__title">Our <em>Projects</em></h1>
          </div>
        </div>
      </section>

      <section className="projects-list-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar reveal">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner" />
              <span>Loading Projects...</span>
            </div>
          ) : (
            <div className="projects-list-grid">
              {filtered.map((project, i) => (
                <div key={project.id} className={`project-list-card reveal reveal-delay-${i % 3}`}>
                  <div className="project-list-card__visual">
                    <div className="project-list-card__bg" />
                    <div className="project-list-card__meta">
                      <span className={`project-list-card__status ${project.status === 'Available' ? 'green' : 'orange'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="project-list-card__type-badge">{project.type}</div>
                  </div>
                  <div className="project-list-card__content">
                    <div className="project-list-card__location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {project.location}
                    </div>
                    <h3 className="project-list-card__name">{project.name}</h3>
                    <div className="project-list-card__divider" />
                    <div className="project-list-card__stats">
                      <div>
                        <span className="stat-val">{project.units.toLocaleString()}</span>
                        <span className="stat-lbl">Units</span>
                      </div>
                      <div>
                        <span className="stat-val">{project.area}</span>
                        <span className="stat-lbl">Area</span>
                      </div>
                      <div>
                        <span className="stat-val">{project.deliveryYear}</span>
                        <span className="stat-lbl">Delivery</span>
                      </div>
                    </div>
                    <div className="project-list-card__amenities">
                      {project.amenities.slice(0, 3).map(a => (
                        <span key={a} className="amenity-tag">{a}</span>
                      ))}
                      {project.amenities.length > 3 && (
                        <span className="amenity-tag amenity-tag--more">+{project.amenities.length - 3}</span>
                      )}
                    </div>
                    <div className="project-list-card__footer">
                      <div className="project-list-card__price">
                        <span className="price-from">Starting from</span>
                        <span className="price-val">EGP {(project.priceFrom / 1000000).toFixed(1)}M</span>
                      </div>
                      <Link to={`/projects/${project.id}`} className="btn btn--outline">
                        Details
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
