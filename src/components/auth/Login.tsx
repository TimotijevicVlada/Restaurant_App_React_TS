import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { validate } from '../../validation/UserLoginValidation';
import { ProductsContext } from '../../context/Context';

const Login = () => {

    const { setUser, signupUsers } = useContext(ProductsContext);

    const [errorMessage, setErrorMessage] = useState(false);
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
            const check = signupUsers.find(item => item.email === values.email && item.password === values.password);
            if (check) {
                setUser({
                    username: check.username,
                    email: check.email,
                    password: check.password
                })
                setSuccessMesage(true);
                setErrorMessage(false);
                setTimeout(() => {
                    window.location.replace("/");
                }, 1500)
            } else {
                setErrorMessage(true);
                setSuccessMesage(false);
            }
        },
    });

    return (
        <div className='login'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Login</h2>
                <div className='login_content'>
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
                    <button type='submit'>Login</button>
                    {errorMessage && <span className='error_message'>Wrong credentials!</span>}
                    {successMesage && <span className='success_message'>User has been logged!</span>}
                </div>
            </form>
        </div>
    )
}

export default Login;
