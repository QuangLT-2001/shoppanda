import {
  GET_POST_DETAIL_REQUEST,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_FAILED,
  GET_LIST_POST_REQUEST,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_FAILED
} from "./contants";
const initialState = {
  postDetail: {},
  posts: [],
  isLoading: true,
  error: []
}
const PostDetailReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POST_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: state.posts.length && state.postDetail !== {} ? false : true,
        postDetail: action.data
      };
    case GET_POST_DETAIL_FAILED:
      return state;
    case GET_LIST_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_LIST_POST_SUCCESS:
      return {
        ...state,
        isLoading: state.posts.length && state.postDetail !== {} ? false : true,
        posts: action.data
      };
    case GET_LIST_POST_FAILED:
      return state;
    default:
      return state;
  }
}
export default PostDetailReducer