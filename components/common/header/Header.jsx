import React from "react";
import Navbar from "../navbar";
import './Header.css';

function Header () {

    return (
        <section className="header_">

            {/* LOGO  */}
            <section className="logo">
                Logo
            </section>

            {/* BARRA DE NAVEGACIÓN */}
            <section className="navegacion">
                <Navbar/>
            </section>

            {/* REDES SOCIALES */}
            <section className="redes">
                <section className="correo"> correo@gmail.com </section>
                <section className="face"> mangamon </section>
            </section>
        </section>
    )

}

export default Header;