import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
  }
  test = () => {
    console.log(this.props.parentRef())
  };
  render () {
    // setInterval(() => {
    //   console.log(this.props.parentRef.current);
    // }, 1000);
    this.test();
    return (
      <>
      test
        {this.props.parentRef.current && (
          <div>
            Child
          </div>
        )}
      </>
    );
  }
}

export default Child;