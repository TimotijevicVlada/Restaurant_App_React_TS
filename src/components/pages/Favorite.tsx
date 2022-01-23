import { useContext } from 'react';
import Carousel from "react-elastic-carousel";
import { ProductsContext } from "../../context/Context";
import { FoodProps } from '../../context/Context';

const Favorite = () => {

  const { favorite, setFavorite, cart, setCart } = useContext(ProductsContext);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

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

  const handleDelete = (item: FoodProps) => {
    const deleted = favorite.filter(elem => elem.id !== item.id);
    setFavorite(deleted);
  }


  return (
    <div className='favorite'>
      <div className='favorite_wrapper'>
        <h2 className='favorite_title'>Your favorite products</h2>
        {
          favorite.length > 0 ? <Carousel isRTL={false} breakPoints={breakPoints} >
            {favorite.map(item => (
              <div className='item' key={item.id}>
                <img src={item.url} alt={item.name} />
                <div className='favorite_name'>{item.name}</div>
                <div className='favorite_price'>${item.price}</div>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
                <div className='fav_events'>
                  <div>
                    <i onClick={() => addToCart(item)} className='fas fa-shopping-cart'></i>
                    <i className="far fa-eye"></i>
                  </div>
                  <i onClick={() => handleDelete(item)} className='fas fa-trash-alt'></i>
                </div>
              </div>
            ))}
          </Carousel> :
            <div className='empty_favorite'>
              <i className='fas fa-heart'></i>
              <div>Your favorite is empty!</div>
            </div>
        }
      </div>

    </div>
  )
};

export default Favorite;
