import "./marketplace.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

import Product from "../atoms/Product/product.jsx";
import CustomButton from "../atoms/Button/CustomButton.jsx";
import { set } from "react-hook-form";

const API_URL = 'http://localhost:3000/api/product';

export default function Marketplace() {
    useEffect(() => {
        getLatestProducts();
    }, []);

    const [nombreProducto, setNombre] = useState("");

    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    
    const [maxPrice, setMaxPrice] = useState(0);

    const [productList, setProductList] = useState([]);

    const getLatestProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProductList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory("");
        }
    };

    const handleClearFilters = () => {
        setCategories([]);
        setMaxPrice(0);
        setNombre("");
        getLatestProducts();
    };

    const handleApplyFilters = async () => {
        if (categories.length <= 0 && !maxPrice && maxPrice <= 0 && !nombreProducto) {
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/filter`, {
                nombreProducto,
                categories,
                maxPrice,
            });
            setProductList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="marketplace-container">
            <div className="filters">
                <input
                    type="text"
                    value={nombreProducto}
                    placeholder="Buscar productos..."
                    className="search-bar"
                    onChange={(e) => setNombre(e.target.value)}
                />
                <div className="filter-cards">
                    <div className="filter-card">
                        <h3>Categorías</h3>
                        <div className="category-list">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className='category-item selected'
                                >
                                    {category}
                                </div>
                            ))}
                            <div className="add-category">
                                <input
                                    type="text"
                                    placeholder="Nueva categoría"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="new-category-input"
                                />
                                <button
                                    onClick={handleAddCategory}
                                    className="add-category-btn"
                                >
                                    Añadir
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="filter-card">
                        <h3>Ordenar por Precio</h3>
                        <div className="sort-options">
                            <div className="add-max-price">
                                <input
                                    type="number"
                                    placeholder="Precio máximo"
                                    value={maxPrice}
                                    className="new-category-input"
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="filter-btn" onClick={handleApplyFilters}>
                    Aplicar Filtros
                </button>
                <button className="filter-btn" onClick={handleClearFilters}>
                    Borrar Filtros
                </button>
            </div>

            <div className="product-list-container">
                <div className="product-list">
                    <h2>Productos Disponibles</h2>
                    <div className="product-grid">
                        {productList.map((product, index) => (
                            <Product
                                key={index}
                                name={product.nombre}
                                price={product.precio}
                                image={product.ruta_imagen}
                                id_prod={product.id}
                            />
                        ))}
                    </div>
                </div>
                <CustomButton
                    text="Publica tu artículo"
                    redirect="/publish"
                />
            </div>
        </div>
    );
}
