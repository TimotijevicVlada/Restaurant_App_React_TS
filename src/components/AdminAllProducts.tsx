import { useContext } from 'react';
import { ProductsContext } from '../context/Context';


const AdminAllProducts = () => {

    const {food} = useContext(ProductsContext);


    return (
        <div className='all_products'>
            {food.map((item, index) => (
                <div className='product' key={index}>
                    <div className='product_img'>
                        <img src={item.url} alt={item.name} />
                    </div>
                    <span className='product_name'>{item.name}</span>
                    <span className='product_price'>${item.price}</span>
                    <button className='details'>Details</button>
                </div>
            ))}
        </div>
    )
}

export default AdminAllProducts;
