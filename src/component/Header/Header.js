import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <nav className='h-[120px] md:h-[80px] bg-[#1C2B35] md:flex items-center justify-between md:px-[140px]'>
            <img className='py-4 m-auto md:ml-0' src={logo} alt="log file" />
            <div className='md:mx-10'>
                <CustomLink className='text-white no-underline text-base pl-8' to="/">Home</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/about">About</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/shop">Shop</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/order">Order</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/inventory">Inventory</CustomLink>
                {
                    user
                        ?
                        <button onClick={handleSignOut} className='text-white no-underline text-base pl-8' >Log Out</button>
                        :
                        <CustomLink className='text-white no-underline text-base pl-8' to="/login">Login</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;