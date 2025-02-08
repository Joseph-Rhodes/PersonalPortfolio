import React from "react";
import { FaFootballBall, FaPlane, FaGolfBall } from "react-icons/fa";

import BackgroundImage from "../../Images/photo-collage.png.png";

const PassionSection = () => {
  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "5rem",
    padding: "2rem",
  };

  const cardBaseStyle = {
    width: "250px",
    height: "300px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black for blending
    color: "white",
    fontFamily: "Monospace", // Updated to match the previous sections
    fontSize: "16px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = {
    backgroundColor: "#99f",
    color: "white",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw", // Full width of the viewport
        height: "100vh", // Full height of the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(80%)", // Apply grayscale only to the background image
          zIndex: -1, // Send background to the back
        }}
      />

      {/* Content */}
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "white",
            fontFamily: "Comic Sans", // Updated to match the heading font from previous sections
          }}
        >
          Activities
        </h1>
        <div style={cardStyle}>
          {/* Football Card */}
          <div
            style={cardBaseStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, hoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
              })
            }
          >
            <FaFootballBall size={50} />
            <h2 style={{ fontWeight: "bold", paddingTop: "0.5rem" }}>Football</h2>
            <p>Varsity Football Profile</p>
            <a
              href="https://athletics.case.edu/sports/football/roster/joseph-rhodes-v/8851"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
              Learn more
            </a>
          </div>

          {/* Travel Card */}
          <div
            style={cardBaseStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, hoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
              })
            }
          >
            <FaPlane size={50} />
            <h2 style={{ fontWeight: "bold", paddingTop: "0.5rem" }}>Travel</h2>
            <p>Travel Photography Collection</p>
            <a
              href="https://jr5travel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
              Learn more
            </a>
          </div>

          {/* Golfing Card */}
          <div
            style={cardBaseStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, hoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
              })
            }
          >
            <FaGolfBall size={50} />
            <h2 style={{ fontWeight: "bold", paddingTop: "0.5rem" }}>Golfing</h2>
            <p>
              Golf <br /> (Updating soon)
            </p>
            <a
              href="/#"
              style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassionSection;
