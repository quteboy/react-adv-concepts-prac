import React from 'react';
import '../App.css'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    <li className='navLink'>Login</li>
                </Link>
                <Link to='/about'>
                    <li className='navLink'>About</li>
                </Link>
                <Link to='/shop'>
                    <li className='navLink'>Shop</li>
                </Link>


            </nav>
        </div>
    );
};

export default Navigation;