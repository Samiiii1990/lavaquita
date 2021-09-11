import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cantCarrito, carrito } = useContext(CartContext);
  console.log("🚀 ~ file: cartWidget.js ~ line 9 ~ CartWidget ~ carrito", carrito.length)
  const [hasNotItems, setHasNotItems] = useState(false);

  useEffect(() => {
    if (carrito.length === 0) setHasNotItems(true);
    if (carrito.length > 0) setHasNotItems(false);

  }, [carrito]);

  return (
    <div>
      {!hasNotItems && (
        <Link to="/cart">
          <div className="cart-widget">
            <ShoppingCartIcon />
            <span>{cantCarrito()}</span>
          </div>
        </Link>
      )}
    </div>
  );
};
