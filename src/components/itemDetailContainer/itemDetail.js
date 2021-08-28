import React, { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";

const ItemDetail = ({ category, id, nombre, desc, img, precio, stock }) => {
  
  const [cantidad, setCantidad]=useState(1);

  const agregar = ()=>{
    console.log(id, nombre, precio)

  }

  return (
    <div class="card background-card" style={{"width": "18rem"}}>
      <h5 class="card-title">{nombre}</h5>
      <img src={img} class="card-img-top" alt={nombre} />
      <div class="card-body">
        <p>{desc}</p>
        <p>${precio}</p>
      </div>
    <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
    <br/>
      <Link class="btn btn-outlined" to={`category/${category}`}>
        Volver
      </Link>
    </div>
  );
};
export default ItemDetail;
