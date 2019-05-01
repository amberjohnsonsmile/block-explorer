import React, {Component} from 'react'
import {
  Collapsible,
  CollapsibleItem,
  Col,
  Row,
  Preloader
} from 'react-materialize'
import './App.css'
import {Nav} from './Nav'

const url = 'https://morning-sea-95309.herokuapp.com/'

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
        console.log(this.state.blocks)
      })
      .catch(console.error)
  }

  createTables = () => {
    return this.state.blocks.map(block => {
      return (
        <CollapsibleItem header={'Block ' + block.number}>
          <table>
            <tbody>{this.createRows(block)}</tbody>
          </table>
        </CollapsibleItem>
      )
    })
  }

  createRows = block => {
    return Object.keys(block).map(key => {
      return (
        <tr>
          <td style={{width: '15%'}}>{key}</td>
          <td className="values">{block[key]}</td>
        </tr>
      )
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Nav />
          <Row className="preload center">
            <Col className="preloader" s={12}>
              <Preloader flashing />
            </Col>
          </Row>
        </div>
      )
    }

    return (
      <div>
        <Nav />
        <main>
          <h1>Blocksplorer</h1>
          <h2>Splorin' the Ethereum blockchain</h2>
          <Collapsible>{this.createTables()}</Collapsible>
        </main>
      </div>
    )
  }
}

export default App
