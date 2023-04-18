import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* <footer>
          <div className="social-links">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://stackoverflow.com/users/your-user-id/your-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-stack-overflow" />
            </a>
          </div>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
