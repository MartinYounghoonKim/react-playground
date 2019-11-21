import React, {Component} from 'react';
import './App.css';
import HookExampleParentComponent from "./hooksExample/hooksExample2";

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
        <HookExampleParentComponent/>
      </div>
    );
  }
}

export default App;
