import React from "react";
import "./styles.scss";

const ItemListContainer = (props) => {
const {greeting}=props;

  return (
    <div>
        <div className="font">{greeting}</div>

    </div>
  );
};
export default ItemListContainer;
