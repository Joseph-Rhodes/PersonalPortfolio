import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import image1 from "../../Images/soa.png";
import image2 from "../../Images/message.png";
import image3 from "../../Images/horiz:hist.png";
import image4 from "../../Images/Solar-System.png";
import image5 from "../../Images/memmap.png";
import image6 from "../../Images/crud.png";
import image7 from "../../Images/nn.svg";

const ProjectSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'SOA-Based Client-Server Wedding Planner',
      description: 'This project involves developing a Python-based client application to reserve matching slots for a hotel and a band using HTTP and JSON APIs. It tackles distributed systems challenges such as concurrency, delays, and failures, requiring efficient strategies for reservation management.',
      image: image1,
      githubLink: 'https://github.com/Joseph-Rhodes/comp28112_ex3_n72011jr',
    },
    {
      id: 2,
      title: 'Healthcare Messaging System',
      description: 'This project involves building a Python-based messaging system for healthcare professionals, including a server (myserver.py) to handle client connections and a client (myclient.py) for communication. It implements a custom protocol to support features like user registration, message broadcasting, and private messaging.',
      image: image2,
      githubLink: 'https://github.com/Joseph-Rhodes/More-Robust-Messaging-System-for-Healthcare-Professionals',
    },
    {
      id: 3,
      title: 'Image Histogram and Segmentation / Horizon Detection',
      description: 'This project showcases advanced image processing techniques, implemented in C++ using the OpenCV library. It features tools for creating image histograms, performing segmentation, and detecting horizons, offering a robust approach to analyzing and interpreting visual data.',
      image: image3,
      githubLink: 'https://github.com/Joseph-Rhodes/Image-Histogram-and-Segmentation-and-Horizon-Detection',
    },
    {
      id: 4,
      title: 'Solar System Visualization',
      description: 'This project simulates a simple solar system with a sun, planet, and moon using Three.js for 3D rendering in a web browser. The project involves creating geometrical and material components, animating celestial movements, and implementing optional enhancements like texturing, rotations, and background effects.',
      image: image4,
      githubLink: 'https://github.com/Joseph-Rhodes/visual-computing-sun-planet-and-moon/tree/main',
    },
    {
      id: 5,
      title: 'Travel Planner (MemMapper)',
      description: 'This project involves developing an Internet-based Travel Planning and Sharing System that combines itinerary management, flight and hotel searches, and a social media module. It allows users to plan trips, share experiences, and interact with others through features like posting, commenting, and following itineraries.',
      image: image5,
      githubLink: 'https://github.com/Joseph-Rhodes/Travel_Planner_CSDS393',
    },
    {
      id: 6,
      title: 'CRUD Application',
      description: 'This project is a CRUD (Create, Read, Update, Delete) application for managing data with a dynamic and interactive user interface. The project is built using Angular for the frontend framework, leveraging TypeScript, HTML, and CSS for creating robust and scalable web components.',
      image: image6,
      githubLink: 'https://github.com/Joseph-Rhodes/CRUD_Application',
    },
    {
      id: 7,
      title: 'Neural Network',
      description: 'This project implements and visualizes machine learning algorithms, including k-means clustering and gradient descent, to classify and analyze Iris dataset features and decision boundaries. The project is implemented in Python, utilizing libraries like numpy for numerical operations and matplotlib for data visualization.',
      image: image7,
      githubLink: 'https://github.com/Joseph-Rhodes/Neural-Network',
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title" style={{fontFamily:'Courier New', fontWeight:'bold'}}>Project Portfolio</h1>
      <p className="portfolio-subtitle">
        Here are some of my personal and school projects
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div
              className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="project-overlay">
                <p className="project-description">{project.description}</p>
              </div>
              <h3 className="project-title" style={{fontFamily:'C'}}>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => window.open('https://github.com/Joseph-Rhodes', '_blank')}
        className="see-more-button" style={{fontFamily:'C'}}
      >
        See More <FaGithub />
      </button>

      <style jsx>{`
        .portfolio-container {
          background-color: black;
          text-align: center;
          padding: 3rem 1rem;
          font-family: Arial, sans-serif;
          color: white;
          margin: 0 auto;
        }

        .portfolio-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .portfolio-subtitle {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 2.5rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-link {
          text-decoration: none;
          color: inherit;
        }

        .project-card {
          position: relative;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-description {
          color: white;
          font-size: 0.9rem;
          line-height: 1.5;
          text-align: center;
        }

        .project-title {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          color: white;
          font-size: 1rem;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .see-more-button {
          margin-top: 2rem;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          color: white;
          background-color: #99f;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .see-more-button:hover {
          background-color: #66c;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
          
          .portfolio-title {
            font-size: 2rem;
          }
          
          .portfolio-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectSection;