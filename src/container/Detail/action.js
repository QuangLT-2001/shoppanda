import {
  GET_LIST_PRODUCT_DETAIL_REQUEST,
  GET_LIST_PRODUCT_DETAIL_SUCCESS,
  GET_LIST_PRODUCT_DETAIL_FAILED
} from "./contants";
export const getListProductDetailRequest = data => {
  return {
    type: GET_LIST_PRODUCT_DETAIL_REQUEST,
    data: data
  }
}
export const getListProductDetailSuccess = data => {
  return {
    type: GET_LIST_PRODUCT_DETAIL_SUCCESS,
    data: data
  }
}
export const getListProductDetailFailed = data => {
  return {
    type: GET_LIST_PRODUCT_DETAIL_FAILED,
    data: data
  }
}