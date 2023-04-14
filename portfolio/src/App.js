import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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

        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h1>About Me</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function Portfolio() {
  return <h1>Portfolio</h1>;
}

function Resume() {
  return <h1>Resume</h1>;
}

export default App;
