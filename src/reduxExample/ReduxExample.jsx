import React from "react";
import {connect} from "react-redux";
import { loginAction } from "../reduxs/saga";

class ReduxExample extends React.Component {
  componentDidMount() {
    this.props.loginAction();
  }

  render () {
    return (
      <div>
        ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ

      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);