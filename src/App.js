import React, { Component } from "react";
import "./App.css";
import HooksExample3 from "./hooksExample/hooksExample3"

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  handleClick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  render() {
    return (
      <div className="App">
        <HooksExample3 />
      </div>
    );
  }
}

export default App;
