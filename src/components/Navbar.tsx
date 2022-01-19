import {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ProductsContext} from "../context/Context";

const Navbar = () => {

    const {totalQuantity, user, setUser} = useContext(ProductsContext);


    return (
        <nav className='navbar'>
            <div className='logo'>
                <i className="fas fa-utensils"></i>
                <span>Pizza Bar</span>
            </div>
            <div className='menu'>
                <Link className='link' to="/">Home</Link>
                <Link className='link about' to="/about">About</Link>
                <Link className='link' to="/favorite">Favorite</Link>
                <Link className='link cart' to="/cart">Cart {totalQuantity > 0 && <span className='total_quantity'>{totalQuantity}</span>} </Link>
                <Link className='link' to="/review"></Link>
            </div>
            <div className='nav_right'>
                {user && <span className='currentUser'>{user.username[0]}</span>}
                {user && <span onClick={() => setUser(null)} className='link'>Logout</span>}
                {!user && <Link to="/login" className='link'>Login</Link>}
                {!user && <Link to="/signup" className='link'>SignUp</Link>}
                <Link to="/admin" className='link'>Admin</Link>
            </div>
        </nav>
    )
}

export default Navbar;
