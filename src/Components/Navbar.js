import React, {useState } from 'react'
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'

const Navbar =(props)=> {
    const [click,setClick] = useState(false);
    const handleclick =  () => setClick(!click);
    const closeMobileMenu =  () => setClick(false);
    

    return(
        <>
            <nav className="navbarr">
                <div className="navbar-wrapper">
                    <div className="menu-icon" onClick={handleclick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars' }/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="matapi"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="art-lovers"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                Art-Lovers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="our-partners"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                Partners
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="construction"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                The Space
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="child-museum"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                Children Museum
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="social"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                Social Media
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-links" 
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                onClick={closeMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
