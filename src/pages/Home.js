import React, { useEffect, useState } from 'react';
import './Home.css';
import profileImg from '../Image/Profile.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [typedText, setTypedText] = useState(['', '']);
  const fullText = ["ELLYBOY A. WALICAN", "SYSTEMS DEVELOPMENT"];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Typewriter effect for main screen
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText[0].length) {
        setTypedText([fullText[0].slice(0, i), '']);
      } else if (i <= fullText[0].length + fullText[1].length) {
        const j = i - fullText[0].length;
        setTypedText([fullText[0], fullText[1].slice(0, j)]);
      } else {
        clearInterval(typing);
      }
      i++;
    }, 40);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="home-hero">
      <div className={`overlay ${isVisible ? 'animated' : ''}`}>
        <div className="profile-section">
          {/* Profile Image */}
          <img
            className="profile-pic"
            src={profileImg}
            alt="Ellyboy A. Walican"
            onClick={() => setShowModal(true)}
          />

          {/* Text Section */}
          <div className="text-section">
            <h1 className="home-title">
              <div className="line-text">HI, I'M</div>
              <div className="line-text">{typedText[0]}</div>
              <div className="line-text">
                {typedText[1]}<span className="cursor"></span>
              </div>
            </h1>
            <hr className="line" />

            {/* Social Links */}
            <div className="social-links">
              <a href="https://facebook.com/ellyboyawalican" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/elly.erichan/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.youtube.com/@ErichanPlays" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content modal-open" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowModal(false)}>✕</button>
            <img src={profileImg} alt="Full Profile" className="modal-image" />

            {/* Modal Animated Text */}
            <div className="modal-caption">
              <p className="name-text">ELLYBOY A. WALICAN</p>
              <p className="role-text">SYSTEMS DEVELOPMENT</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
