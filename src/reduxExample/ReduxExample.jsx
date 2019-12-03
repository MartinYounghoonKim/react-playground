import React from "react";
import {connect} from "react-redux";
import {
  loginAction,
  logoutAction,
  pullingAction,
  tryAction,
  racingAction,
  yieldTest,
  forkTestAction
} from "../reduxs/saga";

class ReduxExample extends React.Component {
  componentDidMount() {
    this.props.loginAction();
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.props.logoutAction}>
          로그아웃
        </button>
        <button type="button" onClick={this.props.tryAction}>
          로그인
        </button>
        <button type="button" onClick={this.props.pullingAction}>
          ALL 테스트
        </button>
        <button type="button" onClick={this.props.racingAction}>
          RACING 테스트
        </button>

        <button type="button" onClick={this.props.yieldTest}>
          YIELD 테스트
        </button>
        <button type="button" onClick={this.props.forkTestAction}>
          FORK 테스트
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  loginAction,
  logoutAction,
  tryAction,
  pullingAction,
  racingAction,
  yieldTest,
  forkTestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);