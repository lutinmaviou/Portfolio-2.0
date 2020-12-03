import React, { Component } from "react";
import "./Pres.css";

class Pres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //text: this.props.text,
      text: "",
      oldText: "",
      evolvingText: "",
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
          document.getElementById("toto").innerHTML = text;
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
      <>
        <h2 id="toto"></h2>
      </>
    );
  }
}

export default Pres;
