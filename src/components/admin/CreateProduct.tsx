import { useContext, useState } from 'react';
import { useFormik } from "formik";
import { ProductsContext } from '../../context/Context';
import { validate } from '../../validation/Validation';

const CreateProduct = () => {

    const { food, setFood } = useContext(ProductsContext);
    const [successMessage, setSuccessMessage] = useState<boolean>(false);


    //Formik library
    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * 1000000),
            name: "",
            url: "",
            price: 0,
            ingredients: "",
            description: "",
            quantity: 1
        },
        validate,
        onSubmit: (values) => {
            setFood([
                ...food,
                {
                    id: values.id,
                    name: values.name,
                    url: values.url,
                    price: values.price,
                    ingredients: values.ingredients,
                    description: values.description,
                    quantity: values.quantity
                }
            ].reverse())
            setSuccessMessage(true);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='create'>
            <h2 className='title'>Create your new product</h2>
            <div>
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
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ingredients}
                    type="text"
                    name='ingredients'
                    placeholder='Product ingredients' />
            </div>
            {formik.touched.ingredients && formik.errors.ingredients && (
                <div className="error">{formik.errors.ingredients}</div>
            )}
            <div>
                <textarea
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    placeholder='Product description'
                    name="description"
                    rows={3} />
            </div>
            {formik.touched.description && formik.errors.description && (
                <div className="error">{formik.errors.description}</div>
            )}
            <div>
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
                <button type='submit'>Create</button>
            </div>
            {successMessage && <span className='success_msg'>Product has been created!</span>}
        </form>
    )
}

export default CreateProduct;
