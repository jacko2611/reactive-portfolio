import React from 'react';
import './About.css'; // Import the CSS file

import myPhoto from '/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/my-photo.jpg'; // Import the image

function About() {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>About Me</h1>
        <p>Hi, I'm Jackson! I'm on my way to completing a Full Stack Bootcamp through the University of Sydney.
          I've delved into the worlds of React, Node.js, Express.js, and MongoDB. 
          Currently working as a coffee machine technician, this pivot in careers is a really exciting time for me. 
          I also work as a freelance audio engineer and music producer. 
          I'm looking forward to learning more about web development and building more projects in the future.</p>
      </div>
      <div className="image-container">
        <img src={myPhoto} alt="Jackson Kent" width="200" height="auto"/>
      </div>
    </div>
  );
}

export default About;
