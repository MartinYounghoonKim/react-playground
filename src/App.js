import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent1 from './MyComponent1';
import Parent from "./RefExample/Parent";
import ClassComponent from "./hooksExample/hooksExample"

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  componentDidMount () {
    console.log('componentDidMount 실행');
    console.log(this.div.getBoundingClientRect().height);
  }

  handleClick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  render() {
    return (
      <div className="App">
        <MyComponent1 value={this.state.value}/>
        {this.state.value < 10 && <MyComponent value={this.state.value}/>}
        <div ref={ref => this.div = ref }></div>
        <button onClick={this.handleClick}>클릭</button>
        <Parent />
        <ClassComponent />
      </div>
    );
  }
}

export default App;
