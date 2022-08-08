import carrito from '../img/carrito.svg'
import '../App.css'
import {CartContext} from '../contex/CartContext'
import { useContext } from 'react'

const CartWidget = () => {


  return(
    <div>
      <img src={carrito} alt="carrito" />
      <span>0</span>
    </div>
  )

}

export default CartWidget;