import { createContext, useState, useCallback, useEffect } from "react";
import { products } from "../data";

export type FoodProps = {
    name: string
    url: string
    price: number
    quantity: number
}

type ProductsProps = {
    food: FoodProps[]
    cart: FoodProps[]
    totalQuantity: number
    totalPrice: number
    setCart: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setFood: React.Dispatch<React.SetStateAction<FoodProps[]>>
}

type ProductsContextProviderProps = {
    children: React.ReactNode
}

export const ProductsContext = createContext({} as ProductsProps);

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {

    const [food, setFood] = useState<FoodProps[]>(products);
    const [cart, setCart] = useState<FoodProps[]>([]);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    //Print total quantity
    const printTotalQunatity = () => {
        const total = cart.reduce((accumulation, currentValue) => {
            return accumulation + currentValue.quantity;
        }, 0)
        setTotalQuantity(total);
    }

    useEffect(() => {
        printTotalQunatity();
    }, [cart])

    //Print total price
    const printTotalPrice = () => {
        const total = cart.reduce((accumulation, currentValue) => {
            return accumulation + (currentValue.price * currentValue.quantity);
        }, 0)
        setTotalPrice(total);
    }

    useEffect(() => {
        printTotalPrice();
    }, [cart])

    //Function that get cart food
    const getFoodStorage = () => {
        if (localStorage.getItem("restaurant") === null) {
            localStorage.setItem("restaurant", JSON.stringify([]));
        } else {
            const cartStorage = JSON.parse(localStorage.getItem("restaurant") || "");
            setCart(cartStorage);
        }
    }
    useEffect(() => {
        getFoodStorage();
    }, [])

    //Function that save cart food to local storage
    const saveFoodStorage = useCallback(() => {
        localStorage.setItem("restaurant", JSON.stringify(cart));
    }, [cart])

    useEffect(() => {
        saveFoodStorage();
    }, [saveFoodStorage])

    return (
        <ProductsContext.Provider value={{ food, setFood, cart, setCart, totalQuantity, totalPrice }}>
            {children}
        </ProductsContext.Provider>
    )
}