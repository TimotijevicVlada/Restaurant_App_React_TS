import { useContext, useState } from 'react';
import { useFormik } from "formik";
import { ProductsContext } from '../../context/Context';
import { FoodProps } from '../../context/Context';

const CreateProduct = () => {

    const { food, setFood } = useContext(ProductsContext);
    const [successMessage, setSuccessMessage] = useState<boolean>(false);


    //Formik library
    const formik = useFormik({
        initialValues: {
            name: "",
            url: "",
            price: 0,
            quantity: 1
        },
        //validate,
        onSubmit: (values: FoodProps) => {
            setFood([
                ...food,
                {
                    name: values.name,
                    url: values.url,
                    price: values.price,
                    quantity: values.quantity
                }
            ])
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
            <div>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.url}
                    type="text"
                    name='url'
                    placeholder='Product url' />
            </div>
            <div>
                <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    type="text"
                    name='price'
                    placeholder='Product price' />
            </div>
            <div className='button'>
                <button type='submit'>Create</button>
            </div>
            {successMessage && <span className='success_msg'>Product has been created!</span>}
        </form>
    )
}

export default CreateProduct;
