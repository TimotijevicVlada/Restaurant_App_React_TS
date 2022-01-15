import { createContext, useState } from "react";
import { products } from "../data";

type ProductsProps = {
    food: {
        name: string
        url: string
        price: number
    }[]
}

type ProductsContextProviderProps = {
    children: React.ReactNode
}

export const ProductsContext = createContext({} as ProductsProps);

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {

    const [food, setFood] = useState(products);

    return (
        <ProductsContext.Provider value={{ food }}>
            {children}
        </ProductsContext.Provider>
    )
}