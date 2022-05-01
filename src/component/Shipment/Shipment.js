import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleShipment = event => {
        event.preventDefault();
    }


    return (
        <div className='border-solid border-2 border-black rounded-lg bg-gray-100 m-8 md:m-auto md:w-96 md:my-20 p-10'>
            <h2 className='text-3xl text-center m-10'>Shipping Information</h2>
            <form onSubmit={handleShipment}>
                <p className='font-bold text-xl m-2'>Enter Name</p>
                <input onBlur={handleNameBlur} className='rounded p-2 w-full' type="text" placeholder='Type your name' />

                <p className='font-bold text-xl m-2'>Enter Email</p>
                <input value={user?.email} readOnly className='rounded p-2 w-full' type="email" placeholder='Type your email' />

                <p className='font-bold text-xl m-2'>Enter Address</p>
                <input onBlur={handleAddressBlur} className='rounded p-2 w-full' type="text" placeholder='Type your address' />

                <p className='font-bold text-xl m-2'>Enter Phone Number</p>
                <input onBlur={handlePhoneNumberBlur} className='rounded p-2 w-full' type="password" placeholder='Type your phone number' />

                <p className='text-red-500'>{error}</p>

                <button className='w-40 bg-orange-400 hover:text-white m-4 px-6 py-2 rounded block mx-auto'>Confirm Order</button>
            </form>
        </div>
    );
};

export default Shipment;