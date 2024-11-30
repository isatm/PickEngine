import "./product.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Product({ name, price, image, id_prod }) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>${price}</p>
            <img src={image} alt="Producto" />

            <Link to={`/product/${id_prod}`}>
            <button>Ver Detalles</button>
            </Link>

        </div>
    );
}