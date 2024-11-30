import "./detallesProducto.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetallesProducto() {
    const { id } = useParams();
    const API_URL = 'http://localhost:3000/api/product/' + id;
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const response = await axios.get(API_URL);
            setProduct(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="G">
            <div className="detallesProducto-container">
                <div className="detallesProducto">
                    <h1>{product.nombre}</h1>
                    <p><strong>Descripción:</strong> {product.descripcion}</p>
                    <p><strong>Precio:</strong> ${product.precio}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p><strong>Fecha de Publicación:</strong> {new Date(product.fecha_publicacion).toLocaleDateString()}</p>
                    <p><strong>Estado:</strong> {product.estado}</p>
                    <img src={product.ruta_imagen} alt={product.nombre} />
                </div>
                <div className="detalles-vendedor">
                    <h2>Detalles del Vendedor</h2>
                    <p><strong>Nombre:</strong> {product.nombre1} {product.apellido1}</p>
                    <p><strong>Email:</strong> {product.correo}</p>
                    <p><strong>Teléfono:</strong> {product.telefono}</p>
                    {/* <img src={product.ruta_foto_perfil} alt={product.nombre1} /> */}
                    <img className="avatar"src="/public/Avatar.png" alt={product.nombre1} />
                </div>
            </div>
        </div>
    );
};