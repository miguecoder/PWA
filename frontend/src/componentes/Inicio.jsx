import React from 'react';
import Portada from '../images/Portada.png'
import { Link } from 'react-router-dom';

function Inicio() {
  return (
 
    <div className="container">
        <div className="row">
            
            <img src={Portada} style={{maxWidth: "500px"}} className="rounded mx-auto d-block" alt="portada"/>
            <div className="container">
                <div className='mx-auto ' style={{maxWidth: "400px"}} >
                    <p className=' text-center' >Comienza, transforma o impulsa tu carrera profesional con más de 5000 cursos, certificados profesionales y títulos de grado de universidades y empresas de nivel mundial.</p>
                </div>
            </div>
            
            
            
            <Link to="login">
                <div className="d-grid gap-2 col-6 mx-auto" style={{maxWidth: "400px"}} >
                    <button className="btn btn-primary" type="button">Iniciar sesión</button>
                </div>
            </Link>
            <Link to="register">
                <div className="d-grid gap-2 col-6 mx-auto" style={{maxWidth: "400px"}}>
                    <button className="btn btn-secondary" type="button">Registrarme</button>
                </div>
            </Link>
            
        </div>
        <br />
    </div>

  );
}

export default Inicio;