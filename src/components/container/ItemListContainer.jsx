import React from "react";
import "./styles.scss";

const ItemListContainer = ({ greeting }) => {
  let mensaje = "Bienvenidos a la Vaquita";

  return (
    <div>
      <div className="font">{greeting}</div>
    </div>
  );
};
export default ItemListContainer;
