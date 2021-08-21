import React from "react";
import "./styles.scss";



const NavBar = () => {
  return (
    <header className="nav-bar">
        <div className="logo"></div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Ofertas</a>
        <a href="#">Recetas</a>
        <a href="#">Sucursales</a>
      </nav>
    </header>
  );
};
export default NavBar;
