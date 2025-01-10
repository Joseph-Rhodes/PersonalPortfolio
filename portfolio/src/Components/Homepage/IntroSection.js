import React, { useState } from "react";
import IntroPhoto from "../../Images/IMG_1444.jpg";
import BackgroundImage from "../../Images/IMG_1326.jpg";

const IntroSection = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        margin: "0",
        padding: "0",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(70%)",
          zIndex: -1,
        }}
      ></div>

      {/* Profile Picture */}
      <div style={{ paddingBottom: "2rem", paddingTop: "2rem", textAlign: "center" }}>
        <img
          src={IntroPhoto}
          alt="IntroPhoto"
          style={{
            cursor: "pointer",
            height: "250px",
            width: "250px",
            border: "7px solid white",
            borderRadius: "50%",
            objectFit: "cover",
            transform: hover ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>

      {/* Name */}
      <div>
        <h1
          className="mb-1"
          style={{
            color: "white",
            paddingBottom: "1rem",
            fontSize: "4rem",
            fontFamily: 'Comic Sans',
          }}
        >
          Joseph Rhodes
        </h1>
      </div>

      {/* Description */}
      <div>
        <h3
          className="mb-5"
          style={{
            color: "lightgrey",
            fontFamily: "'Monospace', sans-serif",
            fontSize: "1.25rem",
            textAlign: "center",
            paddingBottom: "1rem",
          }}
        >
          <em>
            - 2025 Graduate -
            <br />
            - Case Western Reserve University -
          </em>
        </h3>
      </div>
    </div>
  );
};

export default IntroSection;
