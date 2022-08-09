import '../App.css'
import { useContext } from "react"
import { CartContext } from "../contex/CartContext"
import Item from '../components/Item'


const Checkout = () =>{

    const {cart, clear} = useContext(CartContext)

    return(
        <div>
            <div className='checkoutTitle'>
                <h1>Checkout</h1>
            </div>
            <div className='checkoutButtons'>
                <button onClick={clear}>Clear</button>
                <button onClick={clear}>Clear</button>
                <button onClick={clear}>Clear</button>
                <button onClick={clear}>Clear</button>
            </div>
            <div className='checkoutContainer'>
                <div className="checkoutItems"> 
                    {cart.map(product=><Item customClass={"customClass"} data={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Checkout