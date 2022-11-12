import React from 'react';
import { Link } from 'react-router-dom';
import desarrollo from '../images/desarrollo.webp';
import empresas from '../images/empresas.png';
import '../styles/main.css';

function Services() {
    return (
        <div className="container-fluid">
            <div className="row mx-auto my-5">
                <div className="col-lg-6 col-md-10 col-sm-12 mt-5 mx-auto text-center">
                    <div className="text-center">
                        <h2 className='encabezado '>Trabaja con Ensigna</h2>
                    </div>
                    <img src={desarrollo} alt="desarrollo" width={300}/>
                    <div>
                        <h4 className='fs-5 mt-4 px-3 pb-1 encabezado'>¿Eres docente?, prepara a los estudiantes en habilidades con demanda</h4>
                        <p className='px-3'>Proporcione aprendizaje en línea de clase mundial y relevante para el trabajo para estudiantes, profesores y personal con Coursera for Campus.</p>
                        <section className='px-5 '>
                            <Link to="" className="btn btn-primary">Conocer más</Link>
                        </section>
                    </div>
                </div>
                
                
                <div className="col-lg-6 col-md-10 col-sm-12 mt-5 mx-auto text-center">
                    <div className="text-center">
                        <h2 className='encabezado'>Ensigna para negocios</h2>
                    </div>
                    <img src={empresas} alt="desarrollo" className='my-4' width={300}/>
                    <div className=''>
                        <h4 className='fs-5 mt-5 px-3 pb-1 encabezado'>¿Crecimiento para tu empresa?, Forma a todos los equipos de tu empresa</h4>
                        <p className='px-3'>Proporcione a los empleados aprendizaje basado en el trabajo para desarrollar las habilidades más impactantes que respalden las necesidades de su empresa.</p>
                        <section className='px-5'>
                            <Link to="" className="btn btn-primary">Conocer más</Link>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;