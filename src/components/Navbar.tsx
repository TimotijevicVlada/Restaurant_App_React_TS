import {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ProductsContext} from "../context/Context";

const Navbar = () => {

    const {totalQuantity} = useContext(ProductsContext);


    return (
        <div className='navbar'>
            <div className='logo'>
                <i className="fas fa-utensils"></i>
                <span>Restaurant</span>
            </div>
            <div className='menu'>
                <Link className='link' to="/">Home</Link>
                <Link className='link cart' to="/cart">Cart {totalQuantity > 0 && <span className='total_quantity'>{totalQuantity}</span>} </Link>
                <Link className='link' to="/admin">Admin</Link>
            </div>
        </div>
    )
}

export default Navbar;
