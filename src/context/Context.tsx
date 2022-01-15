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
    setCart: React.Dispatch<React.SetStateAction<FoodProps[]>>
}

type ProductsContextProviderProps = {
    children: React.ReactNode
}

export const ProductsContext = createContext({} as ProductsProps);

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {

    const [food, setFood] = useState<FoodProps[]>(products);
    const [cart, setCart] = useState<FoodProps[]>([]);

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
        <ProductsContext.Provider value={{ food, cart, setCart }}>
            {children}
        </ProductsContext.Provider>
    )
}