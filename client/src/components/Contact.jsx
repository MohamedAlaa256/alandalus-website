import { useState } from "react";

const INTERESTS = [
  "Al Qasr — North Coast",
  "Al Boustane — New Cairo",
  "Al Manar — 6th October",
  "Custom Investment Consultation",
];

const API_BASE = import.meta.env.VITE_API_URL || "/api";

export default function Contact({ showToast }) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", interest: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        showToast("✓ Thank you! A consultant will contact you within 24 hours.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" });
      } else {
        showToast("Something went wrong. Please try again.");
      }
    } catch {
      showToast("Connection error. Please call +20 100 000 0000.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner}>
        {/* Form */}
        <div className="reveal">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title" style={{ marginBottom: 40 }}>
            Begin Your <em>Journey</em>
          </h2>
          <form onSubmit={handleSubmit} style={s.form}>
            <div style={s.row}>
              <Field label="First Name" placeholder="Ahmed" value={form.firstName} onChange={set("firstName")} required />
              <Field label="Last Name" placeholder="Hassan" value={form.lastName} onChange={set("lastName")} />
            </div>
            <Field label="Email Address" type="email" placeholder="ahmed@example.com" value={form.email} onChange={set("email")} required />
            <Field label="Phone" type="tel" placeholder="+20 100 000 0000" value={form.phone} onChange={set("phone")} />
            <div style={s.fieldWrap}>
              <label style={s.label}>Interested In</label>
              <select value={form.interest} onChange={set("interest")} style={s.input}>
                <option value="">Select a development…</option>
                {INTERESTS.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div style={s.fieldWrap}>
              <label style={s.label}>Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your ideal property…"
                value={form.message}
                onChange={set("message")}
                style={{ ...s.input, resize: "vertical", minHeight: 110 }}
              />
            </div>
            <button type="submit" className="btn-primary" disabled={submitting} style={{ alignSelf: "flex-start", opacity: submitting ? 0.6 : 1 }}>
              {submitting ? "Sending…" : "Schedule Consultation"}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="reveal" style={{ transitionDelay: "0.12s" }}>
          <div className="section-label">Our Offices</div>
          <InfoBlock title="Cairo Headquarters" lines={["90th Street, Fifth Settlement", "New Cairo, Cairo Governorate, Egypt"]} />
          <InfoBlock title="North Coast Sales Office" lines={["Ras El Hekma Coastal Road", "Matrouh Governorate, Egypt"]} />
          <InfoBlock title="Contact" lines={["+20 100 000 0000", "hello@alandalus.eg"]} links />
          <InfoBlock title="Office Hours" lines={["Sunday – Thursday: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 3:00 PM"]} />
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, required }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)", fontFamily: "var(--sans)", fontSize: 14, padding: "13px 16px", borderRadius: 1, outline: "none" }}
      />
    </div>
  );
}

function InfoBlock({ title, lines, links }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>{title}</h4>
      {lines.map((line, i) => (
        <p key={i} style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.85 }}>
          {links ? <a href={line.includes("+") ? `tel:${line}` : `mailto:${line}`} style={{ color: "var(--text)", textDecoration: "none" }}>{line}</a> : line}
        </p>
      ))}
    </div>
  );
}

const s = {
  section: { background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "140px 60px" },
  inner: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 100, alignItems: "start" },
  form: { display: "flex", flexDirection: "column", gap: 20 },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  fieldWrap: { display: "flex", flexDirection: "column", gap: 8 },
  label: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" },
  input: {
    background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)",
    fontFamily: "var(--sans)", fontSize: 14, padding: "13px 16px", borderRadius: 1, outline: "none",
  },
};
