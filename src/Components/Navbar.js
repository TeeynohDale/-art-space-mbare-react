import React, {useState,props, Component } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleclick =  () => setClick(!click);
    const closeMobileMenu =  () => setClick(false);
    

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"></Link>
                    <div className="menu-icon" onClick={handleclick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars' }/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
