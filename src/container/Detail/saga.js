import {
  call,
  takeLatest,
  takeEvery,
  put,
  all,
  fork,
  delay
} from "redux-saga/effects";
import {
  getProductDetailSuccess,
  getProductDetailFailed,
  getListProductSuccess,
  getListProductFailed
} from "./action";
import { getProductDetailApi, getListProductApi } from "./service";
import { GET_PRODUCT_DETAIL_REQUEST, GET_LIST_PRODUCT_REQUEST } from './contants';
function* getProductDetailProcess(params) {
  try {
    const { data: id, type } = params;
    const respon = yield call(getProductDetailApi, id)
    if (respon.status === 200 || respon.status===201) {
      yield put(getProductDetailSuccess(respon.data));
    } else {
      yield put(getProductDetailFailed())
    }
  } catch (err) {

    yield put(getProductDetailFailed(err))
  }
}
function* watchGetProductDetail() {
  yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, getProductDetailProcess);
}

function* getListProductProcess(params) {
  try {
    const respon = yield call(getListProductApi);
    if(respon.status === 200 || respon.status=== 201) {
      yield put(getListProductSuccess(respon.data))
    }else {
      yield put(getProductDetailFailed())
    }
  } catch (err) {
    yield put(getProductDetailFailed())
  }
}
function* watchGetListProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess);
}
function* watchAll() {
  yield all([
    watchGetProductDetail(),
    watchGetListProduct()
  ])
}

export default watchAll;