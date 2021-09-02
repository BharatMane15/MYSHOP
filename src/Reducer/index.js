import { combineReducers } from "redux";
import { shoppingDetails } from "./ShoppingDetails";
import { selectedProductReducer } from "./ShoppingDetails";
export const rootReducer=combineReducers({
    shoppingDetails,
    product: selectedProductReducer,
})