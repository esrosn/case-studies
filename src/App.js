import React from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import { HomePage, AboutPage, StorePage, SubmitPage } from './pages'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/store' component={StorePage} />
          <Route path='/submit' component={SubmitPage} />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App
