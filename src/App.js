import React, { Component } from "react"
import { HashRouter, withRouter } from 'react-router-dom'

import Container from "./components/Container/Container"

class App extends Component{
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Container />
        </div>
      </HashRouter>
    )
  }
}

export default App
