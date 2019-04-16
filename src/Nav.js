import React, { Component } from "react"
import { Navbar } from "react-materialize"

export class Nav extends Component {
  render() {
    return (
      <Navbar brand="Blocksplorer" className="deep-orange darken-4">
        <a
          target="_blank"
          className="right"
          href="https://github.com/amberjohnsonsmile/block-explorer"
          rel="noopener noreferrer"
        >
          See the Code
        </a>
        <a
          target="_blank"
          className="right"
          href="https://amberjohnsonsmile.co/"
          rel="noopener noreferrer"
        >
          About the Developer
        </a>
      </Navbar>
    )
  }
}
