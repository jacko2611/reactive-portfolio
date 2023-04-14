import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Main from "./pages/Main"
import Footer from "./components/Footer/Footer"
import About from "./pages/About";

import Portfolio from "./pages/Portfolio";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Main} />
         <Route exact path="/main" component={Main} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
      </Wrapper>
      <Footer/>
    </div>
   </Router>
);

}

export default App;