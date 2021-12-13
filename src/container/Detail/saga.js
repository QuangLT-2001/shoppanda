import {
  call,
  takeLatest,
  takeEvery,
  put,
  all,
  fork
} from "redux-saga/effects";
import {
  getListProductDetailSuccess,
  getListProductDetailFailed
} from "./action";
import {getListProductDetailApi} from "./service";
import {GET_LIST_PRODUCT_DETAIL_REQUEST} from './contants';
function* getListProductDetailProcess(params) {
  try {
    console.log("Alooooooooooooo");
    const respon = yield call(getListProductDetailApi);
    console.log('respon', respon);
  }catch (err) {
    console.log('err123', err);
  }
}
function* watchGetListProductDetail() {
  yield takeLatest(GET_LIST_PRODUCT_DETAIL_REQUEST, getListProductDetailProcess)
}
function* watchAll() {
  yield all([watchGetListProductDetail])
}
export default watchAll;