import React from "react";
import Resume from "../Files/Joseph Rhodes Resume.pdf"

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
        backgroundColor: "black",
        color: "white",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          fontFamily: "Cursive",
          cursor: "pointer",

        }}
        onClick={() => scrollToSection("intro")}
      >
        JRV
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <p
          style={{ cursor: "pointer", fontSize: "1.25rem", fontFamily:'C', paddingTop:'0.75rem' }}
          onClick={() => scrollToSection("about")}
        >
          About
        </p>
        <p
          style={{ cursor: "pointer", fontSize: "1.25rem", fontFamily:'C', paddingTop:'0.75rem' }}
          onClick={() => scrollToSection("passions")}
        >
          Activities
        </p>
        <p
          style={{ cursor: "pointer", fontSize: "1.25rem", fontFamily:'C', paddingTop:'0.75rem' }}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </p>
        <p
          style={{ cursor: "pointer", fontSize: "1.25rem", fontFamily:'C',paddingTop:'0.75rem' }}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </p>

        {/* Resume Button */}
        <a
          href={Resume} // Replace with the actual path to your resume file
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0.4rem 1rem",
            borderRadius: "5px",
            backgroundColor: "#99f",
            fontWeight: "bold",
            fontFamily:"C",
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
