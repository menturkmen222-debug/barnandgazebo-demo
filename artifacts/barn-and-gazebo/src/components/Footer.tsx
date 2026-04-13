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

export default function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="footer-body">
        <div>
          <div className="footer-wordmark">The Barn and Gazebo</div>
          <div className="footer-established">Est. 1880 — Salem, Ohio</div>
          <p className="footer-tagline">
            A place where old timber holds new vows, and the pines bear witness to every promise made beneath their canopy.
          </p>
        </div>
        <div>
          <div className="footer-col-label">Navigate</div>
          {navLinks.map((link) => (
            <button
              key={link.path}
              className="footer-nav-link"
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div>
          <div className="footer-col-label">Find Us</div>
          <div className="footer-address">
            The Barn and Gazebo<br />
            Salem, Ohio 44460<br />
            (330) 000-0000<br />
            info@barnandgazebo.com
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} The Barn and Gazebo. All rights reserved.
        </span>
        <div className="footer-socials">
          <button className="footer-social-link" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </button>
          <button className="footer-social-link" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </button>
          <button className="footer-social-link" aria-label="Pinterest">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.771 0 3.132-1.867 3.132-4.56 0-2.384-1.714-4.052-4.163-4.052-2.836 0-4.498 2.127-4.498 4.327 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.285c-.075.314-.243.995-.276 1.134-.044.183-.146.222-.336.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
