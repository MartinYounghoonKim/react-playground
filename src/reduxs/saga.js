import {takeEvery, fork, takeLatest} from "@redux-saga/core/effects";

export const loginAction = () => ({
  type: "LOGIN"
});

function* watchEveryAction () {
  // while (true) {
  //   yield take("*")
  // }
  yield takeEvery("*", function (action) {
    console.log(`[Saga logger] Action: ${action.type}  =>`, action);
  })
}

function* login () {
  yield console.log(1);
}

export default function* () {
  yield fork(watchEveryAction);
  yield takeLatest("LOGIN", login);
}