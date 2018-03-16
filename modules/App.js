import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>CodeWars Katas</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/katas" activeClassName="active">Katas</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
