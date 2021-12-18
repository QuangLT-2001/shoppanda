import { createSelector } from "reselect";
const selectorPostReducer = state => state.posts;
export const selectIsLoading = createSelector(
  selectorPostReducer,
  state => state.isLoading
)
export const selectPosts = createSelector(
  selectorPostReducer,
  state => state.posts
)
export const selectError = createSelector(
  selectorPostReducer,
  state => state.error
)
export const selectPostDetail = createSelector(
  selectorPostReducer,
  state => state.postDetail
)