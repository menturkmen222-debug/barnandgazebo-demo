import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroBtnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "The Barn and Gazebo — Salem, Ohio | Historic Wedding Venue";

    const words = heroTitleRef.current?.querySelectorAll(".word");
    if (!words) return;

    words.forEach((word, i) => {
      setTimeout(() => {
        word.classList.add("visible");
      }, 200 + i * 150);
    });

    setTimeout(() => {
      heroSubRef.current?.classList.add("visible");
    }, 600 + (words.length * 150));

    setTimeout(() => {
      heroBtnsRef.current?.classList.add("visible");
    }, 900 + (words.length * 150));
  }, []);

  const heroWords = "Where Time Stands Still".split(" ");

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div
          className="hero-bg parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1920&q=90')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Salem, Ohio</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" ref={heroTitleRef}>
            {heroWords.map((word, i) => (
              <span key={i} className="word">{word}</span>
            ))}
          </h1>
          <p className="hero-subtitle" ref={heroSubRef}>
            An 1880 barn. Forty thousand pines. One day that belongs entirely to you.
          </p>
          <div className="hero-buttons" ref={heroBtnsRef}>
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Begin Your Story
            </button>
            <button className="btn-secondary" onClick={() => navigate("/venue")}>
              Explore the Venue
            </button>
          </div>
        </div>
        <div className="hero-bottom-line" />
        <div className="scroll-indicator" aria-label="Scroll down">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { num: "1880", label: "Est. Year" },
            { num: "40,000+", label: "Pine Trees" },
            { num: "350", label: "Guest Capacity" },
            { num: "3", label: "Barn Levels" },
          ].map((stat, i) => (
            <div key={stat.label} className={`stat-item reveal reveal-delay-${i + 1}`}>
              <span className="stat-number">{stat.num}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="editorial-intro">
        <div className="editorial-text-col">
          <p className="eyebrow reveal">The Venue</p>
          <h2 className="section-title reveal mt-4" style={{ fontSize: "3rem", lineHeight: 1.05 }}>
            A Living Piece of<br />American History
          </h2>
          <div className="gold-rule reveal mt-4" style={{ width: 60 }} />
          <p className="editorial-p reveal mt-4">
            Built in 1880, our barn stands as a testament to a time when structures were made to last centuries. The hand-hewn timber beams overhead carry the weight of generations — not just of the building itself, but of every harvest season, every winter storm, every warm summer evening that has passed through these walls in the century and a half since they were first raised.
          </p>
          <p className="editorial-p reveal mt-4">
            Step outside and the world softens. Forty thousand pines rise in every direction, their roots deep in the Ohio soil, their canopy turning even the harshest August afternoon into something cathedral-quiet and cool. The outdoor gazebo waits at the tree line, where light filters through the needles in long golden shafts and the only sound is wind moving through pine. This is not a venue. It is a living place — and it is yours, entirely, for one extraordinary day.
          </p>
          <button className="editorial-link reveal mt-36px" onClick={() => navigate("/venue")}>
            Discover the full story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
        <div
          className="editorial-image-col"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=90')",
          }}
        />
      </section>

      {/* FEATURE PILLARS */}
      <section className="pillars-section">
        <div className="pillars-header reveal">
          <p className="eyebrow">Why Couples Choose Us</p>
          <h2 className="section-title mt-4" style={{ fontSize: "2.8rem" }}>Crafted for the Unforgettable</h2>
        </div>
        <div className="pillars-grid">
          {[
            {
              img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=90",
              label: "The Barn",
              title: "Historic Grandeur",
              text: "Three levels of hand-hewn timber frame dating to 1880. The main floor opens to receive 350 guests; above, the loft mezzanine wraps the room in warmth. Every beam tells a story. Every knot in the wood is original. The barn does not attempt to replicate elegance — it simply is it, in the most honest way a building can be.",
            },
            {
              img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=700&q=90",
              label: "The Grounds",
              title: "Surrounded by Nature",
              text: "Forty thousand pines on rolling Ohio countryside create a natural amphitheater of calm. Woodland ceremony paths wind between the trees, leading guests through light and shadow to moments of genuine stillness. There is no traffic sound. No city noise. Only the weight of sky and the soft conversation of wind and pine.",
            },
            {
              img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=90",
              label: "The Ceremony",
              title: "The Gazebo Experience",
              text: "The outdoor gazebo stands where the treeline opens to sky, framing a ceremony in pure natural light. Pine-filtered afternoon sun falls in shifting patterns across the ceremony space. The sound of wind through the branches is the only accompaniment you need. Spring blooms and autumn gold transform the setting with every season.",
            },
          ].map((card, i) => (
            <div key={card.title} className={`pillar-card reveal reveal-delay-${i + 1}`}>
              <div className="pillar-image">
                <img src={card.img} alt={card.title} loading="lazy" decoding="async" />
              </div>
              <div className="pillar-body">
                <p className="pillar-label">{card.label}</p>
                <h3 className="pillar-title">{card.title}</h3>
                <p className="pillar-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE BREAK */}
      <section className="quote-break">
        <div
          className="quote-break-bg parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1920&q=90')",
          }}
        />
        <div className="quote-break-overlay" />
        <div className="quote-break-content reveal">
          <span className="quote-mark">"</span>
          <p className="quote-text">
            We drove past a hundred venues before we turned down the pine-lined drive. We never looked at another after that.
          </p>
          <p className="quote-attribution">— Sarah and James, September 2024</p>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <p className="eyebrow">Investment</p>
          <h2 className="section-h2 mt-4">Choose Your Experience</h2>
        </div>
        <div className="packages-grid">
          {[
            {
              tier: "Intimate",
              name: "The Pine",
              price: "$4,800",
              features: [
                "Weekday ceremony and reception",
                "Up to 100 guests",
                "8-hour venue access",
                "Barn main floor only",
                "Basic lighting package",
                "Bridal suite access",
                "Two private parking areas",
              ],
              highlighted: false,
            },
            {
              tier: "Signature",
              name: "The Barn and Gazebo",
              price: "$8,500",
              features: [
                "Full weekend access",
                "Up to 350 guests",
                "All three barn levels",
                "Outdoor gazebo ceremony space",
                "Premium lighting package",
                "Bridal suite and groom's room",
                "Full catering kitchen access",
                "Climate-controlled main hall",
                "Rehearsal evening access",
              ],
              highlighted: true,
            },
            {
              tier: "Estate",
              name: "The Estate",
              price: "$13,200",
              features: [
                "Full weekend all-inclusive",
                "Up to 350 guests",
                "All venue spaces",
                "Day-of coordinator included",
                "Custom lighting design",
                "Vintage furniture package",
                "Shuttle service coordination",
                "Floral designer access",
                "Day-after brunch setup",
              ],
              highlighted: false,
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className={`package-card${pkg.highlighted ? " package-card--highlighted" : ""} reveal`}
            >
              {pkg.highlighted && <div className="package-badge">Most Requested</div>}
              <p className="package-tier">{pkg.tier}</p>
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-divider" />
              <p className="package-price">{pkg.price}</p>
              <p className="package-price-note">starting price</p>
              <div className="package-features">
                {pkg.features.map((f) => (
                  <div key={f} className="package-feature">{f}</div>
                ))}
              </div>
              <button className="package-link" onClick={() => navigate("/packages")}>
                Learn More
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="gallery-teaser">
        <div className="gallery-header reveal">
          <p className="eyebrow">Captured Moments</p>
          <h2 className="section-h2 mt-4">A Glimpse Within</h2>
        </div>
        <div className="gallery-grid reveal">
          {[
            {
              src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=90",
              alt: "Wedding ceremony in the barn",
              large: true,
            },
            {
              src: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?auto=format&fit=crop&w=600&q=90",
              alt: "Floral arrangements",
            },
            {
              src: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?auto=format&fit=crop&w=600&q=90",
              alt: "Wedding table setting",
            },
            {
              src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=90",
              alt: "Wedding details",
            },
            {
              src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=90",
              alt: "Barn interior",
            },
          ].map((img, i) => (
            <div key={i} className="gallery-item" onClick={() => navigate("/gallery")}>
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              <div className="gallery-item-overlay" />
            </div>
          ))}
        </div>
        <div className="gallery-footer reveal">
          <button className="btn-gold-outline" onClick={() => navigate("/gallery")}>
            View Full Gallery
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-grid">
          {[
            {
              quote: "From the moment we arrived, the barn felt like it had been waiting for us. The pines, the light through the loft windows — nothing we had seen before or since compares.",
              attribution: "— Emma and Liam, June 2024",
            },
            {
              quote: "Our guests still talk about the gazebo ceremony. The way the afternoon light came through the trees made every photograph feel like a painting. We are endlessly grateful.",
              attribution: "— Olivia and Noah, October 2023",
            },
            {
              quote: "The venue team was extraordinary. Every detail was anticipated. We did not worry about a single thing on our wedding day — only each other.",
              attribution: "— Clara and Marcus, May 2024",
            },
          ].map((t, i) => (
            <div key={i} className={`testimonial-item reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, s) => (
                  <div key={s} className="testimonial-star" />
                ))}
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <p className="testimonial-attribution">{t.attribution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="journal-section">
        <div className="journal-header reveal">
          <p className="eyebrow">The Journal</p>
          <h2 className="section-h2 mt-4">Stories From the Glen</h2>
        </div>
        <div className="journal-grid">
          {[
            {
              img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=90",
              category: "Real Weddings",
              title: "Emma and Liam: A June Ceremony Beneath the Pines",
              excerpt: "When Emma first visited the barn in February, snow still dusted the pine canopy and light fell through the loft windows in long winter bars. She knew then, in the quiet of an empty room, that this was the place.",
              meta: "June 14, 2024 — 5 min read",
            },
            {
              img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=700&q=90",
              category: "Planning Guide",
              title: "Choosing Your Season: How Light Changes Everything at the Glen",
              excerpt: "The barn shifts with every season. Spring brings soft green through the loft windows. Summer casts long gold on the meadow. Autumn turns the whole drive into a cathedral of color. Winter makes the pines quiet and sacred.",
              meta: "March 2, 2024 — 7 min read",
            },
            {
              img: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=700&q=90",
              category: "Venue History",
              title: "The Story of the Barn: 140 Years in Ohio's Salem Hills",
              excerpt: "The timber was felled from old-growth forest to the north and dragged down by horse team in the winter of 1879. The first wedding in the barn took place less than two years later, in the spring of 1881.",
              meta: "January 18, 2024 — 9 min read",
            },
          ].map((post, i) => (
            <div key={i} className={`journal-card reveal reveal-delay-${i + 1}`}>
              <div className="journal-card-image">
                <img src={post.img} alt={post.title} loading="lazy" decoding="async" />
              </div>
              <div className="journal-card-body">
                <p className="journal-card-category">{post.category}</p>
                <h3 className="journal-card-title">{post.title}</h3>
                <p className="journal-card-excerpt">{post.excerpt}</p>
                <p className="journal-card-meta">{post.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-strip-title reveal">Your Day Deserves This Setting</h2>
            <p className="cta-strip-text reveal">
              Every great wedding begins with a single conversation. Tell us about your vision, your date, your dream — and let us show you what is possible among the pines.
            </p>
          </div>
          <div className="cta-strip-right reveal">
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Request a Date
            </button>
            <p className="cta-strip-phone">or call (330) 000-0000</p>
          </div>
        </div>
      </section>
    </main>
  );
}
