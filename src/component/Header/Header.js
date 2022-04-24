import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="log file"/>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;