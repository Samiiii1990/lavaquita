import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Delete } from "@material-ui/icons";
import "./styles.scss";

const CartList = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } =
    useContext(CartContext);

  const [hasNotItems, setHasNotItems] = useState(false);

  useEffect(() => {
    if (carrito.length === 0) setHasNotItems(true);
  }, [carrito]);
  const redirect = () => window.location.assign("/");

  const totalInCart = () => {
    let totalProd = 0;
    let totalCompra = 0;
    {
      carrito.map(
        (prod) => (
          (totalProd = prod.precio * prod.cantidad), (totalCompra += totalProd)
        )
      );
    }
    return totalCompra;
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
            <div>
              <h3>{prod.nombre}</h3>
              <p>Cantidad :{prod.cantidad} kg</p>
              <p>Precio por kg :$ {prod.precio}</p>
              <p>Precio Total: $ {prod.precio * prod.cantidad}</p>
              <button className="btn btn-outlined">
                <Delete onClick={() => eliminarDelCarrito(prod.id)} />
              </button>
            </div>
          ))}
          <hr />
          <p className= "total">Total Compra: $ {totalInCart()}</p>
          <hr />
          <button className="btn btn-outlined" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};
export default CartList;
