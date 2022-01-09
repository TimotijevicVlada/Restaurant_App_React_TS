import {products} from "../data";

export type ProductsProps = {
    products: {
        name: string
        url: string
        price: number
    }[]
}

type Action = {
    type: string   //Ili mozemo da naznacimo tacan string npr "ADD_TO_CART"
    payload: string
}

//Pocetni stejt koji preuzimam iz fajla data
const initialState = {
    products: products
};

export const productsReducer = (state: ProductsProps = initialState, action: Action) => {
    //Ovde naravno treba da pisemo SWITCH statment
   return state;
}