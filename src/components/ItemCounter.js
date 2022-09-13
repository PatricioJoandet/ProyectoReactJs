import { useState, useContext} from "react";
import { CartContext } from "../context/CartContext";
import MyModal from "./MyModal";
import '../App.css'

const ItemCounter = ({product, stock, setQtySelected, setShowModal}) =>{
    
  const stockAv = stock
  const {addToCart} = useContext(CartContext)   

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
    addToCart({...product, QtyCounter})
		setShowModal(true)
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