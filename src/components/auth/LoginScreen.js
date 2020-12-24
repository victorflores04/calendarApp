import React from 'react';
import './login.css';

export const LoginScreen = () => {
    return (
        <div className="container login-container">
            <div className="row ">
                <div className="col-md-6 login-form-1 sign-in-container">
                    <h3>Ingresar</h3>
                    <form className="form-xd">
                    <div className="social-container">
                        <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                        <div className="form-group">
                            <input 
                                type="text"
                                className=" form-control input-style"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className=" form-control input-style"
                                placeholder="Contraseña"
                            />
                        </div>
                        <a href="/">Forgot your password?</a>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2 sign-up-container overlay-container">
                    <h3>Registro</h3>
                    <form className="form-xd">
                        <div className="form-group">
                            <input
                                type="text"
                                className=" form-control input-style"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className=" form-control input-style"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className=" form-control input-style"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className=" form-control input-style"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}