import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reduce";
import rootSaga from "./container/Home/saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default Store;