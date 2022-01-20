import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const User = () => {

    const { user } = useContext(ProductsContext);

    return (
        <div className='user'>
            <div className='user_container'>
                <h2>Welcome to your profile!</h2>
                <div className='user_content'>
                    <div className='field'>
                        <label>Username</label>
                        <div>{user?.username}</div>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <div>{user?.email}</div>
                    </div>
                    <div className='field'>
                        <label>Password</label>
                        <div>{user?.password}</div>
                    </div>
                    <div className='field btn_field'>
                        <Link className='button' to="/userupdate">Edit your profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;
