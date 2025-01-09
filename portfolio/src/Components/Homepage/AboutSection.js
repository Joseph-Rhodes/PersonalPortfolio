import React, { useState } from 'react';
import Photo1 from '../../Images/Headshot.png';
import Photo2 from '../../Images/football1.png';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const AboutSection = () => {
  const [sliderValue, setSliderValue] = useState(65);
  const [activeTab, setActiveTab] = useState('Education');
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
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        // height:'60vh',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        backgroundColor:'black'
      }}
    >
      {/* Left side of the about me section */}
      <div
        style={{
          paddingTop:'4rem',
          flex: '1 1 40%',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          position: 'relative',
        }}
      >
        {/* Container for the images and slider */}
        <div
          style={{
            position: 'relative',
            width: '250px',
            height: '400px',
            overflow: 'hidden',
            border: '0.5rem solid white',
            borderRadius: '1rem',
          }}
        >
          {/* First image */}
          <img
            src={Photo1}
            alt="photo1"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
            }}
          />
          {/* Second image */}
          <img
            src={Photo2}
            alt="photo2"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath: `inset(0 0 0 ${sliderValue}%)`,
            }}
          />
          {/* Draggable dot */}
          <div
            onMouseDown={handleMouseDown}
            style={{
              cursor: 'ew-resize',
              position: 'absolute',
              top: '50%',
              left: `${sliderValue}%`,
              transform: 'translate(-50%, -50%)',
              width: '3rem',
              height: '3rem',
              backgroundColor: 'blue',
              opacity: '0.5',
              borderRadius: '50%',
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
              width: '40px',
              height: '40px',
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
              width: '40px',
              height: '40px',
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
              width: '40px',
              height: '40px',
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

      {/* Right side of the about me section */}
      <div
        style={{
          paddingTop:'7rem',
          paddingBottom:'5rem',
          flex: '1 1 60%',
          backgroundColor: 'black',
          color: 'white',
          padding: '40px',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontSize: '2.25em',
            fontWeight: 'bolder',
            marginBottom: '10px',
            fontFamily: 'Courier New',
          }}
        >
          About Me
        </h3>
        <p
          style={{
            fontSize: '1em',
            lineHeight: '1.8',
            fontFamily: 'monospace',
            marginBottom: '30px',
          }}
        >
          I'm Joseph Rhodes, a senior at Case Western Reserve University
          majoring in Computer Science and Finance with minors in Business Management, and Mathematics. I have a strong
          passion for technology and business and enjoy developing software solutions that
          can solve real-world problems.
        </p>

        {/* Tabs Section */}
        <div
          style={{
            display: 'flex',
            margin: '1.25rem 0 ',
          }}
        >
          <p
            onClick={() => setActiveTab('Education')}
            style={{
              marginRight: '3rem',
              fontSize: '1.25rem',
              fontWeight: '750',
              cursor: 'pointer',
              position: 'relative',
              color: activeTab === 'Education' ? '#99f' : 'inherit',
            }}
          >
            Education
          </p>
          <p
            onClick={() => setActiveTab('Related Coursework')}
            style={{
              marginRight: '3rem',
              fontSize: '1.25rem',
              fontWeight: '750',
              cursor: 'pointer',
              position: 'relative',
              color: activeTab === 'Related Coursework' ? '#99f' : 'inherit',
            }}
          >
            Related Coursework
          </p>
          <p
            onClick={() => setActiveTab('Skills')}
            style={{
              marginRight: '3rem',
              fontSize: '1.25rem',
              fontWeight: '750',
              cursor: 'pointer',
              position: 'relative',
              color: activeTab === 'Skills' ? '#99f' : 'inherit',
            }}
          >
            Skills
          </p>
        </div>

        {/* Tab Content */}
        <div style={{ fontFamily: 'monospace', lineHeight: '1.8' }}>
          {activeTab === 'Education' && (
            <ul>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>2021-2025:</span> Case Western Reserve University
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Majors:</span> Bachelor of Science in Engineering in
                Computer Science and Finance
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Minors:</span> Mathematics and Business Management
              </li>
              <li>
                <span style={{ color: '#99f', fontWeight: 'bold' }}>Cumulative GPA:</span> 3.6
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
