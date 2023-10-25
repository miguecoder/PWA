import React from 'react';
import { Link } from 'react-router-dom';

function HeaderL() {
  return (
    <div className="headerL">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link to="/homeL" className="navbar-brand" href="#"> <i>Ensigna</i> </Link>
          
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/homeL" className="nav-link active" href="#" aria-current="page">Inicio <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link active" href="#">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link to="/coursesSL" className="nav-link active" href="#">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link to="/coursesL" className="nav-link active" href="#">Mis Cursos</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/" className="nav-link active" href="#">Cerrar sesión</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Students</Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link to="/" className="dropdown-item" href="#">Certificate</Link>
                  <Link to="/" className="dropdown-item" href="#">Courses</Link>
                </div>
              </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
      <div className="row px-1">
        <div className="container">
            <form className="d-flex my-2 p-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="¿Que quieres aprender?"/>
                <button className="btn btn-primary btn-primary-outline-success" type="submit">Buscar</button>
            </form>
        </div>
      </div>
    </div>
    
  );
}

export default HeaderL;