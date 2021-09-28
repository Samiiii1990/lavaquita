import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";



const NavBar = () => {
  return (
    <header className="nav-bar">
      <Link to={"/"}>
      <img className="logo" src={"../img/logopng.png"} alt={""}></img>
      </Link>
        
      <nav>
        <Link to={"/nosotros"}>Nosotros</Link>
        <Link to={"#"}>Ofertas</Link>
        <Link to={"#"}>Recetas</Link>
        <Link to={"/category/vacuna"}>Novillo</Link>
        <Link to={"/category/cerdo"}>Cerdo</Link>
        <Link to={"/category/pollo"}>Pollo</Link>
        <Link to={"/cart"}>Carrito</Link>
        <Link to={"#"}>Sucursales</Link>
      
      
      </nav>
      <CartWidget/>
    </header>
  );
};
export default NavBar;
