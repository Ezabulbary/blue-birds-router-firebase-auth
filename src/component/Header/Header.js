import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='h-[120px] md:h-[80px] bg-[#1C2B35] md:flex items-center justify-between md:px-[140px]'>
            <img className='py-4 m-auto md:ml-0' src={logo} alt="log file"/>
            <div className='md:mx-10'>
                <CustomLink className='text-white no-underline text-base pl-8' to="/">Home</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/about">About</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/shop">Shop</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/order">Order</CustomLink>
                <CustomLink className='text-white no-underline text-base pl-8' to="/login">Login</CustomLink>
            </div>
        </nav>
    );
};

export default Header;