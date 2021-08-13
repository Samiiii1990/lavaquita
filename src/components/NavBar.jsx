import React from "react";
import "./styles.scss";
import "../img/logopng.png"


const NavBar = () => {
  return (
    <header className="nav-bar">
        <img src="/home/samanta/lavaquita/src/img/logopng.png" alt="" className="logo"></img>
      <h1>LA VAQUITA</h1>
      <nav>
        <a href="#">Nosotros</a>
        <a href="#">Nuestros Productos</a>
        <a href="#">Sucursales</a>
      </nav>
    </header>
  );
};
export default NavBar;
