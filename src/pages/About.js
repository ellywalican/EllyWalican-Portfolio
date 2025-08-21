import React from 'react';
import './About.css';
import profileImg from '../Image/Profile.jpg';


// ✅ Import icons from src/icons folder
import htmlIcon from '../icons/html.png';
import cssIcon from '../icons/css.png';
import jsIcon from '../icons/js.png';
import reactIcon from '../icons/react-icons.svg';
import javaIcon from '../icons/java.png';
import androidIcon from '../icons/android-studio.png';
import mysqlIcon from '../icons/mysql.png';

const skills = [
  { name: 'HTML', icon: htmlIcon, level: 90 },
  { name: 'CSS', icon: cssIcon, level: 85 },
  { name: 'JavaScript', icon: jsIcon, level: 80 },
  { name: 'React', icon: reactIcon, level: 75 },
  { name: 'Java', icon: javaIcon, level: 70 },
  { name: 'Android Studio', icon: androidIcon, level: 65 },
  { name: 'MySQL', icon: mysqlIcon, level: 60 }
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={profileImg} alt="Profile" className="profile-img" />

        {/* ✅ Intro Section */}
        <h1>About Me</h1>
        <p>
          I'm <strong>Ellyboy A. Walican</strong>, an aspiring IT Developer passionate about
          building user-friendly applications and solving real-world problems through technology.
        </p>

        {/* ✅ What I Do Section */}
        <h2>What I Do</h2>
        <ul className="what-i-do">
          <li><i className="fas fa-laptop-code"></i> Create responsive websites and applications</li>
          <li><i className="fas fa-paint-brush"></i> Design clean and modern user interfaces</li>
          <li><i className="fas fa-database"></i> Work with both front-end and back-end technologies</li>
        </ul>

        {/* ✅ Skills with Progress Bars */}
        <h2>Skills & Tools</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
