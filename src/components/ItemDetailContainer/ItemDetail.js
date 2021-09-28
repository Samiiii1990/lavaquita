import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Counter from "../Counter/Counter";

const ItemDetail = ({ category, id, name, description, img, price, stock }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    agregarAlCarrito({ category, id, name, description, img, price, cantidad });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card background-card">
        <h5 className="card-title">{name}</h5>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <p>{description}</p>
          <p>${price} Kg</p>
        </div>
        <Counter
          max={stock}
          cantidad={cantidad}
          setCantidad={setCantidad}
          agregar={handleAdd}
          agregado={isInCart(id)}
        />
        <br />
        <Link className="btn btn-outlined" to={`category/${category}`}>
          Volver
        </Link>
      </div>
    </div>
  );
};
export default ItemDetail;
