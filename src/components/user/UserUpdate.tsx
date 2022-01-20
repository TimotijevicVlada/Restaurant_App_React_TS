import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/Context';
import { useFormik } from 'formik';
import { validate } from '../../validation/UserSignupValidation';

const UserUpdate = () => {

    const { setUser, userToUpdate, signupUsers, setSignupUsers } = useContext(ProductsContext);
    const [successMessage, setSuccessMessage] = useState(false);

    //Formik library
    const formik = useFormik({
        initialValues: {
            id: userToUpdate[0]?.id,
            username: userToUpdate[0]?.username,
            email: userToUpdate[0]?.email,
            password: userToUpdate[0]?.password
        },
        validate,
        onSubmit: (values) => {
                const updatedUser = signupUsers.map(item => item.id === values.id ? {
                    ...item,
                    username: values.username,
                    email: values.email,
                    password: values.password
                } : item)
                setSignupUsers(updatedUser); 
                setUser([{
                    id: values.id,
                    username: values.username,
                    email: values.email,
                    password: values.password
                }])
                setSuccessMessage(true);
        },
    });

    return (
        <div className='user_update'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Update your profile</h2>
                <div className='update_content'>
                    <div>
                        <label>Username</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            name='username'
                            type="text"
                            autoFocus
                        />
                    </div>
                    {formik.touched.username && formik.errors.username && (
                        <div className="error">{formik.errors.username}</div>
                    )}
                    <div>
                        <label>Email</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            name='email'
                            type="text"
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                    <div>
                        <label>Password</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            name='password'
                            type="text"
                        />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                    <div className='btn'>
                        <button type='submit'>Update your profile</button>
                    </div>
                    {successMessage && <div className='success_message'>User has been updated!</div>}
                </div>
            </form>
        </div>
    )
};

export default UserUpdate;
