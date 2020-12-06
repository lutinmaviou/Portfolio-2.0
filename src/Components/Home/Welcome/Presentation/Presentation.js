import React, { Component } from "react";
import "./Presentation.css";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  displayLetter = () => {
    const letters = this.props.text.split("");
    let i = -1;
    setTimeout(() => {
      let x = setInterval(() => {
        if (i < letters.length) {
          i++;
          this.setState((state) => ({
            text: [...state.text, letters[i]],
          }));
          const text = this.state.text.join("");
          document.getElementById("intro-text").innerHTML = text;
        } else {
          clearInterval(x);
        }
      }, 50);
    }, 2000);
  };

  componentDidMount() {
    this.displayLetter();
  }

  render() {
    return (
      <div id="intro-text">
        <h2></h2>
      </div>
    );
  }
}

export default Presentation;
