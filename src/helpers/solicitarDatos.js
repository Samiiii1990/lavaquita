import {stock} from "../data/stock";



export const solicitarDatos=()=>{

    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(stock)
        },2000)
    })
  
}
