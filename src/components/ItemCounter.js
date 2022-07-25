import { useState } from "react";
import '../App.css'

const ItemCounter = ({stock}) =>{
    
    const stockAv = stock

    const [QtyCounter, setQtyCounter] = useState(1)
    

    const addProduct = () =>{
        QtyCounter<stockAv ? setQtyCounter(QtyCounter + 1) : setQtyCounter(stock)
    }

    const subProduct = () =>{
       QtyCounter>1 ? setQtyCounter(QtyCounter - 1) : setQtyCounter(1)
     }

    return(
        <div className="itemCounter">
            <button onClick={subProduct}>-</button>
            <p>{QtyCounter}</p>
            <button onClick={addProduct}>+</button>
        </div>
    )
}

export default ItemCounter