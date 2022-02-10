import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { FoodProps } from '../../types/Types';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, setCart, totalPrice, totalQuantity, user, orderedProducts, setOrderedProducts } = useContext(ProductsContext);

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

    const addProductsToOrdered = () => {
        if (cart.length < 1) {
            alert("You didn't choose products!");
        } else if(user.length < 1) {
            alert("You are not logged in!");
        } else {
            const newProducts = {
                id: Math.floor(Math.random() * 1000000),
                username: user[0].username,
                email: user[0].email,
                products: cart,
                tPrice: totalPrice
            }
            setOrderedProducts([
                ...orderedProducts,
                newProducts
            ])
        }
    }

    return (
        <div className='cart'>
            <div className='cart_items'>
                <h2 className='cart_title'>Cart</h2>
                {cart.length < 1 ? <div className='empty_cart'><i className="fas fa-shopping-cart"></i><div className='empty_cart_text'>Your cart is empty!</div></div>
                    : cart.map((item, index) => (
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
                <div className='total_info'>
                    <h2 className='total_title'>Summary</h2>
                    <span onClick={() => setCart([])} className='delete_all'>DELETE ALL!</span>
                    <div className='total_products'>Total products: <span>{totalQuantity}</span></div>
                    <div className='total_price'>Total price: <span>${totalPrice}</span></div>
                    {cart.length > 0 && user.length > 0 && <Link onClick={addProductsToOrdered} to="/order" className='order_btn'>ORDER</Link>}
                </div>
            </div>
        </div>
    )
}

export default Cart;
