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

export type Review = {
    id: number
    name: string
    url: string
    message: string
    date: string
}

export type OrderProps = {
    username: string
    email: string
    products: FoodProps[]
}

export type ProductsProps = {
    food: FoodProps[]
    cart: FoodProps[]
    favorite: FoodProps[]
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
    review: Review[]
    foodDetails: FoodProps
    orderedProducts: OrderProps[]
    setReview: React.Dispatch<React.SetStateAction<Review[]>>
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
    setFavorite: React.Dispatch<React.SetStateAction<FoodProps[]>>
    setFoodDetails: React.Dispatch<React.SetStateAction<FoodProps>>
    setOrderedProducts: React.Dispatch<React.SetStateAction<OrderProps[]>>
}

export type ProductsContextProviderProps = {
    children: React.ReactNode
}