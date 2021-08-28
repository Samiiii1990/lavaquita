
import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss";

export const Item = ( {img, nombre, desc, precio,id} ) => {


    return (
        <div className="card col-4 background-card">
            <img className="item-img"src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <p>${precio}</p>
            <Link to={`/detail/${id}`} className="btn btn-outlined">Ver Más</Link>
        </div>
    )
}