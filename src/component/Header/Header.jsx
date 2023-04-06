import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-5'>
            <Link to='/'><span className='font-bold text-purple-800'>Home</span></Link>
            <Link to='/shop'><span className='font-bold text-purple-800'>Shop</span></Link>
        </div>
    );
};

export default Header;