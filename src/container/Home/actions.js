import {
    HANDLE_INIT_PRODUCT_TABS,
    HANDLE_INIT_PRODUCT_INNER,
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_LIST_PRODUCT_FAILED
} from "./constants";
export const handleInitProductTabs = payload => {
    return {
        payload: payload,
        type: HANDLE_INIT_PRODUCT_TABS
    }
}
export const handleInitProductInner = payload => {
    return {
        payload: payload,
        type: HANDLE_INIT_PRODUCT_INNER
    }
}
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