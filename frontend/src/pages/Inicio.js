import React from "react";
import Header from '../componentes/Header';
import Portada from '../componentes/Inicio';
import FormularioRegistro from "../componentes/FormularioRegistro";


function Inicio() {
    return (
        <div className="Inicio">
            <Header />
            <Portada />
            <FormularioRegistro/>
        </div>
    );
}
export default Inicio;