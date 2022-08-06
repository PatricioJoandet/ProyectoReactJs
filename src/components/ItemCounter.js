import { useState } from "react";
import '../App.css'

const ItemCounter = ({stock, setQtySelected}) =>{
    
    const stockAv = stock

    const [QtyCounter, setQtyCounter] = useState(1)
    if(stockAv=== 0){
        return(
            <p>Sin stock</p>
        )
    }

    const addProduct = () =>{
        QtyCounter<stockAv ? setQtyCounter(QtyCounter + 1) : setQtyCounter(stock)
    }

    const subProduct = () =>{
       QtyCounter>1 ? setQtyCounter(QtyCounter - 1) : setQtyCounter(1)
     }


    const onAdd = () => {
        setQtySelected(QtyCounter)
    }

    return(
        <div>
            <div className="itemCounter">
                <button onClick={subProduct}>-</button>
                <span>{QtyCounter}</span>
                <button onClick={addProduct}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter