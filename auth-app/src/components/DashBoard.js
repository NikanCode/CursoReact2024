import React from "react";
import {useAuth} from "../context/AuthContext";

const DashBoard = () => {
    const {logout} = useAuth();
    return(
        <div>
            <h1>Tablero</h1>
            <p>Esta es una pagina protegida. Solo los usuarios autenticados pueden verla</p>
        
        <button onClick={logout}>Cerrar sesion</button>
        </div>
    )
}

export default DashBoard;