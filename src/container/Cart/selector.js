import { createSelector } from "reselect";
const selectCartReducer = state => state.cart;
export const selectIsLoading = createSelector(
  selectCartReducer,
  state => state.isLoading
)
export const selectCart = createSelector(
  selectCartReducer,
  state => state.carts
)
export const selectProducts = createSelector(
  selectCartReducer,
  state => state.products
)