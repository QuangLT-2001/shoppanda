import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  HANDLE_DECREMENT,
  HANDLE_INCREMENT,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED
} from "./contants";
export const getProductDetailRequest = data => {
  return {
    type: GET_PRODUCT_DETAIL_REQUEST,
    data: data
  }
}
export const getProductDetailSuccess = data => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    data: data
  }
}
export const getProductDetailFailed = data => {
  return {
    type: GET_PRODUCT_DETAIL_FAILED,
    data: data
  }
}
export const handleIncrement = () => {
  return {
    type: HANDLE_INCREMENT
  }
}
export const handleDecrement = () => {
  return {
    type: HANDLE_DECREMENT
  }
}
export const getListProductRequest = () => {
  return {
    type: GET_LIST_PRODUCT_REQUEST
  }
}
export const getListProductSuccess = data => {
  return {
    type: GET_LIST_PRODUCT_SUCCESS,
    data: data
  }
}
export const getListProductFailed = data => {
  return {
    type: GET_LIST_PRODUCT_FAILED,
    data: data
  }
}