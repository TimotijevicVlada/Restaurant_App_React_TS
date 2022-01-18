import { createContext, useState, useCallback, useEffect } from "react";
import { products } from "../data";

export type FoodProps = {
    id: number
    name: string
    url: string
    price: number
    quantity: number
    ingredients: string
    description: string
}

type ProductsProps = {
    food: FoodProps[]
    cart: FoodProps[]
    productToUpdate: FoodProps[]
    totalQuantity: number | null
    totalPrice: number
    adminDetails: FoodProps[]
    deleteVisible: boolean
    itemToDelete: number | null
    setItemToDelete: React.Dispatch<React.SetStateAction<number | null>>
    setDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>
    setAdminDetails: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setCart: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setFood: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setProductToUpdate: React.Dispatch<React.SetStateAction<FoodProps[]>>
}

type ProductsContextProviderProps = {
    children: React.ReactNode
}

export const ProductsContext = createContext({} as ProductsProps);

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {

    const [food, setFood] = useState<FoodProps[]>(products);
    const [cart, setCart] = useState<FoodProps[]>([]);
    const [totalQuantity, setTotalQuantity] = useState<number | null>(null);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [productToUpdate, setProductToUpdate] = useState<FoodProps[]>([]);
    const [adminDetails, setAdminDetails] = useState<FoodProps[]>([]);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);

    //Print total quantity
    const printTotalQunatity = useCallback( () => {
        const total = cart.reduce((accumulation, currentValue) => {
            return accumulation + currentValue.quantity;
        }, 0)
        setTotalQuantity(total);
    }, [cart])

    useEffect(() => {
        printTotalQunatity();
    }, [printTotalQunatity])

    //Print total price
    const printTotalPrice = useCallback( () => {
        const total = cart.reduce((accumulation, currentValue) => {
            return accumulation + (currentValue.price * currentValue.quantity);
        }, 0)
        setTotalPrice(total);
    }, [cart])

    useEffect(() => {
        printTotalPrice();
    }, [printTotalPrice])

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

    //Function that get food
    const getStorage = () => {
        if (localStorage.getItem("restaurantFood") === null) {
            localStorage.setItem("restaurantFood", JSON.stringify([]));
        } else {
            const foodStorage = JSON.parse(localStorage.getItem("restaurantFood") || "");
            setFood(foodStorage);
        }
    }
    useEffect(() => {
        getStorage();
    }, [])

    //Function that save food to local storage
    const saveStorage = useCallback(() => {
        localStorage.setItem("restaurantFood", JSON.stringify(food));
    }, [food])

    useEffect(() => {
        saveStorage();
    }, [saveStorage])

    return (
        <ProductsContext.Provider value={{
            food,
            setFood,
            cart,
            setCart,
            totalQuantity,
            totalPrice,
            productToUpdate,
            setProductToUpdate,
            adminDetails,
            setAdminDetails,
            deleteVisible, 
            setDeleteVisible,
            itemToDelete, 
            setItemToDelete
        }}>
            {children}
        </ProductsContext.Provider>
    )
}