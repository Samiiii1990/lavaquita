import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Counter from "../Counter/Counter";

const ItemDetail = ({ category, id, nombre, desc, img, precio, stock }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    agregarAlCarrito({ category, id, nombre, desc, img, precio, cantidad});
  };

  return (
    <div className="card background-card" style={{ width: "18rem" }}>
      <h5 className="card-title">{nombre}</h5>
      <img src={img} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <p>{desc}</p>
        <p>${precio} Kg</p>
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
  );
};
export default ItemDetail;
