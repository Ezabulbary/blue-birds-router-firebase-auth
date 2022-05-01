import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate('/home')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            return (true)
        }
        setError("You have entered an invalid email address!")
        return;
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(event.target.value)){
            return (true)
        }
        setError("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!")
        return;
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleSignUp = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        }
    }


    return (
        <div className='border-solid border-2 border-black rounded-lg bg-gray-100 m-8 md:m-auto md:w-96 md:my-20 p-10'>
            <h2 className='text-3xl text-center m-10'>Please Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <p className='font-bold text-xl m-2'>Enter Email</p>
                <input onBlur={handleEmailBlur} className='rounded p-2 w-full' type="email" placeholder='Type your email' />

                <p className='font-bold text-xl m-2'>Enter Password</p>
                <input onBlur={handlePasswordBlur} className='rounded p-2 w-full' type="password" placeholder='Type your password' />

                <p className='font-bold text-xl m-2'>Confirm Password</p>
                <input onBlur={handleConfirmPasswordBlur} className='rounded p-2 w-full' type="password" placeholder='Confirm your password' />

                <p className='text-red-500'>{error}</p>

                <button onClick={() => createUserWithEmailAndPassword(email, password)} className='w-40 bg-orange-400 hover:text-white m-4 px-6 py-2 rounded block mx-auto'>Sign Up</button>
                <small><Link className='text-blue-500' to='/login'>Already Have an Account?</Link></small>
            </form>
        </div>
    );
};

export default SignUp;