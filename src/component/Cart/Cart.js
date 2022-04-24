import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='sticky top-0'>
            <h3 className='font-serif font-bold text-2xl'>Order Summary</h3>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button className='text-white w-11/12 bg-red-500 border-solid border-2 border-[#95A0A7] rounded-md flex items-center justify-evenly my-3 mx-auto py-2'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <button className='text-white w-11/12 bg-yellow-500 border-solid border-2 border-[#95A0A7] rounded-md flex items-center justify-evenly my-3 mx-auto py-2'>
                <p>Review Order</p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;