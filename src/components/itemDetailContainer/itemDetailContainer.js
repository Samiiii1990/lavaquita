import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./itemDetail";
import ReactLoading from 'react-loading';
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)

    const db = getFirestore()
    const items = db.collection('items')
    const item = items.doc(itemId)

    item.get()
        .then((doc) => {
        setItem( {...doc.data(), id: doc.id} )
        })
        .finally(()=> { setLoading(false)})


}, [itemId, setLoading])


  return (
    <div>
      {loading ? (
       <ReactLoading type={"spinningBubbles"} color={"darkred"} className="loading" />
      ) : (
        <ItemDetail {...item} />
      )}
    </div>
  );
};
