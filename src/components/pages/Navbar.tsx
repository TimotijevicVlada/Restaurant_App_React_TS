import {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ProductsContext} from "../../context/Context";

const Navbar = () => {

    const {totalQuantity, user, setUser, favorite} = useContext(ProductsContext);

    return (
        <nav className='navbar'>
            <div className='logo'>
                <i className="fas fa-utensils"></i>
                <span>Pizza Bar</span>
            </div>
            <div className='menu'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/messages" >MessageUs</Link>
                <Link className='link' to="/review" >Review</Link>
                <Link className='link fav_menu' to="/favorite">Favorite {favorite.length > 0 && <span className='favorite_quantity'>{favorite.length}</span>}</Link>
                <Link className='link cart_menu' to="/cart">Cart {totalQuantity > 0 && <span className='total_quantity'>{totalQuantity}</span>} </Link>
                <Link className='link' to="/review"></Link>
            </div>
            <div className='nav_right'>
                {user.length > 0 && <Link to="/user" className='currentUser'>{user[0].username[0]}</Link>}
                {user.length > 0 && <Link to="/" onClick={() => setUser([])} className='link'>Logout</Link>}
                {user.length < 1 && <Link to="/login" className='link'>Login</Link>}
                {user.length < 1 && <Link to="/signup" className='link'>SignUp</Link>}
                <Link to="/admin" className='link'>Admin</Link>
            </div>
        </nav>
    )
}

export default Navbar;
