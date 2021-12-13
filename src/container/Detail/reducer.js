import {
  GET_LIST_PRODUCT_DETAIL_REQUEST,
  GET_LIST_PRODUCT_DETAIL_SUCCESS,
  GET_LIST_PRODUCT_DETAIL_FAILED
} from './contants';
const initialState = {
  detail: {},
  isLoading: true,
  error: []
}
const detailReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LIST_PRODUCT_DETAIL_REQUEST:
      console.log('allobbbbbbbb');
      return state;
    case GET_LIST_PRODUCT_DETAIL_SUCCESS:
      return state;
    case GET_LIST_PRODUCT_DETAIL_FAILED:
      return state;
    default:
      return state;
  }
}
export default detailReducer;