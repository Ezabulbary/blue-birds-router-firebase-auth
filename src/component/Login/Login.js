import React from 'react';

const Login = () => {
    return (
        <div className='border-solid border-2 border-black rounded-lg bg-gray-300 mx-44 my-20 p-20'>
            <p className='font-bold text-xl m-2'>Enter Email</p>
            <input className='rounded p-2 w-full' type="email" placeholder='Type your email' />
            <p className='font-bold text-xl m-2'>Enter Password</p>
            <input className='rounded p-2 w-full' type="password" placeholder='Type your password'/>
            <button className='bg-blue-600 hover:text-white m-4 px-6 py-2 rounded block mx-auto'>Log In</button>
        </div>
    );
};

export default Login;