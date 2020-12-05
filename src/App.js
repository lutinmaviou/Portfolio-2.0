import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Home from "./Components/Home/Home";
import VinylContainer from "./Components/Vinyl-container/Vinyl.container";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
