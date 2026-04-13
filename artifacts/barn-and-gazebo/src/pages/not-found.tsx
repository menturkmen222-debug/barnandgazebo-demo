import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-bg)",
      textAlign: "center",
      padding: "var(--space-8)",
    }}>
      <p style={{
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: "0.7rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--color-gold)",
        marginBottom: "var(--space-4)",
      }}>
        404
      </p>
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 300,
        fontSize: "clamp(2.5rem, 6vw, 5rem)",
        color: "var(--color-cream)",
        lineHeight: 1.1,
        marginBottom: "var(--space-6)",
      }}>
        Page Not Found
      </h1>
      <p style={{
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: "1rem",
        color: "var(--color-text-secondary)",
        maxWidth: 480,
        lineHeight: 1.7,
        marginBottom: "var(--space-8)",
      }}>
        The path you were looking for does not seem to exist. Perhaps the pines have shifted. Let us guide you back.
      </p>
      <button
        className="btn-primary"
        onClick={() => navigate("/")}
      >
        Return Home
      </button>
    </div>
  );
}
