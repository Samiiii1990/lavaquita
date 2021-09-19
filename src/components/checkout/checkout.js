import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { generarOrden } from "../../firebase/generarOrden";
import "./styles.scss";

export const Checkout = () => {
  const { carrito, cantCarrito, vaciarCarrito } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const inputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      values.nombre.length > 3 &&
      values.email.length > 3 &&
      values.tel.length > 5
    ) {
      generarOrden(values, carrito, cantCarrito())
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Compra realizada con Éxito!",
            text: `El código de su compra es: ${res}, anótelo`,
            confirmButtonText: "OK",
          });

          vaciarCarrito();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Campos inválidos",
        text: "Ingrese la información de forma correcta",
      });
    }
  };

  return (
    <section className="container my-5">
      <h2>Finalizar Compra</h2>
      <hr />

      {!carrito.length ? (
        <Redirect to="/" />
      ) : (
        <div className="formstyle">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                className="form-control"
                type="text"
                value={values.nombre}
                onChange={inputChange}
                name="nombre"
                placeholder="Ingrese su Nombre y Apellido"
                required
              />

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
              </div>
              <input
                className="form-control"
                type="tel"
                value={values.tel}
                onChange={inputChange}
                name="tel"
                placeholder="Ingrese su número telefónico"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
               className="form-control"
                type="email"
                value={values.email}
                onChange={inputChange}
                name="email"
                placeholder="Ingrese su Email"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Comprar
            </button>
          </form>
        </div>
      )}
    </section>
  );
};
