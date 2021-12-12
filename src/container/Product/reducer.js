import { HANDLE_INIT_PRODUCT } from "./constanst";
const initialState = {
    product: []
}
const prodReducer = (state = initialState, action ) => {
    switch(action.type) {
        case HANDLE_INIT_PRODUCT: {
            return {
                ...state,
                product: action.payload
            }
        }
        default:
            return state;
    }
}
export default prodReducer;