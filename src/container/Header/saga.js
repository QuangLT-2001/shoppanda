import {
  all,
  call,
  takeEvery,
  takeLatest,
  put,
  delay,
  fork
} from "redux-saga/effects";
import {
  getListProductSuccess,
  getListProductFailed
} from "./actions";
import {
  GET_LIST_PRODUCT_REQUEST
} from "./constants";
import {
  getListProductApi
} from "./service";
function* getListProductProcess(params) {
  try {
    const respon = yield call(getListProductApi)
  }catch (err) {}
}
function* watchGetListProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess);
}

function* watchAll() {
  yield all([
    watchGetListProduct(),
  ])
}

export default watchAll;