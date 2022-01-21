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

export type UserProps = {
    id: number
    username: string 
    email: string 
    password: string 
}

export type MessagesProps = {
    id: number
    email: string
    title: string
    address: string
    phone: string | number
    message: string
    date: string
}

type ProductsProps = {
    food: FoodProps[]
    cart: FoodProps[]
    productToUpdate: FoodProps[]
    totalQuantity: number
    totalPrice: number
    adminDetails: FoodProps[]
    deleteVisible: boolean
    itemToDelete: number | null
    signupUsers: UserProps[]
    user: UserProps[]
    userToUpdate: UserProps[]
    messages: MessagesProps[]
    setItemToDelete: React.Dispatch<React.SetStateAction<number | null>>
    setDeleteVisible: React.Dispatch<React.SetStateAction<boolean>>
    setAdminDetails: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setCart: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setFood: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setProductToUpdate: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setSignupUsers: React.Dispatch<React.SetStateAction<UserProps[]>>
    setUser: React.Dispatch<React.SetStateAction<UserProps[]>>
    setUserToUpdate: React.Dispatch<React.SetStateAction<UserProps[]>>
    setMessages: React.Dispatch<React.SetStateAction<MessagesProps[]>>
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
    const [productToUpdate, setProductToUpdate] = useState<FoodProps[]>([]);
    const [adminDetails, setAdminDetails] = useState<FoodProps[]>([]);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [signupUsers, setSignupUsers] = useState<UserProps[]>(users);
    const [user, setUser] = useState<UserProps[]>([]);
    const [userToUpdate, setUserToUpdate] = useState<UserProps[]>([]);
    const [messages, setMessages] = useState<MessagesProps[]>([]);

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
                signupUsers: [],
                user: [],
                userToUpdate: [],
                productToUpdate: [],
                adminDetails: [],
                messages: []
            }));
        } else {
            const pizzaStorage = JSON.parse(localStorage.getItem("PizzaBar") || "");
            setFood(pizzaStorage.food);
            setCart(pizzaStorage.cart);
            setSignupUsers(pizzaStorage.users);
            setUser(pizzaStorage.user);
            setUserToUpdate(pizzaStorage.userToUpdate);
            setProductToUpdate(pizzaStorage.productToUpdate);
            setAdminDetails(pizzaStorage.adminDetails);
            setMessages(pizzaStorage.messages);
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
            users: signupUsers,
            user: user,
            userToUpdate: userToUpdate,
            productToUpdate: productToUpdate,
            adminDetails: adminDetails,
            messages: messages
        }));
    }, [cart, food, signupUsers, user, userToUpdate, productToUpdate, adminDetails, messages])

    useEffect(() => {
        savePizzaStorage();
    }, [savePizzaStorage])

    return (
        <ProductsContext.Provider value={{
            food, setFood,
            cart, setCart,
            totalQuantity, totalPrice,
            productToUpdate, setProductToUpdate,
            adminDetails, setAdminDetails,
            deleteVisible, setDeleteVisible,
            itemToDelete, setItemToDelete,
            signupUsers, setSignupUsers,
            user, setUser,
            userToUpdate, setUserToUpdate,
            messages, setMessages
        }}>
            {children}
        </ProductsContext.Provider>
    )
}