import React from 'react';
//import { Link } from 'react-router-dom';
//iconos
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ProfileL() {
  return (
    <section style={{backgroundColor: "#eee"}}>
      <Link to='/coursesS'>
        <BsArrowLeftSquare size={30}/>
      </Link>
      
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{width: "150px"}}/>
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to="/edit-profile" className="btn btn-primary">Editar mi perfil</Link>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    
                    <RiGlobalFill icon="fas fa-globe fa-lg text-warning" />
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub className="fab fa-github fa-lg" style={{color: "#333333"}}/>
                    <p className="mb-0">GitHub</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter className="fab fa-twitter fa-lg" style={{color: "#55acee"}}/>
                    <p className="mb-0">@Twitter</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}/>
                    <p className="mb-0">@Instargram</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook className="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}/>
                    <p className="mb-0">Facebook</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Correo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Teléfono</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Celular</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Dirección</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Cursos</span> | Estado de avance
                    </p>
                    <p className="mb-1" style={{fontSize: ".77rem"}}>Web Design</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "80%", ariaValuenow: "80",
                        ariavaluemin: "0", ariavaluemax: "100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Website Markup</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "72%", ariaValuenow: "72",
                        ariaValuemin: "0", ariaValuemax: "100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>One Page</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "89%", ariaValuenow:"89",
                        ariaValuemin:"0", ariaValuemax:"100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Mobile Template</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "55%", ariaValuenow: "55",
                        ariaValuemin: "0", ariaValuemax:"100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Backend API</p>
                    <div className="progress rounded mb-2" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "66%", ariaValuenow: "66",
                        ariaValuemin: "0", ariaValuemax: "100"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Profesionales</span> | Estado de avance
                    </p>
                    <p className="mb-1" style={{fontSize: ".77rem"}}>Web Design</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "80%", ariaValuenow:"80",
                        ariaValuemin: "0", ariaValuemax: "100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Website Markup</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "72%", ariaValuenow:"72",
                        ariaValuemin:"0", ariaValuemax: "100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>One Page</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "89%", e:"89", ariaValuemin:"0", ariaValuemax: "100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Mobile Template</p>
                    <div className="progress rounded" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "55%", e:"55",
                        ariaValuemin:"0", ariaValuemax: "100"}}></div>
                    </div>
                    <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Backend API</p>
                    <div className="progress rounded mb-2" style={{height: "5px"}}>
                      <div className="progress-bar" role="progressbar" style={{width: "66%", e:"66", ariaValuemin:"0", ariaValuemax: "100"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default ProfileL;