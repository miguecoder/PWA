import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="container pb-4">
            <form className="row g-1">
                <div className="container">
                    <div className="text-center">
                    <br />
                    <h1>Registrate</h1>
                    Aprende a tu propio ritmo en las principales universidades y negocios.
                    
                    </div> 
                    <br /> 
                </div>
                
                    
                <div className="col-md-7">
                    <label for="inputEmail4" className="form-label"> <b>Correo electronico</b>  </label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="ejemplo@correo.com"/>
                </div>
                <div className="col-md-5">
                    <label for="inputPassword4" className="form-label"> <b>Contraseña</b> </label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder='Ingresa una contraseña'/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label"><b>Dirección</b> </label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Calle 00 # 00 - 00"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"> <b>Complemento</b></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, casa, piso..."/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">  <b>Departamento</b></label>
                    <select id="inputState" className="form-select">
                    <option selected>Selecciona</option>
                    <option>Antioquia</option>
                    <option>Magdalena</option>
                    <option>Cundinamarca</option>
                    <option>Atlantico</option>
                    <option>Santander</option>
                    <option>Valle del Cauca</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="inputName" className="form-label"> <b>Ciudad</b> </label>
                    <input type="text" className="form-control" id="inputName" placeholder='Medellín'/>
                </div>
                
                <div className="col-md-2">
                    <label for="ocupacion" className="form-label"><b>Ocupación</b> </label>
                    <input type="text" className="form-control" id="ocupacion"/>
                    <br />
                </div>
                
                <div className="col-12">
                    <Link to="/homeL">
                        <button type="submit" className="btn btn-primary">Registrarme</button>
                    </Link>
                </div>
            </form>
        </div>
        
    );
}

export default Register;