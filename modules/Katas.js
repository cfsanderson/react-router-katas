import React from 'react'
// import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Katas</h2>
        <ul>
          <li><NavLink to="/katas/8kyu/kata-1">kata #1</NavLink></li>
          <li><NavLink to="/katas/7kyu/kata-2">kata #2</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
