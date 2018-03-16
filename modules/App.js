import React from 'react'
// import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>CodeWars Katas</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/katas">Katas</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
