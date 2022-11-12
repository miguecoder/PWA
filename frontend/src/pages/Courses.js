import React from "react";
import Header from '../componentes/Header';
import CursosH from '../componentes/CoursesH';
import FooterU from "../componentes/Footer";
import Services from "../componentes/Services";



function Courses() {
    return (
        <div className="Courses">
            <Header />
            <CursosH />
            <Services />
            <FooterU />
            
        </div>
    );
}
export default Courses;