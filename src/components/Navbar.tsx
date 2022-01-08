import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <i className="fas fa-utensils"></i>
                <span>Restaurant</span>
            </div>
            <div className='menu'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/cart">Cart</Link>
                <Link className='link' to="/admin">Admin</Link>
            </div>
        </div>
    )
}

export default Navbar;
