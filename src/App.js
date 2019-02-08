import React, { Component } from "react";
import "./App.css";

const url = "http://localhost:3001";

class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ blocks: data });
        console.log("state", this.state.blocks);
      });
  }

  render() {
    return <p>{this.state.blocks}</p>;
  }
}

export default App;
