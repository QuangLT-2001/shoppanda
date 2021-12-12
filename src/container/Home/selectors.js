import { createSelector } from "reselect";
import { initialState } from "./reduce";
// select by level reducer
const selectProductReducer = state => state.products || initialState;
// state is state store
// query by each sel reducer
export const selectListProduct = createSelector(
  // truy van từng trường reducer
  // state is productReducer
  selectProductReducer,
  state => state.products
)
export const selectIsLoading = createSelector(
  selectProductReducer,
  state => state.isLoading
)
export const selectListInnerProduct = createSelector(
  selectProductReducer,
  state => state.listInnerProduct
)
export const selectProductTabs = createSelector(
  selectProductReducer,
  state => state.productTabs

)