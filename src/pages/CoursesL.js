import React from "react";
import HeaderL from '../componentes/HeaderL';
import Miscursos from "../componentes/Miscursos";
import FooterU from "../componentes/Footer";
import Services from "../componentes/Services";



function Courses() {
    return (
        <div className="CoursesL">
            <HeaderL />
            <Miscursos/>
            <Services />
            <FooterU />
            
        </div>
    );
}
export default Courses;