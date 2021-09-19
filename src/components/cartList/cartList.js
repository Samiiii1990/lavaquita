import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Delete } from "@material-ui/icons";
import "./styles.scss";
import { Link } from "react-router-dom";

const CartList = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } =
    useContext(CartContext);

  const [hasNotItems, setHasNotItems] = useState(false);

  useEffect(() => {
    if (carrito.length === 0) setHasNotItems(true);
  }, [carrito]);
  const redirect = () => window.location.assign("/");

  const totalInCart = () => {
    var total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].price * carrito[i].cantidad;
    }
    return total;
  };

  return (
    <div className="cart-list">
      {hasNotItems ? (
        <div>
          <h1>No se han añadido productos al carrito</h1>
          <button className="btn btn-outlined" onClick={redirect}>
            Volver
          </button>
        </div>
      ) : (
        <div>
          <h1>Detalle de Compra</h1>

          {carrito.map((prod) => (
      
            <div id={prod.id} className="cart-with-image">
              <div className="item-info">
                <h3>{prod.name}</h3>
                <p>Cantidad :{prod.cantidad} kg</p>
                <p>Precio por kg :$ {prod.price}</p>
                <p>Precio Total: $ {prod.price * prod.cantidad}</p>
                <button className="btn btn-outlined">
                  <Delete onClick={() => eliminarDelCarrito(prod.id)} />
                </button>
              </div>
              <div>
                <img
                  className="item-img cart-img"
                  src={prod.img}
                  alt={prod.name}
                />
              </div>
            </div>
          ))}
          <hr />
          <p className="total">Total Compra: $ {totalInCart()}</p>
          <hr />
          <button className="btn btn-outlined" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
          <Link to="/checkout">
            <button className="btn btn-success mx-3">Completar Compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default CartList;
