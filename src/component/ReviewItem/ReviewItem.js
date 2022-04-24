import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    console.log(name)
    return (
        <div className='border-solid border-2 border-black rounded-lg m-4 grid grid-cols-3 items-center justify-center w-80 lg:w-full'>
            <img className='h-44 w-44 p-2' src={img} alt="" />
            <div className='col-span-2 grid grid-cols-3 items-center justify-between w-full'>
                <div className='m-4 col-span-2'>
                    <p className='text-[#0E161A] text-base'>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} stars</small></p>
                </div>
                <button className='w-10 h-10 hover:text-red-500 lg:ml-20'>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;