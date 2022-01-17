import { useContext } from 'react';
import { ProductsContext } from '../../context/Context';

const DetailsProduct = () => {

    const { adminDetails } = useContext(ProductsContext);

    return (
        <div className='details_page'>
            <div className='details_image'>
                <img src={adminDetails[0].url} alt={adminDetails[0].name} />
            </div>
            <div className='details_info'>
                <h2>{adminDetails[0].name}</h2>
                <div className='details_price'>
                   <span>Price:</span> <span>${adminDetails[0].price}</span> 
                </div>
            </div>
        </div>
    )
}

export default DetailsProduct;
