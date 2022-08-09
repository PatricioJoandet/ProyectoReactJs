import carrito from '../img/carrito.svg'
import '../App.css'
import {CartContext} from '../contex/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

  const {qty} = useContext(CartContext)

  return(
    <div>
      <img src={carrito} alt="carrito" />
      <span>{qty}</span>
    </div>
  )

}

export default CartWidget;