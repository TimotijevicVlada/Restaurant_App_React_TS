import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';

const OrderedProducts = () => {

    const { orderedProducts } = useContext(ProductsContext);

    return (
        <div className='ordered_products'>
            <h2>Ordered products</h2>
            {orderedProducts.map(item => (
                <div key={item.id} className='ordered_item'>
                    <div className='ordered_row'>
                        <span className='row_item'>Name</span>
                        <span className='row_item'>{item.username}</span>
                    </div>
                    <div className='ordered_row'>
                        <span className='row_item'>Email</span>
                        <span className='row_item'>{item.email}</span>
                    </div>
                    <div className='ordered_row'>
                        <span className='row_item'>Products</span>
                        <span className='row_item'>
                            {item.products.map(product => (
                                <span key={product.id}>{product.name}({product.quantity})</span>
                            ))}
                        </span>
                    </div>
                    <div className='ordered_row'>
                        <span className='row_item'>Total price</span>
                        <span className='row_item'>${item.tPrice}</span>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default OrderedProducts;
