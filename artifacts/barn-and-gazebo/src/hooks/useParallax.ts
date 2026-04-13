import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const elements = document.querySelectorAll<HTMLElement>(".parallax-bg");
          elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const offset = rect.top * 0.4;
            el.style.transform = `translateY(${offset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
