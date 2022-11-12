import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-light bg-light" id='menu'>
      <div className="container">
        <Link to="/" className="navbar-brand" >
          <i>
            Ensigna
          </i>
          
        </Link>
        
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item" >
              <Link to="/" className="nav-link active"  aria-current="page">Inicio</Link>
            </li>
            
            
            <li className="nav-item">
              <Link to="/coursesS" className="nav-link active" >Cursos</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active" >Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link active" >Registrarme</Link>
            </li>
            
          </ul>
          
        </div>
        </div>
      </nav>
      <div className="row px-1">
        <div className="container">
            <form className="d-flex p-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="¿Que quieres aprender?"/>
                <button className="btn btn-primary btn-primary-outline-success" type="submit">Buscar</button>
            </form>
        </div>
            
        <div className="container" style={{backgroundColor: "#ebf3ff"}}>
            <div className='p-3 encabezado'>
                <h1 className='text m-1 fw-bold encabezado'> Fórmate en linea como profesional en tecnología. </h1>
                <br />
                <p><strong>94%</strong> de nuestros estudiantes han, por lo menos, duplicado sus salarios despues de certificarse con Ensigna.</p>
                <p><strong>32%</strong> de nuestros estudiantes han creado sus propias empresas en tecnología.</p>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
