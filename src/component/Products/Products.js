import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings} = product;
    return (
        <div className='border-solid border-2 border-black rounded-lg relative'>
            <img className='bg-cover bg-center p-2' src={img} alt="" />
            <div className='my-0 mx-[14px] mb-6'>
                <p className='mt-0 mb-[10px] font-Lato text-[#0E161A] text-base'>{name}</p>
                <p className='mt-0 mb-[10px]'>Price: ${price}</p>
                <p className='mt-0 mb-[10px]'><small>Manufacturer: {seller}</small></p>
                <p className='mt-0 mb-[10px]'><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='w-full h-10 bg-[#FFE0B3] hover:bg-orange-500 hover:text-white rounded-b-lg absolute bottom-0 flex items-center justify-evenly'>
            	<p>Add to Cart</p>
				<FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Products;