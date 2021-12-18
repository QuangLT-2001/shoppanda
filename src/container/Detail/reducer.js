import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  HANDLE_INCREMENT,
  HANDLE_DECREMENT,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED
} from './contants';
const initialState = {
  detail: {},
  isLoading: true,
  error: [],
  counter: 1,
  products: []
}
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: state.products.length && state.detail !== {} ? false : true,
        detail: action.data
      }

    case GET_PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "abc"
      };
    case HANDLE_INCREMENT:
      return {
        ...state,
        counter: state.counter < 10 ? state.counter + 1 : state.counter
      }
    case HANDLE_DECREMENT:
      return {
        ...state,
        counter: state.counter > 1 ? state.counter - 1 : 1
      }
    case GET_LIST_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_LIST_PRODUCT_SUCCESS:
      console.log('abc =-------', action.data);
      return {
        ...state,
        isLoading: state.products.length && state.detail !== {} ? false : true,
        products: action.data
      }
    case GET_LIST_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: ["loi"]
      }
    default:
      return state;
  }
}
export default detailReducer;