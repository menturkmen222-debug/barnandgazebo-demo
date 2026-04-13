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
  const [, navigate] = useLocation();

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className={`mobile-menu${isOpen ? " open" : ""}`}>
      <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="mobile-menu-links">
        {navLinks.map((link) => (
          <button
            key={link.path}
            className="mobile-menu-link"
            onClick={() => handleNav(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}
