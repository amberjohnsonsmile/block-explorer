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
      })
  }

  createTable = () => {
    // Each block gets a table
    // Each key/value pair gets a row <tr>
    // Each key gets a <td>
    // Each value gets a <td>
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Row className="preload">
          <Col s={4}>
            <Preloader flashing />
          </Col>
        </Row>
      )
    }

    return <table>{this.createTable()}</table>
  }
}

export default App
