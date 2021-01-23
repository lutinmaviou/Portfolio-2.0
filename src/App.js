import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
