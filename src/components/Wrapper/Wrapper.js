import React, { Component } from 'react';
import './Wrapper.css'

export class Wrapper extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <h1 className='header'>{this.props.title}</h1>
        {this.props.children}
        {/* {this.props.onRender()} */}
      </div>
    )
  }
}

export default Wrapper