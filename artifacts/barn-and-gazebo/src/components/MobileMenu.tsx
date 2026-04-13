import { useLocation } from "wouter";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Venue", path: "/venue" },
  { label: "Packages", path: "/packages" },
  { label: "Gallery", path: "/gallery" },
  { label: "Availability", path: "/availability" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location, navigate] = useLocation();

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`mobile-menu${isOpen ? " open" : ""}`} aria-hidden={!isOpen}>
      <div className="mobile-menu-header">
        <div className="mobile-menu-brand" onClick={() => handleNav("/")}>
          <span className="mobile-menu-brand-title">The Barn and Gazebo</span>
          <span className="mobile-menu-brand-sub">Est. 1880 — Salem, Ohio</span>
        </div>
        <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="mobile-menu-rule" />

      <nav className="mobile-menu-links">
        {navLinks.map((link, i) => (
          <button
            key={link.path}
            className={`mobile-menu-link${location === link.path ? " active" : ""}`}
            onClick={() => handleNav(link.path)}
            style={{ transitionDelay: isOpen ? `${60 + i * 55}ms` : "0ms" }}
          >
            <span className="mobile-menu-link-label">{link.label}</span>
            <svg className="mobile-menu-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        ))}
      </nav>

      <div className="mobile-menu-footer">
        <div className="mobile-menu-rule" />
        <button className="mobile-menu-cta" onClick={() => handleNav("/contact")}>
          Begin Your Story
        </button>
        <p className="mobile-menu-address">Salem, Ohio &nbsp;·&nbsp; (330) 000-0000</p>
      </div>
    </div>
  );
}
