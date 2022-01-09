import { createStore, combineReducers } from "redux";
import { productsReducer } from "./ProductsReducer";
import { cartReducer } from "./CartReducer";

// const rootReducers = combineReducers({
//     pro: productsReducer,
//     cart: cartReducer
// })


export const store = createStore(productsReducer);