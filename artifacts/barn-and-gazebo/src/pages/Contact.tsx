import { useState, useRef, useEffect } from "react";
import { LocationIcon, PhoneIcon, MailIcon, ClockIcon, MapPinIcon, DiamondIcon } from "@/components/Icons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  referral: string;
  partnerNames: string;
  vision: string;
  understood: boolean;
}

interface FormErrors {
  [key: string]: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[\d\s\-\+\(\)]{7,}$/.test(phone);
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    eventDate: "", guestCount: "", referral: "",
    partnerNames: "", vision: "", understood: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Contact | The Barn and Gazebo — Salem, Ohio";
  }, []);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        successRef.current?.classList.add("visible");
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!validateEmail(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!validatePhone(form.phone)) errs.phone = "Please enter a valid phone number.";
    if (!form.eventDate) errs.eventDate = "Please select a preferred date.";
    else if (new Date(form.eventDate) <= new Date()) errs.eventDate = "Please select a future date.";
    if (!form.guestCount) errs.guestCount = "Please estimate your guest count.";
    if (!form.partnerNames.trim()) errs.partnerNames = "Partner names are required.";
    if (!form.vision.trim()) errs.vision = "Please share a bit about your vision.";
    if (!form.understood) errs.understood = "Please confirm you understand this is an inquiry only.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: <LocationIcon size={17} />,
      label: "Address",
      value: "The Barn and Gazebo\nSalem, Ohio 44460",
    },
    {
      icon: <PhoneIcon size={17} />,
      label: "Phone",
      value: "(330) 000-0000",
    },
    {
      icon: <MailIcon size={17} />,
      label: "Email",
      value: "info@barnandgazebo.com",
    },
    {
      icon: <ClockIcon size={17} />,
      label: "Tours",
      value: "By Appointment\nMonday–Saturday",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-55">
        <div
          className="hero-bg parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=90')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content page-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Contact</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" style={{ opacity: 1, transform: "none" }}>
            Let's Begin Together
          </h1>
        </div>
        <div className="hero-bottom-line" />
      </section>

      {/* SPLIT LAYOUT */}
      <div className="contact-split">
        {/* INFO COLUMN */}
        <div className="contact-info-col">
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "2rem", color: "var(--color-cream)" }}>
            Visit the Glen
          </h2>
          <div className="gold-rule reveal" style={{ width: 40, marginTop: 20 }} />

          <div style={{ marginTop: 36 }}>
            {contactItems.map((item) => (
              <div key={item.label} className="contact-info-block reveal">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value" style={{ whiteSpace: "pre-line" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="map-placeholder reveal">
            <MapPinIcon size={28} className="map-placeholder-icon" />
            <p className="map-placeholder-text">Map Coming Soon</p>
            <p className="map-placeholder-sub">Salem, Ohio 44460</p>
          </div>

          <div className="contact-testimonial reveal">
            <div className="contact-testimonial-ornament">
              <DiamondIcon size={6} className="contact-testimonial-diamond" />
            </div>
            <p className="contact-testimonial-quote">
              "We almost didn't call. We're so glad we did. The moment we turned down the drive, we knew — and we had not felt certain about anything in six months of searching."
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold)", marginTop: 16 }}>
              — Olivia and Noah
            </p>
          </div>
        </div>

        {/* FORM COLUMN */}
        <div className="contact-form-col">
          <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "2rem", color: "var(--color-cream)" }}>
            Request a Date
          </h2>
          <div className="gold-rule reveal" style={{ width: 40, marginTop: 20 }} />

          {submitted ? (
            <div className="form-success" ref={successRef}>
              <DiamondIcon size={20} className="form-success-diamond" />
              <h3 className="form-success-title">Thank you, {form.firstName}.</h3>
              <p className="form-success-text">
                We have received your inquiry and will be in touch within 48 hours.
              </p>
              <div className="form-success-rule" />
            </div>
          ) : (
            <div ref={formRef} style={{ marginTop: 36 }}>
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      className={`form-input${errors.firstName ? " error" : ""}`}
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="Jane"
                    />
                    {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      className={`form-input${errors.lastName ? " error" : ""}`}
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="Smith"
                    />
                    {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className={`form-input${errors.email ? " error" : ""}`}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`form-input${errors.phone ? " error" : ""}`}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="(330) 000-0000"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="eventDate">Preferred Event Date</label>
                    <input
                      id="eventDate"
                      type="date"
                      className={`form-input${errors.eventDate ? " error" : ""}`}
                      value={form.eventDate}
                      onChange={(e) => update("eventDate", e.target.value)}
                      style={{ colorScheme: "dark" }}
                    />
                    {errors.eventDate && <span className="form-error">{errors.eventDate}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="guestCount">Estimated Guests</label>
                    <select
                      id="guestCount"
                      className={`form-select${errors.guestCount ? " error" : ""}`}
                      value={form.guestCount}
                      onChange={(e) => update("guestCount", e.target.value)}
                    >
                      <option value="">Select a range</option>
                      <option value="under-50">Under 50</option>
                      <option value="50-100">50–100</option>
                      <option value="100-150">100–150</option>
                      <option value="150-200">150–200</option>
                      <option value="200-250">200–250</option>
                      <option value="250-350">250–350</option>
                    </select>
                    {errors.guestCount && <span className="form-error">{errors.guestCount}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="referral">How Did You Find Us?</label>
                  <select
                    id="referral"
                    className="form-select"
                    value={form.referral}
                    onChange={(e) => update("referral", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="google">Google Search</option>
                    <option value="instagram">Instagram</option>
                    <option value="pinterest">Pinterest</option>
                    <option value="friend">Friend Referral</option>
                    <option value="vendor">Vendor Referral</option>
                    <option value="drove-past">Drove Past</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="partnerNames">Partner Names</label>
                  <input
                    id="partnerNames"
                    type="text"
                    className={`form-input${errors.partnerNames ? " error" : ""}`}
                    value={form.partnerNames}
                    onChange={(e) => update("partnerNames", e.target.value)}
                    placeholder="Jane and John Smith"
                  />
                  {errors.partnerNames && <span className="form-error">{errors.partnerNames}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="vision">Tell Us About Your Vision</label>
                  <textarea
                    id="vision"
                    className={`form-textarea${errors.vision ? " error" : ""}`}
                    value={form.vision}
                    onChange={(e) => update("vision", e.target.value)}
                    placeholder="Share anything that feels important — the mood you're after, the number of people, what matters most to you about the day."
                  />
                  {errors.vision && <span className="form-error">{errors.vision}</span>}
                </div>

                <div className="form-checkbox-row">
                  <input
                    id="understood"
                    type="checkbox"
                    className="form-checkbox"
                    checked={form.understood}
                    onChange={(e) => update("understood", e.target.checked)}
                  />
                  <label className="form-checkbox-label" htmlFor="understood">
                    I understand this is an inquiry only and does not hold or reserve a date.
                  </label>
                </div>
                {errors.understood && <span className="form-error" style={{ marginTop: -24, marginBottom: 16, display: "block" }}>{errors.understood}</span>}

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Your Inquiry"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
