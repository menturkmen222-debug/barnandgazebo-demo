import { useLocation } from "wouter";
import { useScrollNav } from "@/hooks/useScrollNav";
import { DiamondIcon } from "./Icons";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Venue", path: "/venue" },
  { label: "Packages", path: "/packages" },
  { label: "Gallery", path: "/gallery" },
  { label: "Availability", path: "/availability" },
  { label: "Journal", path: "/journal" },
  { label: "Contact", path: "/contact" },
];

interface NavProps {
  onMenuOpen: () => void;
}

export default function Nav({ onMenuOpen }: NavProps) {
  const [location, navigate] = useLocation();
  const scrolled = useScrollNav();

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-wordmark" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <span className="nav-wordmark-title">The Barn and Gazebo</span>
        <span className="nav-wordmark-sub">Est. 1880 — Salem, Ohio</span>
      </div>

      <div className="nav-center">
        <div className="nav-ornament-divider">
          <span className="nav-ornament-line" />
          <DiamondIcon size={6} className="nav-ornament-diamond" />
          <span className="nav-ornament-line" />
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.path}
              className={`nav-link${location === link.path ? " active" : ""}`}
              onClick={() => navigate(link.path)}
            >
              {link.label}
              {location === link.path && (
                <span className="nav-link-active-marker">
                  <DiamondIcon size={4} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <button className="nav-cta" onClick={() => navigate("/contact")}>
        Inquire Now
      </button>

      <button className="nav-hamburger" onClick={onMenuOpen} aria-label="Open menu">
        <span className="nav-hamburger-bar" />
        <span className="nav-hamburger-bar nav-hamburger-bar--short" />
      </button>
    </nav>
  );
}
