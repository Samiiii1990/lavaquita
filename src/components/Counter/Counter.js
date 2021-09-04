import React from "react";
import { Link } from 'react-router-dom';

const Counter = ({ max, cantidad, setCantidad, agregar, agregado }) => {
  const sumar = () => {
    if (cantidad < max) {
      setCantidad(cantidad + 1);
    }
  };
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <>
      <div>
        
        {agregado ? (
          <Link  to="/cart" className="btn btn-success d-flex justify-content-sm-around">
            Terminar mi compra
          </Link>
        ) : (
          <div className="d-flex justify-content-sm-around">
            <button className="btn btn-outlined" onClick={restar}>
              -
            </button>
            <p>{cantidad}</p>
            <button className="btn btn-outlined" onClick={sumar}>
              +
            </button>
            <button className="btn btn-outlined" onClick={agregar}>
              Agregar al Carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Counter;
