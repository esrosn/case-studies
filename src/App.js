import React from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import { HomePage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route />
        <Route />
        <Route />
      </Switch>
    </Router>
  )
}

export default App
