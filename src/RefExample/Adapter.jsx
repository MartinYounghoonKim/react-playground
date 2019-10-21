import React, { Component } from 'react';

class Adapter extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div ref={this.props.ref1}>
        {this.props.children}
      </div>
    )

  }
}

export default Adapter;