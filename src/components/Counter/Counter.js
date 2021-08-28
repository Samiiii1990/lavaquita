import React from "react";


const Counter = ({max, cantidad, setCantidad, agregar}) => {



const sumar =()=>{
    if(cantidad<max){
        setCantidad(cantidad+1)
    }
}
const restar =()=>{
    if(cantidad>1){
    setCantidad(cantidad-1)
    }
}
  return (
    <>
    <div className="d-flex justify-content-sm-around">
        <button class="btn btn-outlined" onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button class="btn btn-outlined" onClick={sumar}>+</button>
        <button class="btn btn-outlined"onClick={agregar}>Agregar al Carrito</button>
    </div>
    </>
  );
};
export default Counter;
