import {delay, all, put, call, take, race, fork, takeLatest, cancel, cancelled} from "@redux-saga/core/effects";
import {api, api1, api2, api3} from "./example";

export const loginAction = () => ({
  type: "LOGIN"
});
export const logoutAction = () => ({
  type: "LOGOUT"
});

export const tryAction = () => ({
  type: "TRY"
});

function* watchEveryAction () {
  while (true) {
    const action = yield take("*");
    console.log(`[Saga logger] Action: ${action.type}  =>`, action);
  }
  // yield takeEvery("*", function (action) {
  //   console.log(`[Saga logger] Action: ${action.type}  =>`, action);
  // })
}

function* login () {
  yield console.log(1);
}

function* authorize() {
  try {
    yield call(api)
    yield put({type: 'LOGIN_SUCCESS' });
    yield call(api1);
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  } finally {
    if (yield cancelled()) {
      yield put({ type: "LOGIN_CANCELLED" });
    }
  }
}

function* loginFlow() {
  while (true) {
    const {user, password} = yield take('TRY')
    const task = yield fork(authorize, user, password)
    const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
    if (action.type === "LOGOUT") {
      yield cancel(task);
    }
    yield call(api2)
  }
}

export const pullingAction = () => ({
  type: "PULLING"
});

function* pulling () {
  yield all([
    call(api3),
    call(api2)
  ])
}

export const racingAction = () => ({
  type: "RACING"
});

function* racing () {
  const {posts, timeout1} = yield race({
    posts: call(api2, '/posts'),
    timeout: delay(2000)
  });
  console.log(posts, timeout1);
  if (posts)
    put({type: 'POSTS_RECEIVED'})
  else
    put({type: 'TIMEOUT_ERROR'})
}
export default function* () {
  yield fork(watchEveryAction);
  yield takeLatest("LOGIN", loginFlow);
  yield takeLatest("PULLING", pulling);
  yield takeLatest("RACING", racing);
}