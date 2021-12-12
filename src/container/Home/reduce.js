import {
    HANDLE_INIT_PRODUCT_TABS,
    HANDLE_INIT_PRODUCT_INNER,
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_LIST_PRODUCT_FAILED
} from "./constants";
export const initialState = {
    productTabs: [],
    listInnerProduct: [],
    products: [],
    isLoading: true,
    error: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_INIT_PRODUCT_INNER: {
            return {
                ...state,
                listInnerProduct: action.payload
            }
        }
        case HANDLE_INIT_PRODUCT_TABS: {
            return {
                ...state,
                productTabs: action.payload
            }
        }
        case GET_LIST_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_LIST_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: action.data,
                isLoading: false,
            }
        }
        case GET_LIST_PRODUCT_FAILED: {
            return state
        }
        default:
            return state;
    }
}
export default productReducer;