import { useContext, useEffect, useCallback } from 'react';
import { ProductsContext } from '../../context/Context';

const Order = () => {

    const { user, cart, totalPrice, orderedProducts, setOrderedProducts } = useContext(ProductsContext);

    const addProductsToOrdered = useCallback( () => {
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
    }, [cart, orderedProducts, setOrderedProducts, totalPrice, user])

    useEffect(() => {
        addProductsToOrdered();
    }, [addProductsToOrdered])

    return (
        <div className='order'>
            <div className='order_wrapper'>
                {
                    user.length < 1 ? <h2 className='order_no_logged'>You are not logged!</h2> :
                        <div className='order_info'>
                            <h2 className='order_title'>Thank you for buying in our shop!</h2>
                            <div className='client_info'>
                                <div>
                                    <span>Username</span>
                                    <span>{user[0].username}</span>
                                </div>
                                <div>
                                    <span>Email</span>
                                    <span>{user[0].email}</span>
                                </div>
                                <div>
                                    <span>Phone</span>
                                    <span>---</span>
                                </div>
                                <div>
                                    <span>Address</span>
                                    <span>---</span>
                                </div>
                            </div>
                            <div className='ordered_products'>
                                {cart.map(item => (
                                    <div key={item.id}>
                                        <img src={item.url} alt={item.name} />
                                        <span>{item.name}</span>
                                        <span>qty: {item.quantity}</span>
                                    </div>
                                ))}
                                <div className='ordered_total_price'>
                                    <span>Total price</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
};

export default Order;
