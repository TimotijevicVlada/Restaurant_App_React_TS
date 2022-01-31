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