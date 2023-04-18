import React from 'react';
import './Portfolio.css'; // import external CSS file for styling

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image1.jpg")} alt="Project 1" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/chat-support">Chat Support</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image2.jpg")} alt="Project 2" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/just-another-editor">JATE</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image3.jpg")} alt="Project 3" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/staff-tracker">Staff Tracker</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image4.jpg")} alt="Project 4" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/social-backend">Social Backend</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image5.jpg")} alt="Project 5" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/shopfront-to-backend">Shopfront - Backend</a>
        </div>
      </div>
      <div className="portfolio-card">
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image6.jpg")} alt="Project 6" />
        <div className="portfolio-description">
          <a href="https://github.com/jacko2611/are-you-reading.me">Are You Reading.me</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
