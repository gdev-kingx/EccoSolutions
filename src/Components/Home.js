import React from 'react';
import "./styles/home.css";
import NavBar from "./NavBar";
import prodImg from "./assets/Products.jpeg"
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="home">
            <div className="home__navbar">
                <NavBar />
            </div>
            <div className="home__body">
                <div className="home__body__img">
                    <div className='home__body__img__contain'>
                        <div className="home__body__img__text">
                            <h1>Eco-Friendly Products Showcase.</h1>
                            <p>Discover our carefully curated collection of eco-friendly products designed to reduce environmental impact while enhancing your everyday life.</p>
                        </div>
                        <div className="home__body__img__img">
                            <img src={prodImg} alt="Product" />
                        </div>
                    </div>
                    
                        <div className="home__body__prod__button">
                            <Link to="/products">Explore Now</Link>
                        </div>
                    
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Eco-Friendly Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

