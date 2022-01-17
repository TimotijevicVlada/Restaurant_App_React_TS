import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { ProductsContext } from '../../context/Context';
import { validate } from '../../validation/Validation';

const UpdateProduct = () => {

    const { food, setFood, productToUpdate } = useContext(ProductsContext);
    const [successMessage, setSuccessMessage] = useState<boolean>(false);

    //Formik library
    const formik = useFormik({
        initialValues: {
            name: productToUpdate[0].name,
            url: productToUpdate[0].url,
            price: productToUpdate[0].price,
            quantity: 1
        },
        validate,
        onSubmit: (values) => {
            const updatedFood = food.map((item) =>
                item.name === productToUpdate[0].name ? {
                    ...item,
                    name: values.name,
                    url: values.url,
                    price: values.price,
                } : item);
            setFood(updatedFood);
            setSuccessMessage(true);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='update'>
            <h2 className='title'>Update your product</h2>
            <div>
                <label>Name</label>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type="text"
                    name='name'
                    placeholder='Product name' />
            </div>
            {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
            )}
            <div>
                <label>Url</label>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.url}
                    type="text"
                    name='url'
                    placeholder='Product url' />
            </div>
            {formik.touched.url && formik.errors.url && (
                <div className="error">{formik.errors.url}</div>
            )}
            <div>
                <label>Price</label>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    type="text"
                    name='price'
                    placeholder='Product price' />
            </div>
            {formik.touched.price && formik.errors.price && (
                <div className="error">{formik.errors.price}</div>
            )}
            <div className='button'>
                <button className='update_btn' type='submit'>Update</button>
            </div>
            {successMessage && <span className='success_msg update_msg'>Product has been updated!</span>}
        </form>
    )
}

export default UpdateProduct;
