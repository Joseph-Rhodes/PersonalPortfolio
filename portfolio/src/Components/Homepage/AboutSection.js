import React, { useState } from "react";
import Photo1 from "../../Images/Headshot.png";
import Photo2 from "../../Images/football1.png";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const AboutSection = () => {
  const [sliderValue, setSliderValue] = useState(65);
  const [activeTab, setActiveTab] = useState("Education");
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseDown = (e) => {
    const sliderRect = e.target.parentElement.getBoundingClientRect();

    const onMouseMove = (event) => {
      const newValue = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
      setSliderValue(Math.min(Math.max(newValue, 0), 100));
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        color: "white",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: "1 1 40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Image Slider */}
        <div
          style={{
            position: "relative",
            width: "250px",
            height: "400px",
            overflow: "hidden",
            border: "7px solid white",
            borderRadius: "15px",
          }}
        >
          <img
            src={Photo1}
            alt="Headshot"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
            }}
          />
          <img
            src={Photo2}
            alt="Football"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              clipPath: `inset(0 0 0 ${sliderValue}%)`,
            }}
          />
          <div
            onMouseDown={handleMouseDown}
            style={{
              cursor: "ew-resize",
              position: "absolute",
              top: "75%",
              left: `${sliderValue}%`,
              transform: "translate(-50%, -50%)",
              width: "5rem",
              height: "5rem",
              opacity:'0.7',
              backgroundColor: "#99f",
              borderRadius: "50%",
              zIndex: 10,
            }}
          ></div>
        </div>

         {/* Social Media Buttons */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
          }}
        >
          <a
            href="https://www.linkedin.com/in/josephrhodesv/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              textDecoration: 'none',
              color: 'white',
              transition: 'background-color 0.3s ease',
              backgroundColor: hover1 ? '#99f' : '#66c',
            }}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Joseph-Rhodes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              textDecoration: 'none',
              color: 'white',
              transition: 'background-color 0.3s ease',
              backgroundColor: hover2 ? '#99f' : '#66c',
            }}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/joseph.rhodes5/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              textDecoration: 'none',
              color: 'white',
              transition: 'background-color 0.3s ease',
              backgroundColor: hover3 ? '#99f' : '#66c',
            }}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: "1 1 60%",
          padding: "40px",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "Comic Sans",
            marginBottom: "1.5rem",
          }}
        >
          About Me
        </h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            fontFamily: "Monospace",
            marginBottom: "2rem",
          }}
        >
          I'm Joseph Rhodes, a senior at Case Western Reserve University majoring in Computer Science and Finance with
          minors in Business Management and Mathematics. I have a strong passion for technology and business and enjoy
          developing software solutions that solve real-world problems.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "2rem", marginBottom: "1rem" }}>
          {["Education", "Related Coursework", "Skills"].map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                cursor: "pointer",
                color: activeTab === tab ? "#99f" : "white",
                borderBottom: activeTab === tab ? "3px solid #99f" : "none",
                paddingBottom: "0.5rem",
              }}
            >
              {tab}
            </p>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ fontFamily: "Monospace", lineHeight: "1.8" }}>
          {activeTab === "Education" && (
            <ul>
              <li>
                <span style={{ color: "#99f", fontWeight: "bold" }}>2021-2025:</span> Case Western Reserve University
              </li>
              <li>
                <span style={{ color: "#99f", fontWeight: "bold" }}>Majors:</span> Computer Science and Finance
              </li>
              <li>
                <span style={{ color: "#99f", fontWeight: "bold" }}>Minors:</span> Mathematics and Business Management
              </li>
              <li>
                <span style={{ color: "#99f", fontWeight: "bold" }}>Cumulative GPA:</span> 3.6
              </li>
            </ul>
          )}
          {activeTab === 'Related Coursework' && (
            <ul>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Computer Science: </span> 
                 Data Structures, Algorithms, Operating Systems, Software Engineering, Artificial Intelligence, Full Stack Web Development, Computer Security, Database Systems, Logic Design, Programming Language Concepts, App Development for iOS
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Mathematics: </span>
                Multivariable Calculus, Vector Calculus, Linear Algebra, Statistics, Elementary Differential Equations, Discrete Mathematics, Intro to Scientific Computing
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Business: </span>
                Accounting, Business Management, Micro/Macro Economics, Marketing, Fintech, Corporate Finance, Investments, Financial Modeling, Cases, Empirical Analysis
              </li>
            </ul>
          )}
          {activeTab === 'Skills' && (
            <ul>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Programming Languages:</span> Java, Python, React.js, SQL, THREE.js, CSS, HTML.
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Technology:</span> AWS, Google Applications, MS Excel, MS PowerPoint, MS OneDrive, MS Teams, Tableau.
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Other Activities:</span> Actor, Dance, Marathon Runner, Soccer, Saxophone, Personal Fitness, Photography, Pickleball, Golf.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
