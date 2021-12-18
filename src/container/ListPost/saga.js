import {
  call,
  takeLatest,
  takeEvery,
  put,
  fork,
  all,
  delay
} from "redux-saga/effects";
import {
  GET_LIST_POST_REQUEST,
  GET_POST_ID_REQUEST
} from "./constants";
import {
  getListPostSuccess,
  getListPostFailed,
  getPostIdSuccess,
  getPostIdFailed
} from "./actions";
import {
  getListPostApi,
  getPostIdApi
} from "./service";
function* getListPostProcess(params) {
  try {
    const respon = yield call(getListPostApi);
    if (respon.status === 200) {
      yield put(getListPostSuccess(respon.data))
    } else {
      yield put(getListPostFailed())
    }

  } catch (err) {
    yield put(getListPostFailed())
  }
}
function* watchListPost() {
  yield takeLatest(GET_LIST_POST_REQUEST, getListPostProcess);
}
function* watchAll() {
  yield all([
    watchListPost()
  ])
}

export default watchAll;