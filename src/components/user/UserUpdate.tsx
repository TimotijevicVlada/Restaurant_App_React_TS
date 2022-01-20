import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { useFormik } from 'formik';

const UserUpdate = () => {

    const { user, signupUsers, setSignupUsers } = useContext(ProductsContext);

    //Formik library
    const formik = useFormik({
        initialValues: {
            id: user?.id,
            username: user?.username,
            email: user?.email,
            password: user?.password
        },
        //validate,
        onSubmit: (values) => {
            const update = signupUsers.map((item) => item.id === values.id ?
                {
                    ...item,
                    username: values.username,
                    email: values.email,
                    password: values.password
                } : item );
            setSignupUsers(update);
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
                    <div className='btn'>
                        <button type='submit'>Update your profile</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default UserUpdate;
