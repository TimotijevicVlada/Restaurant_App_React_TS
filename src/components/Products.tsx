import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsProps } from '../store/ProductsReducer';

const Products = () => {


    const products = useSelector<ProductsProps, ProductsProps["products"]>(state => state.products);
    console.log(products);

    return (
        <div className='products'>
            {products.map((item, index) => (
                <div key={index} className='food'>
                    <img  src={item.url} alt="slika" className='food_img'/>
                    <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                    </div>
                    <h3 className='food_name'>{item.name}</h3>
                    <div className='event'>
                        <button>Add to cart</button>
                        <span className='food_price'>${item.price}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
