// src/pages/Projects.js
import React, { useState } from 'react';
import './Projects.css';

// Import local images (exact case-sensitive file names!)
import wallyboyImage from "../Image/Wallyboy.jpg";
import bookwiseImage from "../Image/BookWise.jpg";
import amiraImage from "../Image/amira.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Wallyboy",
      description: "A food buying and delivery service designed to make ordering meals easier, faster, and more reliable for everyone.",
      image: wallyboyImage
    },
    {
      id: 2,
      title: "BookWise",
      description: "A platform for borrowing books and enjoying a world of reading anytime, encouraging knowledge sharing and easy access to literature.",
      image: bookwiseImage
    },
    {
      id: 3,
      title: "Amira Nova",
      description: "An online shop with delivery services that makes shopping more convenient, providing a wide range of products at your doorstep.",
      image: amiraImage
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      {/* Project Cards */}
      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description.slice(0, 50)}...</p>
          </div>
        ))}
      </div>

      {/* Popup with full details */}
      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details">
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
