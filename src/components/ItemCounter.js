import { useState, useContext} from "react";
import { CartContext } from "../context/CartContext";
import MyModal from "./MyModal";
import '../App.css'

const ItemCounter = ({product, stock, setQtySelected, setShowModal, className}) =>{
    
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
    <div className="stockCount">
      <div className="d-flex justify-content-center mb-2">
        <button onClick={subProduct}>-</button>
        <span className="m-2">{QtyCounter}</span>
        <button onClick={addProduct}>+</button>
	    </div>
      <div className="d-flex justify-content-center">
          <button onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCounter