import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/Context';
import { useFormik } from 'formik';
import { validate } from '../../validation/MessagesValidation';

const Messages = () => {

    const { messages, setMessages, user } = useContext(ProductsContext);
    const [errorMessage, setErrorMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    //Formik library
    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * 1000000),
            email: user[0]?.email,
            title: "",
            address: "",
            phone: "",
            message: "",
            date: new Date().toDateString()
        },
        validate,
        onSubmit: (values) => {
            if (user.length > 0) {
                setMessages([
                    ...messages,
                    {
                        id: values.id,
                        email: values.email,
                        title: values.title,
                        address: values.address,
                        phone: values.phone,
                        message: values.message,
                        date: values.date
                    }
                ])
                setSuccessMessage(true);
                setErrorMessage(false);
            } else {
                setErrorMessage(true);
                setSuccessMessage(false);
            }
        },
    });


    return (
        <div className="messages">
            <form onSubmit={formik.handleSubmit}>
                <h2>Contact us</h2>
                <div className='message_content'>
                    <div className='inputs'>
                        <label>Title</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            name='title'
                            type="text"
                            placeholder='Enter your title'
                        />
                    </div>
                    {formik.touched.title && formik.errors.title && (
                        <div className="error">{formik.errors.title}</div>
                    )}
                    <div className='inputs'>
                        <label>Address</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            name='address'
                            type="text"
                            placeholder='Enter your address'
                        />
                    </div>
                    {formik.touched.address && formik.errors.address && (
                        <div className="error">{formik.errors.address}</div>
                    )}
                    <div className='inputs'>
                        <label>Phone</label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            name='phone'
                            type="text"
                            placeholder='Enter your phone number'
                        />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                        <div className="error">{formik.errors.phone}</div>
                    )}
                    <div className='inputs'>
                        <label>Your message</label>
                        <textarea
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            name='message'
                            rows={5}
                            placeholder='Enter your message...'
                        />
                    </div>
                    {formik.touched.message && formik.errors.message && (
                        <div className="error">{formik.errors.message}</div>
                    )}
                    <div className='btn'>
                        <button type='submit'>Send</button>
                    </div>
                    {errorMessage && <div className='error_message'>ERROR: You must be LOGED IN!</div>}
                    {successMessage && <div className='success_message'>Message has been sent!</div>}
                </div>
            </form>
        </div>
    );
};

export default Messages;
