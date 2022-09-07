import carrito from '../img/carrito.svg'
import '../App.css'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

  const {qty} = useContext(CartContext)
  return(
    <div>
      <img src={carrito} alt="carrito" />
      {qty>0?<span>{qty}</span>:""}
    </div>
  )

}

export default CartWidget;