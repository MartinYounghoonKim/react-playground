import React, { useState, useEffect, useRef } from 'react';

class HookExampleParentComponent extends React.Component {
  state = {
    isShown: true,
    remainSeconds: 60
  };
  render () {
    return (
      <>
        <button
          type="button"
          onClick={() => this.setState({ remainSeconds: this.state.remainSeconds + 60 })}
        >
          초기화
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isShown: !this.state.isShown })}
        >
          토글
        </button>
        {this.state.isShown && <HookExampleChildrenComponent remainSeconds={this.state.remainSeconds}/>}
        <Counter/>
      </>
    )
  }
}
const HookExampleChildrenComponent = (
  {
    remainSeconds
  }
) => {
  const [seconds, setSeconds] = useState(remainSeconds);
  const A_MILLI_SECOND = 1000;

  useEffect(function () {
    const timer = setTimeout(function () {
      setSeconds(seconds - 1);
    }, A_MILLI_SECOND);
  }, [seconds]);

  useEffect(function () {

    setSeconds(remainSeconds);
    // return () => {
    //   console.log("끝");
    //   clearTimeout(timer);
    // }
  }, [remainSeconds]);
  return (
    <span>
      남은 시간은 <strong>{seconds}</strong> 입니다.
    </span>
  )
};
function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    console.log("callback")
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      console.log("tick");
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      console.log(1);
      return () => {
        console.log(1111);
        clearInterval(id);
      };
    }
  }, [delay]);
}
export default HookExampleParentComponent;