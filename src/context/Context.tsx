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
    totalQuantity: number
    totalPrice: number
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
        let total = 0;
        cart.map(item => {
            return (total += item.quantity)
        })
        setTotalQuantity(total);
    }

    useEffect(() => {
        printTotalQunatity();
    }, [cart])

    //Print total price
    const printTotalPrice = () => {
        let total = 0;
        cart.map(item => {
            return (total += item.quantity * item.price);
        })
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
        <ProductsContext.Provider value={{ food, cart, setCart, totalQuantity, totalPrice }}>
            {children}
        </ProductsContext.Provider>
    )
}