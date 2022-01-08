import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsProps } from '../store/ProductsReducer';

const Products = () => {


    const products = useSelector<ProductsProps, ProductsProps["products"]>(state => state.products);
    //console.log(products);

    return (
        <div className='products'>
            {products.map((item, index) => (
                <img key={index} src={item.url} alt="slika" />
            ))}
        </div>
    )
}

export default Products;
