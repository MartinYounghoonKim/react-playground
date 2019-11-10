import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
  const [count, counting] = useState(10);
  useEffect(() => {
    setTimeout(() => counting(count-1), 1000);
    console.log("한번만 실행됩니다.");
  }, []);
  return (
    <div> {count} </div>
  )
}

class ClassComponent extends React.Component {
  render () {
    return (
      <div>
        <FunctionalComponent />
      </div>
    )
  }
}

export default ClassComponent;
