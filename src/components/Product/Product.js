import React from 'react';
import './Product.css';

const Product = ({ id, name, desc, price, inStock, image}) => {
    return <div className="Product">
        <h5 className="Product-name">{name}</h5>
        <h5 className="Procut-desc">{desc}</h5>
        <img src={image} alt={desc} className="Product-image"/>
        <h5 className="Product-inStock">{inStock}</h5>
        <h5 className="Product-price">{price}</h5>
        <button className="Product-add-to-card">Add to card</button>
    </div>
};
export default Product;