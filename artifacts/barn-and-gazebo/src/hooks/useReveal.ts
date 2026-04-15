import { useEffect } from "react";
import { useLocation } from "wouter";

export function useReveal() {
  const [location] = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    const observe = () => {
      const elements = document.querySelectorAll(
        ".reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)"
      );
      elements.forEach((el) => observer.observe(el));
    };

    observe();
    const timer = setTimeout(observe, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location]);
}
