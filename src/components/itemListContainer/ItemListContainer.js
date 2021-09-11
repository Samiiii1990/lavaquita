import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./itemList";
import "./styles.scss";
import ReactLoading from 'react-loading';
import { getFirestore } from "../../firebase/config";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  useEffect( ()=> {
    setLoading(true)

    const db = getFirestore()
    const items = db.collection('items')

    if (catId) {
        const filtrado = items.where('category', '==', catId)
        filtrado.get()
            .then((response) => {
                const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                console.log(data)
                setData(data)
            })
            .finally(()=> {
                setLoading(false)
            })
    } else {
        items.get()
            .then((response) => {
                const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                console.log(data)
                setData(data)
            })
            .finally(()=> {
                setLoading(false)
            })
    }

}, [catId, setLoading])

  return <>     {loading ? (
    <ReactLoading type={"spinningBubbles"} color={"darkred"} className="loading" />
  ) :( <ItemList productos={data} />)}</>;
};
export default ItemListContainer;
