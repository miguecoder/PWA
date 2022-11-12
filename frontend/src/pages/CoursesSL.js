import React from "react";
import HeaderL from '../componentes/HeaderL';
import Coursessl from '../componentes/CoursesSL';
import CoursesS from '../componentes/CoursesS';
import FooterU from "../componentes/Footer";
import Services from "../componentes/Services";



function CoursesSL() {
    return (
        <div className="CoursesSL">
            <HeaderL />
            <Coursessl />
            <CoursesS/>
            <Services />
            <FooterU />
            
        </div>
    );
}
export default CoursesSL;