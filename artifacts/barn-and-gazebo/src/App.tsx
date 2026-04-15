import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";
import Home from "@/pages/Home";
import Venue from "@/pages/Venue";
import Packages from "@/pages/Packages";
import Gallery from "@/pages/Gallery";
import Availability from "@/pages/Availability";
import Journal from "@/pages/Journal";
import Contact from "@/pages/Contact";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function AppInner() {
  const { isOpen, open, close } = useMobileMenu();
  const [location] = useLocation();
  useReveal();
  useParallax();

  return (
    <>
      <Nav onMenuOpen={open} />
      <MobileMenu isOpen={isOpen} onClose={close} />
      <ScrollToTop />
      <div key={location} className="page-transition">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/venue" component={Venue} />
          <Route path="/packages" component={Packages} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/availability" component={Availability} />
          <Route path="/journal" component={Journal} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <AppInner />
    </WouterRouter>
  );
}

export default App;
