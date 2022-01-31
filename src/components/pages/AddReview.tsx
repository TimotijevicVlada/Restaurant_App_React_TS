import { useState, useContext } from 'react';
import { ProductsContext } from '../../context/Context';


const AddReview = () => {

    const { user, review, setReview } = useContext(ProductsContext);
    const [rev, setRev] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!rev) {
            setError(true);
        } else {
            if (user.length === 0) {
                alert("You must be logged in!");
            } else {
                setReview([
                    ...review,
                    {
                        id: Math.floor(Math.random() * 1000000),
                        name: user[0].username,
                        url: "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
                        message: rev,
                        date: new Date().toDateString()
                    }
                ].sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1))
                setRev("");
                setError(false);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className='add_review'>
            <textarea
                value={rev}
                onChange={(e) => setRev(e.target.value)}
                placeholder='Type your review...'
            />
            <button type='submit'>Add</button>
            {error && <span className='error'>Your review is empty!</span>}
        </form>
    )
};

export default AddReview;
