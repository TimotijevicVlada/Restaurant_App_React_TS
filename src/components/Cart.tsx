import { useContext } from 'react';
import { ProductsContext } from '../context/Context';
import { FoodProps } from '../context/Context';

const Cart = () => {

    const { cart, setCart } = useContext(ProductsContext);

    const handleDelete = (item: FoodProps) => {
        const deleted = cart.filter(elem => elem.name !== item.name);
        setCart(deleted);
    }

    const handleIncrease = (item: FoodProps) => {
        setCart(cart.map(elem => elem.name === item.name ?
            { ...elem, quantity: elem.quantity === 10 ? 10 : elem.quantity + 1 } : elem
        ))
    }

    const handleDecrease = (item: FoodProps) => {
        setCart(cart.map(elem => elem.name === item.name ?
            { ...elem, quantity: elem.quantity === 1 ? 1 : elem.quantity - 1 } : elem
        ))
    }

    return (
        <div className='cart'>
            <div className='cart_items'>
                {cart.map((item, index) => (
                    <div className='cart_item' key={index}>
                        <img className='item_img' src={item.url} alt={item.name} />
                        <span className='item_name'>{item.name}</span>
                        <div className='quantity'>
                            <i onClick={() => handleIncrease(item)} className='fas fa-chevron-up'></i>
                            <span>{item.quantity}</span>
                            <i onClick={() => handleDecrease(item)} className='fas fa-chevron-down'></i>
                        </div>
                        <button onClick={() => handleDelete(item)} className='delete'>Delete</button>
                    </div>
                ))}
            </div>
            <div className='cart_total'>
                Cart Total
            </div>
        </div>
    )
}

export default Cart;
