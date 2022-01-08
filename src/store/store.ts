import { createStore } from "redux";
import { productsReducer } from "./ProductsReducer";

export const store = createStore(productsReducer);