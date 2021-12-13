import HomeSaga from './container/Home/saga';
import ProductSaga from './container/Product/saga';
import DetailSaga from "./container/Detail/saga"
import {all} from 'redux-saga/effects'
export  function* RootSaga() {
  yield all([
    HomeSaga(),
    ProductSaga(),
    DetailSaga()
  ])
}