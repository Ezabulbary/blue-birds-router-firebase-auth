import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user,] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
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
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(event.target.value)) {
            return (true)
        }
        setError("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!")
        return;
    }

    const handleSignIn = event => {
        event.preventDefault();
    }

    return (
        <div className='border-solid border-2 border-black rounded-lg bg-gray-100 m-8 md:m-auto md:w-96 md:my-20 p-10'>
            <h2 className='text-3xl text-center m-10'>Please Sign In</h2>
            <form onSubmit={handleSignIn}>
                <p className='font-bold text-xl m-2'>Enter Email</p>
                <input onBlur={handleEmailBlur} className='rounded p-2 w-full' type="email" placeholder='Type your email' />

                <p className='font-bold text-xl m-2'>Enter Password</p>
                <input onBlur={handlePasswordBlur} className='rounded p-2 w-full' type="password" placeholder='Type your password' />

                <p className='text-red-500'>{error}</p>

                <button onClick={() => signInWithEmailAndPassword(email, password)} className='w-40 bg-orange-400 hover:text-white m-4 px-6 py-2 rounded block mx-auto'>Log In</button>
                <small><Link className='text-blue-500' to='/signup'>Don't Have an Account?</Link></small>
            </form>
        </div>
    );
};

export default Login;