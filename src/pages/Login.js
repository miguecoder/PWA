import React from "react";
import Header from '../componentes/Header';
import Iniciosesion from '../componentes/Login';


function Login() {
    return (
        <div className="Login">
            <Header />
            <Iniciosesion />
        </div>
    );
}
export default Login;