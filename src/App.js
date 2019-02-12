import React, { Component } from "react"
import { Col, Row, Preloader } from "react-materialize"
import "./App.css"

const url = "http://localhost:3001"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      blocks: []
    }
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          blocks: data
        })
        console.log("state", this.state.blocks)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Row class="preload">
          <Col s={4}>
            <Preloader flashing />
          </Col>
        </Row>
      )
    }

    return <p>{this.state.blocks}</p>
  }
}

export default App
