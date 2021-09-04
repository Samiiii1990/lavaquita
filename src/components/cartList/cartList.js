import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Delete } from "@material-ui/icons";
import "./styles.scss";


const CartList = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } =
    useContext(CartContext);



  return (
    <div className="cart-list">
      <h1>Detalle de Compra</h1>

      {carrito.map((prod) => (
        <div>
          <h3>{prod.nombre}</h3>
          <p>Cantidad :{prod.cantidad} kg</p>
          <p>Precio por kg :$ {prod.precio}</p>
          <p>Precio Total: $ {prod.precio * prod.cantidad}</p>
          <button className="btn btn-outlined">
            <Delete onClick={() => eliminarDelCarrito(prod.id)}/>
          </button>
        </div>
      ))}
      <hr />
      <button className="btn btn-outlined" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};
export default CartList;
