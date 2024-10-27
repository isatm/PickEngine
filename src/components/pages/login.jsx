//import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import CustomButton from '../atoms/Button/CustomButton';

export default function Login() {
  return (
    <body className= "login-body">
        <div className="d-flex align-items-center py-4 bg-light body-container">
        <main className="form-signin w-100 m-auto form-container">
            <form>
            <h1 className="iniciar-secion">Inicia Sesion</h1>
            <div className="form-floating mb-3 input-style">
                <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Usuario/Correo"
                />
            </div>

            <div className="form-floating mb-3 input-style">
                <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Contraseña"
                />
            </div>

            <div className="form-check text-start mb-3">
                <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                Remember me
                </label>
            </div>
            <div className="button-container">
            <Link to="/">
            <CustomButton
                    text = {"Sign in"}
                />
                </Link> 
                <Link to="/register">
                <CustomButton
                    text = {"Sign up"}
                />
                </Link>
            </div>
            </form>
        </main>
        </div>
    </body>
  );
}


/*<div className="d-flex justify-content-around">
                <button className="btn" type="button">
                <i className="fab fa-facebook-f"></i> 
                </button>
                <button className="btn" type="button">
                <i className="fab fa-google"></i> 
                </button>
            </div>*/ 