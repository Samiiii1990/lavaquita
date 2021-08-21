
import React from 'react'
import "./styles.scss";

export const Item = ( {img, nombre, desc, precio} ) => {


    return (
        <div className="card col-4">
            <img className="item-img"src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <p>${precio}</p>
        </div>
    )
}