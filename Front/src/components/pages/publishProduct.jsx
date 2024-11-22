import "./publishProduct.css";
import CustomButton from "../atoms/Button/CustomButton.jsx";

import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/product/publish/product";
const AUTH_URL = 'http://127.0.0.1:3000/auth/login/verify';

export default function PublishProduct() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");

    const getUserId = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.post(AUTH_URL, { token: token });
                if (response.data.login) {
                    return response.data.userData.userId;
                } else {
                    alert('Token inválido o expirado, por favor inicia sesión nuevamente.');
                    localStorage.removeItem('token');
                    return null;
                }
            } catch (error) {
                console.error('Error al verificar el token:', error);
                return null;
            }
        } else {
            alert('No se encontró token, por favor inicia sesión.');
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = await getUserId();
        if (!userId) {
            alert('No se pudo obtener el ID del usuario, Por favor inicia sesión.');
            return;
        }

        try {
            const response = await axios.post(API_URL, {
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                stock: stock,
                categoria: categoria,
                imagen: imagen,
                idVendedor: userId
            });
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="publishProduct">
            <div className="formContainer">
                <h1>Publicar Producto</h1>
                <form className="formulario" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />

                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />

                    <label htmlFor="categoria">Categoría:  (Separada por comma)</label>
                    <input type="text" id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />

                    <label htmlFor="imagen">Imagen:</label>
                    <input type="text" id="imagen" name="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)}/>

                    <button onClick={handleSubmit}>Publicar</button>
                </form>
            </div>
        </div>
    );
}