import carrito from '../img/carrito.svg'
import '../App.css'

const CartWidget = () => {
  return(
    <div className='carrito'>
      <img src={carrito} alt="carrito" />
      <p>0</p>
    </div>
  )

}

export default CartWidget;