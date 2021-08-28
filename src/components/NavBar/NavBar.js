import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <header className="nav-bar">
      <Link to={"/"}>
      <div className="logo"></div>
      </Link>
        
      <nav>
        <Link to={"/nosotros"}>Nosotros</Link>
        <Link to={"#"}>Ofertas</Link>
        <Link to={"#"}>Recetas</Link>
        <Link to={"/category/vacuna"}>Novillo</Link>
        <Link to={"/category/cerdo"}>Cerdo</Link>
        <Link to={"/category/pollo"}>Pollo</Link>
        <Link to={"/carrito"}>Carrito</Link>
        <Link to={"#"}>Sucursales</Link>
      
      
      </nav>
    </header>
  );
};
export default NavBar;
