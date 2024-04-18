import React from 'react'
import NavBar from "./NavBar";
import './styles/products.css';
import prod1 from "./assets/Product1.jpeg";
import prod2 from "./assets/Product2.jpg";
import prod3 from "./assets/Product3.jpg";

const Products = () => {
    return (
        <div className="products">
            <div className="products__navbar">
                <NavBar />
            </div>
            <div className="products__body">
                <div className="products__body__product">
                    <div className="products__body__img">
                        <img src={prod1} alt="Prod" />
                    </div>
                    <div className="products__body__text">
                        <p>Compostible Air Pods Case</p>
                        <div className="products__rate">
                            <p>Rate: 10$</p>
                        </div>
                    </div>
                </div>
                <div className="products__body__product">
                    <div className="products__body__img">
                        <img src={prod2} alt="Prod" />
                    </div>
                    <div className="products__body__text">
                        <p>Compostible iPhone Case</p>
                        <div className="products__rate">
                            <p>Rate: 20$</p>
                        </div>
                    </div>
                </div>
                <div className="products__body__product">
                    <div className="products__body__img">
                        <img src={prod3} alt="Prod" />
                    </div>
                    <div className="products__body__text">
                        <p>Compostible Charging Cable</p>
                        <div className="products__rate">
                            <p>Rate: 15$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;