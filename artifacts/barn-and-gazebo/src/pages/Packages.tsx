import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const accordionItems = [
  {
    title: "How do I secure my date?",
    content: "A signed venue contract and a 50% deposit secure your date exclusively. No date is held without both documents in place. Deposits are due within 14 days of contract issuance. We accept check, bank transfer, or major credit cards.",
  },
  {
    title: "What is your cancellation and refund policy?",
    content: "Cancellations made more than 12 months before the event date receive a 75% refund of the deposit. Cancellations 6-12 months prior receive a 50% refund. Cancellations less than 6 months prior are non-refundable. We strongly recommend event insurance, which we are happy to provide resources for.",
  },
  {
    title: "Are outside caterers permitted?",
    content: "We maintain a curated list of preferred caterers who are familiar with our kitchen, layout, and service standards. All catering must be handled by a licensed vendor from this list. We do not permit self-catering or unlicensed food vendors on property.",
  },
  {
    title: "What is included in the venue rental?",
    content: "All packages include access to the relevant venue spaces, standard lighting, tables and chairs for your guest count, setup and breakdown time (typically 4 hours before and 2 hours after your event), on-site parking, and a dedicated venue coordinator for day-of logistics. Specific inclusions vary by package — see individual package details.",
  },
  {
    title: "Can we bring our own alcohol?",
    content: "Licensed bar services must be provided through one of our approved bartending vendors. You may supply your own wine or beer for a corkage fee of $5 per bottle. All spirits must be served by a licensed bartender. Ohio liquor laws apply and are strictly observed.",
  },
];

export default function Packages() {
  const [, navigate] = useLocation();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Packages & Pricing | The Barn and Gazebo — Salem, Ohio";
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-60">
        <div
          className="hero-bg parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1920&q=90')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content page-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Packages + Pricing</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" style={{ opacity: 1, transform: "none" }}>
            An Investment in Forever
          </h1>
        </div>
        <div className="hero-bottom-line" />
      </section>

      {/* INTRO */}
      <section className="packages-intro">
        <p className="packages-intro-text reveal">
          We believe in honest pricing, full transparency, and a clear understanding of what your investment includes before you sign a single document. Every package represents real value — spaces, services, and access that we have refined over years of hosting celebrations that deserve to be remembered.
        </p>
      </section>

      {/* FULL PACKAGES */}
      <section className="packages-section" style={{ paddingTop: 80 }}>
        <div className="packages-grid" style={{ maxWidth: 1400, margin: "0 auto" }}>
          {[
            {
              tier: "Intimate Weekday",
              name: "The Pine",
              price: "$4,800",
              note: "Monday–Thursday",
              features: [
                "Weekday ceremony and reception",
                "Up to 100 guests",
                "8-hour total venue access",
                "Barn main floor, ground level only",
                "Standard market lighting included",
                "Bridal suite access (3 hours)",
                "Two private parking areas",
                "Round and farm-style tables (your choice)",
                "Folding chairs — ceremony and reception",
                "Setup time: 3 hours prior",
                "Breakdown time: 1 hour following",
                "One venue coordinator walkthrough",
              ],
              highlighted: false,
            },
            {
              tier: "Signature Full Weekend",
              name: "The Barn and Gazebo",
              price: "$8,500",
              note: "Friday–Sunday",
              features: [
                "Full weekend access, Friday–Sunday",
                "Up to 350 guests",
                "All three levels of the barn",
                "Outdoor gazebo ceremony space",
                "Premium chandelier lighting package",
                "Bridal suite — full day access",
                "Groom's room — full day access",
                "Full catering kitchen access",
                "Climate-controlled main hall",
                "Rehearsal evening (Friday, 2 hours)",
                "Farm tables, rounds, and chairs",
                "Day-of venue coordinator",
              ],
              highlighted: true,
            },
            {
              tier: "All-Inclusive Estate",
              name: "The Estate",
              price: "$13,200",
              note: "Full weekend + extras",
              features: [
                "Full weekend access, Thursday–Sunday",
                "Up to 350 guests",
                "All venue spaces, all three levels",
                "Dedicated day-of coordinator (full service)",
                "Custom lighting design consultation",
                "Vintage furniture package included",
                "Shuttle service coordination",
                "Licensed floral designer access",
                "Rehearsal dinner setup and breakdown",
                "Day-after brunch setup included",
                "Photo booth corner installation",
                "Fireside s'mores station",
                "Honeymoon suite floral decoration",
                "Extended breakdown (next morning)",
              ],
              highlighted: false,
            },
          ].map((pkg, i) => (
            <div
              key={pkg.name}
              className={`package-card${pkg.highlighted ? " package-card--highlighted" : ""} reveal reveal-delay-${i + 1}`}
            >
              {pkg.highlighted && <div className="package-badge">Most Requested</div>}
              <p className="package-tier">{pkg.tier}</p>
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-divider" />
              <p className="package-price">{pkg.price}</p>
              <p className="package-price-note">{pkg.note} — starting price</p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-text-secondary)", margin: "24px 0 12px" }}>What's Included</p>
              <div className="package-features">
                {pkg.features.map((f) => (
                  <div key={f} className="package-feature">{f}</div>
                ))}
              </div>
              <button
                className="btn-primary w-full"
                style={{ marginTop: "var(--space-8)", justifyContent: "center" }}
                onClick={() => navigate("/contact")}
              >
                Book This Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="addons-section">
        <div className="section-header-centered reveal">
          <p className="eyebrow">Customize Your Day</p>
          <h2 className="section-h2 mt-4">Enhance Your Experience</h2>
        </div>
        <div className="addons-grid">
          {[
            { label: "Time", name: "Additional Hour", desc: "Extend your event beyond your package window at an hourly rate." },
            { label: "Dining", name: "Rehearsal Dinner", desc: "Reserve the lower level for an intimate Friday evening rehearsal dinner." },
            { label: "Morning After", name: "Day-After Brunch", desc: "Host a casual farewell brunch for out-of-town guests the following morning." },
            { label: "Decor", name: "Vintage Furniture Package", desc: "Curated collection of antique settees, trunks, and farm pieces for styling." },
            { label: "Hospitality", name: "Cocktail Hour Extension", desc: "Add an additional hour of cocktail service in the lower level or on the grounds." },
            { label: "Ambiance", name: "Custom Lighting Package", desc: "Designer string light arrangements, uplighting, and custom chandelier configurations." },
            { label: "Experience", name: "Fireside S'mores Station", desc: "A staffed outdoor fire pit with artisan s'mores ingredients for evening guests." },
            { label: "Entertainment", name: "Photo Booth Corner", desc: "A styled vintage photo booth setup with props, prints, and digital files." },
            { label: "Logistics", name: "Shuttle Service", desc: "Coordination and logistics support for guest shuttles to and from the venue." },
            { label: "Design", name: "Floral Designer Access", desc: "Priority booking and on-site consultation with our preferred floral design partners." },
            { label: "Support", name: "Day-Of Coordinator", desc: "A full-service day-of coordinator beyond the standard venue walkthrough." },
            { label: "Romance", name: "Honeymoon Suite Decor", desc: "Floral arrangements and styling for your bridal suite or off-site honeymoon accommodation." },
          ].map((item, i) => (
            <div key={item.name} className={`addon-item reveal reveal-delay-${(i % 4) + 1}`}>
              <p className="addon-label">{item.label}</p>
              <h3 className="addon-name">{item.name}</h3>
              <p className="addon-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCORDION */}
      <section className="accordion-section">
        <div className="section-header-centered reveal">
          <p className="eyebrow">Before You Book</p>
          <h2 className="section-h2 mt-4">Payment + Booking Policy</h2>
        </div>
        <div className="accordion-inner">
          {accordionItems.map((item, i) => (
            <div key={i} className="accordion-item reveal">
              <button
                className="accordion-header"
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              >
                <span className="accordion-title">{item.title}</span>
                <span className={`accordion-icon${openAccordion === i ? " open" : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className={`accordion-body${openAccordion === i ? " open" : ""}`}>
                <p className="accordion-content">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-strip-title reveal">Ready to Begin?</h2>
            <p className="cta-strip-text reveal">
              Every conversation starts the same way: with your story. Tell us about your vision, your ideal date, and how many of the people you love will be there to witness it.
            </p>
          </div>
          <div className="cta-strip-right reveal">
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Send an Inquiry
            </button>
            <p className="cta-strip-phone">or call (330) 000-0000</p>
          </div>
        </div>
      </section>
    </main>
  );
}
