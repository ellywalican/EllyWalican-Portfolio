// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <h2>Play-to-Earn Game (In Development)</h2>
          <p>To build a fun and rewarding crypto-based game for the community, with transparency and real ownership in mind.</p>
        </div>
        <div className="project-card">
          <h2>Crypto App Owner</h2>
          <p>To create simple yet useful apps for the growing crypto community, with an emphasis on accessibility and automation.</p>
        </div>
        <div className="project-card">
          <h2>Small Business Owner</h2>
          <p>To apply my IT skills in real-world business settings and gain hands-on experience in entrepreneurship.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
