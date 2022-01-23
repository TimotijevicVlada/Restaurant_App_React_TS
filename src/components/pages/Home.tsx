import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { FoodProps } from "../../context/Context";


const Products = () => {

    const { food, cart, setCart, favorite, setFavorite } = useContext(ProductsContext);

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

    const addToFav = (item: FoodProps) => {
        const exist = favorite.find(elem => elem.id === item.id);
        if (exist) {
            alert("This product is already in your Favorite!");
        } else {
            setFavorite([
                ...favorite,
                item
            ])
        }
    }

    console.log(favorite);

    return (
        <div className='home'>
            <div className='header'>
                <div className='header_text'>
                    <h1 className='header_title'>Welcome to Pizza Bar</h1>
                    <div className='header_description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque quidem quis, quae natus recusandae ab sed praesentium non, accusantium deserunt commodi rem ipsum minus odit ipsa. Ab, recusandae alias!
                    </div>
                    <h1 className='header_Second_title'>Made for you</h1>
                    <div className='header_order'>Order now</div>
                    <div className='header_number'>+38163341212</div>
                    <div className='social_media'>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-tiktok"></i>
                    </div>
                </div>
            </div>
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
                                <div>
                                    <button onClick={() => addToCart(item)}>Add to cart</button>
                                    <button onClick={() => addToFav(item)}>Add to Fav</button>
                                </div>
                                <span className='food_price'>${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;
