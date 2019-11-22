import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./saga";
import reducers from "./reducer";

function configureStore () {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: "aaa"
    });
  const composeEnhancers = devtools || compose;
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;