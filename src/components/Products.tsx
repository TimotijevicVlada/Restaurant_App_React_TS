import { useContext } from 'react';
import { ProductsContext } from '../context/Context';
import {FoodProps} from "../context/Context";


const Products = () => {

    const { food, cart, setCart } = useContext(ProductsContext);

    const addToCart = (item: FoodProps) => {
        setCart([ ...cart, { ...item }])
    }


    return (
        <div className='products'>
            {food.map((item, index) => (
                <div key={index} className='food'>
                    <img src={item.url} alt="slika" className='food_img' />
                    <div className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-alt'></i>
                    </div>
                    <h3 className='food_name'>{item.name}</h3>
                    <div className='event'>
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                        <span className='food_price'>${item.price}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
