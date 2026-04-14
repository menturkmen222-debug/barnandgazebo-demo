import { useLocation } from "wouter";
import { CloseIcon, DiamondIcon, OrnamentDividerIcon } from "./Icons";

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
          <CloseIcon size={20} />
        </button>
      </div>

      <div className="mobile-menu-ornament-rule">
        <OrnamentDividerIcon width={180} className="mobile-menu-ornament-icon" />
      </div>

      <nav className="mobile-menu-links">
        {navLinks.map((link, i) => (
          <button
            key={link.path}
            className={`mobile-menu-link${location === link.path ? " active" : ""}`}
            onClick={() => handleNav(link.path)}
            style={{ transitionDelay: isOpen ? `${60 + i * 55}ms` : "0ms" }}
          >
            <span className="mobile-menu-link-num">0{i + 1}</span>
            <span className="mobile-menu-link-label">{link.label}</span>
            <DiamondIcon size={7} className="mobile-menu-link-diamond" />
          </button>
        ))}
      </nav>

      <div className="mobile-menu-footer">
        <div className="mobile-menu-footer-ornament">
          <OrnamentDividerIcon width={120} className="mobile-menu-ornament-icon" />
        </div>
        <button className="mobile-menu-cta" onClick={() => handleNav("/contact")}>
          Begin Your Story
        </button>
        <p className="mobile-menu-address">Salem, Ohio &nbsp;·&nbsp; (330) 000-0000</p>
      </div>
    </div>
  );
}
