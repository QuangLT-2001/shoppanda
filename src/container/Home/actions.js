import {
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_LIST_PRODUCT_FAILED
} from "./constants";
export const getListProduct = () => {
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
        data
    }
}