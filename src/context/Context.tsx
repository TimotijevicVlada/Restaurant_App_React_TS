import React, { createContext, useState, useCallback, useEffect } from "react";
import { products } from "../data/data";
import { users } from "../data/usersData";
import { reviewMessages } from "../data/review";
import { FoodProps } from "../types/Types";
import { UserProps } from "../types/Types";
import { MessagesProps } from "../types/Types";
import { Review } from "../types/Types";
import { OrderProps } from "../types/Types";
import {ProductsProps} from "../types/Types";
import {ProductsContextProviderProps} from "../types/Types";

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
    const [favorite, setFavorite] = useState<FoodProps[]>([]);
    const [review, setReview] = useState<Review[]>(reviewMessages.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1));
    const [foodDetails, setFoodDetails] = useState({} as FoodProps);
    const [orderedProducts, setOrderedProducts] = useState<OrderProps[]>([]);

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
                food: [], favorite: [], cart: [], signupUsers: [], user: [],
                userToUpdate: [], productToUpdate: [], adminDetails: [], messages: [],
                review: [], foodDetails: {}, orderedProducts: []
            }));
        } else {
            const pizzaStorage = JSON.parse(localStorage.getItem("PizzaBar") || "");
            setFood(pizzaStorage.food);
            setFavorite(pizzaStorage.favorite);
            setCart(pizzaStorage.cart);
            setSignupUsers(pizzaStorage.users);
            setUser(pizzaStorage.user);
            setUserToUpdate(pizzaStorage.userToUpdate);
            setProductToUpdate(pizzaStorage.productToUpdate);
            setAdminDetails(pizzaStorage.adminDetails);
            setMessages(pizzaStorage.messages);
            setReview(pizzaStorage.review);
            setFoodDetails(pizzaStorage.foodDetails);
            setOrderedProducts(pizzaStorage.orderedProducts);
        }
    }
    useEffect(() => {
        getPizzaStorage();
    }, [])

    //Function that save cart food to local storage
    const savePizzaStorage = useCallback(() => {
        localStorage.setItem("PizzaBar", JSON.stringify({
            food: food,
            favorite: favorite,
            cart: cart,
            users: signupUsers,
            user: user,
            userToUpdate: userToUpdate,
            productToUpdate: productToUpdate,
            adminDetails: adminDetails,
            messages: messages,
            review: review.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1),
            foodDetails: foodDetails,
            orderedProducts: orderedProducts
        }));
    }, [ orderedProducts, favorite, cart, food, signupUsers, user, userToUpdate, productToUpdate, adminDetails, messages, review, foodDetails])

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
            messages, setMessages,
            favorite, setFavorite,
            review, setReview,
            foodDetails, setFoodDetails,
            orderedProducts, setOrderedProducts
        }}>
            {children}
        </ProductsContext.Provider>
    )
}