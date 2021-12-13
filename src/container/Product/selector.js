import { createSelector } from "reselect";
import { initialState } from "./reducer";
// select by level reducer
const selectProductReducer = state => {
  console.log('ahd', state.listProduct);
  return state.listProduct
}
// state is state store
// query by each sel reducer
console.log('sel', selectProductReducer);
export const selectProducts = createSelector(
  // truy van từng trường reducer
  // state is productReducer
  selectProductReducer,
  state => state.products
)
export const selectIsLoading = createSelector(
  selectProductReducer,
  state => state.isLoading
)
