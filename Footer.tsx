import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Developers</h3>
        <div className="developers-list">
          <div className="developer-item">
            <div className="developer-name">Sourabh Singh</div>
            <a
              href="https://github.com/Graphical27"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-github"
            >
              github.com/Graphical27
            </a>
          </div>
          <div className="developer-item">
            <div className="developer-name">Paras Mehta</div>
            <a
              href="https://github.com/Paras-Mehta007"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-github"
            >
              github.com/Paras-Mehta007
            </a>
          </div>
          <div className="developer-item">
            <div className="developer-name">Gaurav Singh</div>
            <a
              href="https://github.com/gauravsinghshah"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-github"
            >
              github.com/gauravsinghshah
            </a>
          </div>
        </div>
        <div className="footer-copyright">© {new Date().getFullYear()} Perfect Cut - All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;