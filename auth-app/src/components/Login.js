import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = ()=>{
    const {login} = useAuth();

    return(
        <div>
            <h1>Inicio de Sesion</h1>
            <button onClick={login}>Iniciar Sesion</button>
        </div>
    )
};

export default Login;