import React from "react";
import Header from '../componentes/Header';
import Portada from '../componentes/Inicio';
import FormularioRegistro from "../componentes/FormularioRegistro";
import Video from '../componentes/Video';

function Inicio() {
    return (
        <div className="Inicio">
            <Header />
            <Portada />
            <FormularioRegistro/>
            <Video/>
        </div>
    );
}
export default Inicio;