import React, { useEffect, useState } from "react";
import { solicitarDatos } from "../../helpers/solicitarDatos";
import { ItemList } from "./itemList";
import "./styles.scss";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    solicitarDatos()
      .then((res) => setData(res))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return <>{loading ? <h2>Cargando...</h2> : <ItemList productos={data} />}</>;
};
export default ItemListContainer;
