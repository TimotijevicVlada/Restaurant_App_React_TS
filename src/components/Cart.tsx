import { useContext } from 'react';
import { ProductsContext } from '../context/Context';

const Cart = () => {

    const { cart } = useContext(ProductsContext);



    return (
        <div className='cart'>
            <div className='cart_items'>
                {cart.map((item, index) => (
                    <div className='cart_item' key={index}>
                        <img className='item_img' src={item.url} alt={item.name} />
                        <span className='item_name'>{item.name}</span>
                        <div className='quantity'>
                            <i className='fas fa-chevron-up'></i>
                            <span>{item.quantity}</span>
                            <i className='fas fa-chevron-down'></i>
                        </div>
                        <button className='delete'>Delete</button>
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
