import {useContext} from 'react';
import { ProductsContext } from '../context/Context';

const Cart = () => {

    const {cart} = useContext(ProductsContext);

    

    return (
        <div>
            {cart.map((item, index) => (
                <div key={index}>
                    <img src={item.url} alt={item.name} />
                </div>
            ))}
        </div>
    )
}

export default Cart;
