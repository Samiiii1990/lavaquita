import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito, prod]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  const cantCarrito = () => {
    let cantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

    return parseInt(cantidad);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const isInCart = (id) => {
    return carrito.some((el) => el.id === id);
  };


  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        cantCarrito,
        vaciarCarrito,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
