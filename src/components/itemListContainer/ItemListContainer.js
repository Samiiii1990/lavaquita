import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { solicitarDatos } from "../../helpers/solicitarDatos";
import { ItemList } from "./itemList";
import "./styles.scss";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  useEffect( ()=> {
    setLoading(true)

    solicitarDatos()
        .then(res => {

            if (catId) {
                const arrayFiltrado = res.filter( prod => prod.category === catId)
                setData( arrayFiltrado )
            } else {
                setData(res)
            }
        })
        .catch(err => console.log(err))
        .finally(()=> {
            setLoading(false)
        })

}, [catId])

  return <>{loading ? <h2>Cargando...</h2> : <ItemList productos={data} />}</>;
};
export default ItemListContainer;
