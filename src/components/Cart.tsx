import { useContext } from 'react';
import { ProductsContext } from '../context/Context';
import { FoodProps } from '../context/Context';

const Cart = () => {

    const { cart, setCart, totalPrice, totalQuantity } = useContext(ProductsContext);

    const handleDelete = (item: FoodProps) => {
        const deleted = cart.filter(elem => elem.id !== item.id);
        setCart(deleted);
    }

    const handleIncrease = (item: FoodProps) => {
        setCart(cart.map(elem => elem.id === item.id ?
            { ...elem, quantity: elem.quantity === 10 ? 10 : elem.quantity + 1 } : elem
        ))
    }

    const handleDecrease = (item: FoodProps) => {
        setCart(cart.map(elem => elem.id === item.id ?
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
                        <span className='item_price'>${item.price}</span>
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
                <h2 className='total_title'>Summary</h2>
                <div className='total_info'>
                    <span onClick={() => setCart([])} className='delete_all'>DELETE ALL!</span>
                    <div className='total_products'>Total products: <span>{totalQuantity}</span></div>
                    <div className='total_price'>Total price: <span>${totalPrice}</span></div> 
                    <button onClick={() => alert("Thank's for buying our food!")} className='order_btn'>ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
