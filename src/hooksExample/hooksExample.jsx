import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
  const [count, counting] = useState(10);
  // socket.connect()
  // socket.disconnect()
  return (
    <div> {count} </div>
  )
}

class ClassComponent extends React.Component {
  state = {
    count: 10
  }
  componentDidMount() {
    setTimeout(() => this.setState({ count:  this.state.count - 1}), 1000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(() => this.setState({ count:  this.state.count - 1}), 1000);
  }

  render () {
    return (
      <div>{this.state.count}</div>
    )
  }
}

class ParentComponent extends React.Component {
  render () {
    return (
      <div>
        Functional 컴포넌트 =>
        <FunctionalComponent />
        Class 컴포넌트 =>
        <ClassComponent />
      </div>
    )
  }
}

export default ParentComponent;
