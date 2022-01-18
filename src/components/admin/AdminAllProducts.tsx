import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { FoodProps } from '../../context/Context';
import { Link } from 'react-router-dom';
import DeleteWindow from './DeleteWindow';


const AdminAllProducts = () => {

    const { food, deleteVisible, setDeleteVisible, setItemToDelete, setAdminDetails, setProductToUpdate } = useContext(ProductsContext);
    

    const handleUpdate = (item: FoodProps) => {
        const itemToUpdate = food.filter(elem => elem.id === item.id);
        setProductToUpdate(itemToUpdate);
    }

    const handleDetails = (item: FoodProps) => {
        const seeDetails = food.filter(elem => elem.id === item.id);
        setAdminDetails(seeDetails);
    }

    const handleDelete = (id: number) => {
        setItemToDelete(id);
        setDeleteVisible(true);
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
                        <Link to="/admin/details" onClick={() => handleDetails(item)} className='details'>Details</Link>
                        <button onClick={() => handleDelete(item.id)} className='delete'>Delete</button>
                    </div>
                </div>
            ))}
            {deleteVisible && <DeleteWindow />}
        </div>
    )
}

export default AdminAllProducts;
