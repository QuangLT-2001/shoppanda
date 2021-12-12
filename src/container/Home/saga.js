import {
  call,
  takeEvery,
  takeLatest,
  all,
  delay,
  fork,
  put
} from 'redux-saga/effects';
import { getListProductSuccess, getListProductFailed } from './actions'
import { GET_LIST_PRODUCT_REQUEST } from './constants';
import { getListProductApi } from './service'
function* getListProductProcess(params) {
  try {
    const respon = yield call(getListProductApi);
    if (respon.status === 200) {
      yield put(getListProductSuccess(respon.data));
      // dispatch action to reducer
    }else {
      yield put(getListProductFailed())
    }
  } catch (err) {
    yield put(getListProductFailed());
  }
}
function* watchGetListProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess)
}
function* watchAll() {
  yield all([watchGetListProduct()]);
  console.log('call saga');
}
export default watchAll;