import { createSelector } from "reselect";
const selectPostDetailReducer = state => state.postDetailReducer;
export const selectPostDetail = createSelector(
  selectPostDetailReducer,
  state => state.postDetail
)
export const selectPosts = createSelector(
  selectPostDetailReducer,
  state => state.posts
)
export const selectIsLoading = createSelector(
  selectPostDetailReducer,
  state => state.isLoading
)
export const selectError = createSelector(
  selectPostDetailReducer,
  state => state.error
)