
import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss";

export const Item = ( {img, name, description, price,id} ) => {


    return (
        <div className="card col-4 background-card">
            <img className="item-img"src={img} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price} kg</p>
            <Link to={`/detail/${id}`} className="btn btn-outlined">Ver Más</Link>
        </div>
    )
}