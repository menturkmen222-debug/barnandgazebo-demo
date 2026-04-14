import { useLocation } from "wouter";
import { InstagramIcon, FacebookIcon, PinterestIcon, DiamondIcon } from "./Icons";

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
          <div className="footer-established">
            <DiamondIcon size={5} className="footer-established-diamond" />
            Est. 1880 — Salem, Ohio
          </div>
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
            <InstagramIcon size={17} />
          </button>
          <button className="footer-social-link" aria-label="Facebook">
            <FacebookIcon size={17} />
          </button>
          <button className="footer-social-link" aria-label="Pinterest">
            <PinterestIcon size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}
