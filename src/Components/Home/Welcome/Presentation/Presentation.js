import React, { Component } from "react";
import "./Presentation.css";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
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
    setTimeout(() => {
      const div = document.getElementById("intro-text");
      const span = document.createElement('span');
      span.setAttribute('id', 'prout');
      span.setAttribute('class', 'point');
      div.appendChild(span);
      document.getElementById("prout").innerHTML = ".";
    }, 4650);
  };

  componentDidMount() {
    this.displayLetter();
  }

  render() {
    return (
      <>
        <div>
          <p className="mt-10 ml-3" id="intro-text"></p>
        </div>
      </>
    );
  }
}

export default Presentation;
