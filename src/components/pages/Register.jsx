import fondo from '/register-background.jpg';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    return (
    <div className="register-container">
        <img src={fondo} alt="Imagen de fondo para el registro" className="register-background" />
        <div className="register-form-container">
            <h1>Crear cuenta</h1>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" id="nickname" placeholder="Ingrese su nickname" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Ingrese su correo electrónico" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Ingrese su contraseña" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirmar Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirme su contraseña" required />
                </div>
                <Link to="/">
                <button type="submit" className="register-btn">Registrar</button>
                </Link>
                <div className="register-form-footer">
                <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
                </div>
            </form>

        </div>
    </div>
    );
}