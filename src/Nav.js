import React, { Component } from "react"
import { Navbar, NavItem } from "react-materialize"

export class Nav extends Component {
  render() {
    return (
      <Navbar brand="Blocksplorer" className="deep-orange darken-4">
        <a
          target="_blank"
          className="right"
          href="https://github.com/amberjohnsonsmile/block-explorer"
        >
          See the Code
        </a>
        <a
          target="_blank"
          className="right"
          href="https://amberjohnsonsmile.co/"
        >
          About the Developer
        </a>
      </Navbar>
    )
  }
}
