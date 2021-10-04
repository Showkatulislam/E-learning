import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Course</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                    <li>
                        <Link to='/'><i class="fas fa-shopping-cart"></i>1</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;