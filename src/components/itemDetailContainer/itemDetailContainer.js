import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { solicitarDatos } from "../../helpers/solicitarDatos";
import ItemDetail from "./itemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    solicitarDatos()
      .then((res) => {
        setItem(res.find((prod) => prod.id === parseInt(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return <div>{loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}</div>;
};
