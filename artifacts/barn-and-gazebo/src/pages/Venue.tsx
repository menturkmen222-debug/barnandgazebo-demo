import { useEffect } from "react";
import { useLocation } from "wouter";
import { DiamondIcon } from "@/components/Icons";

export default function Venue() {
  const [, navigate] = useLocation();

  useEffect(() => {
    document.title = "The Venue | The Barn and Gazebo — Salem, Ohio";
  }, []);

  return (
    <main>
      <section className="hero hero-70">
        <div
          className="hero-bg parallax-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=90')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content page-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">The Venue</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" style={{ opacity: 1, transform: "none" }}>
            Step Inside the Glen
          </h1>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="alternating-section">
        <div className="alternating-text">
          <p className="eyebrow reveal">The Main Hall</p>
          <h2 className="section-title reveal mt-4" style={{ fontSize: "2.2rem" }}>
            The Heart of the Celebration
          </h2>
          <div className="gold-rule reveal mt-4" style={{ width: 48 }} />
          <p className="alternating-section-p reveal">
            The ground floor of our 1880 barn unfolds beneath a canopy of original hand-hewn timber beams, each one a tree that stood in Ohio's forests before the Civil War ended. The space accommodates up to 350 guests in ceremony or reception configuration, yet never feels vast — the warmth of old wood draws people together rather than separating them with distance.
          </p>
          <p className="alternating-section-p reveal">
            Tall barn doors open on summer evenings to allow the pine-scented air to move through the room. Chandeliers cast a golden warmth that no artificial photograph can fully capture. This is a room that has been waiting over a century for your celebration to fill it.
          </p>
        </div>
        <div
          className="alternating-image"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=90')" }}
        />
      </section>

      <section className="alternating-section reverse">
        <div
          className="alternating-image"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=90')" }}
        />
        <div className="alternating-text">
          <p className="eyebrow reveal">The Loft Level</p>
          <h2 className="section-title reveal mt-4" style={{ fontSize: "2.2rem" }}>
            Elevated, Intimate, Above It All
          </h2>
          <div className="gold-rule reveal mt-4" style={{ width: 48 }} />
          <p className="alternating-section-p reveal">
            The mezzanine level wraps the perimeter of the main floor, offering an aerial view of the celebration below. Guests seated in the loft feel the timber beams close overhead — near enough to reach up and touch the wood that has marked a century and a half of Ohio winters.
          </p>
          <p className="alternating-section-p reveal">
            This space works beautifully for intimate seating clusters, a small jazz quartet, or simply as a quiet vantage point where older guests can watch the joy below without losing sight of a single moment. The loft is not separate from the party. It is above it — in every sense of the word.
          </p>
        </div>
      </section>

      <section className="alternating-section">
        <div className="alternating-text">
          <p className="eyebrow reveal">The Lower Level</p>
          <h2 className="section-title reveal mt-4" style={{ fontSize: "2.2rem" }}>
            Where the Evening Begins
          </h2>
          <div className="gold-rule reveal mt-4" style={{ width: 48 }} />
          <p className="alternating-section-p reveal">
            Beneath the main floor, the lower level's stone accents and candlelight create the ideal setting for cocktail hour. This is where guests first gather after the ceremony — glasses raised, introductions made, the light low and forgiving, the mood entirely unhurried.
          </p>
          <p className="alternating-section-p reveal">
            Stone walls cool naturally in summer. Candle sconces line the perimeter. The catering team works from an adjacent professional kitchen that guests will never see or hear — only taste. The cocktail hour here is the moment before the moment, and it has a character all its own.
          </p>
        </div>
        <div
          className="alternating-image"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?auto=format&fit=crop&w=900&q=90')" }}
        />
      </section>

      <section className="quote-break" style={{ height: "auto", padding: "100px 80px" }}>
        <div
          className="quote-break-bg parallax-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?auto=format&fit=crop&w=1920&q=90')" }}
        />
        <div className="quote-break-overlay" />
        <div className="quote-break-content reveal" style={{ maxWidth: 800 }}>
          <div className="quote-ornament">
            <DiamondIcon size={8} className="quote-ornament-diamond" />
          </div>
          <p className="eyebrow" style={{ color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>The Ceremony Space</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "2.5rem", color: "var(--color-cream)", marginBottom: "var(--space-6)", lineHeight: 1.1 }}>
            The Gazebo
          </h2>
          <p className="quote-text" style={{ fontSize: "1.1rem" }}>
            Standing where the treeline opens to Ohio sky, the outdoor gazebo frames your ceremony in pure natural architecture. Pine-filtered light shifts through the afternoon in patterns that no photographer could plan and no designer could improve upon. The gazebo accommodates up to 180 guests in ceremony configuration and is breathtaking in every season.
          </p>
          <div className="gazebo-specs-row">
            {[
              { label: "Ceremony Capacity", value: "Up to 180 guests" },
              { label: "Best Seasons", value: "Spring, Summer, Autumn" },
              { label: "Weather Contingency", value: "Barn main hall backup" },
            ].map((spec) => (
              <div key={spec.label} className="gazebo-spec-item">
                <DiamondIcon size={4} className="gazebo-spec-diamond" />
                <p className="gazebo-spec-label">{spec.label}</p>
                <p className="gazebo-spec-value">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grounds-section">
        <div className="text-center reveal">
          <p className="eyebrow">The Property</p>
          <h2 className="section-h2 mt-4">Forty Thousand Pines</h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1rem", lineHeight: 1.85, color: "var(--color-text-secondary)", maxWidth: 680, margin: "24px auto 0" }}>
            The grounds surrounding the barn encompass rolling Ohio countryside and over forty thousand mature pine trees — a living, breathing backdrop that changes with every hour of light and every season of the year.
          </p>
        </div>
        <div className="grounds-grid">
          {[
            "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=700&q=90",
            "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=700&q=90",
            "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=700&q=90",
          ].map((src, i) => (
            <div key={i} className={`grounds-image reveal reveal-delay-${i + 1}`}>
              <img src={src} alt="The grounds" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      <section className="venue-specs">
        <div className="text-center reveal">
          <p className="eyebrow">At a Glance</p>
          <h2 className="section-h2 mt-4">Venue Specifications</h2>
        </div>
        <div className="specs-table reveal">
          {[
            { label: "Year Built", value: "1880" },
            { label: "Total Acreage", value: "Approx. 120 acres" },
            { label: "Ceremony Capacity", value: "Up to 350 guests (barn) / 180 (gazebo)" },
            { label: "Reception Capacity", value: "Up to 350 guests" },
            { label: "Cocktail Hour Space", value: "Lower level, up to 200 guests" },
            { label: "Parking", value: "On-site for 150+ vehicles" },
            { label: "Bridal Suite", value: "Yes — private, dedicated space" },
            { label: "Groom's Room", value: "Yes — separate private space" },
            { label: "Catering Kitchen", value: "Yes — full professional kitchen" },
            { label: "Climate Control", value: "Yes — main hall" },
            { label: "Outdoor Ceremony Space", value: "Yes — gazebo and meadow" },
            { label: "Handicap Accessible", value: "Yes — full accessibility" },
          ].map((row) => (
            <div key={row.label} className="specs-row">
              <span className="specs-label">
                <DiamondIcon size={4} className="specs-row-diamond" />
                {row.label}
              </span>
              <span className="specs-value">{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-strip-title reveal">Schedule a Private Tour</h2>
            <p className="cta-strip-text reveal">
              The barn must be experienced to be understood. We invite you to visit — to walk the pine paths, stand beneath the loft beams, and see the afternoon light through the barn doors. Tours are available by appointment.
            </p>
          </div>
          <div className="cta-strip-right reveal">
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Book a Tour
            </button>
            <p className="cta-strip-phone">Monday — Saturday, by appointment</p>
          </div>
        </div>
      </section>
    </main>
  );
}
