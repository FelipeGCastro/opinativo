import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'

import Home from './pages/Home/'
import Topic from './pages/Topic/'
import LinksContext from './store/LinksContext'

function App () {
  const [links, setLinks] = useState([])

  return (
    <>
      <Router>
        <LinksContext.Provider value={{ links, updateLinks: setLinks }}>
          <Switch>
            <Route path='/topic/:topicId'>
              <Topic />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </LinksContext.Provider>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
