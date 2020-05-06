import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'

import Home from './pages/Home/'
import Topic from './pages/Topic/'

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/topic'>
            <Topic />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
