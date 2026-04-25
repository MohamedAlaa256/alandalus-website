import React, { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import api from '../../services/api';
import './ContactPage.css';

const ContactPage = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'general', projectId: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await api.post('/inquiries', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '', type: 'general', projectId: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-page" ref={ref}>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <span className="section-label">Get in Touch</span>
            <h1 className="page-hero__title">Start Your <em>Journey</em></h1>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info reveal">
              <h2 className="contact-info__title">We'd love to <em>hear from you</em></h2>
              <p className="contact-info__desc">
                Our team of experienced advisors is available 7 days a week to answer your questions, 
                arrange viewings, and help you find your perfect home or investment.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail__label">Sales Center</div>
                    <div className="contact-detail__value">90 Tahrir Square, Cairo, Egypt</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.49 12"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail__label">Phone</div>
                    <div className="contact-detail__value">+20 2 2345 6789</div>
                    <div className="contact-detail__value">+20 10 1234 5678</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail__label">Email</div>
                    <div className="contact-detail__value">info@alandalusdevelopments.com</div>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail__label">Working Hours</div>
                    <div className="contact-detail__value">Saturday – Thursday: 9am – 8pm</div>
                    <div className="contact-detail__value">Friday: 2pm – 8pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap reveal reveal-delay-2">
              {status === 'success' ? (
                <div className="form-success">
                  <div className="form-success__icon">✓</div>
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button className="btn btn--outline" onClick={() => setStatus('idle')}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="contact-form__title">Send an Inquiry</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+20 1XX XXX XXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Type</label>
                    <select name="type" className="form-input form-select" value={form.type} onChange={handleChange}>
                      <option value="general">General Inquiry</option>
                      <option value="project">Specific Project</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="form-error">{errorMsg}</div>
                  )}

                  <button type="submit" className="btn btn--gold form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <>
                        <div className="btn-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
