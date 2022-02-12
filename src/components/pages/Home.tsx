import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/Context';
import { FoodProps } from '../../types/Types';
import { Link } from 'react-router-dom';


const Products = () => {


    const { food, cart, setCart, favorite, setFavorite, setFoodDetails } = useContext(ProductsContext);
    const [sort, setSort] = useState("asc");
    const [displayFood, setDisplayFood] = useState(sort === "asc" ? food.sort((a, b) => a.price - b.price) : food.sort((a, b) => b.price - a.price));

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

    const viewDetails = (item: FoodProps) => {
        const details = food.filter(elem => elem.id === item.id);
        setFoodDetails(details[0]);
    }

    const handleChangeFilter = (event: string) => {
        const filtered = food.filter(item => item.name.toLowerCase().includes(event.toLowerCase()));
        setDisplayFood(filtered);
    }

    const handleSelectFilter = (event: string) => {
        const filtered = food.filter(item => item.ingredients.toLowerCase().includes(event.toLowerCase()));
        if (event === "all") {
            setDisplayFood(food);
        } else {
            setDisplayFood(filtered);
        }
    }

    const handleKulen = (event: boolean) => {
        const kulenName = "kulen";
        const kulen = food.filter(item => item.ingredients.toLowerCase().includes(kulenName));
        if (event) {
            setDisplayFood(kulen);
        } else {
            setDisplayFood(food);
        }
    }

    const handlePepper = (event: boolean) => {
        const pepperName = "pepper";
        const pepper = food.filter(item => item.ingredients.toLowerCase().includes(pepperName));
        if (event) {
            setDisplayFood(pepper);
        } else {
            setDisplayFood(food);
        }
    }

    const handleSort = (e: string) => {
        if (e === "asc") {
            setSort("asc");
        } else {
            setSort("desc");
        }
    }

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
                <div className='products_header'>
                    <h2 className='products_title'>Our offer</h2>
                    <div className='sort_filter'>
                        <input className='search_filter' onChange={(e) => handleChangeFilter(e.target.value)} type="text" placeholder='Search by name' />
                        <select onChange={e => handleSelectFilter(e.target.value)} className='select_filter'>
                            <option value="all">All</option>
                            <option value="chilli">Chilli</option>
                            <option value="eggs">Eggs</option>
                            <option value="paper">Paper</option>
                        </select>
                        <select className='sort' onChange={e => handleSort(e.target.value)}>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                        <span className='checkbox'>Kulen</span>
                        <input onChange={e => handleKulen(e.target.checked)} className='checkbox_filter' type="checkbox" />
                        <span className='checkbox'>Pepper</span>
                        <input onChange={e => handlePepper(e.target.checked)} className='checkbox_filter' type="checkbox" />
                    </div>
                </div>
                <div className='products_wrapper'>
                    {displayFood.map((item, index) => (
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
                                    <i className='fas fa-shopping-cart' onClick={() => addToCart(item)}></i>
                                    <i className='fas fa-heart' onClick={() => addToFav(item)}></i>
                                    <Link to={`/details/${item.id}`}><i className='fas fa-eye' onClick={() => viewDetails(item)}></i></Link>
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
