import {
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_LIST_PRODUCT_FAILED
} from "./constants";
export const initialState = {
    products: [],
    isLoading: true,
    error: []
}
const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PRODUCT_REQUEST: {
            console.log('state', state.isLoading);
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
export default HomeReducer;