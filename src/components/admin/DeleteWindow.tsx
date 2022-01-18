import { useRef, useContext } from 'react';
import { ProductsContext } from '../../context/Context';

const DeleteWindow = () => {

    const { food, setFood, setDeleteVisible, itemToDelete } = useContext(ProductsContext);

    const deleteRef = useRef<HTMLDivElement>(null);
    const handleExit = (event: any) => {
        if (!deleteRef.current?.contains(event.target)) {
            setDeleteVisible(false);
        }
    }

    const handleDelete = () => {
        const deleted = food.filter(elem => elem.id !== itemToDelete);
        setFood(deleted);
        setDeleteVisible(false);
    }


    return (
        <div onClick={handleExit} className='delete_wrapper'>
            <div ref={deleteRef} className='delete'>
                <div className='delete_question'>Are you sure you want to delete this item?</div>
                <div className='delete_events'>
                    <button onClick={() => setDeleteVisible(false)} className='delete_cancel'>Cancel</button>
                    <button onClick={handleDelete} className='delete_ok'>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWindow;
