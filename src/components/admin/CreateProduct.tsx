import React from 'react';

const CreateProduct = () => {
    return (
        <form className='create'>
            <h2 className='title'>Create your new product</h2>
            <div>
                <input type="text" placeholder='Product name'/>
            </div>
            <div>
                <input type="text" placeholder='Product url'/>
            </div>
            <div>
                <input type="text" placeholder='Product price'/>
            </div>
            <div className='button'>
                <button>Create</button>
            </div>
        </form>
    )
}

export default CreateProduct;
