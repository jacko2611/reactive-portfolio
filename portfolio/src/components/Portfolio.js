import React from 'react';

function Portfolio() {
  return (
    <div>
      <div style={{ display: 'inline-block', textAlign: 'center', margin: '0 20px' }}>
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image1.jpg")} style={{ display: 'block', margin: '0 auto', width: '50%' }} />
        <a href="https://github.com/jacko2611/chat-support">Chat Support - A ticket based support application using Socket IO for communication</a>
      </div>
      <div style={{ display: 'inline-block', textAlign: 'center', margin: '0 20px' }}>
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image2.jpg")} style={{ display: 'block', margin: '0 auto', width: '50%' }} />
        <a href="https://github.com/jacko2611/just-another-editor">JATE - A text editor PWA</a>
      </div>
      <div style={{ display: 'inline-block', textAlign: 'center', margin: '0 20px' }}>
        <img src={require("/Users/jacksonkent/Desktop/Bootcamp/reactive-portfolio/portfolio/src/image3.jpg")} style={{ display: 'block', margin: '0 auto', width: '50%' }} />
        <a href="https://github.com/jacko2611/staff-tracker">Staff Tracker - A CLI application to keep track of staff using Sequelize</a>
      </div>
    </div>
  );
}

export default Portfolio;
