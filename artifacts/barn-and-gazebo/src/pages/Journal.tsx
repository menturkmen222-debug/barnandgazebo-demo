import { useEffect } from "react";
import { useLocation } from "wouter";

const featuredPost = {
  img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90",
  category: "Real Weddings",
  title: "Emma and Liam: A June Ceremony Beneath the Pines",
  excerpt: "When Emma first visited the barn in February, snow still dusted the pine canopy and light fell through the loft windows in long winter bars. She knew then — standing in the quiet of an empty room — that this was the place. Liam took one look at the gazebo setting the following week and agreed without hesitation. Their June ceremony was everything they had imagined and more: morning fog lifting off the meadow, the barn glowing gold by five in the afternoon, their guests gathered between the trees.",
  date: "June 14, 2024",
  readTime: "6 min read",
};

const posts = [
  {
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=700&q=90",
    category: "Venue History",
    title: "The Story of the Barn: 140 Years in Ohio's Salem Hills",
    excerpt: "The timber was felled from old-growth forest to the north and dragged down by horse team in the winter of 1879. The first wedding took place less than two years later.",
    date: "January 18, 2024",
    readTime: "9 min read",
  },
  {
    img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=700&q=90",
    category: "Planning Guide",
    title: "Choosing Your Season: How Light Changes Everything at the Glen",
    excerpt: "The barn shifts with every season. Spring brings soft green through the loft windows. Summer casts long gold. Autumn turns the whole drive into a cathedral of color.",
    date: "March 2, 2024",
    readTime: "7 min read",
  },
  {
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=90",
    category: "Real Weddings",
    title: "Olivia and Noah: Autumn Gold at the Gazebo",
    excerpt: "They wanted something that felt inevitable — a place so right that no alternatives needed to be considered. The October light through forty thousand pines delivered exactly that.",
    date: "November 3, 2023",
    readTime: "5 min read",
  },
  {
    img: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?auto=format&fit=crop&w=700&q=90",
    category: "Florals + Design",
    title: "On Floral Design in a Timber Space: Working with the Room",
    excerpt: "The barn has its own personality — all aged wood and amber light. The best floral work at the Glen doesn't fight the space, it collaborates with it.",
    date: "September 12, 2023",
    readTime: "6 min read",
  },
  {
    img: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?auto=format&fit=crop&w=700&q=90",
    category: "Planning Guide",
    title: "The 18-Month Countdown: A Timeline for Barn Wedding Planning",
    excerpt: "Barn weddings require a different kind of planning timeline than hotel ballrooms. Here is what the 18 months before your date should look like.",
    date: "August 7, 2023",
    readTime: "8 min read",
  },
  {
    img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=700&q=90",
    category: "Real Weddings",
    title: "Clara and Marcus: A Candlelit May Evening",
    excerpt: "They filled the barn with candlelight and wildflowers, let the music drift up into the loft, and danced until the pines outside had gone completely dark.",
    date: "June 1, 2023",
    readTime: "5 min read",
  },
];

const categories = [
  { name: "Real Weddings", count: 8 },
  { name: "Planning Guide", count: 6 },
  { name: "Venue History", count: 3 },
  { name: "Florals + Design", count: 4 },
  { name: "Vendor Spotlight", count: 5 },
];

const recentPosts = [
  "Emma and Liam: A June Ceremony Beneath the Pines",
  "Choosing Your Season: How Light Changes Everything",
  "The Story of the Barn: 140 Years in the Salem Hills",
  "On Floral Design in a Timber Space",
];

export default function Journal() {
  const [, navigate] = useLocation();

  useEffect(() => {
    document.title = "The Journal | The Barn and Gazebo — Salem, Ohio";
  }, []);

  return (
    <main style={{ background: "var(--color-bg)" }}>
      {/* HERO */}
      <section className="hero hero-55">
        <div
          className="hero-bg parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1920&q=90')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content page-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">The Journal</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" style={{ opacity: 1, transform: "none" }}>
            Wisdom, Stories, Inspiration
          </h1>
        </div>
        <div className="hero-bottom-line" />
      </section>

      {/* FEATURED POST */}
      <div style={{ background: "var(--color-bg)", padding: "0 80px" }}>
        <div className="journal-featured reveal">
          <div
            className="journal-featured-image"
            style={{ backgroundImage: `url('${featuredPost.img}')` }}
          />
          <div className="journal-featured-body">
            <p className="journal-card-category">{featuredPost.category}</p>
            <h2 className="journal-featured-title">{featuredPost.title}</h2>
            <p className="journal-featured-excerpt">{featuredPost.excerpt}</p>
            <p className="journal-card-meta" style={{ marginTop: "var(--space-6)" }}>
              {featuredPost.date} — {featuredPost.readTime}
            </p>
            <button className="editorial-link" style={{ marginTop: 24 }}>
              Read the Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* POSTS GRID + SIDEBAR */}
      <div className="journal-page-grid">
        <div className="journal-posts-grid">
          {posts.map((post, i) => (
            <div key={i} className={`journal-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="journal-card-image">
                <img src={post.img} alt={post.title} loading="lazy" decoding="async" />
              </div>
              <div className="journal-card-body">
                <p className="journal-card-category">{post.category}</p>
                <h3 className="journal-card-title">{post.title}</h3>
                <p className="journal-card-excerpt">{post.excerpt}</p>
                <p className="journal-card-meta">{post.date} — {post.readTime}</p>
              </div>
            </div>
          ))}
        </div>

        <aside className="journal-sidebar reveal">
          <div className="sidebar-section">
            <p className="sidebar-label">Categories</p>
            {categories.map((cat) => (
              <div key={cat.name} className="sidebar-cat">
                <span>{cat.name}</span>
                <span className="sidebar-cat-count">{cat.count}</span>
              </div>
            ))}
          </div>

          <div className="sidebar-section">
            <p className="sidebar-label">Recent Posts</p>
            {recentPosts.map((title) => (
              <div key={title} className="sidebar-recent-post">{title}</div>
            ))}
          </div>

          <div className="sidebar-section">
            <p className="sidebar-label">Subscribe</p>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
              Receive new stories and planning guides directly to your inbox.
            </p>
            <input
              type="email"
              className="sidebar-subscribe-input"
              placeholder="your@email.com"
            />
            <button className="btn-gold-outline w-full" style={{ justifyContent: "center" }}>
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
