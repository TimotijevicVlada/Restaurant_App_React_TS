import React from 'react'
import { Link } from "react-router-dom";

const AdminAside = () => {
    return (
        <div className='aside_menu'>
            <Link to="/admin" className='link'>All products</Link>
            <Link to="/admin/create" className='link'>Create new</Link>
        </div>
    )
}

export default AdminAside;
