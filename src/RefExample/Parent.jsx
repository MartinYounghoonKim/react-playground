import React, { Component } from 'react';
import Child from "./Child";
import Adapter from "./Adapter";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  getMyRef = () => {
    return this.myRef;
  };
  render () {
    return (
        <div ref={this.myRef}>
          <Child
            parentRef={this.getMyRef}
          />
        </div>
    )

  }
}

export default Parent;