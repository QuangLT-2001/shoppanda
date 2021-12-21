import { createSelector } from "reselect";
const selectHeaderReducer = state => state.header;
export const selectProducts = createSelector(
  selectHeaderReducer,
  state => state.products
)
export const selectCount = createSelector(
  selectHeaderReducer,
  state => state.count
)