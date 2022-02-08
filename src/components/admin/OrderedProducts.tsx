import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';

const OrderedProducts = () => {

    const { cart, user } = useContext(ProductsContext);

    console.log(cart);

    return (
        <div className='ordered_products'>
            ORDERED
        </div>
    )
};

export default OrderedProducts;
