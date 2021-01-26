import React, { Component } from "react";
import "./Newspaper.css";
import Paper from "../../../assets/img/old-paper.png";
import Header from "./Header/Header";
import LeftFinger from "../../../assets/img/finger-left.png";
import RightFinger from "../../../assets/img/finger-right.png";

class Newspaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: false,
      lastPage: false,
    };
  }
  
  componentDidMount = () => {
    const { firstPage, lastPage } = this.props;
    if (firstPage || lastPage) {
      this.setState({
        firstPage,
        lastPage,
      });
    }
  };

  nextPage = () => {
    const currentPage = document.querySelector(`.page-${this.props.pageNb}`);
    currentPage.style.animationPlayState = "running";
    setTimeout(() => {
      currentPage.style.display = "none";
    }, 700);
  };

  previousPage = () => {
    const previousPageNb = this.props.pageNb - 1;
    const previousPage = document.querySelector(`.page-${previousPageNb}`);
    previousPage.style.animationPlayState = "paused";
    previousPage.style.display = "block";
  };

  render() {
    return (
      <div
        id="newspaper-container"
        className={`my-24 transform ${this.props.rotate} page-${this.props.pageNb}`}
      >
        <img src={Paper} alt="Vieux journal" />
        <Header />
        <div id="buttons" className="text-red-600 text-5xl -top-24">
          {!this.state.firstPage && !this.state.lastPage ? (
            <div className="flex justify-between">
              <img
                src={RightFinger}
                alt="Doigt pointé vers la gauche"
                onClick={this.previousPage}
                className="ml-12 left-finger"
              />
              <img
                src={LeftFinger}
                alt="Doigt pointé vers la droite"
                onClick={this.nextPage}
                className="mr-12 right-finger"
              />
            </div>
          ) : this.state.firstPage ? (
            <img
              src={LeftFinger}
              alt="Doigt pointé vers la droite"
              onClick={this.nextPage}
              id="right-finger"
              className="right-finger"
            />
          ) : (
            <img
              src={RightFinger}
              alt="Doigt pointé vers la gauche"
              onClick={this.previousPage}
              className="ml-12 left-finger"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Newspaper;
