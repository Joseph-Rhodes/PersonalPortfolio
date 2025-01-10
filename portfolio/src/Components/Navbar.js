import React from "react";
import Resume from "../Files/Joseph Rhodes Resume.pdf";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        color: "white",
        width: "100%",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        position: "static",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          fontFamily: "Snell Roundhand, cursive",
          cursor: "pointer",
        }}
        onClick={() => scrollToSection("intro")}
      >
        JR5
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["About", "Projects", "Activities", "Contact"].map((link) => (
          <p
            key={link}
            style={{
              cursor: "pointer",
              fontSize: "1rem",
              fontFamily: "'Monospace', sans-serif",
              textTransform: "uppercase",
              margin: 0,
              padding: 0,
              transition: "color 0.3s ease",
            }}
            onClick={() => scrollToSection(link.toLowerCase())}
            onMouseEnter={(e) => (e.target.style.color = "#99f")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            {link}
          </p>
        ))}

        {/* Resume Button */}
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0.4rem 1rem",
            borderRadius: "5px",
            backgroundColor: "#99f",
            fontWeight: "bold",
            fontFamily: "'Monospace', sans-serif",
            textTransform: "uppercase",
            margin: 0,
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#66c")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#99f")}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
