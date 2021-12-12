import { HANDLE_INIT_PRODUCT } from "./constanst";
export const handleInitProduct = payload => {
    return {
        type: HANDLE_INIT_PRODUCT,
        payload: payload
    }
}