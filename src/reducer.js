import { combineReducers } from "redux";
import HomeReducer from "./container/Home/reducer";
import ProductReducer from './container/Product/reducer';
import DetailReducer from "./container/Detail/reducer";
const rootReducer = combineReducers({
    productHome: HomeReducer,
    listProduct: ProductReducer,
    detail: DetailReducer
})
export default rootReducer;