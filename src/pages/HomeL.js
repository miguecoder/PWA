import React from "react";
import HeaderL from '../componentes/HeaderL';
import CursosH from '../componentes/CoursesH';
import FooterU from "../componentes/Footer";
import Services from "../componentes/Services";


function HomeL() {
    return (
        <div className="HomeL">
            <HeaderL />
            <CursosH />
            <Services />
            <FooterU />
            
        </div>
    );
}
export default HomeL;