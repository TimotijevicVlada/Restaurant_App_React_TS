import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { ProductsContext } from '../../context/Context';
import { validate } from '../../validation/UserSignupValidation';

const Signup = () => {

    const { signupUsers, setSignupUsers } = useContext(ProductsContext);
    const [existUserMessage, setExistUserMessage] = useState(false);
    const [successMesage, setSuccessMesage] = useState(false);
    const [passVisible, setPassVisible] = useState(false);

    //Formik library
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validate,
        onSubmit: (values) => {
            const check = signupUsers.find(item => item.username === values.username || item.email === values.email);
            if (check) {
                setExistUserMessage(true);
            } else {
                setSignupUsers([...signupUsers, {
                    username: values.username,
                    email: values.email,
                    password: values.password
                }].reverse())
                setSuccessMesage(true);
            }
        },
    });

    return (
        <div className='signup'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Signup</h2>
                <div className='signup_content'>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        name="username"
                        type="text"
                        placeholder='Username' />
                    {formik.touched.username && formik.errors.username && (
                        <div className="error">{formik.errors.username}</div>
                    )}
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                        type="text"
                        placeholder='Email' />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                    <div className='pass'>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            name="password"
                            type={passVisible ? "text" : "password"}
                            placeholder='Password' />
                            <i onClick={() => setPassVisible(!passVisible)} className={passVisible ? "far fa-eye-slash" : 'far fa-eye'}></i>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                    <button type='submit'>Signup</button>
                    {existUserMessage && <span className='error_message'>ERROR: This user already exist!</span>}
                    {successMesage && <span className='success_message'>User has been created!</span>}
                </div>
            </form>
        </div>
    )
}

export default Signup;
