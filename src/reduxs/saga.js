import {delay, all, put, call, take, race, fork, takeLatest, cancel, cancelled, spawn} from "@redux-saga/core/effects";
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

export const yieldTest = () => ({
  type: "YIELD_TEST"
});

export const forkTestAction = () => ({
  type: "FORK_TEST"
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
  if (posts)
    put({type: 'POSTS_RECEIVED'})
  else
    put({type: 'TIMEOUT_ERROR'})
}

function* yieldTest1 () {
  return "yieldTest1";
}

function* yieldTest2 () {
  return "yieldTest2";
}

function* yieldTest3 () {
  return "yieldTest3";
}

function* severalYield () {
  const yield1 = yield* yieldTest1();
  console.log(yield1);

  const yield2 = yield* yieldTest2();
  console.log(yield2);

  const yield3 = yield* yieldTest3();
  console.log(yield3);
}

function* forkedCollections () {
  try {
    // fork 모델의 경우
    const successApi = yield spawn(forked1);
    const failedApi = yield spawn(forked2);
  } catch (e) {
    console.log("[Logs] =>");
    console.log(e);
  }
  delay(1000, console.log("end"))
}

function* forkMain () {
  yield call(forkedCollections);
}

function* forked1 () {
  yield call(api1);
  yield put({ type: "forked1_completed" });
}

function* forked2 () {
  yield call(api3);
  yield put({ type: "forked2_cancelled" });
}

export default function* () {
  yield fork(watchEveryAction);
  yield takeLatest("LOGIN", loginFlow);
  yield takeLatest("PULLING", pulling);
  yield takeLatest("RACING", racing);
  yield takeLatest("YIELD_TEST", severalYield);
  yield takeLatest("FORK_TEST", forkMain);
}