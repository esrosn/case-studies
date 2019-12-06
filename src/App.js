import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import { HomePage, AboutPage, StorePage, SubmitPage } from './pages'
import Layout from './components/Layout'

class App extends Component {
  state = {
    isMenuOpen: false
  }

  handleMenuToggle = e => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Layout {...this.state} handleMenuToggle={this.handleMenuToggle}>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/store' component={StorePage} />
            <Route path='/submit' component={SubmitPage} />
          </Layout>
        </Switch>
      </Router>
    )
  }
}

export default App
