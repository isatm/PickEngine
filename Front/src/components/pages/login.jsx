import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";
import CustomButton from '../atoms/Button/CustomButton';

const AUTH_URL = 'http://127.0.0.1:3000/auth/login/';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        const response = await axios.post(AUTH_URL, {
            correo: email,
            contrasena: password,
            rememberMe: rememberMe
        });

        if (response.data.login) {
            alert('Inicio de sesión exitoso:', response.data);
            localStorage.setItem('token', response.data.token);
            redirect('/forum');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

  return (
    <body className= "login-body">
        <div className="d-flex align-items-center py-4 bg-light body-container">
            <main className="form-signin w-100 m-auto form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="iniciar-secion">Inicia Sesion</h1>
                    <div className="form-floating mb-3 input-style">
                        <input type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Usuario/Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-floating mb-3 input-style">
                        <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-check text-start mb-3">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="rememberMe"
                        onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                        </label>
                    </div>
                    <div className="button-container">
                    <Link to="/forum">
                        <button onClick={handleSubmit}>Sign in</button>
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