import { useContext } from 'react';
import { ProductsContext } from '../context/Context';
import { FoodProps } from "../context/Context";


const Products = () => {

    const { food, cart, setCart } = useContext(ProductsContext);

    const addToCart = (item: FoodProps) => {
        const exist = cart.find(elem => elem.id === item.id);
        if (exist) {
            setCart(cart.map(elem => elem.id === item.id ?
                { ...exist, quantity: exist.quantity === 10 ? 10 : exist.quantity + 1 } : elem
            ))
        } else {
            setCart([...cart, { ...item }])
        }
    }

    return (
        <div className='products'>
            <div className='products_wrapper'>
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

        </div>
    )
}

export default Products;
