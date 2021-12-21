import HomeSaga from './container/Home/saga';
import ProductSaga from './container/Product/saga';
import DetailSaga from "./container/Detail/saga";
import PostSaga from "./container/ListPost/saga";
import PostDetailSaga from "./container/PostDetail/saga";
import CartSaga from "./container/Cart/saga";
import {all} from 'redux-saga/effects';
export  function* RootSaga() {
  yield all([
    HomeSaga(),
    ProductSaga(),
    DetailSaga(),
    PostSaga(),
    PostDetailSaga(),
    CartSaga()
  ])
}