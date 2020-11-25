import logo from "./logo.svg";
import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import VinylContainer from "./Components/Vinyl-container/Vinyl.container";

class App extends Component {
  render() {
    return (
      <div>
        <VinylContainer />
      </div>
    );
  }
}

export default App;
