import '../App.css'
import { useContext } from "react"
import { CartContext } from "../contex/CartContext"
import Item from '../components/Item'

const Checkout = () =>{

    const {cart, clear, removeFromCart} = useContext(CartContext)

    return(
        <div>
            <div className='checkoutTitle'>
                <h1>Checkout</h1>
            </div>
            <div className='checkoutButtons'>
                <button onClick={clear}>Clear</button>
            </div>
            <div className='checkoutContainer'>
                <div className="checkoutItems"> 
                    <div>
                        {cart.map(product=>
                            <div className='checkoutItem'>
                                <Item data={product}/>
                                    <button onClick={()=>removeFromCart(product.id)}>Borrar</button>
                                    {console.log(product)}
                                </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout