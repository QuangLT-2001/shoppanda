import { combineReducers } from "redux";
import HomeReducer from "./container/Home/reducer";
import ProductReducer from './container/Product/reducer';
import DetailReducer from "./container/Detail/reducer";
import PostReducer from "./container/ListPost/reducer";
import PostDetailReducer from "./container/PostDetail/reducer";
const rootReducer = combineReducers({
    productHome: HomeReducer,
    listProduct: ProductReducer,
    detail: DetailReducer,
    posts: PostReducer,
    postDetailReducer: PostDetailReducer
})
export default rootReducer;