import React from 'react';
//importing Header.css to apply styling
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav-style'>
                <a href="Home">Home</a>
                <a href="Sections">Sections</a>
                <a href="About">About</a>
            </nav>
        </div>
    );
};

export default Header;