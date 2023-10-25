import React from 'react';
//import { Link } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


function FooterU() {
    return (
        <div className="footer ">
            <div className="col-md-10 mx-auto text-center">
                <div className="mx-auto py-3" id='equipo'>
                    <h2 className='mb-4 px-5 encabezado'><span className='text-primary'>¡Ensigna</span>  te acompaña a todos lados!</h2>
                    <p className='px-5'>Visualizamos un mundo donde cualquier persona, en cualquier lugar, tiene el poder de transformar su vida a través del aprendizaje.</p>
                    <p className='px-5'>¡Únase a nuestra comunidad global de creadores de progreso y comience a aprender hoy!</p>
                    <button type="button" className="btn btn-success">Instalar Ensigna</button>
                </div>
                <div id="copyright ">
                    <p><small>Ensgina < AiOutlineCopyrightCircle/> 2022 Todos los derechos reservados.</small></p>
                </div>
            </div>
            
        </div>
        
        

    );
}
    
export default FooterU;