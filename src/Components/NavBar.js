import React from 'react';
import "./styles/navbar.css";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.png"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            
            <div className="navbar__content">
                <div className="navbar__content__home navbar__item">
                    <Link to="/"> <p>Home</p> </Link>
                </div>
                <div className="navbar__content__about navbar__item">
                    <Link to="/about"> <p>About</p> </Link>
                </div>
                <div className="navbar__content__about navbar__item">
                    <Link to="/products"> <p>Products</p> </Link>
                </div>
                <div className="navbar__content__about navbar__item">
                    <Link to="/Sustainablity"> <p>Sustainability</p> </Link>
                </div>
                <div className="navbar__content__about navbar__item">
                    <Link to="/Contact"> <p>Contact</p> </Link>
                </div>
            </div>
            
    
            
            
        </div>
    )
}

export default NavBar;