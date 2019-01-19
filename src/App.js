import React, { Component } from 'react'
import Routes from './routes/routes'
import { HashRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export default App