import { useState, useEffect, useCallback } from "react";
import { DiamondIcon, CloseIcon, ArrowRightIcon } from "@/components/Icons";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=90", category: "ceremony", caption: "Ceremony in the Main Hall" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=90", category: "barn", caption: "The Barn Interior" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=90", category: "reception", caption: "Evening Reception" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=90", category: "grounds", caption: "Pine Grounds at Dusk" },
  { src: "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?auto=format&fit=crop&w=900&q=90", category: "florals", caption: "Ceremony Florals" },
  { src: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?auto=format&fit=crop&w=900&q=90", category: "details", caption: "Table Details" },
  { src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=90", category: "couples", caption: "Couple Portrait" },
  { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1200&q=90", category: "grounds", caption: "The Treeline at Sunset" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=90", category: "ceremony", caption: "Gazebo Ceremony" },
  { src: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=900&q=90", category: "reception", caption: "Reception Tables" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=90", category: "barn", caption: "Loft Mezzanine" },
  { src: "https://images.unsplash.com/photo-1504438190342-5951e134ffee?auto=format&fit=crop&w=900&q=90", category: "florals", caption: "Bridal Bouquet" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=90", category: "details", caption: "Place Settings" },
  { src: "https://images.unsplash.com/photo-1543857181-7e3e96f97b7e?auto=format&fit=crop&w=1200&q=90", category: "couples", caption: "First Dance" },
  { src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=90", category: "ceremony", caption: "Ceremony Aisle" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=90", category: "reception", caption: "Cake Table" },
  { src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=900&q=90", category: "grounds", caption: "Pine Path" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=90", category: "couples", caption: "Portrait Session" },
  { src: "https://images.unsplash.com/photo-1470163395405-d3f97c2d1a99?auto=format&fit=crop&w=900&q=90", category: "florals", caption: "Table Arrangement" },
  { src: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=900&q=90", category: "details", caption: "Candlelight Detail" },
  { src: "https://images.unsplash.com/photo-1597157404088-1ae5e2d9c1e3?auto=format&fit=crop&w=900&q=90", category: "barn", caption: "Timber Beams" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=90", category: "reception", caption: "Evening Lighting" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=90", category: "couples", caption: "Wedding Party" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=700&q=90", category: "ceremony", caption: "Ceremony Overview" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "ceremony", label: "Ceremony" },
  { key: "reception", label: "Reception" },
  { key: "details", label: "Details" },
  { key: "florals", label: "Florals" },
  { key: "barn", label: "The Barn" },
  { key: "grounds", label: "The Grounds" },
  { key: "couples", label: "Couples" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    document.title = "Gallery | The Barn and Gazebo — Salem, Ohio";
  }, []);

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? filteredImages.length - 1 : i - 1));
  }, [filteredImages.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === filteredImages.length - 1 ? 0 : i + 1));
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) nextImage(); else prevImage(); }
  };

  const currentImage = filteredImages[lightboxIndex];

  return (
    <main>
      <section className="hero hero-50">
        <div
          className="hero-bg parallax-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1920&q=90')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content page-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Gallery</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" style={{ opacity: 1, transform: "none" }}>
            Every Corner, Every Light
          </h1>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn${activeFilter === cat.key ? " active" : ""}`}
            onClick={() => { setActiveFilter(cat.key); setLightboxIndex(0); }}
          >
            {activeFilter === cat.key && <DiamondIcon size={5} className="filter-btn-diamond" />}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="masonry-gallery">
        {filteredImages.map((img, i) => (
          <div key={`${img.src}-${i}`} className="masonry-item" onClick={() => openLightbox(i)}>
            <img src={img.src} alt={img.caption} loading="lazy" decoding="async" />
            <div className="masonry-overlay">
              <DiamondIcon size={20} className="masonry-overlay-diamond" />
              <p className="masonry-overlay-caption">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`lightbox${lightboxOpen ? " open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="lightbox-counter">
          {String(lightboxIndex + 1).padStart(2, "0")} / {String(filteredImages.length).padStart(2, "0")}
        </div>
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
          <CloseIcon size={22} />
        </button>
        <button className="lightbox-prev" onClick={prevImage} aria-label="Previous">
          <ArrowRightIcon size={18} style={{ transform: "rotate(180deg)" }} />
        </button>
        <div className="lightbox-img-wrap">
          {currentImage && (
            <img className="lightbox-img" src={currentImage.src} alt={currentImage.caption} />
          )}
        </div>
        <button className="lightbox-next" onClick={nextImage} aria-label="Next">
          <ArrowRightIcon size={18} />
        </button>
        {currentImage && (
          <div className="lightbox-caption">
            <DiamondIcon size={5} style={{ color: "var(--color-gold)", marginRight: 10, display: "inline-block", verticalAlign: "middle" }} />
            {currentImage.caption}
          </div>
        )}
      </div>
    </main>
  );
}
