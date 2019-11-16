import React, { useState, useEffect } from 'react';
import { fetchUser } from "./api"

const FunctionalComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Mount")
    async function fetchData () {
      const user = await fetchUser();
      setUser(user);
    }
    fetchData();
    return () => {
      console.log("Component unmounted and rerendering")
    }
  }, []);
  // useEffect(() => {
  //   console.log("User State changed!")
  //   return () => {
  //     console.log("Component unmounted and rerendering")
  //   }
  // }, [user])
  return user && (
    <dl>
      <dt>유저의 이름</dt>
      <dt>{user.name}</dt>
      <dt>유저의 나이</dt>
      <dt>{user.age}</dt>
    </dl>
  )
}

class ClassComponent extends React.Component {
  state = {
    user: null
  }
  async componentDidMount() {
    const user = await fetchUser();
    this.setState({ user });
  }

  render () {
    if (!this.state.user) {
      return null;
    }
    return (
      <dl>
        <dt>유저의 이름</dt>
        <dt>{this.state.user.name}</dt>
        <dt>유저의 나이</dt>
        <dt>{this.state.user.age}</dt>
      </dl>
    )
  }
}

class ParentComponent extends React.Component {
  state = {
    toggle: true
  }
  render () {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.setState({ toggle: !this.state.toggle })}
        >
          Toggle
        </button>
        Functional 컴포넌트 =>
        {this.state.toggle && <FunctionalComponent />}
        Class 컴포넌트 =>
        <ClassComponent />
      </div>
    )
  }
}

export default ParentComponent;
