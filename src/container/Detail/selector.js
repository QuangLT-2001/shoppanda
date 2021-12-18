import {createSelector} from 'reselect';
const selectDetailReducer = state => state.detail;
export const selectIsLoading = createSelector(
  selectDetailReducer,
  state => state.isLoading
)
export const selectDetail = createSelector(
  selectDetailReducer,
  state => state.detail
)
export const selectError = createSelector(
  selectDetailReducer,
  state => state.error
)
export const selectCounter = createSelector(
  selectDetailReducer,
  state => state.counter
)
export const selectProducts = createSelector(
  selectDetailReducer,
  state => state.products
)