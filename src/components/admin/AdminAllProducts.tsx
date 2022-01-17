import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { FoodProps } from '../../context/Context';
import { Link } from 'react-router-dom';


const AdminAllProducts = () => {

    const {food, setProductToUpdate} = useContext(ProductsContext);

    const handleUpdate = (item: FoodProps) => {
        const itemToUpdate = food.filter(elem => elem.name === item.name);
        setProductToUpdate(itemToUpdate);
    }

    return (
        <div className='all_products'>
            <h2 className='title'>All of your products</h2>
            {food.map((item, index) => (
                <div className='product' key={index}>
                    <div className='product_img'>
                        <img src={item.url} alt={item.name} />
                    </div>
                    <span className='product_name'>{item.name}</span>
                    <span className='product_price'>${item.price}</span>
                    <div className='details_section'>
                        <Link to="/admin/update" onClick={() => handleUpdate(item)} className='update'>Update</Link>
                        <button className='details'>Details</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminAllProducts;
