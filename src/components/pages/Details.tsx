import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';
import { FoodProps } from '../../types/Types';

const Details = () => {

    const { foodDetails, cart, setCart, setFavorite, favorite } = useContext(ProductsContext);

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

    return (
        <div className='details_page'>
            <div className='details_wrapp'>
                <div className='details_img'>
                    <img src={foodDetails?.url} alt={foodDetails?.name} />
                </div>
                <div className='details_food_info'>
                    <h3 className='details_title'>{foodDetails?.name}</h3>
                    <div>
                        <span>Price</span><span className='info'>${foodDetails?.price}</span>
                    </div>
                    <div>
                        <span>Ingredients</span><span className='info'>{foodDetails?.ingredients}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span className='info'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star-half-alt'></i>
                        </span>
                    </div>
                    <div>
                        <span>Description</span><span className='info'>{foodDetails?.description}</span>
                    </div>
                    <div>
                        <span>Enjoy</span>
                        <span className='event'>
                            <i onClick={() => addToCart(foodDetails)} className='fas fa-shopping-cart'></i>
                            <i onClick={() =>addToFav(foodDetails)} className='fas fa-heart'></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Details;
