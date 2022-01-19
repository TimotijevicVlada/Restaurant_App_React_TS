import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';

const Users = () => {

    const { signupUsers } = useContext(ProductsContext);


    return (
        <div className='users'>
            <h2>Users</h2>
            <table>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {signupUsers.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Users
