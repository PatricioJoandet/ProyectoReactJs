import { useState } from "react";
import '../App.css'

const ItemCounter = ({stock}) =>{
    
    const stockAv = stock
    let disabled = false

    const [QtyCounter, setQtyCounter] = useState(1)
    
    const addProduct = () =>{
        QtyCounter<stockAv ? setQtyCounter(QtyCounter + 1) : disabled= true
    }

    const subProduct = () =>{
       QtyCounter>1 ? setQtyCounter(QtyCounter - 1) : disabled= true
    }

    return(
        <div className="itemCounter">
            <button onClick={subProduct} disabled={disabled}>-</button>
            <p>{QtyCounter}</p>
            <button onClick={addProduct} disabled={disabled}>+</button>
        </div>
    )
}

export default ItemCounter