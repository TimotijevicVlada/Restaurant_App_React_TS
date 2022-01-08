import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <i className="fas fa-utensils"></i>
                <span>Restaurant</span>
            </div>
            <ul className='menu'>
                <li>Home</li>
                <li>Cart</li>
                <li>Admin</li>
            </ul>
        </div>
    )
}

export default Navbar;
