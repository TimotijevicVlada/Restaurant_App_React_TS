import { createContext, useState, useCallback, useEffect } from "react";
import { products } from "../data/data";
import { users } from "../data/usersData";

export type FoodProps = {
    id: number
    name: string
    url: string
    price: number
    quantity: number
    ingredients: string
    description: string
}

export type SignupProps = {
    username: string
    email: string
    password: string
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
    signupUsers: SignupProps[]
    setItemToDelete: React.Dispatch<React.SetStateAction<number | null>>
    setDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>
    setAdminDetails: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setCart: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setFood: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setProductToUpdate: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setSignupUsers: React.Dispatch<React.SetStateAction<SignupProps[]>>
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
    const [signupUsers, setSignupUsers] = useState<SignupProps[]>(users);

    //Print total quantity
    const printTotalQunatity = useCallback(() => {
        const total = cart.reduce((accumulation, currentValue) => {
            return accumulation + currentValue.quantity;
        }, 0)
        setTotalQuantity(total);
    }, [cart])

    useEffect(() => {
        printTotalQunatity();
    }, [printTotalQunatity])

    //Print total price
    const printTotalPrice = useCallback(() => {
        const total = cart.reduce((accumulation, currentValue) => {
            return accumulation + (currentValue.price * currentValue.quantity);
        }, 0)
        setTotalPrice(total);
    }, [cart])

    useEffect(() => {
        printTotalPrice();
    }, [printTotalPrice])

    //Function that get cart food
    const getPizzaStorage = () => {
        if (localStorage.getItem("PizzaBar") === null) {
            localStorage.setItem("PizzaBar", JSON.stringify({
                food: [],
                cart: [],
                signupUsers: []
            }));
        } else {
            const pizzaStorage = JSON.parse(localStorage.getItem("PizzaBar") || "");
            setFood(pizzaStorage.food);
            setCart(pizzaStorage.cart);
            setSignupUsers(pizzaStorage.users);
        }
    }
    useEffect(() => {
        getPizzaStorage();
    }, [])

    //Function that save cart food to local storage
    const savePizzaStorage = useCallback(() => {
        localStorage.setItem("PizzaBar", JSON.stringify({
            food: food,
            cart: cart,
            users: signupUsers
        }));
    }, [cart, food, signupUsers])

    useEffect(() => {
        savePizzaStorage();
    }, [savePizzaStorage])

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
            setItemToDelete,
            signupUsers,
            setSignupUsers
        }}>
            {children}
        </ProductsContext.Provider>
    )
}