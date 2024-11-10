import fondo from '/register-background.jpg';
import { Link } from 'react-router-dom';
import './Register.css';

import axios from 'axios';
import { useState } from 'react';
const API_URL = 'http://localhost:3000/api/user/create';

export default function Register() {
    const createUser = async (n1, n2, a1, a2, nick, e, p) => {
        try {
            const response = await axios.post(API_URL, {
                nombre1: n1,
                nombre2: n2,
                apellido1: a1,
                apellido2: a2,
                nickname: nick,
                correo: e,
                contrasena: p
            });
            console.log(response.data);
            setUserId(response.data.insertId);
        } catch (error) {
            console.error(error);
        }
    }

    const [nombre1, setNombre1] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [nickname, setNickname] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');
    const [userId, setUserId] = useState(null); // Variable para guardar el insertId

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        if (contrasena !== confirmContrasena) {
            alert('Las contraseñas no coinciden');
            return;
        }
        createUser(nombre1, nombre2, apellido1, apellido2, nickname, correo, contrasena);
    }

    return (
        <div className="register-container">
            <img src={fondo} alt="Imagen de fondo para el registro" className="register-background" />
            <div className="register-form-container">
                {userId && (
                    <div className="success-message">
                        <h2>¡Registro Exitoso!</h2>
                        <p>Usuario creado con ID: {userId}</p>
                    </div>
                )}
                <h1>Crear cuenta</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first-name">Primer Nombre</label>
                        <input type="text" id="first-name" placeholder="Ingrese su primer nombre" value={nombre1} onChange={(e) => setNombre1(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="second-name">Segundo Nombre</label>
                        <input type="text" id="second-name" placeholder="Ingrese su segundo nombre" value={nombre2} onChange={(e) => setNombre2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="first-lastname">Primer Apellido</label>
                        <input type="text" id="first-lastname" placeholder="Ingrese su primer apellido" value={apellido1} onChange={(e) => setApellido1(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="second-lastname">Segundo Apellido</label>
                        <input type="text" id="second-lastname" placeholder="Ingrese su segundo apellido" value={apellido2} onChange={(e) => setApellido2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nickname">Nickname</label>
                        <input type="text" id="nickname" placeholder="Ingrese su nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Ingrese su correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Ingrese su contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirmar Password</label>
                        <input type="password" id="confirm-password" placeholder="Confirme su contraseña" value={confirmContrasena} onChange={(e) => setConfirmContrasena(e.target.value)} required />
                    </div>

                    <button type="submit" className='register-btn'>Registrar</button>

                    <div className="register-form-footer">
                        <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}