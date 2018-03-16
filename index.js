import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Katas from './modules/Katas'
import Kata from './modules/Kata'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/katas" component={Katas}>
        <Route path="/katas/:username/:kataName" component={Kata}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
