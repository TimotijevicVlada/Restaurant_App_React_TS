import { useContext } from 'react';
import Carousel from "react-elastic-carousel";
import { ProductsContext } from "../../context/Context";

const Favorite = () => {

  const { favorite } = useContext(ProductsContext);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];


  return (
    <div className='favorite'>
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
                  <i className='fas fa-shopping-cart'></i>
                  <i className='fas fa-heart'></i>
                </div>
              </div>
            ))}
          </Carousel> : <div>There is no favorite products!</div>
        }
    </div>
  )
};

export default Favorite;
