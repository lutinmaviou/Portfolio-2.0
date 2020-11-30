import logo from "./logo.svg";
import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import VinylContainer from "./Components/Vinyl-container/Vinyl.container";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
