import React from 'react';
import { Link } from 'react-router-dom';

//Imagenes
import robotica from '../images/robotica.jpg';
import fullstack from '../images/fullstack.png';
import uiux from '../images/uiux.jpg';
import software from '../images/software.jpeg';
import cienciadatos from '../images/cienciadatos.jpg';
import gerenciaproyectos from '../images/gerenciaproyectos.png';
import pythonML from '../images/pythonML.png';
import metaios from '../images/metaios.jpg';
import googleux from '../images/googleux.webp';
//Estilos
import '../styles/main.css';

//Iconos
import { BiTime } from 'react-icons/bi';
import { GoFileSubmodule } from 'react-icons/go';
import { VscRemoteExplorer } from 'react-icons/vsc';
import { BsCalendar3 } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';


function CursosH() {
  return (
    
        <div className="row px-1">
            <div className="container" style={{backgroundColor: "#ebf3ff"}}>
                <div className='p-3 encabezado'>
                    <h1 className='text m-1 fw-bold encabezado'>Bienvenido nuevamente</h1>
                    <div className="card">
                        <div className="card-header pt-3">
                            Profesional | Harvart University
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Maestria en Ingenieria de software</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}>35%
                                </div>
                            </div>
                            <p className="card-text pt-2">Avance general</p>
                            <hr />
                            <Link to="" className="btn btn-primary">Continuar</Link>
                        </div>
                    </div>
                
                </div>
            </div>
            {/*TITULO: Cursos destacados*/}
            <div className="container text-center p-4" id='cursos'>
                <div className="row mt-5">
                    <div className="col">
                        <h2 className='rounded float-start encabezado' >
                            <strong> Cursos destacados </strong> 
                        </h2>
                    </div>
                </div>
            </div>
            {/*CARRUSEL: cursos destacados*/}
            <div className="container" id='cursos'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active" data-bs-interval="4000">
                            <div className="card">
                                <div className="card-icon">
                                    <img src={robotica} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Inteligencia Artificial</h5>
                                    <p className="card-text">Aprende cómo funcionan los algoritmos de inteligencia artificial que hacen posible los chatbos, automóviles autónomos, el reconocimiento de voz y más.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <GoFileSubmodule /> 27 Módulos</strong>
                                        </div>
                                        <div className="col">
                                            <strong><BiTime />108 horas</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="4000">
                            <div className="card">
                                <img src={fullstack} className="card-img-top cards img-fluid" alt="FullStack"/>
                                <div className="card-body">
                                    <h5 className="card-title">Fullstack</h5>
                                    <p className="card-text">Aprende a construir aplicaciones y sitios web tanto backend como frontend, usando JavaScript, Node y React.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <GoFileSubmodule /> 34 Módulos</strong>
                                        </div>
                                        <div className="col">
                                            <strong><BiTime />134 horas</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item" data-bs-interval="4000">
                            <div className="card">
                                <img src={uiux} className="card-img-top cards img-fluid" alt="User interface & User experience"/>
                                <div className="card-body">
                                    <h5 className="card-title">User interface & User experience</h5>
                                    <p className="card-text">Aprende, conoce y aplica técnicas de User Experience Design y Design Thinking - Curso UX UI Design + Diseño Web y Mobile.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <GoFileSubmodule /> 18 Módulos</strong>
                                        </div>
                                        <div className="col">
                                            <strong><BiTime />68 horas</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/*TITULO: Obten tu título de universidas*/}
            <div className="container text-center p-4" id='cursos'>
                <div className="row mt-5">
                    <div className="col">
                        <h2 className='rounded float-start encabezado' >
                            <strong> Obtén tu título de universidad </strong> 
                        </h2>
                    </div>
                </div>
            </div>
            {/*CARRUSEL: Obten tu titulo de universidad*/}
            <div className="container" id='cursos'>
                <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleControls2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleControls2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleControls2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >

                        <div className="carousel-item active" data-bs-interval="4000">
                        <div className="card">
                                <img src={software} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                <div className="card-body">
                                    <h5 className="card-title">Maestria en Ingenieria de software</h5>
                                    <p className="card-text">Students enrolled in the Master of Liberal Arts program in Software Engineering will learn to apply systematic engineering principles to the design, construction, and maintenance of large software applications.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <BsCalendar3/> 4 semestres</strong>
                                        </div>
                                        <div className="col">
                                            <strong><FaUniversity />Harvard University</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                    

                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="4000">
                            <div className="card">
                                <img src={cienciadatos} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                <div className="card-body">
                                    <h5 className="card-title">Maestria en Ciencia de datos y analítica</h5>
                                    <p className="card-text">El Magíster en Ciencia de Datos y analitica forma graduados con conocimientos sólidos en los fundamentos y aplicación del procesamiento, modelamiento, y análisis de datos, a través de herramientas computacionales de frontera.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <BsCalendar3/> 4 semestres</strong>
                                        </div>
                                        <div className="col">
                                            <strong><FaUniversity />Pontificia Universidad Católica de Chile</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                    

                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item" data-bs-interval="4000">
                            <div className="card">
                            <img src={gerenciaproyectos} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                <div className="card-body">
                                    <h5 className="card-title">Maestria en Gerencia de Proyectos</h5>
                                    <p className="card-text">Alcanza las habilidades directivas y técnicas necesarias para una gestión eficiente de equipos y proyectos complejos.</p>
                                    <strong>Habilidades que desarrollaras: </strong>
                                    <span className='fw-light'>
                                        Bussiness Process Management, Marketing Management, Methodologies..
                                    </span>

                                    
                                    <div className="row mt-2">
                                        <div className="col">
                                            <strong> <BsCalendar3/> 3 semestres</strong>
                                        </div>
                                        <div className="col">
                                            <strong><FaUniversity />Universidad del Valle</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            {/*TITULO: Cursos y especializaciones vistos recientemente*/}
            <div className="container text-center p-4" id='cursos'>
                <div className="row mt-5">
                    <div className="col">
                        <h2 className='rounded float-start encabezado' >
                            <strong> Cursos y especializaciones vistos recientemente</strong> 
                        </h2>
                    </div>
                </div>
            </div>
            {/*CARRUSEL: Cursos y especializaciones vistos recientemente*/}
            <div className="container" id='cursos'>
                <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleControls3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleControls3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleControls3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >

                        <div className="carousel-item active" data-bs-interval="4000">
                            <div className="card">
                                <img src={pythonML} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                <div className="card-body">
                                    <h5 className="card-title">Python para machine learning</h5>
                                    <p className="card-text">Aplica machine learning en tus análisis de datos y genera predicciones para tomar decisiones hacia el futuro.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <GoFileSubmodule/> 18 módulos</strong>
                                        </div>
                                        
                                        <div className="col">
                                            <strong><BiTime />110 horas</strong>
                                        </div>
                                        <div className="col">
                                            <strong><FaUniversity />Universidad Nacional de Colombia</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                    

                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="4000">
                            <div className="card">
                                <img src={metaios} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                <div className="card-body">
                                    <h5 className="card-title">Meta iOS Developer</h5>
                                    <p className="card-text">Inicie su carrera como desarrollador de iOS. Desarrolle habilidades listas para el trabajo para una carrera en demanda y obtenga una credencial de Meta. No se requiere título ni experiencia previa para comenzar</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <BsCalendar3/> 8 Meses</strong>
                                        </div>
                                        <div className="col">
                                            <strong><FaUniversity />Meta</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                        <a href="https://www.coursera.org/professional-certificates/meta-ios-developer">hola</a>
                                    </section>
                                    <br />
                                    

                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item" data-bs-interval="4000">
                            <div className="card">
                            <img src={googleux} className="card-img-top img-fluid cards" alt="Inteligencia articicial"/>
                                <div className="card-body">
                                    <h5 className="card-title">Google UX Design</h5>
                                    <p className="card-text">Este es tu camino hacia una carrera en diseño UX. En este programa, aprenderá habilidades en demanda que lo prepararán para el trabajo en menos de 6 meses. No se requiere título ni experiencia.</p>
                                    <div className="row">
                                        <div className="col">
                                            <strong> <BsCalendar3/> 6 meses</strong>
                                        </div>
                                        <div className="col">
                                            <strong><FaUniversity />Google</strong>
                                        </div>
                                        <div className="col">
                                            <strong><VscRemoteExplorer />100% en linea</strong>
                                        </div>
                                    </div>
                                    <br />
                                    <section className='px-5 text-center'>
                                        <Link to="" className="btn btn-primary">Conocer más</Link>
                                    </section>
                                    <br />
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
  );
}

export default CursosH;
