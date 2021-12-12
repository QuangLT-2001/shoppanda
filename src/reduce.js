import { combineReducers } from "redux";
import productReducer from "./container/Home/reduce";
import prodReducer from './container/Product/reducer'
const rootReducer = combineReducers({
    products: productReducer,
    prod: prodReducer
})
export default rootReducer;