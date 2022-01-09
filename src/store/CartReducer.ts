
//Ovo da promenim u buducnosti
type CartProps = {
    products: any
    totalPrice: number
    totalQuantity: number
}

type Action = {
    type: any
    payload: any
}

const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
};

export const cartReducer = (state: CartProps = initialState, action: Action) => {
    //Ovde naravno treba da pisemo SWITCH statment
    return state;
}