import React from 'react'
// import KataOutput from '../kata-output.json'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.params.kataName}</h3>
      </div>
    )
  }
})
