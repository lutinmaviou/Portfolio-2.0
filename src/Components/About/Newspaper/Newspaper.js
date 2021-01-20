import React, { Component } from "react";
import "./Newspaper.css";
import Paper from "../../../assets/img/old-paper.png";
import Header from "./Header/Header";

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
    previousPage.style.display = 'block';
  };

  render() {
    return (
      <div
        id="newspaper-container"
        className={`my-24 -top-${this.props.top} transform ${this.props.rotate} page-${this.props.pageNb}`}
      >
        <img src={Paper} alt="Vieux journal" />
        <Header />
        <div id="buttons" className="text-red-600 text-5xl flex justify-around">
          {!this.state.firstPage && !this.state.lastPage ? (
            <>
              <button onClick={this.previousPage}>Previous</button>
              <button onClick={this.nextPage}>Next</button>
            </>
          ) : this.state.firstPage ? (
            <button onClick={this.nextPage}>Next</button>
          ) : (
            <button onClick={this.previousPage}>Previous</button>
          )}
        </div>
      </div>
    );
  }
}

export default Newspaper;
