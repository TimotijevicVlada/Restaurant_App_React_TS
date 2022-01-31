import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/Context';
import Carousel from "react-elastic-carousel";
import AddReview from './AddReview';

const Review = () => {

    const { review, setReview } = useContext(ProductsContext);
    const [addVisibility, setAddVisibility] = useState(false);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
    ];

    useEffect(() => {
        setReview(review.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1));
    }, [review, setReview])


    return (
        <div className='review'>
            <div className='review_wrapper'>
                <h2 className='review_title'>Reviews <span className='review_number'>{review.length}</span></h2>
                {addVisibility ? <AddReview /> : <button className='add_review_btn' onClick={() => setAddVisibility(true)}>Add your review</button>}
                {review.length > 0 ? <Carousel isRTL={false} breakPoints={breakPoints}>
                    {review.map(item => (
                        <div className='item' key={item.id}>
                            <div className='review_img'>
                                <img src={item.url} alt={item.url} />
                            </div>
                            <div className='review_msg'>
                                {item.message}
                            </div>
                            <div className='review_name'>
                                <h3>{item.name}</h3>
                            </div>
                            <div className='review_date'>
                                {item.date}
                            </div>
                        </div>
                    ))}
                </Carousel> :
                    <div className='empty_review'>
                        <div>Your review is empty!</div>
                    </div>
                }
            </div>
        </div>
    )
};

export default Review;
